export type Work = {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  image: string;
  gallery: string[];
  description: string;
};

export const works: Work[] = [
  {
    slug: "mobile-eco-cycle",
    title: "Mobile Eco Cycle Design",
    subtitle: "移動型資源循環施設の外装・体験デザイン",
    period: "nov,2024",
    image: "/top/mobaeco.JPG",
    gallery: ["/top/mobaeco.JPG", "/top/mobaeco.JPG", "/top/mobaeco.JPG"],
    description:
      "高専一年時に株式会社技研製作所様より高専に寄贈された自動式駐輪場mobile eco cycleの学内デザインコンペで採択され、外幕デザインを担当しました。",
  },
  {
    slug: "marugotosai2026-web",
    title: "marugotosai2026 web",
    subtitle: "まるごと祭2026 Webサイト",
    period: "2026/ sep",
    image: "/top/marugotosai.png",
    gallery: ["/top/marugotosai.png", "/top/marugotosai.png", "/top/marugotosai.png"],
    description: `まるごと祭2026のwebサイトの実装を担当しました。
three.jsを使用し、スクロールと共に3Dでアニメーションが行われるなど、インタラクティブな体験をスムーズにできるよう心がけました。`,
  },
  {
    slug: "pafeni-amaete-web-app",
    title: "パフェに甘えて。-web app-",
    subtitle: "「パフェに甘えて」の振り返り体験Webアプリ",
    period: "2026/03",
    image: "/top/pafeniamaete.png",
    gallery: ["/top/pafeniamaete.png", "/top/pafeniamaete.png", "/top/pafeniamaete.png"],
    description: `"パフェに甘えて"の振り返り体験、webアプリ開発を担当しました。
openAI APIとの連携によるAIとの対話、レスポンシブ対応など全体の体験をそっと支えるようなスムーズな設計を心がけました。`,
  },
  {
    slug: "manna",
    title: "Manna",
    subtitle: "学内テックナレッジベース",
    period: "2026/4",
    image: "/top/manna.png",
    gallery: ["/top/manna.png", "/top/manna.png", "/top/manna.png"],
    description: `学内テックナレッジベースの開発を行いました。学生同士で質問し合うFAQスレッドなど、複数の機能を搭載。
テクノロジーを始めるハードルを下げる。そのために、「書いた人が身近にいる説明書」をつくる。これがMannaに込められた思想です。`,
  },
];

export function getWorkBySlug(slug: string) {
  return works.find((work) => work.slug === slug);
}
