import React from "react";
import * as TempAnimate from '../templates/TempAnimate'

export const Animate = props => {
    const { personal, contact, summary } = { ...props.data }
    console.log(personal.firstName)
    return (
        <>
            <TempAnimate.Header firstName={personal.firstName} lastName={personal.lastName} title={personal.title} />
            Test Animate Template
        </>
    )
}

export const getTemplate = (template, data) => {
    switch (template) {
        case "Animate":
            return <Animate data={data} />
        default:
            return
    }
}

