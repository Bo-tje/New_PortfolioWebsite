// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.   
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f1ba4b3013fd6ef30d7c9a4be75b3a3b@o4509072123822080.ingest.de.sentry.io/4509072129982544",

  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});