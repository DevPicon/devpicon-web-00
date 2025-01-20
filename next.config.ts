import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Exporta como aplicación estática
  basePath: "/devpicon", // Reemplaza <nombre-del-repo> con el nombre de tu repositorio
  assetPrefix: "/devpicon/", // Asegúrate de usar el mismo nombre que en basePath
};

export default nextConfig;
