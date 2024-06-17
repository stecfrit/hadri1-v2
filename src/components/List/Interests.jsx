import React, { useState, useEffect } from "react";

export default function Interests() {
  const interests = [
    {
      title: "Skiing",
      image_folder: "ski",
      images: [
        "trysil2.jpg",
        "tromso.jpg",
        "mask.jpg",
        "trysil.jpg",
        "tromso2.jpg",
        "tignes.jpg",
        "valleeperdue.jpg",
      ],
      description: "This is a description",
      badges: ["BASI 1 Instructor"],
    },
    {
      title: "Skydiving",
      image_folder: "skydiving",
      images: ["5way.png", "two.jpg"],
      description: "This is a description",
      badges: ["B License", "VP of UoSSC"],
    },
  ];

  return (
    <div id="Interests" className="section">
      <h3>Interests</h3>
      <p>work in progress</p>
      <div className="interest-container">
        {interests.map((interest, key) => {
          return <ImageContainer interest={interest} key={key} />;
        })}
      </div>
    </div>
  );
}

function ImageContainer({ interest }) {
  const [imageIndex, setImageIndex] = useState(0);

  const changeImage = (step) => {
    if (imageIndex + step >= interest.images.length) setImageIndex(0);
    else if (imageIndex + step < 0) setImageIndex(interest.images.length - 1);
    else setImageIndex(imageIndex + step);
  };

  useEffect(() => {
    //preloading image
    interest.images.forEach((image_url) => {
      const img = new Image();
      img.src = "./interests/" + interest.image_folder + "/" + image_url;
    });
  }, []);

  return (
    <div className="interest-card">
      <div className="card-left">
        <p>{interest.title}</p>
        <p>{interest.description}</p>
      </div>
      <div className="card-right">
        <img
          src={`./interests/${interest.image_folder}/${interest.images[imageIndex]}`}
          alt={interest.images[imageIndex]}
        />
        <div className="img-buttons">
          <button
            className="prev"
            onClick={() => {
              changeImage(-1);
            }}
          ></button>
          <button
            className="next"
            onClick={() => {
              changeImage(1);
            }}
          ></button>
        </div>
      </div>
    </div>
  );
}
