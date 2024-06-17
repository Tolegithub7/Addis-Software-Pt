import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createSongStart } from "../features/songs/songsSlice";
import styled from "@emotion/styled";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
`;

const SongForm = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [year, setYear] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSongStart({ title, artist, album, year }));
    setTitle("");
    setArtist("");
    setAlbum("");
    setYear("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Add a New Song</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Album"
        value={album}
        onChange={(e) => setAlbum(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
      />
      <button type="submit">Add Song</button>
    </FormContainer>
  );
};

export default SongForm;
