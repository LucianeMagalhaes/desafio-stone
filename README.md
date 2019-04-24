# Desafio - STONE

Este projeto foi desenvolvido:
Front-end [Angular CLI](https://github.com/angular/angular-cli) versão 7.2.0,
Back-end [Node](https://github.com/nodejs/node) versão 11.14.0,
Banco de dados relacional [MySql] (https://github.com/mysql) versao 8.0.15

## Como executar o projeto localmente

Para instalá-lo em sua máquina faça os comandos a seguir:
```shell
git clone git@github.com/LucianeMagalhaes/desafio-stone
```

## MySql
Instalar o mysql na sua maquina e executar o comando: 
```shell
mysql -u root -p
```
com o password: ""
Executar os comandos que estão na pasta Desafio/database.sql

## Angular
Para instalá-lo em sua máquina faça os comandos a seguir:
```shell
cd client
npm install -g @angular/cli
npm install ci
```

## Node
Para instalá-lo em sua máquina faça os comandos a seguir:
```shell
cd server
npm install ci
```

Para executar a aplicação em modo de desenvolvimento execute os comandos:
```shell
cd server
node src/index.js
cd client
ng serve
```

Abra o navegador no endereço: `http://localhost:4200/funcionarios`.

Para gerar uma versão de produção execute o comando:
```shell
ng build --prod --baseHref https://exemplo.com/ --deploy-url https://exemplo.com/
```