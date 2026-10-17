module.exports = {
  // ─── CREDENTIALS ──────────────────────────────────────
  tokenBot: "8998897675:AAFsr9Tvnmkv2lFDdIH9V1zZJNsCyYorWgM",
  ownerID: "7043363273",
  botUsername: "dhanmodebot", //gausah pake @
  logChannel: "@victoriascript", //Chanel notifikasi 
  GROQ_API_KEY: "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",
  GROQ_API_KEY2: "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",

  // ─── CHANNELS & LINKS ─────────────────────────────────
  REQUIRED_CHANNEL: ["@victoriascript"],
  OWNER_LINK: "https://t.me/rp1st",
  THUMBNAIL_URL: "https://files.catbox.moe/c2wyad.jpg",

  // ─── PERFORMANCE & TIMEOUTS (v4.3 OPTIMIZED) ───────────
  // ✅ TESFUNC_DELAY_MS removed (instant send 0ms)
  // ✅ Concurrent limit: 5 (automatic in TesFunc)
  TESFUNC_MAX_ITERATIONS: 1000,      // Max sends per command
  API_TIMEOUT_SECONDS: 60,           // API call timeout
  FUNCTION_TIMEOUT_SECONDS: 10,      // Per-function timeout
  
  // ─── HARDCAP SETTINGS ─────────────────────────────────
  FIXERROR_MAX_PASS: 5,              // Max error fixing passes
  FIXBESE_MAX_PASS: 3,               // Max script fixing passes

  // ─── WA POPUP API ─────────────────────────────────────
  // URL API server (wa-popup-api), sesuaikan dengan domain & port Pterodactyl
  WA_API_BASE: process.env.WA_API_BASE || "http://node-dravnthedex.dhannhost.my.id:25568",
  WA_API_KEY:  process.env.WA_API_KEY  || ""   // kosong = tanpa auth
};
