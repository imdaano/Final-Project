import './styles/Create.scss';
import React, { useState } from "react";
import NewBook from './NewBook';
import NewCheckpoint from './NewCheckpoint';

const Create = () => {

  const [show, setShow] = useState("newbook");

  return (
    <div className="createform">
    <div className='button--box'>
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
