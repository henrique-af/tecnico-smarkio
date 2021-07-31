# tecnico-smarkio

### Objetivo

Desenvolver uma aplicação web em NodeJS com um banco de dados em MySQL. A aplicação consiste em uma página com dois painéis, na esquerda o usuário cadastra novos comentários. Na direita você ouve e os comentários cadastrados são listados.

  

Para ouvir os áudios, utiliza-se a API TTS do IBM Watson.

 ___

### Depedências

  

Node.JS para execução da aplicação web e do servidor.

Conta IBM Cloud para utilização da API do Watson.

___  

### Rodando a aplicação

  

1. Criar uma conta no IBM Cloud, e criar um serviço do [TTS](https://cloud.ibm.com/catalog/services/text-to-speech) que irá te fornecer uma URL e uma API Key que precisam ser utilizadas. 
___
2. Clonar esse repositório no local desejado;
___
3. Editar o arquivo .env dentro da pasta back, com os seus dados de API;
___
4. Na pasta raiz executar o comando;
```javascript
	`npm run setup`
```
___
5. Finalizada a instalação dos módulos, executar o comando;
```javascript
	`npm run server`
```
    
___
6. Em seguida, abra um segundo terminal e execute o comando 
```javascript
	`npm run site`
```
___

#### Observações

- O servidor está configurado para utilizar a porta 3306, lembre-se de fazer as configurações necessárias.
- O site está configurado com o endereço `http://localhost:3000` caso não abra automaticamente depois de executar o comando `npm run site`.