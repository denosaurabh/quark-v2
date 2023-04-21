import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Quark</title>
      </Head>

      <main className="flex min-h-screen w-full flex-col gap-8 p-6 lg:p-24">
        <div className="w-full flex flex-col gap-5 justify-between font-mono text-sm items-start lg:flex-row lg:items-center">
          <p className="justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl w-auto rounded-xl border bg-gray-200 p-4">
            <code className="font-mono font-bold">Quark</code>&nbsp;- helping
            creatives showcase their work through web experiences
          </p>
          <div className="flex items-end justify-center from-white via-white lg:static h-auto w-auto bg-none">
            <p>by</p>
            <a
              href="https://denosaurabh.me"
              target="_blank"
              className="ml-2 hover:underline underline-offset-4"
            >
              @denosaurabh
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5 max-w-5xl">
          <h5 className="text-zinc-800 font-medium">
            what&apos;s this and for who?
          </h5>
          <p className="text-zinc-600 text-sm gap-1 font-mono">
            if you are a creative looking to showcase your work on web, through
            a web game. Quark is for you. We wish to help writers bring their
            stories on web through art, and help indie game-devs showcase their
            games on web. Especially in form of 2D Parallax & 2D/3D Isometric.
            <br />
            whatever art style you love, we are happy to build a beautiful
            experience for you.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h5 className="text-zinc-800 font-medium">looking for demos?</h5>

          <div className="flex flex-col gap-3">
            <Link
              href="/demos/platformer-1"
              className="text-zinc-600 text-sm gap-1 font-mono underline-offset-4 hover:underline hover:cursor-pointer"
            >
              2D Parallax demo - simple sketch
            </Link>
            <p className="text-zinc-500 text-sm gap-1 italic font-mono underline-offset-4">
              2D Isometric - coming soon..
            </p>
            <p className="text-zinc-500 text-sm gap-1 italic font-mono underline-offset-4">
              3D Isometric - coming soon..
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h5 className="text-zinc-800 font-medium">who am i?</h5>
          <p className="font-mono text-zinc-600 text-sm max-w-5xl">
            yo, I am denosaurabh. I have been working as a Software Engineer for
            the past 4 years, and now I have growing interest in Art, especially
            Nature Art.
            <br />
            Though I love mostly every art style, my absolute favourites are
            Tonalism & Ghibli.
            <br />
            <br />
            so I thought why not to create a small studio helping other
            creatives bring their artistic visions on web :)
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h5 className="text-zinc-800 font-medium">past clients</h5>
          <p className="text-zinc-600 text-sm gap-1 font-mono decoration-zinc-500 underline underline-offset-4 decoration-wavy">
            be our first
          </p>

          <p className="font-mono text-zinc-600 text-sm max-w-5xl">
            to be clear it&apos;s a very new studio and we don&apos;t have much
            experience doing professional art. for this reason, we are happy to
            work with you with small budgets :)
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h5 className="text-zinc-800 font-medium">shall we begin :)</h5>

          <p className="text-zinc-700 font-mono text-sm">
            don&apos;t worry about sending a lengthy formal email... we
            understand you are hardworking creatives with busy schedules.
            <br />
            <br />
            tell us what you are writing, building or creating. even just a
            title or a short description will make us happy.
          </p>

          <div className=">text-zinc-600 text-sm flex flex-col gap-1 font-mono">
            <p>
              <span className="text-zinc-500 font-light">email</span> -
              denosaurabh@gmail.com
            </p>
            <p>
              <span className="text-zinc-500 font-light">twitter</span> -
              @denosaurabh
            </p>
            <p>
              <span className="text-zinc-500 font-light">discord</span> -
              denosaurabh#8275
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
