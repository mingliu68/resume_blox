import React from "react";
import { ResourceContextProvider } from "../contexts/resource-context";
import ResumeMakerPanel from "../components/resumeMaker-panel";
import ResumeMakerViewer from '../components/resumeMaker-viewer';

const ResumeMakerView = () => {



    return (
        <ResourceContextProvider>
            <ResumeMakerPanel />
            <ResumeMakerViewer />
        </ResourceContextProvider>
    )
}

export default ResumeMakerView;