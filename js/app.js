/**
 * Fisio em Casa - Aplicação de Fisioterapia Domiciliar
 * Protótipo acadêmico (A3 - Movimento Humano / USJT)
 * Profa. Dra. Patrícia M. Franciulli
 */

const ICONS = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11.5 12 4l8 7.5"/><path d="M6 10.5V20h5v-6h2v6h5v-9.5"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5 7h14M5 12h14M5 17h14"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16l3-4 3 3 4-6"/></svg>',
  person: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.3"/><path d="M5 20c1.2-4 4-5.6 7-5.6s5.8 1.6 7 5.6"/></svg>'
};

// BIBLIOTECA COMPLETA DE EXERCÍCIOS
const EXERCISES = [
  {
    "id": "isometria_quadriceps",
    "name": "Contração isométrica do quadríceps",
    "objective": "Ativar e recrutar o quadríceps femoral sem sobrecarga ou cisalhamento articular, prevenindo a inibição muscular artrogênica.",
    "sets": "3×10 contrações (6s)",
    "time": "~3 min",
    "visualType": "svg",
    "svgId": "svg-isometria-quadriceps",
    "caption": "Perna estendida com toalha sob o joelho ↔ Pressão para baixo",
    "joints": "Femorotibial e Femoropatelar (em extensão mantida a 0°)",
    "planes": "Isométrico (sem deslocamento angular de planos)",
    "moves": "Contração estática voluntária máxima sustentada (isometria)",
    "muscles": "Quadríceps femoral (Vasto medial oblíquo/VMO, Vasto lateral, Vasto intermédio e Reto femoral)",
    "antagonistsSynergists": "Antagonistas: Isquiotibiais (relaxamento recíproco). Estabilizadores: Tensor da fáscia lata.",
    "contraction": "Isométrica (tensão muscular contínua sem alteração no comprimento da fibra).",
    "lever": "3ª Classe em equilíbrio isométrico contra resistência da superfície.",
    "why": "Fundamental nas fases iniciais de gonartrose e pós-operatório imediato de LCA. Mantém o tônus da coxa sem gerar atrito na cartilagem articular.",
    "precautions": [
      "Não prenda a respiração (evite a manobra de Valsalva); expire suavemente durante a contração.",
      "Não force se houver dor em pontada na patela; mantenha a pressão moderada e confortável.",
      "Mantenha o tornozelo relaxado ou em leve dorsiflexão, focando a força na coxa."
    ],
    "steps": [
      "Sente-se com as costas apoiadas e a perna estendida à frente sobre a cama ou tapete.",
      "Coloque uma pequena toalha enrolada logo abaixo da parte posterior do joelho.",
      "Pressione a parte de trás do joelho firmemente contra a toalha, 'esmagando-a' contra o chão.",
      "Sustente a contração firme da coxa por 5 a 6 segundos.",
      "Relaxe por 3 segundos e repita o ciclo conforme prescrito."
    ],
    "aiLandmarks": {
      "hip": {
        "cx": 105,
        "cy": 130,
        "label": "Quadril (Neutro)"
      },
      "knee": {
        "cx": 150,
        "cy": 130,
        "label": "Joelho (0° Extensão)"
      },
      "ankle": {
        "cx": 200,
        "cy": 130,
        "label": "Tornozelo (Dorsiflexão)"
      },
      "arc": "M 135 130 L 165 130"
    },
    "aiMetrics": {
      "angle": "0°",
      "angleTarget": "✓ Extensão neutra completa (0°)",
      "align": "0° rotação",
      "alignStatus": "✓ Patela voltada ao teto",
      "symm": "Unilateral",
      "symmStatus": "✓ Foco neuromuscular",
      "time": "6.0 s",
      "timeStatus": "✓ Isometria sustentada"
    },
    "aiFeedbackPositive": "Excelente ativação voluntária do vasto medial oblíquo (VMO)! A patela manteve-se centralizada sem rotação externa da tíbia.",
    "aiFeedbackCorrection": "Atenção ao alinhamento: A perna está rodando para fora. Gire suavemente a ponta do pé para cima (apontando ao teto) e pressione o joelho reto para baixo.",
    "motorSteps": [
      {
        "title": "Etapa 1: Execução do Paciente",
        "desc": "Comando corticoespinhal para contração seletiva das unidades motoras do quadríceps."
      },
      {
        "title": "Etapa 2: Análise da IA (MediaPipe)",
        "desc": "Detecção do vetor fêmur-tíbia e verificação de extensão mantida a 0° sem báscula."
      },
      {
        "title": "Etapa 3: Feedback Extrínseco",
        "desc": "Confirmação do tempo de sustentação (6s) e alerta sonoro/visual de cadência."
      },
      {
        "title": "Etapa 4: Ajuste Motor",
        "desc": "Refinamento do recrutamento do vasto medial prevenindo rotações compensatórias."
      },
      {
        "title": "Etapa 5: Nova Execução",
        "desc": "Contração mais eficiente com menor gasto de energia e maior propriocepção."
      }
    ]
  },
  {
    "id": "slr",
    "name": "Elevação da perna estendida (SLR)",
    "objective": "Fortalecer o reto femoral e flexores de quadril mantendo o joelho travado, sem estresse femoropatelar por atrito articular.",
    "sets": "3×10 repetições",
    "time": "~4 min",
    "visualType": "gif",
    "gif": "assets/gifs/slr.gif",
    "caption": "Deitado ↔ Elevação com joelho estendido até 45°",
    "joints": "Coxofemoral (móvel) e Femorotibial (estabilizada em 0° de extensão)",
    "planes": "Plano Sagital em torno do Eixo Látero-Lateral",
    "moves": "Flexão de quadril com joelho estendido mantido em isometria",
    "muscles": "Quadríceps femoral (Reto femoral, vastos), Iliopsoas e Tensor da fáscia lata",
    "antagonistsSynergists": "Antagonistas: Glúteo máximo e Isquiotibiais. Estabilizadores: Core abdominal e pelve.",
    "contraction": "Concêntrica no quadril com isometria contínua do quadríceps na extensão do joelho.",
    "lever": "3ª Classe (Interpotente) com braço de resistência longo, exigindo torque motor estável.",
    "why": "Padrão de ouro na reabilitação de LCA e artrose femoropatelar: estimula o quadríceps sem permitir o deslizamento patelar sob carga flexionada.",
    "precautions": [
      "Não arqueie a coluna lombar ao erguer a perna; mantenha o abdômen ativo.",
      "Não deixe o joelho dobrar durante o movimento; a perna deve subir como uma haste rígida.",
      "A perna oposta deve permanecer flexionada com o pé apoiado para proteger a região lombar."
    ],
    "steps": [
      "Deite-se de costas em uma superfície firme, com uma perna flexionada e a outra esticada.",
      "Contraia a coxa da perna estendida, travando firmemente o joelho em linha reta.",
      "Eleve a perna reta até a altura do joelho oposto (cerca de 40° a 45° de inclinação).",
      "Mantenha por 1 a 2 segundos no topo de forma controlada.",
      "Desça lentamente, tocando o calcanhar suavemente no chão antes da próxima repetição."
    ],
    "aiLandmarks": {
      "hip": {
        "cx": 100,
        "cy": 135,
        "label": "Quadril (Fulcro)"
      },
      "knee": {
        "cx": 145,
        "cy": 110,
        "label": "Joelho (180° travado)"
      },
      "ankle": {
        "cx": 190,
        "cy": 85,
        "label": "Tornozelo (45° elevação)"
      },
      "arc": "M 115 130 A 18 18 0 0 1 135 120"
    },
    "aiMetrics": {
      "angle": "45°",
      "angleTarget": "✓ Elevação alvo (40°–45°)",
      "align": "0° flexão",
      "alignStatus": "✓ Joelho totalmente estendido",
      "symm": "Unilateral",
      "symmStatus": "✓ Sem báscula pélvica",
      "time": "2.3 s",
      "timeStatus": "✓ Descida excêntrica controlada"
    },
    "aiFeedbackPositive": "Excelente estabilização! Joelho mantido em 0° de extensão durante todo o arco de flexão de quadril, recrutando o reto femoral com segurança.",
    "aiFeedbackCorrection": "Atenção ao joelho: Detectamos flexão de 12° no joelho durante a subida. Trave bem a coxa antes de iniciar a elevação para não forçar a patela.",
    "motorSteps": [
      {
        "title": "Etapa 1: Execução do Paciente",
        "desc": "Coativação do quadríceps em extensão enquanto o iliopsoas traciona a perna para cima."
      },
      {
        "title": "Etapa 2: Análise da IA (MediaPipe)",
        "desc": "Verificação da rigidez do vetor do joelho e da altura máxima de flexão de quadril."
      },
      {
        "title": "Etapa 3: Feedback Extrínseco",
        "desc": "Aviso imediato se o joelho ceder ou fletir antes de atingir os 45°."
      },
      {
        "title": "Etapa 4: Ajuste Motor",
        "desc": "Aumento da tensão isométrica dos vastos medial e lateral para travar a articulação."
      },
      {
        "title": "Etapa 5: Nova Execução",
        "desc": "Repetição com controle rígido da cadeia cinética e sem sobrecarga na coluna lombar."
      }
    ]
  },
  {
    "id": "sentar_levantar",
    "name": "Sentar e levantar da cadeira",
    "objective": "Fortalecer a musculatura extensora dos membros inferiores em cadeia cinética fechada funcional, essencial para a autonomia e marcha.",
    "sets": "3×10 repetições",
    "time": "~4 min",
    "visualType": "gif",
    "gif": "assets/gifs/agachamento.gif",
    "caption": "Posição sentada com tronco ereto ↔ Extensão completa em pé",
    "joints": "Coxofemoral (esferoide), Femorotibial/Femoropatelar (gínglimo bicondilar) e Talocrural (gínglimo)",
    "planes": "Plano Sagital em torno do Eixo Látero-Lateral",
    "moves": "Flexão e extensão combinada de quadril e joelho com dorsiflexão",
    "muscles": "Quadríceps femoral, Glúteo máximo, Isquiotibiais e Tríceps sural",
    "antagonistsSynergists": "Estabilizadores: Glúteo médio (anti-valgo), Eretor da espinha e Core abdominal.",
    "contraction": "Concêntrica na subida (vencendo a gravidade); Excêntrica na descida controlada.",
    "lever": "3ª Classe (Interpotente) — Potência muscular aplicada entre o fulcro e a carga corporal.",
    "why": "Exercício de transferência funcional primordial em gonartrose e geriatria. Promove força de quadríceps com segurança contra quedas.",
    "precautions": [
      "Não impulsione o corpo projetando os joelhos para dentro (evite o valgo dinâmico).",
      "Não 'despenque' na cadeira; controle o peso até tocar suavemente o assento.",
      "Mantenha os pés totalmente apoiados no chão, sem elevar os calcanhares."
    ],
    "steps": [
      "Sente-se no terço anterior de uma cadeira firme e estável, com pés apoiados na largura dos quadris.",
      "Incline o tronco levemente à frente a partir do quadril, mantendo as costas retas.",
      "Empurre o solo com os calcanhares e estenda quadris e joelhos até ficar totalmente de pé.",
      "Faça uma pausa de 1 segundo em pé com postura alinhada.",
      "Flexione quadris e joelhos descendo de forma lenta e amortecida até encostar no assento."
    ],
    "aiLandmarks": {
      "hip": {
        "cx": 135,
        "cy": 65,
        "label": "Quadril (85°)"
      },
      "knee": {
        "cx": 152,
        "cy": 120,
        "label": "Joelho (88°)"
      },
      "ankle": {
        "cx": 140,
        "cy": 175,
        "label": "Tornozelo (20°)"
      },
      "arc": "M 145 106 A 18 18 0 0 1 155 134"
    },
    "aiMetrics": {
      "angle": "88°",
      "angleTarget": "✓ Alvo de flexão atingido",
      "align": "0° desvio",
      "alignStatus": "✓ Sem valgo dinâmico",
      "symm": "51% D · 49% E",
      "symmStatus": "✓ Carga simétrica",
      "time": "2.2 s",
      "timeStatus": "✓ Controle excêntrico"
    },
    "aiFeedbackPositive": "Excelente controle biomecânico! Joelhos mantidos em alinhamento com o segundo dedo do pé, subida simétrica e descida suave.",
    "aiFeedbackCorrection": "Atenção ao valgo dinâmico: Seus joelhos se aproximaram na subida. Empurre os joelhos levemente para fora alinhando-os com as pontas dos pés.",
    "motorSteps": [
      {
        "title": "Etapa 1: Execução do Paciente",
        "desc": "Transferência do centro de massa e ativação concêntrica de quadríceps e glúteos."
      },
      {
        "title": "Etapa 2: Análise da IA (MediaPipe)",
        "desc": "Cálculo do vetor articular quadril-joelho-tornozelo e detecção de assimetrias de carga."
      },
      {
        "title": "Etapa 3: Feedback Extrínseco",
        "desc": "Sinalização visual imediata de alinhamento frontal seguro versus colapso medial."
      },
      {
        "title": "Etapa 4: Ajuste Motor",
        "desc": "Recrutamento do glúteo médio para ancorar a rotação externa do fêmur."
      },
      {
        "title": "Etapa 5: Nova Execução",
        "desc": "Execução com padrão motor biomecanicamente limpo e estável."
      }
    ]
  },
  {
    "id": "ponte",
    "name": "Ponte de glúteo",
    "objective": "Fortalecer a cadeia posterior (glúteos e isquiotibiais) e estabilizar o complexo lombo-pélvico.",
    "sets": "3×12 repetições",
    "time": "~4 min",
    "visualType": "gif",
    "gif": "assets/gifs/ponte.gif",
    "caption": "Pelve no solo ↔ Elevação alinhada com joelhos e ombros",
    "joints": "Coxofemoral bilateral (esferoide) e articulações da coluna lombar/sacroilíaca",
    "planes": "Plano Sagital em torno do Eixo Látero-Lateral",
    "moves": "Extensão pura de quadril com estabilização isométrica do tronco",
    "muscles": "Glúteo máximo, Isquiotibiais, Eretores da espinha e Multífidos",
    "antagonistsSynergists": "Antagonistas: Iliopsoas e Reto femoral. Estabilizadores: Transverso do abdômen e Assoalho pélvico.",
    "contraction": "Concêntrica na elevação; Isométrica no pico; Excêntrica no retorno lento.",
    "lever": "3ª Classe com apoio escápulo-torácico e pés, elevando a massa pélvica.",
    "why": "Indispensável na lombalgia crônica, artrose de joelho e pós-op de LCA: ativa os glúteos sem compressão anterior no joelho ou hiperlordose lombar.",
    "precautions": [
      "Não hiperestenda a coluna lombar; o movimento deve vir da contração do glúteo e não do arqueamento das costas.",
      "Mantenha os joelhos paralelos na largura do quadril, sem deixá-los abrir ou fechar.",
      "Apoie toda a sola dos pés no chão de maneira uniforme."
    ],
    "steps": [
      "Deite-se de barriga para cima com os joelhos flexionados a 90° e os pés bem apoiados no solo.",
      "Ative o abdômen puxando suavemente o umbigo em direção às costas.",
      "Contraia os glúteos e eleve a pelve até formar uma linha reta entre ombros, quadril e joelhos.",
      "Sustente a posição no topo por 2 segundos sentindo a força nos glúteos.",
      "Desça a pelve devagar até quase tocar o chão e repita."
    ],
    "aiLandmarks": {
      "hip": {
        "cx": 135,
        "cy": 110,
        "label": "Pelve (180° neutra)"
      },
      "knee": {
        "cx": 175,
        "cy": 135,
        "label": "Joelho (90°)"
      },
      "ankle": {
        "cx": 185,
        "cy": 170,
        "label": "Tornozelo (Apoio)"
      },
      "arc": "M 125 110 A 18 18 0 0 1 150 120"
    },
    "aiMetrics": {
      "angle": "180°",
      "angleTarget": "✓ Alinhamento ombro-quadril-joelho",
      "align": "0° báscula",
      "alignStatus": "✓ Pelve perfeitamente nivelada",
      "symm": "50% D · 50% E",
      "symmStatus": "✓ Carga simétrica bilateral",
      "time": "2.2 s",
      "timeStatus": "✓ Sustentação no topo mantida"
    },
    "aiFeedbackPositive": "Excelente elevação e alinhamento neutro lombo-pélvico! Ativação glútea equilibrada sem compensação lombar.",
    "aiFeedbackCorrection": "Atenção à lombar: Você elevou o quadril em excesso, curvando a coluna. Suba apenas até alinhar quadril, joelho e ombros em linha reta.",
    "motorSteps": [
      {
        "title": "Etapa 1: Execução do Paciente",
        "desc": "Disparo sincronizado dos glúteos e isquiotibiais para vencer a gravidade."
      },
      {
        "title": "Etapa 2: Análise da IA (MediaPipe)",
        "desc": "Rastreamento do vetor tronco-coxa e verificação de báscula pélvica lateral."
      },
      {
        "title": "Etapa 3: Feedback Extrínseco",
        "desc": "Alerta visual se houver hiperextensão lombar ou queda de um lado da pelve."
      },
      {
        "title": "Etapa 4: Ajuste Motor",
        "desc": "Coativação do transverso abdominal para travar a pelve em neutro."
      },
      {
        "title": "Etapa 5: Nova Execução",
        "desc": "Dissociação perfeita entre extensão de quadril e mobilidade lombar."
      }
    ]
  },
  {
    "id": "joelho_extensao",
    "name": "Extensão de joelho sentada",
    "objective": "Fortalecer analiticamente o quadríceps femoral e melhorar o arco de extensão ativa da articulação do joelho.",
    "sets": "3×10 repetições",
    "time": "~3 min",
    "visualType": "gif",
    "gif": "assets/gifs/joelho.gif",
    "caption": "Joelho a 90° sentado ↔ Extensão controlada",
    "joints": "Femorotibial e Femoropatelar em Cadeia Cinética Aberta (CCA)",
    "planes": "Plano Sagital em torno do Eixo Látero-Lateral",
    "moves": "Extensão de perna com retorno em flexão excêntrica",
    "muscles": "Quadríceps femoral (Vasto lateral, Vasto medial/VMO, Vasto intermédio e Reto femoral)",
    "antagonistsSynergists": "Antagonistas: Bíceps femoral e Semitendíneo. Estabilizadores: Core e flexores contralaterais.",
    "contraction": "Concêntrica na subida; Isométrica no topo; Excêntrica na descida resistindo à gravidade.",
    "lever": "3ª Classe (Interpotente) com fulcro no joelho e resistência distal da perna.",
    "why": "Permite isolamento do quadríceps com controle milimétrico de amplitude, fundamental na artrose e no ganho de extensão pós-LCA.",
    "precautions": [
      "Não incline o tronco para trás para compensar fraqueza na perna; mantenha as costas no encosto.",
      "Não dê chutes rápidos; o movimento deve ser lento e contínuo.",
      "Em dor femoropatelar, evite os últimos 15° se houver atrito doloroso, conforme orientar o fisioterapeuta."
    ],
    "steps": [
      "Sente-se com as costas apoiadas na cadeira e os pés apoiados no chão.",
      "Estenda o joelho lentamente até que a perna fique esticada à frente, paralela ao chão.",
      "Segure por 1 a 2 segundos contraindo a parte superior da coxa.",
      "Retorne devagar à posição inicial, controlando a descida em 3 segundos."
    ],
    "aiLandmarks": {
      "hip": {
        "cx": 110,
        "cy": 80,
        "label": "Quadril (90°)"
      },
      "knee": {
        "cx": 145,
        "cy": 110,
        "label": "Joelho (175°)"
      },
      "ankle": {
        "cx": 195,
        "cy": 115,
        "label": "Tornozelo (Extensão)"
      },
      "arc": "M 130 95 A 18 18 0 0 1 165 110"
    },
    "aiMetrics": {
      "angle": "175°",
      "angleTarget": "✓ Arco de extensão completo",
      "align": "0° rotação",
      "alignStatus": "✓ Rastreio patelar estável",
      "symm": "Unilateral",
      "symmStatus": "✓ Sem inclinação de tronco",
      "time": "2.0 s",
      "timeStatus": "✓ Cadência correta"
    },
    "aiFeedbackPositive": "Excelente extensão terminal com sustentação no pico! Tronco mantido estável sem compensações posteriores.",
    "aiFeedbackCorrection": "Atenção à cadência: A perna caiu muito rápido na descida. Controle o movimento descendo suavemente em 3 segundos.",
    "motorSteps": [
      {
        "title": "Etapa 1: Execução do Paciente",
        "desc": "Recrutamento seletivo do quadríceps contra a resistência gravitacional."
      },
      {
        "title": "Etapa 2: Análise da IA (MediaPipe)",
        "desc": "Mensuração da angulação terminal e verificação de rotações tibiais."
      },
      {
        "title": "Etapa 3: Feedback Extrínseco",
        "desc": "Confirmação do ângulo de extensão atingido e ritmo excêntrico."
      },
      {
        "title": "Etapa 4: Ajuste Motor",
        "desc": "Controle inibitório para evitar compensação no tronco superior."
      },
      {
        "title": "Etapa 5: Nova Execução",
        "desc": "Movimento fluído com fortalecimento focado na musculatura alvo."
      }
    ]
  },
  {
    "id": "bird_dog",
    "name": "Bird Dog (quatro apoios contralateral)",
    "objective": "Aprimorar a estabilidade rotacional e sagital do core lombar através da coativação cruzada de membros.",
    "sets": "3×10 repetições alternadas",
    "time": "~4 min",
    "visualType": "svg",
    "svgId": "svg-bird-dog",
    "caption": "Quatro apoios ↔ Extensão simultânea de braço e perna opostos",
    "joints": "Glenoumeral, Coxofemoral e coluna vertebral inteira",
    "planes": "Plano Sagital com estabilização anti-rotacional no Plano Transversal",
    "moves": "Flexão glenoumeral associada a extensão coxofemoral contralateral",
    "muscles": "Multífidos, Transverso abdominal, Glúteo máximo, Deltoide e Grande dorsal",
    "antagonistsSynergists": "Estabilizadores profundos: Oblíquos interno e externo, Quadrado lombar.",
    "contraction": "Isométrica no tronco com dinâmica nas extremidades.",
    "lever": "Sistema composto de alavancas com base de apoio reduzida em dois pontos diagonais.",
    "why": "Exercício de padrão ouro de McGill para coluna: gera alto recrutamento muscular dos estabilizadores com compressão axial mínima nos discos intervertebrais.",
    "precautions": [
      "Não gire a bacia para o lado; mantenha os dois ossos do quadril apontando retilíneos para o solo.",
      "Não hiperestenda o pescoço; mantenha o olhar voltado para o tapete.",
      "Não eleve a perna acima da linha do tronco para evitar estresse facetário lombar."
    ],
    "steps": [
      "Fique em quatro apoios, com as mãos sob os ombros e os joelhos sob os quadris.",
      "Ative o abdômen, mantendo as curvaturas naturais da coluna neutras.",
      "Estenda o braço direito à frente e a perna esquerda para trás até alinhá-los com o tronco.",
      "Sustente a posição por 2 segundos respirando normalmente, sem rodar o quadril.",
      "Retorne com controle à posição inicial e alterne os membros opostos."
    ],
    "aiLandmarks": {
      "hip": {
        "cx": 135,
        "cy": 100,
        "label": "Coluna Neutra (0°)"
      },
      "knee": {
        "cx": 190,
        "cy": 100,
        "label": "Perna Alinhada"
      },
      "ankle": {
        "cx": 70,
        "cy": 100,
        "label": "Braço Oposto Estendido"
      },
      "arc": "M 70 100 L 190 100"
    },
    "aiMetrics": {
      "angle": "180°",
      "angleTarget": "✓ Linha horizontal tronco-membros",
      "align": "0° rotação",
      "alignStatus": "✓ Pelve sem torção lateral",
      "symm": "Diagonal",
      "symmStatus": "✓ Equilíbrio estável",
      "time": "2.0 s",
      "timeStatus": "✓ Isometria no pico mantida"
    },
    "aiFeedbackPositive": "Excelente estabilidade anti-rotacional! Pelve perfeitamente paralela ao solo e alinhamento neutro da coluna preservado.",
    "aiFeedbackCorrection": "Atenção ao quadril: Detectamos rotação de 15° na pelve ao erguer a perna. Contraia o abdômen e não erga a perna acima da linha das costas.",
    "motorSteps": [
      {
        "title": "Etapa 1: Execução do Paciente",
        "desc": "Disparo cruzado cerebelar ativando o glúteo de um lado e o grande dorsal contralateral."
      },
      {
        "title": "Etapa 2: Análise da IA (MediaPipe)",
        "desc": "Medição da inclinação da pelve e verificação da linha horizontal mão-ombro-quadril-pé."
      },
      {
        "title": "Etapa 3: Feedback Extrínseco",
        "desc": "Indicador de simetria do plano coronal e aviso sonoro de torção lombar."
      },
      {
        "title": "Etapa 4: Ajuste Motor",
        "desc": "Feedforward recrutando o quadrado lombar e transverso para anular a rotação."
      },
      {
        "title": "Etapa 5: Nova Execução",
        "desc": "Movimento preciso com proteção completa dos discos da coluna lombar."
      }
    ]
  },
  {
    "id": "gato_vaca",
    "name": "Gato-vaca (mobilidade da coluna)",
    "objective": "Promover mobilidade segmentar e lubrificação articular em toda a extensão da coluna vertebral, aliviando a rigidez lombar.",
    "sets": "3×8 ciclos respiratórios",
    "time": "~3 min",
    "visualType": "svg",
    "svgId": "svg-gato-vaca",
    "caption": "Flexão global da coluna (gato) ↔ Extensão suave controlada (vaca)",
    "joints": "Articulações intervertebrais (cervical, torácica e lombar) e sacroilíacas",
    "planes": "Plano Sagital em torno do Eixo Látero-Lateral",
    "moves": "Flexão e extensão rítmica da coluna associada à báscula pélvica",
    "muscles": "Eretores da espinha, Reto abdominal, Oblíquos, Iliopsoas e Multífidos",
    "antagonistsSynergists": "Ação recíproca entre a cadeia anterior e posterior do tronco.",
    "contraction": "Alternância dinâmica entre contração excêntrica e concêntrica suave.",
    "lever": "Cadeia intersegmentar de alavancas da coluna vertebral.",
    "why": "Restaura o ritmo lombo-pélvico e estimula mecanorreceptores discais sem carga axial pesada, reduzindo a dor crônica por hipomobilidade.",
    "precautions": [
      "Não force o pescoço em hiperextensão ao olhar para cima; o movimento deve ser fluido e suave.",
      "Evite movimentos bruscos; sincronize a subida e descida com a sua respiração.",
      "Em caso de crise aguda de dor ciática, realize apenas na amplitude confortável sem dor."
    ],
    "steps": [
      "Posicione-se em quatro apoios com pulsos abaixo dos ombros e joelhos abaixo dos quadris.",
      "Inspire profundamente enquanto projeta o abdômen suavemente em direção ao chão, elevando o peito e o olhar (posição da vaca).",
      "Expire lentamente enquanto curva as costas para o teto, recolhendo a pelve e aproximando o queixo do peito (posição do gato).",
      "Alterne suavemente entre as duas posturas ao ritmo da sua respiração."
    ],
    "aiLandmarks": {
      "hip": {
        "cx": 140,
        "cy": 105,
        "label": "Pelve (Báscula)"
      },
      "knee": {
        "cx": 170,
        "cy": 125,
        "label": "Joelho (Apoio)"
      },
      "ankle": {
        "cx": 105,
        "cy": 85,
        "label": "Coluna Cifose/Lordose"
      },
      "arc": "M 95 85 Q 135 110 170 125"
    },
    "aiMetrics": {
      "angle": "Arco 35°",
      "angleTarget": "✓ Amplitude de flexo-extensão harmônica",
      "align": "Simétrico",
      "alignStatus": "✓ Sem desvios escolióticos",
      "symm": "Sagital",
      "symmStatus": "✓ Movimento centralizado",
      "time": "4.0 s/ciclo",
      "timeStatus": "✓ Ritmo respiratório calmo"
    },
    "aiFeedbackPositive": "Ritmo biomecânico exemplar! Mobilização homogênea de toda a coluna com excelente sincronia respiratória e báscula pélvica.",
    "aiFeedbackCorrection": "Atenção ao pescoço: Você está movimentando apenas a cabeça. Concentre-se em arquear o meio das costas e a pelve, mantendo o pescoço suave.",
    "motorSteps": [
      {
        "title": "Etapa 1: Execução do Paciente",
        "desc": "Ciclo coordenado de flexão e extensão segmentar guiado pelo padrão respiratório."
      },
      {
        "title": "Etapa 2: Análise da IA (MediaPipe)",
        "desc": "Mapeamento da curvatura sagital da coluna (linha cervicotoracolombar)."
      },
      {
        "title": "Etapa 3: Feedback Extrínseco",
        "desc": "Orientação de ritmo visual para acompanhar o tempo de inspiração e expiração."
      },
      {
        "title": "Etapa 4: Ajuste Motor",
        "desc": "Relaxamento de pontos de tensão muscular lombar durante a expiração."
      },
      {
        "title": "Etapa 5: Nova Execução",
        "desc": "Ganho gradual de amplitude articular sem ativação de reflexos de defesa dolorosos."
      }
    ]
  },
  {
    "id": "contracao_abdominal",
    "name": "Contração abdominal (ativação do transverso)",
    "objective": "Recrutar o músculo transverso do abdômen ('cinta natural da coluna'), gerando estabilidade e pressão intra-abdominal protetora.",
    "sets": "3×10 contrações (8s)",
    "time": "~3 min",
    "visualType": "svg",
    "svgId": "svg-contracao-abdominal",
    "caption": "Deitado de costas ↔ Puxar o umbigo em direção à coluna",
    "joints": "Articulações lombo-sacrais e sacroilíacas estabilizadas isometricamente",
    "planes": "Plano Transversal com suporte sagital",
    "moves": "Manobra de encolhimento abdominal (Abdominal Drawing-in Maneuver)",
    "muscles": "Transverso do abdômen, Oblíquos internos, Multífidos e Assoalho pélvico",
    "antagonistsSynergists": "Estabilizadores sinérgicos: Diafragma e musculatura perineal profunda.",
    "contraction": "Isométrica sustentada dos músculos estabilizadores profundos.",
    "lever": "Sistema hidrostático tóraco-lombar de contenção de cargas espinhais.",
    "why": "O transverso abdominal cria uma cinta de contenção que reduz em até 40% a sobrecarga nos discos lombares, sendo a base do tratamento da lombalgia.",
    "precautions": [
      "Não estufe a barriga nem trave a respiração; continue respirando normalmente enquanto mantém a barriga encolhida.",
      "Não esmague a coluna contra o chão com excesso de força; mantenha uma leve folga natural nas costas.",
      "Evite contrair ombros ou fechar o peito; mantenha a parte superior do corpo relaxada."
    ],
    "steps": [
      "Deite-se de costas com joelhos dobrados e pés apoiados no chão.",
      "Coloque a ponta dos dedos 2 cm para dentro dos ossos da bacia para sentir o músculo contrair.",
      "Solte o ar suavemente e imagine que está puxando o umbigo em direção às costas, sem mexer a coluna.",
      "Sustente essa leve contração profunda por 6 a 8 segundos enquanto respira suavemente.",
      "Relaxe por 4 segundos e repita o ciclo."
    ],
    "aiLandmarks": {
      "hip": {
        "cx": 135,
        "cy": 125,
        "label": "Pelve Neutra"
      },
      "knee": {
        "cx": 175,
        "cy": 135,
        "label": "Joelho 90°"
      },
      "ankle": {
        "cx": 185,
        "cy": 170,
        "label": "Pé no solo"
      },
      "arc": "M 115 125 L 155 125"
    },
    "aiMetrics": {
      "angle": "Neutro",
      "angleTarget": "✓ Coluna sem achatamento forçado",
      "align": "0° báscula",
      "alignStatus": "✓ Pelve estável",
      "symm": "Bilateral",
      "symmStatus": "✓ Contração profunda simétrica",
      "time": "8.0 s",
      "timeStatus": "✓ Respiração diafragmática fluida"
    },
    "aiFeedbackPositive": "Excelente ativação do transverso abdominal! Contração profunda isolada sem bloqueio respiratório ou elevação de ombros.",
    "aiFeedbackCorrection": "Atenção à respiração: Você prendeu o ar (apneia). Continue respirando suavemente enquanto mantém a barriga levemente recolhida.",
    "motorSteps": [
      {
        "title": "Etapa 1: Execução do Paciente",
        "desc": "Ativação cortical fina dos motoneurônios do transverso do abdômen."
      },
      {
        "title": "Etapa 2: Análise da IA (MediaPipe)",
        "desc": "Verificação da ausência de movimentos compensatórios em tórax e pelve."
      },
      {
        "title": "Etapa 3: Feedback Extrínseco",
        "desc": "Cronômetro visual de sustentação com lembrete de ventilação contínua."
      },
      {
        "title": "Etapa 4: Ajuste Motor",
        "desc": "Dissociação entre ativação tônica do core e função respiratória fásica."
      },
      {
        "title": "Etapa 5: Nova Execução",
        "desc": "Criação do esquema motor protetor automático para atividades diárias."
      }
    ]
  },
  {
    "id": "mobilidade_pelvica",
    "name": "Mobilidade pélvica (báscula de quadril)",
    "objective": "Desenvolver a consciência cinestésica e a dissociação articular entre a pelve e a coluna lombar (antiversão e retroversão).",
    "sets": "3×10 ciclos suaves",
    "time": "~3 min",
    "visualType": "svg",
    "svgId": "svg-mobilidade-pelvica",
    "caption": "Achatamento lombar (retroversão) ↔ Curvatura suave (antiversão)",
    "joints": "Sacroilíacas, L5-S1 e articulações da cintura pélvica",
    "planes": "Plano Sagital em torno do Eixo Látero-Lateral",
    "moves": "Antiversão (aumento da lordose) e retroversão pélvica (retificação lombar)",
    "muscles": "Reto abdominal, Glúteos, Iliopsoas e Eretores da espinha",
    "antagonistsSynergists": "Coordenação agonista-antagonista do par de forças pélvico anterior e posterior.",
    "contraction": "Dinâmica isotônica suave de baixa carga.",
    "lever": "1ª Classe funcional (gangorra pélvica sobre as cabeças femorais).",
    "why": "Alivia a pressão nos forames intervertebrais, desativa espasmos reflexos paravertebrais e melhora o controle proprioceptivo postural.",
    "precautions": [
      "Não tire os quadris do chão; o movimento é um rolar sutil da bacia sobre a superfície.",
      "Não force a retroversão a ponto de causar dor ou choque no cóccix.",
      "Mantenha pés e ombros completamente relaxados."
    ],
    "steps": [
      "Deite-se de barriga para cima com os joelhos dobrados e os pés apoiados no chão.",
      "Aplane a coluna lombar suavemente contra o chão, encolhendo o abdômen (retroversão pélvica).",
      "Em seguida, faça o movimento contrário: empurre o umbigo para cima, criando um pequeno espaço sob a lombar (antiversão pélvica).",
      "Alterne suavemente entre essas duas posições de forma ritmada e indolor."
    ],
    "aiLandmarks": {
      "hip": {
        "cx": 135,
        "cy": 125,
        "label": "Pelve (Báscula 15°)"
      },
      "knee": {
        "cx": 175,
        "cy": 135,
        "label": "Joelho 90°"
      },
      "ankle": {
        "cx": 185,
        "cy": 170,
        "label": "Pés apoiados"
      },
      "arc": "M 120 125 C 130 115, 140 135, 150 125"
    },
    "aiMetrics": {
      "angle": "Arco 15°",
      "angleTarget": "✓ Excursão angular livre e fluida",
      "align": "Sagital",
      "alignStatus": "✓ Sem desvio oblíquo",
      "symm": "50% D · 50% E",
      "symmStatus": "✓ Simetria de báscula",
      "time": "3.0 s/ciclo",
      "timeStatus": "✓ Cadência controlada"
    },
    "aiFeedbackPositive": "Excelente controle proprioceptivo da pelve! Movimento sutil e isolado sem participação excessiva das pernas.",
    "aiFeedbackCorrection": "Atenção: Você está empurrando com os pés para levantar o quadril. O movimento é apenas uma báscula sutil da bacia sem erguer as nádegas do chão.",
    "motorSteps": [
      {
        "title": "Etapa 1: Execução do Paciente",
        "desc": "Controle voluntário do par de forças pélvico."
      },
      {
        "title": "Etapa 2: Análise da IA (MediaPipe)",
        "desc": "Identificação da mudança de curvatura da linha espinhal no plano sagital."
      },
      {
        "title": "Etapa 3: Feedback Extrínseco",
        "desc": "Indicação da alternância entre apoio lombar e neutro."
      },
      {
        "title": "Etapa 4: Ajuste Motor",
        "desc": "Redução do recrutamento dos músculos das pernas, isolando a bacia."
      },
      {
        "title": "Etapa 5: Nova Execução",
        "desc": "Consciência corporal refinada da postura neutra da coluna."
      }
    ]
  },
  {
    "id": "tandem",
    "name": "Equilíbrio em tandem",
    "objective": "Desafiar e treinar o equilíbrio estático, a propriocepção dos tornozelos e a integração vestibular e visual em idosos.",
    "sets": "3×20s cada pé à frente",
    "time": "~3 min",
    "visualType": "svg",
    "svgId": "svg-tandem",
    "caption": "Pés alinhados pé ante pé ↔ Manutenção do equilíbrio vertical",
    "joints": "Talocrural, Subtalar, Joelhos, Quadris e Coluna",
    "planes": "Plano Frontal e Sagital com alta oscilação no centro de gravidade",
    "moves": "Manutenção estática em base de sustentação estreita (pé ante pé)",
    "muscles": "Tibial anterior, Tríceps sural, Fibulares, Glúteo médio e Core postural",
    "antagonistsSynergists": "Estratégia de tornozelo e de quadril para recuperação do equilíbrio.",
    "contraction": "Isométrica reflexa de unidades motoras estabilizadoras.",
    "lever": "Pêndulo invertido com fulcro na base estreita dos pés.",
    "why": "Exercício de alta evidência científica para redução do risco de quedas. Estimula as estratégias de tornozelo e quadril essenciais na geriatria.",
    "precautions": [
      "Realize sempre próximo a uma parede, mesa ou corrimão para apoiar caso sinta desequilíbrio.",
      "Fixe o olhar em um ponto fixo à frente para auxiliar a estabilidade visual.",
      "Se sentir tontura, apoie as mãos imediatamente e desfaça a posição."
    ],
    "steps": [
      "Fique em pé próximo a um suporte seguro (parede ou encosto de cadeira).",
      "Posicione um pé diretamente à frente do outro, encostando o calcanhar da frente nos dedos do pé de trás.",
      "Distribua o peso igualmente entre os dois pés e olhe para frente com o tronco ereto.",
      "Tente equilibrar-se por 20 segundos mantendo as mãos próximas ao apoio.",
      "Troque a posição dos pés e repita com o outro pé à frente."
    ],
    "aiLandmarks": {
      "hip": {
        "cx": 135,
        "cy": 60,
        "label": "Centro de Massa"
      },
      "knee": {
        "cx": 135,
        "cy": 115,
        "label": "Joelho Estável"
      },
      "ankle": {
        "cx": 135,
        "cy": 170,
        "label": "Base Tandem (Pé ante pé)"
      },
      "arc": "M 130 60 L 140 60"
    },
    "aiMetrics": {
      "angle": "Oscilação <2°",
      "angleTarget": "✓ Tronco alinhado no cone de estabilidade",
      "align": "Vertical",
      "alignStatus": "✓ Linha de gravidade centralizada",
      "symm": "50% D · 50% E",
      "symmStatus": "✓ Carga distribuída entre os pés",
      "time": "20 s",
      "timeStatus": "✓ Tempo alvo alcançado"
    },
    "aiFeedbackPositive": "Excelente estabilidade postural! Mínima oscilação do tronco e uso adequado da estratégia proprioceptiva dos tornozelos.",
    "aiFeedbackCorrection": "Atenção ao tronco: Detectamos oscilação lateral excessiva. Aproxime uma das mãos da parede para maior segurança e fixe o olhar em um ponto à frente.",
    "motorSteps": [
      {
        "title": "Etapa 1: Execução do Paciente",
        "desc": "Redução proposital da área da base de sustentação forçando o controle vestibular e somatossensorial."
      },
      {
        "title": "Etapa 2: Análise da IA (MediaPipe)",
        "desc": "Cálculo da oscilação do centro de gravidade no plano coronal e sagital."
      },
      {
        "title": "Etapa 3: Feedback Extrínseco",
        "desc": "Sinal sonoro/visual de limite de oscilação seguro versus risco de perda de estabilidade."
      },
      {
        "title": "Etapa 4: Ajuste Motor",
        "desc": "Ativação reflexa dos músculos fibulares e tibial anterior (estratégia de tornozelo)."
      },
      {
        "title": "Etapa 5: Nova Execução",
        "desc": "Aumento da confiança e prevenção primária de quedas no dia a dia."
      }
    ]
  },
  {
    "id": "marcha",
    "name": "Marcha estacionária",
    "objective": "Treinar o equilíbrio dinâmico, a cadência da marcha e a força de sustentação unipodal em idosos.",
    "sets": "3×30 segundos",
    "time": "~4 min",
    "visualType": "gif",
    "gif": "assets/gifs/marcha.gif",
    "caption": "Apoio no solo ↔ Elevação alternada dos joelhos",
    "joints": "Coxofemoral, Femorotibial e Talocrural em ciclos de apoio e balanço",
    "planes": "Plano Sagital com controle anti-Trendelenburg no Plano Frontal",
    "moves": "Flexão alternada de quadril e joelho com dorsiflexão",
    "muscles": "Iliopsoas, Reto femoral, Tríceps sural, Tibial anterior e Glúteo médio",
    "antagonistsSynergists": "Glúteo médio contralateral no membro de apoio, prevenindo a queda da pelve.",
    "contraction": "Alternância dinâmica concêntrica e excêntrica entre membros.",
    "lever": "1ª e 3ª classes combinadas nos ciclos de marcha.",
    "why": "Essencial para prevenir o 'arrastar dos pés' e quedas em idosos, fortalecendo a fase de balanço da deambulação.",
    "precautions": [
      "Tenha um ponto de apoio fixo ao alcance das mãos para garantir total segurança.",
      "Não incline o tronco para os lados ao levantar a perna; mantenha o corpo reto.",
      "Use sapatos firmes antiderrapantes ou realize sobre piso seco e seguro."
    ],
    "steps": [
      "Fique em pé próximo a um suporte fixo se precisar de equilíbrio.",
      "Eleve um joelho até a altura aproximada do quadril mantendo o tronco firme.",
      "Abaixe o pé suavemente e eleve imediatamente o joelho oposto, simulando caminhar no mesmo lugar.",
      "Mantenha um ritmo constante e respire com tranquilidade durante todo o exercício."
    ],
    "aiLandmarks": {
      "hip": {
        "cx": 135,
        "cy": 75,
        "label": "Quadril"
      },
      "knee": {
        "cx": 155,
        "cy": 110,
        "label": "Joelho (85° flexão)"
      },
      "ankle": {
        "cx": 150,
        "cy": 165,
        "label": "Tornozelo (Dorsiflexão)"
      },
      "arc": "M 140 95 A 16 16 0 0 1 155 125"
    },
    "aiMetrics": {
      "angle": "85°",
      "angleTarget": "✓ Elevação adequada do joelho",
      "align": "0° oscilação",
      "alignStatus": "✓ Tronco perfeitamente vertical",
      "symm": "49% D · 51% E",
      "symmStatus": "✓ Cadência equilibrada",
      "time": "1.0 s/passo",
      "timeStatus": "✓ Ritmo constante"
    },
    "aiFeedbackPositive": "Excelente ritmo e controle no plano frontal! O glúteo médio sustentou a pelve sem queda de Trendelenburg.",
    "aiFeedbackCorrection": "Atenção à postura: Você está inclinando o corpo para a direita ao levantar a perna esquerda. Firme o abdômen e mantenha o peito reto.",
    "motorSteps": [
      {
        "title": "Etapa 1: Execução do Paciente",
        "desc": "Alternância cíclica motora ativando circuitos geradores de padrão espinhal."
      },
      {
        "title": "Etapa 2: Análise da IA (MediaPipe)",
        "desc": "Mapeamento da altura de flexão do joelho e inclinação coronal do tronco."
      },
      {
        "title": "Etapa 3: Feedback Extrínseco",
        "desc": "Métrica em tempo real de passos por minuto e alinhamento."
      },
      {
        "title": "Etapa 4: Ajuste Motor",
        "desc": "Contração mais vigorosa do glúteo médio do lado de apoio."
      },
      {
        "title": "Etapa 5: Nova Execução",
        "desc": "Passada mais alta e segura, eliminando o risco de tropeços."
      }
    ]
  },
  {
    "id": "panturrilha",
    "name": "Elevação dos calcanhares (panturrilha)",
    "objective": "Fortalecer a musculatura da panturrilha para propulsão da marcha e estabilidade articular do tornozelo.",
    "sets": "3×12 repetições",
    "time": "~3 min",
    "visualType": "gif",
    "gif": "assets/gifs/panturrilha.gif",
    "caption": "Calcanhares no chão ↔ Elevação na ponta dos pés",
    "joints": "Talocrural (gínglimo) e Subtalar (sinovial plana)",
    "planes": "Plano Sagital em torno do Eixo Látero-Lateral",
    "moves": "Flexão plantar concêntrica e dorsiflexão excêntrica",
    "muscles": "Tríceps sural: Gastrocnêmio medial, Gastrocnêmio lateral e Sóleo",
    "antagonistsSynergists": "Antagonistas: Tibial anterior. Sinergistas: Tibial posterior e Fibulares.",
    "contraction": "Concêntrica na subida; Excêntrica no retorno lento ao chão.",
    "lever": "2ª Classe (Inter-resistente) — Apoio nos metatarsos, resistência no tornozelo e força no tendão calcâneo. Alta vantagem de força.",
    "why": "A panturrilha é a principal responsável pelo impulso para caminhar e pelo equilíbrio em pé contra a força da gravidade.",
    "precautions": [
      "Não jogue o peso apenas nos dedos de fora; distribua a força até o dedão (primeiro metatarso).",
      "Desça lentamente sem despencar os calcanhares no chão.",
      "Apoie as mãos na parede ou cadeira para não desequilibrar."
    ],
    "steps": [
      "Fique em pé próximo a uma parede ou cadeira para apoio com pés paralelos.",
      "Eleve os calcanhares lentamente, ficando na ponta dos pés.",
      "Sustente a altura máxima por 1 segundo sentindo a contração da panturrilha.",
      "Desça de forma suave e controlada até tocar suavemente os calcanhares no chão."
    ],
    "aiLandmarks": {
      "hip": {
        "cx": 135,
        "cy": 50,
        "label": "Pelve (0°)"
      },
      "knee": {
        "cx": 138,
        "cy": 110,
        "label": "Joelho (180°)"
      },
      "ankle": {
        "cx": 142,
        "cy": 170,
        "label": "Tornozelo (45°)"
      },
      "arc": "M 138 155 A 14 14 0 0 1 146 175"
    },
    "aiMetrics": {
      "angle": "42°",
      "angleTarget": "✓ Flexão plantar ótima (35°–45°)",
      "align": "0° varo/valgo",
      "alignStatus": "✓ Distribuição uniforme metatarsal",
      "symm": "50% D · 50% E",
      "symmStatus": "✓ Carga simétrica bilateral",
      "time": "1.8 s",
      "timeStatus": "✓ Pico de contração mantido"
    },
    "aiFeedbackPositive": "Ótima amplitude de flexão plantar! Apoio metatarsal uniforme sem desvio excessivo do retropé para fora.",
    "aiFeedbackCorrection": "Atenção ao retropé: Seus tornozelos estão virando para fora (supinação excessiva). Pressione o dedão firme contra o solo na subida.",
    "motorSteps": [
      {
        "title": "Etapa 1: Execução do Paciente",
        "desc": "Contração rápida e forte do tríceps sural contra a massa corpórea."
      },
      {
        "title": "Etapa 2: Análise da IA (MediaPipe)",
        "desc": "Cálculo da altura de elevação dos calcanhares e alinhamento do tendão calcâneo."
      },
      {
        "title": "Etapa 3: Feedback Extrínseco",
        "desc": "Aviso visual de amplitude e simetria de carga entre pés."
      },
      {
        "title": "Etapa 4: Ajuste Motor",
        "desc": "Recrutamento do fibular longo para manter o primeiro raio do pé em contato com o solo."
      },
      {
        "title": "Etapa 5: Nova Execução",
        "desc": "Impulso vertical linear com maior estabilidade para a deambulação."
      }
    ]
  },
  {
    "id": "caminhada_lateral",
    "name": "Caminhada lateral",
    "objective": "Fortalecer os abdutores de quadril (glúteo médio) e estabilizadores pélvicos no plano frontal para evitar tropeços e quedas.",
    "sets": "3×10 passos para cada lado",
    "time": "~3 min",
    "visualType": "svg",
    "svgId": "svg-caminhada-lateral",
    "caption": "Passos laterais com joelhos semiflexionados mantendo o alinhamento",
    "joints": "Coxofemoral bilateral (abdução/adução) e Femorotibial",
    "planes": "Plano Frontal em torno do Eixo Ântero-Posterior",
    "moves": "Abdução ativa e adução controlada de quadril",
    "muscles": "Glúteo médio, Glúteo mínimo, Tensor da fáscia lata e Quadríceps",
    "antagonistsSynergists": "Antagonistas: Adutores (magno, longo e curto). Estabilizadores: Core e pelve.",
    "contraction": "Alternância dinâmica no plano frontal.",
    "lever": "3ª Classe nas coxofemorais.",
    "why": "O glúteo médio é o guardião do equilíbrio frontal. Seu fortalecimento previne o colapso do joelho e quedas laterais em idosos.",
    "precautions": [
      "Não arraste os pés no chão; levante o pé suavemente a cada passo lateral.",
      "Mantenha as pontas dos pés apontadas para a frente, não deixe os pés virarem para fora.",
      "Mantenha um leve semi-agachamento estável, sem oscilar a altura do tronco."
    ],
    "steps": [
      "Fique em pé com os pés na largura dos ombros e joelhos levemente destravados.",
      "Dê um passo lateral para a direita com controle, afastando os pés.",
      "Aproxime o pé esquerdo mantendo a distância natural entre os quadris.",
      "Repita 5 a 10 passos para a direita e retorne os passos para a esquerda.",
      "Mantenha o olhar para frente e a postura ereta durante todo o percurso."
    ],
    "aiLandmarks": {
      "hip": {
        "cx": 135,
        "cy": 70,
        "label": "Pelve Nivelada"
      },
      "knee": {
        "cx": 160,
        "cy": 120,
        "label": "Passo Lateral"
      },
      "ankle": {
        "cx": 165,
        "cy": 170,
        "label": "Pé Paralelo"
      },
      "arc": "M 135 70 L 160 120"
    },
    "aiMetrics": {
      "angle": "Abdução 25°",
      "angleTarget": "✓ Amplitude de passo segura",
      "align": "0° báscula",
      "alignStatus": "✓ Pelve horizontal mantida",
      "symm": "Bilateral",
      "symmStatus": "✓ Passadas simétricas",
      "time": "1.2 s/passo",
      "timeStatus": "✓ Velocidade constante"
    },
    "aiFeedbackPositive": "Excelente controle no plano frontal! Pelve mantida perfeitamente nivelada e pés apontados para a frente.",
    "aiFeedbackCorrection": "Atenção aos pés: Você está rodando a ponta do pé para fora ao dar o passo. Mantenha os pés paralelos virados para frente para ativar o glúteo médio.",
    "motorSteps": [
      {
        "title": "Etapa 1: Execução do Paciente",
        "desc": "Deslocamento no plano frontal ativando os abdutores de quadril."
      },
      {
        "title": "Etapa 2: Análise da IA (MediaPipe)",
        "desc": "Medição do nivelamento da pelve (linha espinha ilíaca ântero-superior) e rotação dos pés."
      },
      {
        "title": "Etapa 3: Feedback Extrínseco",
        "desc": "Alerta visual se houver queda da bacia ou passos desiguais."
      },
      {
        "title": "Etapa 4: Ajuste Motor",
        "desc": "Aumento do tônus do glúteo médio e transverso abdominal."
      },
      {
        "title": "Etapa 5: Nova Execução",
        "desc": "Maior agilidade e estabilidade dinâmica para desvios de obstáculos no cotidiano."
      }
    ]
  },
  {
    "id": "rotacao_externa_ombro",
    "name": "Rotação externa com faixa elástica",
    "objective": "Fortalecer a musculatura do manguito rotador posterior, essencial para a centralização da cabeça umeral e estabilidade glenoumeral.",
    "sets": "3×12 repetições",
    "time": "~4 min",
    "visualType": "gif",
    "gif": "assets/gifs/ombro.gif",
    "caption": "Cotovelo colado a 90° ↔ Rotação externa do antebraço",
    "joints": "Glenoumeral (esferoide, triaxial) e Cíngulo Escapulotorácico",
    "planes": "Plano Transversal em torno do Eixo Longitudinal/Vertical",
    "moves": "Rotação externa (lateral) da cabeça umeral na fossa glenoide",
    "muscles": "Manguito rotador posterior: Infraespinal e Redondo menor",
    "antagonistsSynergists": "Antagonistas: Subescapular e Peitoral maior. Estabilizadores escapulares: Trapézio inferior, Romboides e Serrátil anterior.",
    "contraction": "Concêntrica na rotação externa; Excêntrica no retorno lento à posição inicial.",
    "lever": "3ª Classe com fulcro na cabeça umeral e potência na fossa infraespinal.",
    "why": "Fundamental na tendinopatia do manguito rotador: descomprime o espaço subacromial ao puxar a cabeça do úmero para baixo e para trás durante movimentos do braço.",
    "precautions": [
      "Não afaste o cotovelo da costela; coloque uma pequena toalha enrolada entre o cotovelo e o corpo se necessário.",
      "Não gire o tronco para compensar o movimento do ombro; o corpo deve ficar estático.",
      "Não insista na presença de dor em pontada na ponta do ombro; diminua a tensão do elástico."
    ],
    "steps": [
      "Fique em pé com postura alinhada e escápulas suavemente encaixadas para trás e para baixo.",
      "Mantenha o cotovelo dobrado a 90° e encostado na lateral do tronco.",
      "Segure a faixa elástica (ou realize o movimento livre se estiver no início).",
      "Gire o antebraço para fora lentamente, afastando a mão do abdômen sem desencostar o cotovelo da costela.",
      "Segure 1 segundo no limite confortável e retorne devagar em 3 segundos."
    ],
    "aiLandmarks": {
      "hip": {
        "cx": 135,
        "cy": 55,
        "label": "Ombro (Glenoumeral)"
      },
      "knee": {
        "cx": 135,
        "cy": 115,
        "label": "Cotovelo (90° colado)"
      },
      "ankle": {
        "cx": 180,
        "cy": 115,
        "label": "Punho (40° rotação)"
      },
      "arc": "M 145 105 A 18 18 0 0 1 165 115"
    },
    "aiMetrics": {
      "angle": "40°",
      "angleTarget": "✓ Amplitude terapêutica (35°–45°)",
      "align": "0 cm desvio",
      "alignStatus": "✓ Cotovelo fixo ao tronco",
      "symm": "Unilateral",
      "symmStatus": "✓ Sem compensação de tronco",
      "time": "2.0 s",
      "timeStatus": "✓ Retorno excêntrico controlado"
    },
    "aiFeedbackPositive": "Execução exemplar! Cotovelo mantido perfeitamente adjacente ao tronco sem abdução compensatória, garantindo isolamento preciso do infraespinal.",
    "aiFeedbackCorrection": "Atenção ao cotovelo: Você abriu o cotovelo para fora durante o movimento. Mantenha o cotovelo colado à costela para trabalhar o músculo correto sem irritar o tendão.",
    "motorSteps": [
      {
        "title": "Etapa 1: Execução do Paciente",
        "desc": "Ativação voluntária dos rotadores externos contra a resistência elástica."
      },
      {
        "title": "Etapa 2: Análise da IA (MediaPipe)",
        "desc": "Cálculo da distância entre o cotovelo e o tronco e verificação de rotação do tórax."
      },
      {
        "title": "Etapa 3: Feedback Extrínseco",
        "desc": "Sinalização visual imediata de isolamento glenoumeral versus compensação escapular."
      },
      {
        "title": "Etapa 4: Ajuste Motor",
        "desc": "Ativação do serrátil anterior para estabilizar a escápula contra as costelas."
      },
      {
        "title": "Etapa 5: Nova Execução",
        "desc": "Movimento puro com ampla descompressão subacromial."
      }
    ]
  },
  {
    "id": "retracao_escapular",
    "name": "Retração escapular",
    "objective": "Fortalecer os fixadores da escápula e corrigir a postura de ombros caídos para a frente (protrusão escapular), aliviando o impacto no manguito rotador.",
    "sets": "3×12 repetições",
    "time": "~3 min",
    "visualType": "svg",
    "svgId": "svg-retracao-escapular",
    "caption": "Ombros neutros ↔ Adução e retração ativa das escápulas",
    "joints": "Escapulotorácica e Esternoclavicular / Acromioclavicular",
    "planes": "Plano Transversal / Frontal com deslizamento escapular",
    "moves": "Retração (adução) e depressão suave das escápulas",
    "muscles": "Romboides maior e menor, Trapézio médio e inferior, e Latíssimo do dorso",
    "antagonistsSynergists": "Antagonistas: Peitoral menor e Serrátil anterior (na fase concêntrica).",
    "contraction": "Concêntrica com sustentação isométrica no pico de contração.",
    "lever": "1ª e 3ª classes no cíngulo escapular.",
    "why": "A escápula é a base anatômica do braço. Reposicioná-la aumenta o espaço subacromial, impedindo o pinçamento dos tendões do manguito.",
    "precautions": [
      "Não encolha os ombros em direção às orelhas; mantenha o pescoço longo e ombros longe das orelhas.",
      "Não arqueie a coluna lombar; o movimento deve acontecer nas escápulas e não na bacia.",
      "Respire livremente durante a contração de sustentação."
    ],
    "steps": [
      "Sente-se ou fique em pé com a coluna ereta e braços soltos ao lado do corpo.",
      "Imagine que deseja segurar uma caneta entre as duas 'asas' (escápulas) no meio das costas.",
      "Puxe as escápulas para trás e suavemente para baixo, abrindo o peito.",
      "Segure a contração firme por 3 segundos sem elevar os ombros.",
      "Relaxe suavemente e repita o movimento de forma harmoniosa."
    ],
    "aiLandmarks": {
      "hip": {
        "cx": 135,
        "cy": 100,
        "label": "Tronco Estável"
      },
      "knee": {
        "cx": 100,
        "cy": 70,
        "label": "Escápula Esquerda"
      },
      "ankle": {
        "cx": 170,
        "cy": 70,
        "label": "Escápula Direita"
      },
      "arc": "M 100 70 L 170 70"
    },
    "aiMetrics": {
      "angle": "Adução 15°",
      "angleTarget": "✓ Retração escapular ótima",
      "align": "0 cm elevação",
      "alignStatus": "✓ Sem tensão no trapézio superior",
      "symm": "50% D · 50% E",
      "symmStatus": "✓ Aproximação escapular simétrica",
      "time": "3.0 s",
      "timeStatus": "✓ Sustentação isométrica mantida"
    },
    "aiFeedbackPositive": "Excelente ancoragem escapular! Aproximação medial simétrica das escápulas sem sobrecarga no trapézio superior.",
    "aiFeedbackCorrection": "Atenção: Você encolheu os ombros em direção às orelhas. Abaixe os ombros, alongue o pescoço e puxe as escápulas para trás e para baixo.",
    "motorSteps": [
      {
        "title": "Etapa 1: Execução do Paciente",
        "desc": "Comando eferente ativando os romboides e fibras médias do trapézio."
      },
      {
        "title": "Etapa 2: Análise da IA (MediaPipe)",
        "desc": "Rastreamento da distância bi-acromial e elevação vertical da cintura escapular."
      },
      {
        "title": "Etapa 3: Feedback Extrínseco",
        "desc": "Aviso visual de elevação indesejada do trapézio superior."
      },
      {
        "title": "Etapa 4: Ajuste Motor",
        "desc": "Inibição recíproca dos elevadores da escápula e foco nas fibras inferiores."
      },
      {
        "title": "Etapa 5: Nova Execução",
        "desc": "Postura aberta com estabilização firme da cintura escapular."
      }
    ]
  },
  {
    "id": "remada_elastico",
    "name": "Remada com elástico",
    "objective": "Fortalecer a musculatura dorsal, retratores escapulares e estabilizadores do tronco sob resistência elástica progressiva.",
    "sets": "3×10 repetições",
    "time": "~4 min",
    "visualType": "svg",
    "svgId": "svg-remada-elastico",
    "caption": "Braços estendidos à frente ↔ Tração dos cotovelos para trás",
    "joints": "Glenoumeral, Escapulotorácica e Úmero-ulnar (cotovelo)",
    "planes": "Plano Sagital em torno do Eixo Látero-Lateral",
    "moves": "Extensão glenoumeral associada a flexão de cotovelos e adução escapular",
    "muscles": "Latíssimo do dorso, Trapézio médio, Romboides, Deltoide posterior e Bíceps braquial",
    "antagonistsSynergists": "Antagonistas: Peitoral maior e Deltoide anterior. Estabilizadores: Core e eretores da coluna.",
    "contraction": "Concêntrica na tração elástica; Excêntrica no retorno alongado sob controle.",
    "lever": "3ª Classe com braços de resistência atuando sobre o membro superior.",
    "why": "Promove o reequilíbrio muscular anterior/posterior do tórax, essencial para reduzir a tensão nos tendões do manguito rotador.",
    "precautions": [
      "Não projete a cabeça para a frente durante a puxada; mantenha o queixo alinhado.",
      "Não curve a coluna lombar; mantenha o tronco ereto e o abdômen firme.",
      "Não permita que o elástico 'puxe' seus braços bruscamente de volta; controle o retorno."
    ],
    "steps": [
      "Sente-se com as pernas estendidas e passe o elástico ao redor dos pés (ou prenda em um ponto firme à sua frente).",
      "Segure as extremidades da faixa com as costas bem retas e peito aberto.",
      "Puxe o elástico em direção às costelas, levando os cotovelos para trás junto ao corpo.",
      "Aperte as escápulas no final da puxada por 1 a 2 segundos.",
      "Retorne devagar estendendo os braços com controle completo."
    ],
    "aiLandmarks": {
      "hip": {
        "cx": 120,
        "cy": 100,
        "label": "Tronco Ereto (90°)"
      },
      "knee": {
        "cx": 100,
        "cy": 75,
        "label": "Cotovelo (Puxada 90°)"
      },
      "ankle": {
        "cx": 70,
        "cy": 75,
        "label": "Mão (Tração Elástica)"
      },
      "arc": "M 70 75 L 120 100"
    },
    "aiMetrics": {
      "angle": "90° tração",
      "angleTarget": "✓ Cotovelos na linha do tronco",
      "align": "Simétrico",
      "alignStatus": "✓ Puxada bilateral equilibrada",
      "symm": "50% D · 50% E",
      "symmStatus": "✓ Força uniforme",
      "time": "2.2 s",
      "timeStatus": "✓ Fase excêntrica lenta"
    },
    "aiFeedbackPositive": "Excelente execução de remada! Puxada firme com os cotovelos colados ao tronco e retração escapular perfeita.",
    "aiFeedbackCorrection": "Atenção à postura: Seus ombros subiram no final da puxada. Mantenha os ombros abaixados e foque em puxar com as costas, não com o pescoço.",
    "motorSteps": [
      {
        "title": "Etapa 1: Execução do Paciente",
        "desc": "Puxada coordenada envolvendo o latíssimo e os romboides."
      },
      {
        "title": "Etapa 2: Análise da IA (MediaPipe)",
        "desc": "Medição da excursão posterior do cotovelo e estabilidade do tronco sagital."
      },
      {
        "title": "Etapa 3: Feedback Extrínseco",
        "desc": "Confirmação do arco de tração e tempo de retorno elástico."
      },
      {
        "title": "Etapa 4: Ajuste Motor",
        "desc": "Manutenção da postura ereta evitando a flexão compensatória da coluna."
      },
      {
        "title": "Etapa 5: Nova Execução",
        "desc": "Fortalecimento seguro e integrado da cadeia posterior superior."
      }
    ]
  },
  {
    "id": "pendular_codman",
    "name": "Exercício pendular de Codman",
    "objective": "Promover tração e decoaptação articular suave da cabeça umeral, aliviando a dor aguda e mobilizando o ombro sem contração ativa do manguito.",
    "sets": "3×30 segundos (círculos e pêndulo)",
    "time": "~3 min",
    "visualType": "svg",
    "svgId": "svg-pendular-codman",
    "caption": "Tronco inclinado apoiado ↔ Braço solto oscilando por gravidade",
    "joints": "Glenoumeral em tração por gravidade e descompressão subacromial",
    "planes": "Circundução em múltiplos planos (Sagital, Frontal e Horizontal)",
    "moves": "Oscilações pendulares passivas guiadas pelo embalo do tronco",
    "muscles": "Relaxamento voluntário dos músculos do ombro; trabalho postural do membro de apoio",
    "antagonistsSynergists": "O membro afetado deve permanecer completamente passivo.",
    "contraction": "Sem contração ativa do ombro afetado (movimento cinético puramente inercial).",
    "lever": "Pêndulo simples gravitacional suspenso.",
    "why": "O exercício pendular de Codman é clássico e indispensável em fases dolorosas de tendinite do ombro: afasta a cabeça do úmero do acrômio, estimula o líquido sinovial e alivia a dor sem exigir força do tendão machucado.",
    "precautions": [
      "Não faça força com os músculos do ombro; o braço deve balançar solto como um pêndulo de relógio impulsionado pelo tronco.",
      "Apoie-se firmemente em uma mesa ou cadeira com a mão saudável para não sobrecarregar as costas.",
      "Não faça círculos grandes que causem estalos ou dor; mantenha o movimento pequeno e relaxante."
    ],
    "steps": [
      "Incline o tronco para a frente e apoie a mão saudável sobre uma mesa ou cadeira firme.",
      "Deixe o braço lesionado pender completamente solto para baixo, em direção ao chão.",
      "Balance suavemente o corpo para frente e para trás, permitindo que o braço oscile sozinho pelo embalo.",
      "Faça pequenos movimentos circulares no sentido horário e anti-horário, deixando o braço relaxado.",
      "Mantenha por 30 segundos respirando calmamente e sinta o alívio articular."
    ],
    "aiLandmarks": {
      "hip": {
        "cx": 140,
        "cy": 80,
        "label": "Tronco Inclinado"
      },
      "knee": {
        "cx": 100,
        "cy": 80,
        "label": "Apoio Firme"
      },
      "ankle": {
        "cx": 135,
        "cy": 145,
        "label": "Braço Solto Pendular"
      },
      "arc": "M 120 145 A 15 15 0 1 1 150 145"
    },
    "aiMetrics": {
      "angle": "Oscilação 20°",
      "angleTarget": "✓ Amplitude suave e descompressiva",
      "align": "Gravitacional",
      "alignStatus": "✓ Decoaptação articular correta",
      "symm": "Passivo",
      "symmStatus": "✓ Sem tensão muscular no ombro",
      "time": "30 s",
      "timeStatus": "✓ Tempo contínuo terapêutico"
    },
    "aiFeedbackPositive": "Excelente relaxamento! O braço oscila por inércia do tronco sem ativação muscular do ombro, permitindo descompressão sinovial ideal.",
    "aiFeedbackCorrection": "Atenção: Detectamos tensão nos músculos do seu ombro. Solte o braço completamente como um pêndulo frouxo; quem move o braço é o balanço suave do seu corpo.",
    "motorSteps": [
      {
        "title": "Etapa 1: Execução do Paciente",
        "desc": "Inibição consciente da tensão muscular no membro superior afetado."
      },
      {
        "title": "Etapa 2: Análise da IA (MediaPipe)",
        "desc": "Identificação de contrações espasmódicas e acompanhamento da trajetória pendular."
      },
      {
        "title": "Etapa 3: Feedback Extrínseco",
        "desc": "Orientação de relaxamento e cronômetro contínuo de oscilação."
      },
      {
        "title": "Etapa 4: Ajuste Motor",
        "desc": "Geração do movimento a partir do centro de massa e balanço dos joelhos."
      },
      {
        "title": "Etapa 5: Nova Execução",
        "desc": "Alívio significativo da dor e relaxamento da cápsula articular."
      }
    ]
  },
  {
    "id": "elevacao_assistida_braco",
    "name": "Elevação assistida do braço",
    "objective": "Recuperar a amplitude de flexão do ombro em plano seguro com assistência do membro contralateral saudável ou bastão.",
    "sets": "3×10 repetições",
    "time": "~3 min",
    "visualType": "svg",
    "svgId": "svg-elevacao-assistida",
    "caption": "Braço apoiado/segurado ↔ Elevação assistida até o limite confortável",
    "joints": "Glenoumeral e Cíngulo Escapulotorácico no plano da escápula (escapular plane - scaption)",
    "planes": "Plano Escapular (aproximadamente 30° a 40° anterior ao Plano Frontal)",
    "moves": "Flexão e elevação do membro superior com tração assistida",
    "muscles": "Deltoide e Serrátil anterior (com assistência do braço oposto e alívio do supraespinal)",
    "antagonistsSynergists": "Latíssimo do dorso e Peitoral maior (como antagonistas suaves).",
    "contraction": "Ativo-assistida (o braço são auxilia a erguer o braço lesionado).",
    "lever": "3ª Classe com assistência externa reduzindo o braço de força resistente.",
    "why": "O plano da escápula alinha a cabeça umeral sem atrito contra o acrômio, permitindo ganho de amplitude de movimento mesmo em fases inflamatórias.",
    "precautions": [
      "Não force o braço além do ponto de desconforto; pare assim que sentir o limite seguro.",
      "Não eleve os ombros perto das orelhas ao subir; mantenha as escápulas estáveis.",
      "Se puder, utilize um bastão leve de madeira ou segure com a mão oposta."
    ],
    "steps": [
      "Sente-se com boa postura segurando um bastão com as duas mãos (ou segure o punho do braço lesionado com a mão saudável).",
      "Mantenha os cotovelos suavemente esticados.",
      "Utilize a força do braço saudável para empurrar e conduzir o braço lesionado para cima, à sua frente.",
      "Suba até onde for confortável, mantendo o movimento indolor.",
      "Faça uma pausa de 2 segundos no ponto mais alto e desça lentamente com a ajuda do braço são."
    ],
    "aiLandmarks": {
      "hip": {
        "cx": 135,
        "cy": 100,
        "label": "Tronco Alinhado"
      },
      "knee": {
        "cx": 135,
        "cy": 60,
        "label": "Ombro"
      },
      "ankle": {
        "cx": 135,
        "cy": 20,
        "label": "Elevação 110°"
      },
      "arc": "M 135 60 L 135 20"
    },
    "aiMetrics": {
      "angle": "110°",
      "angleTarget": "✓ Ganho gradual de flexão indolor",
      "align": "Plano Escapular",
      "alignStatus": "✓ Sem pinçamento acromial",
      "symm": "Assistido",
      "symmStatus": "✓ Braço saudável auxiliando",
      "time": "2.5 s",
      "timeStatus": "✓ Subida e descida controladas"
    },
    "aiFeedbackPositive": "Excelente elevação no plano da escápula! Subida conduzida sem compensação de tronco ou arqueamento lombar.",
    "aiFeedbackCorrection": "Atenção ao tronco: Você inclinou as costas para trás ao erguer os braços. Mantenha o corpo reto e suba apenas até o limite que o braço alcançar.",
    "motorSteps": [
      {
        "title": "Etapa 1: Execução do Paciente",
        "desc": "Movimento ativo-assistido aproveitando a força do membro superior contralateral."
      },
      {
        "title": "Etapa 2: Análise da IA (MediaPipe)",
        "desc": "Acompanhamento da angulação glenoumeral e monitoramento de compensações na coluna."
      },
      {
        "title": "Etapa 3: Feedback Extrínseco",
        "desc": "Registro do ângulo máximo de elevação atingido sem dor."
      },
      {
        "title": "Etapa 4: Ajuste Motor",
        "desc": "Modulação da amplitude respeitando a barreira elástica do tecido tendíneo."
      },
      {
        "title": "Etapa 5: Nova Execução",
        "desc": "Restauração progressiva da função de alcance para atividades diárias."
      }
    ]
  },
  {
    "id": "deslizamento_calcanhar",
    "name": "Deslizamento do calcanhar (Heel slide)",
    "objective": "Recuperar a amplitude de flexão do joelho de forma controlada e sem estresse rotacional, crucial no pós-operatório de LCA.",
    "sets": "3×10 repetições",
    "time": "~4 min",
    "visualType": "svg",
    "svgId": "svg-deslizamento-calcanhar",
    "caption": "Perna estendida ↔ Deslizamento do calcanhar em direção aos glúteos",
    "joints": "Femorotibial e Coxofemoral em flexão controlada",
    "planes": "Plano Sagital em torno do Eixo Látero-Lateral",
    "moves": "Flexão combinada de joelho e quadril com apoio contínuo do calcanhar",
    "muscles": "Isquiotibiais (semitendíneo, semimembranoso e bíceps femoral) e Quadríceps excêntrico",
    "antagonistsSynergists": "O quadríceps atua controlando a extensão no retorno.",
    "contraction": "Concêntrica dos isquiotibiais com suporte de contato da superfície.",
    "lever": "3ª Classe com eliminação da gravidade pelo deslizamento na maca ou solo.",
    "why": "O pós-operatório de LCA exige ganho precoce e seguro de flexão. O deslizamento do calcanhar elimina forças gravitacionais bruscas e protege o enxerto recém-implantado.",
    "precautions": [
      "Não puxe o joelho em direção ao peito com força excessiva; respeite o limite de flexão permitido pelo cirurgião e fisioterapeuta.",
      "Não deixe o pé girar para fora ao puxar; o calcanhar deve deslizar em linha reta.",
      "Pode usar uma toalha ou meia escorregadia no chão para facilitar o deslizamento sem atrito."
    ],
    "steps": [
      "Deite-se de barriga para cima com as pernas estendidas sobre uma superfície lisa (ou use uma meia).",
      "Deslize lentamente o calcanhar em direção aos glúteos, dobrando o joelho em linha reta.",
      "Vá até o ponto onde sentir uma leve pressão ou alongamento seguro, sem dor aguda.",
      "Mantenha por 2 a 3 segundos na posição flexionada.",
      "Deslize o calcanhar de volta para a frente até esticar totalmente a perna."
    ],
    "aiLandmarks": {
      "hip": {
        "cx": 110,
        "cy": 130,
        "label": "Quadril"
      },
      "knee": {
        "cx": 140,
        "cy": 100,
        "label": "Joelho (Flexão 95°)"
      },
      "ankle": {
        "cx": 145,
        "cy": 130,
        "label": "Calcanhar Deslizando"
      },
      "arc": "M 125 115 A 18 18 0 0 1 145 115"
    },
    "aiMetrics": {
      "angle": "95°",
      "angleTarget": "✓ Flexão terapêutica segura no pós-op",
      "align": "0° desvio",
      "alignStatus": "✓ Deslizamento em linha reta",
      "symm": "Unilateral",
      "symmStatus": "✓ Sem rotação tibial",
      "time": "3.0 s",
      "timeStatus": "✓ Movimento contínuo sem trancos"
    },
    "aiFeedbackPositive": "Excelente deslizamento linear! Arco de 95° alcançado suavemente sem desvios rotacionais da tíbia, protegendo o enxerto do LCA.",
    "aiFeedbackCorrection": "Atenção ao alinhamento: A ponta do pé virou para fora durante o deslizamento. Mantenha o calcanhar e os dedos apontados retos para cima durante todo o percurso.",
    "motorSteps": [
      {
        "title": "Etapa 1: Execução do Paciente",
        "desc": "Ativação concêntrica dos isquiotibiais com feedback proprioceptivo do solo."
      },
      {
        "title": "Etapa 2: Análise da IA (MediaPipe)",
        "desc": "Cálculo instantâneo do ângulo femorotibial e conferência de rotações associadas."
      },
      {
        "title": "Etapa 3: Feedback Extrínseco",
        "desc": "Indicação em graus da flexão atingida em relação à meta prescrita."
      },
      {
        "title": "Etapa 4: Ajuste Motor",
        "desc": "Correção da trajetória do calcâneo mantendo o plano sagital perfeito."
      },
      {
        "title": "Etapa 5: Nova Execução",
        "desc": "Ganho sustentável de amplitude sem gerar estresse no enxerto cirúrgico."
      }
    ]
  },
  {
    "id": "step_up",
    "name": "Subida no degrau (Step-up)",
    "objective": "Treinar o controle neuromuscular, força concêntrica do quadríceps e estabilização unipodal em cadeia cinética fechada funcional.",
    "sets": "3×10 repetições por perna",
    "time": "~4 min",
    "visualType": "svg",
    "svgId": "svg-step-up",
    "caption": "Pé apoiado no degrau ↔ Elevação corporal até extensão completa",
    "joints": "Coxofemoral, Femorotibial/Femoropatelar e Talocrural em CCF",
    "planes": "Plano Sagital com alto controle anti-valgo no Plano Frontal",
    "moves": "Extensão concêntrica completa de joelho e quadril contra a gravidade",
    "muscles": "Quadríceps femoral, Glúteo máximo, Glúteo médio, Tríceps sural e Core",
    "antagonistsSynergists": "Estabilizadores: Glúteo médio e mínimo (essenciais contra o valgo dinâmico).",
    "contraction": "Concêntrica vigorosa na subida; Excêntrica amortecida na descida.",
    "lever": "3ª Classe em cadeia fechada monopodal.",
    "why": "Exercício avançado e funcional para pós-op de LCA: restaura a força da perna necessária para subir escadas e saltar com estabilização ligamentar.",
    "precautions": [
      "Comece com um degrau baixo (10 a 15 cm) e apenas evolua com autorização do fisioterapeuta.",
      "Não deixe o joelho da perna de apoio 'entrar' para dentro (valgo dinâmico); mantenha-o alinhado com o segundo dedo do pé.",
      "Não impulsione com o pé de trás; quem deve fazer toda a força de subida é a perna que está em cima do degrau."
    ],
    "steps": [
      "Fique em pé de frente para um degrau baixo e estável, com as mãos livres ou próximas a um apoio.",
      "Coloque todo o pé da perna operada sobre o degrau.",
      "Transfira o peso para a perna do degrau e suba empurrando o chão com o calcanhar, até estender a perna completamente.",
      "Apoie o outro pé suavemente ao lado no degrau.",
      "Desça lentamente com a perna de trás primeiro, amortecendo a descida com a perna do degrau."
    ],
    "aiLandmarks": {
      "hip": {
        "cx": 135,
        "cy": 60,
        "label": "Pelve Nivelada"
      },
      "knee": {
        "cx": 140,
        "cy": 105,
        "label": "Joelho Alinhado (0° valgo)"
      },
      "ankle": {
        "cx": 140,
        "cy": 150,
        "label": "Pé no Degrau"
      },
      "arc": "M 135 60 L 140 105 L 140 150"
    },
    "aiMetrics": {
      "angle": "Extensão 180°",
      "angleTarget": "✓ Subida completa estabilizada",
      "align": "0° desvio",
      "alignStatus": "✓ Joelho alinhado com o 2º dedo do pé",
      "symm": "Monopodal",
      "symmStatus": "✓ Sem impulso da perna de trás",
      "time": "2.0 s",
      "timeStatus": "✓ Descida amortecida controlada"
    },
    "aiFeedbackPositive": "Excelente controle dinâmico! Joelho permaneceu perfeitamente alinhado sobre o pé sem desvio medial (valgo ausente) e descida bem amortecida.",
    "aiFeedbackCorrection": "Alerta de Valgo Dinâmico: O joelho cedeu para dentro na hora de subir. Ative o glúteo médio e force o joelho suavemente para fora, mantendo o pé reto.",
    "motorSteps": [
      {
        "title": "Etapa 1: Execução do Paciente",
        "desc": "Transferência do vetor de peso e extensão concêntrica monopodal."
      },
      {
        "title": "Etapa 2: Análise da IA (MediaPipe)",
        "desc": "Rastreamento do ângulo Q funcional e detecção precoce de valgo dinâmico."
      },
      {
        "title": "Etapa 3: Feedback Extrínseco",
        "desc": "Indicador visual instantâneo de segurança do joelho no plano frontal."
      },
      {
        "title": "Etapa 4: Ajuste Motor",
        "desc": "Feedforward intensificando a rotação externa do fêmur via rotadores profundos do quadril."
      },
      {
        "title": "Etapa 5: Nova Execução",
        "desc": "Retorno seguro às atividades funcionais de vida diária e prática esportiva."
      }
    ]
  }
];

