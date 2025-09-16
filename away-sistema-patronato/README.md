# AWAY - Sistema Patronato Penitenciário

Sistema informatizado para o controle e gerenciamento eficiente dos cadastros e da fiscalização de indivíduos em cumprimento de pena em meio aberto, especificamente no contexto de comparecimento ao patronato.

## 🚀 Tecnologias Utilizadas

- **Angular 19** - Framework principal
- **TypeScript** - Linguagem de programação
- **SCSS** - Pré-processador CSS
- **Bootstrap 5** - Framework CSS
- **MDB (Material Design for Bootstrap)** - Componentes UI
- **Font Awesome** - Ícones
- **SweetAlert2** - Alertas e modais
- **RxJS** - Programação reativa

## 📋 Funcionalidades

### 🔐 Autenticação
- Sistema de login com validação
- Guard de autenticação para rotas protegidas
- Interceptor para adicionar token nas requisições
- Logout com confirmação

### 👥 Gestão de Assistidos
- Listagem com filtros avançados
- Busca por nome, CPF ou número do processo
- Filtros por status e tipo de pena
- Paginação
- Ações de visualizar, editar e excluir

### 📅 Agendamentos
- Gestão de agendamentos de atividades
- Filtros por data, status e tipo de atividade
- Controle de horários e datas

### 🏠 Visitas
- Controle de visitas domiciliares e institucionais
- Filtros por tipo de visita e status
- Gestão de responsáveis pelas visitas

### 📄 Documentos
- Upload e gestão de documentos
- Controle de vencimentos
- Filtros por tipo e status

### 📊 Relatórios
- Geração de relatórios diversos
- Interface intuitiva para seleção de relatórios

### 👤 Usuários
- Gestão de usuários do sistema
- Controle de perfis (Administrador, Supervisor, Agente)
- Filtros por perfil e status

## 🏗️ Arquitetura do Projeto

```
src/
├── app/
│   ├── components/           # Componentes da aplicação
│   │   ├── assistidos/      # Gestão de assistidos
│   │   ├── agendamentos/    # Gestão de agendamentos
│   │   ├── visitas/         # Gestão de visitas
│   │   ├── documentos/      # Gestão de documentos
│   │   ├── relatorios/      # Geração de relatórios
│   │   ├── usuarios/        # Gestão de usuários
│   │   ├── login/           # Tela de login
│   │   ├── layout/          # Layout principal com sidebar
│   │   └── dashboard/       # Dashboard principal
│   ├── services/            # Serviços para comunicação com API
│   ├── models/              # Interfaces e tipos TypeScript
│   ├── guards/              # Guards de autenticação
│   ├── interceptors/        # Interceptors HTTP
│   └── app.routes.ts        # Configuração de rotas
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn
- Angular CLI

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd away-sistema-patronato
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
ng serve
```

4. Acesse no navegador:
```
http://localhost:4200
```

### Build para Produção

```bash
ng build --configuration=production
```

## 🔧 Configuração da API

O sistema está configurado para se comunicar com uma API REST. Para configurar a URL da API, edite os arquivos de serviço em `src/app/services/` e altere a propriedade `API_URL`:

```typescript
private readonly API_URL = 'http://localhost:8080/api';
```

## 📱 Design Responsivo

O sistema foi desenvolvido com design responsivo, adaptando-se a diferentes tamanhos de tela:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🎨 Interface

A interface foi desenvolvida seguindo o design fornecido, com:
- Sidebar fixa com navegação
- Cards para exibição de dados
- Filtros avançados
- Paginação
- Alertas e confirmações
- Design moderno e intuitivo

## 🔒 Segurança

- Autenticação baseada em JWT
- Guards de rota para proteção
- Interceptor para adicionar token automaticamente
- Validação de formulários
- Tratamento de erros

## 📊 Funcionalidades do Dashboard

- Estatísticas em tempo real
- Cards com métricas principais
- Atividades recentes
- Próximos agendamentos
- Interface visual atrativa

## 🛠️ Desenvolvimento

### Estrutura de Componentes
Cada entidade possui:
- Componente de listagem (`*-list.component`)
- Serviço para comunicação com API
- Modelo TypeScript com interfaces
- Estilos SCSS personalizados

### Padrões Utilizados
- Standalone Components (Angular 19)
- Reactive Forms
- RxJS para programação reativa
- TypeScript strict mode
- SCSS com variáveis e mixins

## 📝 Próximos Passos

Para completar o sistema, será necessário:
1. Implementar formulários de criação/edição
2. Conectar com a API backend
3. Implementar upload de arquivos
4. Adicionar validações mais robustas
5. Implementar testes unitários
6. Adicionar internacionalização (i18n)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Equipe

Desenvolvido para o Projeto Integrador do curso de Análise e Desenvolvimento de Sistemas.

---

**AWAY - Sistema Patronato Penitenciário**  
*Transformando a gestão penitenciária através da tecnologia*