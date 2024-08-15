import "../App.css";
import Draggable from "react-draggable";
import { useState } from "react";
import Icon from "./Icon";

export default function DraggableWrapper(props: any) {

  const { name, img } = props;

  const [isDragging, setIsDragging] = useState<any>(false)

  const eventControl = (evt: {type: any;}, info: any) => {
    
    if (evt.type === 'mousemove' || evt.type === 'touchmove') {
      setIsDragging(true)
    }

    if (evt.type === 'mouseup' || evt.type == 'touchend') {
      setTimeout(() => {
        setIsDragging(false);
      }, 100);
    }
  }

  return (
    <Draggable
      defaultPosition={{ x: 20, y: 35 }}
      onDrag={eventControl}
      onStop={eventControl}
      >
        <div className="icon">
        <img src={img}></img>
        <p>{name}</p>
      </div>
      {/* <Icon name='icon-test' img={img} isDragging={isDragging}/> */}
    </Draggable>
  );
}