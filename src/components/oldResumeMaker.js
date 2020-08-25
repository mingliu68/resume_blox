import React from 'react';
import { user_resources, blocks_options } from "../data";
import OptionBlock from './OptionBlock'
import { Redirect } from 'react-router-dom';
import OldResumeMakerViewer from './oldResumeMakerViewer';
import OldResumeMakerPanel from './oldResumeMakerPanel';

const OldResumeMaker = (props) => {

    return (
        <div style={{ display: "flex", height: "100%", paddingTop: 80, boxSizing: 'border-box' }}>
            <OldResumeMakerPanel />
            <OldResumeMakerViewer template="Animate" data={blocks_options} resource={user_resources} />
        </div>
    )
}

export default OldResumeMaker;