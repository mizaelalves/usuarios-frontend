import React, { useState } from "react";
import axios from "axios";

function Search() {
  const [ user, setUser ] = useState("");

  async function handleSearch() {
    await axios.get(`http://localhost:5000/users/${user}`).then(response => {
    const searchUser = response.data;
    console.log(searchUser);
    return localStorage.setItem('Users', JSON.stringify(searchUser))
  });
}

  return (
    <>
      <div className="Search">
      <input
        className="userInput"
        placeholder="user"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />
      </div>
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </>
  );
}

export default Search;
