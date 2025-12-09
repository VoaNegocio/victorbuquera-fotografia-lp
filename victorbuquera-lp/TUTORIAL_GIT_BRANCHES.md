# Tutorial: Gerenciamento de Branches Git

## O que são Branches?

Branches (ramificações) são versões independentes do seu código. Elas permitem trabalhar em funcionalidades, correções ou testes sem afetar o código principal (branch `main`).

## Criando uma Nova Branch

### Criar e mudar para a branch imediatamente:
```bash
git checkout -b nome-da-branch
```

**Exemplo:**
```bash
git checkout -b test
```

### Criar branch sem mudar para ela:
```bash
git branch nome-da-branch
```

## Verificando Branches

### Ver todas as branches locais:
```bash
git branch
```
O asterisco (`*`) indica a branch atual.

### Ver todas as branches (incluindo remotas):
```bash
git branch -a
```

## Mudando entre Branches

### Mudar para uma branch existente:
```bash
git checkout nome-da-branch
```

**Exemplo:**
```bash
git checkout main
git checkout test
```

## Enviando Branch para o Repositório Remoto

### Primeira vez (criar branch remota):
```bash
git push -u origin nome-da-branch
```

**Exemplo:**
```bash
git push -u origin test
```

### Enviar atualizações para branch remota existente:
```bash
git push
```

## Fazendo Merge (Integrar Branches)

### Merge da branch test na main:

1. **Mudar para a branch main:**
```bash
git checkout main
```

2. **Fazer merge da branch test:**
```bash
git merge test
```

3. **Enviar para o remoto:**
```bash
git push
```

## Deletando Branches

### Deletar branch local:
```bash
git branch -d nome-da-branch
```

### Deletar branch local (forçar, mesmo com mudanças não commitadas):
```bash
git branch -D nome-da-branch
```

### Deletar branch remota:
```bash
git push origin --delete nome-da-branch
```

## Fluxo de Trabalho Recomendado

### Para Testes:
1. Criar branch de teste: `git checkout -b test`
2. Fazer alterações e commits
3. Testar as mudanças
4. Se tudo estiver ok, fazer merge na main
5. Se não estiver ok, continuar ajustando na branch test

### Para Features:
1. Criar branch da feature: `git checkout -b feature/nome-da-feature`
2. Desenvolver a feature
3. Fazer commits regulares
4. Quando pronta, fazer merge na main

### Para Correções (Hotfix):
1. Criar branch de correção: `git checkout -b hotfix/nome-do-bug`
2. Corrigir o problema
3. Testar a correção
4. Fazer merge na main

## Comandos Úteis Adicionais

### Ver status atual:
```bash
git status
```

### Ver histórico de commits:
```bash
git log
```

### Ver diferenças entre branches:
```bash
git diff main..test
```

### Renomear branch atual:
```bash
git branch -m novo-nome
```

## Voltando para um Versionamento Antigo

### Ver histórico de commits (com hash):
```bash
git log
```
Ou de forma mais compacta:
```bash
git log --oneline
```

### Ver histórico de um arquivo específico:
```bash
git log --oneline nome-do-arquivo
```

**Exemplo:**
```bash
git log --oneline src/components/Hero.jsx
```

### Voltar para um commit específico (apenas visualizar):
```bash
git checkout hash-do-commit
```

**Exemplo:**
```bash
git checkout 71c1c79
```

⚠️ **Atenção:** Isso coloca você em um estado "detached HEAD". Para voltar, use:
```bash
git checkout main
```

### Restaurar um arquivo específico de um commit antigo:
```bash
git checkout hash-do-commit -- caminho/do/arquivo
```

**Exemplo:**
```bash
git checkout 71c1c79 -- src/components/Hero.jsx
```

Isso restaura o arquivo para o estado do commit, mas mantém você na branch atual.

### Criar uma branch a partir de um commit antigo:
```bash
git checkout -b nome-da-branch hash-do-commit
```

**Exemplo:**
```bash
git checkout -b backup-antes-de-mudancas 71c1c79
```

### Reverter as mudanças de um commit específico (criar novo commit que desfaz):
```bash
git revert hash-do-commit
```

**Exemplo:**
```bash
git revert 71c1c79
```

Isso cria um novo commit que desfaz as mudanças do commit especificado.

### Desfazer mudanças não commitadas (voltar ao último commit):
```bash
git restore nome-do-arquivo
```

Ou para todos os arquivos:
```bash
git restore .
```

### Ver o conteúdo de um arquivo em um commit específico:
```bash
git show hash-do-commit:caminho/do/arquivo
```

**Exemplo:**
```bash
git show 71c1c79:src/components/Hero.jsx
```

### Comparar um arquivo entre dois commits:
```bash
git diff hash-commit-1 hash-commit-2 -- caminho/do/arquivo
```

**Exemplo:**
```bash
git diff 71c1c79 HEAD -- src/components/Hero.jsx
```

## Dicas Importantes

- ✅ Sempre verifique em qual branch você está antes de fazer commits
- ✅ Faça commits frequentes e com mensagens descritivas
- ✅ Teste bem antes de fazer merge na main
- ✅ Mantenha a branch main sempre funcional
- ✅ Use nomes descritivos para as branches (ex: `feature/header-glassmorphism`, `fix/whatsapp-button-glow`)

## Exemplo Prático Completo

```bash
# 1. Verificar branch atual
git branch

# 2. Criar e mudar para branch de teste
git checkout -b test

# 3. Fazer alterações no código...

# 4. Adicionar mudanças
git add .

# 5. Fazer commit
git commit -m "feat: adiciona botão premium com glow intenso"

# 6. Enviar para remoto (primeira vez)
git push -u origin test

# 7. Testar as mudanças...

# 8. Se tudo estiver ok, fazer merge na main
git checkout main
git merge test
git push

# 9. Deletar branch de teste (opcional)
git branch -d test
git push origin --delete test
```

## Exemplo Prático: Voltando para um Versionamento Antigo

```bash
# 1. Ver histórico de commits para encontrar o hash
git log --oneline

# 2. Ver o conteúdo de um arquivo em um commit antigo
git show 71c1c79:src/components/Hero.jsx

# 3. Restaurar um arquivo específico de um commit antigo
git checkout 71c1c79 -- src/components/Hero.jsx

# 4. Verificar as mudanças
git status

# 5. Se estiver satisfeito, fazer commit da restauração
git add src/components/Hero.jsx
git commit -m "fix: restaura Hero.jsx para versão estável do commit 71c1c79"

# 6. Ou, se quiser criar uma branch a partir do commit antigo
git checkout -b backup-versao-estavel 71c1c79

# 7. Para voltar para a main depois
git checkout main
```

---

**Última atualização:** Criado para o projeto Victor Buquera Photography Landing Page

