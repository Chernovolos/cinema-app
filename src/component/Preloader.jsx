import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCoffee} from "@fortawesome/free-solid-svg-icons";

export default ({show}) => {

    return (
        show ?
            <div>
               <FontAwesomeIcon icon={faCoffee}/>
            </div>:
            null
    );
}