// ANIMAÇÕES VETORIAIS SVG
const EXERCISE_SVGS = {
  "svg-isometria-quadriceps": "\n<svg viewBox=\"0 0 270 190\" class=\"ex-svg-art\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"legGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#0d7d6f\"/>\n      <stop offset=\"100%\" stop-color=\"#3fd6bf\"/>\n    </linearGradient>\n  </defs>\n  <!-- Superfície / Colchão -->\n  <line x1=\"20\" y1=\"150\" x2=\"250\" y2=\"150\" stroke=\"#cbd5e1\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n  <!-- Tronco apoiado reclinado -->\n  <path d=\"M 45 95 L 85 145\" stroke=\"#12241f\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n  <!-- Cabeça -->\n  <circle cx=\"38\" cy=\"85\" r=\"14\" fill=\"#0d7d6f\"/>\n  <!-- Coxa -->\n  <path d=\"M 85 145 L 155 142\" stroke=\"url(#legGrad)\" stroke-width=\"9\" stroke-linecap=\"round\"/>\n  <!-- Toalha sob o joelho -->\n  <ellipse cx=\"155\" cy=\"147\" rx=\"10\" ry=\"6\" fill=\"#dfb066\"/>\n  <!-- Perna e pé -->\n  <path d=\"M 155 142 L 225 142 L 230 128\" stroke=\"#0a5f55\" stroke-width=\"7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <!-- Seta indicando pressão para baixo -->\n  <g class=\"anim-pulse-y\">\n    <path d=\"M 155 110 L 155 130\" stroke=\"#dfb066\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <polygon points=\"150,126 160,126 155,134\" fill=\"#dfb066\"/>\n  </g>\n  <!-- Destaque muscular da coxa (Quadríceps ativado) -->\n  <path d=\"M 105 137 Q 130 128 150 137\" stroke=\"#3fd6bf\" stroke-width=\"3\" fill=\"none\" stroke-dasharray=\"2,2\"/>\n  <text x=\"135\" y=\"55\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0d7d6f\" text-anchor=\"middle\">Contração do Quadríceps</text>\n  <text x=\"135\" y=\"72\" font-family=\"sans-serif\" font-size=\"9.5\" fill=\"#57685f\" text-anchor=\"middle\">Pressione o joelho contra a toalha</text>\n</svg>\n",
  "svg-bird-dog": "\n<svg viewBox=\"0 0 270 190\" class=\"ex-svg-art\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Solo -->\n  <line x1=\"20\" y1=\"160\" x2=\"250\" y2=\"160\" stroke=\"#cbd5e1\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <!-- Posição de 4 apoios com extensão cruzada -->\n  <!-- Apoios no solo: braço esquerdo e joelho direito -->\n  <line x1=\"105\" y1=\"110\" x2=\"105\" y2=\"160\" stroke=\"#12241f\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n  <line x1=\"160\" y1=\"110\" x2=\"160\" y2=\"160\" stroke=\"#12241f\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n  <!-- Tronco horizontal estável -->\n  <path d=\"M 100 110 L 165 110\" stroke=\"#0d7d6f\" stroke-width=\"10\" stroke-linecap=\"round\"/>\n  <!-- Cabeça alinhada -->\n  <circle cx=\"85\" cy=\"110\" r=\"12\" fill=\"#0a5f55\"/>\n  <!-- Braço estendido à frente (animado) -->\n  <g class=\"anim-float-x\">\n    <line x1=\"100\" y1=\"110\" x2=\"35\" y2=\"110\" stroke=\"#3fd6bf\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n  </g>\n  <!-- Perna contralateral estendida atrás (animada) -->\n  <g class=\"anim-float-x-rev\">\n    <line x1=\"165\" y1=\"110\" x2=\"235\" y2=\"110\" stroke=\"#3fd6bf\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n    <line x1=\"235\" y1=\"110\" x2=\"242\" y2=\"118\" stroke=\"#3fd6bf\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n  </g>\n  <!-- Linha de alinhamento 180° -->\n  <line x1=\"30\" y1=\"110\" x2=\"245\" y2=\"110\" stroke=\"#dfb066\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n  <text x=\"135\" y=\"45\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0d7d6f\" text-anchor=\"middle\">Estabilidade Cruzada</text>\n  <text x=\"135\" y=\"62\" font-family=\"sans-serif\" font-size=\"9.5\" fill=\"#57685f\" text-anchor=\"middle\">Braço e perna opostos alinhados</text>\n</svg>\n",
  "svg-gato-vaca": "\n<svg viewBox=\"0 0 270 190\" class=\"ex-svg-art\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Solo -->\n  <line x1=\"20\" y1=\"155\" x2=\"250\" y2=\"155\" stroke=\"#cbd5e1\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <!-- Braços e pernas de apoio -->\n  <line x1=\"90\" y1=\"115\" x2=\"90\" y2=\"155\" stroke=\"#12241f\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n  <line x1=\"175\" y1=\"115\" x2=\"175\" y2=\"155\" stroke=\"#12241f\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n  <!-- Cabeça -->\n  <circle cx=\"70\" cy=\"115\" r=\"12\" fill=\"#0a5f55\"/>\n  <!-- Curvatura dinâmica da coluna -->\n  <path class=\"anim-spine-wave\" d=\"M 85 115 Q 132 85 175 115\" stroke=\"#0d7d6f\" stroke-width=\"8\" fill=\"none\" stroke-linecap=\"round\"/>\n  <!-- Setas de mobilização sagital -->\n  <path d=\"M 132 80 L 132 65\" stroke=\"#dfb066\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <polygon points=\"128,68 136,68 132,60\" fill=\"#dfb066\"/>\n  <text x=\"135\" y=\"38\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0d7d6f\" text-anchor=\"middle\">Mobilização Sagital</text>\n  <text x=\"135\" y=\"52\" font-family=\"sans-serif\" font-size=\"9.5\" fill=\"#57685f\" text-anchor=\"middle\">Flexão (Gato) ↔ Extensão (Vaca)</text>\n</svg>\n",
  "svg-contracao-abdominal": "\n<svg viewBox=\"0 0 270 190\" class=\"ex-svg-art\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Solo -->\n  <line x1=\"20\" y1=\"150\" x2=\"250\" y2=\"150\" stroke=\"#cbd5e1\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <!-- Corpo deitado -->\n  <path d=\"M 45 145 L 135 145\" stroke=\"#12241f\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n  <!-- Cabeça com travesseiro leve -->\n  <circle cx=\"35\" cy=\"140\" r=\"12\" fill=\"#0a5f55\"/>\n  <!-- Pernas flexionadas 90° com pés no chão -->\n  <path d=\"M 135 145 L 175 110 L 205 150\" stroke=\"#0d7d6f\" stroke-width=\"7\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <!-- Cinta profunda (Transverso) -->\n  <ellipse cx=\"105\" cy=\"140\" rx=\"18\" ry=\"10\" fill=\"rgba(63, 214, 191, 0.25)\" stroke=\"#3fd6bf\" stroke-width=\"2\"/>\n  <!-- Setas puxando o umbigo em direção à coluna -->\n  <g class=\"anim-pulse-y\">\n    <path d=\"M 105 118 L 105 132\" stroke=\"#dfb066\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <polygon points=\"101,128 109,128 105,135\" fill=\"#dfb066\"/>\n  </g>\n  <text x=\"135\" y=\"45\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0d7d6f\" text-anchor=\"middle\">Ativação do Transverso</text>\n  <text x=\"135\" y=\"62\" font-family=\"sans-serif\" font-size=\"9.5\" fill=\"#57685f\" text-anchor=\"middle\">Puxe suavemente o umbigo para as costas</text>\n</svg>\n",
  "svg-mobilidade-pelvica": "\n<svg viewBox=\"0 0 270 190\" class=\"ex-svg-art\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Solo -->\n  <line x1=\"20\" y1=\"150\" x2=\"250\" y2=\"150\" stroke=\"#cbd5e1\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <!-- Tronco deitado -->\n  <path d=\"M 45 144 L 120 144\" stroke=\"#12241f\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n  <circle cx=\"35\" cy=\"138\" r=\"12\" fill=\"#0a5f55\"/>\n  <!-- Pernas flexionadas -->\n  <path d=\"M 135 144 L 175 112 L 205 150\" stroke=\"#0d7d6f\" stroke-width=\"7\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <!-- Pelve com arco de rotação (báscula) -->\n  <ellipse cx=\"125\" cy=\"142\" rx=\"14\" ry=\"10\" fill=\"#3fd6bf\" opacity=\"0.8\"/>\n  <!-- Seta curva de báscula pélvica -->\n  <path d=\"M 115 125 A 14 14 0 0 1 138 125\" fill=\"none\" stroke=\"#dfb066\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <polygon points=\"135,121 142,125 135,129\" fill=\"#dfb066\"/>\n  <text x=\"135\" y=\"45\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0d7d6f\" text-anchor=\"middle\">Báscula Pélvica</text>\n  <text x=\"135\" y=\"62\" font-family=\"sans-serif\" font-size=\"9.5\" fill=\"#57685f\" text-anchor=\"middle\">Antiversão e retroversão suave</text>\n</svg>\n",
  "svg-tandem": "\n<svg viewBox=\"0 0 270 190\" class=\"ex-svg-art\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Solo -->\n  <line x1=\"40\" y1=\"160\" x2=\"230\" y2=\"160\" stroke=\"#cbd5e1\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <!-- Pessoa em pé em vista frontal com pés em tandem -->\n  <!-- Corpo ereto -->\n  <circle cx=\"135\" cy=\"45\" r=\"14\" fill=\"#0a5f55\"/>\n  <line x1=\"135\" y1=\"60\" x2=\"135\" y2=\"115\" stroke=\"#12241f\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n  <line x1=\"135\" y1=\"75\" x2=\"105\" y2=\"95\" stroke=\"#12241f\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n  <line x1=\"135\" y1=\"75\" x2=\"165\" y2=\"95\" stroke=\"#12241f\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n  <!-- Pernas estreitas -->\n  <line x1=\"135\" y1=\"115\" x2=\"132\" y2=\"158\" stroke=\"#0d7d6f\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n  <!-- Pés alinhados pé ante pé em destaque lateral -->\n  <rect x=\"180\" y=\"70\" width=\"65\" height=\"80\" rx=\"8\" fill=\"rgba(13, 125, 111, 0.08)\" stroke=\"#3fd6bf\" stroke-width=\"1.5\"/>\n  <text x=\"212\" y=\"86\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#0d7d6f\" text-anchor=\"middle\">Pés alinhados</text>\n  <!-- Pé de trás -->\n  <ellipse cx=\"212\" cy=\"132\" rx=\"10\" ry=\"16\" fill=\"#12241f\"/>\n  <!-- Pé da frente encostando calcanhar nos dedos -->\n  <ellipse cx=\"212\" cy=\"104\" rx=\"9\" ry=\"15\" fill=\"#0d7d6f\"/>\n  <line x1=\"135\" y1=\"30\" x2=\"135\" y2=\"160\" stroke=\"#dfb066\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <text x=\"110\" y=\"35\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0d7d6f\" text-anchor=\"middle\">Base Estreita</text>\n  <text x=\"110\" y=\"50\" font-family=\"sans-serif\" font-size=\"9.5\" fill=\"#57685f\" text-anchor=\"middle\">Equilíbrio Tandem</text>\n</svg>\n",
  "svg-caminhada-lateral": "\n<svg viewBox=\"0 0 270 190\" class=\"ex-svg-art\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Solo -->\n  <line x1=\"20\" y1=\"160\" x2=\"250\" y2=\"160\" stroke=\"#cbd5e1\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <!-- Postura de semi-agachamento em vista frontal -->\n  <circle cx=\"120\" cy=\"50\" r=\"13\" fill=\"#0a5f55\"/>\n  <line x1=\"120\" y1=\"63\" x2=\"120\" y2=\"110\" stroke=\"#12241f\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n  <!-- Perna esquerda fixa -->\n  <path d=\"M 120 110 L 95 135 L 90 160\" stroke=\"#0d7d6f\" stroke-width=\"6\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <!-- Perna direita abrindo passo lateral -->\n  <path d=\"M 120 110 L 155 135 L 165 160\" stroke=\"#3fd6bf\" stroke-width=\"6\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <!-- Seta indicando deslocamento lateral -->\n  <g class=\"anim-float-x\">\n    <path d=\"M 170 135 L 195 135\" stroke=\"#dfb066\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <polygon points=\"192,130 200,135 192,140\" fill=\"#dfb066\"/>\n  </g>\n  <!-- Ativação de Glúteo Médio -->\n  <circle cx=\"138\" cy=\"112\" r=\"6\" fill=\"#dfb066\"/>\n  <text x=\"135\" y=\"32\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0d7d6f\" text-anchor=\"middle\">Passo Lateral</text>\n  <text x=\"135\" y=\"46\" font-family=\"sans-serif\" font-size=\"9.5\" fill=\"#57685f\" text-anchor=\"middle\">Fortalecimento do Glúteo Médio</text>\n</svg>\n",
  "svg-retracao-escapular": "\n<svg viewBox=\"0 0 270 190\" class=\"ex-svg-art\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Vista posterior do tronco -->\n  <circle cx=\"135\" cy=\"40\" r=\"14\" fill=\"#0a5f55\"/>\n  <!-- Contorno das costas -->\n  <path d=\"M 85 70 Q 135 60 185 70 L 175 140 Q 135 145 95 140 Z\" fill=\"rgba(13, 125, 111, 0.08)\" stroke=\"#12241f\" stroke-width=\"3\"/>\n  <!-- Coluna vertebral -->\n  <line x1=\"135\" y1=\"65\" x2=\"135\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"3\" stroke-dasharray=\"3,3\"/>\n  <!-- Escápula Esquerda -->\n  <polygon points=\"105,75 120,85 110,115\" fill=\"#0d7d6f\" opacity=\"0.9\"/>\n  <!-- Escápula Direita -->\n  <polygon points=\"165,75 150,85 160,115\" fill=\"#0d7d6f\" opacity=\"0.9\"/>\n  <!-- Setas de aproximação medial (adução das escápulas) -->\n  <g class=\"anim-pinch\">\n    <path d=\"M 95 95 L 110 95\" stroke=\"#dfb066\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <polygon points=\"107,91 114,95 107,99\" fill=\"#dfb066\"/>\n    <path d=\"M 175 95 L 160 95\" stroke=\"#dfb066\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <polygon points=\"163,91 156,95 163,99\" fill=\"#dfb066\"/>\n  </g>\n  <text x=\"135\" y=\"24\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0d7d6f\" text-anchor=\"middle\">Adução Escapular</text>\n  <text x=\"135\" y=\"165\" font-family=\"sans-serif\" font-size=\"9.5\" fill=\"#57685f\" text-anchor=\"middle\">Aproxime as escápulas para trás e para baixo</text>\n</svg>\n",
  "svg-remada-elastico": "\n<svg viewBox=\"0 0 270 190\" class=\"ex-svg-art\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Solo -->\n  <line x1=\"20\" y1=\"155\" x2=\"250\" y2=\"155\" stroke=\"#cbd5e1\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <!-- Pessoa sentada ereta no chão -->\n  <circle cx=\"80\" cy=\"70\" r=\"13\" fill=\"#0a5f55\"/>\n  <line x1=\"80\" y1=\"83\" x2=\"80\" y2=\"145\" stroke=\"#12241f\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n  <!-- Pernas esticadas -->\n  <line x1=\"80\" y1=\"145\" x2=\"200\" y2=\"145\" stroke=\"#12241f\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n  <line x1=\"200\" y1=\"145\" x2=\"202\" y2=\"130\" stroke=\"#12241f\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <!-- Faixa elástica nos pés -->\n  <path d=\"M 202 135 L 100 115\" stroke=\"#dfb066\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <!-- Braço puxando cotovelo para trás -->\n  <path d=\"M 80 95 L 60 115 L 100 115\" stroke=\"#0d7d6f\" stroke-width=\"5\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <!-- Seta de tração para trás -->\n  <path d=\"M 68 115 L 50 115\" stroke=\"#3fd6bf\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <polygon points=\"53,111 46,115 53,119\" fill=\"#3fd6bf\"/>\n  <text x=\"135\" y=\"42\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0d7d6f\" text-anchor=\"middle\">Tração Escapular</text>\n  <text x=\"135\" y=\"58\" font-family=\"sans-serif\" font-size=\"9.5\" fill=\"#57685f\" text-anchor=\"middle\">Cotovelos junto ao tronco</text>\n</svg>\n",
  "svg-pendular-codman": "\n<svg viewBox=\"0 0 270 190\" class=\"ex-svg-art\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Mesa de apoio -->\n  <rect x=\"30\" y=\"105\" width=\"45\" height=\"55\" fill=\"#e2e6e1\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>\n  <!-- Solo -->\n  <line x1=\"20\" y1=\"160\" x2=\"250\" y2=\"160\" stroke=\"#cbd5e1\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <!-- Pessoa inclinada com mão na mesa -->\n  <path d=\"M 60 105 L 90 85 L 150 95 L 175 160\" stroke=\"#12241f\" stroke-width=\"6\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <circle cx=\"100\" cy=\"72\" r=\"13\" fill=\"#0a5f55\"/>\n  <!-- Braço lesionado pendendo relaxado para o solo -->\n  <line x1=\"120\" y1=\"90\" x2=\"120\" y2=\"145\" stroke=\"#0d7d6f\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <!-- Elipse de circundução passiva suave -->\n  <ellipse cx=\"120\" cy=\"148\" rx=\"18\" ry=\"7\" fill=\"none\" stroke=\"#dfb066\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n  <text x=\"165\" y=\"45\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0d7d6f\" text-anchor=\"middle\">Descompressão Subacromial</text>\n  <text x=\"165\" y=\"62\" font-family=\"sans-serif\" font-size=\"9.5\" fill=\"#57685f\" text-anchor=\"middle\">Braço solto balançando por inércia</text>\n</svg>\n",
  "svg-elevacao-assistida": "\n<svg viewBox=\"0 0 270 190\" class=\"ex-svg-art\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Cadeira / Apoio -->\n  <line x1=\"40\" y1=\"160\" x2=\"230\" y2=\"160\" stroke=\"#cbd5e1\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <!-- Pessoa sentada ereta -->\n  <circle cx=\"100\" cy=\"55\" r=\"13\" fill=\"#0a5f55\"/>\n  <line x1=\"100\" y1=\"68\" x2=\"100\" y2=\"135\" stroke=\"#12241f\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n  <line x1=\"100\" y1=\"135\" x2=\"140\" y2=\"135\" stroke=\"#12241f\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n  <line x1=\"140\" y1=\"135\" x2=\"140\" y2=\"160\" stroke=\"#12241f\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n  <!-- Bastão conduzido para o alto a 110° -->\n  <line x1=\"100\" y1=\"85\" x2=\"165\" y2=\"45\" stroke=\"#0d7d6f\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <line x1=\"150\" y1=\"35\" x2=\"180\" y2=\"55\" stroke=\"#dfb066\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n  <!-- Arco de elevação no plano da escápula -->\n  <path d=\"M 140 85 A 40 40 0 0 0 165 48\" fill=\"none\" stroke=\"#3fd6bf\" stroke-width=\"2\" stroke-dasharray=\"2,2\"/>\n  <text x=\"175\" y=\"95\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0d7d6f\" text-anchor=\"middle\">Plano da Escápula</text>\n  <text x=\"175\" y=\"112\" font-family=\"sans-serif\" font-size=\"9.5\" fill=\"#57685f\" text-anchor=\"middle\">Elevação assistida sem dor</text>\n</svg>\n",
  "svg-deslizamento-calcanhar": "\n<svg viewBox=\"0 0 270 190\" class=\"ex-svg-art\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Maca / Solo -->\n  <line x1=\"20\" y1=\"150\" x2=\"250\" y2=\"150\" stroke=\"#cbd5e1\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <!-- Pessoa deitada -->\n  <path d=\"M 45 145 L 110 145\" stroke=\"#12241f\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n  <circle cx=\"35\" cy=\"138\" r=\"12\" fill=\"#0a5f55\"/>\n  <!-- Joelho fletindo suavemente deslizando o calcanhar -->\n  <path d=\"M 110 145 L 155 110 L 175 145\" stroke=\"#0d7d6f\" stroke-width=\"7\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <!-- Pano ou meia sob o calcanhar -->\n  <ellipse cx=\"175\" cy=\"148\" rx=\"8\" ry=\"4\" fill=\"#dfb066\"/>\n  <!-- Setas indicando deslizamento para trás e para frente -->\n  <g class=\"anim-float-x\">\n    <path d=\"M 160 135 L 140 135\" stroke=\"#3fd6bf\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <polygon points=\"144,131 137,135 144,139\" fill=\"#3fd6bf\"/>\n  </g>\n  <text x=\"135\" y=\"45\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0d7d6f\" text-anchor=\"middle\">Deslizamento do Calcanhar</text>\n  <text x=\"135\" y=\"62\" font-family=\"sans-serif\" font-size=\"9.5\" fill=\"#57685f\" text-anchor=\"middle\">Ganho de flexão linear pós-LCA</text>\n</svg>\n",
  "svg-step-up": "\n<svg viewBox=\"0 0 270 190\" class=\"ex-svg-art\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Solo -->\n  <line x1=\"20\" y1=\"160\" x2=\"250\" y2=\"160\" stroke=\"#cbd5e1\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <!-- Degrau baixo (Step) -->\n  <rect x=\"140\" y=\"125\" width=\"80\" height=\"35\" rx=\"3\" fill=\"#e2e6e1\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>\n  <!-- Pessoa subindo com pé no degrau -->\n  <circle cx=\"120\" cy=\"40\" r=\"13\" fill=\"#0a5f55\"/>\n  <line x1=\"120\" y1=\"53\" x2=\"120\" y2=\"105\" stroke=\"#12241f\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n  <!-- Perna de apoio no degrau -->\n  <path d=\"M 120 105 L 150 115 L 160 125\" stroke=\"#0d7d6f\" stroke-width=\"6\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <!-- Perna posterior no chão -->\n  <line x1=\"120\" y1=\"105\" x2=\"100\" y2=\"160\" stroke=\"#12241f\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <!-- Seta indicando subida vertical e alinhamento do joelho -->\n  <path d=\"M 150 95 L 150 75\" stroke=\"#dfb066\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <polygon points=\"146,78 154,78 150,70\" fill=\"#dfb066\"/>\n  <text x=\"135\" y=\"24\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0d7d6f\" text-anchor=\"middle\">Step-up (Subida no Degrau)</text>\n  <text x=\"135\" y=\"175\" font-family=\"sans-serif\" font-size=\"9.5\" fill=\"#57685f\" text-anchor=\"middle\">Joelho alinhado com o segundo dedo do pé</text>\n</svg>\n"
};

// PACIENTES DE DEMONSTRAÇÃO
const DEFAULT_PATIENTS = [
  {
    "id": "maria",
    "name": "Maria Silva",
    "condition": "Gonartrose (osteoartrose de joelho)",
    "objective": "Melhorar a mobilidade, reduzir a dor e fortalecer os membros inferiores com foco na articulação do joelho e estabilidade funcional.",
    "guidelines": "Evitar impacto repetitivo em superfícies rígidas. Realizar os exercícios em dias alternados ou conforme tolerância. Respeitar o limite de dor (não ultrapassar sensação de desconforto leve, escala de dor até 3/10). Manter compressas mornas antes do treino para relaxamento e frias após caso haja inchaço leve.",
    "exercises": [
      "isometria_quadriceps",
      "slr",
      "sentar_levantar",
      "ponte",
      "joelho_extensao"
    ],
    "sessions": 8,
    "completed": 24,
    "evolution": 86,
    "freq": "3×",
    "weekly": [
      65,
      72,
      80,
      86
    ],
    "lastSession": "hoje · Contração isométrica do quadríceps · Tranquilo",
    "insight": "Maria relatou execuções mais tranquilas e ganho progressivo de arco de movimento nas últimas 3 sessões — momento favorável para progressão sob supervisão.",
    "obs": "Paciente apresentou melhora no recrutamento do vasto medial e menor queixa dolorosa ao sentar e levantar.",
    "history": [
      {
        "label": "Sessão 8 — Contração isométrica do quadríceps",
        "rating": "Tranquilo",
        "note": "Consegui sustentar os 6 segundos sem dor"
      },
      {
        "label": "Sessão 7 — Sentar e levantar da cadeira",
        "rating": "Tranquilo",
        "note": "Descida bem controlada"
      },
      {
        "label": "Sessão 6 — Elevação da perna estendida",
        "rating": "Moderado",
        "note": "Leve cansaço na coxa na última série"
      }
    ]
  },
  {
    "id": "joao",
    "name": "João Pereira",
    "condition": "Lombalgia crônica",
    "objective": "Melhorar a estabilidade da coluna vertebral, aumentar a mobilidade segmentar e desenvolver a força da musculatura estabilizadora profunda (core).",
    "guidelines": "Evitar movimentos súbitos de flexão com torção do tronco. Não permanecer sentado na mesma posição por mais de 50 minutos contínuos. Priorizar a ativação suave do transverso abdominal durante todas as atividades domésticas e suspender qualquer exercício que provoque irradiação para a perna (ciatalgia).",
    "exercises": [
      "ponte",
      "bird_dog",
      "gato_vaca",
      "contracao_abdominal",
      "mobilidade_pelvica"
    ],
    "sessions": 5,
    "completed": 15,
    "evolution": 68,
    "freq": "2×",
    "weekly": [
      50,
      58,
      63,
      68
    ],
    "lastSession": "ontem · Bird Dog · Moderado",
    "insight": "João reportou menor rigidez matinal após a sequência de gato-vaca e ativação do transverso — boa resposta aos exercícios de descompressão axial.",
    "obs": "Refere alívio ao final da mobilidade pélvica; orientado a não ultrapassar a linha neutra da coluna durante o Bird Dog.",
    "history": [
      {
        "label": "Sessão 5 — Bird Dog",
        "rating": "Moderado",
        "note": "Senti a lombar mais firme"
      },
      {
        "label": "Sessão 4 — Gato-vaca",
        "rating": "Tranquilo",
        "note": "Alívio da rigidez nas costas"
      },
      {
        "label": "Sessão 3 — Contração abdominal",
        "rating": "Tranquilo",
        "note": "Respiração coordenada"
      }
    ]
  },
  {
    "id": "antonio",
    "name": "Antônio Costa",
    "condition": "Risco de queda e alteração do equilíbrio",
    "objective": "Melhorar o equilíbrio estático e dinâmico, aperfeiçoar a coordenação motora e aumentar a força dos membros inferiores para prevenção de quedas.",
    "guidelines": "Realizar sempre os exercícios próximo a uma parede, mesa ou corrimão firme para apoio imediato caso necessário. Usar calçados fechados e antiderrapantes com boa sustentação. Garantir ambiente bem iluminado e livre de tapetes soltos ou obstáculos no chão durante a prática.",
    "exercises": [
      "sentar_levantar",
      "tandem",
      "marcha",
      "panturrilha",
      "caminhada_lateral"
    ],
    "sessions": 10,
    "completed": 32,
    "evolution": 78,
    "freq": "4×",
    "weekly": [
      60,
      66,
      72,
      78
    ],
    "lastSession": "há 2 dias · Equilíbrio em tandem · Tranquilo",
    "insight": "Antônio mantém assiduidade exemplar, com melhora significativa na estratégia de tornozelo e na velocidade da marcha estacionária.",
    "obs": "Maior confiança e estabilidade percebida na transferência de sentar e levantar. Manter suporte próximo no tandem.",
    "history": [
      {
        "label": "Sessão 10 — Equilíbrio em tandem",
        "rating": "Tranquilo",
        "note": "Consegui 20s com apoio leve de um dedo"
      },
      {
        "label": "Sessão 9 — Marcha estacionária",
        "rating": "Tranquilo",
        "note": "Ritmo constante"
      },
      {
        "label": "Sessão 8 — Elevação dos calcanhares",
        "rating": "Tranquilo",
        "note": "Equilíbrio firme"
      }
    ]
  },
  {
    "id": "beatriz",
    "name": "Beatriz Nunes",
    "condition": "Tendinopatia do manguito rotador",
    "objective": "Melhorar a mobilidade glenoumeral, descompressão do espaço subacromial e fortalecer a musculatura estabilizadora e rotadora do ombro.",
    "guidelines": "Evitar carregar pesos acima da linha dos ombros no dia a dia. Não dormir apoiada sobre o ombro dolorido. Realizar o exercício pendular de Codman logo no início para alívio e lubrificação articular. Reduzir a tensão do elástico imediatamente caso ocorra pinçamento ou dor aguda na ponta do ombro.",
    "exercises": [
      "rotacao_externa_ombro",
      "retracao_escapular",
      "remada_elastico",
      "pendular_codman",
      "elevacao_assistida_braco"
    ],
    "sessions": 6,
    "completed": 18,
    "evolution": 64,
    "freq": "3×",
    "weekly": [
      40,
      48,
      56,
      64
    ],
    "lastSession": "hoje · Exercício pendular de Codman · Tranquilo",
    "insight": "Beatriz apresentou melhora na retração escapular e no alívio de dor após iniciar o treino pelo pêndulo de Codman — manter elástico leve na rotação externa.",
    "obs": "Dor bem controlada quando respeitado o plano da escápula. Estimular a ancoragem escapular antes de iniciar a remada.",
    "history": [
      {
        "label": "Sessão 6 — Exercício pendular de Codman",
        "rating": "Tranquilo",
        "note": "Alívio imediato no ombro"
      },
      {
        "label": "Sessão 5 — Retração escapular",
        "rating": "Tranquilo",
        "note": "Postura bem alinhada"
      },
      {
        "label": "Sessão 4 — Rotação externa com elástico",
        "rating": "Moderado",
        "note": "Usei elástico mais leve como orientado"
      }
    ]
  },
  {
    "id": "carla",
    "name": "Carla Mendes",
    "condition": "Pós-operatório de reconstrução do ligamento cruzado anterior (LCA)",
    "objective": "Recuperar a mobilidade articular (arco de flexão e extensão completa), recuperar a força muscular e restabelecer o controle neuromuscular e proprioceptivo.",
    "guidelines": "A liberação e progressão de cada exercício depende rigorosamente do tempo pós-cirúrgico e da avaliação do fisioterapeuta. Não forçar a flexão além do limite estipulado no protocolo. Manter o joelho protegido contra qualquer movimento brusco de torção (pivô) ou valgo dinâmico acentuado. Aplicar crioterapia (gelo) após os treinos conforme prescrição médica/fisioterapêutica.",
    "exercises": [
      "isometria_quadriceps",
      "deslizamento_calcanhar",
      "slr",
      "ponte",
      "step_up"
    ],
    "sessions": 7,
    "completed": 21,
    "evolution": 70,
    "freq": "3×",
    "weekly": [
      45,
      54,
      62,
      70
    ],
    "lastSession": "ontem · Deslizamento do calcanhar · Tranquilo",
    "insight": "Carla atingiu 95° de flexão no deslizamento de calcanhar sem efusão articular pós-treino — excelente transição para exercícios em cadeia fechada como a ponte.",
    "obs": "Boa ativação do VMO na isometria e controle seguro no SLR. Step-up autorizado apenas em degrau baixo de 10 cm com foco anti-valgo.",
    "history": [
      {
        "label": "Sessão 7 — Deslizamento do calcanhar",
        "rating": "Tranquilo",
        "note": "Joelho dobrou com facilidade sem inchaço"
      },
      {
        "label": "Sessão 6 — Contração isométrica do quadríceps",
        "rating": "Tranquilo",
        "note": "Força firme na toalha"
      },
      {
        "label": "Sessão 5 — Elevação da perna estendida",
        "rating": "Tranquilo",
        "note": "Joelho bem travado"
      }
    ]
  }
];

// BANCO DE USUÁRIOS
const DEFAULT_USERS_DB = [
  {
    "email": "maria@fisioemcasa.com",
    "pass": "1234",
    "role": "patient",
    "patientId": "maria"
  },
  {
    "email": "joao@fisioemcasa.com",
    "pass": "1234",
    "role": "patient",
    "patientId": "joao"
  },
  {
    "email": "antonio@fisioemcasa.com",
    "pass": "1234",
    "role": "patient",
    "patientId": "antonio"
  },
  {
    "email": "beatriz@fisioemcasa.com",
    "pass": "1234",
    "role": "patient",
    "patientId": "beatriz"
  },
  {
    "email": "carla@fisioemcasa.com",
    "pass": "1234",
    "role": "patient",
    "patientId": "carla"
  },
  {
    "email": "ana@fisioemcasa.com",
    "pass": "1234",
    "role": "physio",
    "nome": "Dr. Ana Ribeiro"
  }
];

// Dados mutáveis em memória
let PATIENTS = JSON.parse(JSON.stringify(DEFAULT_PATIENTS));
let USERS_DB = JSON.parse(JSON.stringify(DEFAULT_USERS_DB));

const STORAGE_KEY_PATIENTS = 'fisio_em_casa_patients_v4';
const STORAGE_KEY_USERS = 'fisio_em_casa_users_v4';

