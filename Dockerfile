# Stage 1: Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build the project
RUN npm run build

# Stage 2: Production stage
FROM node:20-alpine AS production

WORKDIR /app

# Copy package files for production dependencies
COPY package*.json ./

# Install dependencies needed to run preview
RUN npm install

# Copy built files from builder stage
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 3009

# Set environment to production
ENV NODE_ENV=production

# Start the application
CMD ["npm", "run", "preview"]
