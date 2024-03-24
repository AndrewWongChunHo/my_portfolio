import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { heroRight } from "../assets/icons";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5 translate-y-20">
          <div className="w-5 h-5 rounded-full bg-[#1846BF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex md:flex-row sm:flex-col xs:flex-col gap-40 translate-y-20">
          <div className="translate-y-10">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#476FDA]">Andrew</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop user-friendly <br className="sm:block hidden" />
              app and web interfaces
            </p>
          </div>
          <img src={heroRight} alt="heroRight" />
        </div>
      </div>

      <div className="absolute xs:hidden  sm:hidden xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
