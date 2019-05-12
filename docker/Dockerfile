FROM node:10.13.0-alpine as production-build
COPY .  .

# Install yarn
RUN npm install -g yarn

# Install only production dependencies
RUN yarn install

# create the production build (./build)
RUN yarn build

FROM nginx:1.13.9-alpine
LABEL app="sfn-client"

COPY --from=production-build ./build /usr/share/nginx/html
COPY docker-config/vhost.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
WORKDIR /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
