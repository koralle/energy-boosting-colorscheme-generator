import type { InteriorPatternNumber, Pattern } from "../types/pattern";

/**
 * 12パターンの鑑定データ
 *
 * 業務仕様に基づくパターン定義
 */
export const PATTERNS: readonly Pattern[] = [
  // パターン1
  {
    id: 1,
    energyDownYear: "子、丑、-",
    energyUpColors: {
      myself: "pink",
      motivation: "brown",
      mentalStability: "purple",
      decision: "yellow",
      health: "red",
      economy: "wine",
    },
    tabooColor: "blue",
    interiorPattern: 1,
  },
  // パターン2
  {
    id: 2,
    energyDownYear: "子、丑、+",
    energyUpColors: {
      myself: "red",
      motivation: "beige",
      mentalStability: "wine",
      decision: "yellowGreen",
      health: "yellow",
      economy: "brown",
    },
    tabooColor: "blue",
    interiorPattern: 2,
  },
  // パターン3
  {
    id: 3,
    energyDownYear: "寅、卯、+",
    energyUpColors: {
      myself: "beige",
      motivation: "wine",
      mentalStability: "navyBlue",
      decision: "wine",
      health: "pink",
      economy: "black",
    },
    tabooColor: "green",
    interiorPattern: 3,
  },
  // パターン4
  {
    id: 4,
    energyDownYear: "寅、卯、-",
    energyUpColors: {
      myself: "brown",
      motivation: "purple",
      mentalStability: "navyBlue",
      decision: "pink",
      health: "beige",
      economy: "navyBlue",
    },
    tabooColor: "green",
    interiorPattern: 4,
  },
  // パターン5
  {
    id: 5,
    energyDownYear: "辰、巳、+",
    energyUpColors: {
      myself: "wine",
      motivation: "navyBlue",
      mentalStability: "black",
      decision: "beige",
      health: "brown",
      economy: "navyBlue",
    },
    tabooColor: "yellow",
    interiorPattern: 5,
  },
  // パターン6
  {
    id: 6,
    energyDownYear: "辰、巳、-",
    energyUpColors: {
      myself: "purple",
      motivation: "navyBlue",
      mentalStability: "green",
      decision: "brown",
      health: "wine",
      economy: "black",
    },
    tabooColor: "yellow",
    interiorPattern: 6,
  },
  // パターン7
  {
    id: 7,
    energyDownYear: "午、未、+",
    energyUpColors: {
      myself: "blue",
      motivation: "black",
      mentalStability: "yellowGreen",
      decision: "wine",
      health: "purple",
      economy: "green",
    },
    tabooColor: "red",
    interiorPattern: 7,
  },
  // パターン8
  {
    id: 8,
    energyDownYear: "午、未、-",
    energyUpColors: {
      myself: "navyBlue",
      motivation: "green",
      mentalStability: "yellow",
      decision: "purple",
      health: "blue",
      economy: "yellowGreen",
    },
    tabooColor: "red",
    interiorPattern: 8,
  },
  // パターン9
  {
    id: 9,
    energyDownYear: "申、酉、+",
    energyUpColors: {
      myself: "green",
      motivation: "yellowGreen",
      mentalStability: "red",
      decision: "blue",
      health: "navyBlue",
      economy: "pink",
    },
    tabooColor: "brown",
    interiorPattern: 9,
  },
  // パターン10
  {
    id: 10,
    energyDownYear: "申、酉、-",
    energyUpColors: {
      myself: "deepGreen",
      motivation: "yellow",
      mentalStability: "pink",
      decision: "navyBlue",
      health: "gray",
      economy: "red",
    },
    tabooColor: "brown",
    interiorPattern: 10,
  },
  // パターン11
  {
    id: 11,
    energyDownYear: "戌、亥、+",
    energyUpColors: {
      myself: "yellowGreen",
      motivation: "wine",
      mentalStability: "beige",
      decision: "black",
      health: "green",
      economy: "pink",
    },
    tabooColor: "purple",
    interiorPattern: 11,
  },
  // パターン12
  {
    id: 12,
    energyDownYear: "戌、亥、-",
    energyUpColors: {
      myself: "yellow",
      motivation: "pink",
      mentalStability: "brown",
      decision: "green",
      health: "yellowGreen",
      economy: "pink",
    },
    tabooColor: "purple",
    interiorPattern: 12,
  },
] as const;

