import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  padding: 10px 10px;
  margin-bottom: 5px;
  background-color: ${(props) =>
    props.isDragging ? "#74b9ff" : props.theme.cardColor};
  border-radius: 0.7rem;
  box-shadow: 0 0.2rem 0.5rem rgba(10, 10, 10, 0.1);
`;

interface IDragabbleCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

function DragableCard({ toDoId, toDoText, index }: IDragabbleCardProps) {
  return (
    <Draggable draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
}
// react에게 prop이 변하지 않았다면 DragabledCard를 다시 랜더링하지마라는 뜻
export default React.memo(DragableCard);
