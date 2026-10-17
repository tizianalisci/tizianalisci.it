import type { Lang } from './site';

export type L = Record<Lang, string>;
export type Pic = { src: string; alt: L; caption?: L; position?: string };

export type Block =
  | { type: 'chapter'; n: string; title: L; poem?: L }
  | { type: 'poem'; text: L; align?: 'left' | 'right' | 'center' }
  | { type: 'quote'; text: L }
  | { type: 'text'; kicker?: L; title?: L; text: L }
  | { type: 'full'; pic: Pic }
  | { type: 'single'; pic: Pic; align: 'left' | 'right' | 'center'; size?: 's' | 'm' | 'l' }
  | { type: 'pair'; pics: [Pic, Pic] }
  | { type: 'row'; pics: Pic[] }
  | { type: 'columns'; kicker?: L; items: { title: L; text: L }[] }
  | { type: 'process'; kicker: L; items: { title: L; text: L; pic: Pic }[] };


export type Project = {
  slug: string;
  n: string;
  title: string;
  subtitle: L;
  kind: L;
  year?: string;
  theme: 'dark' | 'light';
  hero: Pic;
  card: Pic;
  strip: Pic[];
  summary: L;
  seo: L;
  meta: { label: L; value: L }[];
  credits: { label: L; value: string }[];
  blocks: Block[];
};

const P = (src: string, it: string, en: string, position?: string): Pic => ({ src, alt: { it, en }, position });
const l = (it: string, en: string): L => ({ it, en });

/* ───────────────────────── CORPI SENZA VOLTO ───────────────────────── */

