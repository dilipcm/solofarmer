# Use a Node.js image as the base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# Serve the built app
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "build"]  # Replace with your server entry point
