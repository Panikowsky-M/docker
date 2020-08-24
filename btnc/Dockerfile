FROM spaceonfire/nginx-php-fpm:latest 

RUN mkdir /var/www/btnc

COPY site/ /var/www/btnc/
COPY confs/btnc /etc/nginx/sites-available/default.conf
RUN nginx -t

EXPOSE 84
