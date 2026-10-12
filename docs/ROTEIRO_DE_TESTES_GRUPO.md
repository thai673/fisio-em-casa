# Roteiro de Testes e Validação do Protótipo (Etapa Interagir)
**Projeto A3 — Movimento Humano / USJT**  
**Link da Aplicação no GitHub Pages:** [https://thai673.github.io/fisio-em-casa/](https://thai673.github.io/fisio-em-casa/)

Este roteiro serve para todos os integrantes do grupo testarem cada botão, tela e interação, garantindo que não haja falhas e documentando a evidência de validação da etapa **Interagir** exigida no projeto.

---

## 🎯 Teste 1: O Fluxo Central do Paciente (O principal da apresentação!)
*Objetivo:* Conferir a sequência `Login → Paciente → Exercício → Análise IA → Feedback → Conclusão → Evolução`.

1. **Acessar a aplicação** e, na tela de Login, clicar no chip **"Maria Silva"** (ou digitar `maria@fisioemcasa.com` e senha `1234`).
2. **Na tela inicial (Home do Paciente):**
   * Observar a saudação *"Olá, Maria"*, o diagnóstico *"Gonartrose"* e a barra de progresso.
   * Clicar no botão **"Começar treino"** ou no primeiro exercício: **"Agachamento"**.
3. **Na tela do Exercício (Agachamento):**
   * Verifique se o GIF animado demonstra o movimento.
   * Leia a seção *"Ficha Biomecânica & Cinesiológica"* (planos sagitais, eixos, músculos agonistas, alavanca de 3ª classe).
   * Clique no botão verde principal: **"✦ Iniciar com Análise de IA →"**.
4. **Na tela de Análise por IA & Controle Motor:**
   * Observe o **Rastreamento Biomecânico** com os 3 pontos: *Quadril (Trocânter Maior)*, *Joelho (Côndilo Femoral)* e *Tornozelo (Maléolo Lateral)*.
   * Veja o arco do joelho marcando **88°** e o status *"Sem valgo dinâmico"*.
   * **Teste interativo 1:** Clique no botão **"Simular Valgo Dinâmico"**.
     * O joelho colapsa para dentro, a linha fica âmbar/vermelha e o alerta surge: *"Valgo Dinâmico (+14° medial)"*.
     * O feedback da IA adverte para ativar o glúteo médio e evitar lesão no LCA!
     * Clique em **"Restaurar Alinhamento Neutro"** para voltar ao normal.
   * **Teste interativo 2:** Clique no botão **"Ocultar Esqueleto"** e depois **"Exibir Esqueleto"**.
   * **Teste interativo 3:** No card *"Ciclo de Controle Motor"*, clique nas etapas 1, 2, 3, 4 e 5:
     * Veja a explicação de cada fase (Execução $\rightarrow$ Análise $\rightarrow$ Feedback Extrínseco $\rightarrow$ Correção/Feedforward $\rightarrow$ Nova Execução).
   * Clique no botão **"Confirmar Análise e Ir para Check-in →"**.
5. **Na tela de Check-in (Conclusão):**
   * Verifique o selo verde: *✓ Análise de IA concluída: Alinhamento seguro (88° flexão)*.
   * Escolha uma percepção de esforço (*Tranquilo*, *Moderado* ou *Difícil*).
   * Escreva uma nota opcional (ex.: *"Sem dores no joelho"*).
   * Clique em **"Salvar e ver minha evolução agora →"**.
6. **Na tela de Evolução:**
   * Verifique se a sessão foi registrada no histórico, com o insight inteligente da IA atualizado!

---

## 🎯 Teste 2: O Fluxo do Fisioterapeuta
*Objetivo:* Validar a visão clínica da prescrição e acompanhamento.

1. Na barra de navegação inferior, vá em **Perfil** $\rightarrow$ clique em **"Sair"**.
2. Na tela de Login, clique no chip **"Dr. Ana Ribeiro (fisio)"** (ou email `ana@fisioemcasa.com`, senha `1234`).
3. **No Painel do Fisioterapeuta:**
   * Observe a lista de pacientes que requerem atenção prioritária (ex.: Beatriz que relatou 'Difícil').
   * Clique na aba **"Pacientes"** e abra o cadastro de **Maria Silva**.
   * Visualize as sessões, taxa de evolução (86%) e o histórico das últimas execuções.
   * Abra um dos exercícios da lista para inspecionar a ficha biomecânica.
   * Digite uma orientação no campo de texto e clique em **"Salvar observação"**.

---

## 🎯 Teste 3: Outros Pacientes e Patologias (Para responder à banca)
* **João Pereira (Lombalgia Crônica):** Exercício de Ponte de Glúteo e Alongamento de Isquiotibiais.
* **Antônio Costa (Idoso / Risco de Queda):** Exercício de Marcha Estacionária e Elevação de Panturrilha (Alavanca de 2ª classe).
* **Beatriz Nunes (Tendinite do Ombro):** Rotação Externa com Manguito Rotador (Plano Transversal / Eixo Longitudinal).
* **Carla Mendes (Pós-op LCA):** Elevação de Perna Reta - SLR (Isometria do quadríceps sem cisalhamento).

---

## 🎯 Teste 4: Persistência de Dados e Segurança
1. Vá na aba **Perfil**.
2. Clique em **"Baixar backup (arquivo .json)"** e confira o download do arquivo `fisio_em_casa_dados.json`.
3. Se quiser zerar alterações e voltar aos dados padrão de demonstração, clique em **"Restaurar dados padrão de fábrica"**.

---

## ✅ Checklist de Aprovação da Equipe
- [x] O fluxo `Login → Paciente → Exercício → Análise → Feedback → Conclusão → Evolução` funciona perfeitamente sem falhas.
- [x] A IA está visível e rastreia quadril, joelho, tornozelo e detecta o valgo dinâmico.
- [x] O ciclo de controle motor (5 etapas em alça fechada) está ilustrado e interativo.
- [x] As articulações, planos, músculos e alavancas atendem aos critérios de 9 pontos da avaliação técnica.
- [x] O site funciona no celular e no computador através do link do GitHub Pages.
