FROM node:20.12.0-alpine3.19

WORKDIR /zafar

# Install necessary packages (e.g., git)
RUN apk add --no-cache git

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 5000

CMD ["npm","run", "start"]