const corpi: Project = {
  slug: 'corpi-senza-volto',
  n: '01',
  title: 'Corpi senza volto',
  subtitle: l('Il corpo femminile tra controllo e riappropriazione', 'The female body between control and reclamation'),
  kind: l('Libro fotografico', 'Photobook'),
  year: '2026',
  theme: 'dark',
  hero: P('corpi/back', 'Le otto ballerine di Corpi senza volto abbracciate davanti a un sipario scuro, luce calda', 'The eight dancers of Corpi senza volto leaning on each other in front of a dark curtain, warm light', '50% 40%'),
  card: P('corpi/cover', 'Copertina di Corpi senza volto: otto ballerine in body nero davanti al sipario', 'Corpi senza volto cover: eight dancers in black leotards in front of a curtain'),
  strip: [
    P('corpi/cover', 'Otto ballerine davanti al sipario', 'Eight dancers in front of the curtain'),
    P('corpi/controllo-04', 'Schiena nuda di ballerina con le braccia alzate, muscoli scolpiti dalla luce', 'A dancer’s bare back, arms raised, muscles carved by light'),
    P('corpi/respiro-02', 'Ritratto in bianco e nero di una ballerina', 'Black and white portrait of a dancer'),
  ],
  summary: l(
    'Un libro fotografico con otto ballerine, in cinque capitoli. Corpi che non chiedono di essere riconosciuti, ma visti.',
    'A photobook with eight dancers, in five chapters. Bodies that don’t ask to be recognised, but to be seen.',
  ),
  seo: l(
    'Corpi senza volto di Tiziana Lisci: libro fotografico sul corpo femminile tra controllo e riappropriazione. Otto ballerine, cinque capitoli. Roma, 2026.',
    'Corpi senza volto (Faceless Bodies) by Tiziana Lisci: a photobook on the female body between control and reclamation. Eight dancers, five chapters. Rome, 2026.',
  ),
  meta: [
    { label: l('Formato', 'Format'), value: l('Libro fotografico', 'Photobook') },
    { label: l('Anno', 'Year'), value: l('2026', '2026') },
  ],
  credits: [
    { label: l('Concept, ricerca, narrazione visiva, art direction e direzione di progetto', 'Concept, research, visual narrative, art direction & project direction'), value: 'Tiziana Lisci' },
    { label: l('Book design e impaginazione', 'Book design & layout'), value: 'Tiziana Lisci' },
    { label: l('Fotografia e post-produzione', 'Photography & post-production'), value: 'Luca Pegorer' },
    { label: l('Assistente fotografo', 'Photography assistant'), value: 'Giusi Cristofano' },
    { label: l('Ballerine', 'Dancers'), value: 'Nadia Alberti, Silvia Andriani, Giovanna Auriemma, Claudia Cassano, Veronica Di Cristofaro, Irene Maurelli, Aurora Paoloni, Elena Pisani' },
    { label: l('Location', 'Location'), value: 'Sala Prove Off, Teatro Golden, Roma' },
  ],
  blocks: [
    { type: 'quote', text: l('Chi racconta il corpo femminile, con quale sguardo e con quale intenzione?', 'Who tells the story of the female body, with what gaze, and with what intention?') },
    {
      type: 'text',
      kicker: l('Introduzione', 'Introduction'),
      text: l(
        'Corpi senza volto non è un progetto sull’assenza. È un progetto sulla presenza, quella presenza che troppo spesso viene ignorata, ridotta, non riconosciuta.\n\nLe donne che incontrerai qui hanno un volto. Hanno un’identità. Ma in questo progetto non ti chiedo di riconoscerle: ti chiedo di vederle. Di guardare come si muovono, dove portano il peso, dove trovano la forza. Di cercare chi sono non nei loro lineamenti, ma nel modo in cui occupano lo spazio, trasformano il movimento in linguaggio e il corpo in voce.\n\nPrima di ogni scatto, a ciascuna di loro è stata letta una serie di domande. Non dovevano rispondere a parole. Dovevano rispondere con il corpo. Quello che vedi è il risultato di quelle risposte.\n\nCinque capitoli, cinque momenti. Un percorso che non ha una soluzione, ma ha una direzione: verso una presenza che non chiede il permesso di esistere.',
        'Corpi senza volto is not a project about absence. It is a project about presence: the kind of presence that is too often ignored, diminished, unacknowledged.\n\nThe women you will meet here have faces. They have identities. But in this project I am not asking you to recognise them: I am asking you to see them. To watch how they move, where they carry their weight, where they find their strength. To look for who they are not in their features, but in the way they occupy space, turn movement into language and the body into a voice.\n\nBefore every shot, each of them was read a series of questions. They were not to answer in words. They were to answer with their bodies. What you see is the result of those answers.\n\nFive chapters, five moments. A path with no solution, but with a direction: towards a presence that does not ask permission to exist.',
      ),
    },
    { type: 'poem', align: 'center', text: l('A chi, anche solo un giorno,\nsi è sentito sbagliato per essere sé stesso.', 'To anyone who, even for a single day,\nfelt wrong for being themselves.') },

    /* PROCESSO */
    {
      type: 'columns',
      kicker: l('Scelte stilistiche', 'Stylistic choices'),
      items: [
        { title: l('La danza', 'Dance'), text: l('Un linguaggio, prima ancora che una scelta estetica. Il corpo della ballerina attraversa controllo e disciplina, trovando nel movimento una forma autentica di espressione.', 'A language before it is an aesthetic choice. The dancer’s body moves through control and discipline, finding in movement an authentic form of expression.') },
        { title: l('La fotografia', 'Photography'), text: l('Cristallizzare il momento, fermare il movimento per educare lo sguardo. L’immagine fissa invita a sostare e a riconoscere il corpo come soggetto.', 'Crystallising the moment, stopping movement to train the gaze. The still image invites you to pause and recognise the body as a subject.') },
        { title: l('Bianco e nero / colore', 'Black & white / colour'), text: l('Due possibilità espressive, non due momenti narrativi. Il bianco e nero enfatizza forma, gesto e tensione; il colore restituisce vitalità e presenza fisica.', 'Two expressive possibilities, not two narrative moments. Black and white emphasises form, gesture and tension; colour gives back vitality and physical presence.') },
      ],
    },
    {
      type: 'process',
      kicker: l('Processo creativo', 'Creative process'),
      items: [
        { title: l('La ricerca', 'Research'), text: l('Riferimenti di danza e fotografia raccolti prima dello shooting.', 'Dance and photography references gathered before the shoot.'), pic: P('corpi/processo-03', 'Riferimento visivo: danzatrice con abito bianco', 'Visual reference: a dancer in a white dress') },
        { title: l('Il metodo', 'Method'), text: l('Prima di ogni scatto, a ciascuna ballerina è stata letta una serie di domande. Dovevano rispondere con il corpo.', 'Before every shot, each dancer was read a series of questions. They had to answer with their bodies.'), pic: P('corpi/processo-02', 'Briefing con le ballerine in sala prove', 'Briefing with the dancers in the rehearsal room') },
        { title: l('La location', 'Location'), text: l('Sala Prove Off, Teatro Golden, Roma.', 'Sala Prove Off, Teatro Golden, Rome.'), pic: P('corpi/processo-04', 'La sala prove vuota del Teatro Golden', 'The empty rehearsal room at Teatro Golden') },
        { title: l('La direzione artistica', 'Art direction'), text: l('Sul set con il fotografo Luca Pegorer.', 'On set with photographer Luca Pegorer.'), pic: P('corpi/processo-05', 'Sul set: il fotografo scatta, la direzione artistica segue', 'On set: the photographer shoots while art direction follows') },
      ],
    },

    /* 01 — CONTROLLO */
    {
      type: 'chapter', n: '01', title: l('Controllo', 'Control'),
      poem: l(
        'Chi sei, quando nessuno ti guarda?\nE quando tutti ti guardano?\n\nC’è sempre uno sguardo.\nAnche quando non lo vedi.\nAnche quando pensi di essere sola.\n\nCi sono regole che non vengono dette.\nMa si imparano lo stesso.\nCome stare.\nCome muoversi.\nCome occupare meno spazio.\n\nIl tuo corpo è stato educato.\nCorretto.\nDisciplinato.\nHa imparato a contenersi.\nA non eccedere.\nA non disturbare.',
        'Who are you, when no one is watching?\nAnd when everyone is?\n\nThere is always a gaze.\nEven when you can’t see it.\nEven when you think you’re alone.\n\nThere are rules no one says out loud.\nBut you learn them anyway.\nHow to stand.\nHow to move.\nHow to take up less space.\n\nYour body has been trained.\nCorrected.\nDisciplined.\nIt has learned to hold itself back.\nNot to exceed.\nNot to disturb.',
      ),
    },
    { type: 'single', align: 'right', size: 'm', pic: P('corpi/controllo-01', 'Ballerina di profilo sulle punte, isolata nel buio', 'A dancer in profile on pointe, isolated in darkness') },
    { type: 'pair', pics: [P('corpi/controllo-02', 'Ballerina con le braccia tese, il corpo in tensione', 'A dancer with arms outstretched, body in tension'), P('corpi/controllo-03', 'Figura in arabesque su fondo nero', 'A figure in arabesque against black')] },
    { type: 'single', align: 'center', size: 'l', pic: P('corpi/controllo-04', 'Schiena nuda con le braccia in alto: i muscoli disegnati dalla luce', 'A bare back with arms raised: muscles drawn by the light') },
    { type: 'single', align: 'left', size: 'm', pic: P('corpi/controllo-05', 'Ballerina seduta, il busto inclinato nell’ombra', 'A seated dancer leaning into shadow') },
    { type: 'row', pics: [P('corpi/controllo-06', 'Gambe sulle punte, corpo piegato in avanti', 'Legs on pointe, body folded forward'), P('corpi/controllo-07', 'Ballerina accovacciata sulle punte', 'A dancer crouched on pointe'), P('corpi/controllo-08', 'Una gamba tesa emerge dal buio', 'An extended leg emerging from darkness')] },

    /* 02 — INSTABILITÀ */
    {
      type: 'chapter', n: '02', title: l('Instabilità', 'Instability'),
      poem: l(
        'Quante volte ti sei sentita osservata?\nQuante volte giudicata?\nNon per quello che fai.\nMa per quello che sei.\n\nQuante volte ti sei sentita sminuita?\nE quante volte ti hanno fatto sentire inferiore?\nSenza alzare la voce.\nSenza dire niente.\nMa facendotelo capire.\n\nQuante volte ti sei adattata?\nHai cambiato un gesto.\nAbbassato lo sguardo.\nTrattenuto un movimento.\nSenza poter dire niente.',
        'How many times have you felt watched?\nHow many times judged?\nNot for what you do.\nBut for who you are.\n\nHow many times have you felt belittled?\nAnd how many times were you made to feel less?\nWithout a raised voice.\nWithout a word.\nJust making sure you understood.\n\nHow many times did you adapt?\nYou changed a gesture.\nLowered your eyes.\nHeld back a movement.\nWithout being able to say a thing.',
      ),
    },
    { type: 'full', pic: P('corpi/instabilita-01', 'Busto inarcato all’indietro, braccia aperte nel buio', 'A torso arched backwards, arms open in the dark') },
    { type: 'pair', pics: [P('corpi/instabilita-02', 'Ballerina in equilibrio precario, una gamba sollevata', 'A dancer off balance, one leg raised'), P('corpi/instabilita-03', 'Figura sospesa in un salto', 'A figure suspended mid-jump')] },
    { type: 'single', align: 'left', size: 's', pic: P('corpi/instabilita-04', 'Dettaglio di un braccio teso', 'Detail of an outstretched arm') },
    { type: 'pair', pics: [P('corpi/instabilita-05', 'Bianco e nero: busto con la testa reclinata', 'Black and white: a torso with head tilted back'), P('corpi/instabilita-06', 'Bianco e nero: dettaglio di spalla e collo', 'Black and white: detail of shoulder and neck')] },
    { type: 'single', align: 'right', size: 'm', pic: P('corpi/instabilita-07', 'Ballerina con la gonna in movimento, capelli all’indietro', 'A dancer with skirt in motion, hair flung back') },
    { type: 'single', align: 'left', size: 'm', pic: P('corpi/instabilita-08', 'Corpo capovolto, gambe verso l’alto', 'An upturned body, legs reaching up') },
    { type: 'full', pic: P('corpi/instabilita-09', 'Bianco e nero: braccio e gamba tra le pieghe del tessuto', 'Black and white: arm and leg among folds of fabric') },

    /* 03 — REAZIONE */
    {
      type: 'chapter', n: '03', title: l('Reazione', 'Reaction'),
      poem: l(
        'A chi appartiene il tuo corpo?\nA te? O a chi guarda?\n\nC’è una forma giusta.\nUn modo giusto e un limite da non superare.\nE se lo superi…\ndiventi troppo.\nTroppo visibile.\nTroppo presente.\nTroppo.\n\nE se smettessi?\nDi correggerti.\nDi trattenerti.\nDi renderti più piccola.\n\nCome si muove un corpo che non chiede il permesso?\nCome si muove un corpo che non vuole più piacere?',
        'Who does your body belong to?\nTo you? Or to whoever is watching?\n\nThere is a right shape.\nA right way, and a line not to be crossed.\nAnd if you cross it…\nyou become too much.\nToo visible.\nToo present.\nToo much.\n\nWhat if you stopped?\nCorrecting yourself.\nHolding back.\nMaking yourself smaller.\n\nHow does a body move when it doesn’t ask for permission?\nHow does a body move when it no longer wants to please?',
      ),
    },
    { type: 'single', align: 'center', size: 'l', pic: P('corpi/reazione-01', 'Corpo capovolto con le gambe aperte a V verso l’alto', 'An upturned body, legs opening in a V') },
    { type: 'pair', pics: [P('corpi/reazione-02', 'Figura raccolta in movimento', 'A gathered figure in motion'), P('corpi/reazione-03', 'Ballerina in piedi, postura aperta e sguardo diretto', 'A standing dancer, open stance, direct gaze')] },
    { type: 'single', align: 'right', size: 'm', pic: P('corpi/reazione-04', 'Bianco e nero: due ballerine in slancio', 'Black and white: two dancers lunging') },
    { type: 'single', align: 'left', size: 's', pic: P('corpi/reazione-05', 'Ballerina in salto, la gonna come un’ombra', 'A dancer leaping, her skirt like a shadow') },
    { type: 'full', pic: P('corpi/reazione-06', 'Braccia spalancate, volto rivolto alla luce', 'Arms flung wide, face turned to the light') },
    { type: 'single', align: 'center', size: 'm', pic: P('corpi/reazione-07', 'Bianco e nero: intreccio di gambe e corpi', 'Black and white: a tangle of legs and bodies') },

    /* 04 — ESPOSIZIONE */
    {
      type: 'chapter', n: '04', title: l('Esposizione', 'Exposure'),
      poem: l(
        'Come si muove un corpo che rifiuta di essere guardato?\nMa è comunque esposto.\n\nDove senti il peso?\nNelle spalle?\nNelle mani?\nNel respiro?\nE invece dove senti la forza?\n\nLascia che il tuo corpo risponda.\nNon cercare una forma giusta\no di essere vista nel modo corretto.\n\nEssere visibile non è sempre una scelta.\nMa può diventare una presa di posizione.',
        'How does a body move when it refuses to be looked at?\nYet is exposed all the same.\n\nWhere do you feel the weight?\nIn your shoulders?\nIn your hands?\nIn your breath?\nAnd where do you feel your strength?\n\nLet your body answer.\nDon’t look for the right shape\nor to be seen the right way.\n\nBeing visible isn’t always a choice.\nBut it can become a stance.',
      ),
    },
    { type: 'single', align: 'right', size: 's', pic: P('corpi/esposizione-01', 'Figura capovolta sospesa nel buio', 'An inverted figure suspended in darkness') },
    { type: 'full', pic: P('corpi/esposizione-02', 'Bianco e nero: grand jeté, il corpo in volo', 'Black and white: a grand jeté, the body in flight') },
    { type: 'single', align: 'left', size: 'm', pic: P('corpi/esposizione-03', 'Bianco e nero: due ballerine saltano davanti alle finestre della sala prove', 'Black and white: two dancers leap in front of the rehearsal room windows') },
    { type: 'full', pic: P('corpi/esposizione-04', 'Controluce: capelli e schiena distesa a terra', 'Backlit: hair and a back stretched on the floor') },
    { type: 'single', align: 'right', size: 'm', pic: P('corpi/esposizione-06', 'Ballerina in spaccata a mezz’aria', 'A dancer in a mid-air split') },
    { type: 'full', pic: P('corpi/esposizione-05', 'Bianco e nero: salto nella sala prove', 'Black and white: a leap in the rehearsal room') },

    /* 05 — RESPIRO */
    {
      type: 'chapter', n: '05', title: l('Respiro', 'Breath'),
      poem: l(
        'Lascia emergere quello che resta.\nQuello che non è stato detto. Quello che non ha trovato spazio.\nNon tutto deve essere composto. Non tutto deve essere corretto.\n\nC’è un momento in cui il corpo smette di trattenere.\nE il respiro cambia.\nSi allarga. Occupa spazio.\n\nIl corpo non chiede più il permesso. Non si riduce. Non si corregge.\nNon è una rottura. È qualcosa di più sottile. Una presenza.\n\nIl corpo resta. Intero. Visibile.\nNon è più adattamento. Non è più reazione.\nÈ scelta.\n\nSe nessuno ti avesse mai detto come essere… come ti muoveresti?',
        'Let what remains come to the surface.\nWhat was left unsaid. What found no room.\nNot everything has to be composed. Not everything has to be corrected.\n\nThere is a moment when the body stops holding back.\nAnd the breath changes.\nIt widens. It takes up space.\n\nThe body no longer asks for permission. It doesn’t shrink. It doesn’t correct itself.\nIt isn’t a rupture. It’s something subtler. A presence.\n\nThe body remains. Whole. Visible.\nNo longer adaptation. No longer reaction.\nA choice.\n\nIf no one had ever told you how to be… how would you move?',
      ),
    },
    { type: 'single', align: 'left', size: 'm', pic: P('corpi/respiro-01', 'Ballerina con un braccio alzato, l’addome nella luce', 'A dancer with one arm raised, her abdomen in the light') },
    { type: 'pair', pics: [P('corpi/respiro-02', 'Ritratto in bianco e nero, sguardo in camera', 'Black and white portrait, looking into the camera'), P('corpi/respiro-04', 'Ritratto in bianco e nero, capelli sciolti', 'Black and white portrait, hair loose')] },
    { type: 'full', pic: P('corpi/respiro-03', 'Bianco e nero: le otto ballerine in fila', 'Black and white: the eight dancers in a line') },
    { type: 'full', pic: P('corpi/respiro-05', 'Il gruppo con le braccia levate verso l’alto, luce calda', 'The group with arms raised upwards, warm light') },
    { type: 'pair', pics: [P('corpi/respiro-06', 'Ritratto con lunghi capelli scuri', 'Portrait with long dark hair'), P('corpi/respiro-09', 'Ritratto in bianco e nero, sguardo fermo', 'Black and white portrait, steady gaze')] },
    { type: 'single', align: 'center', size: 's', pic: P('corpi/respiro-07', 'Ballerina in piedi a figura intera, sola nel buio', 'A dancer standing full length, alone in the dark') },
    { type: 'full', pic: P('corpi/respiro-08', 'Bianco e nero: il gruppo in movimento', 'Black and white: the group in motion') },
    { type: 'full', pic: P('corpi/respiro-10', 'Corpi intrecciati a terra, volti distesi, luce calda', 'Bodies intertwined on the floor, faces at rest, warm light') },

  ],
};

