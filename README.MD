# Technologies used
## Django/Python for backend
## React/Javascript frontend

# Keeping virtualenvs organized:
Create a folder where you store all your virtualenvs like:
virtualenv in the main folder you do all your web app work. 
Create a virtual env and source it by typing similar:
source virtualenvs/MYFancyNewVirtualEnvHERE/bin/activate

# Install requirements:
pip install -r requirements.txt

# Running Django project:
cd djangoTemplateWithAddedModule/

# Type this to start the python server:
python manage.py runserver

Open browser and visit localhost:8000/about

# React/Babel:
## Make sure you have yarn, node, and npm installed:
For yarn:
```
npm install -g yarn
```

## Setting up live-server:
```
yarn global add live-server
```

## Setting up lite-server:
sudo npm install -g lite-server

## Installing React dependencies/node_modules:
In the folder where package.json is located, run:
```
yarn install
```

## Installing Babel so can write JSX:
```
yarn global add babel-cli@6.24.1
```

## Linux install Babel
```
sudo npm install -g babel-cli
```

### Excellent resource on using npm without sudo:
https://docs.npmjs.com/getting-started/fixing-npm-permissions

## Compiling  code using babel:
```
babel src/app.js --out-file=public/scripts/app.js --presets=env,react
```
This compiles the src/app.js file to the output file in public/scrips/app.js

## Watching for changes:(Leave running in background)
```
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

## Running the app:
```
lite-server public
```

## Open in browser:
Will load page on 127.0.0.1/8080













