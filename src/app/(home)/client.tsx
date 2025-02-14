"use client";

import { trpc } from "~/trpc/client";

export function Client() {
  const [data] = trpc.hello.useSuspenseQuery({ text: "HELLO" });
  return <div>Client component says: {data.greeting}</div>;
}
