import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full bg-black text-white flex flex-col items-center justify-center p-10 gap-10">
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority/>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" href="/login" target="_blank" rel="noopener noreferrer">
            LogIn
          </a>
          <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" href="/register" target="_blank" rel="noopener noreferrer">
            Register
          </a>
        </div>
    </main>
  );
}
