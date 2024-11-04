import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header.jsx";
import Preloader from "./Preloader";
import Footer from "./FooterPage.jsx";
import ScrollToTopButton from "./ScrollToTopButton.jsx";

import { getCurrentFilms } from "../actions/filmsActions";
import { getUpcomingFilms } from "../actions/filmsUpcoming.js";

const Layout = () => {
    const dispatch = useDispatch();
    const preloader = useSelector(state => state.films.preloader);
    useEffect(() => {
        dispatch(getCurrentFilms({}));
        dispatch(getUpcomingFilms({}));
    }, [dispatch]);

    return (
        <>
            <Header />
            <Preloader show={preloader} />
            <ScrollToTopButton />
            <Outlet />
            <Footer />

        </>
    );
};

export default Layout;
