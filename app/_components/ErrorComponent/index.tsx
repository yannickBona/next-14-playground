// "use client";
import React from "react";

export default async function ErrorComponent() {
  await new Promise((resolve) => setTimeout(() => resolve("CIAO"), 10000));
  throw new Error("CIAO");

  return <div>ciao</div>;
}
