import React from "react";
import TableHeader from "../TableHeader";
import DataBody from "../DataBody";


function DataTable(props){
    return (
        <div id="employeeTable" className="table-responsive w-auto">
            <table className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%">
                <TableHeader changeSortDirection={props.changeSortDirection} sortDirection={props.sortDirection} />
                <DataBody employeeList={props.employeeList} sortDirection={props.sortDirection} compareStr={props.compareStr}/>
            </table>
        </div>
    );
}

export default DataTable;