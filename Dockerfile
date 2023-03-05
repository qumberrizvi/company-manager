FROM node:18-alpine as development
WORKDIR /usr/src/app/company-app
ARG PORT
ARG DEBUGGER_PORT
COPY package*.json ./
RUN npm install
COPY . .
RUN cd /usr/src/app/company-app/
CMD ["npm", "run", "start:debug:migrate"]
EXPOSE ${PORT} ${DEBUGGER_PORT}
