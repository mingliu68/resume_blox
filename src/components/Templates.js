import React from "react";
import * as TempAnimate from '../templates/TempAnimate'

export const Animate = props => {
    const { data, resource } = { ...props }
    // const { resource } = props.resource
    console.log(resource)
    return (
        <>
            <TempAnimate.Header firstName={data.personal.firstName} lastName={data.personal.lastName} title={data.personal.title} personal_resource={resource.personal} />
            Test Animate Template
        </>
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


