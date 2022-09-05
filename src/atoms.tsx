import { atom, selector } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: ITodo[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    Board: [],
  },
  effects: [
    ({ setSelf, onSet }) => {
      const todoStoreKey = "Todo";
      const savedValue = localStorage.getItem(todoStoreKey);
      // setSelf() 함수 내에서는 Promise를 사용하거나 데이터를 비동기적으로 호출할 때 사용할 수 있다.
      if (savedValue !== null) {
        setSelf(JSON.parse(savedValue));
      }

      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(todoStoreKey)
          : localStorage.setItem(todoStoreKey, JSON.stringify(newValue));
      });
    },
  ],
});

export const boardState = atom<string[]>({
  key: "boards",
  default: ["Board"],
  effects: [
    ({ setSelf, onSet }) => {
      const todoStoreKey = "Todo";
      const savedValue = localStorage.getItem(todoStoreKey);
      // setSelf() 함수 내에서는 Promise를 사용하거나 데이터를 비동기적으로 호출할 때 사용할 수 있다.
      if (savedValue !== null) {
        setSelf(JSON.parse(savedValue));
      }

      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(todoStoreKey)
          : localStorage.setItem(todoStoreKey, JSON.stringify(newValue));
      });
    },
  ],
});

export const darkState = atom({
  key: "isDark",
  default: false,
});
