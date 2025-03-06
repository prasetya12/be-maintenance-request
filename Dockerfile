# Use official Node.js LTS image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project (including TypeScript files)
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Run Prisma migrations
RUN npx prisma migrate deploy

# Build TypeScript
RUN npm run build

# Run Prisma seed after build
RUN npx prisma db seed

# Use a smaller Node.js runtime image for production
FROM node:18-alpine AS runtime

# Set working directory
WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Set environment variables
ENV NODE_ENV=production

# Expose the port your app runs on
EXPOSE 4000

# Start the application
CMD ["node", "dist/server.js"]