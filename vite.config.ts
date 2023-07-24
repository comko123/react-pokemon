import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: false,
  base: "./",
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@home", replacement: "/src/pages/home/index" },
      { find: "@direction", replacement: "/src/pages/direction/index" }
    ]
  }
})
