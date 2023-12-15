# Use an official Node.js runtime as the base image

FROM node:19.6.0-alpine
# Set the working directory within the container
WORKDIR /client

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# newly added
# Make the environment variable available at build time
ARG REACT_APP_BACKEND_HOST

# Create a .env file with the environment variable
RUN echo REACT_APP_BACKEND_HOST=$REACT_APP_BACKEND_HOST >> .env

# Build the React app
RUN npm run build

# Build the React app
EXPOSE 3000