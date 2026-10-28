// Tutti i testi del sito. Sono quelli di flowline.it (ottobre 2026), con le sole correzioni
// indicate nel piano: maiuscole dei titoli, "Qual è", etichette sopra i titoli assorbite o tolte.

export const SITE = {
  name: 'Flowline',
  url: 'https://flowline.it',
  email: 'info@flowline.it',
  legalName: 'Callforus Agenzia del Digitale di Giuseppe Romano',
  street: 'Via Antonio Pacinotti 13',
  postalCode: '93012',
  city: 'Gela',
  province: 'CL',
  vat: 'IT02110530850',
  linkedin: 'https://www.linkedin.com/company/flowline-it/',
  instagram: 'https://www.instagram.com/flowline.it/',
  supabaseUrl: 'https://dwsdrhqsqofublntmyma.supabase.co',
  // Progetto Supabase "FLOWLINE JOURNAL" (non più quello di Hostinger Horizons).
  // Chiave pubblica "anon": può solo fare ciò che le policy RLS permettono.
  supabaseAnonKey:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3c2RyaHFzcW9mdWJsbnRteW1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI4NDMxMDcsImV4cCI6MjEwODQxOTEwN30.-mCxe4HJ_Ookc6-KAcBGes1isW89k7termKc837DGkc',
};

// SEO (ottobre 2026): parola chiave principale in title, description e H1 della home.
export const HOME_META = {
  title: 'Automazione processi aziendali e agenti AI | Flowline',
  description:
    'Agenzia italiana di automazione AI: workflow, agenti AI e integrazioni su misura per PMI. Primo processo automatizzato in 30 giorni. Analisi gratuita.',
};

export const CTA = 'Prenota una consulenza gratuita';

export const HERO = {
  // kicker: riga piccola dentro l'H1, porta la parola chiave senza toccare lo slogan
  kicker: 'Agenzia di automazione AI per aziende',
  title: ['Automatizza i tuoi', 'processi'],
  // sottotitolo del hero
  subtitle:
    "Progettiamo automazioni con l'intelligenza artificiale, agenti AI e integrazioni tra i tuoi software (CRM, gestionale, fatturazione) per le PMI italiane. I nostri clienti riducono fino al 40% il tempo speso in attività ripetitive.",
  trust: ['Analisi preliminare gratuita', 'Preventivo trasparente', 'Referente dedicato'],
  text: 'Progettiamo sistemi AI, integrazioni e processi automatici su misura. Libera il tuo team dai task ripetitivi e scala il tuo business con un partner strategico al tuo fianco.',
};

export const COSTS = {
  title: "Il costo dell'inefficienza",
  statement: 'La tua azienda perde tempo ogni giorno in attività manuali inutili.',
  text: 'Senza automazione, la tua azienda sta letteralmente bruciando risorse. Ecco cosa ti sta costando non agire ora.',
  rows: [
    { name: 'Processi manuali', text: 'Attività ripetitive che consumano tempo e risorse preziose.', value: '~€5.000', unit: "di costo l'anno per dipendente" },
    { name: 'Dati frammentati', text: 'Informazioni sparse tra sistemi diversi e non sincronizzati.', value: 'Rischio', unit: 'di decisioni basate su dati errati' },
    { name: 'Comunicazioni lente', text: 'Ritardi critici nella condivisione di informazioni tra team.', value: '−20%', unit: 'di produttività del team' },
    { name: 'Errori umani', text: 'Sbagli costosi dovuti a distrazione in task ripetitivi.', value: '3%', unit: 'di perdita media sul fatturato' },
  ],
};

