import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>DASHBOARD NAVBAR HERE</nav>
      {children}
    </section>
  );
}
