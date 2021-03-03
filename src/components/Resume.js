import React from 'react';

//import DatosPersonales from './DatosPersonales.js';
import Educacion from './Educacion.js'
import ExperienciaLaboral from './ExperienciaLaboral';
import Footer from './Footer.js';
import Skills from './Skills.js';

export default function Resume() {

    return (
        <>
            <div className="grid-container-main resume">
                <div className="r-header">
                    <h1>Jason Armando Hernández</h1>
                    <h2>Resume</h2>
                </div>
                {/* <div className="">
                    <DatosPersonales></DatosPersonales>
                </div> */}
                <div className="grid-container-b">
                    <ExperienciaLaboral></ExperienciaLaboral>
                </div>                
                <div>
                    <Skills></Skills>
                </div>
                <div>
                    <Educacion></Educacion>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
            
        </>
    );
}