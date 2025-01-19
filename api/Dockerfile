# Use the official Node.js 18 image as a base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./
COPY tsconfig.json ./
COPY .env.prod .env
# Install dependencies
RUN npm ci
COPY .env.prod .env

# Copy the rest of the application code
COPY . .

COPY .env.prod .env

# Build the TypeScript code
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/server.js"]
