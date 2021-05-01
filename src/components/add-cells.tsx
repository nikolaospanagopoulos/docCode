import "./add-cells.css";
import { useActions } from "../hooks/use-actions";
interface AddCellsProps {
  previousCellId: string | null;
  forceVisible?:boolean
}

export const AddCell: React.FC<AddCellsProps> = ({ previousCellId,forceVisible }) => {
  const { insertCellAfter } = useActions();
  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`} >
      <div className="add-button">
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(previousCellId, "code")}
        >
          <span className="icon is-small">
            <i className="fas fa-plus"></i>
          </span>
          <span>Code</span>
        </button>
        <button onClick={() => insertCellAfter(previousCellId, "text")}  className="button is-rounded is-primary is-small">
          
        <span className="icon is-small">
            <i className="fas fa-plus"></i>
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className="divider"></div>
    </div>
  );
};