// Persistência em JSON via LocalStorage do Navegador
function saveStorage() {
  try {
    localStorage.setItem(STORAGE_KEY_PATIENTS, JSON.stringify(PATIENTS));
    localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(USERS_DB));
  } catch (err) {
    console.warn('Armazenamento local indisponível:', err);
  }
}

function loadStorage() {
  try {
    const savedPatients = localStorage.getItem(STORAGE_KEY_PATIENTS);
    const savedUsers = localStorage.getItem(STORAGE_KEY_USERS);
    if (savedPatients) {
      PATIENTS = JSON.parse(savedPatients);
    } else {
      PATIENTS = JSON.parse(JSON.stringify(DEFAULT_PATIENTS));
      saveStorage();
    }
    if (savedUsers) {
      USERS_DB = JSON.parse(savedUsers);
    } else {
      USERS_DB = JSON.parse(JSON.stringify(DEFAULT_USERS_DB));
      saveStorage();
    }
  } catch (err) {
    console.warn('Erro ao carregar dados do LocalStorage:', err);
  }
}

// Exporta base em arquivo JSON para download real
function exportDatabaseJSON() {
  const data = {
    app: 'Fisio em Casa',
    academicInfo: 'Projeto A3 - Movimento Humano / USJT',
    exportDate: new Date().toISOString(),
    patients: PATIENTS,
    users: USERS_DB
  };
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'fisio_em_casa_dados.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Restaura os dados originais
function resetDemoDatabase() {
  if (confirm('Deseja restaurar os dados de demonstração originais com os 5 pacientes?')) {
    PATIENTS = JSON.parse(JSON.stringify(DEFAULT_PATIENTS));
    USERS_DB = JSON.parse(JSON.stringify(DEFAULT_USERS_DB));
    saveStorage();
    alert('Dados de demonstração restaurados com sucesso!');
    location.reload();
  }
}

let state = {
  role: 'patient',
  completed: {},
  current: EXERCISES[0],
  rating: null,
  exerciseOrigin: 'dash',
  currentPatient: null,
  iaAnalysisCompleted: false,
  isCompensationSimulated: false,
  isSkeletonVisible: true,
  currentMotorStep: 1
};

// Inicialização dos elementos
function initApp() {
  loadStorage();

  const navPatient = document.getElementById('nav-patient');
  const navPhysio = document.getElementById('nav-physio');

  if (navPatient) {
    navPatient.innerHTML = [
      ['s-dash', 'home', 'Início'],
      ['s-exercicios', 'list', 'Exercícios'],
      ['s-evolucao', 'chart', 'Evolução'],
      ['s-perfil', 'person', 'Perfil']
    ].map(([id, ic, label]) => 
      `<button class="navitem" onclick="show('${id}')"><span class="ic">${ICONS[ic]}</span>${label}</button>`
    ).join('');
  }

  if (navPhysio) {
    navPhysio.innerHTML = [
      ['s-physio-dash', 'home', 'Início'],
      ['s-physio-list', 'list', 'Pacientes'],
      ['s-evolucao', 'chart', 'Evolução'],
      ['s-perfil', 'person', 'Perfil']
    ].map(([id, ic, label]) => 
      `<button class="navitem" onclick="show('${id}')"><span class="ic">${ICONS[ic]}</span>${label}</button>`
    ).join('');
  }

  renderLoginDemoCards();
}

// RENDERIZAÇÃO DOS CARDS DE PACIENTES NA TELA DE LOGIN
function renderLoginDemoCards() {
  const demoChips = document.getElementById('demo-chips');
  if (!demoChips) return;

  demoChips.innerHTML = USERS_DB.map(u => {
    const pMatch = PATIENTS.find(p => p.id === u.patientId);
    if (u.role === 'physio') {
      return `
        <div class="demo-user-card physio-chip" onclick="quickLogin('${u.email}')">
          <div style="font-weight:700; color:var(--teal-deep);">${u.nome}</div>
          <div style="font-size:11px; color:var(--ink-soft);">Acesso Clínico Fisioterapeuta</div>
        </div>
      `;
    }
    return `
      <div class="demo-user-card" onclick="quickLogin('${u.email}')">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-weight:700; color:var(--ink);">${pMatch ? pMatch.name : u.email}</span>
          <span class="tag tag-teal" style="font-size:10px;">${pMatch ? pMatch.exercises.length : 0} exercícios</span>
        </div>
        <div style="font-size:11px; color:var(--teal-deep); font-weight:600; margin-top:2px;">${pMatch ? pMatch.condition : 'Paciente'}</div>
      </div>
    `;
  }).join('');
}

function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    target.scrollTop = 0;
  }
  if (id === 's-evolucao') renderEvolution();
  if (id === 's-exercicios') renderExerciciosScreen();
  if (id === 's-perfil') renderProfileScreen();
  syncNav(id);
}

