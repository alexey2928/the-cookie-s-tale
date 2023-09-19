"use client";
import { Input } from "postcss";
import React, { useState } from "react";
import { GrSend } from "react-icons/gr";

function NewSecret() {
  const [maxLen, setMaxLen] = useState(5000);
  const [input, setInput] = useState("");
  //   const [progress, setProgress] = useState(0);
  const progress = Math.floor((input.length / maxLen) * 100);

  const inputHandler = (e) => {
    setInput(e.target.value);
    // setProgress(Math.floor((input.length / maxLen) * 100));
  };
  return (
    <div className="bg-gray-50 border border-border rounded-lg mx-[25%] my-8">
      <form>
        <label for="message" class="block m-2 text-xl font-medium border-b-2">
          Your secret
        </label>
        <textarea
          id="message"
          rows="10"
          maxLength={maxLen}
          className="block resize-none p-3 w-full text-sm bg-gray-50  focus:outline-none rounded-lg"
          placeholder="Write your thoughts here..."
          onChange={inputHandler}
        ></textarea>
        <div className="p-2 text-gray-500 flex justify-end">
          <p>{maxLen - input.length}</p>
        </div>
        <div className="m-2">
          <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-progressBar text-center">
            <div
              style={{ width: `${progress}%` }}
              className="w-full shadow-none flex text-center items-center whitespace-nowrap justify-center bg-border"
            ></div>
            <div className="absolute flex items-center justify-center left-[50%]">
              {progress} %
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end m-2">
          <button
            className="flex items-center justify-between shadow-lg border border-border rounded-full p-3 px-[10%] bg-button"
            type="submit"
          >
            <span className="mr-2">Send</span>
            <span>
              <GrSend />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewSecret;
