import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSongsStart } from "../features/songs/songsSlice";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const SongListContainer = styled.div`
  padding: 20px;
`;

const songItemStyle = css`
  list-style: none;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const SongList = () => {
  const dispatch = useDispatch();
  const { songs, loading, error } = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(fetchSongsStart());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <SongListContainer>
      <h1>Song List</h1>
      <ul>
        {songs.map((song) => (
          <li key={song.id} css={songItemStyle}>
            {song.title} by {song.artist}
          </li>
        ))}
      </ul>
    </SongListContainer>
  );
};

export default SongList;
