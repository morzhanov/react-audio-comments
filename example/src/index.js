import './assets/styles/main.css'
import React from 'react'
// import { Editor, TYPE_AUDIO } from 'react-media-editor'
import { render } from 'react-dom'
import { Editor, TYPE_AUDIO } from '../../../dist/index.min'

const rootNode = document.getElementById('app')

render(
  <div className="page-wrapper editor">
    <Editor
      enableComments
      type={TYPE_AUDIO}
      src="https://ia802508.us.archive.org/5/items/testmp3testfile/mpthreetest.mp3"
    />
  </div>,
  rootNode
)
