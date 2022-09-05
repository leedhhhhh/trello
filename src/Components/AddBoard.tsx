import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../atoms";

const Form = styled.form`
  input {
    height: 30px;
    width: 200px;
    border-style: none;
    border-radius: 15px;
    border: solid ${(props) => props.theme.boardColor} 2px;
    background-color: transparent;
    padding: 0px 10px;
    color: ${(props) => props.theme.boardColor};
    ::placeholder {
      color: ${(props) => props.theme.boardColor};
      text-align: center;
    }
    :focus {
      outline: none;
    }
  }
`;

interface IForm {
  boardName: string;
}

function AddBoard() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();

  const onValid = ({ boardName }: IForm) => {
    setToDos((allToDos) => {
      console.log(allToDos);
      return {
        ...allToDos,
        [boardName]: [],
      };
    });
    setValue("boardName", "");
  };

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("boardName", { required: true })}
        type="text"
        placeholder="add board"
      />
    </Form>
  );
}

export default AddBoard;
