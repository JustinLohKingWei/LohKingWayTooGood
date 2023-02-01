// @ts-nocheck

import Particles from "react-tsparticles";
import styled from "styled-components";
import { starryOption } from "./options/starry";
import { loadFull } from "tsparticles";
import { useCallback, useContext } from "react";
import { rainyOption } from "./options/rain";
import { snowyOption } from "./options/snowy";
import { googleOption } from "./options/google";
import { themeList } from "../../themes";
import { GlobalContext, globalContextTypes } from "../../App";
import "../../gradient.css";
import useDate from "../../hooks/useDate";

const ParticleRoot = styled.div`
  display: flex;
  position: fixed;
  z-index: -1;
  height: 100%;
  width: 100%;
  /* background-color:${(props) => props.theme.main} ; */
  background: linear-gradient(
    180deg,
    rgba(0, 7, 41, 1) 0%,
    rgba(255, 188, 188, 1) 100%
  );
`;

function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  const optionList = [starryOption, rainyOption, snowyOption];

  const { currentTheme }: globalContextTypes = useContext(GlobalContext);

  const { seconds } = useDate();

  const key = seconds;

  switch (key) {
    case 0:
      return (
        <ParticleRoot style={{ background: "#00000" }}>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );

    case 1:
      return (
        <ParticleRoot
          style={{
            background: "linear-gradient(to bottom, #020111 85%, #191621 100%)",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );

    case 2:
      return (
        <ParticleRoot
          style={{
            background: "linear-gradient(to bottom, #020111 60%, #20202c 100%)",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );
    case 3:
      return (
        <ParticleRoot
          style={{
            background: "linear-gradient(to bottom, #020111 10%,#3a3a52 100%)",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );
    case 4:
      return (
        <ParticleRoot
          style={{
            background: "linear-gradient(to bottom, #20202c 0%,#515175 100%)",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );

    case 5:
      return (
        <ParticleRoot
          style={{
            background:
              "linear-gradient(to bottom, #40405c 0%,#6f71aa 80%,#8a76ab 100%)",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );

    case 6:
      return (
        <ParticleRoot
          style={{
            background:
              "linear-gradient(to bottom, #4a4969 0%,#7072ab 50%,#cd82a0 100%)",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );

    case 7:
      return (
        <ParticleRoot
          style={{
            background:
              " linear-gradient(to bottom, #757abf 0%,#8583be 60%,#eab0d1 100%)",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );

    case 8:
      return (
        <ParticleRoot
          style={{
            background: " linear-gradient(to bottom, #82addb 0%,#ebb2b1 100%)",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );
    case 9:
      return (
        <ParticleRoot
          style={{
            background:
              "  linear-gradient(to bottom, #94c5f8 1%,#a6e6ff 70%,#b1b5ea 100%)",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );
    case 10:
      return (
        <ParticleRoot
          style={{
            background: " linear-gradient(to bottom, #b7eaff 0%,#94dfff 100%)",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );
    case 11:
      return (
        <ParticleRoot
          style={{
            background: " linear-gradient(to bottom, #9be2fe 0%,#67d1fb 100%);",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );
    case 12:
      return (
        <ParticleRoot
          style={{
            background: " linear-gradient(to bottom, #90dffe 0%,#38a3d1 100%)",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );
    case 13:
      return (
        <ParticleRoot
          style={{
            background: " linear-gradient(to bottom, #57c1eb 0%,#246fa8 100%)",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );
    case 14:
      return (
        <ParticleRoot
          style={{
            background: " linear-gradient(to bottom, #2d91c2 0%,#1e528e 100%)",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );
    case 15:
      return (
        <ParticleRoot
          style={{
            background:
              "linear-gradient(to bottom, #2473ab 0%,#1e528e 70%,#5b7983 100%)",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );
    case 16:
      return (
        <ParticleRoot
          style={{
            background:
              "linear-gradient(to bottom, #1e528e 0%,#265889 50%,#9da671 100%)",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );
    case 17:
      return (
        <ParticleRoot
          style={{
            background:
              "linear-gradient(to bottom, #1e528e 0%,#728a7c 50%,#e9ce5d 100%)",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );
    case 18:
      return (
        <ParticleRoot
          style={{
            background:
              " linear-gradient(to bottom, #154277 0%,#576e71 30%,#e1c45e 70%,#b26339 100%);",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );
    case 19:
      return (
        <ParticleRoot
          style={{
            background:
              " linear-gradient(to bottom, #163C52 0%,#4F4F47 30%,#C5752D 60%,#B7490F 80%, #2F1107 100%)",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );
    case 20:
      return (
        <ParticleRoot
          style={{
            background:
              " linear-gradient(to bottom, #071B26 0%,#071B26 30%,#8A3B12 80%,#240E03 100%)",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );

    case 21:
      return (
        <ParticleRoot
          style={{
            background:
              "linear-gradient(to bottom, #010A10 30%,#59230B 80%,#2F1107 100%);",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );

    case 22:
      return (
        <ParticleRoot
          style={{
            background: "linear-gradient(to bottom, #090401 50%,#4B1D06 100%)",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );

    case 23:
      return (
        <ParticleRoot
          style={{
            background: "linear-gradient(to bottom, #00000c 80%,#150800 100%)",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );

    default:
      return (
        <ParticleRoot>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionList[themeList.indexOf(currentTheme)]}
          />
        </ParticleRoot>
      );
  }
}
export default ParticleBackground;
