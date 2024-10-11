FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  npm i pm2 -g && \
  rm -rf /var/lib/apt/lists/*
  
RUN git clone https://github.com/themzysparks/ANITA-FORK  /root/anita
WORKDIR /root/anita/


COPY package.json .
RUN npm install pm2 -g
RUN npm install --legacy-peer-deps 
RUN npm install sharp

COPY . .

EXPOSE 3000

CMD ["npm","start" ]
