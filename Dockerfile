FROM node:10

# Create app directory
WORKDIR ./

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install && npm install concurrently --save
# If you are building your code for production
# RUN npm ci --only=production
WORKDIR ./server

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

WORKDIR ./

COPY . .

EXPOSE 3000
CMD [ "npm", "run", "dev" ]
