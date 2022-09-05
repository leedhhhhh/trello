import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { boardState, toDoState } from "./atoms";
import Board from "./Components/Board";
import DeleteCard from "./Components/DeleteCard";
import Header from "./Header";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  gap: 10px;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
`;

function DragnDrop() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const [boards, setBoards] = useRecoilState(boardState);

  // 박스를 놓을때 실행되는 함수 onDragEnd
  const onDragEnd = (info: DropResult) => {
    const { destination, draggableId, source } = info;

    if (!destination) return;

    // 보드간의 이동
    if (source.droppableId === "boards") {
      setToDos((allBoard) => {
        const copiedBoard = Object.entries({ ...allBoard });
        const cutTodo = [...copiedBoard.splice(source.index, 1)];
        copiedBoard.splice(destination.index, 0, ...cutTodo);
        return {
          ...Object.fromEntries(copiedBoard),
        };
        // const copy = [...allBoard];
        // copy.splice(source.index, 1);
        // copy.splice(destination?.index, 0, draggableId);
        // return copy;
      });
    }

    // 드래그해서 삭제
    if (destination.droppableId === "delete") {
      setToDos((allBoards) => {
        // 삭제하고싶은 board 선택
        const deleteCopy = [...allBoards[source.droppableId]];
        // board에서 삭제하고싶은 항목 배열에 삭제
        deleteCopy.splice(source.index, 1);
        return {
          ...allBoards,
          [source.droppableId]: deleteCopy,
        };
      });
    }

    // 같은 보드에서 움직이기
    if (destination?.droppableId === source.droppableId) {
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        const taskObj = boardCopy[source.index];
        // 1) 옮기고자 하는 아이템 배열에서 삭제하기
        boardCopy.splice(source.index, 1); // source.index 는 움직이고 싶은 item이 어딨는지 알려줌
        // 2) 옮긴 아이템 다시 원하는 위치에 놓기
        boardCopy.splice(destination?.index, 0, taskObj); // destination?.index 는 목적지의 index
        // 일단 모든 보드를 리턴해주고 그중에서 변경된 보드를 리턴
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }

    // 다른 보드로 움직이기
    if (destination.droppableId !== source.droppableId) {
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]]; // 이동시킨 보드의 id
        const taskObj = sourceBoard[source.index];
        const destinationBoard = [...allBoards[destination.droppableId]]; // 이동을 완료한 보드의 id
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Header />
      <Wrapper>
        <Droppable droppableId="boards" direction="horizontal" type="board">
          {(magic, snapshot) => (
            <Boards ref={magic.innerRef} {...magic.droppableProps}>
              {Object.keys(toDos).map((boardId, index) => (
                <Board
                  toDos={toDos[boardId]}
                  boardId={boardId}
                  key={boardId}
                  index={index}
                />
              ))}
              {magic.placeholder}
            </Boards>
          )}
        </Droppable>
        <DeleteCard />
      </Wrapper>
    </DragDropContext>
  );
}
export default DragnDrop;
