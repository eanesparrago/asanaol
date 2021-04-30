import { Route, useParams, useRouteMatch } from "react-router-dom";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import BoardGroup from "./BoardGroup";
import AddGroupInput from "./AddGroupInput";
import TaskModal from "./TaskModal";

import useMoveTask from "./utils/useMoveTask";
import useGroups from "api/groups/useGroups";

function ProjectBoard({ ...rest }) {
  const { projectId } = useParams<{ projectId: string }>();
  const { groups } = useGroups(projectId);
  const { moveTask } = useMoveTask();
  const { path } = useRouteMatch();

  function handleDragEnd(result: DropResult) {
    moveTask(
      result.source.index,
      result.draggableId,
      result.source.droppableId,
      result.destination?.index,
      result.destination?.droppableId
    );
  }

  return (
    <ScProjectBoard {...rest}>
      <DragDropContext onDragEnd={handleDragEnd}>
        {groups &&
          groups.map((group) => (
            <BoardGroup key={group.id} groupId={group.id} title={group.title} />
          ))}
      </DragDropContext>

      <AddGroupInput />

      <Route path={`${path}/:groupId/:taskId`}>
        <TaskModal />
      </Route>
    </ScProjectBoard>
  );
}

const ScProjectBoard = styled.div`
  padding: 0.5rem 1rem 0 1rem;
  background-color: ${(p) => p.theme.color.grey.light};
  display: flex;
  overflow-x: auto;
`;

export default ProjectBoard;
