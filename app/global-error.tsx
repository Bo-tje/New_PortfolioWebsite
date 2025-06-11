"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

type ErrorDetails = {
    message: string;
    stack?: string;
};

export default function GlobalError({ error }: { error: ErrorDetails }) {
    useEffect(() => {
        Sentry.captureException(new Error(error.message));
    }, [error.message]);

    return (
        <html>
        <body>
        <h1>Something went wrong!</h1>
        <p>{error.message}</p>
        {error.stack && <pre>{error.stack}</pre>}
        </body>
        </html>
    );
}