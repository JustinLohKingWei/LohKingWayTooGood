import styled from "styled-components";
import aboutImage from "../../resources/aboutImage.jpg";

const AboutImageRoot = styled.div`
  display: block;
  width: 100%;
`;

const AboutImageContainer = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100%;
  justify-content: flex-end ;
`;

const AboutImageHolder = styled.div`
  display: flex;
  background: url(${aboutImage}) no-repeat;
  min-width: 55%;
  min-height: 100%;
  /* box-shadow: inset 5em 0px 5em 5em #b8c6db, 5em 0px 5em 5em #b8c6db ; */
`;

function AboutImage() {
  return (
    <AboutImageRoot>
      {/* <AboutImageContainer>
        <img src={aboutImage} alt="Cool stuff" />
      </AboutImageContainer> */}
      <AboutImageContainer>
        <AboutImageHolder/>
      </AboutImageContainer>
    </AboutImageRoot>
  );
}

export default AboutImage;
