FROM ubuntu:24.04
WORKDIR /frontend

RUN apt update && \
    apt install -y npm && \
    apt install -y nodejs && \
    apt install -y nginx && \
    apt install -y iputils-ping

CMD ["nginx", "-g", "daemon off;"]

COPY . .

RUN npm install && \
    npm run build 

RUN cp -rp dist/* /var/www/html/ 

EXPOSE 80

LABEL Name="Piyush Nandankar"
LABEL Email="piyush.nandankar@dolatcapital.com"
LABEL Descriptioon="This is frontend container ! Build with nodejs/npm ! run this image with 'frontend' name"

