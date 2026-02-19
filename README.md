# 💰 Finance Backend

API desenvolvida como **projeto pessoal de estudo** com foco em aprender **NestJS** na prática enquanto construo uma aplicação real de **controle financeiro pessoal** para uso no dia a dia.

---

## 🎯 Proposta do Projeto

Criar um backend para rastrear:

* 📉 Gastos
* 💰 Economias
* 📈 Investimentos
* 🎯 Metas financeiras

A ideia é permitir:

* Registrar movimentações rapidamente
* Acompanhar evolução financeira
* Calcular patrimônio automaticamente
* Organizar dados por categoria
* Ter base sólida para futura integração com frontend (Next.js)

Este projeto simula a base de um sistema estilo fintech.

---

# 🧱 Stack Utilizada

* **Node.js**
* **NestJS**
* **PostgreSQL**
* **Prisma ORM**
* **Docker**

---

## 🔹 Por que NestJS?

Escolhido para aprender arquitetura profissional backend:

* Estrutura modular
* Separação clara entre Controller, Service e Module
* Escalável
* Baseado em TypeScript
* Muito utilizado em projetos reais e fintechs

---


# ⚙️ Comandos Utilizados (NestJS CLI)

Criação de recursos:

```bash
nest g module user
nest g controller user
nest g service user
```

Ou de forma mais rápida:

```bash
nest g resource transaction
```

Criação do projeto:

```bash
nest new finance-backend
```

Rodar em desenvolvimento:

```bash
npm run start:dev
```

---

# 🗄 Banco de Dados

PostgreSQL rodando via Docker:

```bash
docker compose up -d
```

Migrations com Prisma:

```bash
npx prisma migrate dev --name init
```

Gerar client:

```bash
npx prisma generate
```

---

# 🧠 Conceitos Trabalhados

* Modelagem relacional (User, Transaction, Goal)
* Transações financeiras com segurança (ACID)
* Enum para tipos de movimentação:

  * GASTO
  * ECONOMIA
  * INVESTIMENTO
* Relacionamentos entre entidades
* Cálculo de patrimônio:

  ```
  Economias + Investimentos - Gastos
  ```

---

# 🚀 Objetivo Técnico

Esse projeto não é apenas um CRUD.

Ele foi desenvolvido para:

* Praticar arquitetura backend real
* Entender organização de código escalável
* Trabalhar com banco relacional de forma correta
* Preparar base para autenticação futura
* Servir como API para um frontend financeiro

---

