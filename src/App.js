import React, { useState } from "react";
import "./App.css";
import BasicTable from "./BasicTable";

const App = () => {
  const [text, settext] = useState("");
  const [data, setdata] = useState(["Shyam Jaiswal" , "Raunak Kumar" , "Yuraj Singh" , "Ashit Kumar Sinha"]);
  const[buttonText , setbuttonText] = useState("Add");
  const [editData, showEditData] = useState(-1);

  //  Delete opration =========>
  function handleDelete(index) {
    let newArray = data.filter((item) => {
      if (item !== data[index]) {
        return item;
      }
    });
    setdata(newArray);
  }
  //  Edit Opration ===========>
  let newTodo = [...data];
  function onTextEdit(event, index) {
    newTodo[index] = event.target.value;
    setdata(newTodo);
  }

  function handleEdit(index) {
    showEditData(index);
    setbuttonText("Save");
  }


  return (
    <div className="App">
    <form onSubmit={(e) => {
          if (text !== "") {
            setdata([...data, text]);
            settext("");
          }
          e.preventDefault()
        }}>
      {editData == -1 || editData == undefined ? (
        <input
          type="text"
          placeholder="Enter Text Here ..."
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
        />
      ) : (
        <input
          type="text"
          value={data[editData]}
          onChange={(e) => onTextEdit(e, editData)}
        />
      )}

      <button
        id="addList"
        onClick={() => {
          if (text !== "") {
            setdata([...data, text]);
            settext("");
          }
          showEditData(-1);
          setbuttonText("Add");
        }}
      >
        {buttonText}
      </button>
      <BasicTable
        allData={data}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      </form>
    </div>
  );
};

export default App;
