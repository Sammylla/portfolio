export type Work = {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  category: string;
  image: string;
  gallery: string[];
  color: string;
  description: string;
  challenge: string;
  approach: string;
  roles: string[];
  tools: string[];
};

export const works: Work[] = [
  {
    slug: "mobile-eco-cycle",
    title: "Mobile Eco Cycle Design",
    subtitle: "移動型資源循環施設の外装・体験デザイン",
    period: "2025",
    category: "Spatial / Graphic Design",
    image: "/top/mobaeco.JPG",
    gallery: ["/top/mobaeco.JPG", "/top/mobaeco.JPG", "/top/mobaeco.JPG"],
    color: "#2f60ff",
    description:
      "資源循環の仕組みを身近に伝える、移動型施設「Mobile Eco Cycle」のデザインプロジェクトです。施設の外装からサイン、訪れた人の体験までを一貫して設計しました。",
    challenge:
      "環境技術の専門的な内容を、幅広い年代の来場者へ直感的に伝えることが課題でした。施設そのものが地域の中で目印になる視認性も必要でした。",
    approach:
      "循環を想起させるグラフィックと、遠くからでも認識できる配色を採用。建物の形状を活かしながら、楽しさと技術への信頼感が共存する表現にまとめました。",
    roles: ["Art Direction", "Graphic Design", "Spatial Design"],
    tools: ["Illustrator", "Photoshop", "Figma"],
  },
  {
    slug: "loop-radio",
    title: "LOOP Radio",
    subtitle: "偶然の音楽との出会いをつくるウェブラジオ",
    period: "2024.11 — 2025.02",
    category: "Branding / Web Design",
    image: "/works/loop-radio.svg",
    gallery: ["/works/loop-radio.svg", "/works/loop-radio.svg", "/works/loop-radio.svg"],
    color: "#efcf63",
    description:
      "気分と時間帯から選曲される、インディペンデント音楽のウェブラジオ。検索するのではなく、流れてきた音楽をそのまま楽しむ偶然性をデジタル上に再現しました。",
    challenge:
      "ストリーミングサービスでは好みに最適化された楽曲が中心となり、未知の音楽に出会う機会が減っています。選ぶ疲れをなくしながら、発見の楽しさをつくることがテーマでした。",
    approach:
      "操作を再生・停止とムード選択だけに絞り、アートワークが主役になるビジュアルを設計。番組のように一定時間でテーマが切り替わる仕組みを組み込みました。",
    roles: ["Concept", "Branding", "Web Design"],
    tools: ["Figma", "Illustrator", "React"],
  },
  {
    slug: "michi-market",
    title: "MICHI Market",
    subtitle: "つくり手の背景まで届く、地域のオンライン市場",
    period: "2024.06 — 2024.09",
    category: "E-commerce / Direction",
    image: "/works/michi-market.svg",
    gallery: ["/works/michi-market.svg", "/works/michi-market.svg", "/works/michi-market.svg"],
    color: "#f1a88f",
    description:
      "地域の小さな生産者と生活者をつなぐオンラインマーケット。商品だけでなく、土地・素材・つくり手の物語を知って選べる買い物体験をデザインしました。",
    challenge:
      "一般的なECでは価格やスペックの比較が優先され、生産者固有の魅力が伝わりづらい状態でした。読み物と買い物を分断せずにつなげる必要がありました。",
    approach:
      "産地の風景から商品詳細へ自然に進める編集型レイアウトを採用。購入導線は明快に保ちつつ、各所に短いストーリーと写真を配置しました。",
    roles: ["Art Direction", "UI Design", "Prototype"],
    tools: ["Figma", "Photoshop", "Next.js"],
  },
  {
    slug: "suu-archive",
    title: "SUU Archive",
    subtitle: "建築の記憶をたどるデジタルアーカイブ",
    period: "2023.10 — 2024.03",
    category: "Digital Archive / Editorial",
    image: "/works/suu-archive.svg",
    gallery: ["/works/suu-archive.svg", "/works/suu-archive.svg", "/works/suu-archive.svg"],
    color: "#bfc8d8",
    description:
      "街に残る小さな建築を、図面・写真・人々の記憶から記録するデジタルアーカイブです。専門知識がなくても、場所の時間を直感的にたどれる体験を目指しました。",
    challenge:
      "資料の種類と情報量が多く、単純な一覧では建築ごとの文脈が見えません。研究資料としての正確さと、一般の人にも開かれた閲覧性の両立が必要でした。",
    approach:
      "地図・年代・建築要素の3つの入口を用意し、関心に応じて探索できる構造に整理。タイポグラフィとグリッドを統一し、異なる形式の資料を一つの体験にまとめました。",
    roles: ["Information Design", "UI/UX Design", "Editorial"],
    tools: ["Figma", "InDesign", "TypeScript"],
  },
];

export function getWorkBySlug(slug: string) {
  return works.find((work) => work.slug === slug);
}
