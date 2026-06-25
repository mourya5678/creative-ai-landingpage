const fs = require("fs");

module.exports = {
  apps: [
    {
      name: "creative-ai-next",
      script: fs.existsSync("server.js") ? "server.js" : "./.next/standalone/server.js",
      instances: "max",
      exec_mode: "cluster",
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
