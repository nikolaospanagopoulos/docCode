import { useTypedSelector } from "../hooks/use-typed-selector";
import { CellListItem } from "./cell-list-item";
import { AddCell } from "./add-cells";
import { Fragment } from "react";
import './cell-list.css'
const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id) => {
      return data[id];
    });
  });

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} key={cell.id} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));
  return (
    <div className='cell-list'>
      <AddCell previousCellId={null} forceVisible={cells.length === 0} />
      {renderedCells}
    </div>
  );
};

export { CellList };
