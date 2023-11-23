<h1 align="center">📱 Contato Inteligente - API</h1>
<div align=center><a href="#primeiros-passos">Primeiros Passos</a> | <a href="#endpoints">Endpoints</a> | <a href="#avisos">Avisos</a></div><br/>

<p align=center>Essa é a API da <b>Contato Inteligente</b>, uma aplicação desenvolvida para que você consiga manter todos os seus contatos organizados em um único lugar.</p>

<br/>

## **Primeiros Passos**
Após clonar esse repositório, é necessário configurar algumas coisas antes de poder utilizar a API.<br/>
Primeiramente, você irá precisar ter o [**Postgres**](https://www.postgresql.org) instalado no seu computador. Após sua instalação e configuração, crie um banco de dados com o comando:<br/>

`CREATE DATABASE "exemplo_de_nome";`

Agora, abra o repositório clonado em sua IDE de preferência a partir da pasta raiz do mesmo e crie um arquivo `.env` para preenchar as variáveis de ambiente que fazem parte da aplicação.
> [!IMPORTANT]  
> Use as informações do arquivo `.env.example` como base para o preenchimento.

Com tudo preenchido corretamente, abra o terminal na raiz do projeto e execute os seguintes comandos:

`npm install`<br/>
Instala as dependências do projeto

`npm run dev`<br/>
Roda a aplicação localmente no *host* e *port* definido no arquivo `.env`, por padrão funcionando no endereço `*http://localhost:3333*`

<br/>

## **Endpoints**
Essa API possui um total de 12 endpoints, focados no CRUD (Create, Read, Update and Delete) de usuários e seus contatos, além do de login.<br/>
Com a API rodando localmente, acesse no seu navegador o endereço `*http://localhost:3333/api-docs*` para consultar a documentação completa, com todos os endpoints, exemplos de corpos de requisição e possíveis respostas.<br/>
> [!TIP]  
> Caso utilize o **Insomnia**, é possível encontrar o arquivo `insomnia-config.json` na raiz do projeto e conseguir importar facilmente todos endpoints para o programa.
> 
<br/>

## **Avisos**
> - Atente-se para as rotas que necessitam de **token** para acesso. Os mesmos podem ser acessados como resposta no endpoint `/login`;
> - Ao cadastrar usuários, o campo "isAdmin" é **opcional**, tendo seu valor padrão como `false`. Cuidado ao utilizar para não criar usuários admins indesejados;
> - Sobre as rotas autenticadas, o(s) admin(s) podem acessar todas elas, mas usuários comuns podem acessar apenas as que correspondem ao seu id.
