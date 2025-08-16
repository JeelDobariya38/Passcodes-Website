import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] justify-center items-center">
        <img
          className="dark:invert"
          src="public/passcodes-banner.png"
          alt="Passcodes logo"
          width={1024 / 2}
          height={500 / 2}
        />
        <div className="flex flex-col sm:flex-row justify-evenly items-center my-4 bg-slate-900 text-pink-500 rounded p-7">
          <div className="px-4">
            <img
              className="dark:invert"
              src="public/passcodes.png"
              alt="Passcodes logo"
              width={512 / 4}
              height={512 / 4}
            />
          </div>
          <div className="p-4">
            <div className="pb-6 text-lg font-black sm:text-4xl">
              <h1>🥳🥳 Coming Soon!! 🎉🎉</h1>
            </div>
            <div className="text-xs text-cyan-900 sm:text-lg">
              <p>
                Passcodes Website & App will be offically release on <b>17/8</b>
                .
              </p>
              <p>
                Passcodes App will be unoffically (only for special users)
                release on 16/8.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[32px] items-center">
          <img
            className="dark:invert"
            src="public/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
          />
        </div>
      </main>
    </div>
  );
}
