# Use official Node.js LTS image based on Alpine Linux
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy dependency definition files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY . .

# Expose backend server port
EXPOSE 8000

# Start the application using npm start
CMD ["npm", "start"]
