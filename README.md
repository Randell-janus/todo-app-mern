# Todo App

- An end-to-end Todo list application (SPA) that allows users to create, update, and delete entries.
- https://time-tracking-app-randell-janus.vercel.app/

## Technologies Used

### Front-end

- React.js, Redux Toolkit, Tailwind CSS, HeadlessUI

### Back-end

- Express.js

### Database

- MongoDB Atlas, Mongoose

### Others

- Docker

## Run using Docker

1. Clone the repository

```
git clone https://github.com/Randell-janus/todo-app-mern.git
```

2. Paste the `.env` file inside the backend folder (contains mongodb connection string)
3. Go into the directory

```
cd todo-app-mern
```

4. Docker compose then visit the react app at port 3000

```
docker-compose up
```

## Views

- Homepage
  - ![](https://github.com/Randell-janus/todo-app-mern/blob/main/frontend/public/snapshots/Home.png)
- Empty Todos
  - ![](https://github.com/Randell-janus/todo-app-mern/blob/main/frontend/public/snapshots/Empty.png)
- Update Todo Modal
  - ![](https://github.com/Randell-janus/todo-app-mern/blob/main/frontend/public/snapshots/Modal.png)
