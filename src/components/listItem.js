import React, { useContext, useEffect } from "react";
import Context from "../Context";

const ListItem = (nota) => {
  let { notas, setNotas } = useContext(Context);
  const handleClickDelete = () => {
    let copyNotas = notas.filter((index) => index.id !== nota.id);
    setNotas(copyNotas);
  };

  const handleClickPin = (e) => {
    let copyNotas = notas.filter((item) => item.id !== nota.id);
    let editedPinnedNota = { ...nota };
    editedPinnedNota.pinned = !nota.pinned;
    editedPinnedNota.pinned
      ? e.target.classList.add("pinned")
      : e.target.classList.remove("pinned");
    setNotas([...copyNotas, editedPinnedNota]);
  };

  return (
    <li className="panel-listNotes__item">
      {nota.title}
      <div className="panel-listNotes__item__buttonwrapper">
        <button>📝</button>
        <button onClick={handleClickDelete}>❌</button>
        <button onClick={handleClickPin}>{nota.pinned ? "📌" : "FIJAR"}</button>
      </div>
    </li>
  );
};

export default ListItem;
