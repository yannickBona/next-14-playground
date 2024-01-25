import React from "react";

export default async function SlowComponent() {
  const word = await new Promise<string>((resolve, reject) =>
    setTimeout(() => resolve("SLOW COMPONENT"), 2000)
  );

  return <div>{word}</div>;
}
