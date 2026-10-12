/**
 * Fisio em Casa - Aplicação de Fisioterapia Domiciliar
 * Protótipo acadêmico (A3 - Movimento Humano / USJT)
 */

const ICONS = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11.5 12 4l8 7.5"/><path d="M6 10.5V20h5v-6h2v6h5v-9.5"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5 7h14M5 12h14M5 17h14"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16l3-4 3 3 4-6"/></svg>',
  person: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.3"/><path d="M5 20c1.2-4 4-5.6 7-5.6s5.8 1.6 7 5.6"/></svg>'
};

const EXERCISES = [
  {
    id: 'agachamento',
    name: 'Agachamento',
    sets: '3×10',
    time: '~4 min',
    gif: 'assets/gifs/agachamento.gif',
    caption: 'Posição inicial ↔ Posição final (Agachamento livre)',
    joints: 'Coxofemoral (esferoide), Femorotibial/Femoropatelar (gínglimo bicondilar) e Talocrural (gínglimo)',
    planes: 'Plano Sagital em torno do Eixo Látero-Lateral',
    moves: 'Flexão de quadril e joelho com dorsiflexão (descida); Extensão de quadril e joelho com flexão plantar (subida)',
    muscles: 'Quadríceps femoral (reto femoral, vasto lateral, vasto medial, vasto intermédio) e Glúteo máximo',
    antagonistsSynergists: 'Antagonistas: Isquiotibiais e Iliopsoas. Sinergistas/Estabilizadores: Glúteo médio e mínimo (prevenção do valgo dinâmico), Tríceps sural, Eretores da espinha e Transverso do abdômen',
    contraction: 'Excêntrica na descida (controle gravitacional); Concêntrica na subida (vencendo a gravidade)',
    lever: '3ª Classe (Interpotente) — Potência muscular aplicada entre o fulcro articular e a resistência corporal',
    why: 'Exercício em Cadeia Cinética Fechada (CCF) com alta coativação muscular, reduzindo forças de cisalhamento patelofemoral e fortalecendo quadríceps e estabilizadores pélvicos em gonartrose.',
    steps: [
      'Posicione os pés de forma confortável na largura dos ombros com pontas ligeiramente para fora.',
      'Mantenha o tronco ereto, escápulas aduzidas e abdômen contraído.',
      'Flexione quadril e joelhos simulando sentar em uma cadeira.',
      'Desça de maneira controlada até aproximadamente 90° de flexão de joelhos.',
      'Retorne à posição inicial empurrando o chão com calcanhares, alinhando os joelhos com o 2º dedo do pé.'
    ],
    aiLandmarks: {
      hip: { cx: 135, cy: 65, label: 'Quadril (82°)' },
      knee: { cx: 152, cy: 120, label: 'Joelho (88°)' },
      ankle: { cx: 140, cy: 175, label: 'Tornozelo (22°)' },
      arc: 'M 145 106 A 18 18 0 0 1 155 134'
    },
    aiMetrics: {
      angle: '88°',
      angleTarget: '✓ Alvo: 80°–90°',
      align: '0° desvio',
      alignStatus: '✓ Sem valgo dinâmico',
      symm: '51% D · 49% E',
      symmStatus: '✓ Carga balanceada',
      time: '2.1 s',
      timeStatus: '✓ Cadência controlada'
    },
    aiFeedback: 'Excelente padrão biomecânico! Joelho alinhado com o 2º dedo do pé, sem aproximação medial excessiva (valgo dinâmico preservado). Amplitude de 88° atingida com transição suave.',
    motorSteps: [
      {
        title: 'Etapa 1: Execução do Paciente',
        desc: 'O paciente inicia o agachamento gerando impulsos motores eferentes via córtex motor primário e tratos corticoespinhais para a musculatura extensora dos membros inferiores.'
      },
      {
        title: 'Etapa 2: Análise Sensorial e IA',
        desc: 'A visão computacional rastreia em tempo real os marcos articulares (trocânter maior, côndilo femoral e maléolo lateral), calculando o ângulo e o alinhamento frontal.'
      },
      {
        title: 'Etapa 3: Feedback Extrínseco (CR e CP)',
        desc: 'O sistema fornece Conhecimento de Resultados - CR (meta de 88° alcançada) e Conhecimento de Performance - CP (joelhos sem colapso medial), complementando o feedback proprioceptivo intrínseco.'
      },
      {
        title: 'Etapa 4: Correção e Ajuste Motor (Feedforward)',
        desc: 'O cerebelo e a área pré-motora processam as discrepâncias entre o movimento esperado e o realizado, recalculando o recrutamento do glúteo médio para as repetições seguintes.'
      },
      {
        title: 'Etapa 5: Nova Execução Refinada',
        desc: 'O paciente executa a repetição seguinte com alinhamento corrigido, acelerando a transição da Fase Cognitiva para a Fase Associativa da aprendizagem motora.'
      }
    ]
  },
  {
    id: 'panturrilha',
    name: 'Elevação de panturrilha',
    sets: '3×12',
    time: '~3 min',
    gif: 'assets/gifs/panturrilha.gif',
    caption: 'Calcanhares no chão ↔ Elevação na ponta dos pés',
    joints: 'Talocrural (sinovial gínglimo) e Subtalar (sinovial plana)',
    planes: 'Plano Sagital em torno do Eixo Látero-Lateral',
    moves: 'Flexão plantar (elevação concêntrica) e dorsiflexão controlada (descida excêntrica)',
    muscles: 'Tríceps sural: Gastrocnêmio medial, Gastrocnêmio lateral e Sóleo',
    antagonistsSynergists: 'Antagonistas: Tibial anterior, extensor longo dos dedos e hálux. Sinergistas: Tibial posterior, fibular longo e curto',
    contraction: 'Concêntrica na elevação do calcanhar; Excêntrica no retorno lento ao solo',
    lever: '2ª Classe (Inter-resistente) — Apoio nas cabeças dos metatarsos, resistência no tornozelo e potência no tendão calcâneo. Grande vantagem mecânica.',
    why: 'Fortalece o complexo gastro-sóleo, essencial para a propulsão da marcha, equilíbrio estático e prevenção primária de quedas.',
    steps: [
      'Fique em pé próximo a uma parede ou apoio fixo para equilíbrio.',
      'Mantenha os pés paralelos e o tronco alinhado.',
      'Eleve os calcanhares lentamente, transferindo o peso para as cabeças dos metatarsos.',
      'Sustente a contração máxima por 1 segundo no topo da flexão plantar.',
      'Desça de maneira controlada até encostar suavemente os calcanhares no solo.'
    ],
    aiLandmarks: {
      hip: { cx: 135, cy: 50, label: 'Pelve (0°)' },
      knee: { cx: 138, cy: 110, label: 'Joelho (180°)' },
      ankle: { cx: 142, cy: 170, label: 'Tornozelo (45°)' },
      arc: 'M 138 155 A 14 14 0 0 1 146 175'
    },
    aiMetrics: {
      angle: '42°',
      angleTarget: '✓ Alvo: 35°–45°',
      align: '0° varo/valgo',
      alignStatus: '✓ Apoio metatarsal uniforme',
      symm: '50% D · 50% E',
      symmStatus: '✓ Simetria perfeita',
      time: '1.8 s',
      timeStatus: '✓ Isometria sustentada'
    },
    aiFeedback: 'Ótima amplitude de flexão plantar (42°)! Distribuição uniforme de carga entre o 1º e o 5º metatarso, sem desvio lateral excessivo do retropé.',
    motorSteps: [
      {
        title: 'Etapa 1: Execução do Paciente',
        desc: 'O paciente realiza a flexão plantar ativando o tríceps sural contra a carga da gravidade.'
      },
      {
        title: 'Etapa 2: Análise Sensorial e IA',
        desc: 'A IA calcula a altura de elevação do calcâneo e a inclinação varo/valgo do retropé.'
      },
      {
        title: 'Etapa 3: Feedback Extrínseco (CR e CP)',
        desc: 'Feedback imediato indicando sustentação no pico e ausência de sobrecarga lateral.'
      },
      {
        title: 'Etapa 4: Correção e Ajuste Motor',
        desc: 'Ajuste no recrutamento do tibial posterior e fibulares para manter a linha média de apoio.'
      },
      {
        title: 'Etapa 5: Nova Execução Refinada',
        desc: 'Repetição com elevação simétrica e ganho progressivo de propriocepção subtalar.'
      }
    ]
  },
  {
    id: 'joelho',
    name: 'Extensão de joelho',
    sets: '3×10',
    time: '~3 min',
    gif: 'assets/gifs/joelho.gif',
    caption: 'Joelho fletido ↔ Extensão controlada sentado',
    joints: 'Femorotibial e Femoropatelar (sinovial gínglimo / bicondilar) em Cadeia Cinética Aberta (CCA)',
    planes: 'Plano Sagital em torno do Eixo Látero-Lateral',
    moves: 'Extensão de joelho (concêntrica) e flexão controlada (excêntrica)',
    muscles: 'Quadríceps femoral (Vasto lateral, Vasto medial / VMO, Vasto intermédio e Reto femoral)',
    antagonistsSynergists: 'Antagonistas: Bíceps femoral, semitendíneo e semimembranoso. Sinergistas: Tensor da fáscia lata',
    contraction: 'Concêntrica na elevação da perna; Excêntrica na descida resistindo à gravidade',
    lever: '3ª Classe (Interpotente) — Fulcro no eixo do joelho, potência no tendão patelar e resistência no peso da perna/pé.',
    why: 'Permite fortalecimento isolado e analítico do quadríceps, fundamental para a estabilidade patelar e alívio de dor em artrose do joelho sem compressão axial.',
    steps: [
      'Sente-se com as costas totalmente apoiadas no encosto da cadeira e pés apoiados no chão.',
      'Estenda o joelho lentamente até que a perna fique alinhada horizontalmente com a coxa.',
      'Sustente a perna estendida por 1 a 2 segundos contraindo a coxa.',
      'Retorne suavemente até a flexão inicial de 90°.'
    ],
    aiLandmarks: {
      hip: { cx: 110, cy: 80, label: 'Quadril (90°)' },
      knee: { cx: 145, cy: 110, label: 'Joelho (5°)' },
      ankle: { cx: 195, cy: 115, label: 'Tornozelo (Extensão)' },
      arc: 'M 130 95 A 18 18 0 0 1 165 110'
    },
    aiMetrics: {
      angle: '175°',
      angleTarget: '✓ Extensão quase total (170°–180°)',
      align: '0° rotação',
      alignStatus: '✓ Alinhamento patelar preservado',
      symm: 'Isolado',
      symmStatus: '✓ Execução unilateral estável',
      time: '2.0 s',
      timeStatus: '✓ Isometria final mantida'
    },
    aiFeedback: 'Extensão de joelho executada com excelente controle excêntrico e ativação seletiva do vasto medial oblíquo (VMO). Sem compensação de tronco.',
    motorSteps: [
      {
        title: 'Etapa 1: Execução do Paciente',
        desc: 'Disparo de unidades motoras do quadríceps femoral contra o torque de resistência da gravidade.'
      },
      {
        title: 'Etapa 2: Análise Sensorial e IA',
        desc: 'Verificação da amplitude terminal de extensão (terminal extension) e da postura lombar.'
      },
      {
        title: 'Etapa 3: Feedback Extrínseco (CR e CP)',
        desc: 'Indicação visual do arco de movimento atingido (175°) e tempo de sustentação no pico.'
      },
      {
        title: 'Etapa 4: Correção e Ajuste Motor',
        desc: 'Prevenção de compensação pélvica ou inclinação posterior do tronco durante a fase final.'
      },
      {
        title: 'Etapa 5: Nova Execução Refinada',
        desc: 'Movimento fluido com foco na contração pura da coxa e controle motor do quadríceps.'
      }
    ]
  },
  {
    id: 'ponte',
    name: 'Ponte de glúteo',
    sets: '3×12',
    time: '~4 min',
    gif: 'assets/gifs/ponte.gif',
    caption: 'Quadril no chão ↔ Elevação com contração de glúteos',
    joints: 'Coxofemoral bilateral (esferoide) e Coluna Lombar / Sacroilíaca',
    planes: 'Plano Sagital em torno do Eixo Látero-Lateral',
    moves: 'Extensão de quadril com estabilização lombo-pélvica',
    muscles: 'Glúteo máximo e Isquiotibiais',
    antagonistsSynergists: 'Antagonistas: Iliopsoas e Reto femoral. Sinergistas/Estabilizadores: Eretores da espinha, Glúteo médio, Transverso do abdômen e Multífidos',
    contraction: 'Concêntrica na elevação pélvica; Isometria no topo; Excêntrica na descida lenta',
    lever: '3ª Classe (Interpotente) — Eixo nos joelhos/ombros com potência glútea elevando a massa corporal.',
    why: 'Ativa a cadeia posterior e estabilizadores profundos do core, restaurando o ritmo lombo-pélvico e aliviando a dor em quadros de lombalgia crônica.',
    steps: [
      'Deite-se de barriga para cima com joelhos fletidos a 90° e pés apoiados na largura do quadril.',
      'Ative o abdômen e contraia conscientemente os glúteos.',
      'Eleve a pelve até formar uma linha reta entre ombros, quadril e joelhos.',
      'Segure por 2 segundos no topo sem hiperestender a coluna lombar.',
      'Desça lentamente mantendo os glúteos sob tensão controlada.'
    ],
    aiLandmarks: {
      hip: { cx: 135, cy: 110, label: 'Pelve (180° neutra)' },
      knee: { cx: 175, cy: 135, label: 'Joelho (90°)' },
      ankle: { cx: 185, cy: 170, label: 'Tornozelo (Apoio)' },
      arc: 'M 125 110 A 18 18 0 0 1 150 120'
    },
    aiMetrics: {
      angle: '180°',
      angleTarget: '✓ Alinhamento ombro-quadril-joelho',
      align: '0° báscula',
      alignStatus: '✓ Pelve nivelada sem queda',
      symm: '50% D · 50% E',
      symmStatus: '✓ Apoio bilateral simétrico',
      time: '2.2 s',
      timeStatus: '✓ Sustentação no topo'
    },
    aiFeedback: 'Alinhamento lombo-pélvico perfeito! Elevação completa alcançada sem hiperextensão lombar compensatória e com ativação glútea equilibrada bilateralmente.',
    motorSteps: [
      {
        title: 'Etapa 1: Execução do Paciente',
        desc: 'Recrutamento concêntrico simultâneo dos glúteos e isquiotibiais para elevar a pelve.'
      },
      {
        title: 'Etapa 2: Análise Sensorial e IA',
        desc: 'Rastreamento do vetor ombro-quadril-joelho e verificação de báscula pélvica lateral.'
      },
      {
        title: 'Etapa 3: Feedback Extrínseco (CR e CP)',
        desc: 'Confirmação do alinhamento neutro de 180° e advertência caso ocorra arqueamento lombar.'
      },
      {
        title: 'Etapa 4: Correção e Ajuste Motor',
        desc: 'Sincronização entre contração glútea e coativação do transverso abdominal (core).'
      },
      {
        title: 'Etapa 5: Nova Execução Refinada',
        desc: 'Padrão estável com dissociação articular de quadril e coluna lombar.'
      }
    ]
  },
  {
    id: 'marcha',
    name: 'Marcha estacionária',
    sets: '3×30s',
    time: '~5 min',
    gif: 'assets/gifs/marcha.gif',
    caption: 'Apoio no solo ↔ Elevação alternada de joelhos',
    joints: 'Coxofemoral, Femorotibial e Talocrural em ciclos alternados de apoio e balanço',
    planes: 'Plano Sagital (flexão/extensão) com controle no Plano Frontal (abdução pélvica)',
    moves: 'Flexão alternada de quadril e joelho com dorsiflexão',
    muscles: 'Iliopsoas, Reto femoral, Tríceps sural e Tibial anterior',
    antagonistsSynergists: 'Antagonistas: Glúteo máximo ipsilateral. Sinergistas: Glúteo médio contralateral (suporte anti-Trendelenburg) e Core estabilizador',
    contraction: 'Alternância rítmica de contrações concêntricas e excêntricas',
    lever: 'Combinação de 1ª e 3ª classes no balanço e apoio monopodal da pelve.',
    why: 'Treina o equilíbrio dinâmico, cadência e propriocepção dos membros inferiores, reduzindo drasticamente o risco de quedas em idosos.',
    steps: [
      'Fique em pé próximo a uma parede ou corrimão para apoio caso sinta desequilíbrio.',
      'Mantenha o olhar fixo à frente e a coluna ereta.',
      'Eleve um joelho até aproximadamente a altura do quadril, mantendo o pé fletido.',
      'Abaixe suavemente enquanto eleva o joelho oposto em ritmo constante.',
      'Mantenha a respiração cadenciada durante todo o período da série.'
    ],
    aiLandmarks: {
      hip: { cx: 135, cy: 75, label: 'Quadril' },
      knee: { cx: 155, cy: 110, label: 'Joelho (85° flexão)' },
      ankle: { cx: 150, cy: 165, label: 'Tornozelo (Dorsiflexão)' },
      arc: 'M 140 95 A 16 16 0 0 1 155 125'
    },
    aiMetrics: {
      angle: '85°',
      angleTarget: '✓ Altura de joelho segura',
      align: '0° oscilação',
      alignStatus: '✓ Tronco estável e vertical',
      symm: '48% D · 52% E',
      symmStatus: '✓ Cadência rítmica',
      time: '1.0 s/passo',
      timeStatus: '✓ Ritmo constante'
    },
    aiFeedback: 'Ótima cadência e estabilidade no plano frontal! O glúteo médio do membro de apoio manteve a pelve perfeitamente nivelada, sem queda de Trendelenburg.',
    motorSteps: [
      {
        title: 'Etapa 1: Execução do Paciente',
        desc: 'Ciclo coordenado de elevação alternada ativando geradores de padrão central e vias motoras.'
      },
      {
        title: 'Etapa 2: Análise Sensorial e IA',
        desc: 'Cálculo da altura média de elevação do joelho e da estabilidade coronal da pelve.'
      },
      {
        title: 'Etapa 3: Feedback Extrínseco (CR e CP)',
        desc: 'Métrica de ritmo de passos por minuto e alinhamento do centro de massa.'
      },
      {
        title: 'Etapa 4: Correção e Ajuste Motor',
        desc: 'Ajuste postural do tronco para evitar inclinações laterais compensatórias.'
      },
      {
        title: 'Etapa 5: Nova Execução Refinada',
        desc: 'Automatização do padrão motor com ganho de confiança e segurança na deambulação.'
      }
    ]
  },
  {
    id: 'ombro',
    name: 'Rotação externa de ombro',
    sets: '3×12',
    time: '~4 min',
    gif: 'assets/gifs/ombro.gif',
    caption: 'Cotovelo a 90° junto ao corpo ↔ Rotação externa',
    joints: 'Glenoumeral (sinovial esferoide, triaxial) e Cíngulo Escapulotorácico',
    planes: 'Plano Transversal em torno do Eixo Longitudinal / Vertical',
    moves: 'Rotação externa (lateral) da cabeça umeral na fossa glenoide com cotovelo fletido a 90°',
    muscles: 'Manguito rotador posterior: Infraespinal e Redondo menor',
    antagonistsSynergists: 'Antagonistas: Subescapular, Peitoral maior e Latíssimo do dorso. Sinergistas: Deltoide posterior, Romboides e Trapézio inferior (fixadores escapulares)',
    contraction: 'Concêntrica na rotação externa; Excêntrica no retorno lento à posição neutra',
    lever: '3ª Classe (Interpotente) — Fulcro no eixo da articulação glenoumeral.',
    why: 'Reabilitação padrão de tendinites do manguito rotador, promovendo centralização da cabeça do úmero na cavidade glenoide e descompressão subacromial.',
    steps: [
      'Mantenha a postura ereta com escápulas estabilizadas.',
      'Dobre o cotovelo a 90° colado ao tronco lateralmente.',
      'Gire o antebraço para fora de forma lenta e controlada, mantendo o cotovelo encostado à costela.',
      'Sustente 1 segundo no limite seguro de amplitude.',
      'Retorne devagar sem relaxar repentinamente.'
    ],
    aiLandmarks: {
      hip: { cx: 135, cy: 55, label: 'Ombro (Glenoumeral)' },
      knee: { cx: 135, cy: 115, label: 'Cotovelo (90° colado)' },
      ankle: { cx: 180, cy: 115, label: 'Punho (40° rotação)' },
      arc: 'M 145 105 A 18 18 0 0 1 165 115'
    },
    aiMetrics: {
      angle: '40°',
      angleTarget: '✓ Amplitude terapêutica (35°–45°)',
      align: '0 cm desvio',
      alignStatus: '✓ Cotovelo fixo ao tronco',
      symm: 'Unilateral',
      symmStatus: '✓ Sem compensação escapular',
      time: '2.0 s',
      timeStatus: '✓ Retorno excêntrico controlado'
    },
    aiFeedback: 'Execução exemplar! Cotovelo mantido perfeitamente adjacente ao tronco sem abdução compensatória, garantindo isolamento preciso do infraespinal e redondo menor.',
    motorSteps: [
      {
        title: 'Etapa 1: Execução do Paciente',
        desc: 'Ativação do manguito rotador posterior para rodar externamente o úmero.'
      },
      {
        title: 'Etapa 2: Análise Sensorial e IA',
        desc: 'Verificação da distância cotovelo-tronco e do ângulo de excursão do antebraço.'
      },
      {
        title: 'Etapa 3: Feedback Extrínseco (CR e CP)',
        desc: 'Sinalização caso o cotovelo se afaste do tronco ou ocorra elevação escapular indesejada.'
      },
      {
        title: 'Etapa 4: Correção e Ajuste Motor',
        desc: 'Manutenção da ancoragem da escápula contra a caixa torácica via serrátil e trapézio.'
      },
      {
        title: 'Etapa 5: Nova Execução Refinada',
        desc: 'Movimento biomecanicamente limpo com descompressão subacromial contínua.'
      }
    ]
  },
  {
    id: 'slr',
    name: 'Elevação de perna reta',
    sets: '3×10',
    time: '~4 min',
    gif: 'assets/gifs/slr.gif',
    caption: 'Deitado ↔ Elevação de perna reta até 45°',
    joints: 'Coxofemoral (móvel) e Femorotibial (estabilizada em 0° de extensão)',
    planes: 'Plano Sagital em torno do Eixo Látero-Lateral',
    moves: 'Flexão de quadril com joelho estendido mantido em isometria',
    muscles: 'Iliopsoas, Reto femoral e Tensor da fáscia lata',
    antagonistsSynergists: 'Antagonistas: Glúteo máximo e Isquiotibiais. Isometria de suporte: Vasto lateral, intermédio e medial travando a patela. Estabilizadores: Parede abdominal',
    contraction: 'Concêntrica no quadril com isometria contínua do quadríceps na extensão do joelho',
    lever: '3ª Classe (Interpotente) com braço de resistência longo, gerando torque gravitacional elevado.',
    why: 'Padrão ouro em pós-operatório (ex.: LCA) para recrutar o quadríceps sem cisalhamento fêmoro-patelar decorrente da flexão articular.',
    steps: [
      'Deite-se de barriga para cima com uma perna flexionada e a perna a ser exercitada esticada.',
      'Contraia a coxa da perna esticada, travando o joelho em extensão total.',
      'Eleve a perna reta até a altura aproximada do joelho contralateral (cerca de 45°).',
      'Segure 1 segundo no topo sem deixar a perna dobrar.',
      'Desça lentamente sem tocar o calcanhar com força no solo.'
    ],
    aiLandmarks: {
      hip: { cx: 100, cy: 135, label: 'Quadril (Fulcro)' },
      knee: { cx: 145, cy: 110, label: 'Joelho (180° travado)' },
      ankle: { cx: 190, cy: 85, label: 'Tornozelo (45° elevação)' },
      arc: 'M 115 130 A 18 18 0 0 1 135 120'
    },
    aiMetrics: {
      angle: '45°',
      angleTarget: '✓ Elevação alvo (40°–45°)',
      align: '0° flexão',
      alignStatus: '✓ Joelho totalmente estendido',
      symm: 'Unilateral',
      symmStatus: '✓ Sem báscula pélvica',
      time: '2.3 s',
      timeStatus: '✓ Descida excêntrica controlada'
    },
    aiFeedback: 'Excelente estabilização! Joelho mantido em 0° de extensão durante todo o arco de flexão de quadril, recrutando o reto femoral com segurança.',
    motorSteps: [
      {
        title: 'Etapa 1: Execução do Paciente',
        desc: 'Coativação do quadríceps em extensão enquanto o iliopsoas traciona a perna para cima.'
      },
      {
        title: 'Etapa 2: Análise Sensorial e IA',
        desc: 'Verificação da rigidez do vetor do joelho e da altura máxima de flexão de quadril.'
      },
      {
        title: 'Etapa 3: Feedback Extrínseco (CR e CP)',
        desc: 'Aviso imediato se o joelho ceder ou fletir antes de atingir os 45°.'
      },
      {
        title: 'Etapa 4: Correção e Ajuste Motor',
        desc: 'Aumento da tensão isométrica dos vastos medial e lateral para travar a articulação.'
      },
      {
        title: 'Etapa 5: Nova Execução Refinada',
        desc: 'Repetição com controle rígido da cadeia cinética e sem sobrecarga na coluna lombar.'
      }
    ]
  },
  {
    id: 'alongamento',
    name: 'Alongamento de isquiotibiais',
    sets: '3×30s',
    time: '~4 min',
    gif: 'assets/gifs/alongamento.gif',
    caption: 'Perna estendida ↔ Inclinação suave do tronco',
    joints: 'Coxofemoral e Femorotibial com alongamento miotendíneo',
    planes: 'Plano Sagital em torno do Eixo Látero-Lateral',
    moves: 'Flexão sustentada do quadril com joelho estendido',
    muscles: 'Grupo Isquiotibial: Bíceps femoral, Semitendíneo e Semimembranoso',
    antagonistsSynergists: 'Antagonistas acionados: Quadríceps femoral e Iliopsoas (ativação recíproca)',
    contraction: 'Alongamento estático sustentado (estiramento de sarcômeros e colágeno tendíneo)',
    lever: 'Alavanca interfixa e interpotente combinada na bacia e coluna.',
    why: 'Restaura a amplitude de movimento articular (ADM), atenua a retração da cadeia posterior e alivia tensões de tração na coluna lombar.',
    steps: [
      'Sente-se na ponta da cadeira, estenda uma perna à frente apoiando o calcanhar no solo.',
      'Mantenha a coluna neutra e ereta.',
      'Incline suavemente o tronco para a frente a partir do quadril, sem arredondar as costas.',
      'Pare assim que sentir um estiramento confortável e tolerável atrás da coxa.',
      'Mantenha a respiração suave durante 30 segundos.'
    ],
    aiLandmarks: {
      hip: { cx: 120, cy: 90, label: 'Quadril (Flexão anterior)' },
      knee: { cx: 155, cy: 120, label: 'Joelho (Extensão)' },
      ankle: { cx: 195, cy: 145, label: 'Calcâneo no solo' },
      arc: 'M 130 95 A 18 18 0 0 1 150 115'
    },
    aiMetrics: {
      angle: '30 s',
      angleTarget: '✓ Tempo alvo: 20s–30s',
      align: 'Neutro',
      alignStatus: '✓ Coluna lombar preservada',
      symm: 'Unilateral',
      symmStatus: '✓ Relaxamento progressivo',
      time: '30 s',
      timeStatus: '✓ Sustentação sem rebote'
    },
    aiFeedback: 'Alongamento executado com técnica segura! Flexão proveniente da bacia e não da curvatura lombar, garantindo estímulo autógeno nos fusos musculares sem dor aguda.',
    motorSteps: [
      {
        title: 'Etapa 1: Execução do Paciente',
        desc: 'Posicionamento estático e inclinação pélvica ativando os fusos musculares dos isquiotibiais.'
      },
      {
        title: 'Etapa 2: Análise Sensorial e IA',
        desc: 'Verificação do alinhamento da coluna lombar e da sustentação contínua da postura.'
      },
      {
        title: 'Etapa 3: Feedback Extrínseco (CR e CP)',
        desc: 'Cronômetro visual de 30 segundos com orientação de não realizar rebotes balísticos.'
      },
      {
        title: 'Etapa 4: Correção e Ajuste Motor',
        desc: 'Ação do Órgão Tendinoso de Golgi (OTG) permitindo relaxamento autógeno das fibras musculares.'
      },
      {
        title: 'Etapa 5: Nova Execução Refinada',
        desc: 'Ganho progressivo de flexibilidade funcional e alívio da sobrecarga postural.'
      }
    ]
  }
];

