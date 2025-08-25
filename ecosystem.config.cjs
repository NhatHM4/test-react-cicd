module.exports = {
  apps: [
    {
      name: "react-cicd",
      script: "serve",
      args: ["-s", "dist", "-l", "3000"]
    }
  ]
}