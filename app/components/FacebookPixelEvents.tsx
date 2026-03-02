"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview } from "../../lib/fpixel";

export const FacebookPixelEvents = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Only trigger page views if the pathname actually exists
        if (pathname) {
            pageview();
        }
    }, [pathname, searchParams]);

    return null;
};
