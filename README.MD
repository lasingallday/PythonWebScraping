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

# React/Babel
## Make sure you have yarn, node, and npm installed:
For yarn:
```
npm install -g yarn
```

## Installing React dependencies/node_modules:
In the folder where package.json is located, run:
```
yarn install
```

## Manually building a bundle.js file:
```
yarn run build
```
Default webpack doesn't need bundle.js to work. But if you are deploying to
production for example, being able to bulild a bundle.js would be useful.

## Watching for changes and building all at once: (Leave running in background)
```
yarn run dev-server
```
or
```
npm run dev-server
```

## Open in browser:
Will load page on 127.0.0.1/8080
