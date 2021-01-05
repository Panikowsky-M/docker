# Репозиторий для осваивания докера

Этот репозиторий содержит необходимые *Dockerfile* и *docker-compose* файлы для 
развертывания сервисов для реализации небольших учебных проектов.
Ниже я привожу подробное описание некоторых каталогов и ставлю для себя некоторые задачи на будущее.

# Содержание каталогов

1. [awesomesite](https://github.com/Panikowsky-M/docker/tree/master/ymxb)
2. [victim](https://github.com/Panikowsky-M/docker/tree/master/btnc)
3. [flatris](https://github.com/Panikowsky-M/docker/tree/master/flatris)
4. [pipes](https://github.com/Panikowsky-M/docker/tree/master/pipes)
5. [genavatar](https://github.com/Panikowsky-M/docker/tree/master/genavatar)
6. [vulnweb](https://github.com/Panikowsky-M/docker/tree/master/vulnweb)

## Каталог [**awesomsite/**](https://github.com/Panikowsky-M/docker/tree/master/ymxb)

Содержит в себе структуру файлов и каталогов для развертывания небольшого сайта.
Каталог пригоден как для развертывания самостоятельного веб-сервера на базе **nginx**,
(так как каталог **confs/** содержит файл настройки именно под **nginx**, хотя при желании
его легко можно адаптировать и под **Apache**) так и для поднятия аналогичного веб-серевера
в докер-контейнере, так как в корне лежит докер-файл специально под контейнер **alpine-nginx-php**, 
но и его при желании можно адаптировать под аналогичную конфигурацию на **Apache**.

## Каталог [**victim/**](https://github.com/Panikowsky-M/docker/tree/master/btnc)

Содержит в себе структуру файлов и каталогов для развертывания дополнительного и/или дополняющего
домена для awesomesite.
Каталог также подходит для развертывания домена под **Apache/nginx** как на локальной машине, так
и в контейнере см. каталог [**victim/confs**](https://github.com/Panikowsky-M/docker/tree/master/victim/confs).

## Каталог [**flatris/**](https://github.com/Panikowsky-M/docker/tree/master/flatris)
Раньше содержал игру (не мою, не выполнил и не собираюсь выполнять пункт 2 из задач на будущее,
поэтому я вскоре вообще сотру этот каталог).

## Каталог [**pipes**](https://github.com/Panikowsky-M/docker/tree/master/pipes)

Содержит в себе описание того, как должны собираться различные задачи на [Женкинсе](https://www.jenkins.io/).

## Каталог [**genavatar**](https://github.com/Panikowsky-M/docker/tree/master/genavatar)

Нужен для освоения разработки контейнеризованного приложения.
Приложение будет генерировать аватар пользователя на основе его псевдонима.
По аналогии с гитхаб или стаковерфлоу.

## Каталог [**vulnweb**](https://github.com/Panikowsky-M/docker/tree/master/vulnweb)

В нем содержится проект стенда для тренировок по инфобезу.
Будет содержать в себе:

			- DVWA
			- OWASP Mutillidae
		 	- XVWA

Сборку контейнера инициируют командой:
				      ```
				      docker build . -t name:tag
				      ```

Запускают контейнер командой:
		          ```
                          docker run -d -v /путь/к/данным:/var/www/localhost/htdocs/ -e MYSQL_ROOT_PASSWORD=password -p 80:80 -p 3306:3306 --name vulnweb $USER_REPO/vulnweb
                          ```

Возможна ошибка 403, для ее решения измените права к вашему тому
	```
	sudo chmod -Rf 755 /путь/к/данным
	```

# Задачи на будущее

1. Добавить LICENSE
2. Добавить источник вдохновения для vulnweb
3. Удалить полностью флатрис
4. Сконфигурировать контейнеры на доменные имена www.awesomesite.com www.victim.com.
