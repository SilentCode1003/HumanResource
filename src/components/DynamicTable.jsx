import React from "react";

const DynamicTable = ({ columns, data,title }) => {
  return (
    <div className="card shadow mb-4 tablemargin tablecolor">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold table-title">{(title)}</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="employee_dataTable"
            width="100%"
          >
            <thead className="tablecolor">
              <tr>
                {columns.map((column, index) => (
                  <th key={index}>{formatHeader(column)}</th>
                ))}
              </tr>
            </thead>
            <tbody className="tablecolor">
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((column, columnIndex) => (
                    <td key={columnIndex}>{row[column]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const formatHeader = (header) => {
  return header.replace(/\s+/g, " ");
};

export default DynamicTable;
