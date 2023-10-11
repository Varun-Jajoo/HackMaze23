# Requirements
## Install Latest Version on Node.js
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

## Install Python
- #### Python installation on Windows

  Just go on [official Python website](https://www.python.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `pip` might need it (You can find git [here](https://git-scm.com/)).


# How to run the project

## Running Backend (Node)
- #### Switch to backend directory

  ```
  cd backend-node
  npm i
  node app.js
  ```
## Running Backend (Python)
- #### Switch to backend directory
  ```
  cd backend-python
  pip install -r requirements.txt
  python app.py
  ```

## Running Web App
- #### Switch to frontend directory
  ```
  cd frontend-web
  npm i
  npm start
  ```

## Running Mobile App
- #### Switch to mobile directory
  ```
  cd frontend-app
  npm i
  npm start
  ```
  - #### Install Expo App on your mobile
  - #### Scan the QR code from the terminal or browser
  - #### You are good to go