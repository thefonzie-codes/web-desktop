import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Rnd } from "react-rnd";

import { StateTypes } from "../types";

import "./Window.css";

type WindowProps = {
  url: string;
  state: StateTypes
  setState: React.Dispatch<React.SetStateAction<StateTypes>>;
};

export default function Window({ url, state, setState }: WindowProps) {
  return (
    <Rnd className="window">
        <div className="menu-bar">
          <button
            onClick={() => setState({...state, windowOpen: false})}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
        <iframe
          height="500"
          width="700"
          src={url}
        />
    </Rnd>
  );
}