function syncNav(id) {
  const bar = state.role === 'patient' 
    ? document.getElementById('nav-patient') 
    : document.getElementById('nav-physio');
  if (!bar || bar.style.display === 'none') return;

  const map = state.role === 'patient'
    ? { 's-dash': 0, 's-exercicios': 1, 's-exercise': 1, 's-ia-analysis': 1, 's-checkin': 1, 's-evolucao': 2, 's-perfil': 3, 's-sobre': 3 }
    : { 's-physio-dash': 0, 's-physio-list': 1, 's-physio-patient': 1, 's-exercise': 1, 's-ia-analysis': 1, 's-evolucao': 2, 's-perfil': 3, 's-sobre': 3 };

  const idx = map[id];
  bar.querySelectorAll('.navitem').forEach((b, i) => b.classList.toggle('active', i === idx));
}

function doSignup() {
  const nome = document.getElementById('signup-nome').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const senha = document.getElementById('signup-senha').value;

  if (!nome) {
    alert('Por favor, informe seu nome completo.');
    return;
  }
  if (!email) {
    alert('Por favor, informe seu e-mail.');
    return;
  }

  const id = 'novo-' + Date.now();
  const novo = {
    id: id,
    name: nome,
    condition: 'Em avaliação inicial',
    objective: 'Aguardando avaliação cinético-funcional com fisioterapeuta.',
    guidelines: 'Aguardando definição da conduta cinesioterapêutica individualizada.',
    exercises: [],
    sessions: 0,
    completed: 0,
    evolution: 0,
    freq: '—',
    weekly: [0, 0, 0, 0],
    lastSession: '—',
    insight: 'Ainda não há dados suficientes para gerar um insight — aguardando a prescrição do fisioterapeuta.',
    obs: '',
    history: []
  };

  PATIENTS.push(novo);
  USERS_DB.push({
    email: email,
    pass: senha || '1234',
    role: 'patient',
    patientId: id
  });

  saveStorage();
  goPatient(id);
}

