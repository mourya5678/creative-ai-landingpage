const https = require('https');

const checkUrl = (url) => {
  return new Promise((resolve) => {
    const req = https.get(url, (res) => {
      resolve(res.statusCode);
      req.destroy();
    });
    req.on('error', () => {
      resolve(500);
    });
    req.setTimeout(3000, () => {
      resolve(408);
      req.destroy();
    });
  });
};

async function run() {
  const urls = [
    "https://api.creativethoughts.ai/CreativeAI_V01.mp4",
    "https://api.creativethoughts.ai/CreativeAI.mp4",
    "https://api.creativethoughts.ai/creativeai.mp4",
    "https://api.creativethoughts.ai/CreativeAI_V02.mp4",
    "https://api.creativethoughts.ai/CreativeAI_V01_no_audio.mp4",
    "https://api.creativethoughts.ai/CreativeAI_V01_muted.mp4"
  ];

  for (const url of urls) {
    const status = await checkUrl(url);
  }
}

run();
