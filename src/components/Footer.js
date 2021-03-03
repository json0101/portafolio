import React from 'react';
import {GitHub,LinkedIn} from '@material-ui/icons';

export default function Footer() {

    return (
        <>
            <div className="resume-section">
                <h1> </h1>
                <ul>
                    <li><a href="https://github.com/json0101"  rel="noreferrer" target="_blank"><GitHub fontSize="large"></GitHub></a></li>
                    <li><a href="https://www.linkedin.com/in/jason-armando-hernandez-aguilar-12a375111/"  rel="noreferrer" target="_blank"><LinkedIn fontSize="large"></LinkedIn></a></li>
                </ul>
            </div>
        </>
    );
}