import React, { useContext, useEffect, useCallback, useState } from "react";
import { user_resources, blocks_options } from "../data";
import { ResourceContext } from '../contexts/resource-context';
import ResumeMakerPanel_Personal from '../components/resumeMaker-panel_personal';
import OptionBlock from './OptionBlock'



const ResumeMakerPanel = () => {

    const [state, dispatch] = useContext(ResourceContext);
    const [ready, setReady] = useState(false)
    // console.log(state.current_resume)
    const getResource = useCallback(async () => {
        await dispatch({
            type: "INITIAL_RESOURCE",
            resources: user_resources,  //data from dummy data, will be update to api later
            current: blocks_options
        })
        setReady(true)
    })

    useEffect(() => {
        getResource();
    }, [])

    // return (
    //     <div style={{ paddingTop: 100 }}>
    //         {
    //             state.personal.firstName == ""
    //                 ?
    //                 <div>Getting Resources</div>
    //                 :
    //                 Object.entries(state.personal).map(([key, value], i) => (<><h3>{key}</h3><p>{value}</p></>))

    //         }
    //         <h1>{state.personal.firstName[0]}</h1>
    //     </div>
    // )

    return (
        <div className="resumeMakerPanel" style={{ overflowY: "auto" }}>
            {
                ready
                    ?
                    <ResumeMakerPanel_Personal />
                    :
                    <div>Getting Resources</div>
            }

            {/* <h1>{state.personal.category_display}</h1>
            {
                state.personal.firstName == ""
                    ?
                    <div>Getting Resource</div>
                    :
                    <div style={{ borderTopWidth: 1, borderTopColor: "#999", borderTopStyle: "solid" }}>
                        {
                            Object.entries(state.personal).map(([key, value], i) => {
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
            } */}
        </div>
    )
}

export default ResumeMakerPanel;