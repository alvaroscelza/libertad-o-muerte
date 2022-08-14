import classes from "./Pages.module.css";
import {useEffect} from "react";

const HomePage = () => {
    useEffect(() => {
        document.title = "Libertad o Muerte - Home"
    }, []);

    return (
        <>
            <h1 className={classes.h1}>Home</h1>
            <div>
            </div>
        </>
    );
}

export default HomePage;
