import React from "react";
import { auth } from "../firebase";

const style = {
  button: `bg-[#73BAD3] text-white font-bold py-2 px-4 rounded`,
};

const LogOut = () => {
  const signOut = () => {
    signOut(auth);
  };

  return (
    <button onClick={() => auth.signOut()} className={style.button}>
      LogOut
    </button>
  );
};

export default LogOut;
