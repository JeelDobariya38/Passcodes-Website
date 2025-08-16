import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 justify-center items-center">
        <div className="flex flex-col sm:flex-row justify-evenly items-center my-4 bg-slate-900 text-pink-500 rounded p-7">
          <div className="px-4">
            <Image
              className="dark:invert"
              src="/passcodes.png"
              alt="Passcodes logo"
              width={200}
              height={100}
              priority
            />
          </div>
          <div>
            <div className="pb-6 text-4xl font-black">
              <h1>🥳🥳 Coming Soon!! 🎉🎉</h1>
            </div>
            <div className="text-lg text-cyan-900">
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
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
      </main>
    </div>
  );
}
