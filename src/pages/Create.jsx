import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewBook from './NewBook';
import NewCheckpoint from './NewCheckpoint';

const Create = () => {

  const [show, setShow] = useState("newbook");

  return (
    <div className="create">
    <div>
        <button onClick={() => setShow("newbook")}>New Book</button>
        <button onClick={() => setShow("newcheckpoint")}>New Checkpoint</button>
      </div>
      <div>
      {show === 'newbook' && <NewBook/>}
      {show === 'newcheckpoint' && <NewCheckpoint/>}
      </div>
    </div>
  );
};

export default Create;
