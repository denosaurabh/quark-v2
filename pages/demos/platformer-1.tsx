import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import NextImage from "next/image";

const App = () => {
  return (
    <>
      <Layer>
        <div>
          <Image speed={1} src="/1/1.png" />
          <Image speed={0.8} src="/1/2.png" />
          <Image speed={0.6} src="/1/3.png" />
          <Image speed={0.4} src="/1/4.png" />
        </div>

        <div className="absolute left-[1920px]">
          <Image speed={1} src="/2/1.png" />
          <Image speed={0.8} src="/2/2.png" />
          <Image speed={0.6} src="/2/3.png" />
          <Image speed={0.5} src="/2/4.png" />
          <Image speed={0.4} src="/2/5.png" />
          <Image speed={0.3} src="/2/6.png" />
          <Image speed={0.2} src="/2/7.png" />
          <Image speed={0.1} src="/2/8.png" />
        </div>

        <div className="absolute left-[calc(1920px_*_2)]">
          <Image speed={1} src="/3/1.png" />
          <Image speed={0.8} src="/3/2.png" />
          <Image speed={0.6} src="/3/3.png" />
          <Image speed={0.5} src="/3/4.png" />
          <Image speed={0.4} src="/3/5.png" />
          <Image speed={0.3} src="/3/6.png" />
        </div>

        <div className="absolute left-[calc(1920px_*_3)]">
          <Image speed={1} src="/4/1.png" />
          <Image speed={0.8} src="/4/2.png" />
        </div>
      </Layer>
    </>
  );
};

export default App;

type ImageProps = {
  src: string;
  speed: number;
  offset?: number;
  sticky?: { start: number; end: number };
};

const Image = ({ src, speed, offset = 0, sticky }: ImageProps) => {
  return (
    <ParallaxLayer speed={speed} offset={offset} sticky={sticky}>
      <img src={src} className="h-screen object-cover w-screen" alt="" />
    </ParallaxLayer>
  );
};

const Layer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Parallax pages={3} horizontal>
      <div
        className="flex justify-center w-[100vw] relative"
      // className="h-[100vh] w-[3000px]"
      >
        {children}
      </div>
    </Parallax>
  );
};
