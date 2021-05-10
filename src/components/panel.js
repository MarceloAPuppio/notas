import React, { useContext, useEffect } from "react";
import Context from "../Context";
import ListItem from "./listItem";
import uuid from "react-uuid";

const Panel = () => {
  let { notas, setNotas } = useContext(Context);
  const newNote = () => {
    let note = {
      id: uuid(),
      title: "[Sin Título]",
      description: "[Agrega una descripción]",
      fecha: new Date(),
      pinned: false,
    };
    return note;
  };
  const handleClick = () => {
    setNotas([...notas, newNote()]);
  };

  return (
    <>
      <aside className="panel">
        <div className="panel-buscador">
          <input type="text" />
          <button onClick={handleClick}>Agregar +</button>
        </div>
        <ul className="panel-listNotes">
          {notas.map((item, index) => (
            <ListItem {...item} key={item.id} />
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Panel;