export const SOLUTIONS = {
  title: 'Soluzioni ad alto impatto',
  subtitle: 'Risultati garantiti.',
  items: [
    { name: 'Automazioni intelligenti', text: 'Sistemi AI che gestiscono task ripetitivi 24/7 con zero errori.', figure: '300%', figureLabel: 'ROI in 6 mesi', time: 'Implementazione: 2 settimane' },
    { name: 'Integrazione totale', text: 'Connessione fluida tra CRM, ERP e strumenti di marketing.', figure: '20h', figureLabel: 'risparmiate a settimana', time: 'Implementazione: 3 settimane' },
    { name: 'Agenti AI personalizzati', text: 'Bot addestrati sui tuoi dati per customer service e analisi.', figure: '+45%', figureLabel: 'di produttività', time: 'Implementazione: 4 settimane' },
    { name: 'Supporto premium', text: 'Assistenza prioritaria 24/7 e monitoraggio proattivo.', figure: '99,9%', figureLabel: 'di uptime garantito', time: 'Attivazione immediata' },
  ],
};

export const WHY = {
  title: 'Perché scegliere Flowline',
  text: 'Siamo il partner tecnologico ideale per le aziende strutturate che cercano affidabilità, competenza e un approccio consulenziale serio.',
  items: [
    { name: 'Analisi preliminare gratuita', text: 'Non vendiamo "scatole chiuse". Iniziamo sempre ascoltando le tue esigenze per capire se e come possiamo aiutarti realmente.' },
    { name: 'Una demo prima di firmare', text: 'Prima di farti firmare qualsiasi contratto ti facciamo vedere una demo, così sai esattamente cosa riceverai.' },
    { name: 'Preventivo trasparente e su misura', text: 'Riceverai una proposta dettagliata con costi, tempi e deliverable chiari. Nessuna sorpresa, solo chiarezza professionale.' },
    { name: 'Team esperto in automazioni e AI', text: 'Mettiamo a tua disposizione competenze verticali su integrazioni complesse, AI engineering e process optimization.' },
    { name: 'Supporto continuativo post-implementazione', text: 'Non ti lasciamo solo dopo la consegna. Offriamo piani di manutenzione per garantire che i sistemi evolvano con la tua azienda.' },
    { name: 'Risultati misurabili e documentati', text: 'Puntiamo a metriche concrete: ore risparmiate, errori ridotti e processi velocizzati. La tua crescita è il nostro obiettivo.' },
  ],
  cta: { title: 'Hai un progetto in mente?', text: 'Parliamone insieme. La prima consulenza è sempre gratuita e senza impegno.', button: 'Prenota ora' },
};

export const ABOUT = {
  title: 'Chi siamo',
  text: "Siamo un team tech specializzato in intelligenza artificiale e automazioni. Negli ultimi mesi abbiamo aiutato diverse aziende a ridurre tempi, costi ed errori automatizzando attività ripetitive e processi operativi. Lavoriamo a fianco degli imprenditori per eliminare la complessità dell'IA e trasformarla in soluzioni semplici, integrate e orientate ai risultati.",
  closing: 'Niente teoria, solo automazioni che funzionano.',
};

export const METHOD = {
  title: 'Come lavoriamo',
  steps: [
    { when: 'Settimana 1', name: 'Analisi profonda', text: 'Mappiamo i tuoi processi attuali per identificare colli di bottiglia e inefficienze nascoste.', output: 'Report audit e roadmap' },
    { when: 'Settimana 2', name: 'Progettazione', text: "Disegniamo l'architettura della soluzione, selezionando gli strumenti e le integrazioni ideali.", output: 'Design del sistema e prototipo' },
    { when: 'Settimane 3-4', name: 'Implementazione', text: 'Sviluppiamo, integriamo e testiamo le automazioni in ambiente sicuro.', output: 'Sistema funzionante e testato' },
    { when: 'Ongoing', name: 'Monitoraggio', text: 'Tracciamo le performance e ottimizziamo continuamente i flussi di lavoro post-lancio.', output: 'Dashboard performance e supporto' },
  ],
  note: 'Tutto il processo è coperto dal nostro supporto prioritario 24/7.',
};

