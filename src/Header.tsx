import styled from "styled-components";
import AddBoard from "./Components/AddBoard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

const Logo = styled.div`
  width: 120px;
  color: ${(props) => props.theme.boardColor};
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 28px;
  letter-spacing: -1px;
  line-height: 80%;
  margin-left: 20px;
`;

const CreateBoardWrapper = styled.div`
  left: 10px;
`;

const ModeBtn = styled.div`
  width: 120px;
  text-align: end;
  font-size: 30px;
  color: ${(props) => props.theme.boardColor};
  margin-right: 20px;
  &:hover {
    color: #f1c40f;
    transition: color ease-in 0.3s;
  }
`;

function Header() {
  return (
    <Container>
      <Logo>
        beautiful
        <br />
        board
      </Logo>
      <CreateBoardWrapper>
        <AddBoard />
      </CreateBoardWrapper>
      <ModeBtn>
        <FontAwesomeIcon icon={faSun} />
      </ModeBtn>
    </Container>
  );
}

export default Header;
