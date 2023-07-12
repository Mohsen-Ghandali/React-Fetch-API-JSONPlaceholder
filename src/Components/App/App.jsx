import React, { useEffect, useState } from "react";

const App = () => {
  let [posts, setPosts] = useState(null); //for clean up must let use

  useEffect(() => {
    console.log("trigger posts");

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });

    //------start clean up----
    return () => {
      console.log("trigger clean up");
      setPosts(null);
    };

  }, []);
  //------end clean up----

  return (
    <div className="container-fluid text-white mt-2">
      <div className="row m-0 justify-content-center">
        {posts === null
          ? ""
          : posts.map((elem) => (
            <div
              className="col-5 bg-dark p-3 m-1 shadow-lg rounded-2"
              key={elem.id}
            >
              <h4>{elem.title.substr(0, 30)}</h4>
              <p>{elem.body.substr(0, 100)}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
