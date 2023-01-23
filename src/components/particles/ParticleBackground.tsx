// @ts-nocheck

import Particles from "react-tsparticles";
import styled from "styled-components";
import { testoption } from "./options/ParticleOptions";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticleRoot = styled.div`
display:flex;
  position: fixed;
  z-index: -1;
  height: 100%;
  width: 100%;
  /* background-color:${props => props.theme.main} ; */
  background-color: red ;
`;

function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
  }, []);

  return (
    <ParticleRoot>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={testoption}
      />
    </ParticleRoot>
  );
}
export default ParticleBackground;
