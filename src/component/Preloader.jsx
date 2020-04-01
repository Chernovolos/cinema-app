import React from "react";

export default ({show}) => {

    return (
        show ?
            <div>
                Loading...
            </div>:
            null
    );
}