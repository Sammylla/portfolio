import Image from "next/image";
import { Header } from "@/components/Header";
import { WorksCarousel } from "@/components/WorksCarousel";
import { works } from "@/data/works";

export default function Home() {
  return (
    <main>
      <Header />

      <section id="hero" className="relative aspect-[2330/1522] w-full">
        <Image
          src="/top/hero.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </section>

      <section
        id="introduction"
        className="relative flex h-screen items-center justify-center overflow-hidden border-y border-white/10 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:80px_82px] px-6 py-20 font-mono"
        aria-labelledby="introduction-title"
      >
        <Image
          src="/top/Group36.svg"
          alt="TECH LOVER"
          width={71}
          height={292}
          className="absolute left-0 top-10 hidden w-[53px] md:block"
        />

        <div className="mx-auto w-full max-w-5xl">
          <div className="flex min-h-[100px] items-center justify-center">
            <div className="relative flex items-center justify-center">
              <Image
                src="/top/Group1.png"
                alt=""
                width={283}
                height={66}
                className="absolute z-0 h-auto w-4/5"
              />
              <h2
                id="introduction-title"
                className="relative z-10 text-center text-4xl font-bold uppercase text-white drop-shadow-[4px_4px_0_#151519] md:text-6xl"
              >
                Introduction
              </h2>
            </div>
          </div>

          <div className="mt-12 grid items-center gap-12 md:mt-16 md:grid-cols-[1fr_1.25fr]">
            <div className="flex justify-center">
              <Image
                src="/top/Group32.png"
                alt="こっぺぱんのイラスト"
                width={233}
                height={233}
                className="size-[190px] object-cover md:size-[233px]"
              />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-transparent [-webkit-text-stroke:1px_#d7d7dc] md:text-3xl">
                Kohane Wakamiya
              </h3>
              <div className="mt-8 space-y-2 text-lg text-[#2f60ff] md:text-xl">
                <p>KMC student/engineer</p>
                <p>JQler(&apos;24-&apos;26)</p>
                <p>Writer</p>
                <p className="pt-5">TypeScript/C/C++/</p>
              </div>
            </div>
          </div>
        </div>

        <p className="absolute bottom-10 right-28 hidden text-4xl font-bold text-transparent opacity-25 [-webkit-text-stroke:1px_#fff] md:block">
          Hello,world
        </p>
        <Image
          src="/top/Group34.png"
          alt="下へ"
          width={92}
          height={268}
          className="absolute bottom-8 right-0 w-[60px] md:w-[72px]"
        />
      </section>

      <section id="skills" className="relative flex h-screen min-h-[650px] items-center justify-center overflow-hidden font-mono" aria-labelledby="skills-title">
        <Image
          src="/top/Group45.svg"
          alt=""
          fill
          className="geometric-drift pointer-events-none object-cover"
          sizes="100vw"
        />

        <h2 id="skills-title" className="absolute top-[14%] z-10 text-4xl font-bold uppercase tracking-[.04em] md:text-6xl">
          Skills
        </h2>

        <div className="relative z-10 flex w-full max-w-3xl items-center justify-center gap-8 px-10 md:gap-14">
          <Image src="/top/cpp_logo.png" alt="C++" width={150} height={168} className="h-auto w-[18%] max-w-[150px] object-contain" />
          <Image src="/top/ts-logo-512.png" alt="TypeScript" width={150} height={150} className="h-auto w-[18%] max-w-[150px] object-contain" />
          <Image src="/top/logo512.png" alt="React" width={150} height={150} className="h-auto w-[18%] max-w-[150px] object-contain" />
          <Image src="/top/GitHub_Invertocat_White.png" alt="GitHub" width={150} height={147} className="h-auto w-[18%] max-w-[150px] object-contain" />
        </div>

        <Image
          src="/top/Group46.png"
          alt="Technology Design"
          width={79}
          height={277}
          className="absolute bottom-[15%] right-0 z-10 h-auto w-[55px] md:w-[79px]"
        />
      </section>

      <section id="works" className="h-[100svh] min-h-[600px] md:min-h-[650px]" aria-label="Works">
        <WorksCarousel works={works} />
      </section>

      <section
        id="contact"
        className="relative flex min-h-screen items-center overflow-hidden px-5 py-24 font-mono md:px-10"
        aria-labelledby="contact-title"
      >
        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-16 md:grid-cols-[.8fr_1.2fr] md:gap-24">
          <div>
            <p className="mb-5 text-sm text-[#2f60ff]">04 / CONTACT</p>
            <h2 id="contact-title" className="text-5xl font-bold uppercase leading-none md:text-7xl">Contact</h2>
            <p className="mt-8 max-w-sm text-sm leading-7 text-white/65">
              制作のご相談やご質問など、お気軽にご連絡ください。
            </p>
            <div className="mt-12 flex items-center gap-3 text-xs text-white/45">
              <span className="size-2 animate-pulse rounded-full bg-[#2f60ff]" />
              FORM UI / BACKEND PENDING
            </div>
          </div>

          <form className="space-y-8" aria-describedby="contact-status">
            <label className="block">
              <span className="mb-3 block text-xs uppercase tracking-widest text-[#2f60ff]">01 / Name</span>
              <input
                type="text"
                name="name"
                placeholder="YOUR NAME"
                className="w-full border-0 border-b border-white/35 bg-transparent px-0 py-3 text-lg text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#2f60ff]"
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-xs uppercase tracking-widest text-[#2f60ff]">02 / Email</span>
              <input
                type="email"
                name="email"
                placeholder="YOUR@EMAIL.COM"
                className="w-full border-0 border-b border-white/35 bg-transparent px-0 py-3 text-lg text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#2f60ff]"
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-xs uppercase tracking-widest text-[#2f60ff]">03 / Message</span>
              <textarea
                name="message"
                rows={4}
                placeholder="WRITE YOUR MESSAGE..."
                className="w-full resize-none border-0 border-b border-white/35 bg-transparent px-0 py-3 text-lg text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#2f60ff]"
              />
            </label>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p id="contact-status" className="text-[10px] uppercase tracking-widest text-white/35">Demo form — sending is not connected</p>
              <button type="button" className="border border-[#2f60ff] bg-[#2f60ff] px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-transparent">
                SEND MESSAGE &gt;
              </button>
            </div>
          </form>
        </div>

        <footer className="absolute inset-x-5 bottom-6 flex justify-between border-t border-white/15 pt-4 text-[10px] uppercase tracking-widest text-white/40 md:inset-x-10">
          <span>© 2026 @KOPPEPAN</span>
          <a href="#hero" className="transition-colors hover:text-white">Back to top ↑</a>
        </footer>
      </section>
    </main>
  );
}
