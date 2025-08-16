const basePathEnv = process.env.BASE_PATH;
const assetPrefixEnv = process.env.ASSET_PREFIX;

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: basePathEnv ? basePathEnv : "",
    assetPrefix: assetPrefixEnv ? assetPrefixEnv : "",
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
