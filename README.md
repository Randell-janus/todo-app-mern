# Todo App

An end-to-end Todo list application (SPA) that allows users to create, update, and delete entries.

## Technologies Used

### Front-end

- React.js, Redux Toolkit, Tailwind CSS, HeadlessUI

### Back-end

- Express.js

### Database

- MongoDB Atlas, Mongoose

### Others

- Docker

## Installation/setup

### Run using Docker

1. Clone the repository

```
git clone https://github.com/Randell-janus/todo-app-mern.git
```

2. Paste the `env.txt` file inside the backend folder, then rename it to `.env`
3. Go into the directory

```
cd todo-app-mern
```

4. Docker compose then visit the react app at port 3000

```
docker-compose up
```

### or Run manually

1. Clone the repository

```
git clone https://github.com/Randell-janus/todo-app-mern.git
```

2. Paste the `env.txt` file inside the backend folder, then rename it to `.env`
3. Go into the directory

```
cd todo-app-mern
```

4. Install node modules/packages

```
cd frontend && npm i && cd ../backend && npm i
```

5. Inside backend folder run the dummy data generator

```
node generateData.js
```

6. Go into the backend folder and start the express server using `npm start`
7. Go into the frontend folder and start the react app using `npm start`

## Views

- Homepage
  - ![](https://github.com/Randell-janus/todo-app-mern/blob/main/frontend/public/snapshots/Home.png)
- Empty Todos
  - ![](https://github.com/Randell-janus/todo-app-mern/blob/main/frontend/public/snapshots/Empty.png)
- Update Todo Modal
  - ![](https://github.com/Randell-janus/todo-app-mern/blob/main/frontend/public/snapshots/Modal.png)
