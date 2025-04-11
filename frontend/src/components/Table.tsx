import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface TableProps {
  columns: string[];
  data: Array<Record<string, string | number>> | [];
  table_name: string;
}

const Table: React.FC<TableProps> = ({ columns, data, table_name }) => {
  const navigate = useNavigate();
  return (
    <div className="overflow-x-auto shadow-sm border-b border-gray-200 rounded-lg">
      <table className="min-w-full table-auto">
        {/* Table Header */}
        <thead className="bg-white">
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className="py-4 px-6 text-left text-md md:text-lg font-semibold border-b tracking-wider"
              >
                {col === "id" ? "" : col[0].toUpperCase() + col.slice(1)}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-white">
          {data.map((row, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-100"
              onClick={() => {
                navigate(`/${table_name}/edit/${row.id}`);
              }}
            >
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="py-4 px-6 text-md md:text-lg text-gray-800"
                >
                  {col === "id" ? ">" : row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
