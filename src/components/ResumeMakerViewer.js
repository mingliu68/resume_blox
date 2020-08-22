import React from "react";
// import * as Templates from './Templates';
import { getTemplate } from './Templates';

const ResumeMakerViewer = props => {
    const { template, data, resource } = { ...props }
    console.log(resource)

    return (
        <div className="resumeMakerViewer">
            <div className="resumePaper">
                {getTemplate(template, data, resource)}
            </div>
        </div>
    )
}

export default ResumeMakerViewer;