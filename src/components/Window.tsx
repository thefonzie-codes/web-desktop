import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Rnd } from "react-rnd";

// import { StateTypes } from "../types";

import { close } from "../features/Apps/AppSlice";

import "./Window.css";
import { useAppDispatch } from '../app/hooks';

type WindowProps = {
    appName: string;
};

export default function Window({ appName }: WindowProps) {

    const dispatch = useAppDispatch()
    
    return (
        <Rnd className="window">
            <div className="menu-bar">
                <button
                    onClick={() => dispatch(close(appName))}>
                    <FontAwesomeIcon icon={faX} />
                </button>
            </div>
            <iframe
                height="500"
                width="700"
                src={'https://thefonzie-codes.github.io/my-to-do-app/#/home'}
            />
        </Rnd>
    );
}