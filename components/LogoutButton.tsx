"use client";
import { signOut } from "next-auth/react";
import React from "react";

export default function LogoutButton() {
  return (
    <button
      className=" text-zinc-900 bg-stone-200 p-2 rounded-md flex gap-2 items-center text-sm"
      onClick={() => signOut()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="w-5 h-5"
      >
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" x2="9" y1="12" y2="12" />
      </svg>
      Logout
    </button>
  );
}
