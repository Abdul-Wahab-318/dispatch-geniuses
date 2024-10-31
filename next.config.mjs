/** @type {import('next').NextConfig} */
const nextConfig = {
    output : 'export',
    trailingSlash: true,
    images: {
        unoptimized : true,
        domains: ["images.ctfassets.net"], // add your allowed image domains here
    },
};

export default nextConfig;
