"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
// import { FaRegComment } from "react-icons/fa";
import { GoShare } from "react-icons/go";

function Story({ category, number, time, textBody, likes, comments }) {
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div className="bg-white border border-border rounded-lg mx-[25%] my-8">
      <div className="flex items-center justify-between px-4 pt-4">
        <div>
          <h2>{category}</h2>
          <h2 className="text-button">#{number}</h2>
        </div>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
      <div className="mx-4 py-2 border-b-2">
        <p>{textBody}</p>
      </div>
      <div className="mx-4 text-base text-gray-500 flex items-center justify-between">
        <p>{likes} likes</p>
        {/* <p>{comments} comments</p> */}
      </div>
      <div className="flex items-center justify-between p-4">
        <button className="flex items-center" onClick={handleLike}>
          {like ? (
            <span className="text-2xl mr-2">
              <AiOutlineHeart />
            </span>
          ) : (
            <span className="text-red-500 text-2xl mr-2">
              <AiTwotoneHeart />
            </span>
          )}
          <span>Like</span>
        </button>
        {/* <button className="flex items-center">
          <span className="text-2xl mr-2">
            <FaRegComment />
          </span>
          <span>Comment</span>
        </button> */}
        <button className="flex items-center">
          <span className="text-2xl mr-2">
            <GoShare />
          </span>
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}

export default Story;
