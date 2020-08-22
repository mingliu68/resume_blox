import React from 'react';
import { user_resources, blocks_options } from "../data";
import OptionBlock from './OptionBlock'
import { Redirect } from 'react-router-dom';
import ResumeMakerViewer from './ResumeMakerViewer';

const ResumeMaker = (props) => {

    return (
        <div style={{ display: "flex", height: "100%" }}>
            {/* <h1>Create a new resume</h1> */}
            <div className="resumeMakerPanel" style={{ overflowY: "auto" }}>
                {
                    Object.entries(user_resources.personal).map(([key, value], i) => {
                        if (Array.isArray(value)) {
                            return <OptionBlock key={key} objKey={key} values={value} cat="personal" />
                        }
                        else {
                            return <div key={key}>{key} : {value}</div>
                        }
                    })
                }

            </div>
            <ResumeMakerViewer template="Animate" data={blocks_options} resource={user_resources} />


        </div>
    )
}

export default ResumeMaker;