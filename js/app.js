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
    joints: 'quadril, joelho e tornozelo',
    moves: 'flexão, extensão e dorsiflexão do tornozelo',
    muscles: 'quadríceps, glúteo máximo, isquiotibiais e tríceps sural',
    why: 'fortalece os principais grupos musculares dos membros inferiores, essenciais para caminhar, subir escadas e manter o equilíbrio.',
    steps: [
      'Posicione os pés de forma confortável na largura dos ombros.',
      'Mantenha o tronco ereto e o abdômen contraído.',
      'Flexione quadril e joelhos simulando sentar em uma cadeira.',
      'Desça de maneira controlada até onde for confortável.',
      'Retorne à posição inicial empurrando o chão com os calcanhares.'
    ]
  },
  {
    id: 'panturrilha',
    name: 'Elevação de panturrilha',
    sets: '3×12',
    time: '~3 min',
    gif: 'assets/gifs/panturrilha.gif',
    caption: 'Calcanhares no chão ↔ Elevação na ponta dos pés',
    joints: 'tornozelo',
    moves: 'flexão plantar',
    muscles: 'tríceps sural (gastrocnêmio e sóleo)',
    why: 'fortalece a panturrilha, importante para a propulsão da marcha e a estabilidade do tornozelo.',
    steps: [
      'Fique em pé, apoiando as mãos em uma parede ou cadeira para equilíbrio se necessário.',
      'Eleve os calcanhares lentamente, ficando na ponta dos pés.',
      'Segure por 1 segundo no topo do movimento.',
      'Desça de forma suave e controlada.'
    ]
  },
  {
    id: 'joelho',
    name: 'Extensão de joelho',
    sets: '3×10',
    time: '~3 min',
    gif: 'assets/gifs/joelho.gif',
    caption: 'Joelho fletido ↔ Extensão controlada',
    joints: 'joelho',
    moves: 'extensão',
    muscles: 'quadríceps',
    why: 'fortalece o quadríceps de forma controlada, com baixo impacto sobre a articulação do joelho.',
    steps: [
      'Sente-se com as costas bem apoiadas na cadeira.',
      'Estenda o joelho lentamente até que a perna fique reta à frente.',
      'Segure por 1 segundo na posição estendida.',
      'Retorne devagar à posição inicial.'
    ]
  },
  {
    id: 'ponte',
    name: 'Ponte de glúteo',
    sets: '3×12',
    time: '~4 min',
    gif: 'assets/gifs/ponte.gif',
    caption: 'Quadril no chão ↔ Elevação com contração de glúteos',
    joints: 'quadril e coluna lombar',
    moves: 'extensão de quadril',
    muscles: 'glúteo máximo e eretores da espinha',
    why: 'fortalece a musculatura posterior do quadril e estabiliza a região lombar — indicado para quadros de lombalgia.',
    steps: [
      'Deite-se de barriga para cima com os joelhos flexionados e pés firmes no chão.',
      'Contraia abdômen e glúteos.',
      'Eleve o quadril até formar uma linha reta dos joelhos aos ombros.',
      'Segure por 2 segundos no topo.',
      'Desça de forma controlada sem relaxar totalmente.'
    ]
  },
  {
    id: 'marcha',
    name: 'Marcha estacionária',
    sets: '3×30s',
    time: '~5 min',
    gif: 'assets/gifs/marcha.gif',
    caption: 'Apoio no solo ↔ Elevação alternada de joelhos',
    joints: 'quadril, joelho e tornozelo',
    moves: 'flexão alternada de quadril',
    muscles: 'flexores de quadril e estabilizadores do tornozelo',
    why: 'trabalha equilíbrio e coordenação dinâmica, reduzindo o risco de quedas — indicado para pacientes idosos.',
    steps: [
      'Fique em pé próximo a um suporte fixo se precisar de segurança.',
      'Eleve um joelho por vez, simulando uma marcha no mesmo lugar.',
      'Mantenha o tronco firme e o olhar para frente.',
      'Alterne o ritmo de forma contínua durante 30 segundos.'
    ]
  },
  {
    id: 'ombro',
    name: 'Rotação externa de ombro',
    sets: '3×12',
    time: '~4 min',
    gif: 'assets/gifs/ombro.gif',
    caption: 'Cotovelo a 90° junto ao corpo ↔ Rotação externa',
    joints: 'ombro',
    moves: 'rotação externa glenoumeral',
    muscles: 'manguito rotador (infraespinal e redondo menor)',
    why: 'fortalece o manguito rotador, essencial na estabilidade e na reabilitação de tendinites do ombro.',
    steps: [
      'Mantenha o cotovelo fletido a 90° e colado ao tronco.',
      'Segure uma faixa elástica ou realize o movimento livremente.',
      'Gire o antebraço para fora lentamente sem afastar o cotovelo da costela.',
      'Retorne com controle à posição inicial.'
    ]
  },
  {
    id: 'slr',
    name: 'Elevação de perna reta',
    sets: '3×10',
    time: '~4 min',
    gif: 'assets/gifs/slr.gif',
    caption: 'Deitado ↔ Elevação de perna reta até 45°',
    joints: 'quadril, com joelho estabilizado em extensão',
    moves: 'flexão de quadril com joelho em extensão isométrica',
    muscles: 'quadríceps (isometria) e flexores de quadril',
    why: 'fortalece o quadríceps sem cisalhamento articular excessivo no joelho — indicado no pós-cirúrgico.',
    steps: [
      'Deite-se de barriga para cima com uma perna estendida e a outra flexionada com pé apoiado.',
      'Contraia a musculatura da coxa da perna estendida.',
      'Eleve a perna reta até a altura do joelho da outra perna.',
      'Desça devagar controlando a descida.'
    ]
  },
  {
    id: 'alongamento',
    name: 'Alongamento de isquiotibiais',
    sets: '3×30s',
    time: '~4 min',
    gif: 'assets/gifs/alongamento.gif',
    caption: 'Perna estendida ↔ Inclinação suave do tronco',
    joints: 'quadril e joelho',
    moves: 'flexão de quadril com joelho estendido',
    muscles: 'isquiotibiais',
    why: 'reduz a tensão na cadeia posterior e na região lombar, melhorando a flexibilidade funcional.',
    steps: [
      'Sente-se na ponta da cadeira com uma perna estendida à frente e calcanhar no chão.',
      'Incline o tronco à frente a partir do quadril, mantendo a coluna alinhada.',
      'Sinta uma leve tração atrás da coxa, sem sensação de dor aguda.',
      'Mantenha a posição por 20 a 30 segundos respirando normalmente.'
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
  currentPatient: null
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
    ? { 's-dash': 0, 's-exercicios': 1, 's-exercise': 1, 's-checkin': 1, 's-evolucao': 2, 's-perfil': 3, 's-sobre': 3 }
    : { 's-physio-dash': 0, 's-physio-list': 1, 's-physio-patient': 1, 's-exercise': 1, 's-evolucao': 2, 's-perfil': 3, 's-sobre': 3 };

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

  document.getElementById('ex-title').textContent = ex.name;
  document.getElementById('ex-sets').textContent = ex.sets;
  document.getElementById('ex-time').textContent = ex.time;
  document.getElementById('ex-joints').textContent = ex.joints;
  document.getElementById('ex-moves').textContent = ex.moves;
  document.getElementById('ex-muscles').textContent = ex.muscles;
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
  show('s-checkin');
}

function setRating(val, el) {
  state.rating = val;
  document.querySelectorAll('#s-checkin .seg-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

function saveCheckin() {
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
