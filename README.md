Current personal website created with ReactJS. Currently still under constructions.

Published at sungsoocho.net

# How to run locally
In the case that you want to take a look through my website and use it as a reference for your own! In the directory you want this project in run (make sure you have node installed):
```
git clone https://github.com/foerever/foerever.github.io.git
npm install
yarn start
```

It'll be on localhost:8080. When you want to build you can do `yarn build`. 
If this doesn't update the index.html, index_bundle.js, images, and resources in root you'll have to manually move them from dist after building (problem I'm still working on; symlinks implementation still not "ideal").