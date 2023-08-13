import LoginButton from "@/components/LoginButton";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";
import LogoutButton from "@/components/LogoutButton";
import Link from "next/link";

export default async function Home() {
  // Gets users session on the server side. If no session exists, returns null
  const session = await getServerSession(authOptions);

  return (
    <main className="flex min-h-screen flex-col items-center gap-20 p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link href="/" className="hover:border-gray-200/70 hover:shadow-md hover:shadow-gray-300/10 transition-colors fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30">
          App Router&nbsp;
          <code className="font-mono font-bold">Firebase Auth</code>
        </Link>
        <Link
          href="/public"
          className="hover:border-gray-200/70 hover:shadow-md hover:shadow-gray-300/10 transition-colors fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30"
        >
          Public Page
        </Link>
        <Link
          href="/protected"
          className="hover:border-gray-200/70 hover:shadow-md hover:shadow-gray-300/10 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30"
        >
          Protected Page
        </Link>
      </div>

      <div className="">
        {session ? (
          <div className="flex flex-row items-center gap-2 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] before:z-[-10]">
            {session?.user?.image && (
              <Image
                src={session?.user?.image}
                alt="user image"
                width={50}
                height={50}
                className="rounded-full"
              />
            )}
            <div className="flex flex-col">
              <span className="font-bold text-xl">{session?.user?.name}</span>
              <LogoutButton />
            </div>
          </div>
        ) : (
          <LoginButton />
        )}
      </div>
    </main>
  );
}
