import { useEffect } from "react";
import { useState } from "react";
import { create, destroy, read, update } from "../Functions/localStorage";
import "./App.scss";
import Create from "./Components/Create";

const key = 'thing_shelf'

function App() {
  const [things, setThings] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);

  const [msgs, setMsgs] = useState([]);

 
   // CREATE
   useEffect(() => {
    if (null === createData) {
      return;
    }
    create(key, createData);
    setLastUpdate(Date.now());
    makeMsg('THE THING WAS BROKEN!', 'SUCESS');
  }, [createData]);

  // READ
  useEffect(() => {
    setThings(read(key));
  }, [lastUpdate]);

  // UPDATE
  useEffect(() => {
    if (null === editData) {
      return;
    }
    update(key, editData, editData.id);
    setLastUpdate(Date.now());
  }, [editData]);

  // DELETE
  useEffect(() => {
    if(null === deleteData) {
      return;
    }
    destroy(key, deleteData.id) 
setLastUpdate(Date.now());
makeMsg('THE THING WAS BROKEN!', 'INFO');
  }, [deleteData]);

  const makeMsg = (text, type) => {
    const id = rand(1000000, 9999999);
    setMsgs(m => [...m, {text, id, type}]);
    setTimeout(()=> {
      setMsgs(m => m.filter(ms.id !==id));
    }, 4000);
  }




  return (
    < DataContext.Provider value = {{
      setCreateData,
      things,
      setDeleteData,
      modalData
      setModalData,
      setEditData,
      msgs
    }} >
    <div className="App">
      <div className="container">
        <div className="bin">
          <div className="box-1">
            <Create />
          </div>
          <div className="box-2">List</div>
        </div>
      </div>
    </div>
    </DataContext.Provider>
  );
}

export default App;
