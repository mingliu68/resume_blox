import React, { useState, useEffect, useCallback, useRef } from "react";
import { user_resources, blocks_options } from "../data";
import AddOptionModal from "./AddOptionModal";

const OptionBlock = (props) => {
    const { objKey, cat } = props
    const [values, setValues] = useState(props.values)
    const multiple = objKey[0] == "_"
    const [active_m, setActive_M] = useState([])
    const [active_s, setActive_S] = useState(-1)
    const [modal, setModal] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [msg, setMsg] = useState(false)

    const handleMultiClick = (index) => {
        const i = active_m.findIndex((element) => element == index)
        if (i < 0) {
            setActive_M([...active_m, index])
        }
        else {
            setActive_M(active_m.filter(element => element != index))
        }
        blocks_options[objKey] = [...active_m]
        console.log(blocks_options[objKey])
    }

    const switchModal = () => {
        setInputValue("")
        setModal(!modal)
    }

    const handleInputChange = e => {
        setMsg(false)
        setInputValue(e.target.value)
    }

    const addNewTag = () => {
        if (inputValue && !values.includes(inputValue)) {
            setValues([...values, inputValue])
            user_resources[cat][objKey].push(inputValue)
            switchModal()
        }
        else {
            setMsg(true)
            setInputValue("")
        }
    }

    return (
        <div>

            <h3>{objKey}</h3>

            <div className="draggable_box_container">
                {
                    !multiple
                        ? values.map((value, index) => (
                            <div
                                className={active_s == index ? "draggable_box active_option" : "draggable_box"}
                                key={index}
                                onClick={() => setActive_S(active_s == index ? -1 : index)}
                            >
                                {value}
                            </div>
                        ))
                        : values.map((value, index) => (
                            <div
                                className={active_m.includes(index) ? "draggable_box active_option" : "draggable_box"}
                                key={index}
                                onClick={() => handleMultiClick(index)}
                            >
                                {value}
                            </div>
                        ))
                }
                <div className="draggable_box" onClick={switchModal} style={{ backgroundColor: "#666" }}>Add New</div>
            </div>

            <AddOptionModal
                switchModal={switchModal}
                modal={modal}
                inputValue={inputValue}
                handleInputChange={handleInputChange}
                addNewTag={addNewTag}
                msg={msg}
            />

        </div>
    )
}

export default OptionBlock;