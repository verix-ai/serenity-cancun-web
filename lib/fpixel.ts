export const FB_PIXEL_ID = "1274833664508016";

// Define the shape of our window object to include the facebook pixel
declare global {
    interface Window {
        fbq: any;
    }
}

export const pageview = () => {
    if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "PageView");
    }
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}) => {
    if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", name, options);
    }
};

export const customEvent = (name: string, options = {}) => {
    if (typeof window !== "undefined" && window.fbq) {
        window.fbq("trackCustom", name, options);
    }
};
