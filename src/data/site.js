// Tutti i testi del sito. Sono quelli di flowline.it (ottobre 2026), con le sole correzioni
// indicate nel piano: maiuscole dei titoli, "Qual è", etichette sopra i titoli assorbite o tolte.

// Statistiche delle visite con Umami Cloud: server in UE, nessun cookie, quindi nessun banner.
// L'ID del sito si trova in Umami → Impostazioni → Siti web → Modifica → "ID sito web" (o nel "Codice di monitoraggio").
// Finché websiteId è vuoto non viene caricato nulla. Sull'indirizzo di prova non si misura mai.
export const ANALYTICS = {
  umamiWebsiteId: 'f0067cca-ea7e-4208-9f24-4dcd3ebc04e8',
  umamiSrc: 'https://cloud.umami.is/script.js',
  domains: 'flowline.it,www.flowline.it',
};

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

// Newsletter: iscritti nel progetto Supabase "Lead Flowline" (lo stesso di Outbound, sezione Newsletter).
// Chiave pubblicabile: dal sito permette SOLO le funzioni newsletter_subscribe e newsletter_unsubscribe;
// la lista degli iscritti non è leggibile senza login della redazione.
export const NEWSLETTER = {
  supabaseUrl: 'https://adaaubcarnczlmenfwam.supabase.co',
  supabaseKey: 'sb_publishable_0a_ioaj4iiT3MlzUKR2XyQ_-PYHrQPP',
};

// SEO (ottobre 2026): parola chiave principale in title, description e H1 della home.
export const HOME_META = {
  title: 'Automazione processi aziendali e agenti AI | Flowline',
  description:
    'Agenzia italiana di automazione AI: workflow, agenti AI e integrazioni su misura per PMI. Analisi preliminare gratuita e preventivo trasparente.',
};

export const CTA = 'Prenota la consulenza gratuita';

export const HERO = {
  // kicker: riga piccola dentro l'H1, porta la parola chiave senza toccare lo slogan
  kicker: 'Agenzia di automazione AI per aziende',
  title: ['Automatizza i tuoi', 'processi'],
  // sottotitolo del hero
  subtitle:
    "Progettiamo automazioni con l'intelligenza artificiale, agenti AI e integrazioni tra i tuoi software (CRM, gestionale, fatturazione) per le PMI italiane. Liberiamo il tuo team dalle attività ripetitive.",
  trust: ['Analisi preliminare gratuita', 'Preventivo trasparente', 'Referente dedicato'],
  text: 'Progettiamo sistemi AI, integrazioni e processi automatici su misura. Libera il tuo team dalle attività ripetitive e fai crescere la tua azienda con un partner al tuo fianco.',
};

export const COSTS = {
  title: 'Dove si perde tempo',
  statement: 'Dove si perde tempo, ogni giorno.',
  text: 'Fatture ricopiate a mano, dati sparsi tra Excel e gestionale, richieste dei clienti che restano in attesa: sono i primi processi che guardiamo insieme.',
  rows: [
    { name: 'Processi manuali', text: 'Attività ripetitive che consumano tempo e risorse preziose.' },
    { name: 'Dati frammentati', text: 'Informazioni sparse tra sistemi diversi e non sincronizzati.' },
    { name: 'Comunicazioni lente', text: 'Ritardi critici nella condivisione di informazioni tra team.' },
    { name: 'Errori umani', text: 'Sbagli costosi dovuti alla distrazione nelle attività ripetitive.' },
  ],
};

export const SOLUTIONS = {
  title: 'Cosa possiamo automatizzare nella tua azienda',
  items: [
    { name: 'Automazioni intelligenti', text: 'Sistemi AI che gestiscono le attività ripetitive, giorno e notte.' },
    { name: 'Integrazione totale', text: 'Connessione fluida tra CRM, ERP e strumenti di marketing.' },
    { name: 'Agenti AI personalizzati', text: 'Bot addestrati sui tuoi dati per customer service e analisi.' },
    { name: 'Supporto e monitoraggio', text: 'Assistenza dedicata e monitoraggio proattivo dei sistemi.' },
  ],
};

