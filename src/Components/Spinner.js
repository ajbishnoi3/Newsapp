import React from "react";
import loading from "./newsgif.gif";
export default function Spinner() {
  return (
    <>
      <div className="text-center">
        <img style={
          {height:"90px"}
          }className="my-3" src={loading} alt="loading" />
      </div>
    </>
  );
}
