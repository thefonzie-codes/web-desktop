import "../../App.css";
import Draggable from "react-draggable";
import { useState } from "react";
import { open } from "../../features/Apps/AppSlice";
import { useAppDispatch } from "../../app/hooks";

type IconProps = {
  appName: string,
  img: string,
}

export default function Icon({ appName, img }: IconProps) {

  const dispatch = useAppDispatch()

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
        onDoubleClick={() => dispatch(open('Resume'))}
        >
        <img src={img}></img>
        <p>{appName}</p>
      </div>
    </Draggable>
  );
}