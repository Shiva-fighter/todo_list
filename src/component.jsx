import React from "react";

export function Component() {
  const model2 = [
    {
      heading1: "Mobile Operating System"
    },
    {
      heading1: "Mobile Manufactures"
    }
  ];
  const model1 = [
    { name: "Android" },
    { name: "Blackphone" },
    { name: "Iphone" },
    { name: "Windows" }
  ];
  // const head = "Mobile Operating System";
  const head2 = "Mobile Manufactures";
  return (
    <>
      {model1.map((value) => {
        return <h3>{value.name}</h3>;
      })}
    </>
  );
}
