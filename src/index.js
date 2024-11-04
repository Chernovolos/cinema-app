import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store";

import App from './App';
import Layout from './component/Layout';
import About from "./component/About.jsx";
import MainPage from './component/MainPage';
import FilmsPage from "./component/FilmsPage.jsx";
import RulesPage from "./component/RulesPage.jsx";
import TicketPage from "./component/TicketPage.jsx";
import ContactPage from "./component/ContactPage.jsx";
import FilmDetails from "./component/FilmDetails.jsx";
import NotFoundPage from "./component/NotFoundPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFoundPage/>,
        children: [
            {
                path: "/",
                element: <Layout />,
                children: [
                    { path: "/", element: <MainPage /> },
                    { path: "buy-tickets", element: <TicketPage /> },
                    { path: "films", element: <FilmsPage /> },
                    { path: "films/:id", element: <FilmDetails /> },
                    { path: "about", element: <About /> },
                    { path: "privacy", element: <RulesPage /> },
                    { path: "contact", element: <ContactPage /> },
                ],
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
);



