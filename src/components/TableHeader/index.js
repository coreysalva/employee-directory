import React from "react";



function TableHeader(props){
    return (
        <thead>
            <tr>
                <th className="th-sm" scope="col">{/* profile pic */}</th>
                <th className="th-sm" scope="col" onClick={() => props.changeSortDirection()}>Name <img className={props.sortDirection === "ascend" ? "sortImageUp" : "sortImageDown"} src="./arrow.png" alt="" /></th>
                <th className="th-sm" scope="col">Number</th>
                <th className="th-sm" scope="col">Email</th>
                <th className="th-sm" scope="col">DOB</th>
            </tr>
        </thead>
    );
}

export default TableHeader;