// @ts-nocheck

import Particles from "react-tsparticles";
import styled from "styled-components";
import { starryoption } from "./options/starry";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { hexagonOption } from "./options/hexagon";

const ParticleRoot = styled.div`
  display: flex;
  position: fixed;
  z-index: -1;
  height: 100%;
  width: 100%;
  /* background-color:${(props) => props.theme.main} ; */
  background: linear-gradient(180deg, rgba(0,7,41,1) 0%, rgba(255,188,188,1) 100%);;
`;

function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <ParticleRoot>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={starryoption}
      />
    </ParticleRoot>
  );
}
export default ParticleBackground;
