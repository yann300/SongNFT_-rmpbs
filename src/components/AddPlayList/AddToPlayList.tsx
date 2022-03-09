import React from 'react'

import AddPlayList from './AddPlayList'

import "./AddPlayList.css"

function AddToPlayList() {
  return (
      <div className="add_to_playlist">
            <AddPlayList image='https://picsum.photos/200/300' profileSrc='' title='Good Bad'/>
            <AddPlayList image='https://picsum.photos/200/300' profileSrc='' title='Good Bad'/>
            <AddPlayList image='https://picsum.photos/200/300' profileSrc='' title='Good Bad'/>
      </div>
  )
}

export default AddToPlayList