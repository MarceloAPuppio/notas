import React from "react";

const Panel = () => {
  return (
    <>
      <aside className="panel">
        <div className="panel-buscador">
          <input type="text" />
        </div>
        <ul className="panel-listNotes">
          <li className="panel-listNotes__item"></li>
        </ul>
      </aside>
    </>
  );
};

export default Panel;
