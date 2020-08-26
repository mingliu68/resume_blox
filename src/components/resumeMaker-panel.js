import React, { useContext, useEffect, useCallback } from "react";
import { user_resources, blocks_options } from "../data";
import { ResourceContext } from '../contexts/resource-context';

import OptionBlock from './OptionBlock'



const ResumeMakerPanel = () => {

    const [state, dispatch] = useContext(ResourceContext);

    const getResource = useCallback(() => {
        dispatch({
            type: "INITIAL_RESOURCE",
            results: user_resources,
        })
    })

    useEffect(() => {
        getResource();
    }, [])

    return (
        <div style={{ paddingTop: 100 }}>
            {
                state.personal.firstName == ""
                    ?
                    <div>Getting Resources</div>
                    :
                    Object.entries(state.personal).map(([key, value], i) => (<><h3>{key}</h3><p>{value}</p></>))

            }
            <h1>{state.personal.firstName[0]}</h1>
        </div>

    )
    // return (
    //     <div className="resumeMakerPanel" style={{ overflowY: "auto" }}>
    //         <h1>Personal Data</h1>
    //         <div style={{ borderTopWidth: 1, borderTopColor: "#999", borderTopStyle: "solid" }}>
    //             {
    //                 Object.entries(user_resources.personal).map(([key, value], i) => {
    //                     if (Array.isArray(value)) {
    //                         return <OptionBlock key={key} objKey={key} values={value} cat="personal" />
    //                     }
    //                     else {
    //                         if (!key == "firstName" && !key == "lastName") {
    //                             return <div key={key}>{key} : {value}</div>
    //                         }
    //                     }
    //                 })
    //             }
    //         </div>
    //     </div>
    // )
}

export default ResumeMakerPanel;