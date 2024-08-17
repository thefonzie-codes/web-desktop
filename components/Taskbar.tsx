import slime from "../assets/slime.png";
import React from "react";

import type { StateTypes } from "../types"

type TaskbarProps = {
  state: StateTypes;
  setState: React.Dispatch<React.SetStateAction<StateTypes>>;
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