/* ───────────────────────── UNHOLY ───────────────────────── */

const unholy: Project = {
  slug: 'unholy',
  n: '02',
  title: 'Unholy',
  subtitle: l('La liturgia della carne', 'The liturgy of the flesh'),
  kind: l('Serie fotografica', 'Photographic series'),
  year: '2026',
  theme: 'dark',
  hero: P('unholy/unholy-20', 'Un abbraccio nella penombra: una mano tiene la testa dell’altro', 'An embrace in half-light: one hand cradling the other’s head', '50% 45%'),
  card: P('unholy/unholy-11', 'Mani che intrecciano lunghi capelli scuri nella penombra', 'Hands braiding long dark hair in half-light'),
  strip: [
    P('unholy/unholy-01', 'Pompelmo rosso in una teca trasparente', 'A red grapefruit in a clear case'),
    P('unholy/unholy-21', 'Due volti che si sfiorano e sorridono', 'Two faces touching, smiling'),
    P('unholy/unholy-30', 'Ombre di due corpi proiettate sul muro', 'Shadows of two bodies cast on a wall'),
  ],
  summary: l(
    'Una serie fotografica sull’intimità, scattata in una camera da letto con due persone, Morgana e Mattia. Le foto si alternano ai testi, come in un piccolo libro di preghiere.',
    'A photographic series on intimacy, shot in a bedroom with two people, Morgana and Mattia. The photographs alternate with short texts, like a small book of prayers.',
  ),
  seo: l(
    'Unholy, La liturgia della carne: serie fotografica di Tiziana Lisci sull’intimità come rito privato, tra desiderio, fragilità e il coraggio di lasciarsi vedere. Roma, 2026.',
    'Unholy, The Liturgy of the Flesh: a photographic series by Tiziana Lisci on intimacy as a private rite, between desire, fragility and the courage to be seen. Rome, 2026.',
  ),
  meta: [
    { label: l('Formato', 'Format'), value: l('Serie fotografica e fotolibro', 'Photographic series & photobook') },
    { label: l('Anno', 'Year'), value: l('2026', '2026') },
  ],
  credits: [
    { label: l('Fotografia e cura', 'Photography & curation'), value: 'Tiziana Lisci' },
    { label: l('Modelli', 'Models'), value: 'Morgana e Mattia' },
  ],
  blocks: [
    { type: 'poem', align: 'center', text: l('Il sacro non è sempre un tempio.\nTalvolta è una stanza chiusa.\nUn letto sfatto.\nUn corpo che nessuno vede.', 'The sacred isn’t always a temple.\nSometimes it is a closed room.\nAn unmade bed.\nA body no one sees.') },
    { type: 'single', align: 'center', size: 'm', pic: P('unholy/unholy-01', 'Mezzo pompelmo rosso chiuso in una teca di plexiglass', 'Half a red grapefruit sealed in a plexiglass case') },
    { type: 'single', align: 'right', size: 'm', pic: P('unholy/unholy-02', 'Un letto sfatto, cuscini a fiori', 'An unmade bed, floral pillows') },
    { type: 'pair', pics: [P('unholy/unholy-03', 'Bianco e nero: donna seduta sul letto in lingerie', 'Black and white: a woman sitting on the bed in lingerie'), P('unholy/unholy-04', 'Bianco e nero: corpo disteso tra le lenzuola', 'Black and white: a body lying among the sheets')] },
    { type: 'full', pic: P('unholy/unholy-05', 'Collo e clavicole nella penombra', 'Neck and collarbones in half-light') },
    { type: 'poem', align: 'left', text: l('Chiudersi la porta alle spalle è il primo gesto liturgico.\nFuori restano i pensieri, i rumori del traffico,\nle scadenze, la gente che parla troppo.\n\nCosa fai ora che nessuno ti vede?\nOra che resti solo con te stesso?\n\nQui, dentro le tapparelle abbassate, solo tu e la carne:\nla pelle è l’unico confessionale rimasto.', 'Closing the door behind you is the first liturgical gesture.\nOutside remain the thoughts, the traffic noise,\nthe deadlines, the people who talk too much.\n\nWhat do you do now that no one can see you?\nNow that you’re alone with yourself?\n\nHere, behind lowered blinds, only you and the flesh:\nskin is the only confessional left.') },
    { type: 'pair', pics: [P('unholy/unholy-06', 'Donna in lingerie, lo sguardo verso il basso', 'A woman in lingerie, eyes lowered'), P('unholy/unholy-07', 'Donna di spalle davanti a una finestra', 'A woman seen from behind by a window')] },
    { type: 'single', align: 'left', size: 'm', pic: P('unholy/unholy-08', 'Volto maschile capovolto, occhi chiusi', 'An upside-down male face, eyes closed') },
    { type: 'poem', align: 'right', text: l('Ci sono giorni in cui farsi del bene\nsignifica consumarsi le dita,\ntrovare il sacro lì dove gli altri\nvedono solo una colpa.', 'There are days when being good to yourself\nmeans wearing down your fingertips,\nfinding the sacred where others\nsee only guilt.') },
    { type: 'pair', pics: [P('unholy/unholy-09', 'Corpo femminile inarcato sul bordo del letto, braccia abbandonate', 'A female body arched over the edge of the bed, arms let go'), P('unholy/unholy-10', 'Mani che coprono e accarezzano il corpo', 'Hands covering and caressing the body')] },
    { type: 'poem', align: 'center', text: l('Ci sono gesti che diventano rituali.\nCi sono gesti che diventano ricordi.\nRimangono impressi nella mente\ne nessuno te li può togliere,\ne nessuno te li può rubare.', 'There are gestures that become rituals.\nThere are gestures that become memories.\nThey stay etched in the mind\nand no one can take them away,\nand no one can steal them.') },
    { type: 'pair', pics: [P('unholy/unholy-11', 'Mani maschili che intrecciano una lunga treccia', 'A man’s hands braiding long hair'), P('unholy/unholy-12', 'Due mani che si sfiorano', 'Two hands brushing against each other')] },
    { type: 'pair', pics: [P('unholy/unholy-13', 'Schiena nuda con una lunga treccia, seduta sul letto', 'A bare back with a long braid, sitting on the bed'), P('unholy/unholy-14', 'Bianco e nero: schiena e pizzo nero', 'Black and white: a back and black lace')] },
    { type: 'full', pic: P('unholy/unholy-15', 'Bianco e nero: schiena e treccia nella penombra', 'Black and white: a back and braid in half-light') },
    { type: 'single', align: 'right', size: 'm', pic: P('unholy/unholy-16', 'Un fianco disteso, pizzo nero sulla pelle', 'A hip at rest, black lace on skin') },
    { type: 'single', align: 'left', size: 'm', pic: P('unholy/unholy-17', 'Bianco e nero: la linea morbida di un corpo', 'Black and white: the soft line of a body') },
    { type: 'pair', pics: [P('unholy/unholy-18', 'Mani intrecciate sul lenzuolo', 'Hands entwined on the sheet'), P('unholy/unholy-19', 'Polsi e mani sul cuscino', 'Wrists and hands on the pillow')] },
    { type: 'poem', align: 'left', text: l('Nessuno ci ha insegnato\nquanto coraggio serva\nper lasciarsi toccare.', 'No one ever taught us\nhow much courage it takes\nto let yourself be touched.') },
    { type: 'full', pic: P('unholy/unholy-20', 'Un abbraccio: una mano tiene la testa dell’altro', 'An embrace: one hand cradling the other’s head') },
    { type: 'poem', align: 'right', text: l('E ancora di più nel lasciarsi vedere.', 'And even more to let yourself be seen.') },
    { type: 'single', align: 'center', size: 'm', pic: P('unholy/unholy-21', 'Due volti che si sfiorano, lei sorride', 'Two faces touching, she smiles') },
    { type: 'row', pics: [P('unholy/unholy-22', 'Sequenza di un bacio, primo fotogramma', 'A kiss in sequence, first frame'), P('unholy/unholy-23', 'Sequenza di un bacio, secondo fotogramma', 'A kiss in sequence, second frame'), P('unholy/unholy-24', 'Sequenza di un bacio, terzo fotogramma', 'A kiss in sequence, third frame'), P('unholy/unholy-25', 'Sequenza di un bacio, quarto fotogramma', 'A kiss in sequence, fourth frame')] },
    { type: 'full', pic: P('unholy/unholy-26', 'Braccia e mani sulla pelle, luce calda', 'Arms and hands on skin, warm light') },
    { type: 'poem', align: 'center', text: l('Tutti sono capaci a spogliarsi.\nÈ un gesto semplice. Quotidiano. Automatico.\n\nMa l’intimità pretende altro.\nChiede di togliere ciò che il corpo non può coprire:\nle paure,\ni desideri,\nle fragilità.', 'Anyone can undress.\nIt’s a simple gesture. Everyday. Automatic.\n\nBut intimacy demands more.\nIt asks you to remove what the body cannot cover:\nfears,\ndesires,\nfragilities.') },
    { type: 'pair', pics: [P('unholy/unholy-27', 'Bianco e nero: volto addormentato sul cuscino', 'Black and white: a sleeping face on the pillow'), P('unholy/unholy-28', 'Un bacio sul collo, una mano sulla gola', 'A kiss on the neck, a hand at the throat')] },
    { type: 'pair', pics: [P('unholy/unholy-29', 'Mani maschili sul fianco di lei', 'His hands on her hip'), P('unholy/unholy-30', 'Ombre di due corpi proiettate sul muro', 'Shadows of two bodies cast on a wall')] },
  ],
};

