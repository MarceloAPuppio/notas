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
          <form action="">
            <input
              type="text"
              value={currentNota ? currentNota.title : ""}
              onChange={handleChangeI}
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={currentNota ? currentNota.description : ""}
              onChange={handleChangeTA}
            ></textarea>
            <button>Agregar +</button>
          </form>
        </div>
        <div className="notes-preview"></div>
      </section>
    </>
  );
};

export default PantallaNotas;
