import React from "react";
import "./PhotoCollections.css";
import city from "../../../static/images/Homepage/city.jpg";
import nature from "../../../static/images/Homepage/nature.jpg";
import fitness from "../../../static/images/Homepage/fitness.jpg";
import beauty from "../../../static/images/Homepage/beauty.jpg";
import news from "../../../static/images/Homepage/news.jpg";
import people from "../../../static/images/Homepage/people.jpg";
import innovation from "../../../static/images/Homepage/innovation.jpg";
import religion from "../../../static/images/Homepage/religion.jpg";
import PhotoCollectionCard from "./PhotoCollectionCard/PhotoCollectionCard";

interface PhotoCollectionsProps {}

const PhotoCollections: React.FC<PhotoCollectionsProps> = () => {
  let images = [
    { image: city, text: "city" },
    { image: nature, text: "nature" },
    { image: fitness, text: "fitness" },
    { image: beauty, text: "beauty" },
    { image: news, text: "news" },
    { image: people, text: "people" },
    { image: innovation, text: "innovation" },
    { image: religion, text: "religion" },
  ];

  return (
    <div className="photo-collection-container">
      <div className="photo-collection-heading">
        high resolution photo collections
      </div>
      <div className="photo-collection-grid-container">
        {images.map((image, index) => (
          <div className="photo-collection-grid-item" key={index}>
            <PhotoCollectionCard imgText={image.text} image={image.image} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default PhotoCollections;