/* ───────────────────────── VANESSA ───────────────────────── */

const vanessa: Project = {
  slug: 'vanessa',
  n: '03',
  title: 'Vanessa',
  subtitle: l('Ritratto editoriale', 'Editorial portrait'),
  kind: l('Ritratto editoriale', 'Editorial portrait'),
  year: '2026',
  theme: 'light',
  hero: P('vanessa/vanessa-02', 'Volto coperto da un velo nero ricamato a pizzo', 'A face veiled in black embroidered lace', '50% 30%'),
  card: P('vanessa/vanessa-02', 'Volto coperto da un velo nero ricamato a pizzo', 'A face veiled in black embroidered lace', '50% 30%'),
  strip: [
    P('vanessa/vanessa-02', 'Velo nero di pizzo sul volto', 'Black lace veil over the face'),
    P('vanessa/vanessa-05', 'Ritratto a colori, mani sul viso', 'Colour portrait, hands on her face'),
    P('vanessa/vanessa-01', 'Bianco e nero: donna accovacciata di profilo', 'Black and white: a woman crouching in profile'),
  ],
  summary: l(
    'Ritratto editoriale.',
    'Editorial portrait.',
  ),
  seo: l(
    'Vanessa, ritratto editoriale di Tiziana Lisci: con Vanessa Tordella tra velo, pizzo, corsetteria e atelier. Roma, 2026.',
    'Vanessa, an editorial portrait by Tiziana Lisci: with Vanessa Tordella: veil, lace, corsetry and atelier. Rome, 2026.',
  ),
  meta: [
    { label: l('Formato', 'Format'), value: l('Ritratto editoriale', 'Editorial portrait') },
    { label: l('Anno', 'Year'), value: l('2026', '2026') },
  ],
  credits: [
    { label: l('Concept, fotografia, styling e direzione creativa', 'Concept, photography, styling & creative direction'), value: 'Tiziana Lisci' },
    { label: l('Modella', 'Model'), value: 'Vanessa Tordella' },
    { label: l('Assistente alla fotografia', 'Photography assistant'), value: 'Luca Pegorer' },
  ],
  blocks: [
    { type: 'single', align: 'left', size: 'm', pic: P('vanessa/vanessa-01', 'Bianco e nero: donna dai lunghi capelli chiari accovacciata di profilo', 'Black and white: a woman with long fair hair crouching in profile') },
    { type: 'full', pic: P('vanessa/vanessa-02', 'Volto coperto da un velo nero ricamato a pizzo', 'A face veiled in black embroidered lace') },
    { type: 'pair', pics: [P('vanessa/vanessa-03', 'Figura intera con velo lungo e body in pizzo', 'Full figure with a long veil and lace bodysuit'), P('vanessa/vanessa-04', 'Dettaglio del corsetto di pizzo e dei tatuaggi', 'Detail of the lace corset and tattoos')] },
    { type: 'single', align: 'right', size: 'm', pic: P('vanessa/vanessa-05', 'Ritratto a colori: mani sul viso, eyeliner grafico', 'Colour portrait: hands framing the face, graphic eyeliner') },
    { type: 'single', align: 'left', size: 'm', pic: P('vanessa/vanessa-06', 'Bianco e nero: schiena tatuata, seduta su uno sgabello', 'Black and white: a tattooed back, seated on a stool') },
    { type: 'row', pics: [P('vanessa/vanessa-07', 'In atelier: sistema un abito bianco sul manichino', 'In the atelier: adjusting a white dress on a mannequin'), P('vanessa/vanessa-08', 'Dettaglio delle mani sul tessuto bianco', 'Detail of hands on white fabric'), P('vanessa/vanessa-09', 'In completo nero tra i manichini dell’atelier', 'In a black suit among the atelier’s mannequins')] },
  ],
};

export const PROJECTS: Project[] = [corpi, unholy, vanessa];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug)!;
}
