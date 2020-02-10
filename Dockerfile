FROM node:12.15.0

### DEPENDENCIES ###

RUN npm install -g bower@1.8.8

### PREPARE ###

ENV serviceName=ui-kit
ENV \
  SRC_DIR=/app/$serviceName \
  RUN_DIR=/app/$serviceName \
  PATH=$PATH:/app/$serviceName/src/node_modules/.bin

RUN mkdir -p \
  $SRC_DIR \
  $RUN_DIR

### RUNTIME ###

ARG port=3000

ENV PORT=$port

WORKDIR $RUN_DIR

EXPOSE $port $live_reload_port

### BUILD ###

WORKDIR $SRC_DIR

COPY bower.json .
RUN bower install --allow-root

COPY package.json .
COPY yarn.lock .

RUN yarn install

# Copy the rest of the source files
COPY . .

CMD ["yarn", "run", "gulp"]
