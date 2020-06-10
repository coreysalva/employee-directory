import React from "react";
import DataRow from "../DataRow";


function DataBody(props){


    let employees = props.employeeList.sort(props.compareStr);


    return (
        <tbody>
            {employees.map(e => {

                return <DataRow 
                    key={e.cell}
                    employeeIMG={e.picture.thumbnail}
                    employeeName={e.name}
                    employeeNumber={e.cell}
                    employeeEmail={e.email}
                    employeeDOB={e.dob.date}
                    render={e.render}
                />;
            })}
        </tbody>
    );
}

export default DataBody;