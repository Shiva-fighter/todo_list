import React from "react";

export function Component() {
  const h1 = ["Mobile Operating System"];
  const h2 = ["Mobile Manufactures"];

  const model1 = ["Android, blackberry", "Blackphone", "Iphone", "Windows"];
  const model2 = ["Samsung", "Apple", "Micromax", "HTC"];
  return (
    <>
      <h1>{h1}</h1>
      <Displaydata data={model1} />
      <h1>{h2}</h1>
      <Displaydata data={model2} />
    </>
  );
}

function Displaydata({ data }) {
  // console.log(data);
  return (
    <>
      <ul>
        {data.map((val) => {
          return <li>{val}</li>;
        })}
      </ul>
    </>
  );
}
