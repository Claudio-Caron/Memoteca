# 📚 Memoteca

Este projeto foi desenvolvido durante a formação em Angular 14, como forma de consolidar os conhecimentos adquiridos no curso e aplicar na prática os principais recursos do framework.

A **Memoteca** é uma aplicação web que permite o cadastro e visualização de "memórias", como se fosse uma pequena biblioteca de recordações. Cada memória é composta por um título, uma descrição e uma imagem. A ideia do projeto é demonstrar o fluxo completo de uma aplicação Angular: da criação dos componentes à comunicação com uma API REST para persistência dos dados.

Durante o desenvolvimento, foram aplicados conceitos fundamentais como estruturação e estilização com HTML e CSS, uso do Angular CLI para criação de componentes e serviços, navegação entre rotas utilizando routerLink, utilização de diretivas como *ngIf, *ngFor e ngClass, injeção de dependência via services e consumo de APIs externas com HttpClient, aplicando as operações de CRUD (Create, Read, Update, Delete).

---

## 🖼️ Capturas de Tela Do Projeto

<p align="center">
  <img src="https://github.com/user-attachments/assets/050e31a3-8655-48a8-8f05-ff7063d532c4" width="800">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/020c1ce9-1e1b-466a-b64e-ea754e0caf88" width="800">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/371effbc-65ad-4ea2-b8d3-29193cdffebc" width="800">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/4e68a19c-e823-47ac-86cd-bbf49742cb38" width="800">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/93c302c7-6fa7-4e37-8f69-d36a540e92b5" width="800">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/c8847bf7-bef6-42ff-be6b-444ae058af79" width="800">
</p>

---

## ▶️ Como executar o projeto

### Pré-requisitos

Antes de começar, é necessário ter o **Node.js** instalado em sua máquina. Também é necessário instalar o **Angular CLI** e o **JSON Server** de forma global:

```bash
npm install -g @angular/cli
npm install -g json-server

Passos para executar ->

Clone este repositório:git clone https://github.com/Claudio-Caron/Memoteca.git

Acesse a pasta do projeto Angular: cd Memoteca/Memoteca

Instale as dependências do projeto: npm install



Inicie o servidor de desenvolvimento Angular: ng serve

O projeto será executado no navegador através do endereço -> http://localhost:4200/

Em outro terminal, inicie o JSON Server para simular uma API REST:  json-server --watch db.json

O servidor da API estará disponível em: http://localhost:3000/





