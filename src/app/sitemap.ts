import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://interlinked.dev/",
            lastModified: new Date(),
            alternates: {
                languages: { en: "https://interlinked.dev/", de: "https://interlinked.dev/de" },
            },
        },
        {
            url: "https://interlinked.dev/de",
            lastModified: new Date(),
            alternates: {
                languages: { en: "https://interlinked.dev/", de: "https://interlinked.dev/de" },
            },
        },
    ];
}
