FROM node:8.11.2
RUN mkdir -p /Project
COPY . /Project
WORKDIR /Project
RUN npm install --registry=https://registry.npm.taobao.org
EXPOSE 7001
CMD git pull && npm install && npm start
