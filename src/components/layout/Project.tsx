import styled from "styled-components";
import { project } from "../../data/ExperienceData";

const ProjectRoot = styled.div`
  display: flex;
  width: 100%;
  min-height: 5em;
  flex-direction: column;
  align-items: center;
  background-color: #171617;
  margin: 0.25em 0 0.25em 0;
  padding: 0.25em 0 0.25em 0 ;
`;

const ProjectTitle = styled.div`
  display: flex;
  width: 97%;
  font-size: x-large;
  word-break: break-all;
`;

const ProjectDescription = styled.div`
  display: flex;
  width: 95%;
  flex-wrap: break;
  margin-top: 0.75em;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.secondary};
  &:hover {
    opacity: 0.5;
  }
`;

type ProjectProps = {
  project: project;
};

function Project({ project }: ProjectProps) {
  return (
    <ProjectRoot>
      <ProjectTitle>
        <ProjectLink href={project.link}>{project.name}</ProjectLink>
      </ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
    </ProjectRoot>
  );
}

export default Project;
