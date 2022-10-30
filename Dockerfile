FROM node:16.10
WORKDIR ./
COPY ./ ./
RUN npm install
EXPOSE 80
CMD ["npm", "run", "build:start"]
