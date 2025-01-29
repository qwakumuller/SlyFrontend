FROM node:lts as build
WORKDIR /build

COPY ./ /build

RUN npm install -g npm && npm install --loglevel verbose --no-audit && npm install -g @angular/cli --no-audit && npm run build && rm -rf node_modules/

FROM nginx:latest

COPY docker/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /build/dist/sly-conference /app
COPY --from=build /build/dist/sly-conference/browser /app
EXPOSE 80