// Dados padrão de fábrica para demonstração
const DEFAULT_PATIENTS = [
  {
    id: 'maria',
    name: 'Maria Silva',
    condition: 'Gonartrose (osteoartrose de joelho)',
    exercises: ['agachamento', 'panturrilha', 'joelho'],
    sessions: 8,
    completed: 24,
    evolution: 86,
    freq: '3×',
    weekly: [65, 72, 80, 86],
    lastSession: 'hoje · Agachamento · Tranquilo',
    insight: 'Maria relatou execuções mais tranquilas nas últimas 3 sessões — pode ser um bom momento para reavaliar a progressão do treino.',
    obs: 'Paciente apresentou melhora na execução do movimento ao longo das sessões.',
    history: [
      { label: 'Sessão 8 — Agachamento', rating: 'Tranquilo' },
      { label: 'Sessão 7 — Panturrilha', rating: 'Tranquilo' },
      { label: 'Sessão 6 — Agachamento', rating: 'Moderado' }
    ]
  },
  {
    id: 'joao',
    name: 'João Pereira',
    condition: 'Lombalgia crônica',
    exercises: ['ponte', 'alongamento'],
    sessions: 5,
    completed: 12,
    evolution: 68,
    freq: '2×',
    weekly: [50, 58, 63, 68],
    lastSession: 'ontem · Ponte de glúteo · Moderado',
    insight: 'João reportou desconforto moderado nas últimas 2 sessões de ponte de glúteo — pode indicar necessidade de reduzir a amplitude.',
    obs: 'Refere leve desconforto lombar ao final da série; orientado a reduzir a amplitude do movimento.',
    history: [
      { label: 'Sessão 5 — Ponte de glúteo', rating: 'Moderado' },
      { label: 'Sessão 4 — Alongamento', rating: 'Tranquilo' },
      { label: 'Sessão 3 — Ponte de glúteo', rating: 'Moderado' }
    ]
  },
  {
    id: 'antonio',
    name: 'Antônio Costa',
    condition: 'Risco de queda / equilíbrio (idoso)',
    exercises: ['marcha', 'panturrilha'],
    sessions: 10,
    completed: 28,
    evolution: 74,
    freq: '4×',
    weekly: [60, 66, 70, 74],
    lastSession: 'há 2 dias · Marcha estacionária · Tranquilo',
    insight: 'Antônio mantém regularidade nas sessões de marcha estacionária, com relatos consistentes de execução tranquila.',
    obs: 'Maior estabilidade percebida durante a marcha estacionária com apoio.',
    history: [
      { label: 'Sessão 10 — Marcha estacionária', rating: 'Tranquilo' },
      { label: 'Sessão 9 — Panturrilha', rating: 'Tranquilo' },
      { label: 'Sessão 8 — Marcha estacionária', rating: 'Tranquilo' }
    ]
  },
  {
    id: 'beatriz',
    name: 'Beatriz Nunes',
    condition: 'Tendinite do manguito rotador',
    exercises: ['ombro', 'alongamento'],
    sessions: 4,
    completed: 9,
    evolution: 55,
    freq: '2×',
    weekly: [40, 46, 50, 55],
    lastSession: 'hoje · Rotação externa de ombro · Difícil',
    insight: 'Beatriz relatou dificuldade nas últimas sessões de rotação externa — sugerido reavaliar a resistência do elástico utilizado.',
    obs: 'Dor leve reportada durante a rotação externa; sugerido reduzir a resistência do elástico.',
    history: [
      { label: 'Sessão 4 — Rotação de ombro', rating: 'Difícil' },
      { label: 'Sessão 3 — Alongamento', rating: 'Moderado' },
      { label: 'Sessão 2 — Rotação de ombro', rating: 'Difícil' }
    ]
  },
  {
    id: 'carla',
    name: 'Carla Mendes',
    condition: 'Pós-operatório de LCA (joelho)',
    exercises: ['slr', 'joelho'],
    sessions: 6,
    completed: 15,
    evolution: 62,
    freq: '3×',
    weekly: [45, 52, 58, 62],
    lastSession: 'ontem · Elevação de perna reta · Tranquilo',
    insight: 'Carla apresenta boa evolução na fase inicial de reabilitação, com execuções relatadas como tranquilas.',
    obs: 'Boa evolução na fase inicial de reabilitação; manter progressão gradual conforme protocolo.',
    history: [
      { label: 'Sessão 6 — Elevação de perna reta', rating: 'Tranquilo' },
      { label: 'Sessão 5 — Extensão de joelho', rating: 'Tranquilo' },
      { label: 'Sessão 4 — Elevação de perna reta', rating: 'Moderado' }
    ]
  }
];

