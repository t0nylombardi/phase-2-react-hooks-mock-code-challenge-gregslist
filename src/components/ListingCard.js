import React from "react";

function ListingCard({listing, onDelete}) {
  const {id, price, description, image, location} = listing;

  const handleDelete = async () => onDelete(id);

  return (
    <li className="card" key={id}>
      <div className="image">
        <span className="price">{`$ ${price}`}</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
