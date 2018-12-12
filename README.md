# React Audio Comments

#### React components library with graphical Audio representation and comments.

[![npm version](https://badge.fury.io/js/react-audio-comments.svg)](https://badge.fury.io/js/react-audio-comments)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/morzhanov/react-audio-comments/issues)
[![HitCount](http://hits.dwyl.io/morzhanov/react-audio-comments.svg)](http://hits.dwyl.io/morzhanov/react-audio-comments)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<img src="https://i.imgur.com/DbFz3bY.png" alt="logo" />

## Description

Use this library to add graphical audio files representations in your React application. 

The second part of this library provides components to split and comment your audio tracks, each comment bined to specific point on audio track and you can change audio progress by clicking on comments items.

## Installation


NPM package:
```
yarn i react-audio-comments
```

Also you can modify project files directly, project built using <a href="https://rollupjs.org/guide/en">RollupJS</a> module bundler.

#### Example

To run example: 

* go to /example folder
* yarn i
* yarn start
* open <a href="localhost:3000">localhost:3000</a>

## Usage

Here is an example how to use AudioComments compoent within you application:

```
import React from 'react'
import { render } from 'react-dom'
import AudioComments from 'react-audio-comments'

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
```

### props

<b>src</b> - path to audio source file

<b>enableComments</b> - enable audio comments components; this components contains CommantsList and AddCommentPopup. Every comment bined to specific point on the audio graphic. By clicking on specific comment playback will jump to bined part of the song.

### Comments usage

To add comment use this steps:

* click on specific point in audio graph
* click on `Add Comment` button
* Enter comment in popup and click `Add`
* Comment will be added to comments list. If you click on specific comment playback will jump to bined part of the audio.

</br>

## Main Technologies and libraries

- <a href="https://reactjs.org/">React</a>
- <a href="https://rollupjs.org">Rollup.JS</a>
- <a href="https://webpack.js.org/">Webpack 4</a>
- <a href="https://eslint.org/">ESLint</a>
- <a href="https://github.com/prettier/prettier">Prettier</a>
- <a href="https://babeljs.io/">Babel</a>

## More

If you would like to edit images or video files please take a look on <a href="https://github.com/morzhanov/react-media-editor">react-media-editor</a> library.

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

## Author

Vlad Morzhanov

## License

#### (The MIT License)

Copyright (c) 2018 Vlad Morzhanov.
You can review license in the LICENSE file.


