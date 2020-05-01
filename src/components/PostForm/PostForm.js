import React from "react";
import "./PostForm.css";
import { useForm } from "react-hook-form";
import * as firebase from "firebase";

function PostForm(props) {
  const { register, handleSubmit, errors, reset } = useForm();
  const loadFeed = props.loadFeed;
  const user = props.user;

  const savePost = (formData) => {
    firebase
      .firestore()
      .collection("Quills")
      .add({
        content: formData.content,
        likes: 0,
        time: firebase.firestore.FieldValue.serverTimestamp(),
        postBy: user.uid,
        displayName: user.displayName,
      })
      .then(() => {
        //reset the form if operation is successfull
        reset();
        loadFeed();
      })
      .catch(() => {
        //not implemented yet
      });
  };

  return (
    <form
      className="bg-white w-1/2 mt-10 mx-10 p-4 rounded-lg flex flex-col"
      onSubmit={handleSubmit(savePost)}
    >
      <h3 className="font-semibold text-gray-600">Whats on your mind ?</h3>
      <textarea
        name="content"
        className="border-none w-full h-24 text-gary-600"
        style={{ resize: "none" }}
        ref={register({ required: true })}
      ></textarea>
      <i className="text-red-600 block px-2 mb-6 text-xs">
        {errors.content && "oh you forgot to type in !"}
      </i>
      <div className="flex justify-end">
        <input
          type="submit"
          className="p-1 w-20 bg-indigo-500 text-white rounded-md hover:bg-indigo-400"
          value="Post"
        />
      </div>
    </form>
  );
}

export default PostForm;
