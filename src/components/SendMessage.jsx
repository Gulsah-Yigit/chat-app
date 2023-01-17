import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { auth, db } from "../firebase";

const style = {
  form: `h-14 w-full max-w-[728px] flex text-xl  fixed
  
  bottom-0 shadow-2xl`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none `,
  button: `w-[20%] bg-[#989CED] text-white font-bold`,
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <form onSubmit={sendMessage} className={style.form}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={style.input}
          type="text"
          placeholder="Message"
        />
        <button className={style.button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
