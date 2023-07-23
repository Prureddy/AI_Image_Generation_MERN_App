# AI_Image_Generation_MERN_App

### This repository contains a MERN (MongoDB, Express.js, React.js, Node.js) Stack application that generates an image based on the provided text input. The application utilizes the Vite tool for creating a development environment and provides easy-to-follow commands for setting up and running the project.

## Prerequisites
- Before getting started, ensure you have the following software installed on your system:

### - Node.js: Download Node.js
### - MongoDB: Download MongoDB
## Getting Started

## Follow the steps below to set up the MERN Stack application and generate images:

### Clone the repository to your local machine:

- git clone https://github.com/Prureddy/AI_Image_Generation_MERN_App.git
- cd AI_Image_Generation_MERN_App
- Install the dependencies:

- npm install
  
### Set up the environment variables:

- Create a .env file in the root directory and add the following configuration:


## MONGODB_URI=your_mongodb_connection_string
## Replace your_mongodb_connection_string with your MongoDB connection string.

## Start the development server:

- npm run dev
- This will run the application in development mode using Vite.

- Open your web browser and navigate to http://localhost:3000 to access the application.

## How to Use
- Enter your desired text in the provided input field.

- Click the "Generate Image" button to generate an image based on the input text.

- The generated image will be displayed below the input field.

## Project Structure
- The repository has the following structure:

## mern-stack-image-generator/
  ### ├── client/
 ###  │   ├── public/
 ###  │   ├── src/
 ###  │   ├── vite.config.js
 ###  │   └── package.json
 ###  ├── server/
  ### │   ├── controllers/
  ### │   ├── models/
 ###  │   ├── routes/
 ###  │   ├── index.js
 ###  │   └── package.json
 ###  ├── .gitignore
 ###  ├── .env (not included in the repository, but you need to create it as explained above)
  ### ├── package.json
 ###  └── README.md (you are reading this file)

  
## The client folder contains the front-end React.js code along with a Vite configuration file.

## The server folder contains the back-end Node.js code with Express.js, MongoDB integration, and API routes for generating images.

## Contributing
- If you'd like to contribute to this project, please follow these steps:

- Fork the repository to your GitHub account.

- Create a new branch for your feature or bug fix.

- Make your changes and commit them with descriptive commit messages.

- Push your changes to your forked repository.

- Submit a pull request to the main repository, describing the changes you made.

## License
- This project is licensed under the MIT License - see the LICENSE file for details.

#### Happy coding! If you have any questions or run into any issues, feel free to create an issue in this repository.
