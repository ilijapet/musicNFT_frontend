# Use an official Node.js runtime as the base image


# Step 1: build React App
FROM node:alpine3.18 as build


# Set the working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json .

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the container
COPY . .

# newly added
# Make the environment variable available at build time
ARG REACT_APP_BACKEND_HOST

# Create a .env file with the environment variable
RUN echo REACT_APP_BACKEND_HOST=$REACT_APP_BACKEND_HOST >> .env

# Build the React app
RUN npm run build


# Step 2: serve React App with nginx server
FROM nginx:1.23-alpine

# Default Ngnix directory
WORKDIR /usr/share/nginx/html
RUN rm -rf *

# Copy a custom Nginx configuration file into the image
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output from the build stage to the Nginx directory
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]