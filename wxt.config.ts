import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    content_scripts: [
      {
        matches: ["http://localhost:3001/*"],
        js: ["contentScript.js"] 
      }
    ]
  },
  modules: ['@wxt-dev/module-react'],
});
