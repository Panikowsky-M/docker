FROM spaceonfire/nginx-php-fpm:latest 

RUN mkdir /var/www/awesomesite

COPY site/ /var/www/awesomesite/
COPY confs/awesomesite /etc/nginx/sites-available/default.conf

RUN  nginx -t && apk add vim

EXPOSE 83
