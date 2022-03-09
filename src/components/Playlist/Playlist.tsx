import React from "react";

import { Link } from "react-router-dom";


import Song from '../Song/Song'

import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import './Playlist.css';

const Playlist = () => {
    const getPlaylist = () => {
        return ''
    }

    return (
        <Container maxWidth="lg">
        <div className="playlist">

            <div className="playlist_left">
                <div className="playlist_name"> Playlist Name</div>

                <div className="playlist_image"> 
                    <img src="./images/playlist.gif" alt="Playlist Image"/>
                </div>

                <div> 
                    <Song artist="Cloverdale Pomo" songId={1}/>
                    <Song artist="Tohono O'odham" songId={2}/>
                    <Song artist="Cloverdale Pomo" songId={3}/>
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