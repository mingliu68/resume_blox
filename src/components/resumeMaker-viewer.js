import React, { useContext, useEffect } from "react";
import { ResourceContext } from '../contexts/resource-context';


const ResumeMakerViewer = () => {

    const [state, dispatch] = useContext(ResourceContext)

    useEffect(() => {

    })

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {
                Object.entries(state.current_resume.personal).map(([key, value], i) => (
                    <div key={i} >
                        <h3>{key}</h3>
                        <div>
                            {
                                Array.isArray(value)
                                    ?

                                    value.map((item, i) => (
                                        <div key={`${item}_${i}`}>{item}</div>
                                    ))

                                    :
                                    <div>{value}</div>
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ResumeMakerViewer;