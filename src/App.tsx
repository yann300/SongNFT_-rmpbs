import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Header from './components/Header/Header';
import Playlist from './components/Playlist/Playlist'
import NotFound from './components/404/404'
import SongNFTList from './components/SongsNFTList/SongNFTList'
import AddToPlaylist from './components/AddPlayList/AddToPlayList'
import DropRepToken from './components/DropRepToken/DropRepToken'

import MintSong from './components/MintSong/MintSont';
import './App.css';

function App() {
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={ <Playlist/> } />
        <Route path="/playlist" element={ <Playlist/> } />
        <Route path="/mintsong" element={ <MintSong/> } />
        <Route path="/songnftlist" element={ <SongNFTList /> } />
        <Route path="/addtoplaylist" element={ <AddToPlaylist /> } />
        <Route path="/dropreptoken" element={ <DropRepToken /> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </Router>
    
  );
}

export default App;
