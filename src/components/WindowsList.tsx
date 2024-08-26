import Window from "./Window";
import { useAppSelector } from "../app/hooks";
import resume from '../assets/files/resume.pdf'

export default function WindowsList() {

    const apps = useAppSelector(state => state.apps.openApps);

    console.log(apps)

    const windowsArray = apps.map(appName => {

        let url:string = "";

        switch (appName) {
            case 'Done':
                url = 'https://thefonzie-codes.github.io/my-to-do-app/#/home';
                break;
            case 'Resume':
                url = resume;
                break;
            case 'Petome':
                url = 'https://petome.up.railway.app/';
                break;
            case '':
                return;
        }

        return <Window appName={appName} url={url}/>;
    });

    return (
        <>
            {windowsArray}
        </>
    );
}