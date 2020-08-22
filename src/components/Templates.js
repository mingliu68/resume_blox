import React from "react";

export const Animate = props => {
    return (
        <>
            Test Animate Template
        </>
    )
}

export const getTemplate = template => {
    switch (template) {
        case "Animate":
            return <Animate />
        default:
            return
    }
}

