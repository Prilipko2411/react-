import React, { useState, useEffect } from "react";

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleUserClick = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setAlbums(data));
    setSelectedUser(userId);
    setSelectedAlbum(null);
    setPhotos([]);
  };

  const handleAlbumClick = (albumId) => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data));
    setSelectedAlbum(albumId);
  };

  return (
    <div>
      <h1>Список користувачів</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleUserClick(user.id)}>Album</button>
            {selectedUser === user.id && (
              <ul>
                {albums.map((album) => (
                  <li key={album.id}>
                    {album.title}
                    <button onClick={() => handleAlbumClick(album.id)}>Photos</button>
                    {selectedAlbum === album.id && (
                      <ul>
                        {photos.map((photo) => (
                          <li key={photo.id}>
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListPage;