import React from 'react';
import { useTranslation } from "react-i18next";
import InfoCard from '../../components/infocards/InfoCard';
import JobCards from '../../components/jobcards/JobCards';
import LangSelector from '../../components/langselector/LangSelector';
import NavBar from '../../components/navbar/NavBar';
import variables from '../../Variables.scss';
import "./Home.scss";
const Home = () => {
    const { t } = useTranslation();
    const colors = [
        "#d8ffb6",
        "#ffd3f3",
        "#e3fff8"
    ]
    const jobs = [
        { businessLogo: "https://via.placeholder.com/150", jobTitleKey: "workplaces.futureSpace" },
        { businessLogo: "https://via.placeholder.com/150", jobTitleKey: "workplaces.saoBranding" },
        { businessLogo: "https://via.placeholder.com/150", jobTitleKey: "workplaces.neo9" }
    ];
    const pojects = [
        { businessLogo: "https://via.placeholder.com/150", jobTitle: "Lorem ipsum dolor sit,amet consectetur adipisicing elit" },
        { businessLogo: "https://via.placeholder.com/150", jobTitle: "Lorem ipsum dolor sit,amet consectetur adipisicing elit" },
        { businessLogo: "https://via.placeholder.com/150", jobTitle: "Lorem ipsum dolor sit,amet consectetur adipisicing elit" }
    ];

    const technologies = {
        frontend: [
            {
                logo: "https://via.placeholder.com/50",
                bodyKey: "canDo.frontend.react"
            },
            {
                logo: "https://via.placeholder.com/50",
                bodyKey: "canDo.frontend.angular"
            },
            {
                logo: "https://via.placeholder.com/50",
                bodyKey: "canDo.frontend.vue"
            }
        ],
        backend: [
            {
                logo: "https://via.placeholder.com/50",
                bodyKey: "canDo.backend.spring"
            },
            {
                logo: "https://via.placeholder.com/50",
                bodyKey: "canDo.backend.django"
            },
        ],
        bbdd: [
            {
                logo: "https://via.placeholder.com/50",
                bodyKey: "canDo.bbdd.db"
            },
            {
                logo: "https://via.placeholder.com/50",
                bodyKey: "canDo.bbdd.kubernetes"
            },
        ]
    }
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
                        {t("header.introduction")}
                    </div>
                </div>
                <div className="section1">{t("canDo.title")}</div>
                <div className="row mt-5">
                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                        <InfoCard backColor={variables.colorLeft} titleKey={"canDo.frontend.title"} technologies={technologies.frontend} />
                    </div>
                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                        <InfoCard backColor={variables.colorCenter} titleKey={"canDo.backend.title"} technologies={technologies.backend} />
                    </div>
                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                        <InfoCard backColor={variables.colorRight} titleKey={"canDo.bbdd.title"} technologies={technologies.bbdd} />
                    </div>
                </div>
                <div className="section2">{t("workplaces.title")}</div>
                <div className="row mt-5">
                    {jobs.map((e, idx) =>
                        <div
                            key={`work-exp-${idx}`}
                            className="p-3 col-lg-4 col-12 d-flex justify-content-center">
                            <JobCards
                                backColor={colors[idx % colors.length]}
                                jobTitleKey={e.jobTitleKey}
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