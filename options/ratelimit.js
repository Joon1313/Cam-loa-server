const limitOptions = {
  windowMs: 10 * 60 * 1000, // 10분
  max: 150, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
};

module.exports = limitOptions;