const DEFAULT_USERS_DB = [
  { email: 'maria@fisioemcasa.com', pass: '1234', role: 'patient', patientId: 'maria' },
  { email: 'joao@fisioemcasa.com', pass: '1234', role: 'patient', patientId: 'joao' },
  { email: 'antonio@fisioemcasa.com', pass: '1234', role: 'patient', patientId: 'antonio' },
  { email: 'beatriz@fisioemcasa.com', pass: '1234', role: 'patient', patientId: 'beatriz' },
  { email: 'carla@fisioemcasa.com', pass: '1234', role: 'patient', patientId: 'carla' },
  { email: 'ana@fisioemcasa.com', pass: '1234', role: 'physio', nome: 'Dr. Ana Ribeiro' }
];

// Dados mutáveis em memória
let PATIENTS = JSON.parse(JSON.stringify(DEFAULT_PATIENTS));
let USERS_DB = JSON.parse(JSON.stringify(DEFAULT_USERS_DB));

const STORAGE_KEY_PATIENTS = 'fisio_em_casa_patients_v2';
const STORAGE_KEY_USERS = 'fisio_em_casa_users_v2';

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
    }
    if (savedUsers) {
      USERS_DB = JSON.parse(savedUsers);
    }
  } catch (err) {
    console.warn('Erro ao carregar dados do LocalStorage:', err);
  }
}

