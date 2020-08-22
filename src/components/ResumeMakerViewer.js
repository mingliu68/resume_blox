import React from "react";
// import * as Templates from './Templates';
import { getTemplate } from './Templates';

const ResumeMakerViewer = props => {
    const { template, data } = { ...props }
    console.log(props)

    // const getTemplate = template => {
    //     switch (template) {
    //         case "Animate":
    //             return <Templates.Animate />
    //         default:
    //             return
    //     }
    // }
    return (
        <div className="resumeMakerViewer">
            <div className="resumePaper">
                {getTemplate(template, data)}
            </div>
        </div>
    )
}

export default ResumeMakerViewer;