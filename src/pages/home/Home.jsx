import React from 'react';
import { useTranslation } from "react-i18next";
import InfoCard from '../../components/infocards/InfoCard';
import LangSelector from '../../components/langselector/LangSelector';
import NavBar from '../../components/navbar/NavBar';
import "./Home.scss";
const Home = () => {
    const { t } = useTranslation();
    return (
        <div>
            <LangSelector />
            <NavBar />
            <div className="home-container container mt-5">
                <div className="row mb-5">
                    <div className="hi-text col-12 col-lg-6 d-flex align-items-center justify-content-center">
                        {t("header.hello")}
                        <br />
                        {t("header.name")}
                    </div>
                    <div className="hi-photo col-12 col-lg-6 d-flex align-items-center justify-content-center">
                        <img src="https://via.placeholder.com/150" width={300}></img>
                    </div>
                    <div className="hi-introduction col-lg-8 col-12">
                        Lorem ipsum dolor sit,
                        amet consectetur adipisicing elit. Voluptatum a eaque amet labore dolore aspernatur minus praesentium,
                        voluptatem similique id aliquid ipsum recusandae dolorem harum et dolores quo ipsa necessitatibus.
                    </div>
                </div>
                <div className="text-center question1">Que se hacer?</div>
                <div className="row mt-5">
                    <div className="col-12 col-lg-6">
                        <InfoCard backColor={"#D9BBF9"} title={"Frontend"} body={"Frontend body"}/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <InfoCard backColor={"#CCA7A2"} title={"Backend"} body={"Backend body"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home