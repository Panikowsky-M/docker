FROM spaceonfire/nginx-php-fpm:latest 

RUN mkdir /var/www/ymxb

COPY site/ /var/www/ymxb/
COPY confs/ymxb /etc/nginx/sites-available/default.conf
RUN  apk add vim && nginx -t

EXPOSE 83
