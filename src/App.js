import Menu from "./components/Menu/Menu";
import {Route, Routes} from "react-router-dom";
import Page from "./components/Layouts/Page";
import HomePage from "./components/Pages/HomePage";

function App() {
    return (
        <>
            <Menu/>
            <Page>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                </Routes>
            </Page>
        </>
    );
}

export default App;
