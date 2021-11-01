import React from 'react';
import "./style.css";

const SkillsItem = (props) => {
    return (
        <div>
            <li style={{ listStyleType: "none" }}>
             <a>{props.skill}</a>
             </li>
        </div>
    )
}

export default SkillsItem;