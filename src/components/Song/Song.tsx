import React from "react";

import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { SongResponse } from '../../contracts/types/playlisttoken'
import {  playlistTokenContract } from '../../contracts/contract'
import './Song.css'

interface SongProps {
    song: SongResponse
    playlistId: number
}

const Song = ({ song, playlistId }: SongProps) => {
    const { creator, tokenAddr, tokenId, score } = song
    const title = `${tokenAddr} - ${tokenId}`
    return (
        <div title={title} className="song">
            <div className="song_artist">{creator}</div>
            <span className="song_artist">{score}</span>
            <audio controls>
                <source src="horse.ogg" type="audio/ogg" />
                <source src="horse.mp3" type="audio/mpeg"/>
                Your browser does not support the audio tag.
            </audio>
            <button onClick={() => { playlistTokenContract.upvoteSong(playlistId, tokenId) }}>upvote</button>
        </div>
    )
}

export default Song;
