import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQs | Serenity Luxury Condos",
    description:
        "Find answers to frequently asked questions about Serenity Luxury Condos, including purchasing, financing, ownership, amenities, and living in the Riviera Maya.",
};

export default function FAQsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
