import React, { useState, useEffect, useCallback, useRef, useContext } from "react";
import { user_resources, blocks_options } from "../data";
import AddOptionModal from "./AddOptionModal";
import { ResourceContext } from '../contexts/resource-context'

const OptionBlock = (props) => {
    const [state, dispatch] = useContext(ResourceContext)
    const { objKey, cat, current, updateCurrent } = props

    // console.log(objKey, state.current_resume[cat][`${objKey}_selection`])

    const [values, setValues] = useState(props.values)
    const multiple = objKey[0] == "_"
    const [active_m, setActive_m] = useState([])

    const [active_s, setActive_s] = useState(-1)
    // console.log(multiple ? `Multiple: ${objKey} ${active_m}` : `Single: ${objKey} ${active_s}`)

    const [modal, setModal] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [msg, setMsg] = useState(false)

    const handleMultiClick = (index) => {
        const i = active_m.findIndex((element) => element == index)
        // item clicked is not currently active, i return -1
        if (i < 0) {
            setActive_m([...active_m, index])
        }
        else {
            setActive_m(active_m.filter(element => element != index))
        }
        let newCurrent = { ...current }
        newCurrent[`${objKey}_selection`] = [...active_m]
        updateCurrent(newCurrent);
    }

    const handleSingleClick = (index) => {
        setActive_s(active_s == index ? -1 : index)
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

    useEffect(() => {
        Array.isArray(current[`${objKey}_selection`])
            ?
            setActive_m(current[`${objKey}_selection`])
            :
            setActive_s(current[`${objKey}_selection`])

        // console.log(multiple ? `Multiple: ${objKey} ${active_m}` : `Single: ${objKey} ${active_s}`)

    }, [])

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
                                onClick={() => handleSingleClick(index)}
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
                <div className="draggable_box" onClick={switchModal} style={{ backgroundColor: "#666" }}>Add</div>
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