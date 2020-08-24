FROM spaceonfire/nginx-php-fpm:latest 

RUN mkdir /var/www/btnc

COPY site/ /var/www/btnc/
COPY confs/btnc /etc/nginx/sites-available/default.conf
RUN  apk add vim && nginx -t

EXPOSE 84
