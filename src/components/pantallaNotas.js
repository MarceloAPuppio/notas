import React, { useContext } from "react";
import Context from "../Context";
const PantallaNotas = () => {
  const { currentNota, setCurrentNota } = useContext(Context);
  const handleChangeTA = (e) => {
    // e.target.value=
    setCurrentNota({ ...currentNota, description: e.target.value });
  };

  const handleChangeI = (e) => {
    setCurrentNota({ ...currentNota, title: e.target.value });
  };
  return (
    <>
      <section className="notes">
        <div className="notes-edit">
          <h2>Editor</h2>
          <form action="" className="notes-edit__form">
            <input
              className="notes-edit__form__input"
              type="text"
              value={currentNota ? currentNota.title : ""}
              onChange={handleChangeI}
            />
            <textarea
              className="notes-edit__form__textarea"
              name=""
              id=""
              cols="30"
              rows="10"
              value={currentNota ? currentNota.description : ""}
              onChange={handleChangeTA}
            ></textarea>
            <button className="notes-edit__form__btn">Agregar +</button>
          </form>
        </div>
        <div className="notes-preview">
          <h2>Preview</h2>
        </div>
      </section>
    </>
  );
};

export default PantallaNotas;
