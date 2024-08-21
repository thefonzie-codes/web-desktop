import Window from "./Window";
import { useAppSelector } from "../app/hooks";

export default function WindowsList() {

    const apps = useAppSelector(state => state.apps.openApps);

    console.log(apps)

    const windowsArray = apps.map(appName => {
        return <Window appName={appName} />;
    });

    return (
        <>
            {windowsArray}
        </>
    );
}