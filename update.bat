@echo off

REM Обновление кода из репозитория
git pull origin master

REM Остановка и удаление контейнера
docker-compose down

REM Сборка и запуск нового контейнера
docker-compose up -d --build