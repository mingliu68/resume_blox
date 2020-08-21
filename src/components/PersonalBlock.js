import React, { useState, useEffect, useCallback } from "react";

const PersonalBlock = (props) => {
    const { objKey, values } = props

    return (
        <div>
            <h3>{objKey}</h3>
            <div className="draggable_box_container">
                {
                    values.map(value => {
                        return <div className="draggable_box">{value}</div>
                    })
                }
            </div>

        </div>
    )
}

export default PersonalBlock;