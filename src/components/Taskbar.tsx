import slime from "../assets/slime.png";
import React from "react";

type MenuTypes = {
  menuSelected: boolean;
};


type TaskbarProps = {
  state: MenuTypes;
  setState: React.Dispatch<React.SetStateAction<MenuTypes>>;
};

export default function Taskbar({ state, setState }: TaskbarProps) {

  return (
    <nav>
      <button onClick={() => setState({ ...state, menuSelected: !state.menuSelected })}>
        <img className={state.menuSelected ? 'selected' : 'not-selected'} src={slime} />
      </button>
    </nav>
  );
}