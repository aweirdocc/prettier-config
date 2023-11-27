# Prettier Config

## Install 

```bash 
npm i -D prettier weebay-prettier-config
```

## Usage 

编辑一下`package.json`
```json
// config
"prettier": "@fzf404/prettier-config"

// script
"scripts": {
  "format": "prettier --cache --write ."
}
```