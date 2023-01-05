import classes from './Linkcomponent.module.css';
import React from 'react'

// Get the link as an argument and lead to that link
const Linkcomponent = (props) => {
    return (
        <div>
            <a href={props.link} target="_blank" className={classes.link}>{props.children}</a>
        </div>
    )
}

export default Linkcomponent
