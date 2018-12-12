import './styles/main.css'
import React from 'react'
import { render } from 'react-dom'
import AudioComments from 'react-media-editor'

const rootNode = document.getElementById('app')

render(
  <div className="page-wrapper editor">
    <AudioComments
      enableComments
      src="https://ia802508.us.archive.org/5/items/testmp3testfile/mpthreetest.mp3"
    />
  </div>,
  rootNode
)
