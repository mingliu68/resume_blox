import React from 'react';
import { user_resources, blocks_options } from "../data";
import PersonalBlock from './PersonalBlock'

const ResumeMaker = (props) => {


    return (
        <>
            <h1>Create a new resume</h1>
            <div>
                {
                    Object.entries(user_resources.personal).map(([key, value], i) => {
                        if (Array.isArray(value)) {
                            return <PersonalBlock objKey={key} values={value} />
                        }
                        else {
                            return <div>{key} : {value}</div>
                        }
                    })
                }
            </div>

        </>
    )
}

export default ResumeMaker;