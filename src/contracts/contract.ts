import { ethers } from "ethers";
import { ContractContext as ContractContextPlaylistToken } from './types/playlisttoken'
import { ContractContext as ContractContextSongToken } from './types/songtoken-abi'
import playlisttokenAbi from './types/playlisttoken-abi.json'
import songtokenAbi from './types/songtoken-abi.json'

export const playlisttokenAddress = '0xF3EF320E8AE2530D104a28f3DD80f604B123462a' // Ropsten
export const songtokenAddress = '0xf2378899883F05B8D7D0C73f2fDE725786D638b5' // Ropsten

const provider = new ethers.providers.Web3Provider(window.ethereum)

export const playlistTokenContract = new ethers.Contract(playlisttokenAddress, playlisttokenAbi, provider.getSigner()) as unknown as ContractContextPlaylistToken;

export const songTokenContract = new ethers.Contract(songtokenAddress, songtokenAbi, provider.getSigner()) as unknown as ContractContextSongToken;

