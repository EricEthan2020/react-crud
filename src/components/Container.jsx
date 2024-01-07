import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-[900px] p-5  mx-auto py-10 text-gray-800">{children}</div>
  );
};

export default Container;
