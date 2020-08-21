import React from 'react';
import { user_resources, blocks_options } from "../data";
import OptionBlock from './OptionBlock'

const ResumeMaker = (props) => {


    return (
        <>
            <h1>Create a new resume</h1>
            <div>
                {
                    Object.entries(user_resources.personal).map(([key, value], i) => {
                        if (Array.isArray(value)) {
                            return <OptionBlock key={key} objKey={key} values={value} />
                        }
                        else {
                            return <div key={key}>{key} : {value}</div>
                        }
                    })
                }
            </div>

        </>
    )
}

export default ResumeMaker;