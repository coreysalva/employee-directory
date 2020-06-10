import React from "react";
import Header from "../Header";
import DataArea from "../DataArea";


function MainContainer(props){
    return (
        <div className="container">
            <Header />

            <div className="row">
                <div className="col-1">

                </div>

                <div className="col-10">
                    <DataArea />
                </div>

                <div className="col-1">
                
                </div>
            </div>
        </div>
    );
}

export default MainContainer;