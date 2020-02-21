import React from "react";
import first from "https://unsplash.com/photos/iKaEFWaIMbk";
export default function Images() {
  const imagesList = [
    {
      id: 1,
      src: "../Assests/images/1.jfif",
      title: "foo",
      description: "bar"
    },
    {
      id: 2,
      src: "../Assests/images/2.jfif",
      title: "foo",
      description: "bar"
    },
    {
      id: 3,
      src: "../Assests/images/5.jpeg",
      title: "foo",
      description: "bar"
    },
    {
      id: 4,
      src: "../Assests/images/1.jfif",
      title: "foo",
      description: "bar"
    },
    {
      id: 5,
      src: "https://unsplash.com/photos/iKaEFWaIMbk",
      title: "foo",
      description: "bar"
    }
  ];
  return (
    <div>
      <img src={first} />
      />
    </div>
  );
}
