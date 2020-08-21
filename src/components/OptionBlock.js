import React, { useState, useEffect, useCallback } from "react";

const OptionBlock = (props) => {
    const { objKey, values } = props
    const multiple = objKey[0] == "_"
    const [active_m, setActive_M] = useState([])
    const [active_s, setActive_S] = useState(-1)

    const handleMultiClick = (index) => {
        const i = active_m.findIndex((element) => element == index)
        if (i < 0) {
            setActive_M([...active_m, index])

        } else {
            setActive_M(active_m.filter(element => element != index))
        }
    }

    return (
        <div>
            <h3>{objKey}</h3>
            <div className="draggable_box_container">
                {
                    !multiple ?
                        values.map((value, index) => (
                            <div
                                className={active_s == index ? "draggable_box active_option" : "draggable_box"}
                                key={index}
                                onClick={() => setActive_S(active_s == index ? -1 : index)}
                            >
                                {value}
                            </div>
                        )
                        ) :
                        values.map((value, index) => (
                            <div
                                className={active_m.includes(index) ? "draggable_box active_option" : "draggable_box"}
                                key={index}
                                onClick={() => handleMultiClick(index)}
                            >
                                {value}
                            </div>
                        )
                        )
                }
            </div>

        </div>
    )
}

export default OptionBlock;