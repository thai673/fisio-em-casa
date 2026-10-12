# Fisio em Casa 🏥🏠
> **Plataforma Inteligente de Reabilitação Domiciliar Baseada em Cinesiologia Clínica e Inteligência Artificial**

Projeto desenvolvido para a **Avaliação A3** da Unidade Curricular **Movimento Humano**  
**Docente Responsável:** Profa. Patrícia M. Franciulli  
**Instituição:** Universidade São Judas Tadeu  

---

## 🎯 Sobre o Projeto

O **Fisio em Casa** é uma solução em saúde digital concebida para superar a taxa de **65% a 70% de abandono** observada em programas de exercícios domiciliares (*Home Exercise Programs - HEP*).

A plataforma combina:
1. **Biofeedback Visual Contínuo:** Demonstrações em GIFs biomecânicos reais que orientam o vetor de força, a cadência e previnem desvios posturais críticos (como o valgo dinâmico de joelho).
2. **Fundamentação Cinesiológica:** Exercícios classificados em Cadeia Cinética Fechada (CCF), Cadeia Cinética Aberta (CCA) e análise de alavancas musculoesqueléticas (1ª, 2ª e 3ª classes).
3. **Persistência de Dados Offline-First:** Armazenamento seguro de rotinas, histórico e sessões no navegador via JSON local.
4. **Inteligência Artificial Ética (Human-in-the-Loop):** Monitoramento de sintomas atípicos e alertas precoces de risco, mantendo o fisioterapeuta como a autoridade clínica central.

---

## 🤸 Biblioteca de Exercícios Prescritos

1. **Agachamento Guiado (CCF):** Tripla flexão/extensão simultânea com co-contração protetora do LCA.
2. **Flexão Plantar em Pé / Panturrilha:** Alavanca de 2ª classe (inter-resistente) com alta vantagem de força para propulsão da marcha.
3. **Extensão de Joelho Sentado (CCA):** Alavanca de 3ª classe (interpotente) para fortalecimento analítico de quadríceps.
4. **Elevação de Perna Reta (SLR):** Fortalecimento isométrico do reto femoral com baixo estresse patelofemoral.
5. **Ponte de Glúteos:** Extensão pura coxofemoral para estabilização lombo-pélvica.
6. **Marcha Estacionária:** Treinamento proprioceptivo e equilíbrio dinâmico para idosos.
7. **Rotação Externa de Ombro:** Ativação de infraespinal e redondo menor para centralização umeral na fossa glenoide.
8. **Alongamento de Isquiotibiais:** Melhora de flexibilidade e alívio de compensações posturais da coluna.

---

## 💻 Tecnologias Empregadas

* **Frontend:** HTML5 Semântico, CSS3 Moderno (Flexbox & CSS Grid), JavaScript Vanilla (ES6+)
* **Visão Computacional & Biofeedback por IA:** Rastreamento de pontos articulares (*landmarks* no quadril, joelho e tornozelo), cálculo instantâneo de amplitude articular (ADM) e detecção dinâmica de valgo
* **Ciclo de Controle Motor:** Mapeamento interativo de alça fechada (*Closed-Loop*: Execução $\rightarrow$ Análise Sensorial $\rightarrow$ Feedback CP/CR $\rightarrow$ Ajuste Feedforward $\rightarrow$ Nova Execução Refinada)
* **Armazenamento:** LocalStorage API estruturada em JSON (Offline-first com backup exportável)
* **Design Responsivo:** Adaptável a smartphones, tablets e computadores

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

