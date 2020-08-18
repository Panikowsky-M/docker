FROM spaceonfire/nginx-php-fpm:latest 

RUN echo '127.0.0.1:83		www.awesomesite.com' > /etc/hosts
RUN mkdir /var/www/awesomesite

COPY site/ /var/www/awesomesite/
COPY confs/awesomesite /etc/nginx/sites-available/default.conf
RUN  apk add vim
RUN  nginx -t

EXPOSE 83