/**
 * パターンIDからパターンデータを取得するヘルパー関数
 */
export function getPatternById(id: Pattern["id"]): Pattern | undefined {
  return PATTERNS.find((p) => p.id === id);
}

/**
 * インテリアアドバイスのテキストデータ
 */
export const INTERIOR_ADVICES = {
  1: [
    "地味な色より、鮮明で綺麗な色が、エネルギーUP色です。",
    "ピンク系の花柄の絨毯を、部分的に取り入れると活力が湧きます。",
    "全体的には地味な色より、明るいトーンの開放的なイメージが友達との交流が自由にできて、社交性が磨かれます。",
  ],
  2: [
    "部屋は明るく開放的で、友達が気軽に集まれる環境の中で表現力と自立心が、活かせます。",
    "地味な色より、明るい鮮明な色が、エネルギーUP色です。",
    "インテリアは明るく太陽のイメージが活色を与えてくれます。",
    "友達が、自由に出入り出来るように、閉鎖的よりオープンにするのが理想です。",
  ],
  3: [
    "家庭の中では、リラックスしていますが、自分の部屋があると安心して勉強に集中できます。",
    "部屋は、シックなヨーロッパ風なアンティーク調のインテリアが、居心地のよい部屋になります。",
    "色は、派手なものより、シックな色が、エネルギーUP色です。",
  ],
  4: [
    "派手な色より、シックな色が、エネルギーUP色です。",
    "全体的にカジュアルより、重厚なクラシック調の部屋が最適です。",
    "インテリアは、しっかりした作りの、家具を選ぶ。",
    "茶色の木目調などの、家具がリラックスでき安らげる環境の中で、才能を伸ばせます。",
  ],
  5: [
    "遊びのスペースが、ある部屋が最適です。",
    "明るく広々とした空間の中で、家具類は最小限におさえたシンプルな部屋が居心地良く快適に過ごせます。",
    "内気なタイプは、落ち着いた感じの部屋の方が安心して過ごせます。",
    "派手な色より地味な色が、エネルギーUP色です。",
    "全体的に、シックな色調にまとめると落ち着いて集中できます。",
    "開放的な環境づくりがポイントです。",
  ],
  6: [
    "人との関わり合いが、キーポイントです。友達と遊べるスペースがある明るくシンプルな部屋が最適です。",
    "派手な色より、シックな色が、エネルギーUPです。",
    "インテリアは、落ち着いた色が居心地良く過ごせます。",
  ],
  7: [
    "開放的な、オープンな部屋だと、自分の世界に入れないので落ち着いた静かな環境を好みます。",
    "家族との距離感も、べったりではなく適度な距離感を保てる部屋づくりが、最適です。",
    "色は、寒色系が、エネルギーUP色です。",
  ],
  8: [
    "静かな環境を、好むので部屋は、開放的な明るい部屋よりも落ち着いた感じの方が、ストレスがたまらずリラックスできます。",
    "派手な色より、シックな色が集中します。",
    "インテリアは、全体的に、シンプルにまとめると安らげます。",
  ],
  9: [
    "お洒落なデザインの家具や、明るい色のインテリアがリラックスできます。",
    "きれいなパステル色が、エネルギーUP色です。",
    "明るい色と広い空間に、植物や花のある部屋が才能を開花させます。",
  ],
  10: [
    "ひとりの時間を、楽しみ自由になる時間と空間のある部屋で快適に過ごすことができます。",
    "明るく広々とした環境の中で、ユニークな発想が育ち優れた個性を発揮できます。",
    "きれいなパステル色が、エネルギーUP色です。",
    "部屋には、常に植物や花のある生活が最適で、感受性が豊かになります。",
  ],
  11: [
    "シンプルでも、高級感のある家具にして、落ち着いた感じにまとめると、居心地の良い空間になります。",
    "派手な色より、シックな色が、エネルギーUP色です。",
    "落ち着いたシックな環境の中で、うちに秘めた多彩な才能が伸びます。",
  ],
  12: [
    "カジュアルより、落ち着いた感じの、インテリアが居心地の良い環境づくりのベースになります。",
    "派手な色より、シックな色が、エネルギーUP色です。",
  ],
} as const;

/**
 * インテリアアドバイスをパターン番号から取得するヘルパー関数
 */
export function getInteriorAdvice(patternNumber: InteriorPatternNumber): readonly string[] {
  return INTERIOR_ADVICES[patternNumber];
}
