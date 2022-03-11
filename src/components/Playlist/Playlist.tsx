import React, { useState } from "react";

import { Link } from "react-router-dom";


import Song from '../Song/Song'

import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import { useEffect } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {  playlistTokenContract } from '../../contracts/contract'
import './Playlist.css';

const Playlist = () => {
    const [songs, setSongs] = useState<Array<any>>([])
    const [name, setName] = useState<string>('')
    const playlistId = 0
    useEffect(() => {
        (async () => {
            const playlist = await playlistTokenContract.playlists(playlistId)
            const songs = await playlistTokenContract.getAllSongsInLeaderboard(playlistId)
            const songsInfo = []
            for (const song in songs) {
                songsInfo.push(await playlistTokenContract.viewSong(playlistId, song))
            }
            setSongs(songsInfo)
            setName(playlist.name)
        })()
    }, [])

    return (
        <Container maxWidth="lg">
        <div className="playlist">

            <div className="playlist_left">
                <div className="playlist_name">{name}</div>

                <div className="playlist_image"> 
                    <img src="./images/playlist.gif" alt="Playlist Image"/>
                </div>

                <div> 
                    {songs.map((song) => <Song song={song} playlistId={playlistId} /> )}
                    <MoreHorizIcon />
                </div>
            </div>

            <div className="playlist_right">
                <Fab variant="extended" className="playlist_button">
                    <LibraryMusicOutlinedIcon sx={{ mr: 1 }} />
                    <Link to='/songnftlist'>
                        Playlist Song NFTs
                    </Link>
                    
                </Fab>
                <Fab variant="extended" className="playlist_button">
                        <Link to='/mintsong'>
                        Mint your Song NFT
                        </Link>
                </Fab>
                <Fab variant="extended" className="playlist_button">
                    <Link to='/dropreptoken'>
                        The Drop Rep Token
                    </Link>
                </Fab>
            </div>

        </div>
        </Container>
    )
}

export default Playlist;