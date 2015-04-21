#!/usr/bin/env node

var os = require('os')
var path = require('path')
var fs = require('fs')

var platform = os.platform()

var shebang = {
  darwin: '#!/bin/bash\n',
  linux: '#!/bin/bash\n',
  win32: ''
}

fs.writeFileSync(path.join(__dirname, 'run.bat'), shebang[platform])