export const WHY = {
  title: 'Perché scegliere Flowline',
  text: 'Lavoriamo con le PMI italiane in modo trasparente: prima ascoltiamo, poi ti mostriamo cosa costruiremo, poi lo costruiamo.',
  items: [
    { name: 'Analisi preliminare gratuita', text: 'Non vendiamo "scatole chiuse". Iniziamo sempre ascoltando le tue esigenze per capire se e come possiamo aiutarti realmente.' },
    { name: 'Una demo prima di firmare', text: 'Prima di farti firmare qualsiasi contratto ti facciamo vedere una demo, così sai esattamente cosa riceverai.' },
    { name: 'Preventivo trasparente e su misura', text: 'Riceverai una proposta dettagliata con costi, tempi e risultati da consegnare. Nessuna sorpresa.' },
    { name: 'Team esperto in automazioni e AI', text: 'Mettiamo a tua disposizione competenze specifiche su integrazioni complesse, sviluppo di soluzioni AI e ottimizzazione dei processi.' },
    { name: 'Supporto continuativo post-implementazione', text: 'Non ti lasciamo solo dopo la consegna. Offriamo piani di manutenzione per garantire che i sistemi evolvano con la tua azienda.' },
    { name: 'Risultati misurabili e documentati', text: 'Puntiamo a metriche concrete: ore risparmiate, errori ridotti e processi velocizzati. La tua crescita è il nostro obiettivo.' },
  ],
  cta: { title: 'Hai un progetto in mente?', text: 'Parliamone insieme. La prima consulenza è sempre gratuita e senza impegno.', button: 'Prenota la consulenza gratuita' },
};

export const ABOUT = {
  title: 'Chi siamo',
  text: "Siamo un team tech specializzato in intelligenza artificiale e automazioni. Negli ultimi mesi abbiamo aiutato diverse aziende a ridurre tempi, costi ed errori automatizzando attività ripetitive e processi operativi. Lavoriamo a fianco degli imprenditori per eliminare la complessità dell'AI e trasformarla in soluzioni semplici, integrate e orientate ai risultati.",
  closing: 'Niente teoria, solo automazioni che funzionano.',
};

export const METHOD = {
  title: 'Come lavoriamo',
  steps: [
    { when: 'Fase 1', name: 'Analisi profonda', text: 'Mappiamo i tuoi processi attuali per identificare colli di bottiglia e inefficienze nascoste.', output: 'Report audit e roadmap' },
    { when: 'Fase 2', name: 'Progettazione', text: "Disegniamo l'architettura della soluzione, selezionando gli strumenti e le integrazioni ideali.", output: 'Design del sistema e prototipo' },
    { when: 'Fase 3', name: 'Implementazione', text: 'Sviluppiamo, integriamo e testiamo le automazioni in ambiente sicuro.', output: 'Sistema funzionante e testato' },
    { when: 'Dopo il lancio', name: 'Monitoraggio', text: 'Tracciamo le performance e ottimizziamo continuamente i flussi di lavoro post-lancio.', output: 'Dashboard performance e supporto' },
  ],
  note: 'Dopo il lancio restiamo al tuo fianco per supporto e manutenzione.',
  goal: { title: 'Processo automatizzato', text: 'Il sistema lavora al posto tuo e il tuo team torna a dedicarsi al lavoro che conta.' },
};

