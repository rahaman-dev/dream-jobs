import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blogsMargin">
      <h2 className="qus">when should you context API?</h2>
      <p className="ans">
        Context is primarily used when some data needs to be accessible by many
        components at different nesting levels. Apply it sparingly because it
        makes component reuse more difficult. If you only want to avoid passing
        some props through many levels, component composition is often a simpler
        solution than context.
      </p>
      <h2 className="qus">what is custom hook?</h2>
      <p className="ans">
        A custom hook is a special JavaScript function whose name starts with
        'use' and can be used to call other hooks. Let's take a look at some
        major differences between a custom React JS hook and React JS
        components: A custom hook does not require a specific signature.Aug 4,
        2022
      </p>
      <h2 className="qus">what is useRef, on react?</h2>
      <p className="ans">
        useRef(initialValue) is a built-in React hook that accepts one argument
        as the initial value and returns a reference (aka ref). A reference is
        an object having a special property current .
      </p>
      <h2 className="qus">what is useMemo on react</h2>
      <p className="ans">
        useMemo() is a function that returns a memoized value of a passed in
        resource-intensive function. It is very useful in optimizing the
        performance of a React component by eliminating repeating heavy
        computations.
      </p>
    </div>
  );
};

export default Blog;
