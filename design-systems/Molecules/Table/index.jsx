import React from "react";
import TableHeader from "../../Atoms/Table/TableHeader";
import TableRow from "../../Atoms/Table/TableRow";
import styled from "styled-components";

const TableStyled = styled.table({
  width: "100%",
  border: "2px solid gray",
  backgroundColor: "#F3E9DD",
});

const TableBody = styled.tbody({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const PaginationRow = styled.tr({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "end",
});

const PaginationButton = styled.button({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.5rem",
  border: "1px solid #ccc",
  margin: "0 0.5rem",
  backgroundColor: "#F3E9DD",
});

export default function Table({ columns, data, pagination, setPageNumber }) {
  return (
    <TableStyled>
      <TableBody>
        <TableHeader columns={columns} />
        {data.map((row) => (
          <TableRow key={row.id} row={row} columns={columns} />
        ))}
      </TableBody>
      <PaginationRow>
        <PaginationButton
          disabled={!pagination.prev}
          onClick={() => setPageNumber(pagination.prev)}
        >
          Prev
        </PaginationButton>
        <PaginationButton
          disabled={!pagination.next}
          onClick={() => setPageNumber(pagination.next)}
        >
          Next
        </PaginationButton>
      </PaginationRow>
    </TableStyled>
  );
}