function doLogin() {
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const senha = document.getElementById('login-senha').value;
  const err = document.getElementById('login-error');

  if (!email) {
    err.textContent = 'Por favor, digite seu e-mail de acesso.';
    err.style.display = 'block';
    return;
  }
  if (!senha) {
    err.textContent = 'Por favor, digite sua senha.';
    err.style.display = 'block';
    return;
  }

  const user = USERS_DB.find(u => u.email.toLowerCase() === email);
  if (!user || user.pass !== senha) {
    err.textContent = 'E-mail ou senha inválidos. Utilize uma das contas de demonstração abaixo.';
    err.style.display = 'block';
    return;
  }

  err.style.display = 'none';
  if (user.role === 'physio') {
    goPhysio(user.nome);
  } else {
    goPatient(user.patientId);
  }
}

function quickLogin(email) {
  const user = USERS_DB.find(u => u.email === email);
  if (!user) return;
  document.getElementById('login-email').value = user.email;
  document.getElementById('login-senha').value = user.pass;
  if (user.role === 'physio') {
    goPhysio(user.nome);
  } else {
    goPatient(user.patientId);
  }
}

function goPatient(patientId) {
  state.role = 'patient';
  state.completed = {};
  const p = PATIENTS.find(pt => pt.id === patientId) || PATIENTS[0];
  state.currentPatient = p;

  document.getElementById('nav-patient').style.display = 'flex';
  document.getElementById('nav-physio').style.display = 'none';

  document.getElementById('perfil-nome').textContent = p.name;
  document.getElementById('perfil-tipo').textContent = 'Paciente · ' + p.condition;
  document.getElementById('dash-greeting').textContent = 'Olá, ' + p.name.split(' ')[0];
  document.getElementById('dash-condition').textContent = p.condition;
  
  const dashGoal = document.getElementById('dash-goal');
  if (dashGoal) dashGoal.textContent = p.objective || 'Melhora da mobilidade e fortalecimento muscular.';

  renderDashboard();
  show('s-dash');
}

function goPhysio(nome) {
  state.role = 'physio';
  state.currentPatient = null;

  document.getElementById('nav-physio').style.display = 'flex';
  document.getElementById('nav-patient').style.display = 'none';

  const n = nome || 'Dr. Ana Ribeiro';
  document.getElementById('perfil-nome').textContent = n;
  document.getElementById('perfil-tipo').textContent = 'Fisioterapeuta';
  document.getElementById('physio-greeting').textContent = 'Olá, ' + n;
  document.getElementById('physio-patient-count').textContent = PATIENTS.length;
  document.getElementById('physio-session-count').textContent = PATIENTS.reduce((sum, p) => sum + p.sessions, 0);

  renderPatientList();
  renderAttention();
  show('s-physio-dash');
}

function renderAttention() {
  const flagged = PATIENTS.filter(p => p.history && p.history[0] && p.history[0].rating === 'Difícil');
  const box = document.getElementById('physio-attention');
  if (flagged.length === 0) {
    box.innerHTML = '<p class="empty-state" style="padding:16px;">Nenhum paciente sinalizou dificuldade na última sessão.</p>';
    return;
  }
  box.innerHTML = flagged.map(p => `
    <div class="exrow" onclick="openPatient('${p.id}')">
      <div>
        <div class="exname">${p.name}</div>
        <div class="exsets">${p.condition}</div>
      </div>
      <span class="tag tag-amber">Atenção (Difícil)</span>
    </div>
  `).join('');
}

function renderPatientList() {
  const list = document.getElementById('physio-list');
  list.innerHTML = PATIENTS.map(p => `
    <div class="exrow" onclick="openPatient('${p.id}')">
      <div>
        <div class="exname">${p.name}</div>
        <div class="exsets">${p.condition} (${p.exercises.length} exercícios)</div>
      </div>
      <span class="tag tag-teal">${p.evolution}% aderência</span>
    </div>
  `).join('');
}

function openPatient(id) {
  const p = PATIENTS.find(pt => pt.id === id);
  state.currentPatient = p;
  document.getElementById('pp-name').textContent = p.name;
  document.getElementById('pp-condition').textContent = p.condition;
  document.getElementById('pp-sessions').textContent = p.sessions;
  document.getElementById('pp-completed').textContent = p.completed;
  document.getElementById('pp-evolution').textContent = p.evolution + '%';
  document.getElementById('pp-lastsession').textContent = p.lastSession;
  document.getElementById('pp-insight').textContent = p.insight;
  document.getElementById('pp-obs').value = p.obs || '';

  document.getElementById('pp-exlist').innerHTML = p.exercises.length ? p.exercises.map(exid => {
    const ex = EXERCISES.find(e => e.id === exid);
    if (!ex) return '';
    return `<div class="exrow" onclick="openExercise('${ex.id}', 'physio')">
      <div>
        <div class="exname">${ex.name}</div>
        <div class="exsets">${ex.objective || ex.why}</div>
      </div>
      <span class="exsets" style="font-weight:600;">${ex.sets}</span>
    </div>`;
  }).join('') : '<p class="empty-state">Nenhum exercício prescrito ainda.</p>';

  show('s-physio-patient');
}

function savePhysioObservation() {
  if (!state.currentPatient) return;
  const obs = document.getElementById('pp-obs').value.trim();
  state.currentPatient.obs = obs;
  saveStorage();
  alert('Observação clínica do fisioterapeuta registrada com sucesso!');
}

function myExercises() {
  const ids = state.currentPatient ? state.currentPatient.exercises : [];
  return ids.map(id => EXERCISES.find(e => e.id === id)).filter(Boolean);
}

function renderDashboard() {
  const mine = myExercises();
  const list = document.getElementById('dash-exlist');

  if (mine.length === 0) {
    list.innerHTML = '<p class="empty-state">Seu fisioterapeuta ainda não definiu sua rotina de exercícios.</p>';
    document.getElementById('dash-start-btn').style.display = 'none';
    document.getElementById('dash-progress-txt').textContent = '0 de 0 concluídos';
    document.getElementById('dash-progress-fill').style.width = '0%';
    return;
  }

  document.getElementById('dash-start-btn').style.display = 'block';
  list.innerHTML = mine.map(ex => {
    const done = state.completed[ex.id];
    const tag = done 
      ? '<span class="tag tag-teal">Concluído</span>' 
      : '<span class="tag tag-amber">Pendente</span>';
    return `<div class="exrow" onclick="openExercise('${ex.id}', 'dash')">
      <div style="flex:1; padding-right:8px;">
        <div class="exname">${ex.name}</div>
        <div class="exsets" style="margin-top:2px;">${ex.objective || ex.why}</div>
        <div style="font-size:11px; color:var(--teal-deep); font-weight:600; margin-top:3px;">${ex.sets} &middot; ${ex.time}</div>
      </div>
      ${tag}
    </div>`;
  }).join('');

  const doneCount = Object.keys(state.completed).length;
  document.getElementById('dash-progress-fill').style.width = Math.round((doneCount / mine.length) * 100) + '%';
  document.getElementById('dash-progress-txt').textContent = `${doneCount} de ${mine.length} concluídos`;

  const btn = document.getElementById('dash-start-btn');
  btn.textContent = doneCount === 0 
    ? 'Começar treino' 
    : (doneCount < mine.length ? 'Continuar treino' : 'Treino concluído — ver evolução');
}

function renderExerciciosScreen() {
  const mine = myExercises();
  const box = document.getElementById('exlist-full');
  box.innerHTML = mine.length ? mine.map(ex => {
    const done = state.completed[ex.id];
    const tag = done 
      ? '<span class="tag tag-teal">Concluído</span>' 
      : '<span class="tag tag-amber">Pendente</span>';
    return `<div class="exrow" onclick="openExercise('${ex.id}', 'exercicios')">
      <div style="flex:1; padding-right:8px;">
        <div class="exname">${ex.name}</div>
        <div class="exsets" style="margin-top:2px;">${ex.objective || ex.why}</div>
        <div style="font-size:11px; color:var(--ink-soft); margin-top:3px;"><b>Articulação:</b> ${ex.joints.split('(')[0]} &middot; <b>Alavanca:</b> ${ex.lever.split('—')[0]}</div>
      </div>
      ${tag}
    </div>`;
  }).join('') : '<p class="empty-state">Seu fisioterapeuta ainda não definiu sua rotina de exercícios.</p>';
}

// RENDERIZAÇÃO DA TELA DE PERFIL DO PACIENTE (Seção 3.B)
function renderProfileScreen() {
  const p = state.currentPatient;
  if (!p) return;

  const nomeEl = document.getElementById('perfil-nome');
  if (nomeEl) nomeEl.textContent = p.name;

  const tipoEl = document.getElementById('perfil-tipo');
  if (tipoEl) tipoEl.textContent = 'Paciente · ' + p.condition;

  const avatarEl = document.getElementById('perfil-avatar');
  if (avatarEl) {
    const initials = p.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    avatarEl.textContent = initials;
  }

  const objEl = document.getElementById('perfil-objetivo');
  if (objEl) objEl.textContent = p.objective || 'Fortalecimento e mobilidade articular orientada.';

  const oriEl = document.getElementById('perfil-orientacoes');
  if (oriEl) oriEl.textContent = p.guidelines || 'Seguir as orientações de frequência e postura do fisioterapeuta.';

  const exListEl = document.getElementById('perfil-exlist');
  if (exListEl) {
    const mine = myExercises();
    exListEl.innerHTML = mine.map(ex => `
      <div class="exrow" onclick="openExercise('${ex.id}', 'perfil')">
        <div>
          <div class="exname">${ex.name}</div>
          <div class="exsets">${ex.sets} &middot; ${ex.time}</div>
        </div>
        <span class="tag tag-teal" style="font-size:11px;">Visualizar &rarr;</span>
      </div>
    `).join('');
  }

  const chipsEl = document.getElementById('perfil-patient-chips');
  if (chipsEl) {
    chipsEl.innerHTML = PATIENTS.map(pt => `
      <button class="chip ${pt.id === p.id ? 'active' : ''}" onclick="goPatient('${pt.id}')">
        ${pt.name} (${pt.condition.split('(')[0].trim()})
      </button>
    `).join('');
  }
}

function beginTraining() {
  const doneCount = Object.keys(state.completed).length;
  const mine = myExercises();
  if (doneCount >= mine.length) {
    show('s-evolucao');
    return;
  }
  const next = mine.find(ex => !state.completed[ex.id]);
  if (next) {
    openExercise(next.id, 'dash');
  }
}