export const SERVICES = {
  title: 'I nostri servizi',
  text: "Offriamo consulenza e sviluppo su misura per digitalizzare la tua azienda. Ogni progetto inizia con un'analisi approfondita delle tue esigenze.",
  items: [
    { id: 'automazioni', name: 'Automazioni processi', text: 'Flussi automatici per email, fatture e inserimento dati.', quote: 'Analizziamo i tuoi flussi operativi attuali e progettiamo automazioni su misura per eliminare le inefficienze.', points: ['Analisi processi', 'Sviluppo su misura', 'Integrazione sistemi'] },
    { id: 'agenti', name: 'Agenti AI personalizzati', text: "Assistenti basati sui dati della tua azienda, per l'assistenza clienti e la ricerca di informazioni.", quote: 'Non vendiamo un software standard, ma creiamo assistenti intelligenti basati sulla tua specifica base di conoscenza aziendale.', points: ['Basati sui dati della tua azienda', 'Configurazione su misura', 'Ottimizzazione continua'], focus: 'Focus AI' },
    { id: 'gestionali', name: 'Gestionali su misura', text: 'Software gestionali costruiti ad hoc per la tua azienda: magazzino, ordini, preventivi e commesse.', quote: 'Non adattiamo la tua azienda a un programma: costruiamo il gestionale intorno ai tuoi processi.', points: ['Analisi dei processi', 'Sviluppo su misura', 'Integrazione con gli strumenti esistenti'] },
    { id: 'consulenza', name: 'Consulenza strategica', text: 'Analisi dei flussi di lavoro e piano di trasformazione digitale.', quote: 'Ti guidiamo nella scelta delle tecnologie giuste per il tuo business, evitando sprechi e soluzioni non adatte.', points: ['Roadmap digitale', 'Studio di fattibilità', 'Scelta dei fornitori'] },
    { id: 'formazione', name: 'Formazione team', text: "Workshop pratici per rendere il tuo team autonomo con l'AI.", quote: "Formiamo il tuo personale per utilizzare al meglio i nuovi strumenti e massimizzare il ritorno sull'investimento.", points: ['Sessioni dedicate', 'Materiale didattico', "Supporto all'adozione"] },
  ],
  note: '',
  closing: "Ogni soluzione è progettata su misura dopo un'attenta analisi preliminare.",
  link: 'Prenota la consulenza gratuita',
};

export const CONTACT = {
  title: 'Parliamo del tuo progetto',
  text: 'Scrivici due righe su come lavorate oggi. Ti ricontattiamo per fissare una chiamata conoscitiva gratuita.',
  privacy: 'I dati viaggiano su una connessione cifrata e li usiamo solo per ricontattarti. Non li cediamo a terzi.',
  services: ['Automazioni Processi', 'Agenti AI Personalizzati', 'Consulenza Strategica', 'Formazione Team', 'Altro'],
  sources: ['LinkedIn', 'Ricerca Google', 'Passaparola', 'Facebook/Instagram', 'Altro'],
  success: { title: 'Grazie!', text: 'Abbiamo ricevuto la tua richiesta. Ti risponderemo entro 24 ore.', again: "Invia un'altra richiesta" },
};

export const FAQ = {
  title: 'Domande frequenti',
  items: [
    { q: 'Quanto tempo richiede un progetto di automazione?', a: 'Dipende dalla complessità. Progetti semplici possono essere operativi in 2-3 settimane, mentre integrazioni più articolate possono richiedere 1-3 mesi. In fase di analisi definiremo una roadmap precisa.' },
    { q: "Qual è l'investimento necessario?", a: 'Lavoriamo su preventivo in base alle specifiche esigenze. Non abbiamo listini fissi perché ogni azienda è diversa. Durante la consulenza valuteremo insieme il perimetro del progetto per fornirti una stima accurata.' },
    { q: 'Come garantite la sicurezza dei dati?', a: 'La sicurezza è prioritaria. Utilizziamo standard di crittografia avanzati e protocolli sicuri per ogni integrazione. Operiamo nel pieno rispetto del GDPR e possiamo firmare NDA prima di analizzare i vostri processi sensibili.' },
    { q: 'Cosa succede se i miei processi aziendali cambiano?', a: "Le nostre soluzioni sono progettate per essere scalabili e modulari. Offriamo contratti di manutenzione e supporto per adattare le automazioni all'evoluzione del tuo business nel tempo." },
    { q: 'Fornite formazione al personale?', a: "Certamente. Offriamo percorsi di formazione mirati, attraverso mini-corsi e workshop, pensati per rendere il personale autonomo nell'utilizzo dell'AI nei processi aziendali quotidiani. La formazione è adattata al ruolo e agli obiettivi dell'azienda, con esempi concreti e casi d'uso reali." },
  ],
  aside: 'Hai dubbi specifici sulla tua situazione?',
};

