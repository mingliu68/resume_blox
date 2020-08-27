import React from "react";
import * as TempAnimate from '../templates/TempAnimate'

export const Animate = props => {
    // data is blocks option
    const { data, resource } = { ...props }
    // const { resource } = props.resource
    console.log(resource)
    return (
        <div style={{ backgroundColor: "#ffcb00", display: "flex", flexDirection: "column", flex: 1, height: "100%", width: "100%", justifyContent: "space-between", alignItems: "flex-start", padding: 0, }}>
            <TempAnimate.Header firstName={resource.personal.firstName} lastName={resource.personal.lastName} title={data.personal.title_options_selection} personal_resource={resource.personal} />
        </div>
    )
}

export const getTemplate = (template, data, resource) => {
    switch (template) {
        case "Animate":
            return <Animate data={data} resource={resource} />
        default:
            return
    }
}