// Exporta base em arquivo JSON para download real
function exportDatabaseJSON() {
  const data = {
    app: 'Fisio em Casa',
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
  if (confirm('Deseja restaurar os dados de demonstração originais?')) {
    PATIENTS = JSON.parse(JSON.stringify(DEFAULT_PATIENTS));
    USERS_DB = JSON.parse(JSON.stringify(DEFAULT_USERS_DB));
    saveStorage();
    alert('Dados restaurados com sucesso!');
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
  isValgusSimulated: false,
  isSkeletonVisible: true,
  currentMotorStep: 1
};

// Inicialização dos elementos
function initApp() {
  // Carrega JSON persistido do localStorage
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

  const demoChips = document.getElementById('demo-chips');
  if (demoChips) {
    demoChips.innerHTML = USERS_DB.map(u => {
      const pMatch = PATIENTS.find(p => p.id === u.patientId);
      const label = u.role === 'physio' 
        ? `${u.nome} (fisio)` 
        : (pMatch ? pMatch.name : u.email);
      return `<button class="chip" onclick="quickLogin('${u.email}')">${label}</button>`;
    }).join('');
  }
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
    exercises: [],
    sessions: 0,
    completed: 0,
    evolution: 0,
    freq: '—',
    weekly: [0, 0, 0, 0],
    lastSession: '—',
    insight: 'Ainda não há dados suficientes para gerar um insight — aguardando a prescrição do fisioterapeuta e as primeiras sessões.',
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

  // Salva no LocalStorage em formato JSON
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
      <span class="tag tag-amber">Difícil</span>
    </div>
  `).join('');
}

function renderPatientList() {
  const list = document.getElementById('physio-list');
  list.innerHTML = PATIENTS.map(p => `
    <div class="exrow" onclick="openPatient('${p.id}')">
      <div>
        <div class="exname">${p.name}</div>
        <div class="exsets">${p.condition}</div>
      </div>
      <span class="tag tag-teal">${p.evolution}%</span>
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
      <span class="exname">${ex.name}</span>
      <span class="exsets">${ex.sets}</span>
    </div>`;
  }).join('') : '<p class="empty-state">Nenhum exercício prescrito ainda.</p>';

  show('s-physio-patient');
}

function savePhysioObservation() {
  if (!state.currentPatient) return;
  const obs = document.getElementById('pp-obs').value.trim();
  state.currentPatient.obs = obs;
  saveStorage();
  alert('Observação do fisioterapeuta registrada com sucesso!');
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
      <div>
        <div class="exname">${ex.name}</div>
        <div class="exsets">${ex.sets.replace('×', ' séries × ')} repetições</div>
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
      <div>
        <div class="exname">${ex.name}</div>
        <div class="exsets">${ex.sets}</div>
      </div>
      ${tag}
    </div>`;
  }).join('') : '<p class="empty-state">Seu fisioterapeuta ainda não definiu sua rotina de exercícios.</p>';
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

  // Atualiza demonstração com GIF real e legenda dinâmica
  const gifImg = document.getElementById('ex-gif-img');
  const gifCaption = document.getElementById('ex-gif-caption');
  if (gifImg && ex.gif) {
    gifImg.src = ex.gif;
    gifImg.alt = 'Demonstração de ' + ex.name;
  }
  if (gifCaption && ex.caption) {
    gifCaption.textContent = ex.caption;
  }

  const fromPhysio = state.exerciseOrigin === 'physio';
  document.getElementById('ex-complete-btn').style.display = fromPhysio ? 'none' : 'block';
  document.getElementById('ex-voltar-btn').style.display = fromPhysio ? 'block' : 'none';

  show('s-exercise');
}

