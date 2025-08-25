module.exports = {
  apps: [
    {
      name: 'react-vite-app',
      script: "serve",
      env: {
        PM2_SERVE_PATH: './dist',  // Trỏ đến thư mục dist
        PM2_SERVE_PORT: 3001,
        PM2_SERVE_SPA: 'true',     // Cho React SPA
        PM2_SERVE_HOMEPAGE: '/index.html'
      }
    }
  ]
};