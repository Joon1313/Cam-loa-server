const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

function sentryInit(app) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    integrations: [
      // enable HTTP calls tracing
      new Sentry.Integrations.Http({ tracing: true }),
      // enable Express.js middleware tracing
      new Tracing.Integrations.Express({ app }),
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
  // RequestHandler creates a separate execution context using domains, so that every
  // transaction/span/breadcrumb is attached to its own Hub instance
  app.use(Sentry.Handlers.requestHandler());
  // app.get("/", function rootHandler(req, res) {
  //   res.end("Hello world!");
  // });
  // TracingHandler creates a trace for every incoming request
  app.use(Sentry.Handlers.tracingHandler());

  app.use(Sentry.Handlers.errorHandler());
  // app.use(function onError(err, req, res, next) {
  //   // The error id is attached to `res.sentry` to be returned
  //   // and optionally displayed to the user for support.
  //   res.statusCode = 500;
  //   res.end(res.sentry + "\n");
  // });

  console.log("Sentry Init");
}

module.exports = sentryInit;
