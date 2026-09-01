FROM ubuntu:24.04
WORKDIR /backend

RUN apt update && \
    apt install -y npm && \
    apt install -y nodejs && \
    apt install -y iputils-ping

RUN npm install pm2 -g
    
COPY . .

RUN npm install 

CMD ["pm2-runtime", "server.js"]

EXPOSE 5000

LABEL Name="Piyush Nandankar"
LABEL EMAIL="piyush.nandankar@dolatcapital.com"
LABEL Description="This is backend image of three tier project ! build with nodejs/npm !! To check status run 'pm2 status'"

