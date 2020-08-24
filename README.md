# Репозиторий для осваивания докера

Этот репозиторий содержит необходимые *Dockerfile* и *docker-compose* файлы для 
развертывания сервисов для реализации небольших учебных проектов.
Ниже я привожу подробное описание некоторых каталогов и ставлю для себя некоторые задачи на будущее.

# Содержание каталогов

1. [awesomesite](https://github.com/Panikowsky-M/docker/tree/master/ymxb)
2. [victim](https://github.com/Panikowsky-M/docker/tree/master/btnc)
3. [flatris](https://github.com/Panikowsky-M/docker/tree/master/flatris)
4. [pipes](https://github.com/Panikowsky-M/docker/tree/master/pipes)

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

Он содержит структуру для развертывания веб-игры на подобие тетриса.
Работает под управлением **node.js** не берусь сказать на счет самостоятельного запуска 
под node, потому как это проект необходимо было повторить в рамках интенсива и он изначально
был сконфигурирован под контейнер **node:alpine**.

## Каталог [**pipes**](https://github.com/Panikowsky-M/docker/tree/master/pipes)

Содержит в себе описание того, как должны собираться различные задачи на [Женкинсе](https://www.jenkins.io/).

# Задачи на будущее

1. Сконфигурировать контейнеры на доменные имена www.awesomesite.com www.victim.com.
2. Добавить замечания по использованию flatris. (Возможно ссылку на автора)
