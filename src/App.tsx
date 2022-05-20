import "./App.css";
import "./assets/common.css";

import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import InfoPage from "./pages/InfoPage";

const App = () => {
    if (!localStorage.getItem("products")) {
        localStorage.setItem("products", JSON.stringify([]));
    }

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/product/:id" element={<InfoPage />} />
            </Routes>
        </HashRouter>
    );
};

export default App;
