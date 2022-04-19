# Projeto To Do

Projeto desenvolvido com HTML, CSS e Javascript (sem o uso de bibliotecas e frameworks)

## O que é o aplicativo?

Ele organiza e lista suas tarefas de forma prática para consultas e acompanhamento.

## Recursos atuais:

* Criar usuários;
* Login com seu próprio usuário;
* Listar tarefas cadastradas para seu usuário;
* Encerrar a cessão do seu usuário;

## Próximos recursos a serem desenvolvidos:

* Selecionar tarefas e marcá-las como realizadas;
* Desmarcar uma tarefa realizada;
* Remover uma tarefa (realizada e não realizada).

## Estrutura do Projeto

O projeto foi organizado da seguinte forma:

Cada página possui o seu script de inicialização que contém as funções e classes utilizadas para montar as lógicas da página.

### Arquivos do projeto
.
|── assets
├── scripts
│ ├── utils.js
│ ├── index.js
│ ├── signup.js
│ └── tasks.js
|── styles
│ ├── acesso.css
│ ├── common.css
│ ├── tarefas.css
├── index.html
├── signup.html
├── tasks.html
└── README.md

### Páginas:

**/index.html** : Página de entradapara login.
**/signup.html**: Página de cadastro que são solicitados seus dados para registro de um novo usuário.
**/tasks.html**: Página de tarefas, onde estão listadas suas tarefas. Possibilidade de criação, deleção e alteração de estado. 

### Eventos utilizados

Os eventos, através do método "addEventListener" foram criadas a partir do formulário possibilitando dispor em tela em tempo de preenchimento.

### Validações

As implementações de validações foram realizadas a partir dos formulários, na criação dos usuários, e na execução do login.
As falhas no ato de executar o login, demonstra em forma de alert a mensagem retornada pela API.

### Utils

- **apiApplication**: Contem o endereço base da API.
- **getValue**: função que retorna o o elemento a partir do Id.


### Participantes:

* Ualace Santos
* Luiz Henrique Espicalsky
* Victor Pessoa de Oliveira
* Walter Rogelio Pina