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
