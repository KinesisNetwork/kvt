FROM node:8.9

# NGINX Install
RUN apt-get update
RUN apt-get install -y vim dialog net-tools
RUN apt-get install -y nginx

# NGINX Config
RUN rm /etc/nginx/sites-available/default
RUN rm /etc/nginx/sites-enabled/default
ADD ./nginx-site.conf /etc/nginx/sites-available/default
RUN ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

RUN mkdir /sync
COPY . /sync
WORKDIR /sync

RUN npm install

EXPOSE 80

RUN npm run compile
RUN rm -rf src
RUN rm package.json
RUN rm webpack.config.js

CMD ["nginx"]
