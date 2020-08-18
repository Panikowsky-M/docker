FROM spaceonfire/nginx-php-fpm:latest 

RUN mkdir /var/www/victim

COPY site/ /var/www/victim/
COPY confs/victim /etc/nginx/sites-available/default.conf
RUN  apk add vim
RUN  nginx -t

EXPOSE 84
