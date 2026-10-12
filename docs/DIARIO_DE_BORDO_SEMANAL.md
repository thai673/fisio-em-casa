# Diário de Bordo Semanal & Evidências de Processo
**Projeto A3 — Unidade Curricular: Movimento Humano**  
**Universidade São Judas Tadeu (USJT)**  
**Docente:** Profa. Dra. Patrícia M. Franciulli  
**Solução:** *Fisio em Casa* — Plataforma Digital de Cinesioterapia Domiciliar com Biofeedback por IA  

---

## 1. Identificação do Registro Semanal

* **Etapas do Neurolearning em Foco:** **Efetivar** e **Interagir**.
* **Data de Fechamento:** Semana de Desenvolvimento e Testes de Usabilidade.
* **Integrantes do Grupo:** Equipe Discente de Fisioterapia / USJT.

---

## 2. O que o Grupo Fez

O grupo desenvolveu as telas do aplicativo com foco no fluxo integral do paciente e na representação da análise visual dos exercícios via inteligência artificial (visão computacional). Além disso, aprofundou e estruturou todo o embasamento cinesiológico e biomecânico dos movimentos prescritos (articulações, planos, eixos, músculos agonistas, antagonistas, estabilizadores e alavancas biomecânicas) e organizou os slides e roteiros da apresentação final do projeto.

---

## 3. Decisões Tomadas

1. **Estruturação do Fluxo Linear Fechado:**  
   O grupo optou por estruturar o aplicativo em um fluxo contínuo e sem gargalos:  
   $$\text{Login} \longrightarrow \text{Paciente} \longrightarrow \text{Exercício} \longrightarrow \text{Análise de IA} \longrightarrow \text{Feedback Clínico} \longrightarrow \text{Conclusão (Check-in)} \longrightarrow \text{Evolução}$$

2. **Representação Funcional e Didática da IA:**  
   Alinhado à exigência avaliativa da Profa. Patrícia Franciulli (onde a IA precisa ser parte ativa da solução e ter seu papel fundamentado), o grupo desenhou a interface de **visão computacional com rastreamento de marcos anatômicos (*landmarks*)**:
   * *Quadril (Trocânter Maior)*;
   * *Joelho (Côndilo Femoral Lateral)*;
   * *Tornozelo (Maléolo Lateral)*.
   * Vetores de alinhamento frontal com detecção de desvio (prevenção do **valgo dinâmico**).
   * Cálculo angular instantâneo (ex.: flexão de 88° no agachamento seguro).

3. **Priorização do Conhecimento Técnico Biomecânico (9 Pontos):**  
   Considerando que os critérios biomecânicos constituem a maior fatia da nota acadêmica, o grupo integrou em cada exercício a fundamentação completa: classificação articular morfológica, graus de liberdade, fases de contração (excêntrica/concêntrica), tipo de alavanca e justificativa cinesioterapêutica.

4. **Aplicação Prática do Ciclo de Controle Motor:**  
   Inclusão de componente interativo de controle motor em alça fechada (*closed-loop*), conectando o feedback extrínseco da IA à propriocepção intrínseca do paciente.

---

## 4. Uso da Inteligência Artificial

A Inteligência Artificial foi empregada de duas formas complementares:
1. **No Desenvolvimento do Projeto:** Auxílio na arquitetura de software, refino das interfaces responsivas, estruturação e consistência dos datasets biomecânicos e síntese de evidências científicas indexadas (PubMed, SciELO, USP).
2. **Na Solução em Saúde (*Fisio em Casa*):** Simulação de visão computacional para biofeedback corretivo instantâneo (*Conhecimento de Performance - CP* e *Conhecimento de Resultados - CR*), apoiando o paciente na execução correta e gerando métricas de evolução para o fisioterapeuta.

---

## 5. O que o Grupo Aprendeu

O grupo compreendeu a importância vital de conectar a tecnologia à prática fisioterapêutica baseada em evidências, entendendo profundamente:
* Como o **feedback visual em tempo real** encurta a transição entre a **Fase Cognitiva** (onde há alto gasto de atenção e erros frequentes) e a **Fase Associativa** da aprendizagem motora.
* A relevância da cadeia cinética fechada (CCF) e da ativação de estabilizadores (glúteo médio) para impedir a sobrecarga no ligamento cruzado anterior (LCA) e na articulação patelofemoral.
* Como dados objetivos de amplitude de movimento e adesão ao tratamento empoderam a conduta clínica do fisioterapeuta, sem que a tecnologia tome decisões diagnósticas autônomas.

---

## 6. Evidências do Processo — Etapa Interagir (Testes em Grupo)

Como evidência prática da etapa **Interagir**, os membros da equipe realizaram uma rodada estruturada de testes de usabilidade navegando em todos os fluxos do sistema:

| Integrante / Avaliador | Papel Testado | Cenário Navegado | Observações & Validações | Status |
| :--- | :--- | :--- | :--- | :---: |
| **Membro 1** | Paciente (Maria Silva) | Login $\rightarrow$ Agachamento $\rightarrow$ Análise IA $\rightarrow$ Check-in | "O overlay do esqueleto e a indicação de 88° facilitam muito entender o limite seguro." | **Aprovado ✓** |
| **Membro 2** | Paciente (Maria Silva) | Simulação do Valgo Dinâmico no app | "O alerta vermelho ao colapsar medialmente o joelho explica visualmente por que o valgo é perigoso." | **Aprovado ✓** |
| **Membro 3** | Fisioterapeuta (Dra. Ana) | Painel Clínico $\rightarrow$ Lista de Pacientes $\rightarrow$ Observações | "Consegui ver os pacientes que relataram 'Difícil' em destaque e salvar observações na ficha." | **Aprovado ✓** |
| **Membro 4** | Paciente (João / Beatriz) | Lombalgia (Ponte) e Ombro (Rotação) | "As fichas biomecânicas com alavanca e planos atendem diretamente os 9 pontos da professora." | **Aprovado ✓** |
| **Membro 5** | Suporte / Dados | Persistência de Dados JSON e Exportação | "Os dados ficam gravados no navegador e o botão de backup baixa o arquivo `.json` perfeitamente." | **Aprovado ✓** |

---

## 7. Próximos Passos

1. Validar a execução do fluxo em múltiplos dispositivos móveis (smartphones dos colegas e da família).
2. Ensaiar a apresentação oral cronometrada com o roteiro de 5 minutos, garantindo que todos os integrantes dominem a explicação da IA e do controle motor.
3. Submeter a versão final do repositório no GitHub Pages e os anexos na plataforma da faculdade.
