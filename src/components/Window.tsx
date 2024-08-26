import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faSquare, faMinimize } from '@fortawesome/free-solid-svg-icons';
import { Rnd } from "react-rnd";
import { close } from "../features/Apps/AppSlice";
import "./Window.css";
import { useAppDispatch } from '../app/hooks';
import { useState } from 'react';

interface WindowProps {
    appName: string;
    url: string;
};

interface WindowState {
    maximized: boolean;
    width: number;
    height: number;
    x: number;
    y: number;
}

export default function Window({ appName, url }: WindowProps) {

    const [windowState, setWindowState] = useState<WindowState>({
        maximized: false,
        width: 700,
        height: 500,
        x: 50,
        y: 50,
    });

    const dispatch = useAppDispatch();

    const maximized = windowState.maximized

    const windowSize = maximized
    ? { width: window.innerWidth, height: window.innerHeight, x: 0, y: 0 }
    : { width: windowState.width, height: windowState.height, x: windowState.x, y: windowState.y };

    return (
        <Rnd
        className={maximized ? "window maximized" : "window"}
        size={{ width: windowSize.width, height: (windowSize.height - 50) }}
        position={{ x: windowSize.x, y: windowSize.y }}
        onDragStop={(e, d) => {
            if (!maximized) setWindowState({ ...windowState, x: d.x, y: d.y });
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
            if (!maximized) {
                setWindowState({
                    ...windowState,
                    width: Number(ref.style.width),
                    height: Number(ref.style.height),
                    x: position.x,
                    y: position.y,
                });
            }
        }}
    >
            <div className="menu-bar">
                <button
                    onClick={() => dispatch(close(appName))}>
                    <FontAwesomeIcon icon={faX} />
                </button>

                {maximized === false && <button
                    onClick={() => setWindowState({
                        ...windowState,
                        maximized: true
                    })}>
                    <FontAwesomeIcon icon={faSquare} />
                </button>}

                {maximized === true && <button
                    onClick={() => setWindowState({
                        ...windowState,
                        maximized: false
                    })}>
                    <FontAwesomeIcon icon={faMinimize} />
                </button>}
            </div>
            <iframe
                height="500"
                width="700"
                src={url}
            />
        </Rnd >
    );
}