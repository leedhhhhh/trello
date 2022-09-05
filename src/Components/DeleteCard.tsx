import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { Droppable } from "react-beautiful-dnd";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteDiv = styled.div<ITrashCanWrapperProps>`
  position: fixed;
  bottom: 0;
  width: 90px;
  height: 90px;
  right: 0;
  transform: ${(props) => (props.isDraggingOver ? "scale(1.2)" : "none")};
`;

interface ITrashCanWrapperProps {
  isDraggingOver: boolean;
}

function DeleteCard() {
  return (
    <Droppable droppableId="delete">
      {(magic, snapshot) => (
        <DeleteDiv
          ref={magic.innerRef}
          {...magic.droppableProps}
          isDraggingOver={snapshot.isDraggingOver}
        >
          <FontAwesomeIcon icon={faTrashCan} size="3x" />
        </DeleteDiv>
      )}
    </Droppable>
  );
}

export default DeleteCard;
