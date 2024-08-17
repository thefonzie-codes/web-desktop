import "../App.css";
import React, { SetStateAction } from "react";
import Draggable from "react-draggable";
import { useState } from "react";

import { StateTypes } from "../types";

type IconProps = {
  name: string,
  img: string,
  state: StateTypes,
  setState: React.Dispatch<SetStateAction<StateTypes>>,
}

export default function Icon({ name, img, state, setState }: IconProps) {

  const [ selected, setSelected ] = useState(false)

  return (
    <Draggable
      defaultPosition={{ x: 20, y: 35 }}
      >
        <div 
        className={selected ? "icon selected" : "icon"}
        tabIndex={0}
        onFocus={() => setSelected(true)}
        onBlur={() => setSelected(false)}
        onDoubleClick={() => setState({...state, windowOpen: true})}
        >
        <img src={img}></img>
        <p>{name}</p>
      </div>
    </Draggable>
  );
}