// Dados do quiz - Ciências da Computação
const quizData = [
    {
        question: "Qual linguagem de programação foi criada por Guido van Rossum?",
        options: ["Java", "Python", "C++", "JavaScript"],
        correct: 1
    },
    {
        question: "O que significa a sigla 'HTTP'?",
        options: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transport Protocol", "High Text Transfer Protocol"],
        correct: 0
    },
    {
        question: "Qual estrutura de dados segue o princípio LIFO (Last In, First Out)?",
        options: ["Fila", "Pilha", "Lista", "Árvore"],
        correct: 1
    },
    {
        question: "Qual é a complexidade de tempo do algoritmo de ordenação QuickSort no pior caso?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        correct: 2
    },
    {
        question: "Qual protocolo é usado para enviar emails?",
        options: ["HTTP", "FTP", "SMTP", "TCP"],
        correct: 2
    },
    {
        question: "O que significa 'API' em programação?",
        options: ["Application Programming Interface", "Advanced Programming Interface", "Automated Programming Interface", "Application Process Interface"],
        correct: 0
    },
    {
        question: "Qual é a diferença entre 'int' e 'float' em programação?",
        options: ["Não há diferença", "int armazena números inteiros, float números decimais", "float é mais rápido que int", "int usa mais memória que float"],
        correct: 1
    },
    {
        question: "Qual algoritmo é usado para encontrar o caminho mais curto em um grafo?",
        options: ["Bubble Sort", "Dijkstra", "Binary Search", "Quick Sort"],
        correct: 1
    }
];

// Variáveis globais
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let quizStarted = false;

// Elementos DOM
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const progress = document.getElementById('progress');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const finalScore = document.getElementById('final-score');
const correctAnswers = document.getElementById('correct-answers');
const wrongAnswers = document.getElementById('wrong-answers');
const percentage = document.getElementById('percentage');
const scoreMessage = document.getElementById('score-message');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeQuiz();
    setupEventListeners();
});

function initializeQuiz() {
    totalQuestionsSpan.textContent = quizData.length;
    loadQuestion();
}

function setupEventListeners() {
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartQuiz);
    playAgainBtn.addEventListener('click', restartQuiz);
}

function loadQuestion() {
    const question = quizData[currentQuestion];
    
    // Atualizar elementos da interface
    questionText.textContent = question.question;
    currentQuestionSpan.textContent = currentQuestion + 1;
    
    // Calcular progresso
    const progressPercent = ((currentQuestion + 1) / quizData.length) * 100;
    progress.style.width = `${progressPercent}%`;
    
    // Limpar opções anteriores
    optionsContainer.innerHTML = '';
    
    // Criar opções
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        
        optionElement.addEventListener('click', () => selectOption(index));
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Resetar botão próxima
    nextBtn.disabled = true;
    nextBtn.textContent = 'Próxima';
    
    // Mostrar/ocultar botões
    if (currentQuestion === quizData.length - 1) {
        nextBtn.textContent = 'Finalizar';
    }
    
    restartBtn.style.display = 'none';
}

function selectOption(selectedIndex) {
    if (quizStarted) return;
    
    quizStarted = true;
    const options = document.querySelectorAll('.option');
    const correctIndex = quizData[currentQuestion].correct;
    
    // Marcar resposta do usuário
    options[selectedIndex].classList.add('selected');
    
    // Mostrar resposta correta
    options[correctIndex].classList.add('correct');
    
    // Desabilitar todas as opções
    options.forEach(option => {
        option.classList.add('disabled');
        option.style.cursor = 'not-allowed';
    });
    
    // Armazenar resposta
    userAnswers[currentQuestion] = selectedIndex;
    
    // Verificar se acertou
    if (selectedIndex === correctIndex) {
        score++;
    }
    
    // Habilitar botão próxima
    nextBtn.disabled = false;
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        quizStarted = false;
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    // Ocultar quiz e mostrar resultados
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    // Calcular estatísticas
    const wrongAnswersCount = quizData.length - score;
    const percentageScore = Math.round((score / quizData.length) * 100);
    
    // Atualizar elementos dos resultados
    finalScore.textContent = score;
    correctAnswers.textContent = score;
    wrongAnswers.textContent = wrongAnswersCount;
    percentage.textContent = `${percentageScore}%`;
    
    // Mensagem baseada na pontuação
    let message = '';
    if (percentageScore === 100) {
        message = '🎉 Perfeito! Você acertou todas as perguntas!';
    } else if (percentageScore >= 80) {
        message = '👏 Excelente! Muito bem!';
    } else if (percentageScore >= 60) {
        message = '👍 Bom trabalho! Continue estudando!';
    } else if (percentageScore >= 40) {
        message = '📚 Você pode melhorar! Estude mais!';
    } else {
        message = '💪 Não desista! Pratique mais!';
    }
    
    scoreMessage.textContent = message;
    
    // Adicionar animação ao círculo de pontuação
    animateScoreCircle(percentageScore);
}

function animateScoreCircle(percentage) {
    const scoreCircle = document.querySelector('.score-circle');
    let currentScore = 0;
    const increment = score / 50; // 50 steps para animação suave
    
    const animation = setInterval(() => {
        currentScore += increment;
        if (currentScore >= score) {
            currentScore = score;
            clearInterval(animation);
        }
        finalScore.textContent = Math.floor(currentScore);
    }, 20);
}

function restartQuiz() {
    // Resetar variáveis
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    quizStarted = false;
    
    // Resetar interface
    quizContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
    
    // Resetar progresso
    progress.style.width = '0%';
    
    // Carregar primeira pergunta
    loadQuestion();
}

// Adicionar efeitos visuais extras
function addVisualEffects() {
    // Efeito de hover nas opções
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('mouseenter', function() {
            if (!this.classList.contains('disabled')) {
                this.style.transform = 'translateY(-2px)';
            }
        });
        
        option.addEventListener('mouseleave', function() {
            if (!this.classList.contains('disabled')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
}

// Função para adicionar confetes (opcional)
function showConfetti() {
    if (score === quizData.length) {
        // Simular confetes com CSS
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1000;
            background: radial-gradient(circle, transparent 20%, rgba(255,255,255,0.1) 20%);
            background-size: 20px 20px;
            animation: confetti 3s ease-out forwards;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// CSS para animação de confetes
const style = document.createElement('style');
style.textContent = `
    @keyframes confetti {
        0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Melhorar acessibilidade
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !nextBtn.disabled) {
        nextBtn.click();
    }
    
    // Navegação por teclado nas opções
    if (e.key >= '1' && e.key <= '4') {
        const optionIndex = parseInt(e.key) - 1;
        const options = document.querySelectorAll('.option');
        if (options[optionIndex] && !options[optionIndex].classList.contains('disabled')) {
            options[optionIndex].click();
        }
    }
});

// Adicionar tooltips informativos
function addTooltips() {
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.title = `Pressione ${index + 1} para selecionar`;
    });
}

// Inicializar tooltips quando carregar pergunta
const originalLoadQuestion = loadQuestion;
loadQuestion = function() {
    originalLoadQuestion();
    addTooltips();
    addVisualEffects();
};
