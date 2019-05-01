FROM node:10.13.0-alpine as production-build
COPY .  .

# Install yarn
RUN npm install -g yarn

# Install only production dependencies
RUN yarn install

# create the production build (./build)
RUN yarn build



