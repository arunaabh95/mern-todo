## Project Setup

### DB
1. Install mongoDB from [here](https://www.mongodb.com/docs/manual/administration/install-community/)
2. Start the mongoDB Compass app
3. Check the connection string by clicking the 3 dots in top left column and clicking "Copy Connection String" option. It should look like this
![dbconnect](/backend/public/dbconnect.png)
4. Inside the `.env` file in the backend folder set `MONGO_URI` to the string you copied.

### Backend
1. Go inside the 'backend' folder and open command prompt.
2. Run `npm install` in the command prompt to setup all the dependencies
3. Run `npm start` to run the project
4. Open the following [link](http://localhost:3001) in the browser. If you can see the message "Welcome to TODO Node.js application backend.". Then the setup is complete

### Frontend
1. Go inside the 'frontend' folder and open command prompt.
2. Run `npm install` in the command prompt to setup all the dependencies
3. Run `npm start` to run the app. The app should automatically start. If it does not go to [http://localhost:3000/](http://localhost:3000/) to start the app manually

## Sample Output

Here are some sample images of frontend output

1. Homepage

![homepage](/frontend/public/homepage.png)

2. Editing A task

![editpage](/frontend/public/editpage.png)
