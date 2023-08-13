"use client";
import { signIn } from "next-auth/react";
import React from "react";

export default function LoginButton() {
  return (
    <button
      className=" text-zinc-900 bg-stone-200 p-2 rounded-md flex gap-2 items-center text-sm"
      onClick={() => signIn("google")}
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
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
        <polyline points="10 17 15 12 10 7" />
        <line x1="15" x2="3" y1="12" y2="12" />
      </svg>
      Login
    </button>
  );
}
