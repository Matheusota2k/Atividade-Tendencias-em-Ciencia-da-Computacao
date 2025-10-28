# Quiz de Ciências da Computação

Um quiz interativo sobre programação e computação desenvolvido com HTML, CSS e JavaScript puro.

## 📁 Estrutura do Projeto

```
quiz-interativo/
├── index.html      # Estrutura HTML do quiz
├── styles.css      # Estilos CSS responsivos
└── script.js       # Lógica JavaScript do quiz
```

## 🚀 Como usar

### 🌐 Deploy Automático (Recomendado)
1. Faça fork deste repositório
2. Ative o GitHub Pages nas configurações do repositório
3. O quiz será deployado automaticamente via GitHub Actions
4. Acesse: `https://[seu-usuario].github.io/[nome-do-repositorio]/`

### 💻 Execução Local
1. Clone o repositório: `git clone [url-do-repositorio]`
2. Abra o arquivo `index.html` em qualquer navegador web
3. Responda às perguntas clicando nas opções
4. Use as teclas 1-4 para navegar pelas opções
5. Pressione Enter para avançar
6. Veja sua pontuação final e jogue novamente!

## ✨ Funcionalidades

- **Interface responsiva** - Funciona em desktop e mobile
- **8 perguntas especializadas** - Ciências da Computação
- **Sistema de pontuação** - Acompanhe seu progresso
- **Animações suaves** - Transições e efeitos visuais
- **Acessibilidade** - Navegação por teclado
- **Feedback visual** - Respostas corretas/incorretas destacadas
- **Reiniciar quiz** - Jogue quantas vezes quiser

## 🎯 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com gradientes e animações
- **JavaScript ES6+** - Lógica interativa do quiz

## 📚 Tópicos Abordados

- **Linguagens de Programação** - Python, Java, JavaScript, C++
- **Protocolos de Rede** - HTTP, SMTP, FTP, TCP
- **Estruturas de Dados** - Pilhas, Filas, Listas, Árvores
- **Algoritmos** - Complexidade, Ordenação, Busca
- **Conceitos de Programação** - APIs, Tipos de dados, Interfaces

## 📱 Responsividade

O quiz é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🎨 Personalização

Para adicionar mais perguntas, edite o array `quizData` no arquivo `script.js`:

```javascript
const quizData = [
    {
        question: "Sua pergunta aqui?",
        options: ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
        correct: 0 // Índice da resposta correta (0-3)
    },
    // Adicione mais perguntas...
];
```

## 🔄 CI/CD Pipeline

O projeto inclui um pipeline completo de GitHub Actions:

### 📋 Jobs do Pipeline
1. **Validação** - Verifica integridade dos arquivos HTML, CSS e JS
2. **Build** - Otimiza e prepara arquivos para deploy
3. **Deploy** - Publica automaticamente no GitHub Pages
4. **Notificação** - Informa status do deploy

### ⚡ Triggers Automáticos
- **Push** para branch `main` ou `master`
- **Pull Request** para branch principal
- **Workflow Dispatch** (manual)

### 🛠️ Ferramentas Utilizadas
- **html-validate** - Validação de HTML
- **css-validate** - Validação de CSS
- **js-validate** - Validação de JavaScript
- **GitHub Pages** - Hospedagem estática

### 📊 Status do Pipeline
![Deploy Status](https://github.com/[usuario]/[repositorio]/workflows/Deploy%20Quiz%20to%20GitHub%20Pages/badge.svg)

## 🔧 Melhorias Futuras

- [ ] Timer para cada pergunta
- [ ] Categorias de perguntas
- [ ] Sistema de ranking
- [ ] Perguntas com imagens
- [ ] Modo multiplayer
- [ ] Banco de perguntas externo
- [ ] Testes automatizados
- [ ] Lighthouse CI para performance

---

Desenvolvido com ❤️ usando apenas tecnologias web nativas!
