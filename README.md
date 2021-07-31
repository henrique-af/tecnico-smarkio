# tecnico-smarkio

### Objetivo

Desenvolver uma aplicação web em NodeJS com um banco de dados em MySQL. A aplicação consiste em uma página com dois painéis, na esquerda o usuário cadastra novos comentários. Na direita você ouve e os comentários cadastrados são listados.

  

Para ouvir os áudios, utiliza-se a API TTS do IBM Watson.

 ___

### Depedências

  

Node.JS para execução da aplicação web e do servidor;

Conta IBM Cloud para utilização da API do Watson;

XAMPP ou programa similar;
___  

### Rodando a aplicação

  

1. Criar uma conta no IBM Cloud, também criar um serviço do [TTS (Text To Speech)](https://cloud.ibm.com/catalog/services/text-to-speech) que irá te fornecer uma URL e uma API Key que precisam ser utilizadas no funcionamento total da aplicação;
___
2. Clonar esse repositório no local desejado;
___
3. Editar o arquivo .env dentro da pasta back, com os seus dados de API;
___
4. Na pasta raiz executar o comando;
```javascript
	npm run install
```
___
5. Finalizada a instalação dos módulos, executar o comando;
```javascript
	npm run servidor
```
  A mensagem _"Tudo certo"_ deve aparecer no console.
___
6. Em seguida, abra um segundo terminal e execute o comando 
```javascript
	npm run site
```
A mensagem _"react-scripts start"_ deve aparecer no console.
___

#### Observações

- O servidor está configurado para utilizar a porta 3306, lembre-se de fazer as configurações necessárias.
- O site está configurado com o endereço `http://localhost:3000` caso não abra automaticamente depois de executar o comando.

#### Imagens da aplicação
1. Cadastrar comentário

![textcomentario](https://user-images.githubusercontent.com/55254749/127749679-cac3cd6d-ef78-4d98-bd39-b808d753336e.png)

2. Comentários e botão de ouvir

![comentarios](https://user-images.githubusercontent.com/55254749/127749751-57364bd2-ea88-45cc-9cce-9298fffd4922.png)

3. Overview

![Screenshot](https://user-images.githubusercontent.com/55254749/127749768-2be4618d-1fe5-4af3-8034-a3db0bd96d14.png)
