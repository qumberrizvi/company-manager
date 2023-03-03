FROM node:18-alpine as development
WORKDIR /usr/src/app/company-app
COPY package*.json ./
RUN npm install
COPY . .
RUN cd /usr/src/app/company-app/
RUN npm run migration:run
CMD ["npm", "run", "start:debug"]
EXPOSE 3000
EXPOSE 9229
