'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-stretch justify-center">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-start items-center gap-2 pt-8 pl-12">
        <Link
          href="https://dexscreener.com/solana/EAiaEv3i172HtYGC9kK6xJEQqJjYJ5TBsvkaibDBiMkT"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-all duration-300"
        >
          <div className="relative md:w-16 w-8">
            <Image src="/img/dexscreener.png" alt="logo" width={64} height={64} />
          </div>
        </Link>
        <Link
          href="https://t.me/yowieyowie"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-all duration-300"
        >
          <div className="relative md:w-16 w-8">
            <Image src="/img/telegram.png" alt="logo" width={64} height={64} />
          </div>
        </Link>
        <Link
          href="https://x.com/solyowie"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-all duration-300"
        >
          <div className="relative md:w-16 w-8">
            <Image src="/img/x.png" alt="logo" width={64} height={64} />
          </div>
        </Link>
      </header>
      <div className="w-full p-0 md:h-screen h-[320px] relative">
        <Image src="/img/header1_1.webp" alt="header" fill priority loading="eager" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center">
          <div className="flex flex-col justify-center items-center md:w-[650px] md:text-left text-center w-full pb-20 px-12 md:pt-0 pt-40">
            <h1 className="md:text-4xl text-xl font-bold">
              Born in the icy mountains, yowie is a piece of art with an
              infinite universe
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full p-0 md:h-screen h-[320px] relative">
        <Image src="/img/header3_1.webp" alt="header" fill priority loading="eager" />
        <div className="absolute top-0 md:right-48 right-0 md:w-[650px] w-56 mr-5 md:pr-0 h-full flex flex-col justify-center items-center">
          <h2 className="md:text-4xl text-xl font-bold">
            Born in the icy mountains, yowie is a piece of art with an infinite
            universe
          </h2>
        </div>
      </div>
      <div className="w-full p-0 md:h-screen h-[380px] relative md:pt-0 pt-40">
        <Image src="/img/header2_1.webp" alt="header" fill priority loading="eager" />
        <div className="absolute bottom-0 left-0 w-full h-full flex flex-col pb-20 justify-end items-center">
          <h3 className="md:text-4xl text-xl font-bold text-white">
            {"Icy but hot, it's yowie"}
          </h3>
        </div>
      </div>
    </main>
  );
}