export const SERVICES = {
  title: 'I nostri servizi',
  text: "Offriamo consulenza e sviluppo su misura per digitalizzare la tua azienda. Ogni progetto inizia con un'analisi approfondita delle tue esigenze.",
  items: [
    { id: 'automazioni', name: 'Automazioni processi', text: 'Workflow automatici per e-mail, fatturazione, data-entry e molto altro.', quote: 'Analizziamo i tuoi flussi operativi attuali e progettiamo automazioni custom per eliminare le inefficienze.', points: ['Analisi processi', 'Sviluppo custom', 'Integrazione sistemi'] },
    { id: 'agenti', name: 'Agenti AI personalizzati', text: 'Bot addestrati sui tuoi dati per customer service, analisi e molto altro.', quote: 'Non vendiamo un software standard, ma creiamo assistenti intelligenti basati sulla tua specifica base di conoscenza aziendale.', points: ['Training su dati proprietari', 'Configurazione su misura', 'Ottimizzazione continua'], focus: 'Focus AI' },
    { id: 'gestionali', name: 'Gestionali su misura', text: 'Software gestionali costruiti ad hoc per la tua azienda: magazzino, ordini, preventivi e commesse.', quote: 'Non adattiamo la tua azienda a un programma: costruiamo il gestionale intorno ai tuoi processi.', points: ['Analisi dei processi', 'Sviluppo su misura', 'Integrazione con gli strumenti esistenti'] },
    { id: 'consulenza', name: 'Consulenza strategica', text: 'Analisi dei flussi di lavoro e piano di trasformazione digitale.', quote: 'Ti guidiamo nella scelta delle tecnologie giuste per il tuo business, evitando sprechi e soluzioni non adatte.', points: ['Roadmap digitale', 'Studio di fattibilità', 'Selezione vendor'] },
    { id: 'formazione', name: 'Formazione team', text: "Workshop pratici per rendere il tuo team autonomo con l'AI.", quote: "Formiamo il tuo personale per utilizzare al meglio i nuovi strumenti e massimizzare il ritorno sull'investimento.", points: ['Sessioni dedicate', 'Materiale didattico', "Supporto all'adozione"] },
  ],
  note: 'Non è un software SaaS, è un servizio B2B.',
  closing: "Ogni soluzione è progettata su misura dopo un'attenta analisi preliminare.",
  link: 'Richiedi una consulenza gratuita',
};

export const CONTACT = {
  title: 'Parliamo del tuo progetto',
  text: 'Compila il form per fissare una call conoscitiva gratuita.',
  privacy: 'I tuoi dati sono protetti da crittografia end-to-end e non saranno mai ceduti a terzi.',
  services: ['Automazioni Processi', 'Agenti AI Personalizzati', 'Consulenza Strategica', 'Formazione Team', 'Altro'],
  sources: ['LinkedIn', 'Ricerca Google', 'Passaparola', 'Facebook/Instagram', 'Altro'],
  success: { title: 'Grazie!', text: 'Abbiamo ricevuto la tua richiesta. Ti risponderemo entro 24 ore.', again: "Invia un'altra richiesta" },
};

