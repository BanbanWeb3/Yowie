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
        >
          <Image src="/img/dexscreener.png" alt="logo" width={64} height={64} />
        </Link>
        <Link
          href="https://t.me/yowieyowie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/img/telegram.png" alt="logo" width={64} height={64} />
        </Link>
        <Link
          href="https://x.com/solyowie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/img/x.png" alt="logo" width={64} height={64} />
        </Link>
      </header>
      <div className="w-full p-0 h-screen relative">
        <Image src="/img/header1.jpeg" alt="header" fill />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center">
          <div className="flex flex-col justify-center items-center w-[650px] pb-20">
            <h1 className="text-4xl font-bold">
              Born in the icy mountains, yowie is a piece of art with an
              infinite universe
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full p-0 h-screen relative">
        <Image src="/img/header3.jpeg" alt="header" fill />
        <div className="absolute top-0 right-48 w-[650px] h-full flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold">
            Born in the icy mountains, yowie is a piece of art with an infinite
            universe
          </h2>
        </div>
      </div>
      <div className="w-full p-0 h-screen relative">
        <Image src="/img/header2.jpeg" alt="header" fill />
        <div className="absolute bottom-0 left-0 w-full h-full flex flex-col pb-20 justify-end items-center">
          <h3 className="text-4xl font-bold text-white">
            {"Icy but hot, it's yowie"}
          </h3>
        </div>
      </div>
    </main>
  );
}
