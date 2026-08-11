import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    // On the staging deployment (SITE_ENV=staging set as a build variable in
    // Coolify) the whole site is blocked from indexing.
    if (process.env.SITE_ENV === "staging") {
        return { rules: { userAgent: "*", disallow: "/" } };
    }
    return {
        rules: { userAgent: "*", allow: "/" },
        sitemap: "https://interlinked.dev/sitemap.xml",
    };
}