function openExercise(id, origin) {
  const ex = EXERCISES.find(e => e.id === id);
  if (!ex) return;

  state.current = ex;
  state.exerciseOrigin = origin || 'dash';
  state.iaAnalysisCompleted = false;

  document.getElementById('ex-title').textContent = ex.name;
  document.getElementById('ex-sets').textContent = ex.sets;
  document.getElementById('ex-time').textContent = ex.time;
  
  const objEl = document.getElementById('ex-objective');
  if (objEl) objEl.textContent = ex.objective || ex.why;

  const precEl = document.getElementById('ex-precautions');
  if (precEl) {
    precEl.innerHTML = (ex.precautions || [
      'Respeite a sensação de conforto e não insista em movimentos com dor aguda.',
      'Mantenha a respiração suave durante toda a execução.',
      'Consulte seu fisioterapeuta caso sinta insegurança na postura.'
    ]).map(p => `<li>${p}</li>`).join('');
  }

  document.getElementById('ex-joints').textContent = ex.joints;
  
  const planesEl = document.getElementById('ex-planes');
  if (planesEl) planesEl.textContent = ex.planes || 'Plano Sagital · Eixo Látero-Lateral';
  
  document.getElementById('ex-moves').textContent = ex.moves;
  document.getElementById('ex-muscles').textContent = ex.muscles;
  
  const antSynEl = document.getElementById('ex-antagonists-synergists');
  if (antSynEl) antSynEl.textContent = ex.antagonistsSynergists || 'Antagonistas e estabilizadores articulares.';
  
  const leverEl = document.getElementById('ex-lever');
  if (leverEl) leverEl.textContent = ex.lever || '3ª Classe (Interpotente)';
  
  document.getElementById('ex-why').textContent = ex.why;
  document.getElementById('ex-steps').innerHTML = ex.steps.map(s => `<li>${s}</li>`).join('');

  // Demonstração visual: GIF ou SVG vetorial anatômico
  const gifImg = document.getElementById('ex-gif-img');
  const svgContainer = document.getElementById('ex-svg-container');
  const gifCaption = document.getElementById('ex-gif-caption');

  if (ex.visualType === 'gif' && ex.gif) {
    if (gifImg) {
      gifImg.src = ex.gif;
      gifImg.alt = 'Demonstração de ' + ex.name;
      gifImg.style.display = 'block';
    }
    if (svgContainer) svgContainer.style.display = 'none';
  } else {
    if (gifImg) gifImg.style.display = 'none';
    if (svgContainer) {
      svgContainer.style.display = 'block';
      svgContainer.innerHTML = EXERCISE_SVGS[ex.svgId] || '<p class="empty-state">Ilustração anatômica em preparação.</p>';
    }
  }

  if (gifCaption && ex.caption) {
    gifCaption.textContent = ex.caption;
  }

  const fromPhysio = state.exerciseOrigin === 'physio';
  document.getElementById('ex-complete-btn').style.display = fromPhysio ? 'none' : 'block';
  document.getElementById('ex-voltar-btn').style.display = fromPhysio ? 'block' : 'none';

  show('s-exercise');
}

// INICIAR FLUXO DE ANÁLISE POR IA (SIMULAÇÃO EDUCATIVA)
function startIaFlow() {
  state.iaAnalysisCompleted = true;
  renderIaScreen();
  show('s-ia-analysis');
}

// RENDERIZAR TELA DE ANÁLISE BIOMECÂNICA POR IA (MEDIAPIPE POSE)
function renderIaScreen() {
  const ex = state.current;
  if (!ex) return;

  state.isCompensationSimulated = false;
  state.isSkeletonVisible = true;
  state.currentMotorStep = 1;

  document.getElementById('ia-title').textContent = 'Análise por IA · ' + ex.name;

  // Visual subjacente
  const gifEl = document.getElementById('ia-gif-img');
  const svgUnder = document.getElementById('ia-svg-under');
  if (ex.visualType === 'gif' && ex.gif) {
    if (gifEl) {
      gifEl.src = ex.gif;
      gifEl.style.display = 'block';
    }
    if (svgUnder) svgUnder.style.display = 'none';
  } else {
    if (gifEl) gifEl.style.display = 'none';
    if (svgUnder) {
      svgUnder.style.display = 'block';
      svgUnder.innerHTML = EXERCISE_SVGS[ex.svgId] || '';
    }
  }

  // Atualiza marcos anatômicos do MediaPipe Pose
  const lm = ex.aiLandmarks || {
    hip: { cx: 135, cy: 65, label: 'Ponto Superior' },
    knee: { cx: 152, cy: 120, label: 'Ponto Articular' },
    ankle: { cx: 140, cy: 175, label: 'Ponto Distal' },
    arc: 'M 145 106 A 18 18 0 0 1 155 134'
  };

  const ptHip = document.getElementById('ia-pt-hip');
  const ptKnee = document.getElementById('ia-pt-knee');
  const ptAnkle = document.getElementById('ia-pt-ankle');
  const segThigh = document.getElementById('ia-seg-thigh');
  const segShank = document.getElementById('ia-seg-shank');
  const angleArc = document.getElementById('ia-angle-arc');
  const plumbLine = document.getElementById('ia-plumb-line');
  const lblHip = document.getElementById('ia-lbl-hip');
  const lblKnee = document.getElementById('ia-lbl-knee');
  const lblAnkle = document.getElementById('ia-lbl-ankle');

  if (ptHip) { ptHip.setAttribute('cx', lm.hip.cx); ptHip.setAttribute('cy', lm.hip.cy); ptHip.setAttribute('fill', '#3fd6bf'); }
  if (ptKnee) { ptKnee.setAttribute('cx', lm.knee.cx); ptKnee.setAttribute('cy', lm.knee.cy); ptKnee.setAttribute('fill', '#0d7d6f'); ptKnee.setAttribute('stroke', '#3fd6bf'); }
  if (ptAnkle) { ptAnkle.setAttribute('cx', lm.ankle.cx); ptAnkle.setAttribute('cy', lm.ankle.cy); ptAnkle.setAttribute('fill', '#3fd6bf'); }
  
  if (segThigh) {
    segThigh.setAttribute('x1', lm.hip.cx); segThigh.setAttribute('y1', lm.hip.cy);
    segThigh.setAttribute('x2', lm.knee.cx); segThigh.setAttribute('y2', lm.knee.cy);
    segThigh.setAttribute('stroke', '#3fd6bf');
  }
  if (segShank) {
    segShank.setAttribute('x1', lm.knee.cx); segShank.setAttribute('y1', lm.knee.cy);
    segShank.setAttribute('x2', lm.ankle.cx); segShank.setAttribute('y2', lm.ankle.cy);
    segShank.setAttribute('stroke', '#3fd6bf');
  }
  if (angleArc && lm.arc) {
    angleArc.setAttribute('d', lm.arc);
    angleArc.setAttribute('stroke', '#dfb066');
  }
  if (plumbLine) {
    plumbLine.setAttribute('x1', lm.hip.cx);
    plumbLine.setAttribute('x2', lm.hip.cx);
  }

  if (lblHip) lblHip.textContent = lm.hip.label;
  if (lblKnee) { lblKnee.textContent = lm.knee.label; lblKnee.setAttribute('fill', '#dfb066'); }
  if (lblAnkle) lblAnkle.textContent = lm.ankle.label;

  // Atualiza métricas
  const m = ex.aiMetrics || {
    angle: '88°', angleTarget: '✓ Alvo atingido',
    align: '0° desvio', alignStatus: '✓ Alinhamento seguro',
    symm: '50% D · 50% E', symmStatus: '✓ Balanceado',
    time: '2.0 s', timeStatus: '✓ Controlado'
  };

  document.getElementById('ia-val-angle').textContent = m.angle;
  document.getElementById('ia-status-angle').textContent = m.angleTarget;
  document.getElementById('ia-val-align').textContent = m.align;
  document.getElementById('ia-status-align').textContent = m.alignStatus;
  document.getElementById('ia-val-symm').textContent = m.symm;
  document.getElementById('ia-status-symm').textContent = m.symmStatus;
  document.getElementById('ia-val-time').textContent = m.time;
  document.getElementById('ia-status-time').textContent = m.timeStatus;

  const angleBadge = document.getElementById('ia-badge-angle');
  if (angleBadge) {
    angleBadge.textContent = 'Ângulo: ' + m.angle;
    angleBadge.style.background = 'rgba(13, 125, 111, 0.92)';
  }
  const trackState = document.getElementById('ia-tracking-state');
  if (trackState) trackState.textContent = 'Simulação Ativa (33 Pontos)';

  // Feedback clínico positivo
  document.getElementById('ia-feedback-text').textContent = ex.aiFeedbackPositive || 'Movimento executado dentro do padrão cinesiológico recomendado.';

  // Ficha biomecânica
  document.getElementById('ia-bio-joints').textContent = ex.joints;
  document.getElementById('ia-bio-planes').textContent = ex.planes || 'Plano Sagital · Eixo Látero-Lateral';
  document.getElementById('ia-bio-agonists').textContent = ex.muscles;
  document.getElementById('ia-bio-antagonists').textContent = ex.antagonistsSynergists ? ex.antagonistsSynergists.split('. ')[0] : 'Antagonistas fisiológicos';
  document.getElementById('ia-bio-synergists').textContent = ex.antagonistsSynergists || 'Estabilizadores do core e pelve';
  document.getElementById('ia-bio-contraction').textContent = ex.contraction || 'Excêntrica / Concêntrica';
  document.getElementById('ia-bio-lever').textContent = ex.lever || '3ª Classe (Interpotente)';
  document.getElementById('ia-bio-why').textContent = ex.why;

  // Botões
  const compBtn = document.getElementById('btn-valgo-txt');
  if (compBtn) compBtn.textContent = 'Simular Compensação Postural';
  const skelBtn = document.getElementById('btn-skel-txt');
  if (skelBtn) skelBtn.textContent = 'Ocultar Esqueleto';

  // Inicializa stepper do controle motor
  selectMotorStep(1);
}

// SIMULAÇÃO INTERATIVA DE COMPENSAÇÃO POSTURAL (VALGO / BÁSCULA / COMPENSAÇÃO)
function toggleIaValgusSimulation() {
  const ex = state.current;
  if (!ex) return;

  state.isCompensationSimulated = !state.isCompensationSimulated;
  const lm = ex.aiLandmarks;
  if (!lm) return;

  const ptKnee = document.getElementById('ia-pt-knee');
  const segThigh = document.getElementById('ia-seg-thigh');
  const segShank = document.getElementById('ia-seg-shank');
  const lblKnee = document.getElementById('ia-lbl-knee');
  const badgeAngle = document.getElementById('ia-badge-angle');
  const valAlign = document.getElementById('ia-val-align');
  const statusAlign = document.getElementById('ia-status-align');
  const feedbackTxt = document.getElementById('ia-feedback-text');
  const btnTxt = document.getElementById('btn-valgo-txt');

  if (state.isCompensationSimulated) {
    const medialCx = lm.knee.cx - 22;
    if (ptKnee) {
      ptKnee.setAttribute('cx', medialCx);
      ptKnee.setAttribute('fill', '#b7423f');
      ptKnee.setAttribute('stroke', '#ffffff');
    }
    if (segThigh) {
      segThigh.setAttribute('x2', medialCx);
      segThigh.setAttribute('stroke', '#dfb066');
    }
    if (segShank) {
      segShank.setAttribute('x1', medialCx);
      segShank.setAttribute('stroke', '#dfb066');
    }
    if (lblKnee) {
      lblKnee.setAttribute('x', medialCx - 70);
      lblKnee.setAttribute('fill', '#b7423f');
      lblKnee.textContent = 'Desvio (+14°)';
    }

    if (badgeAngle) {
      badgeAngle.textContent = '⚠ Alerta: Desvio Detectado';
      badgeAngle.style.background = 'rgba(183, 66, 63, 0.95)';
    }

    if (valAlign) valAlign.textContent = 'Compensação 14°';
    if (statusAlign) {
      statusAlign.textContent = '⚠ Desvio Postural';
      statusAlign.style.background = '#fbeaea';
      statusAlign.style.color = 'var(--coral)';
    }

    if (feedbackTxt) {
      feedbackTxt.textContent = ex.aiFeedbackCorrection || 'Atenção ao alinhamento postural: Houve aproximação excessiva da linha média corporal. Na próxima repetição, ative com mais ênfase a musculatura estabilizadora e corrija a trajetória articular.';
    }

    if (btnTxt) btnTxt.textContent = 'Restaurar Padrão Correto';
  } else {
    renderIaScreen();
  }
}

// OCULTAR/EXIBIR ESQUELETO DE RASTREAMENTO
function toggleIaSkeleton() {
  state.isSkeletonVisible = !state.isSkeletonVisible;
  const svg = document.getElementById('ia-hud-svg');
  const btnTxt = document.getElementById('btn-skel-txt');
  if (svg) {
    svg.style.display = state.isSkeletonVisible ? 'block' : 'none';
  }
  if (btnTxt) {
    btnTxt.textContent = state.isSkeletonVisible ? 'Ocultar Esqueleto' : 'Exibir Esqueleto';
  }
}

// SELEÇÃO DO PASSO NO CICLO DE CONTROLE MOTOR
function selectMotorStep(stepNum) {
  state.currentMotorStep = stepNum;
  const btns = document.querySelectorAll('#motor-stepper .motor-step-btn');
  btns.forEach((b, idx) => {
    b.classList.toggle('active', (idx + 1) === stepNum);
  });

  const ex = state.current;
  if (!ex || !ex.motorSteps || !ex.motorSteps[stepNum - 1]) return;

  const st = ex.motorSteps[stepNum - 1];
  const titleEl = document.getElementById('motor-step-title');
  const descEl = document.getElementById('motor-step-desc');
  if (titleEl) titleEl.textContent = st.title;
  if (descEl) descEl.textContent = st.desc;
}

// AVANÇAR DA IA PARA O CHECK-IN
function proceedFromIaToCheckin() {
  state.iaAnalysisCompleted = true;
  openCheckin();
}

function iaBack() {
  show('s-exercise');
}

function exerciseBack() {
  if (state.exerciseOrigin === 'physio') {
    show('s-physio-patient');
  } else if (state.exerciseOrigin === 'exercicios') {
    show('s-exercicios');
  } else if (state.exerciseOrigin === 'perfil') {
    show('s-perfil');
  } else {
    show('s-dash');
  }
}

function openCheckin() {
  document.getElementById('check-exname').textContent = state.current.name;
  document.getElementById('check-exsets').textContent = state.current.sets.replace('×', ' séries × ') + ' repetições';
  document.getElementById('check-note').value = '';
  state.rating = null;
  document.querySelectorAll('#s-checkin .seg-btn').forEach(b => b.classList.remove('active'));

  const iaStatusBox = document.getElementById('check-ia-status');
  const iaStatusTxt = document.getElementById('check-ia-text');
  if (iaStatusBox && iaStatusTxt) {
    if (state.iaAnalysisCompleted) {
      iaStatusBox.style.display = 'flex';
      iaStatusBox.style.background = 'var(--teal-soft)';
      iaStatusBox.style.borderLeftColor = 'var(--teal)';
      const angle = state.current.aiMetrics ? state.current.aiMetrics.angle : '88°';
      iaStatusTxt.textContent = `Análise por IA concluída: Alinhamento seguro (${angle})`;
      iaStatusTxt.style.color = 'var(--teal-deep)';
    } else {
      iaStatusBox.style.display = 'flex';
      iaStatusBox.style.background = 'var(--surface)';
      iaStatusBox.style.borderLeftColor = 'var(--amber)';
      iaStatusTxt.textContent = 'Check-in manual (sem simulação de visão computacional)';
      iaStatusTxt.style.color = 'var(--amber)';
    }
  }

  show('s-checkin');
}

function setRating(val, el) {
  state.rating = val;
  document.querySelectorAll('#s-checkin .seg-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

function saveCheckin(dest) {
  state.completed[state.current.id] = true;

  if (state.currentPatient) {
    const ratingMap = { facil: 'Tranquilo', medio: 'Moderado', dificil: 'Difícil' };
    const ratingLabel = ratingMap[state.rating] || 'Tranquilo';
    const note = document.getElementById('check-note').value.trim();

    state.currentPatient.completed = (state.currentPatient.completed || 0) + 1;
    state.currentPatient.lastSession = `hoje · ${state.current.name} · ${ratingLabel}`;

    if (!state.currentPatient.history) state.currentPatient.history = [];
    state.currentPatient.history.unshift({
      label: `Sessão ${ (state.currentPatient.sessions || 0) + 1 } — ${state.current.name}`,
      rating: ratingLabel,
      note: note
    });

    const mine = myExercises();
    const doneCount = Object.keys(state.completed).length;
    if (doneCount >= mine.length && mine.length > 0) {
      state.currentPatient.sessions = (state.currentPatient.sessions || 0) + 1;
    }

    saveStorage();
  }

  renderDashboard();

  if (dest === 'evolucao') {
    show('s-evolucao');
    return;
  }

  const origin = state.exerciseOrigin;
  if (origin === 'exercicios') {
    renderExerciciosScreen();
    show('s-exercicios');
    return;
  } else if (origin === 'perfil') {
    renderProfileScreen();
    show('s-perfil');
    return;
  }

  const next = myExercises().find(ex => !state.completed[ex.id]);
  if (next) {
    openExercise(next.id, 'dash');
  } else {
    show('s-evolucao');
  }
}

function renderEvolution() {
  const p = state.currentPatient || PATIENTS[0];
  document.getElementById('ev-title').textContent = state.role === 'patient' 
    ? 'Minha evolução' 
    : 'Evolução — ' + p.name;
  document.getElementById('ev-sessions').textContent = p.sessions;
  document.getElementById('ev-completed').textContent = p.completed;
  document.getElementById('ev-freq').textContent = p.freq;

  const weeklyBars = p.weekly || [50, 60, 70, 80];
  document.getElementById('ev-bars').innerHTML = weeklyBars.map((v, i) => `
    <div class="barcol">
      <div class="bar" style="height:${Math.max(v, 3)}%;"></div>
      <div class="bar-lbl">S${i + 1} · ${v}%</div>
    </div>
  `).join('');

  document.getElementById('ev-insight').textContent = p.insight;
  document.getElementById('ev-history').innerHTML = p.history && p.history.length ? p.history.map(h => {
    const tagClass = h.rating === 'Difícil' || h.rating === 'Moderado' ? 'tag-amber' : 'tag-teal';
    const noteDisplay = h.note ? `<div style="font-size:11px; color:var(--ink-soft); margin-top:2px;">"${h.note}"</div>` : '';
    return `
      <div class="exrow" style="align-items:flex-start;">
        <div>
          <span class="exname">${h.label}</span>
          ${noteDisplay}
        </div>
        <span class="tag ${tagClass}">${h.rating}</span>
      </div>
    `;
  }).join('') : '<p class="empty-state">Ainda não há sessões registradas.</p>';
}

// Inicializar na carga do documento
document.addEventListener('DOMContentLoaded', initApp);
