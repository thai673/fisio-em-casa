# Fisio em Casa 🏥🏠
> **Plataforma Digital de Cinesioterapia Domiciliar Baseada em Biomecânica Clínica e Inteligência Artificial**

Projeto desenvolvido para a **Avaliação A3** da Unidade Curricular **Movimento Humano**  
**Docente Responsável:** Profa. Dra. Patrícia M. Franciulli  
**Instituição:** Universidade São Judas Tadeu (USJT)  

---

## 🎯 Objetivo e Proposta do Aplicativo

O **Fisio em Casa** é uma plataforma digital projetada para apoiar a realização de exercícios terapêuticos domiciliares (*Home Exercise Programs - HEP*), superando a barreira histórica de **65% a 70% de abandono** e reduzindo as dificuldades de locomoção e transporte para adultos e idosos.

O aplicativo conecta:
1. **Orientações Cinesioterapêuticas Rigorosas:** Prescrições divididas por condição clínica, com objetivos terapêuticos claros, orientações de execução em etapas e cuidados essenciais contra a dor.
2. **Fundamentação Biomecânica Completa (Critério de 9 Pontos da UC):** Análise morfológica de articulações, planos e eixos cardinais, pares musculares (agonistas, antagonistas e estabilizadores) e alavancas biomecânicas (1ª, 2ª e 3ª classes).
3. **Estudo de Visão Computacional (Google MediaPipe Pose Landmarker):** Proposta de acompanhamento futuro com a câmera do celular para rastreamento de 33 marcos corporais 3D, estimativa angular contínua e emissão de biofeedback corretivo instantâneo.
4. **Ciclo de Controle Motor em Alça Fechada (*Closed-Loop*):** Execução $\rightarrow$ Análise Sensorial $\rightarrow$ Feedback Extrínseco (CP/CR) $\rightarrow$ Ajuste Motor (Feedforward) $\rightarrow$ Nova Execução Refinada.
5. **Persistência de Dados e Ética (LGPD):** Armazenamento em JSON offline-first no navegador, sem promessas irrealistas e com total subordinação à avaliação clínica do fisioterapeuta.

---

## 👥 Perfis Clínicos de Demonstração (5 Pacientes Fictícios)

1. **Maria Silva — Gonartrose (Osteoartrose de Joelho)**
   - *Objetivo:* Melhorar a mobilidade, reduzir a dor e fortalecer os membros inferiores.
   - *Exercícios (5):* Contração isométrica do quadríceps, Elevação da perna estendida (SLR), Sentar e levantar da cadeira, Ponte de glúteo e Extensão de joelho sentada.
2. **João Pereira — Lombalgia Crônica**
   - *Objetivo:* Melhorar a estabilidade da coluna vertebral, mobilidade segmentar e força muscular do core.
   - *Exercícios (5):* Ponte de glúteo, Bird Dog, Gato-vaca, Contração abdominal (transverso) e Mobilidade pélvica.
3. **Antônio Costa — Risco de Queda e Alteração do Equilíbrio (Geriatria)**
   - *Objetivo:* Melhorar equilíbrio estático/dinâmico, coordenação motora e força muscular para prevenção de quedas.
   - *Exercícios (5):* Sentar e levantar da cadeira, Equilíbrio em tandem, Marcha estacionária, Elevação dos calcanhares (panturrilha) e Caminhada lateral.
4. **Beatriz Nunes — Tendinopatia do Manguito Rotador**
   - *Objetivo:* Melhorar a mobilidade glenoumeral, descompressão subacromial e fortalecer a musculatura do ombro.
   - *Exercícios (5):* Rotação externa com faixa elástica, Retração escapular, Remada com elástico, Exercício pendular de Codman e Elevação assistida do braço.
5. **Carla Mendes — Pós-Operatório de Reconstrução do LCA (Joelho)**
   - *Objetivo:* Recuperar mobilidade (flexão/extensão completa), força do quadríceps e controle neuromuscular seguro.
   - *Exercícios (5):* Contração isométrica do quadríceps, Deslizamento do calcanhar, Elevação da perna estendida (SLR), Ponte de glúteo e Subida no degrau (Step-up).

---

## 💻 Tecnologias Empregadas

* **Frontend:** HTML5 Semântico, CSS3 Moderno (Flexbox & CSS Grid), JavaScript Vanilla (ES6+)
* **Simulação de Visão Computacional:** Modelagem vetorial inspirada no **Google MediaPipe Pose Landmarker** (33 landmarks, HUD de rastreamento com cálculo angular, detecção de compensações e biofeedback visual)
* **Visualização dos Movimentos:** GIFs anatômicos reais e ilustrações vetoriais animadas em SVG de alta precisão
* **Armazenamento:** LocalStorage API estruturada em JSON (Offline-first com backup exportável)
* **Acessibilidade:** Padrões ergonômicos para adultos e idosos (alvos de toque de 44px+, alto contraste e tipografia limpa)

---

## 📚 Documentação Acadêmica (USJT - A3)

* **[Diário de Bordo Semanal (Etapas Efetivar e Interagir)](docs/DIARIO_DE_BORDO_SEMANAL.md)**
* **[Roteiro de Testes e Validação em Grupo](docs/ROTEIRO_DE_TESTES_GRUPO.md)**
* **[Referências Bibliográficas Científicas (PubMed/USP/SciELO)](docs/REFERENCIAS_BIBLIOGRAFICAS.md)**
* **[Apresentação do Projeto (Slides em PDF)](docs/Apresentacao_A3_Fisio_Em_Casa.pdf)**

---

## 🚀 Acesso Online

Acesse o protótipo funcional diretamente pelo GitHub Pages:  
👉 **[https://thai673.github.io/fisio-em-casa/](https://thai673.github.io/fisio-em-casa/)**
