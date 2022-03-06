import React from "react";

export function Displaydata() {
  const model1 = [
    { name: "Android, blackberry" },
    { name: "Blackphone" },
    { name: "Iphone" },
    { name: "Windows" }
  ];

  return (
    <>
      {/* <ul> */}

      {model1.map((item) => {
        return <li>{item.name}</li>;
      })}
      {/* </ul> */}
    </>
  );
}
