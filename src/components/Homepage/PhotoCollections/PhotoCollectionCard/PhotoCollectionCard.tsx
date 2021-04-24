import React from "react";
import "./PhotoCollectionCard.css";

interface PhotoCollectionCardProps {
  image: string;
  imgText: string;
}

const PhotoCollectionCard: React.FC<PhotoCollectionCardProps> = (props) => {
  return (
    <div className="photo-collection-card-container">
      <img
        src={props.image}
        alt="top-images"
        className="photo-collection-card-image"
      />
      <div className="photo-collection-card-text">{props.imgText}</div>
    </div>
  );
};
export default PhotoCollectionCard;