export const FAQ = {
  title: 'Domande frequenti',
  items: [
    { q: 'Quanto tempo richiede un progetto di automazione?', a: 'Dipende dalla complessità. Progetti semplici possono essere operativi in 2-3 settimane, mentre integrazioni enterprise complesse possono richiedere 1-3 mesi. In fase di analisi definiremo una roadmap precisa.' },
    { q: "Qual è l'investimento necessario?", a: 'Lavoriamo su preventivo in base alle specifiche esigenze. Non abbiamo listini fissi perché ogni azienda è diversa. Durante la consulenza valuteremo insieme il perimetro del progetto per fornirti una stima accurata.' },
    { q: 'Come garantite la sicurezza dei dati?', a: 'La sicurezza è prioritaria. Utilizziamo standard di crittografia avanzati e protocolli sicuri per ogni integrazione. Operiamo nel pieno rispetto del GDPR e possiamo firmare NDA prima di analizzare i vostri processi sensibili.' },
    { q: 'Cosa succede se i miei processi aziendali cambiano?', a: "Le nostre soluzioni sono progettate per essere scalabili e modulari. Offriamo contratti di manutenzione e supporto per adattare le automazioni all'evoluzione del tuo business nel tempo." },
    { q: 'Fornite formazione al personale?', a: "Certamente. Offriamo percorsi di formazione mirati, attraverso mini-corsi e workshop, pensati per rendere il personale autonomo nell'utilizzo dell'AI nei processi aziendali quotidiani. La formazione è adattata al ruolo e agli obiettivi dell'azienda, con esempi concreti e casi d'uso reali." },
  ],
  aside: 'Hai dubbi specifici sulla tua situazione?',
};

export const FINAL = {
  title: 'Pronto a trasformare il tuo business?',
  text: 'Affidati a esperti del settore per ottimizzare i tuoi processi. Prenota una call conoscitiva per valutare insieme le opportunità di miglioramento.',
};

// ---------- versione 2 (landing SaaS) ----------

// Strumenti che integriamo: solo testo, nessun logo di terzi.
export const TOOLS = ['Gmail e Google Workspace', 'n8n', 'Supabase', 'WhatsApp Business', 'Fatturazione elettronica', 'CRM', 'ERP e gestionali', 'Excel e Google Sheets', 'Microsoft 365', 'Calendari e agende'];

// Numeri del sito attuale, invariati.
export const METRICS = [
  { value: 40, prefix: '−', suffix: '%', label: 'costi operativi' },
  { value: 300, prefix: '', suffix: '%', label: 'ROI in 6 mesi' },
  { value: 20, prefix: '', suffix: 'h', label: 'risparmiate a settimana' },
  { value: 99.9, prefix: '', suffix: '%', label: 'uptime garantito', decimals: 1 },
];

// Formule di collaborazione: niente cifre, come dicono le FAQ ("non abbiamo listini fissi").
// Pilot 30: offerta di ingresso di Flowline, da confermare prima della pubblicazione.
export const PLANS = {
  title: 'Scegli come iniziare',
  text: 'Lavoriamo su preventivo in base alle specifiche esigenze. Ogni progetto parte da una consulenza gratuita e senza impegno.',
  items: [
    { name: 'Pilot 30', price: 'Su preventivo', note: '30 giorni, un processo', text: 'Automatizziamo un processo concreto in 30 giorni, per vedere i risultati prima di andare oltre.', points: ['Analisi preliminare gratuita', 'Un processo automatizzato', 'Report con le ore risparmiate', 'Soddisfatti o rimborsati'], cta: 'Parti con il Pilot' },
    { name: 'Progetto su misura', price: 'Su preventivo', note: 'Da 2 settimane a 3 mesi', featured: true, text: 'Automazioni, integrazioni e agenti AI progettati sui tuoi processi, con una roadmap precisa.', points: ['Report audit e roadmap', 'Design del sistema e prototipo', 'Sviluppo, integrazione e test', 'Formazione del team inclusa'], cta: 'Richiedi una consulenza' },
    { name: 'Manutenzione', price: 'Canone su preventivo', note: 'Dopo la consegna', text: 'Monitoriamo e ottimizziamo i sistemi perché evolvano con la tua azienda.', points: ['Supporto prioritario 24/7', 'Monitoraggio proattivo', 'Adattamenti ai nuovi processi', 'Dashboard delle performance'], cta: 'Parliamone' },
  ],
};

export const FAQ_EXTRA = { q: "Cos'è il Pilot 30?", a: "È il modo più semplice per iniziare: in 30 giorni automatizziamo un processo concreto della tua azienda e misuriamo le ore risparmiate. Se il risultato non ti soddisfa, ti rimborsiamo." };
