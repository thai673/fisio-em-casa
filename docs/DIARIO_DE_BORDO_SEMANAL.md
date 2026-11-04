# Diário de Bordo & Evidências de Processo (Registro de 2 Semanas)
**Projeto A3 — Unidade Curricular: Movimento Humano**  
**Universidade São Judas Tadeu (USJT)**  
**Docente Responsável:** Profa. Dra. Patrícia M. Franciulli  
**Solução Acadêmica:** *Fisio em Casa* — Plataforma Digital de Cinesioterapia Domiciliar com Biofeedback por IA  
**Repositório Oficial:** [https://github.com/thai673/fisio-em-casa](https://github.com/thai673/fisio-em-casa)  
**Aplicação Publicada (GitHub Pages):** [https://thai673.github.io/fisio-em-casa/](https://thai673.github.io/fisio-em-casa/)

---

# 📅 SEMANA 1: Pesquisa, Concepção Teórica & Modelagem da Solução

### 1. Etapas da Neuroaprendizagem Trabalhadas
* [x] **Conectar** (Empatia com o problema real do paciente e abandono do tratamento).
* [x] **Explorar** (Pesquisa de literatura cinesiológica, biomecânica e tecnologias de IA).
* [x] **Expandir & Evocar** (Arquitetura conceitual da plataforma e modelagem do fluxo).

---

### 2. O que o Grupo Trabalhou Neste Encontro?
1. **Identificação do Desafio Clínico (*Design Challenge*):**  
   O grupo analisou o problema crônico da baixa adesão e descontinuidade dos programas de exercícios domiciliares (*Home Exercise Programs - HEP*). Dados da literatura fisioterapêutica (Jack et al., 2010; Essery et al., 2017) revelam taxas de abandono e não-aderência superiores a 65%, provocadas por insegurança na execução, ausência de supervisão em tempo real, dor aguda não monitorada e falta de motivação intrínseca.
2. **Definição dos 5 Perfis Clínicos Prioritários:**  
   Mapeamos cinco condições de saúde representativas da atenção básica e especializada em fisioterapia:
   * **Maria Silva (62 anos):** Osteoartrose de joelho (Gonartrose);
   * **João Pereira (45 anos):** Lombalgia crônica mecânico-postural;
   * **Antônio Costa (74 anos):** Risco de queda e alteração do equilíbrio no idoso;
   * **Beatriz Nunes (38 anos):** Tendinopatia do manguito rotador;
   * **Carla Mendes (29 anos):** Pós-operatório de reconstrução do ligamento cruzado anterior (LCA).
3. **Investigação de Inteligência Artificial e Visão Computacional:**  
   Pesquisamos abordagens tecnológicas para análise do movimento humano sem a necessidade de sensores caros ou marcadores retrorefletivos. Identificamos o modelo **Google MediaPipe Pose Landmarker**, capaz de inferir 33 marcos anatômicos tridimensionais diretamente de frames de vídeo monoculares convencionais.
4. **Fundamentação em Aprendizagem e Controle Motor:**  
   Estruturamos a fundamentação teórica de controle motor baseada no modelo de circuito fechado (*closed-loop motor control*) de Schmidt & Wrisberg, onde o feedback visual extrínseco atua como Conhecimento de Performance (CP) para corrigir erros cinemáticos antes da consolidação de padrões patológicos.

---

### 3. Decisões Tomadas pelo Grupo
1. **Foco na Acessibilidade e Inclusão:** A solução precisa rodar diretamente em navegadores web de celulares e computadores de baixo custo, sem exigir downloads complexos ou hardware dedicado.
2. **Ética Profissional e Soberania do Fisioterapeuta:** A IA deve atuar exclusivamente como **ferramenta de apoio ao acompanhamento e à adesão**, fornecendo biofeedback e triagem de risco, **sem jamais prescrever exercícios de forma autônoma ou substituir a consulta e avaliação clínica do fisioterapeuta**.
3. **Seleção do Exercício Âncora:** Escolhemos o **agachamento** (e sua variação funcional de sentar/levantar da cadeira) como o movimento central para aprofundamento biomecânico e demonstração de visão computacional, por envolver tríplice flexão/extensão (quadril, joelho e tornozelo) e alta prevalência da compensação em **valgo dinâmico**.

---

### 4. Uso da Inteligência Artificial Neste Momento
* **Pesquisa e Curadoria Técnico-Científica:** Utilização de ferramentas de IA para busca, filtragem e síntese de artigos científicos indexados (PubMed, SciELO, revistas da USP) sobre biomecânica da articulação patelofemoral e alavancas cinesiológicas.
* **Planejamento da Arquitetura Tecnológica:** Mapeamento conceitual de como os vetores ósseos e arcos de circunferência articular seriam calculados a partir das coordenadas $(X, Y, Z)$ dos *landmarks* anatômicos.

---

### 5. Aprendizados do Grupo
* Compreendemos a distinção crucial entre **Conhecimento de Performance (CP)** (informação sobre o padrão cinemático do movimento, ex.: desvio de valgo de +14°) e **Conhecimento de Resultados (CR)** (informação sobre o desfecho da tarefa, ex.: 10 repetições concluídas).
* Entendemos a importância da cadeia cinética fechada (CCF) na redução do estresse de cisalhamento anterior da tíbia e o papel estabilizador do músculo glúteo médio no plano frontal da pelve.
* Ficou evidente que a IA só tem valor acadêmico e clínico se tiver uma função terapêutica bem justificada, e não apenas como um recurso estético.

---

### 6. Próximos Passos Definidos
* Iniciar a programação e o design de interfaces do protótipo funcional navegável (*Fisio em Casa*).
* Elaborar as fichas biomecânicas completas para todos os exercícios dos 5 pacientes.
* Estruturar a simulação visual da detecção de marcos anatômicos e do valgo dinâmico.

---
---

# 📅 SEMANA 2: Efetivação do Protótipo Funcional, Integração da IA & Testes de Usabilidade

### 1. Etapas da Neuroaprendizagem Trabalhadas
* [x] **Efetivar** (Construção do protótipo funcional, código, design responsivo e acervo de exercícios).
* [x] **Interagir** (Testes de usabilidade em grupo, discussão crítica, ajustes e refinamento).

---

### 2. O que o Grupo Trabalhou Neste Encontro?
1. **Construção do Protótipo Funcional Completo (*Fisio em Casa*):**  
   Avançamos da ideação para a implementação técnica de uma Single Page Application (SPA) completa, responsiva, moderna e acolhedora, contendo:
   * **Tela de Login:** Acesso rápido por chips dos 5 pacientes e perfil profissional da fisioterapeuta.
   * **Home do Paciente:** Saudação humanizada, diagnóstico em destaque, barra de adesão semanal e objetivo terapêutico individualizado.
   * **Nova Tela de Perfil do Paciente (`s-perfil`):** Apresentação do avatar, condição clínica, objetivo terapêutico específico, recomendações gerais da conduta fisioterapêutica e lista interativa de exercícios vinculados à sua condição.
   * **Tela de Demonstração do Exercício:** Apresentação visual (GIFs cinemáticos e vetores SVG anatômicos dinâmicos), objetivo, passo a passo em 4 etapas, cuidados clínicos e ficha biomecânica aprofundada (classificação articular, planos, eixos, músculos e alavancas).
   * **Tela de Análise por IA & Controle Motor:** Simulação do Google MediaPipe Pose Landmarker rastreando trocânter maior, côndilo femoral e maléolo lateral com cálculo angular instantâneo (88°).
   * **Tela de Conclusão / Check-in Perceptivo:** Registro da percepção subjetiva de esforço (*Tranquilo*, *Moderado*, *Difícil*) e notas de autopercepção corporal.
   * **Tela de Evolução:** Histórico cumulativo de treinos, gráfico semanal de consistência e síntese inteligente de evolução.
   * **Painel do Fisioterapeuta:** Triagem algorítmica destacando pacientes com relato álgico/difícil, consulta de fichas e campo para gravação de novas observações clínicas.
2. **Implementação do Acervo de 20 Exercícios Exclusivos:**  
   Garantimos que cada um dos 5 pacientes recebesse exatamente os 5 exercícios clínicos prescritos para a sua patologia:
   * *Maria Silva (Gonartrose):* Isometria de quadríceps, SLR, Sentar/Levantar, Ponte e Extensão sentada.
   * *João Pereira (Lombalgia):* Ponte, Bird Dog, Gato-vaca, Contração abdominal e Mobilidade pélvica.
   * *Antônio Costa (Equilíbrio/Idoso):* Sentar/Levantar com apoio, Tandem, Marcha estacionária, Elevação de calcanhares e Caminhada lateral.
   * *Beatriz Nunes (Manguito Rotador):* Rotação externa com elástico, Retração escapular, Remada, Pendular de Codman e Elevação assistida.
   * *Carla Mendes (Pós-op LCA):* Isometria de quadríceps, Deslizamento do calcanhar, SLR, Ponte e Subida no degrau (Step-up).
3. **Desenvolvimento de 13 Animações Vetoriais Anatômicas em SVG:**  
   Para os exercícios sem GIFs preexistentes, desenvolvemos ilustrações anatômicas estilizadas em vetores SVG com keyframes CSS dedicados, operando perfeitamente nos modos Claro e Escuro.
4. **Simulação Interativa de Compensação Motora & Valgo Dinâmico:**  
   Criamos controles interativos que permitem simular o movimento ideal (feedback positivo verde em 88°) versus a falha motora (valgo dinâmico de +14° medial com alerta sonoro/visual e instrução para ativação do glúteo médio).
5. **Representação do Ciclo de Controle Motor em 5 Etapas:**  
   Integramos um componente visual interativo demonstrando a alça fechada: `1. Execução → 2. Análise → 3. Feedback Extrínseco → 4. Correção Feedforward → 5. Nova Execução`.
6. **Deploy no GitHub Pages e Pacote Compartilhável:**  
   Realizamos o deploy contínuo em [https://thai673.github.io/fisio-em-casa/](https://thai673.github.io/fisio-em-casa/), além de gerar um arquivo HTML offline autocontido (`fisio-em-casa-compartilhavel.html`) e arquivo `.zip` para envio direto no WhatsApp.

---

### 3. Decisões Tomadas pelo Grupo
1. **Manter o Protótipo Funcional e Simples:** Priorizamos a navegabilidade fluida e a demonstração intuitiva da proposta durante a apresentação, sem exigir logins complexos ou servidores externos pesados.
2. **Migração Automática de Dados para a Versão 4 (`fisio_em_casa_patients_v4`):** Decidimos versionar a chave do armazenamento local para que qualquer membro do grupo ou avaliador veja os novos 5 pacientes e 20 exercícios sem conflito com dados antigos em cache.
3. **Equilíbrio Ético e Educativo:** Reforçamos com banners institucionais que a análise de IA é um estudo de viabilidade educacional, e que a progressão de cargas e a liberação de exercícios dependem da avaliação soberana do fisioterapeuta.
4. **Priorização da Nota Técnica de Biomecânica (9 Pontos):** Aprofundamos o detalhamento cinesiológico (planos, eixos, braços de momento, alavancas interfixas, inter-resistentes e interpotentes) em cada um dos 20 exercícios para garantir a nota máxima no critério técnico.

---

### 4. Uso da Inteligência Artificial Neste Momento
* **Auxílio no Desenvolvimento de Código e Engenharia Web:** A IA auxiliou na organização dos dados cinesiológicos estruturados em JSON, no design responsivo em CSS e na modelagem matemática dos vetores e arcos nos gráficos SVG/Canvas.
* **Componente da Solução em Saúde:** Estruturação da simulação do MediaPipe Pose com cálculo trigonométrico angular entre os pontos do trocânter maior, côndilo femoral e maléolo lateral, fornecendo o *Conhecimento de Performance* em tempo real.

---

### 5. Aprendizados do Grupo
* Aprendemos a transformar conceitos teóricos de neuroaprendizagem e biomecânica em um protótipo funcional tangível e acessível.
* Compreendemos na prática como o feedback extrínseco imediato por visão computacional encurta a transição entre a **fase cognitiva** (instável e com alto custo atencional) e a **fase associativa** da aprendizagem motora.
* Consolidamos a visão de que a tecnologia deve empoderar o paciente a realizar seus exercícios com segurança em casa, fornecendo dados objetivos de adesão para que o fisioterapeuta tome decisões clínicas mais assertivas.

---

### 6. Evidências do Processo — Etapa Interagir (Matriz de Testes em Grupo)

Durante esta semana, todos os integrantes do grupo testaram exaustivamente o aplicativo em computadores e celulares:

| Integrante / Avaliador | Perfil Testado | Cenário / Fluxo Navegado | Observações & Validações do Grupo | Status |
| :--- | :--- | :--- | :--- | :---: |
| **Membro 1** | Maria Silva | Login $\rightarrow$ Perfil $\rightarrow$ Isometria e Agachamento $\rightarrow$ Check-in $\rightarrow$ Evolução | "O arco verde de 88° e o esqueleto facilitam muito o entendimento do limite articular seguro." | **Aprovado ✓** |
| **Membro 2** | João Pereira | Perfil Lombalgia $\rightarrow$ Exercício Bird Dog e Mobilidade $\rightarrow$ Ficha de Alavanca de 1ª Classe | "As ilustrações em SVG animado ficaram muito claras e o passo a passo em 4 etapas é super didático." | **Aprovado ✓** |
| **Membro 3** | Antônio Costa | Perfil Risco de Queda $\rightarrow$ Tandem e Marcha $\rightarrow$ Cuidados para idosos | "As orientações de segurança (apoio de cadeira/parede) dão muita tranquilidade para o paciente idoso." | **Aprovado ✓** |
| **Membro 4** | Beatriz Nunes | Perfil Tendinopatia de Ombro $\rightarrow$ Rotação Externa $\rightarrow$ Ritmo Escapuloumeral | "A explicação dos músculos estabilizadores (manguito) atende perfeitamente os critérios da professora." | **Aprovado ✓** |
| **Membro 5** | Carla Mendes | Perfil Pós-op LCA $\rightarrow$ Simulação de Valgo Dinâmico vs. Alinhamento | "O alerta vermelho ao colapsar o joelho para dentro deixa claro o perigo de sobrecarga no enxerto de LCA." | **Aprovado ✓** |
| **Membro 6** | Dra. Ana (Fisio) | Painel Clínico $\rightarrow$ Triagem de Atenção $\rightarrow$ Registro de Conduta Clínica | "Os pacientes com relato 'Difícil' aparecem em destaque no topo e consegui salvar a anotação na ficha." | **Aprovado ✓** |

---

### 7. Próximos Passos Definidos
1. Realizar ensaios cronometrados da apresentação oral do grupo, utilizando o roteiro estruturado de 5 minutos:  
   $$\text{Problema} \longrightarrow \text{Solução} \longrightarrow \text{Biomecânica} \longrightarrow \text{Controle Motor} \longrightarrow \text{IA} \longrightarrow \text{Impacto Social} \longrightarrow \text{Demonstração ao Vivo}$$
2. Garantir que todos os integrantes saibam explicar com clareza o funcionamento da visão computacional, o ciclo de controle motor e a fundamentação biomecânica das alavancas.
3. Submeter a versão final do repositório no GitHub Pages e os arquivos complementares na plataforma acadêmica da universidade.
