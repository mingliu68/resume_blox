import React from "react";
import { ResourceContextProvider } from "../contexts/resource-context";
import ResumeMakerPanel from "../components/resumeMaker-panel";
import ResumeMakerViewer from '../components/resumeMaker-viewer';

const ResumeMakerView = () => {



    return (
        <ResourceContextProvider>
            <div style={{ display: "flex", height: "100%", paddingTop: 80, boxSizing: 'border-box' }}>
                <ResumeMakerPanel />
                <ResumeMakerViewer />
            </div>
        </ResourceContextProvider>
    )
}

export default ResumeMakerView;