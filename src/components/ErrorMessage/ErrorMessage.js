import error from "./error.gif";

import React from "react";

export default function ErrorMessage() {
  return (
    <img
      style={{ margin: "0 auto", marginBottom: "25px" }}
      src={error}
      alt="error"
    />
  );
}
