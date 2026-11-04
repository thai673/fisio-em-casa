# Diário de Bordo Semanal & Evidências de Processo
**Projeto A3 — Unidade Curricular: Movimento Humano**  
**Universidade São Judas Tadeu (USJT)**  
**Docente Responsável:** Profa. Dra. Patrícia M. Franciulli  
**Solução Acadêmica:** *Fisio em Casa* — Plataforma Digital de Cinesioterapia Domiciliar com Biofeedback por IA  
**Repositório Oficial:** [https://github.com/thai673/fisio-em-casa](https://github.com/thai673/fisio-em-casa)  
**Aplicação Publicada (GitHub Pages):** [https://thai673.github.io/fisio-em-casa/](https://thai673.github.io/fisio-em-casa/)

---

## 1. Identificação do Registro Semanal

* **Etapas da Neuroaprendizagem Trabalhadas:** **Efetivar** e **Interagir**.
* **Momento do Projeto:** Refinamento Integral do Protótipo Funcional, Integração de 5 Perfis Clínicos Completos e Validação em Grupo.
* **Integrantes do Grupo:** Equipe Discente de Fisioterapia — Universidade São Judas Tadeu.

---

## 2. O que o Grupo Trabalhou Neste Encontro?

Nesta etapa, o grupo avançou decisivamente da ideação e arquitetura inicial para a **consolidação técnica integral do protótipo navegável do *Fisio em Casa***, implementando:

1. **Estruturação Completa dos 5 Perfis de Pacientes de Demonstração:**
   * **Maria Silva (62 anos):** Gonartrose de Joelho — objetivo de alívio álgico, mobilidade articular e fortalecimento de membros inferiores.
   * **João Pereira (45 anos):** Lombalgia Mecânico-Postural Crônica — objetivo de estabilidade lombo-pélvica (*core training*) e redução de sobrecarga discal.
   * **Antônio Costa (74 anos):** Risco de Queda e Déficit de Equilíbrio — objetivo de prevenção de acidentes domésticos, controle proprioceptivo e fortalecimento funcional.
   * **Beatriz Nunes (38 anos):** Tendinopatia do Manguito Rotador — objetivo de centralização da cabeça umeral, ritmo escapuloumeral e fortalecimento sem impacto subacromial.
   * **Carla Mendes (29 anos):** Pós-operatório de Reconstrução do Ligamento Cruzado Anterior (LCA) — objetivo de restauração de ADM, ativação seletiva do quadríceps e controle do valgo dinâmico.

2. **Acervo Cinesioterapêutico com 20 Exercícios Exclusivos:**
   Cada um dos 5 pacientes recebeu sua grade individual de 5 exercícios pertinentes à sua condição patológica, totalizando 20 exercícios clínicos únicos. Cada exercício conta com:
   * Demonstração visual animada padronizada (GIFs clínicos de alta definição e animações vetoriais anatômicas SVG dedicadas).
   * Objetivo terapêutico específico.
   * Instruções de execução passo a passo em etapas.
   * Cuidados e contraindicações clínicas.
   * Ficha biomecânica aprofundada (classificação articular morfológica, planos e eixos de movimento, músculos agonistas, antagonistas e estabilizadores, e análise de alavancas de 1ª, 2ª e 3ª classe).

3. **Simulação Interativa de Inteligência Artificial & Visão Computacional:**
   * Estruturação da simulação didática baseada na arquitetura do **Google MediaPipe Pose Landmarker (33 marcos anatômicos tridimensionais)**.
   * Rastreamento visual de pontos-chave articulares: *Quadril (Trocânter Maior)*, *Joelho (Côndilo Femoral)* e *Tornozelo (Maléolo Lateral)*.
   * Cálculo angular em tempo real (ex.: flexão de 88° no agachamento) e detecção vetorial de desalinhamento (ex.: valgo dinâmico medial de +14°).
   * Modos interativos de alternância: feedback positivo de alinhamento neutro e simulação de compensação motora com alertas posturais imediatos.
   * Inclusão de banner transparente delimitando que se trata de uma simulação funcional para demonstração acadêmica e viabilidade técnica, sem captura invasiva de câmera ou autonomia diagnóstica desvinculada do fisioterapeuta.

4. **Nova Tela de Perfil do Paciente (`s-perfil`):**
   * Apresentação acolhedora com avatar, dados pessoais, diagnóstico clínico, objetivos terapêuticos e recomendações gerais do profissional.
   * Lista interativa de todos os exercícios vinculados ao plano terapêutico do paciente, permitindo consulta detalhada das orientações a qualquer momento.

5. **Ciclo de Controle e Aprendizagem Motora Interativo:**
   * Representação pedagógica do ciclo em alça fechada (*closed-loop*):
     $$\text{Execução Motora} \longrightarrow \text{Análise Espacial/Temporal} \longrightarrow \text{Biofeedback Extrínseco (IA)} \longrightarrow \text{Correção Proprioceptiva (Feedforward)} \longrightarrow \text{Nova Execução Otimizada}$$
   * Conexão teórica direta com os conceitos de *Conhecimento de Performance (CP)* e *Conhecimento de Resultados (CR)* de Schmidt e Wrisberg.

---

## 3. Decisões Tomadas pelo Grupo

1. **Manter o Protótipo Navegável e Fluido:**
   Optou-se por uma aplicação web moderna, responsiva para celulares e computadores, sem barreiras de instalação, utilizando armazenamento local (`localStorage` migrado para v4) para persistência de dados das sessões.
2. **Definir o Agachamento e o Valgo Dinâmico como Estudo Central de IA:**
   Para a demonstração ao vivo para a banca examinadora, o agachamento guiado com análise de valgo foi escolhido como caso de destaque, por evidenciar claramente a biomecânica do joelho e o risco lesivo ao LCA.
3. **Equilíbrio entre Inovação e Ética Profissional:**
   O grupo deliberou que o aplicativo deve enfatizar reiteradamente seu papel de ferramenta complementar ao fisioterapeuta. Os exercícios são apresentados como conteúdo educativo guiado por prescrição prévia, jamais como automedicação ou substituição da consulta presencial.
4. **Priorização Máxima do Conhecimento Biomecânico Técnico (Critério de 9 Pontos):**
   Garantir rigor científico nas análises biomecânicas presentes em todas as fichas dos 20 exercícios, contemplando tipos de contração, cadeias cinéticas (aberta e fechada) e braços de momento.

---

## 4. Uso da Inteligência Artificial

A Inteligência Artificial foi empregada em duas vertentes integradas:
1. **Ferramenta de Apoio Metodológico e Desenvolvimento:**
   * Apoio na estruturação da lógica de navegação sem redundâncias.
   * Padronização das fichas biomecânicas e revisão de literatura científica.
   * Elaboração de vetores anatômicos SVG dinâmicos com animações em CSS.
2. **Componente Central da Solução em Saúde (*Fisio em Casa*):**
   * **Simulação de Visão Computacional (MediaPipe Pose):** Rastreamento de eixos biomecânicos e cálculo trigonométrico angular para biofeedback corretivo instantâneo.
   * **Triagem Clínica Inteligente no Painel do Fisioterapeuta:** Identificação algorítmica de relatos subjetivos de dor ou esforço "Difícil", priorizando pacientes em risco no topo da lista profissional.

---

## 5. Aprendizados do Grupo

* **Integração Tecnológica-Clínica:** Compreensão clara de que a Inteligência Artificial na fisioterapia precisa ter uma função clínica delimitada (fornecer *Conhecimento de Performance* para correção cinemática), e não ser apenas uma palavra-chave decorativa no trabalho.
* **Biomecânica Aplicada à Reabilitação:** Fixação dos conceitos de cadeia cinética aberta (CCA) e fechada (CCF), co-contração estabilizadora de quadríceps/isquiotibiais, momento adutor do joelho e a importância crucial do glúteo médio na estabilização pélvica no plano frontal.
* **Neurociência do Movimento:** Assimilação de como o feedback extrínseco imediato reduz a sobrecarga atencional da fase cognitiva da aprendizagem motora, acelerando a consolidação de programas motores seguros.

---

## 6. Evidências do Processo — Etapa Interagir (Matriz de Testes em Grupo)

| Integrante / Avaliador | Perfil Testado | Fluxo / Cenário Avaliado | Resultado do Teste | Validação |
| :--- | :--- | :--- | :--- | :---: |
| **Membro 1** | Maria Silva | Login $\rightarrow$ Perfil $\rightarrow$ Isometria e Agachamento $\rightarrow$ Check-in $\rightarrow$ Evolução | Fluxo contínuo sem travamentos; feedback de 88° muito claro. | **Aprovado ✓** |
| **Membro 2** | João Pereira | Seleção do perfil $\rightarrow$ Exercício Bird Dog $\rightarrow$ Análise de alavanca de 1ª classe | Animação SVG fluida e instruções passo a passo precisas. | **Aprovado ✓** |
| **Membro 3** | Antônio Costa | Exercício de Tandem e Caminhada Lateral $\rightarrow$ Ficha de propriocepção | Orientações de segurança para idosos bem destacadas. | **Aprovado ✓** |
| **Membro 4** | Beatriz Nunes | Exercício de Manguito Rotador $\rightarrow$ Biomecânica do plano transversal | Músculos estabilizadores e cuidados subacromiais detalhados. | **Aprovado ✓** |
| **Membro 5** | Carla Mendes | Pós-operatório de LCA $\rightarrow$ Simulação de Valgo Dinâmico vs. Alinhamento | Alerta de ativação de glúteo médio e prevenção de estresse no enxerto perfeito. | **Aprovado ✓** |
| **Membro 6** | Dra. Ana (Fisio) | Acesso profissional $\rightarrow$ Painel de pacientes $\rightarrow$ Salvamento de observações clínicas | Persistência local imediata e filtragem por nível de atenção funcionando. | **Aprovado ✓** |

---

## 7. Próximos Passos Definidos

1. Conduzir rodadas de testes com amigos e familiares em diferentes modelos de smartphones (Android e iOS).
2. Treinar a apresentação oral conforme o roteiro estruturado de 5 minutos, assegurando que todos os integrantes saibam justificar a biomecânica, o controle motor e o papel da IA.
3. Disponibilizar os pacotes de entrega (link online no GitHub Pages, arquivo HTML offline autocontido e arquivo .zip com a documentação completa).
