import React, { FC } from "react";
import { BonolotoResultPrizes } from "../services/types";

interface DetailedResultsProps {
  rows: BonolotoResultPrizes[];
}

interface TableProps {
  rows: BonolotoResultPrizes[];
}

const TableRow = ({
  shaded,
  categoria,
  ganadores,
  premio,
}: {
  shaded: boolean;
  categoria: number;
  premio: string;
  ganadores: string;
}) => (
  <tr className={`${shaded ? "bg-gray-200" : ""}`}>
    <td className="text-left pl-3">
      <span>{categoria}</span>
    </td>
    <td className="text-center">
      <span>{ganadores}</span>
    </td>
    <td className="text-right pr-3">
      <span>{premio}</span>
    </td>
  </tr>
);

const Table: FC<TableProps> = ({ rows }) => (
  <table className="w-10/12">
    <thead>
      <tr className="bg-gray-300">
        <th className="text-left pl-2">Categories</th>
        <th>Winners</th>
        <th className="text-right pr-2">Prizes, €</th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row, index) => (
        <TableRow key={index} shaded={index % 2 === 0} {...row} />
      ))}
    </tbody>
  </table>
);

export const DetailedResults: FC<DetailedResultsProps> = ({ rows }) => (
  <div className="w-full flex justify-center mb-5">
    <Table rows={rows} />
  </div>
);
