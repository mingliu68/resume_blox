import React from 'react';
import { user_resources, blocks_options } from "../data";
import OptionBlock from './OptionBlock'
import { Redirect } from 'react-router-dom';
import ResumeMakerViewer from './ResumeMakerViewer';
import ResumeMakerPanel from './ResumeMakerPanel';

const ResumeMaker = (props) => {

    return (
        <div style={{ display: "flex", height: "100%", paddingTop: 80, boxSizing: 'border-box' }}>
            <ResumeMakerPanel />
            <ResumeMakerViewer template="Animate" data={blocks_options} resource={user_resources} />
        </div>
    )
}

export default ResumeMaker;