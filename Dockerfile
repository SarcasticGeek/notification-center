FROM node:12.16.1-alpine3.9

RUN mkdir -p /var/app/current

# Copy application sources
COPY . /var/app/current

WORKDIR /var/app/current

RUN npm install sails -g

RUN npm i

RUN chown -R node:node /var/app/current
USER node

# Set the workdir /var/app/current

EXPOSE 1337

# Start the application
CMD npm run init
