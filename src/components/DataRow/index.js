import React from "react";


function DataRow(props){
    return (
        <tr className={props.render ? "dataRow showRow" : "dataRow hideRow"}>
            <td><img className="" src={props.employeeIMG} alt="..." /></td>
            <td>{props.employeeName.last}, {props.employeeName.first}</td>
            <td>{props.employeeNumber}</td>
            <td>{props.employeeEmail}</td>
            <td>{props.employeeDOB.substring(0, props.employeeDOB.length-14)}</td>
        </tr>
    );
}

export default DataRow;