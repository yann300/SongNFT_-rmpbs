import Reactt from "react";
import { Link } from "react-router-dom";

import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddIcon from '@mui/icons-material/Add';

import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className='header_left'>
                <img src='../images/remix.png' alt='logo'/>
            </div>

            <div className='header_nav_items'>
                {/* <Link to='/' className="header_option">
                    <PlaylistPlayIcon fontSize="small" />
                    <div className="text_font">Playlist</div>
                </Link>

                <Link to='/' className="header_option">
                    <AddIcon fontSize="small" />
                    <div className="text_font">Add to Playlist</div>
                </Link>

                <div className="header_option">
                    <AccountBalanceWalletIcon fontSize="small" />
                    <div className="text_font">Connect Wallet</div>
                </div> */}
            </div>

            <div className="header_right">
                {/* <div className="header_input">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search Playlist" />
                </div> */}
                <Link to='/' className="header_option">
                    <PlaylistPlayIcon fontSize="small" />
                    <div className="text_font">Playlist</div>
                </Link>

                <Link to='/addtoplaylist' className="header_option">
                    <AddIcon fontSize="small" />
                    <div className="text_font">Add to Playlist</div>
                </Link>

                <div className="header_option">
                    <AccountBalanceWalletIcon fontSize="small" />
                    <div className="text_font">Connect Wallet</div>
                </div>
            </div>
        </div>
    )
}

export default Header;