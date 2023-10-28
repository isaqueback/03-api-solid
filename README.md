# App

GymPass style app.

## RFs (Requisitos Funcionais)
Descrevem "o quê" que um sistema de software deve fazer
- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

## RNFs (Requisitos não-funcionais)
Descreve as características do sistema em relação a qualidade, desempenho, segurança, entre outros
- [ ] A senha do usuário precisar estar criptografado;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);

## RNs (Regras de negócio)
Descreve as regras para o funcionamento do sistema, ou seja, para o funcionamento de um negócio
- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

### Observações
Alguns comandos de terminais úteis para a produção dessa aplicação:
- Instalação do TS, do tipos do TS, da lib que executa código TS e da lib que faz o build do TS:
npm i typescript @types/node tsx tsup -D;
- Cria o arquivo tsconfig.json:
npx tsc --init;
- O prisma inicia a conexão com o banco de dados:
npx prisma init;
- Colocar a formatação automática do PRISMA no settings.json:
"[prisma]": {
        "editor.formatOnSave": true
};
- Criar de forma automatizada a tipagem da tabela (schema):
npx prisma generate;
- Instalar a dependência de produção para acessar o banco de dados:
npm i @prisma/client;
- Executar o docker:
docker run --name nome-do-banco-de-dados bitnami/postgresql;
- Executar o docker e já passar as variáveis ambientes importantes e porta na primeira run:
docker run --name nome-do-banco-dados -e POSTGRESQL_USERNAME=dar-algum-nome-de-username -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=nome-do-banco-de-dados -p 5432:5432 bitnami/postgresql;
- Mostrar os containers ativos:
docker ps;
- Mostrar todos os containers que criei em algum momento
docker ps -a;
- Ativar algum container:
docker start nome-ou-id-do-conteiner;
- Parar algum container:
docker stop nome-ou-id-do-container;
- Deletar algum container:
docker rm nome-ou-id-do-container;
- Ver os logs de algum container:
docker logs nome-ou-id-do-container;
- Fazer migrate no prisma (o prisma vai passar as tabelas do schema.prisma para o banco de dados):
npx prisma migrate dev;
- Rodar todos os serviços do docker a partir do docker-compose.yml (-d: não mostra os logs em tempo real): 
docker compose up -d;
- Parar e depois deletar todos os serviços do docker a partir do docker-compose-yml:
docker compose down;
- Parar todos os serviços do docker a partir do docker-compose-yml:
docker compose stop;
- Rodar o banco de dados pelo prisma:
npx prisma studio;