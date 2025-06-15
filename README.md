# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="/assets/assetsWAD/inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
</p>

# TASKO


## 
- <a href="https://github.com/antonioatra">Antônio Augusto Tavares Ribeiro André</a>

## :teacher: Professores:
### Orientador(a) 
- <a href="https://www.linkedin.com/in/marcelo-gon%C3%A7alves-phd-a550652/">Marcelo Gonçalves</a>
### Instrutores
- <a href="https://www.linkedin.com/in/cristiano-benites-ph-d-687647a8/">Cristiano Benites</a>
- <a href="https://www.linkedin.com/in/pedroteberga/">Pedro Teberga</a> 
- <a href="https://www.linkedin.com/in/francisco-escobar/">Francisco Escobar</a> 


## 📝 Descrição

&emsp;TASKO é um sistema de gerenciamento de tarefas que permite ao usuário criar tarefas e subtarefas, atribuir categorias, definir níveis de prioridade e configurar lembretes. Com foco na organização pessoal e na gestão eficiente do tempo, o TASKO oferece recursos como marcação por tags, comentários colaborativos e controle de prazos. A estrutura do banco de dados reflete essa funcionalidade, relacionando usuários às tarefas por meio de atividades, permitindo o acompanhamento detalhado de cada item registrado.

## 📝 Link de demonstração

https://drive.google.com/file/d/1KLmIl_R-y4k86jieIWBf-UrZWK4UEqFz/view?usp=sharing

## 📁 Estrutura de pastas

Dentre os arquivos e pastas presentes na raiz do projeto, definem-se:

```
TASKO-Gerenciador_de_Tarefas/
│
├── config/                # Arquivos de configuração (ex: conexão com banco)
│   └── database.js
├── controllers/           # Lógica de controle das requisições
│   └── HomeController.js
├── models/                # Definição de modelos de dados (estrutura do banco)
│   └── User.js
├── routes/                # Definição das rotas do sistema
│   └── index.js
├── services/              # Serviços auxiliares do sistema
│   └── userService.js
├── assets/                # Arquivos públicos como imagens e fontes
├── scripts/               # Arquivos de JavaScript públicos
├── styles/                # Arquivos CSS públicos
├── tests/                 # Arquivos de testes unitários
│   └── example.test.js
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── .env.example           # Arquivo de exemplo para variáveis de ambiente
├── jest.config.js         # Arquivo de configuração do Jest
├── package-lock.json      # Gerenciador de dependências do Node.js
├── package.json           # Gerenciador de dependências do Node.js
├── readme.md              # Documentação do projeto (Markdown)
├── server.js              # Arquivo principal que inicializa o servidor
├── rest.http              # Teste de endpoints (opcional)
└── wad.md                 # Documentação

```

## 💻 Configuração para desenvolvimento e execução do código


Aqui encontram-se todas as instruções necessárias para a instalação de todos os programas, bibliotecas e ferramentas imprescindíveis para a configuração do ambiente de desenvolvimento.

1. Baixar e instalar o node.js: [https://nodejs.org/pt-br/](https://nodejs.org/pt-br/) (versão 16.15.1 LTS)
2. Clone o repositório em questão.
3. No modo administrador, abra o "prompt de comando" ou o "terminal" e, após, abra a pasta "src/backend" no diretório raiz do repositório clonado e digite o segundo comando:

```sh
npm install
```

Isso instalará todas as dependências definidas no arquivo <b>package.json</b> que são necessárias para rodar o projeto. Agora o projeto já está pronto para ser modificado. Caso ainda deseje iniciar a aplicação, digite o comando abaixo no terminal:

```sh
npm start
```
5. Agora você pode acessar a aplicação através do link http://localhost:3000/
6. O servidor está online.


## 📋 Licença/License


