import React, { useContext, useEffect } from "react";
import { user_resources, blocks_options } from "../data";
import { ResourceContext } from '../contexts/resource-context';

import OptionBlock from './OptionBlock'
import { ResourceContext } from "../contexts/resource-context";



const ResumeMakerPanel = props => {
    return (
        <div className="resumeMakerPanel" style={{ overflowY: "auto" }}>
            <h1>Personal Data</h1>
            <div style={{ borderTopWidth: 1, borderTopColor: "#999", borderTopStyle: "solid" }}>
                {
                    Object.entries(user_resources.personal).map(([key, value], i) => {
                        if (Array.isArray(value)) {
                            return <OptionBlock key={key} objKey={key} values={value} cat="personal" />
                        }
                        else {
                            if (!key == "firstName" && !key == "lastName") {
                                return <div key={key}>{key} : {value}</div>
                            }
                        }
                    })
                }
            </div>
        </div>
    )
}

export default ResumeMakerPanel;