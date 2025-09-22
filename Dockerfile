FROM node:18-alpine

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

RUN npm install

# Copy source code
COPY . .

EXPOSE 8080

# Start the app
CMD ["npm", "start"]
