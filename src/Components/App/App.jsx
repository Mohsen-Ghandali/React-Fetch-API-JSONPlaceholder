import { useEffect, useState } from "react";

const App = () => {
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(data => data.json()).then(res => {
      setPosts(res)
    }).catch(error => console.log(error))
  })
  return (
    <div className=" container-fluid  text-white mt-2 ">
      <div className="row m-0 justify-content-center" >
        {posts === null ? "" : posts.map((elem) => {
          return (
            <div className="col-5 bg-dark p-3 m-1 shadow-lg rounded-2">
              <h4>{elem.title.substr(0, 30)}</h4>
              <p>{elem.body.substr(0, 100)}</p>
            </div>
          )
        })}
      </div>

    </div>

  );
};

export default App;

