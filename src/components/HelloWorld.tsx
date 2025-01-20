import React from "react";

type HelloWorldProps = {
  title: string;
  description: string;
};

const HelloWorld: React.FC<HelloWorldProps> = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default HelloWorld;
