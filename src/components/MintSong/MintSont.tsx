import React, { useRef } from 'react';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import { songTokenContract } from '../../contracts/contract'


import './MintSong.css'

const MintSong = () => {
    const inputTo = useRef<HTMLInputElement>(null)
    const inputUrl = useRef<HTMLInputElement>(null)
    return (
        <Container>
            <div className='song_info'> 0x123abc </div>
            <div className='mintsong_container'>
            <form action="" className='form'>
                
                

                <div className='input_button_container'>
                    <div className='mintsong_form_input'>
                    <TextField ref={inputTo} label='address of owner' variant="outlined" />
                                
                    </div >
                    
                </div>

                <div className='input_button_container'>
                    <div className='mintsong_form_input'>
                        <TextField ref={inputUrl} label='public url' variant="outlined" />
                                
                    </div >
                    
                </div>


                <div className='input_button_container'>
                    <div className='mintsong_form_input'>
                                <TextField id="outlined-basic" label="Title" variant="outlined" required />
                                
                    </div >
                    <div className='mintsong_form_button'>
                                <Fab variant="extended">
                                        Load MP3
                                </Fab>
                    </div>
                </div>
               
                <div className='input_button_container'>
                    <div className='mintsong_form_input'>
                                <TextField id="outlined-basic" label="Author" variant="outlined" required />
                                
                    </div>
                    <div className='mintsong_form_button'>
                                <Fab variant="extended">
                                        Load COVER
                                </Fab>
                    </div>
                </div>
               
                <div className='input_button_container'>
                    <div className='mintsong_form_input'>
                                <TextField id="outlined-basic" label="Duration" variant="outlined" required />
                                
                    </div>
                    <div className='mintsong_form_button'>
                                <Fab variant="extended">
                                        License
                                </Fab>
                    </div>
                </div>             

            </form>
            
                <div className='image_preview'>
                  <img src='./images/cover_image.jpg' alt='cover image'/>
                </div>
            </div>
            <div className='mint_button'>
                <Button variant="contained" onClick={() => {
                    if (inputTo.current && inputUrl.current) {
                        songTokenContract.safeMint(inputTo.current.value, inputUrl.current.value)
                    }
                }} disableElevation size='large'>
                    Mint
                </Button> 
            </div>
        </Container>
    )
}

export default MintSong;