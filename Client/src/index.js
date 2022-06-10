import React from "react";
import ReactDOM from "react-dom";
//Blibliotecas

import "./index.css";
//Css

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Componentes

import { AuthProvider } from "./context/AuthProvider";
import { GlobalVarProvider } from "./context/GlobalContext";
import { StoreProvider } from "./context/StoreContext";
//Context

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <GlobalVarProvider>
                    <StoreProvider>
                        <Routes>
                            <Route path="/*" element={<App />} />
                        </Routes>
                    </StoreProvider>
                </GlobalVarProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
