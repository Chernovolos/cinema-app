import React from "react";
export default ({show}) => {

    return (
        show ?
            <div className="preloader-wrapper">
                <div className="preloader-container">
                    <h2 className="animate">Loading</h2>
                </div>
            </div>:
            null
    );
}