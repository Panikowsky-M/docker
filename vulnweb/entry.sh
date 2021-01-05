#!/bin/sh

echo "N: Установка dvwa"
wget https://github.com/ethicalhack3r/DVWA/archive/master.zip -O /var/www/localhost/htdocs/dvwa.zip && \
echo "N: Идет распаковка ..."
unzip -d /var/www/localhost/htdocs/ /var/www/localhost/htdocs/dvwa.zip 1>/dev/null && \
rm /var/www/localhost/htdocs/dvwa.zip && \
echo "S: DVWA Установлен !"

echo "N: Установка OWASP Mutillidae ..."
wget https://deac-ams.dl.sourceforge.net/project/mutillidae/mutillidae-project/NOT-LATEST-MUTILLIDAE-MOVED-TO-GITHUB-mutillidae-2.6.67.zip -O /var/www/localhost/htdocs/mutillidae.zip && \
echo "N: Идет распаковка ..."
unzip -d /var/www/localhost/htdocs/ /var/www/localhost/htdocs/mutillidae.zip 1>/dev/null && \
rm /var/www/localhost/htdocs/mutillidae.zip && \
echo "S: OWASP Mutillidae установлен !"

# Установка phpmyadmin
echo "M: Установка phpmyadmin"
mkdir -p /usr/share/webapps/ && cd /usr/share/webapps/ && \
    wget https://files.phpmyadmin.net/phpMyAdmin/4.9.0.1/phpMyAdmin-4.9.0.1-all-languages.tar.gz > /dev/null 2>&1 && \
    tar -xzvf phpMyAdmin-4.9.0.1-all-languages.tar.gz > /dev/null 2>&1 && \
    mv phpMyAdmin-4.9.0.1-all-languages phpmyadmin && \
    chmod -R 777 /usr/share/webapps/ && \
    ln -s /usr/share/webapps/phpmyadmin/ /var/www/localhost/htdocs/management
echo "S: Успех!"

# Запуск паши
echo "M: Запуск httpd"
httpd
echo "M: httpd загружен и работает"


# Устанавливаем базу 
echo "M: Проверка /var/lib/mysql"
if [ ! -f /var/lib/mysql/ibdata1 ]; then 
    echo "M: Установка базы данных"
    mysql_install_db --user=mysql --basedir=/usr --datadir=/var/lib/mysql > /dev/null
    echo "M: База установлена"
fi;

# Предупреждения при запуске, взято с докер-хаба mysql
if [ -z "$MYSQL_ROOT_PASSWORD" -a -z "$MYSQL_RANDOM_ROOT_PASSWORD" ]; then
			echo >&2 'E: База данных не инициализирована, пароль не задан !'
			echo >&2 '   Необходимо задать MYSQL_ROOT_PASSWORD либо MYSQL_RANDOM_ROOT_PASSWORD'
			echo >&2 'N: Возможно не был указан ключ -e при запуске контейнера'
			exit 1
fi

# Случайный пароль
if [ ! -z "$MYSQL_RANDOM_ROOT_PASSWORD" ]; then
    echo "M: Подготовка случайного пароля"
    MYSQL_ROOT_PASSWORD="$(pwgen -1 32)"
    echo "N: Пароль сгенерирован: $MYSQL_ROOT_PASSWORD"
    echo "S: Успех!"
fi

tfile=`mktemp`
if [ ! -f "$tfile" ]; then
    return 1
fi

cat << EOF > $tfile
    USE mysql;
    DELETE FROM user;
    FLUSH PRIVILEGES;
    GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY "$MYSQL_ROOT_PASSWORD" WITH GRANT OPTION;
    GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' WITH GRANT OPTION;
    UPDATE user SET password=PASSWORD("") WHERE user='root' AND host='localhost';
    FLUSH PRIVILEGES;
EOF

echo "M: Поиск пользователя"
/usr/bin/mysqld --user=root --bootstrap --verbose=0 < $tfile
rm -f $tfile
echo "M: Поиск завершен"

# Запуск мускула 
echo "M: Запуск mariadb"
exec /usr/bin/mysqld --user=root --bind-address=0.0.0.0
