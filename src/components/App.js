import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const API_URL = "http://localhost:6001/listings";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((listings) => setListings(listings))
      .catch((error) => console.error("There was a problem with the fetch operation:", error));
  },[]);

  const handleSearchSubmit = async (searchTerm) => {
    console.log('searchTerm:', searchTerm);
    fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((listings) => {
        const filteredListings = listings.filter((listing) => {
         return listing.description.toLowerCase().includes(searchTerm.toLowerCase())
        });
        setListings(filteredListings)
      })
      .catch((error) => console.error("There was a problem with the fetch operation:", error));
  }

  const handleDeleteListing = async (id) => {
    console.log('id:', id);
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then(() => {
      const updatedListings = listings.filter((listing) => listing.id !== id);
      setListings(updatedListings);
    });
  };

  return (
    <div className="app">
      <Header listings={listings} onSearchSubmit={handleSearchSubmit}/>
      <ListingsContainer listings={listings} onDelete={handleDeleteListing} />
    </div>
  );
}

export default App;
