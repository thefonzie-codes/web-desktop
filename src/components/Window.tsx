import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Rnd } from "react-rnd";
import { close } from "../features/Apps/AppSlice";
import "./Window.css";
import { useAppDispatch } from '../app/hooks';
import resume from '../assets/files/resume.pdf';

type WindowProps = {
    appName: string;
    url: string
};

export default function Window({ appName, url }: WindowProps) {

    console.log(resume)

    const dispatch = useAppDispatch();

    return (
        <Rnd
            className="window"
            default={{
                x: 50,
                y: 50,
                width: 700,
                height: 500,
            }}>
            <div className="menu-bar">
                <button
                    onClick={() => dispatch(close(appName))}>
                    <FontAwesomeIcon icon={faX} />
                </button>
            </div>
            <iframe
                height="500"
                width="700"
                src={url}
            />
        </Rnd >
    );
}