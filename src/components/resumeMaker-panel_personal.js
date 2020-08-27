import React, { useContext, useEffect, useCallback, useState } from "react";
import { ResourceContext } from '../contexts/resource-context';

import OptionBlock from './OptionBlock'

const ResumeMakerPanel_Personal = () => {

    const [state, dispatch] = useContext(ResourceContext)
    // console.log("global tag" + state.current_resume.personal._tag_options_selection)
    // console.log("global title: " + state.current_resume.personal.title_options_selection)

    const [current, setCurrent] = useState(state.current_resume.personal)
    // console.log("local tag" + current._tag_options_selection)
    // console.log("local title" + current.title_options_selection)


    const updateResource = async (newResource) => {
        await dispatch({
            type: "UPDATE_RESOURCE_PERSONAL",
            values: newResource
        })
    }

    const updateCurrent = async (newCurrent) => {
        setCurrent(newCurrent)

        await dispatch({
            type: "UPDATE_CURRENT_RESUME_PERSONAL",
            values: newCurrent
        })
    }


    return (
        <>
            <h1>{state.personal.category_display}</h1>
            {
                state.personal.firstName == ""
                    ?
                    <div>Getting Resource</div>
                    :
                    <div style={{ borderTopWidth: 1, borderTopColor: "#999", borderTopStyle: "solid" }}>
                        {
                            Object.entries(state.personal).map(([key, value], i) => {
                                if (Array.isArray(value)) {
                                    return <OptionBlock key={key} objKey={key} values={value} cat="personal" current={current} updateCurrent={updateCurrent} updateResource={updateResource} />
                                }
                                else {
                                    if (!key == "firstName" && !key == "lastName") {
                                        return <div key={key}>{key} : {value}</div>
                                    }
                                }
                            })
                        }
                    </div>
            }
        </>
    )
}

export default ResumeMakerPanel_Personal;