const isProdBuild = process.env.BUILD_VARIANT === "production";

if (isProdBuild) {
    console.log("VERBOSE: Build a production Version (next.config.js)");
} else {
    console.log("VERBOSE: Build a Development Version (next.config.js)")
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: isProdBuild ? process.env.BASE_PATH : "",
    assetPrefix: isProdBuild ? process.env.ASSET_PREFIX : "",
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
