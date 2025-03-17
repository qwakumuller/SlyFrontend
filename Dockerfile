# FROM node:lts as build
# WORKDIR /build

# COPY ./ /build

# RUN npm install -g npm && npm install --loglevel verbose --no-audit && npm install -g @angular/cli --no-audit && npm run build && rm -rf node_modules/

# FROM nginx:latest

# COPY docker/nginx.conf /etc/nginx/nginx.conf

# COPY --from=build /build/dist/sly-conference /app
# COPY --from=build /build/dist/sly-conference/browser /app
# EXPOSE 80


# Use a minimal Node.js image for the build step
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies separately for better caching
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Copy the rest of the application
COPY . .

# Build the Angular application
RUN npm run build --configuration=production

# Use a minimal Nginx image for the final container
FROM nginx:alpine

# Copy the built Angular app to Nginx serving directory
COPY --from=build /app/dist/sly-conference /usr/share/nginx/html

# Copy custom Nginx config
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Expose HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
