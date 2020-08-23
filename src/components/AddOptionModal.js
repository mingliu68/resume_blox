import React, { useEffect, useRef } from "react";

const AddOptionModal = props => {
    const { switchModal, modal, inputValue, handleInputChange, addNewTag, msg } = props
    const inputElement = useRef(null)

    useEffect(() => {
        if (inputElement.current) {
            inputElement.current.focus()
        }
    })

    return (
        <div className={modal ? "optionModal optionModal_active" : "optionModal "}>
            <div onClick={switchModal}>X</div>
            <input
                type="text"
                value={inputValue}
                onChange={e => handleInputChange(e)}
                ref={inputElement}
            />
            {
                (msg)
                    ? <div>Invalid tag.  No tag was added.</div>
                    : null
            }
            <button onClick={addNewTag}>Add</button>
        </div>
    )
}

export default AddOptionModal;