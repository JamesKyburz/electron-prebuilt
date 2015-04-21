#!/usr/bin/env node
var os = require('os')
var path = require('path')
var fs = require('fs')

var platform = os.platform()

var paths = {
  darwin: path.join(__dirname, './dist/Electron.app/Contents/MacOS/Electron'),
  linux: path.join(__dirname, './dist/electron'),
  win32: path.join(__dirname, './dist/electron.exe')
}

var shebang = {
  darwin: '#!/bin/bash\n',
  linux: '#!/bin/bash\n',
  win32: ''
}

var argv = {
  darwin: '"$@"',
  linux: '"$@"',
  win32: '%*' // does this work with " " in the args?
}

if (!paths[platform]) throw new Error('Unknown platform: ' + platform)
fs.writeFileSync(path.join(__dirname, 'path.txt'), paths[platform])
fs.writeFileSync(path.join(__dirname, 'run.bat'), shebang[platform] + '"' + paths[platform] + '" ' + argv[platform])
