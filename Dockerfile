FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /app
RUN npm install -g pnpm
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm install --production
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]