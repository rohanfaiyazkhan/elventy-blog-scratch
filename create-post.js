const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const types = {
  research: 'research',
  tech: 'tech',
}

if (!argv.name) {
  console.error('Please provide a name for the post using --name "Name"')
  process.exit(1)
}

if (!argv.research && !argv.tech) {
  console.error('Please provide a type for the post using --research or --tech')
  process.exit(1)
}

const type = argv.research ? types.research : types.tech

const fs = require('fs')

const post_preamble = `---
title:
author:
date:
draft: true
header_img:
header_img_caption:
header_img_alt:
share_img:
share_desc:
tags:
excerpt:
---
`

function getFilePath(name, type) {
  let fileName = name
  if (!fileName.endsWith('.md')) {
    fileName = fileName + '.md'
  }

  return `./src/posts/${type}/${fileName}`
}

const filePath = getFilePath(argv.name, type)

fs.writeFile(filePath, post_preamble, (err) => {
  if (err) {
    return console.error(err)
  }
  console.log(`The file ${filePath} was created!`)
})
