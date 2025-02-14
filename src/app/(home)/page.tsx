import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Client } from "~/app/(home)/client";
import { HydrateClient, trpc } from "~/trpc/server";
export default async function Home() {
  void trpc.hello.prefetch({ text: "HELLO" });
  return (
    <HydrateClient>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary fallback={<div>Error</div>}>
          <Client />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
