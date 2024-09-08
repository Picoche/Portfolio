import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Room } from "../components/Room";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Leva } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmallScreen = useMediaQuery({ maxWidth: 620 });

  const sizes = calculateSizes(isSmallScreen, isTablet, isMobile);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-32 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Bienvenue sur mon Portfolio <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Fabien Hombert</p>
        <p className="hero_tag text-gray_gradient">Développeur Full Stack</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
              <Room
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>
            <group>
              <Target
                position={sizes.targetPosition}
                scale={sizes.targetScale}
              />
              <ReactLogo
                position={sizes.reactLogoPosition}
                scale={sizes.reactLogoScale}
              />
              <Cube position={sizes.cubePosition} scale={sizes.cubeScale} />
              <Rings position={sizes.ringPosition} scale={sizes.ringScale} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button
            name="Travaillons ensemble !"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
