FROM node:14-stretch-slim
USER node
RUN mkdir /home/node/code
WORKDIR /home/node/code
COPY --chown=node:node package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY --chown=node:node . .
RUN yarn build
CMD ["node", "./dist/src/index.js"]
EXPOSE 3001
