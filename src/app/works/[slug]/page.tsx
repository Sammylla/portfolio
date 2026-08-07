import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkBySlug, works } from "@/data/works";
import { TerminalDescription } from "@/components/TerminalDescription";
import { Header } from "@/components/Header";
import { withBasePath } from "@/lib/basePath";

export function generateStaticParams() {
  return works.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  return work ? { title: `${work.title} — koha_koppepan portfolio`, description: work.subtitle } : {};
}

function PerspectiveGrid() {
  const edgePoints = Array.from({ length: 17 }, (_, index) => index * 75);
  const horizontalLines = Array.from({ length: 8 }, (_, index) => {
    const offset = 26 * index * index;
    return 310 + offset;
  });

  return (
    <svg className="absolute inset-0 size-full" viewBox="0 0 1200 1100" preserveAspectRatio="none" aria-hidden="true">
      <g fill="none" stroke="#2f60ff" strokeWidth="0.7" opacity="0.32">
        {edgePoints.map((point) => <line x1="600" y1="280" x2={point} y2="1100" key={`bottom-${point}`} />)}
        {edgePoints.map((point) => <line x1="600" y1="280" x2={point} y2="0" key={`top-${point}`} />)}
        {horizontalLines.map((y) => <line x1="0" y1={y} x2="1200" y2={y} key={`horizontal-${y}`} />)}
      </g>
    </svg>
  );
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  return (
    <main className="min-h-screen overflow-hidden bg-mainbg pt-[70px] font-mono text-white">
      <Header alwaysVisible />

      <section className="relative min-h-[calc(100svh-70px)] overflow-hidden pb-20">
        <PerspectiveGrid />

        <Link href="/#works" className="absolute left-4 top-4 z-20 bg-white" aria-label="作品一覧へ戻る">
          <Image src={withBasePath("/top/Frame7.png")} alt="Back" width={173} height={53} className="h-auto w-[110px] md:w-[130px]" />
        </Link>

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 pb-10 pt-20 md:px-10 md:pt-16">
          <h1 className="sr-only">{work.title}</h1>

          <div className="relative aspect-[3/2] w-[82vw] max-w-[760px] overflow-hidden md:w-[58vw]">
            <Image
              className="object-cover"
              src={withBasePath(work.image)}
              alt={`${work.title}のメインビジュアル`}
              fill
              priority
              sizes="(max-width: 767px) 82vw, 760px"
            />
          </div>

          <div className="mt-8">
            <TerminalDescription title={work.title} period={work.period} description={work.description} />
          </div>

          <div className="scrollbar-hidden mt-20 flex w-[calc(100vw-40px)] snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:w-full sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:pb-0">
            {work.gallery.map((image, index) => (
              <div className="relative aspect-[4/3] w-[82vw] shrink-0 snap-center overflow-hidden sm:w-auto" key={`${image}-${index}`}>
                <Image
                  className="object-cover"
                  src={withBasePath(image)}
                  alt={`${work.title}の詳細画像 ${index + 1}`}
                  fill
                  sizes="(max-width: 639px) 90vw, 30vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
