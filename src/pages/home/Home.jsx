import React from 'react';
import { useTranslation } from "react-i18next";
import InfoCard from '../../components/infocards/InfoCard';
import JobCards from '../../components/jobcards/JobCards';
import LangSelector from '../../components/langselector/LangSelector';
import NavBar from '../../components/navbar/NavBar';
import "./Home.scss";
const Home = () => {
    const { t } = useTranslation();
    const colors = [
        "#D9BBF9",
        "#CCA7A2",
        "#BBDBB4"
    ]
    const jobs = [
        { businessLogo: "https://via.placeholder.com/150", jobTitle: "Lorem ipsum dolor sit,amet consectetur adipisicing elit" },
        { businessLogo: "https://via.placeholder.com/150", jobTitle: "Lorem ipsum dolor sit,amet consectetur adipisicing elit" },
        { businessLogo: "https://via.placeholder.com/150", jobTitle: "Lorem ipsum dolor sit,amet consectetur adipisicing elit" },
        { businessLogo: "https://via.placeholder.com/150", jobTitle: "Lorem ipsum dolor sit,amet consectetur adipisicing elit" }
    ];
    const pojects = [
        { businessLogo: "https://via.placeholder.com/150", jobTitle: "Lorem ipsum dolor sit,amet consectetur adipisicing elit" },
        { businessLogo: "https://via.placeholder.com/150", jobTitle: "Lorem ipsum dolor sit,amet consectetur adipisicing elit" },
        { businessLogo: "https://via.placeholder.com/150", jobTitle: "Lorem ipsum dolor sit,amet consectetur adipisicing elit" }
    ];
    return (
        <div>
            <LangSelector />
            <NavBar />
            <div className="home-container container mt-5">
                <div className="row">
                    <div className="hi-text col-12 col-lg-6 d-flex align-items-center justify-content-center">
                        {t("header.hello")}
                        <br />
                        {t("header.name")}
                    </div>
                    <div className="hi-photo col-12 col-lg-6 d-flex align-items-center justify-content-center">
                        <img src="https://via.placeholder.com/150" width={300}></img>
                    </div>
                    <div className="hi-introduction col-lg-8 col-12 fs-5">
                        Lorem ipsum dolor sit,
                        amet consectetur adipisicing elit. Voluptatum a eaque amet labore dolore aspernatur minus praesentium,
                        voluptatem similique id aliquid ipsum recusandae dolorem harum et dolores quo ipsa necessitatibus.
                    </div>
                </div>
                <div className="section1">Que se hacer?</div>
                <div className="row mt-5">
                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                        <InfoCard backColor={colors[0]} title={"Frontend"} body={`Lorem ipsum dolor sit,
                        amet consectetur adipisicing elit. Voluptatum a eaque amet labore dolore aspernatur minus praesentium,
                        voluptatem similique id aliquid ipsum recusandae dolorem harum et dolores quo ipsa necessitatibus.`} />
                    </div>
                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                        <InfoCard backColor={colors[1]} title={"Backend"} body={`Lorem ipsum dolor sit,
                        amet consectetur adipisicing elit. Voluptatum a eaque amet labore dolore aspernatur minus praesentium,
                        voluptatem similique id aliquid ipsum recusandae dolorem harum et dolores quo ipsa necessitatibus.`} />
                    </div>
                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                        <InfoCard backColor={colors[2]} title={"Bases de datos"} body={`Lorem ipsum dolor sit,
                        amet consectetur adipisicing elit. Voluptatum a eaque amet labore dolore aspernatur minus praesentium,
                        voluptatem similique id aliquid ipsum recusandae dolorem harum et dolores quo ipsa necessitatibus.`} />
                    </div>
                </div>
                <div className="section2">Donde he trabajado?</div>
                <div className="row mt-5">
                    {jobs.map((e, idx) =>
                    <div
                    key={`work-exp-${idx}`} 
                    className="p-3 col-lg-4 col-12 d-flex justify-content-center">
                        <JobCards
                        backColor={colors[idx % colors.length]}
                        jobTitle={e.jobTitle} 
                        businessLogo={e.businessLogo} />
                    </div>
                    )}
                </div>
                <div className="section3">Mis proyectos</div>
                <div className="row mt-5">
                    {pojects.map((e, idx) =>
                    <div 
                    key={`my-projs-${idx}`}
                    className="p-3 col-lg-4 col-12 d-flex justify-content-center">
                        <JobCards
                        backColor={colors[idx % colors.length]}
                        jobTitle={e.jobTitle} 
                        businessLogo={e.businessLogo} />
                    </div>
                    )}
                </div>
                <div className="section4">Contáctame</div>
                <div className="d-flex justify-content-center">
                    <div className="contact-info row mt-5">
                        <div className="rrss col-6 fs-5">Email</div>
                        <div className="rrss col-6 fs-5">Telefono</div>
                        <div className="col-12 fs-5 rrss-below">
                            <div className="row">
                                <div className="rrss col-4 fs-5">Linkedin</div>
                                <div className="rrss col-4 fs-5">GitHub</div>
                                <div className="rrss col-4 fs-5">Twitter</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Home