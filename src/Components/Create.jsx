import { useContext, useState } from "react";

function Create() {
  const [thing, setThing] = useState("");
  const [color, setColor] = useState("1000000");
  const [cb, setCb] = useState(false);

  const { setCreateData } = useContext(DataContext);

  const add = () => {
    setCreateData({
      thing,
      color,
      cb: cb ? 1 : 0,
    });
    setThing("");
    setColor("#00000");
    setCb(false);
  };

  return (
    <div className="card">
      <div className="top">Create New Thing</div>

      <div className="body">
        <div className="form">
          <label>Thing</label>
          <input
            type="text"
            value={thing}
            onChange={(e) => setThing(e.target.value)}
            className="input"
          />
        </div>

        <div className="form">
          <label>Color</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="input"
          />
        </div>

        <div className="form">
          <label htmlFor="cb">Circle or Square</label>
          <input
            type="checkbox"
            id="cb"
            checked={cb}
            onChange={() => setCb((c) => !c)}
            className="input"
          />
          <div className="c"></div>
          <div className="s"></div>
        </div>
      </div>

      <div className="form">
        <button className="button-blue" onClick={add}>
          Make Thing
        </button>
      </div>
    </div>
  );
}
export default Create;
