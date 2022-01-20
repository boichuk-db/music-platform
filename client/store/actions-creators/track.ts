import axios from "axios";
import { useRouter } from "next/router";
import { Dispatch } from "react";
import { TrackAction, TrackActionTypes } from "../../types/track";

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await axios.get("http://localhost:5000/tracks");
      dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: response.data });
    } catch (e) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: "Track loading error",
      });
    }
  };
};
export const deleteTrack = (track) => {
  return async (dispatch: Dispatch<TrackAction>) => {
    const router = useRouter();
    try {
      const response = await axios.delete(
        "http://localhost:5000/tracks/" + track._id
      );

      dispatch({ type: TrackActionTypes.DELETE_TRACK, payload: response.data });
    } catch (e) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: "Delete error",
      });
    }
    router.push("/tracks");
  };
};

export const searchTracks = (query: string) => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/tracks/search?query=" + query
      );
      dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: response.data });
    } catch (e) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: "Tracks not found",
      });
    }
  };
};
