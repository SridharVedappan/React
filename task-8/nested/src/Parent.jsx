// App.js
import React from "react";

function Parent() {
  const message = "Hello, Hi I'm from parent component!";

  return (
    <div className="container">
      <h1>Parent Component</h1>
      <Child1 data={message} />
    </div>
  );
}

function Child1({ data }) {
  return (
    <div className="box child1">
      <h2>Child 1</h2>
      <Child2 data={data} />
    </div>
  );
}

function Child2({ data }) {
  return (
    <div className="box child2">
      <h2>Child 2</h2>
      <Child3 data={data} />
    </div>
  );
}

function Child3({ data }) {
  return (
    <div className="box child3">
      <h2>Child 3</h2>
      <Child4 data={data} />
    </div>
  );
}

function Child4({ data }) {
  return (
    <div className="box child4">
      <h2>Child 4</h2>
      <Child5 data={data} />
    </div>
  );
}

function Child5({ data }) {
  return (
    <div className="box child5 final">
      <h2>Child 5</h2>
      <p className="message">{data}</p>
    </div>
  );
}

export default Parent;
