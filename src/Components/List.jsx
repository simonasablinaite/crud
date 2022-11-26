import { useContext } from "react";
import DataContext from "./DataContext";

function List() {
  const { things } = useContext(DataContext);

  return (
    <div className="card">
      <div className="top">List of Things</div>

      <div className="body">
        {things?.map((t) => (
          <Row key={t.id} thing={t} />
        ))}
      </div>
    </div>
  );
}

export default List;
