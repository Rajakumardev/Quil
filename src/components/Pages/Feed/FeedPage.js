import React, { useEffect, useState, Fragment } from "react";
import * as firebase from "firebase";
import { useHistory } from "react-router-dom";

import Loader from "../../Layouts/Loader";
import Header from "../../Header/Header";
import PostForm from "../../PostForm/PostForm";
import Feeder from "../../Feeder/Feeder";

function FeedPage() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [postData, setpostData] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    setLoading(true);
    firebase.auth().onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        setLoading(false);
        history.push("/login");
      } else {
        setUser(currentUser);
        loadFeed();
        setLoading(false);
      }
    });
  }, []);

  const loadFeed = () => {
    let data = [];
    firebase
      .firestore()
      .collection("Quills")
      .orderBy("time", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setpostData(data);
      });
  };

  return (
    <div className="bg-gray-200 h-full">
      {loading && (
        <div className="w-full h-screen">
          <Loader loading={loading} />
        </div>
      )}
      {!loading && (
        <Fragment>
          <Header />
          <div className="bg-gray-200 flex flex-col itmes-center items-center absolute mt-12 left-0 right-0">
            <PostForm loadFeed={loadFeed} user={user} />
            <Feeder postData={postData} />
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default FeedPage;
