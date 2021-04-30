import styled from "styled-components";
import { Typography } from "antd";
import ProjectPopupMenu from "./ProjectPopupMenu";
import EditProjectDetailsModal from "./EditProjectDetailsModal";
import UserMainAvatar from "./UserMainAvatar";

import { useParams } from "react-router";
import useProject from "api/projects/useProject";

const { Title } = Typography;

function ProjectHeader() {
  const { projectId } = useParams<{ projectId?: string }>();
  const { project } = useProject(projectId);

  return (
    <ScProjectHeader>
      <ScTitle level={3}>
        {project ? project.title : "Create or select a project ✨"}
      </ScTitle>

      {project && (
        <>
          <ProjectPopupMenu />
          <EditProjectDetailsModal />
        </>
      )}

      <ScUserMainAvatar />
    </ScProjectHeader>
  );
}

const ScProjectHeader = styled.div`
  width: 100%;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid ${(p) => p.theme.color.grey.medium};
  display: flex;
  align-items: flex-start;
`;

const ScTitle = styled(Title)`
  margin-right: 0.5rem;
`;

const ScUserMainAvatar = styled(UserMainAvatar)`
  margin-left: auto;
`;

export default ProjectHeader;
