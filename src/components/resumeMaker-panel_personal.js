import React, { useContext, useEffect, useCallback, useState } from "react";
import { ResourceContext } from '../contexts/resource-context';

import OptionBlock from './OptionBlock'

const ResumeMakerPanel_Personal = () => {

    const [state, dispatch] = useContext(ResourceContext)
    // console.log("state" + state.current_resume.personal._tag_options_selection)

    const [current, setCurrent] = useState(state.current_resume.personal)
    // console.log("current" + current._tag_options_selection)


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
                                    return <OptionBlock key={key} objKey={key} values={value} cat="personal" current={current} updateCurrent={updateCurrent} />
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