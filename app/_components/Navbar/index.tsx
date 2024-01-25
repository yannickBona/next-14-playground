"use client";
import Link from "next/link";
import React from "react";
import { StyledMainNavbar } from "./styled";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  const currentPath = usePathname();

  const paths = [
    { path: "/", content: "HOME" },
    { path: "/dashboard", content: "Dashboard" },
    {
      path: `/dashboard/3`,
      content: `Go to page: 3`,
    },
  ];

  return (
    <StyledMainNavbar>
      <ul style={{ display: "flex", gap: "2rem", padding: "1rem" }}>
        {paths.map((p) => (
          <li key={p.path} className={p.path === currentPath ? "active" : ""}>
            <Link suppressHydrationWarning href={p.path}>
              {p.content}
            </Link>
          </li>
        ))}
      </ul>
    </StyledMainNavbar>
  );
}
