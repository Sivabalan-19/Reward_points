import React, { useState, useEffect } from "react";
import { useFilters, useTable, usePagination } from "react-table";
import { FaRegBell, FaSearch } from "react-icons/fa";
import { MdOutlineLockClock } from "react-icons/md";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function   Table({ columns, data, Table_header_name }) {
  const [isTableReady, setIsTableReady] = useState(false);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    setPageSize,
    pageCount,
    gotoPage,
    page,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 }, // Set initial page index and page size
    },
    useFilters,
    usePagination
  );

  const [filterInput, setFilterInput] = useState("");
  const [filterInput2, setFilterInput2] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsTableReady(true);
    }, 100); // 1 second delay

    return () => clearTimeout(timeoutId);
  }, []);

  if (!isTableReady) {
    return <div></div>;
  }

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("Activity_name", value);
    setFilterInput(value);
  };

  const handleFilterChange2 = (e) => {
    const value = e.target.value || undefined;
    setFilter("Activity_code", value);
    setFilterInput2(value);
  };

  const handleFilterChange3 = (e) => {
    setFilter("Activity_type", e.target.value);
  };

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
  };

  return (
    <div className="main-body">
      <div className="scrollonly-em">
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "8%",
            alignItems: "center",
          }}
        >
          <div className="eventm-em"> {Table_header_name}</div>

          <div className="search-bar-em">
            <input
              value={filterInput2}
              onChange={handleFilterChange2}
              placeholder={"Activity Code"}
              className="ba-em"
            />
            <div className="search-em">
              <FaSearch />
            </div>
          </div>

          <div className="search-bar-em">
            <input
              value={filterInput}
              onChange={handleFilterChange}
              placeholder={"Activity Name"}
              className="ba-em"
            />
            <div className="search-em">
              <FaSearch />
            </div>
          </div>

          <div className="search-bar-em1">
            <select onChange={handleFilterChange3} className="ba-em">
              <option
                style={{ color: "#2B3674", fontWeight: "600" }}
                value=""
                selected
                disabled
                hidden
              >
                Sort By Category
              </option>
              <option value="Reward">Reward</option>
              <option value="Honour">Honour</option>
            </select>
          </div>
        </div>
        <div className="sim-em">
          <div className="table-em">
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </th>
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
                            <td
                              {...cell.getCellProps()}
                              className={
                                cell.column.id === "Activity_name"
                                  ? "event-name"
                                  : ""
                              }
                            >
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
      </div>
    </div>
  );
}
