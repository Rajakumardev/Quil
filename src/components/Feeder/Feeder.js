import React from "react";
import Post from "../Post/Post";

function Feeder(props) {
  const postData = props.postData;
  return (
    <div className="w-1/2">
      {postData.length > 0 &&
        postData.map((data, index) => <Post key={index} data={data} />)}
    </div>
  );
}

export default Feeder;
