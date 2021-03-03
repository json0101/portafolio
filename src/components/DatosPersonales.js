import React from 'react';
import imgProfesional from '../img/jason2.jpg'

export default function DatosPersonales() {

    return (
        <>
            <div className="datos-personales">
                
                <div className="image">
                    <img src={imgProfesional} alt="jason"></img>    
                </div>
                <h1>Datos Personales</h1>
                <div className="datos-grid">
                    <div>
                        <label className="label">Nombre:</label>
                    </div>
                    <div>
                        <label className="label-description">Jason Armando Hernandez</label>
                    </div>

                    <div>
                        <label className="label">País:</label>
                    </div>
                    <div>
                        <label className="label-description">Honduras</label>
                    </div>

                    <div>
                        <label className="label">Edad:</label>
                    </div>
                    <div>
                        <label className="label-description">28 años</label>
                    </div>
                </div>
                
            </div>
        </>
    );
}