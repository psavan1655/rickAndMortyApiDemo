import React from "react";
import styled from "styled-components";

const TableRowStyled = styled.tr({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.5rem",
  borderBottom: "1px solid #ccc",
  backgroundColor: (props) =>
    props.isOrigin === "unknown" ? "#DAB88B" : "#B7CADB",
});

const TableData = styled.td({
  width: "20%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.5rem",
  fontSize: "0.8rem",
  fontWeight: 500,
});

export default function TableRow({ columns, row }) {
  return (
    <TableRowStyled isOrigin={row?.origin?.name}>
      {columns.map((column) => (
        <TableData key={column.title}>
          {row[column.key]?.name ? row[column.key].name : row[column.key]}
        </TableData>
      ))}
    </TableRowStyled>
  );
}
