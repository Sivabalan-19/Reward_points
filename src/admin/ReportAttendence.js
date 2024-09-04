import { useFilters,usePagination, useGlobalFilter }from "react-table";
import React,{useState} from "react";
import { FaSearch } from "react-icons/fa";
import { useTable } from "react-table";
import { MdOutlineLockClock } from "react-icons/md";
export default function ReportAttendence({ columns, data}) {
 
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
    setGlobalFilter,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    setPageSize,
    pageCount,
    page,
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    {

      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },

    },

    useFilters,
    useGlobalFilter, 
    usePagination

  );


const handlePageSizeChange = (e) => {
  setPageSize(Number(e.target.value));
};
  return (
    <div className="head-rep-table--e">
    <div
          style={{
            display: "flex",
            width: "100%",
            height: "8%",
            alignItems: "center",
          }}
        >
          <div className="Reward"> Reward Points </div>

          <div className="search-bar-em">
            <input
              // value={filterInput2}
              // onChange={handleFilterChange2}
              placeholder={"Reg No"}
              className="ba-em"
            />
            <div className="search-em">
              <FaSearch />
            </div>
          </div>

          <div className="search-bar-em">
            <input
              // value={filterInput}
              // onChange={handleFilterChange}
              placeholder={"Department"}
              className="ba-em"
            />
            <div className="search-em">
              <FaSearch />
            </div>
          </div>

          <div className="search-bar-em1">
            <select 
            // onChange={handleFilterChange3}
             className="ba-em">
              <option
                style={{ color: "#2B3674", fontWeight: "600" }}
                value=""
                selected
                disabled
                hidden
              >
                Sort By Points
              </option>
              <option value="Reward">High To Low</option>
              <option value="Honour">Low To High</option>
            </select>
          </div>
        </div>
    <div className="table-em">
    <table {...getTableProps()}>
      
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th  {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      {pageCount > 0 ? (
                <tbody {...getTableBodyProps()}>
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td
                      colSpan={columns.length}
                      style={{
                        textAlign: "center",
                        padding: "20px",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          height: "200px",
                          justifyContent: "center",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          {" "}
                          <div className="nodatafoundicon-em">
                            <MdOutlineLockClock />
                          </div>
                          <div className="nodatafoundtext">No Data Found</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
            <div className="tablefoot-em">
              <div
                style={{
                  display: "flex",
                  width: "90%",
                  justifyContent: "space-between",
                }}
              >
                <span className="page-em">
                  Page{" "}
                  <strong>
                    {pageIndex + 1} of {pageCount}
                  </strong>{" "}
                </span>
                <div>
                  <span className="rowpage-em">Rows Per Page</span>&ensp;
                  <select
                    className="noofrow-em"
                    onChange={handlePageSizeChange}
                  >
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                      <option key={pageSize} value={pageSize}>
                        {pageSize}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="tablebottem-em">
                <button
                  className="nextpagebut-em"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  {"<"}
                </button>
                <button
                  className="nextpagebut-em"
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  {">"}
                </button>
              </div>
            </div>
            </div>
          </div>
    
  );
}
