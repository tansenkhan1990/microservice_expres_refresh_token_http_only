# Use the official Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies first
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the entire application code
COPY . .

# Expose the authentication service port
EXPOSE 5000

# Start the authentication service
CMD ["node", "src/app.js"]
