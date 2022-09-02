import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./Components/Board";

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
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);

  // 박스를 놓을때 실행되는 함수 onDragEnd
  const onDragEnd = (info: DropResult) => {
    const { destination, draggableId, source } = info;

    if (!destination) return;

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
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((index) => (
            <Board toDos={toDos[index]} boardId={index} key={index} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}
export default App;
