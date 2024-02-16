import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <>
      <div id="blog ">
        <div className="content">
          <span>
            <h6>Our Story</h6>
          </span>
          <div>
            <h1>WelCome To Royal</h1>
          </div>
          <div>
            <p>
              The Old Ebbitt Grill, Washington'soldest saloon, was founded in 1856 when,zacording to legend,innkeeper William E. Ebbitt boughta boarding house. Today, no one can pinpoint the house’s exact location, but it was most likely on the edge of present-dayChinatown. As a boarding house, the Ebbitt guest list read like a Who's Who of American History. President McKinley is said to have lived there during his tenure in Congress, and Presidents Ulysses Grant, Andrew Johnson, Grover Cleveland, Theodore Roosevelt and   Warren Harding supposedly refreshed themselves at its tand-around bar.
            </p>
          </div>
        </div>
        <div className="photo">
            <img src="./assets/img/blog.jpeg"/>
        </div>
      </div>
    </>
  );
};

export default Blog;
