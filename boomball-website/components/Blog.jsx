import React from "react";
import Cards from "./Cards/Cards";

const Blog = () => {
  return (
    <section id="blog">
      <div className="container mx-auto">
        <h2 className="h2 text-primary justify-center text-center lg:text-start my-4">
          Blog
        </h2>
        <Cards />
      </div>
    </section>
  );
};

export default Blog;
