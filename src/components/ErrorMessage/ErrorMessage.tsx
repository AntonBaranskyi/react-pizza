import React from "react";
import error from "./error.gif";

const ErrorMessage: React.FC = () => {
  return (
    <img
      style={{ margin: "0 auto", marginBottom: "25px" }}
      src={error}
      alt="error"
    />
  );
};

export default ErrorMessage;
