import React from "react";
import { Table, Button } from "react-bootstrap";
import { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table";

// Responsive Table Data START******
const GlobalResFilter = ({ filter, setFilter }) => {
  return (
    <span className="d-flex ms-auto">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4"
        placeholder="Search..."
      />
    </span>
  );
};

export const COLUMN = [
  {
    Header: "Customer ID",
    accessor: "customerId",
    className: "text-center wd-15p border-bottom-0",
  },
  {
    Header: "First Name",
    accessor: "firstName",
    className: "text-center wd-15p border-bottom-0 ",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
    className: "text-center wd-15p border-bottom-0 ",
  },
  {
    Header: "Country",
    accessor: "country",
    className: "text-center wd-15p border-bottom-0 ",
  },
  {
    Header: "Email",
    accessor: "email",
    className: "text-center wd-15p border-bottom-0",
  },
  {
    Header: "Phone Number",
    accessor: "phoneNumber",
    className: "text-center wd-15p border-bottom-0 ",
  },
];

export const RESDATATABLE = [
  {
    firstName: "Bella",
    lastName: "Chloe",
    email: "b.Chloe@datatables.net",
  },
];

export const ResponsiveUsersTable = () => {
  const tableInstance = useTable(
    {
      columns: COLUMN,
      data: RESDATATABLE,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <div className="e-table px-5 pb-5">
        <div className="d-flex">
          <select
            className="mb-4 table-border me-1"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
          <GlobalResFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>

        <Table {...getTableProps()} className="table-bordered text-nowrap border-bottom">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())} className={column.className}>
                    <span className="tabletitle">{column.render("Header")}</span>
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <i className="fa fa-angle-down"></i>
                        ) : (
                          <i className="fa fa-angle-up"></i>
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr className="text-center" {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div className="d-block d-sm-flex mt-4 ">
          <span className="">
            Page {pageIndex + 1} of {pageOptions.length}
          </span>
          <span className="ms-sm-auto ">
            <Button
              variant=""
              className="btn-default tablebutton me-2 my-2"
              onClick={() => {
                gotoPage(0);
              }}
              disabled={!canPreviousPage}
            >
              <i className="fa fa-step-backward"></i>
            </Button>
            <Button
              variant=""
              className="btn-default tablebutton me-2 my-2"
              onClick={() => {
                previousPage();
              }}
              disabled={!canPreviousPage}
            >
              <i className="fa fa-chevron-left"></i>
            </Button>
            <Button
              variant=""
              className="btn-default tablebutton me-2 my-2"
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              <i className="fa fa-chevron-right"></i>
            </Button>
            <Button
              variant=""
              className="btn-default tablebutton me-2 my-2"
              onClick={() => {
                gotoPage(pageCount - 1);
              }}
              disabled={!canNextPage}
            >
              <i className="fa fa-step-forward"></i>
            </Button>
          </span>
        </div>
      </div>
    </>
  );
};
