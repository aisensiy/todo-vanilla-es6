var host = process.env.SELENIUM_HOST || 'localhost';
var port = process.env.SELENIUM_PORT || 4444;
console.log(host);
console.log(port);

module.exports = {
  "src_folders": [
    "specs"
  ],
  "output_folder": "reports",
  "custom_commands_path": "",
  "custom_assertions_path": "",
  "globals_path": "",
  "test_settings": {
    "default": {
      "selenium_host": host,
      "selenium_port": port,
      "launch_url": "http://localhost:5000",
      "silent": true,
      "screenshots": {
        "enabled": true,
        "path": "reports"
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
}
