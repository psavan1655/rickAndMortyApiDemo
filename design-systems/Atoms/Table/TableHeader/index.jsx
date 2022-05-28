import React from "react";
import styled from "styled-components";

const TableRow = styled.tr({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.5rem",
  borderBottom: "1px solid #ccc",
});

const TableHead = styled.th({
  width: "20%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.5rem",
  fontSize: "1.2rem",
  fontWeight: 800,
});

export default function TableHeader({ columns }) {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableHead key={column.key}>{column.title}</TableHead>
      ))}
    </TableRow>
  );
}