// INICIAR FLUXO DE ANÁLISE POR IA
function startIaFlow() {
  state.iaAnalysisCompleted = true;
  renderIaScreen();
  show('s-ia-analysis');
}

// RENDERIZAR TELA DE ANÁLISE BIOMECÂNICA POR IA
function renderIaScreen() {
  const ex = state.current;
  if (!ex) return;

  state.isValgusSimulated = false;
  state.isSkeletonVisible = true;
  state.currentMotorStep = 1;

  document.getElementById('ia-title').textContent = 'Análise por IA · ' + ex.name;
  
  const gifEl = document.getElementById('ia-gif-img');
  if (gifEl && ex.gif) {
    gifEl.src = ex.gif;
  }

  // Atualiza marcos articulares no SVG
  const lm = ex.aiLandmarks || {
    hip: { cx: 135, cy: 65, label: 'Quadril (82°)' },
    knee: { cx: 152, cy: 120, label: 'Joelho (88°)' },
    ankle: { cx: 140, cy: 175, label: 'Tornozelo (22°)' },
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
    angleBadge.textContent = 'Flexão: ' + m.angle;
    angleBadge.style.background = 'rgba(13, 125, 111, 0.92)';
  }
  const trackState = document.getElementById('ia-tracking-state');
  if (trackState) trackState.textContent = 'Rastreamento Ativo';

  // Feedback clínico
  document.getElementById('ia-feedback-text').textContent = ex.aiFeedback || 'Movimento executado dentro do padrão cinesiológico recomendado.';

  // Ficha biomecânica
  document.getElementById('ia-bio-joints').textContent = ex.joints;
  document.getElementById('ia-bio-planes').textContent = ex.planes || 'Plano Sagital · Eixo Látero-Lateral';
  document.getElementById('ia-bio-agonists').textContent = ex.muscles;
  document.getElementById('ia-bio-antagonists').textContent = ex.antagonistsSynergists ? ex.antagonistsSynergists.split('. ')[0] : 'Isquiotibiais';
  document.getElementById('ia-bio-synergists').textContent = ex.antagonistsSynergists || 'Estabilizadores do core e pelve';
  document.getElementById('ia-bio-contraction').textContent = ex.contraction || 'Excêntrica / Concêntrica';
  document.getElementById('ia-bio-lever').textContent = ex.lever || '3ª Classe (Interpotente)';
  document.getElementById('ia-bio-why').textContent = ex.why;

  // Botões
  const valgoBtn = document.getElementById('btn-valgo-txt');
  if (valgoBtn) valgoBtn.textContent = 'Simular Valgo Dinâmico';
  const skelBtn = document.getElementById('btn-skel-txt');
  if (skelBtn) skelBtn.textContent = 'Ocultar Esqueleto';

  // Inicializa stepper do controle motor
  selectMotorStep(1);
}

