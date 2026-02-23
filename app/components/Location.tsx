"use client";

import { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "../context/LanguageContext";

/* ────────────────────────────────────────── constants ── */

// Serenity Condos — Zona Continental de Isla Mujeres (placeholder)
const SERENITY_COORDS: [number, number] = [21.2575, -86.7453];

interface Hotspot {
    id: string;
    coords: [number, number];
    category: "transport" | "beach" | "hotelZone" | "shopping" | "culture" | "city" | "ecoPark" | "landmark" | "snorkeling";
    emoji: string;
}

const HOTSPOTS: Hotspot[] = [
    { id: "airport", coords: [21.0365, -86.8771], category: "transport", emoji: "✈️" },
    { id: "islaBlanca", coords: [21.3957, -86.7834], category: "beach", emoji: "🏖️" },
    { id: "puertoJuarez", coords: [21.1747, -86.8091], category: "beach", emoji: "🏖️" },
    { id: "playaDelfines", coords: [21.0465, -86.7722], category: "beach", emoji: "🏖️" },
    { id: "playaTortugas", coords: [21.1320, -86.7540], category: "beach", emoji: "🏖️" },
    { id: "zonaHotelera", coords: [21.0930, -86.7680], category: "hotelZone", emoji: "🏨" },
    { id: "mercado28", coords: [21.1618, -86.8326], category: "shopping", emoji: "🛍️" },
    { id: "parquePalapas", coords: [21.1578, -86.8263], category: "culture", emoji: "🌴" },
    { id: "downtown", coords: [21.1619, -86.8515], category: "city", emoji: "🏙️" },
    { id: "xcaret", coords: [20.5811, -87.1180], category: "ecoPark", emoji: "🎢" },
    { id: "tulum", coords: [20.2145, -87.4291], category: "landmark", emoji: "🏛️" },
    { id: "puertoMorelos", coords: [20.8503, -86.8754], category: "snorkeling", emoji: "🐠" },
];

/* ────────────────────────── haversine distance (km) ── */

function haversine(a: [number, number], b: [number, number]): number {
    const R = 6371;
    const dLat = ((b[0] - a[0]) * Math.PI) / 180;
    const dLon = ((b[1] - a[1]) * Math.PI) / 180;
    const sinLat = Math.sin(dLat / 2);
    const sinLon = Math.sin(dLon / 2);
    const h =
        sinLat * sinLat +
        Math.cos((a[0] * Math.PI) / 180) *
        Math.cos((b[0] * Math.PI) / 180) *
        sinLon * sinLon;
    return R * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

function estimateDriveMin(km: number): number {
    // ~50 km/h average in the region
    return Math.round((km / 50) * 60);
}

/* ──────────────────────────────── map sub-component ── */

const MapView = dynamic(
    () =>
        import("react-leaflet").then((mod) => {
            const { MapContainer, TileLayer, Marker, Popup, useMap } = mod;
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            const L = require("leaflet");

            /* gold pin for Serenity */
            const serenityIcon = new L.DivIcon({
                className: "",
                html: `<div style="
                    width:32px;height:32px;border-radius:50%;
                    background:linear-gradient(135deg,#bda887,#d4c5a9);
                    border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.4);
                    display:flex;align-items:center;justify-content:center;
                "><svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='#242323' stroke-width='2.5'><path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z'/><circle cx='12' cy='9' r='2.5'/></svg></div>`,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
                popupAnchor: [0, -34],
            });

            /* hotspot pin */
            const hotspotIcon = (emoji: string, active: boolean) =>
                new L.DivIcon({
                    className: "",
                    html: `<div style="
                        width:${active ? 38 : 30}px;height:${active ? 38 : 30}px;border-radius:50%;
                        background:${active ? "#bda887" : "#242323"};
                        border:2px solid ${active ? "#fff" : "#bda887"};
                        box-shadow:0 2px 6px rgba(0,0,0,.45);
                        display:flex;align-items:center;justify-content:center;
                        font-size:${active ? 18 : 14}px;
                        transition:all .2s;
                    ">${emoji}</div>`,
                    iconSize: [active ? 38 : 30, active ? 38 : 30],
                    iconAnchor: [active ? 19 : 15, active ? 38 : 30],
                    popupAnchor: [0, active ? -40 : -32],
                });

            /* helper to fly to a point */
            function FlyTo({ coords }: { coords: [number, number] | null }) {
                const map = useMap();
                useEffect(() => {
                    if (coords) map.flyTo(coords, 12, { duration: 1 });
                }, [coords, map]);
                return null;
            }

            return function InnerMap({
                activeId,
                onSelect,
                hotspotNames,
            }: {
                activeId: string | null;
                onSelect: (id: string) => void;
                hotspotNames: Record<string, string>;
            }) {
                const flyCoords = useMemo(() => {
                    if (!activeId) return null;
                    const h = HOTSPOTS.find((x) => x.id === activeId);
                    return h ? h.coords : null;
                }, [activeId]);

                return (
                    <MapContainer
                        center={SERENITY_COORDS}
                        zoom={10}
                        scrollWheelZoom={false}
                        style={{ height: "100%", width: "100%", borderRadius: "0.5rem" }}
                        attributionControl={false}
                    >
                        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
                        <FlyTo coords={flyCoords} />

                        {/* Serenity marker */}
                        <Marker position={SERENITY_COORDS} icon={serenityIcon}>
                            <Popup>
                                <strong>Serenity Luxury Condos</strong>
                            </Popup>
                        </Marker>

                        {/* Hotspot markers */}
                        {HOTSPOTS.map((h) => (
                            <Marker
                                key={h.id}
                                position={h.coords}
                                icon={hotspotIcon(h.emoji, activeId === h.id)}
                                eventHandlers={{ click: () => onSelect(h.id) }}
                            >
                                <Popup>
                                    <strong>{hotspotNames[h.id]}</strong>
                                    <br />
                                    {Math.round(haversine(SERENITY_COORDS, h.coords))} km
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                );
            };
        }),
    { ssr: false, loading: () => <div className="h-full w-full bg-deep-dark/50 rounded-lg animate-pulse" /> }
);

/* ─────────────────────────────── main component ── */

export default function Location() {
    const { translations } = useLanguage();
    const t = translations.amenities.location;
    const [activeId, setActiveId] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const hotspotNames: Record<string, string> = useMemo(() => {
        const names: Record<string, string> = {};
        HOTSPOTS.forEach((h) => {
            names[h.id] = (t.hotspots as Record<string, string>)[h.id] ?? h.id;
        });
        return names;
    }, [t.hotspots]);

    return (
        <section className="py-24 bg-deep-dark text-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                        {t.label}
                    </span>
                    <h2 className="font-display text-5xl font-bold uppercase">
                        {t.titlePrefix}
                        <span className="text-primary">{t.titleHighlight}</span>
                        {t.titleSuffix}
                    </h2>
                    <p className="max-w-2xl mx-auto mt-6 text-gray-400">
                        {t.description}
                    </p>
                </div>

                {/* Map + Sidebar */}
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Map */}
                    <div className="lg:col-span-3 aspect-square lg:aspect-auto lg:min-h-[520px] rounded-lg overflow-hidden relative">
                        {mounted && (
                            <>
                                {/* Leaflet CSS — injected once */}
                                {/* eslint-disable-next-line @next/next/no-css-tags */}
                                <link
                                    rel="stylesheet"
                                    href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                                />
                                <MapView
                                    activeId={activeId}
                                    onSelect={setActiveId}
                                    hotspotNames={hotspotNames}
                                />
                            </>
                        )}
                    </div>

                    {/* Sidebar list */}
                    <div className="lg:col-span-2 space-y-2 max-h-[520px] overflow-y-auto pr-2 custom-scrollbar">
                        {HOTSPOTS.map((h) => {
                            const km = Math.round(haversine(SERENITY_COORDS, h.coords));
                            const mins = estimateDriveMin(km);
                            const isActive = activeId === h.id;
                            return (
                                <button
                                    key={h.id}
                                    onClick={() => setActiveId(isActive ? null : h.id)}
                                    className={`w-full text-left px-5 py-4 rounded-lg transition-all duration-300 flex items-center gap-4 cursor-pointer group ${isActive
                                        ? "bg-primary/20 border border-primary/40"
                                        : "bg-white/5 hover:bg-white/10 border border-transparent"
                                        }`}
                                >
                                    <span className="text-2xl flex-shrink-0">{h.emoji}</span>
                                    <div className="flex-1 min-w-0">
                                        <p className={`font-display text-lg uppercase tracking-wide truncate ${isActive ? "text-primary" : "text-white"}`}>
                                            {hotspotNames[h.id]}
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            {(t.categories as Record<string, string>)[h.category]}
                                        </p>
                                    </div>
                                    <div className="text-right flex-shrink-0">
                                        <p className={`font-display text-lg font-bold ${isActive ? "text-primary" : "text-white"}`}>
                                            {km} km
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            ~{mins} {t.minutes}
                                        </p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Custom scrollbar */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 2px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #bda887;
                    border-radius: 2px;
                }
            `}</style>
        </section>
    );
}
