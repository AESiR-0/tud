import { ParallaxScroll } from "./ui/HomeScroll";

export function Card() {
  return <ParallaxScroll images={images} campaign={campaigns} />;
}

const images = [
    "/images/D&K1.png",
    "/images/D&K2.png",
    "/images/Kama 6.png",
    "/images/Kama 2.png",
    "/images/mCaffeine 7.png",
    "/images/mCaffeine 9.png",
    "/images/MS3.png",
    "/images/MS4.png",
    "/images/SS6.png",
    "/images/SS7.png",
    "/images/D&K-01.png",
    "/images/D&K-02.png"
  ];
const campaigns = [
  "Dot and Key",
    "Dot and Key",
    "Kama Ayurveda",
    "Kama Ayurveda",
    "mCaffeine",
    "mCaffeine",
    "Mother Sparsh",
    "Mother Sparsh",
    "SockSoho",
    "SockSoho",
    "Dot and Key",
    "Dot and Key"
]