// SIMULAÇÃO INTERATIVA DE VALGO DINÂMICO
function toggleIaValgusSimulation() {
  const ex = state.current;
  if (!ex) return;

  state.isValgusSimulated = !state.isValgusSimulated;
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

  if (state.isValgusSimulated) {
    // Desloca o joelho 22px medialmente simulando o valgo dinâmico
    const medialKneeCx = lm.knee.cx - 22;
    if (ptKnee) {
      ptKnee.setAttribute('cx', medialKneeCx);
      ptKnee.setAttribute('fill', '#b7423f');
      ptKnee.setAttribute('stroke', '#ffffff');
    }
    if (segThigh) {
      segThigh.setAttribute('x2', medialKneeCx);
      segThigh.setAttribute('stroke', '#dfb066');
    }
    if (segShank) {
      segShank.setAttribute('x1', medialKneeCx);
      segShank.setAttribute('stroke', '#dfb066');
    }
    if (lblKnee) {
      lblKnee.setAttribute('x', medialKneeCx - 70);
      lblKnee.setAttribute('fill', '#b7423f');
      lblKnee.textContent = 'Valgo (+14°)';
    }

    if (badgeAngle) {
      badgeAngle.textContent = '⚠ Alerta: Valgo Dinâmico';
      badgeAngle.style.background = 'rgba(183, 66, 63, 0.95)';
    }

    if (valAlign) valAlign.textContent = '14° medial';
    if (statusAlign) {
      statusAlign.textContent = '⚠ Colapso medial';
      statusAlign.style.background = '#fbeaea';
      statusAlign.style.color = 'var(--coral)';
    }

    if (feedbackTxt) {
      feedbackTxt.textContent = 'Atenção (Biofeedback): Houve aproximação medial excessiva dos joelhos (valgo dinâmico de 14°). O joelho ultrapassou a linha de prumo em direção à linha média corporal. Na próxima repetição, ative com mais ênfase o glúteo médio e aponte os joelhos na direção do segundo dedo do pé.';
    }

    if (btnTxt) btnTxt.textContent = 'Restaurar Alinhamento Neutro';
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
      iaStatusTxt.textContent = `Análise de IA concluída: Alinhamento seguro (${angle} flexão)`;
      iaStatusTxt.style.color = 'var(--teal-deep)';
    } else {
      iaStatusBox.style.display = 'flex';
      iaStatusBox.style.background = 'var(--surface)';
      iaStatusBox.style.borderLeftColor = 'var(--amber)';
      iaStatusTxt.textContent = 'Check-in manual (sem análise por visão computacional)';
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
      label: `Sessão ${(state.currentPatient.sessions || 0) + 1} — ${state.current.name}`,
      rating: ratingLabel,
      note: note
    });

    const mine = myExercises();
    const doneCount = Object.keys(state.completed).length;
    if (doneCount >= mine.length && mine.length > 0) {
      state.currentPatient.sessions = (state.currentPatient.sessions || 0) + 1;
    }

    // Salva no LocalStorage em JSON
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
