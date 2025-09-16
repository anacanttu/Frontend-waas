# 🔗 Integração com Backend - AWAY Sistema Patronato

## 📋 Status Atual

✅ **Frontend 100% implementado e funcional**  
⏳ **Aguardando integração com backend**

## 🚀 Próximos Passos para Integração

### 1. **Configuração da API**

Atualmente configurado para: `http://localhost:8080/api`

**Arquivos a serem ajustados:**
- `src/app/services/auth.service.ts` - Linha 11
- `src/app/services/assistido.service.ts` - Linha 10
- `src/app/services/agendamento.service.ts` - Linha 10
- `src/app/services/visita.service.ts` - Linha 10

### 2. **Endpoints Necessários**

#### 🔐 **Autenticação**
```
POST /api/auth/login
Body: { email: string, senha: string }
Response: { token: string, usuario: Usuario, expiresIn: number }
```

#### 👥 **Assistidos**
```
GET    /api/assistidos?page=0&size=10&nome=...&cpf=...&status=...
GET    /api/assistidos/{id}
POST   /api/assistidos
PUT    /api/assistidos/{id}
DELETE /api/assistidos/{id}
GET    /api/assistidos/cpf/{cpf}
GET    /api/assistidos/processo/{numeroProcesso}
```

#### 📅 **Agendamentos**
```
GET    /api/agendamentos?page=0&size=10&assistidoId=...&dataInicio=...&status=...
GET    /api/agendamentos/{id}
POST   /api/agendamentos
PUT    /api/agendamentos/{id}
DELETE /api/agendamentos/{id}
PATCH  /api/agendamentos/{id}/confirmar
PATCH  /api/agendamentos/{id}/cancelar
```

#### 🏠 **Visitas**
```
GET    /api/visitas?page=0&size=10&assistidoId=...&dataInicio=...&status=...
GET    /api/visitas/{id}
POST   /api/visitas
PUT    /api/visitas/{id}
DELETE /api/visitas/{id}
PATCH  /api/visitas/{id}/realizar
PATCH  /api/visitas/{id}/reagendar
```

### 3. **Estrutura de Resposta Esperada**

#### **Paginação (para listagens)**
```json
{
  "content": [...],
  "totalElements": 100,
  "totalPages": 10,
  "number": 0,
  "size": 10,
  "first": true,
  "last": false
}
```

#### **Usuário**
```json
{
  "id": 1,
  "nome": "Administrador",
  "email": "admin@patronato.com",
  "perfil": "ADMINISTRADOR",
  "ativo": true,
  "dataCriacao": "2024-01-01T00:00:00Z",
  "dataUltimaAtualizacao": "2024-01-01T00:00:00Z"
}
```

#### **Assistido**
```json
{
  "id": 1,
  "nome": "João Silva Santos",
  "cpf": "123.456.789-01",
  "numeroProcesso": "001/2024",
  "tipoPena": "ALTERNATIVA",
  "status": "ATIVO",
  "dataNascimento": "1990-01-01T00:00:00Z",
  "endereco": "Rua das Flores, 123",
  "telefone": "(11) 99999-9999",
  "email": "joao@email.com",
  "observacoes": "Observações importantes",
  "dataCadastro": "2024-01-01T00:00:00Z",
  "dataUltimaAtualizacao": "2024-01-01T00:00:00Z"
}
```

### 4. **Enums Utilizados**

#### **StatusAssistido**
- `ATIVO`
- `EM_MONITORAMENTO`
- `DESLIGADO`

#### **TipoPena**
- `ALTERNATIVA`
- `PRISIONAL`

#### **StatusAgendamento**
- `AGENDADO`
- `CONFIRMADO`
- `REALIZADO`
- `CANCELADO`
- `FALTA`

#### **TipoAtividade**
- `ORIENTACAO`
- `TRABALHO`
- `EDUCACAO`
- `SAUDE`
- `OUTROS`

#### **StatusVisita**
- `AGENDADA`
- `REALIZADA`
- `CANCELADA`
- `REAGENDADA`

#### **TipoVisita**
- `DOMICILIAR`
- `INSTITUCIONAL`
- `URGENTE`

#### **PerfilUsuario**
- `ADMINISTRADOR`
- `SUPERVISOR`
- `AGENTE`

### 5. **Tratamento de Erros**

O frontend está configurado para exibir erros usando `error.error` no SweetAlert2:

```typescript
error: (error) => {
  Swal.fire({
    icon: 'error',
    title: 'Erro',
    text: error.error || 'Erro interno do servidor',
    confirmButtonText: 'OK'
  });
}
```

### 6. **Headers Necessários**

Todas as requisições (exceto login) devem incluir:
```
Authorization: Bearer {token}
Content-Type: application/json
```

### 7. **CORS**

Certifique-se de que o backend está configurado para aceitar requisições do frontend:
```
Origin: http://localhost:4200
```

### 8. **Arquivos Prontos para Integração**

✅ **Serviços implementados:**
- `AuthService` - Autenticação
- `AssistidoService` - CRUD de assistidos
- `AgendamentoService` - CRUD de agendamentos
- `VisitaService` - CRUD de visitas

✅ **Interceptors configurados:**
- `AuthInterceptor` - Adiciona token automaticamente

✅ **Guards implementados:**
- `AuthGuard` - Protege rotas autenticadas

✅ **Models definidos:**
- Todas as interfaces TypeScript prontas

### 9. **Teste de Integração**

Após implementar o backend:

1. **Ajustar URL da API** nos serviços
2. **Testar login** com credenciais reais
3. **Verificar listagens** de todas as entidades
4. **Testar filtros** e paginação
5. **Validar tratamento de erros**

### 10. **Comandos Úteis**

```bash
# Executar frontend
ng serve

# Build para produção
ng build --configuration=production

# Verificar erros de linting
ng lint

# Executar testes
ng test
```

## 🎯 **Resultado Esperado**

Após a integração, o sistema estará 100% funcional com:
- ✅ Autenticação real
- ✅ CRUD completo de todas as entidades
- ✅ Filtros e paginação funcionais
- ✅ Tratamento de erros
- ✅ Interface responsiva e moderna

---

**Pronto para integração!** 🚀
