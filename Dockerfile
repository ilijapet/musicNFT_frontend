# FROM node:12.18-alpine3
FROM node:18 as build


# Make workdir
RUN mkdir /app

# Set the working directory in the container
WORKDIR /app

# RUN apt update && apt upgrade 

# Copy the package.json to workdir/client
COPY client/package.json client/package.json

# RUN npm install  
RUN cd client/ && npm install 

# Copy the current directory contents into the container at /app
COPY . .

# Build the React app for production
RUN cd client && npm run build


RUN echo "ilijaaaaaaaaaa"
RUN pwd
# Use Nginx as the production server
FROM nginx:alpine

# Copy the built React app to Nginx's web server directory
COPY --from=build /app/client/build /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80
# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]