export const FINAL = {
  title: 'Pronto a trasformare il tuo business?',
  text: 'Affidati a esperti del settore per ottimizzare i tuoi processi. Prenota una chiamata conoscitiva per valutare insieme le opportunità di miglioramento.',
};

// ---------- versione 2 (landing SaaS) ----------

// Strumenti che integriamo: solo testo, nessun logo di terzi.
export const TOOLS = ['Gmail e Google Workspace', 'n8n', 'Supabase', 'WhatsApp Business', 'Fatturazione elettronica', 'CRM', 'ERP e gestionali', 'Excel e Google Sheets', 'Microsoft 365', 'Calendari e agende'];

// Formule di collaborazione: niente cifre né tempistiche ("non abbiamo listini fissi").
// La manutenzione rientra nel preventivo del progetto; al suo posto la formazione, che si può chiedere anche da sola.
export const PLANS = {
  title: 'Da dove partire',
  text: 'Il primo passo è sempre una consulenza gratuita e senza impegno. Da lì costruiamo insieme la soluzione giusta per la tua azienda.',
  items: [
    { name: 'Consulenza preliminare', price: 'Gratuita', note: 'Senza impegno', badge: 'Inizia da qui', featured: true, text: 'Ci racconti come lavorate oggi: analizziamo i tuoi processi per capire se e come possiamo aiutarti davvero.', points: ['Chiamata conoscitiva senza impegno', 'Analisi dei processi attuali', 'Prime opportunità di automazione', 'Nessun obbligo di proseguire'], cta: 'Prenota la consulenza gratuita' },
    { name: 'Progetto su misura', price: 'Su preventivo', note: 'Dopo la consulenza', text: 'Automazioni, integrazioni e agenti AI progettati sui tuoi processi, con una roadmap precisa.', points: ['Una demo prima di firmare', 'Preventivo chiaro, voce per voce', 'Sviluppo, integrazione e test', 'Formazione e supporto dopo la consegna'], cta: 'Prenota la consulenza gratuita' },
    { name: 'Formazione AI per il team', price: 'Su preventivo', note: 'Anche senza un progetto', text: "Workshop pratici per rendere il tuo team autonomo con l'AI, con esempi concreti presi dal vostro lavoro quotidiano.", points: ['Sessioni dedicate per ruolo', "Casi d'uso reali della tua azienda", 'Materiale didattico', "Supporto all'adozione"], cta: 'Prenota la consulenza gratuita' },
  ],
};

// Prodotti di Flowline (oltre ai progetti su misura). Il primo è in sviluppo: niente prezzi né date.
export const PRODUCTS = {
  title: 'I nostri prodotti',
  text: "Oltre ai progetti su misura, sviluppiamo prodotti pronti da attivare, nati dai problemi che incontriamo più spesso nelle aziende.",
  items: [
    {
      id: 'assistente-whatsapp',
      name: 'Assistente WhatsApp',
      status: 'In sviluppo',
      text: "Un assistente AI che risponde ai tuoi clienti su WhatsApp, anche ai messaggi vocali, usando le informazioni della tua azienda.",
      points: ['Risponde ai clienti su WhatsApp', 'Capisce anche i messaggi vocali', 'Si basa sulle informazioni della tua azienda', 'Costruito con gli strumenti che integriamo ogni giorno'],
      note: "Lo stiamo ultimando. Se vuoi essere tra i primi a provarlo, scrivici: ti avvisiamo appena è pronto.",
    },
  ],
};
