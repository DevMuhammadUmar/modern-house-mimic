/**
 * Application error reporting.
 * Currently logs to the console; replace the body of `reportError` with
 * a Sentry call (or similar) when you add an error-tracking integration.
 */
export function reportError(error: unknown): void {
  console.error(error);
}
