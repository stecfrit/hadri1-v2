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
      description:
        "I have been skiing since forever but only recently have I started to ski more seriously. One of my lifestyle goals is to be able to ski on weekends casually whenever I want.",
      badges: ["BASI 1 Instructor"],
      badge_links: ["https://www.basi.org.uk/AboutUs"],
    },
    {
      title: "Skydiving",
      image_folder: "skydiving",
      images: ["5way.png", "two.jpg"],
      description:
        "I got into skydiving in University and have been hooked ever since. Jumping out of a plane is the best way to clear your mind, and one of the best feelings in the world.",
      badges: ["B License", "VP of UoSSC"],
      badge_links: [
        "https://britishskydiving.org/training-progression/what-next/",
        "https://www.susu.org/groups/skydive",
      ],
    },
  ];

  return (
    <div id="Interests" className="section">
      <h3>Interests</h3>
      <p>--- WORK IN PROGRESS ---</p>
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
        <p className="title">{interest.title}</p>
        <p className="description">{interest.description}</p>
        <div className="badges">
          {interest.badges.map((badge, key) => {
            return (
              <a target="_blank" href={interest.badge_links[key]} key={key}>
                {badge}
              </a>
            );
          })}
        </div>
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
