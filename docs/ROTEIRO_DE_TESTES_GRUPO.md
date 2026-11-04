# Roteiro de Testes e Validação do Protótipo (Etapa Interagir)
**Projeto A3 — Movimento Humano / Universidade São Judas Tadeu (USJT)**  
**Docente Responsável:** Profa. Dra. Patrícia M. Franciulli  
**Link da Aplicação no GitHub Pages:** [https://thai673.github.io/fisio-em-casa/](https://thai673.github.io/fisio-em-casa/)

Este documento orienta os testes de validação funcional e usabilidade da aplicação **Fisio em Casa** por todos os membros da equipe acadêmica, servindo como registro de evidência formal da etapa **Interagir** do projeto A3.

---

## 🎯 Teste 1: O Fluxo Principal do Paciente (Demonstração da Banca)
*Sequência de navegação:* `Login → Paciente → Exercício → Análise IA → Feedback → Conclusão → Evolução`.

1. **Acessar a aplicação:**
   * Abra [https://thai673.github.io/fisio-em-casa/](https://thai673.github.io/fisio-em-casa/) no navegador (ou execute o arquivo offline `fisio-em-casa-compartilhavel.html`).
   * Na tela de Login, selecione um dos chips de demonstração (ex.: **"Maria Silva"**) ou digite `maria@fisioemcasa.com` com senha `1234`.
2. **Navegar pela Home do Paciente:**
   * Observe o cabeçalho personalizado *"Olá, Maria"*, o diagnóstico clínico (*Gonartrose*) e a barra de adesão semanal.
   * Note o card com o **Objetivo Terapêutico** individualizado: *"Melhorar a mobilidade, reduzir a dor e fortalecer os membros inferiores"*.
   * Verifique a lista com os **5 exercícios prescritos** para a condição de Maria.
3. **Explorar a Tela de Perfil (`s-perfil`):**
   * Na barra de navegação inferior, clique na aba **Perfil**.
   * Verifique as informações detalhadas: Avatar, Condição de Saúde, Objetivo Terapêutico e Recomendações Gerais do Fisioterapeuta.
   * Visualize a grade dos 5 exercícios relacionados à sua patologia com botões rápidos de consulta.
   * Alterne entre os pacientes através dos chips de demonstração (*Maria*, *João*, *Antônio*, *Beatriz*, *Carla*).
4. **Abrir a Tela de Demonstração de Exercício:**
   * Retorne à aba **Exercícios** e selecione um exercício (ex.: *"Sentar e Levantar da Cadeira"* ou *"Contração Isométrica do Quadríceps"*).
   * Verifique a **Demonstração Visual** (GIF animado de alta fidelidade ou vetor SVG anatômico dinâmico).
   * Leia atentamente o **Objetivo do Exercício**, as **Instruções Passo a Passo** em 4 fases e a seção de **Cuidados Importantes**.
   * Abra o acordeão da **Ficha Biomecânica & Cinesiológica** (exigência dos 9 pontos da avaliação):
     - Articulações e graus de liberdade;
     - Planos e eixos anatômicos;
     - Músculos agonistas, antagonistas e estabilizadores;
     - Classificação da alavanca biomecânica (1ª, 2ª ou 3ª classe);
     - Justificativa cinesioterapêutica.
5. **Iniciar a Simulação de IA (MediaPipe Pose Landmarker):**
   * Clique no botão destacado **"✦ Iniciar com Análise de IA →"**.
   * Observe o banner explicativo de viabilidade técnica: *"Simulação de Funcionalidade Futura · Estudo com Google MediaPipe Pose Landmarker"*.
   * Visualize o rastreamento dos 3 marcos anatômicos-chave: *Quadril (Trocânter Maior)*, *Joelho (Côndilo Femoral)* e *Tornozelo (Maléolo Lateral)*.
   * Note o cálculo angular em tempo real (ex.: flexão segura em **88°**).
   * **Teste interativo A (Feedback de Alinhamento):** Clique no botão *"Alinhamento Correto"* para observar os vetores verdes e o reforço positivo do movimento neutro.
   * **Teste interativo B (Simulação de Compensação Motora):** Clique em *"Simular Valgo Dinâmico"*. Observe:
     - O deslocamento medial do joelho (+14° de desvio);
     - O alerta sonoro/visual em destaque vermelho;
     - A instrução biomecânica corretiva da IA para ativação do glúteo médio e proteção do LCA.
   * **Teste interativo C (Ciclo de Controle Motor):** Clique nos 5 botões numerados do ciclo em alça fechada:
     `1. Execução → 2. Análise → 3. Feedback Extrínseco → 4. Correção Feedforward → 5. Nova Execução`.
   * Clique em **"Confirmar Análise e Ir para Check-in →"**.
6. **Realizar o Check-in Perceptivo de Conclusão:**
   * Verifique o selo de validação da sessão com a síntese cinemática da IA.
   * Selecione a percepção subjetiva de esforço (*Tranquilo*, *Moderado* ou *Difícil*).
   * Adicione uma observação de autopercepção (ex.: *"Senti o quadríceps trabalhar sem dor"*).
   * Clique em **"Salvar e ver minha evolução agora →"**.
7. **Consultar a Tela de Evolução:**
   * Verifique o histórico de sessões atualizado instantaneamente, o gráfico de frequência semanal e o feedback inteligente sintetizado.

---

## 🎯 Teste 2: Validação dos 5 Pacientes e 20 Exercícios Prescritos

Verifique se cada paciente carrega rigorosamente os 5 exercícios correspondentes à sua condição clínica descrita no projeto:

| Paciente | Diagnóstico Clínico | 5 Exercícios Prescritos | Tipo de Mídia Visual |
| :--- | :--- | :--- | :--- |
| **1. Maria Silva** | Gonartrose (Osteoartrose de Joelho) | 1. Contração isométrica do quadríceps<br>2. Elevação da perna estendida (SLR)<br>3. Sentar e levantar da cadeira<br>4. Ponte de glúteo<br>5. Extensão de joelho sentada | • Isometria: SVG anatômico<br>• SLR: GIF cinemático<br>• Sentar/Levantar: GIF<br>• Ponte: GIF cinemático<br>• Extensão sentada: GIF |
| **2. João Pereira** | Lombalgia Mecânico-Postural Crônica | 1. Ponte de glúteo<br>2. Bird Dog (quatro apoios cruzado)<br>3. Gato-vaca (mobilidade raquidiana)<br>4. Contração abdominal isométrica<br>5. Mobilidade pélvica em decúbito | • Ponte: GIF cinemático<br>• Bird Dog: SVG dinâmico<br>• Gato-Vaca: SVG dinâmico<br>• Contração abdominal: SVG<br>• Mobilidade pélvica: SVG |
| **3. Antônio Costa** | Risco de Queda e Déficit de Equilíbrio | 1. Sentar e levantar com apoio<br>2. Equilíbrio em tandem (pés alinhados)<br>3. Marcha estacionária controlada<br>4. Elevação dos calcanhares (panturrilha)<br>5. Caminhada lateral com semi-agachamento | • Sentar/Levantar: GIF<br>• Tandem: SVG anatômico<br>• Marcha: GIF cinemático<br>• Calcanhares: GIF<br>• Caminhada lateral: SVG |
| **4. Beatriz Nunes** | Tendinopatia do Manguito Rotador | 1. Rotação externa com faixa elástica<br>2. Retração escapular isométrica<br>3. Remada baixa com elástico<br>4. Exercício pendular de Codman<br>5. Elevação assistida do braço com bastão | • Rotação externa: GIF<br>• Retração: SVG dinâmico<br>• Remada: SVG dinâmico<br>• Codman: SVG dinâmico<br>• Elevação assistida: SVG |
| **5. Carla Mendes** | Pós-operatório de Reconstrução do LCA | 1. Contração isométrica do quadríceps<br>2. Deslizamento do calcanhar em decúbito<br>3. Elevação da perna estendida (SLR)<br>4. Ponte bipodal sem flexão excessiva<br>5. Subida no degrau (Step-up unipodal) | • Isometria: SVG anatômico<br>• Deslizamento calcanhar: SVG<br>• SLR: GIF cinemático<br>• Ponte: GIF cinemático<br>• Step-up: SVG dinâmico |

---

## 🎯 Teste 3: O Painel Clínico do Fisioterapeuta

1. Na tela de Login (ou deslogando pelo perfil), selecione o perfil **"Dra. Ana Ribeiro (fisioterapeuta)"** (email `ana@fisioemcasa.com`, senha `1234`).
2. **Painel Geral:**
   * Observe os cartões de métricas globais: Total de Pacientes (5), Treinos na Semana, Taxa de Adesão Média e Casos com Relato Álgico.
   * Verifique a triagem inteligente de prioridade (pacientes com relatos de *"Difícil"* aparecem sinalizados para revisão prioritária).
3. **Gestão de Pacientes:**
   * Clique em **Maria Silva** e depois em **Carla Mendes**.
   * Verifique o gráfico de aderência, a lista de sessões recentes e a ficha de evolução.
   * Insira uma observação clínica de ajuste de conduta no campo de texto e clique em **"Salvar Observação"**.
   * Verifique a confirmação em tela e a persistência dos dados.

---

## 🎯 Teste 4: Persistência, Acessibilidade e Backup

1. **Acessibilidade:**
   * Clique no botão do tema (ícone de sol/lua) para alternar entre Modo Claro e Modo Escuro.
   * Verifique a legibilidade dos textos, contrastes de cores e alinhamento dos botões em telas pequenas (modo responsivo de celular no navegador: F12 $\rightarrow$ Ctrl+Shift+M).
2. **Persistência de Dados e Backup:**
   * Acesse o perfil do paciente ou o painel do profissional.
   * Clique no botão **"Baixar backup (arquivo .json)"** e comprove o download do arquivo estruturado.
   * Clique em **"Restaurar dados padrão de fábrica"** para reiniciar o banco de dados simulado a qualquer momento durante os ensaios.
