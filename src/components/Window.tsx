import Draggable from "react-draggable";

import "./Window.css"

type WindowTypes = {
  url: string;
};

export default function Window({ url }: WindowTypes) {
  return (
    <Draggable>
      <div className="window">
        <div className="menu-bar"></div>
        <iframe
        height="500"
        width="700"
        src={url}
        />
      </div>
    </Draggable>
  );
}