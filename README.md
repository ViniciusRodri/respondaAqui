# RespondaAqui - Projeto Fullstack

![AskMe Logo](/home/vinicius-alves-rodrigues-pinto/Secretária/Cursos/Node/Projetos/respondaAqui/public/img/logo.png)

Um projeto Fullstack simples e funcional para prática dos fundamentos de **Node.js**, **banco de dados não-relacionais** e a construção de rotas HTTP.

## 📝 Sobre o projeto

O **AskMe** foi inspirado no estilo do site **ASKfm** e tem como objetivo proporcionar uma plataforma onde usuários anônimos podem fazer perguntas e respondê-las sem identificação. Este projeto foi criado para consolidar conhecimentos nos seguintes tópicos:

- Construção de rotas HTTP.
- Rotas dinâmicas e parâmetros na URL.
- Integração com banco de dados usando **Sequelize** e **MySQL**.
- Implementação de front-end com **HTML**, **CSS**, **Bootstrap** e **EJS**.

## 🚀 Tecnologias utilizadas

### **Front-End**
- **HTML5**
- **CSS3**
- **Bootstrap**: Framework para design responsivo e estilização.
- **EJS**: Template engine para renderização dinâmica de páginas.

### **Back-End**
- **Node.js**: Plataforma para desenvolvimento do servidor.
- **Express**: Framework para gerenciar rotas e middlewares.
- **Sequelize**: ORM para integração com o banco de dados.

### **Banco de Dados**
- **MySQL**: Banco de dados relacional para armazenar perguntas e respostas.

## 🌟 Funcionalidades
- **Perguntar anonimamente**: Usuários podem enviar perguntas anonimamente.
- **Responder perguntas**: Respostas também podem ser anônimas.
- **Rotas dinâmicas**: As perguntas e respostas são acessadas por rotas únicas.
- **Integração com banco de dados**: Perguntas e respostas são persistidas no banco de dados.

## 🖥️ Como executar o projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado.
- [MySQL](https://www.mysql.com/) configurado e rodando.
- [Git](https://git-scm.com/) para clonar o repositório.

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/askme.git
   ```

2. **Instale as dependências:**
   ```bash
   cd askme
   npm install
   ```

3. **Configure o banco de dados:**
   - Crie um banco de dados no MySQL com o nome desejado.
   - Atualize o arquivo `config/database.js` com as credenciais do seu banco.

4. **Execute as migrações do banco:**
   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Inicie o servidor:**
   ```bash
   npm start
   ```
## 📸 Screenshots

### Página inicial
![Página Inicial](https://via.placeholder.com/800x400.png?text=P%C3%A1gina+Inicial)

### Tela de perguntas
![Tela de Perguntas](https://via.placeholder.com/800x400.png?text=Tela+de+Perguntas)

## 🤝 Contribuições
Contribuições são sempre bem-vindas! Sinta-se à vontade para enviar issues ou pull requests no repositório.

## 📜 Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

Feito com ❤️ e muita prática por **[Seu Nome](https://github.com/seu-usuario)**.

