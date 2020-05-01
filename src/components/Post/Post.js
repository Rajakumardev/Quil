import React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import avatar from "../../assests/profile.svg";

function Post(props) {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo();
  return (
    <div className="bg-white w-full p-2 my-4 rounded-lg flex flex-col">
      <div className="w-full flex flex-row items-center">
        <img src={avatar} className="w-12 h-12 rounded-full mr-2" />
        <h3 className="mr-2 text-gray-600">
          {props.data.displayName}
          <span className="bg-indigo-500 p-1 ml-2 opacity-50 rounded-sm text-white text-xs">
            {timeAgo.format(props.data.time.toDate(), "twitter")}
          </span>
        </h3>
      </div>
      <div className="py-4 mx-12">{props.data.content}</div>
      <div className="text-gray-600 flex flex-row justify-around border-gray-400">
        <a href="#">
          <i className="fa fa-heart"></i>
        </a>
        <a href="#">
          <i className="fa fa-comment"></i>
        </a>
      </div>
    </div>
  );
}

export default Post;
