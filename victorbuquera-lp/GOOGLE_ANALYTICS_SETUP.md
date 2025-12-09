# Configuração do Google Tag Manager e Google Analytics

## 📋 Estrutura Implementada

A estrutura para Google Tag Manager (GTM) e Google Analytics 4 (GA4) já está implementada no `index.html`.

## 🔧 Como Configurar

### Opção 1: Google Tag Manager (Recomendado)

O GTM permite gerenciar múltiplas tags (Google Analytics, Facebook Pixel, etc.) sem alterar o código.

#### Passos:

1. **Criar conta no Google Tag Manager**:
   - Acesse: https://tagmanager.google.com/
   - Crie uma conta e um container
   - Copie o ID do container (formato: `GTM-XXXXXXX`)

2. **Substituir no código**:
   - Abra `index.html`
   - Substitua `GTM-XXXXXXX` pelo seu ID real em **2 lugares**:
     - No script dentro do `<head>` (linha ~8)
     - No noscript dentro do `<body>` (linha ~88)

3. **Configurar Google Analytics no GTM**:
   - No GTM, crie uma nova tag do tipo "Google Analytics: GA4 Configuration"
   - Adicione seu Measurement ID do GA4 (formato: `G-XXXXXXXXXX`)
   - Configure o trigger para "All Pages"
   - Publique o container

### Opção 2: Google Analytics 4 Direto (Sem GTM)

Se preferir instalar o GA4 diretamente sem usar GTM:

1. **Criar propriedade no Google Analytics 4**:
   - Acesse: https://analytics.google.com/
   - Crie uma propriedade GA4
   - Copie o Measurement ID (formato: `G-XXXXXXXXXX`)

2. **Ativar no código**:
   - Abra `index.html`
   - Descomente o bloco do Google Analytics 4 (remova `<!--` e `-->`)
   - Substitua `G-XXXXXXXXXX` pelo seu Measurement ID real

## 📊 Eventos Recomendados para Rastrear

### Eventos de Conversão (WhatsApp):

```javascript
// Exemplo de evento ao clicar no botão WhatsApp
gtag('event', 'whatsapp_click', {
  'event_category': 'engagement',
  'event_label': 'hero_cta',
  'value': 1
});
```

### Eventos de Scroll:

```javascript
// Rastrear scroll de 50%, 75% e 100%
gtag('event', 'scroll', {
  'event_category': 'engagement',
  'event_label': 'scroll_depth',
  'value': 50 // ou 75, 100
});
```

### Eventos de Visualização de Seções:

```javascript
// Rastrear quando usuário visualiza seções importantes
gtag('event', 'view_section', {
  'event_category': 'engagement',
  'event_label': 'portfolio',
  'value': 1
});
```

## 🎯 Configurações Recomendadas no GA4

1. **Conversões**:
   - Marque eventos importantes como conversões
   - Ex: `whatsapp_click`, `scroll_100`

2. **Audiences**:
   - Crie audiências baseadas em comportamento
   - Ex: "Usuários que visualizaram portfólio"

3. **Explorations**:
   - Configure relatórios personalizados
   - Acompanhe jornada do usuário

## 🔒 Privacidade e LGPD

- Configure o consentimento de cookies se necessário
- Use o modo de consentimento do GA4
- Considere implementar banner de cookies

## 📝 Notas Importantes

- **GTM é recomendado** porque permite adicionar outras tags (Facebook Pixel, etc.) sem alterar código
- **Teste sempre** antes de publicar em produção
- Use o **Google Tag Assistant** para validar a instalação
- **Não use ambos** (GTM + GA4 direto) ao mesmo tempo - escolha um

## ✅ Checklist de Configuração

- [ ] Criar conta no Google Tag Manager
- [ ] Obter ID do container GTM
- [ ] Substituir `GTM-XXXXXXX` no código
- [ ] Criar propriedade no Google Analytics 4
- [ ] Configurar tag GA4 no GTM
- [ ] Testar instalação com Tag Assistant
- [ ] Configurar eventos de conversão
- [ ] Publicar em produção
- [ ] Validar dados no GA4 após 24h

## 🆘 Troubleshooting

### Tag não está funcionando?
1. Verifique se o ID está correto
2. Use o Google Tag Assistant
3. Verifique o console do navegador para erros
4. Confirme que o container está publicado no GTM

### Dados não aparecem no GA4?
1. Aguarde até 24-48h para dados aparecerem
2. Verifique se a tag está configurada corretamente no GTM
3. Use o DebugView do GA4 para ver eventos em tempo real

---

**Última atualização**: Configuração inicial para Victor Buquera Photography

