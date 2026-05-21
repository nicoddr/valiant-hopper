const questions = [
  // ==========================================
  // FRIENDS CATEGORY
  // ==========================================
  // SOFT (Green)
  {
    id: "friends_soft_1",
    category: "friends",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, what is your favorite memory of {p1}?",
      fr: "{active}, quel est ton meilleur souvenir avec {p1} ?",
      es: "{active}, ¿cuál es tu mejor recuerdo con {p1}?",
      lt: "{active}, koks tavo geriausias prisiminimas su {p1}?",
      jp: "{active}さん、{p1}さんとの一番の思い出は何ですか？"
    }
  },
  {
    id: "friends_soft_2",
    category: "friends",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, what is a talent of {p1} that you wish you had?",
      fr: "{active}, quel est le talent de {p1} que tu aimerais avoir ?",
      es: "{active}, ¿qué talento de {p1} te gustaría tener?",
      lt: "{active}, kokį {p1} talentą norėtum turėti pats?",
      jp: "{active}さん、{p1}さんの才能で、自分も持っていたいと思うものは何ですか？"
    }
  },
  {
    id: "friends_soft_3",
    category: "friends",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, if {p1} were a color, which one would they be and why?",
      fr: "{active}, si {p1} était une couleur, laquelle serait-ce et pourquoi ?",
      es: "{active}, si {p1} fuera un color, ¿cuál sería y por qué?",
      lt: "{active}, jei {p1} būtų spalva, kokia ji būtų ir kodėl?",
      jp: "{active}さん、{p1}さんが色だとしたら、何色だと思いますか？その理由は？"
    }
  },
  {
    id: "friends_soft_4",
    category: "friends",
    type: "soft",
    minPlayers: 3,
    text: {
      en: "Who laughs the loudest when the group is together, {p1} or {p2}?",
      fr: "Qui rit le plus fort quand le groupe est ensemble, {p1} ou {p2} ?",
      es: "¿Quién se ríe más fuerte cuando el grupo está junto, {p1} o {p2}?",
      lt: "Kas garsiausiai juokiasi, kai visa grupė kartu: {p1} ar {p2}?",
      jp: "みんなが集まっているとき、一番笑い声が大きいのは誰ですか？{p1}さん、それとも{p2}さん？"
    }
  },
  {
    id: "friends_soft_5",
    category: "friends",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, what is the best advice {p1} has ever given you?",
      fr: "{active}, quel est le meilleur conseil que {p1} t'ait jamais donné ?",
      es: "{active}, ¿cuál es el mejor consejo que te ha dado {p1}?",
      lt: "{active}, koks yra geriausias patarimas, kurį tau yra davęs {p1}?",
      jp: "{active}さん、{p1}さんからこれまでに貰った最も良いアドバイスは何ですか？"
    }
  },
  // EMPATHY (Blue)
  {
    id: "friends_empathy_1",
    category: "friends",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, what is {p1}'s biggest source of stress right now? How can you support them?",
      fr: "{active}, quelle est la plus grande source de stress de {p1} en ce moment ? Comment peux-tu l'aider ?",
      es: "{active}, ¿cuál es la mayor fuente de estrés de {p1} en este momento? ¿Cómo puedes apoyarle?",
      lt: "{active}, kas šiuo metu labiausiai kelia stresą {p1}? Kaip gali jį palaikyti?",
      jp: "{active}さん、{p1}さんが今一番ストレスに感じていることは何ですか？どうサポートできますか？"
    }
  },
  {
    id: "friends_empathy_2",
    category: "friends",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, what would {p1} say is their favorite quality in you?",
      fr: "{active}, d'après toi, quelle est la qualité que {p1} préfère chez toi ?",
      es: "{active}, ¿qué crees que diría {p1} que es tu mejor cualidad?",
      lt: "{active}, kaip manai, kokią tavo savybę {p1} vertina labiausiai?",
      jp: "{active}さん、{p1}さんはあなたのどんな資質が一番好きだと言うと思いますか？"
    }
  },
  {
    id: "friends_empathy_3",
    category: "friends",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, when was the last time you felt {p1} needed a hug or someone to talk to?",
      fr: "{active}, quand as-tu senti pour la dernière fois que {p1} avait besoin d'un câlin ou de parler ?",
      es: "{active}, ¿cuándo fue la última vez que sentiste que {p1} necesitaba un abrazo o alguien con quien hablar?",
      lt: "{active}, kada paskutinį kartą jautei, kad {p1} reikia apkabinimo ar pokalbio?",
      jp: "{active}さん、{p1}さんがハグや話し相手を必要としていると最後に感じたのはいつですか？"
    }
  },
  {
    id: "friends_empathy_4",
    category: "friends",
    type: "empathy",
    minPlayers: 3,
    text: {
      en: "{active}, who is the most sensitive person in this group: {p1} or {p2}? How does it show?",
      fr: "{active}, qui est la personne la plus sensible de ce groupe : {p1} ou {p2} ? Comment cela se manifeste-t-il ?",
      es: "{active}, ¿quién es la persona más sensible de este grupo: {p1} o {p2}? ¿Cómo se nota?",
      lt: "{active}, kas yra jautriausias žmogus šioje grupėje: {p1} ar {p2}? Kaip tai pasireiškia?",
      jp: "{active}さん、このグループの中でより感受性が豊かなのは誰ですか？{p1}さん、それとも{p2}さん？それはどう表れていますか？"
    }
  },
  // DEEP (Black)
  {
    id: "friends_deep_1",
    category: "friends",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, have you ever kept a secret from {p1} to protect their feelings? What was it about?",
      fr: "{active}, as-tu déjà caché un secret à {p1} pour ménager ses sentiments ? De quoi s'agissait-il ?",
      es: "{active}, ¿le has ocultado alguna vez un secreto a {p1} para no lastimarle? ¿De qué trataba?",
      lt: "{active}, ar kada nors nuslėpei paslaptį nuo {p1}, kad neįžeistum jo jausmų? Apie ką tai buvo?",
      jp: "{active}さん、{p1}さんの気持ちを守るために秘密にしていることはありますか？それは何に関連することですか？"
    }
  },
  {
    id: "friends_deep_2",
    category: "friends",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, what is a behavior pattern in {p1}'s life that they repeat but might not notice?",
      fr: "{active}, quel est le schéma répétitif dans la vie de {p1} qu'il/elle ne remarque pas forcément ?",
      es: "{active}, ¿cuál es un patrón de comportamiento en la vida de {p1} que repite pero no se da cuenta?",
      lt: "{active}, kokį elgesio šabloną pastebi {p1} gyvenime, kurio jis pats galbūt nepastebi?",
      jp: "{active}さん、{p1}さんが気づいていないかもしれない、無意識に繰り返している行動パターンは何ですか？"
    }
  },
  {
    id: "friends_deep_3",
    category: "friends",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, how has your relationship with {p1} changed you as a person?",
      fr: "{active}, comment ta relation avec {p1} t'a-t-elle changé en tant que personne ?",
      es: "{active}, ¿cómo te ha cambiado como persona tu relación con {p1}?",
      lt: "{active}, kaip santykiai su {p1} pakeitė tave kaip asmenybę?",
      jp: "{active}さん、{p1}さんとの関係は、あなた自身をどのように変えましたか？"
    }
  },

  // ==========================================
  // COUPLES CATEGORY
  // ==========================================
  // SOFT (Green)
  {
    id: "couples_soft_1",
    category: "couples",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, what was the exact moment you realized you had feelings for {p1}?",
      fr: "{active}, quel a été l'instant précis où tu as réalisé que tu avais des sentiments pour {p1} ?",
      es: "{active}, ¿cuál fue el momento exacto en que te diste cuenta de que sentías algo por {p1}?",
      lt: "{active}, kada tiksliai supratai, kad jauti kažką daugiau {p1}?",
      jp: "{active}さん、{p1}さんに好意を抱いていると確信した最初の瞬間はいつですか？"
    }
  },
  {
    id: "couples_soft_2",
    category: "couples",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, describe {p1}'s ideal relaxing Sunday morning.",
      fr: "{active}, décris le dimanche matin relaxant idéal pour {p1} ?",
      es: "{active}, describe la mañana de domingo relajante ideal para {p1}.",
      lt: "{active}, apibūdink idealų {p1} sekmadienio rytą.",
      jp: "{active}さん、{p1}さんにとって理想ののんびりした日曜日の朝はどんなものですか？"
    }
  },
  {
    id: "couples_soft_3",
    category: "couples",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, what is the cutest habit {p1} has when they think no one is watching?",
      fr: "{active}, quelle est l'habitude la plus mignonne de {p1} quand il/elle pense que personne ne le/la regarde ?",
      es: "{active}, ¿cuál es el hábito más tierno que tiene {p1} cuando cree que nadie le mira?",
      lt: "{active}, koks yra mieliausias {p1} įprotis, kai jis mano, kad niekas jo nemato?",
      jp: "{active}さん、{p1}さんが「誰も見ていない」と思っているときの、一番可愛らしい癖は何ですか？"
    }
  },
  // EMPATHY (Blue)
  {
    id: "couples_empathy_1",
    category: "couples",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, what makes {p1} feel the most loved and safe in this relationship?",
      fr: "{active}, qu'est-ce qui fait que {p1} se sent le plus aimé et en sécurité dans votre relation ?",
      es: "{active}, ¿qué hace que {p1} se sienta más amado y seguro en esta relación?",
      lt: "{active}, kas leidžia {p1} jaustis labiausiai mylimam ir saugiam jūsų santykiuose?",
      jp: "{active}さん、この関係性の中で、{p1}さんが最も愛され、安心していると感じるのはどんなときですか？"
    }
  },
  {
    id: "couples_empathy_2",
    category: "couples",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, name one of your own habits that you know annoys {p1}, and how you can work on it.",
      fr: "{active}, cite une de tes habitudes qui agace {p1}, et comment tu peux l'améliorer.",
      es: "{active}, menciona un hábito tuyo que sabes que molesta a {p1} y cómo puedes mejorarlo.",
      lt: "{active}, įvardink savo įprotį, kuris erzina {p1}, ir ką gali padaryti, kad tai pasikeistų.",
      jp: "{active}さん、{p1}さんをイライラさせていると知っている自分の癖は何ですか？どう改善できますか？"
    }
  },
  {
    id: "couples_empathy_3",
    category: "couples",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, what is {p1}'s primary love language, and how well do you speak it?",
      fr: "{active}, quel est le langage de l'amour principal de {p1}, et à quel point le parles-tu bien ?",
      es: "{active}, ¿cuál es el lenguaje del amor principal de {p1} y qué tan bien lo hablas?",
      lt: "{active}, kokia yra pagrindinė {p1} meilės kalba ir kaip gerai tu ja kalbi?",
      jp: "{active}さん、{p1}さんの主な「愛の言語（Love Language）」は何ですか？あなたはそれをどのくらい表現できていますか？"
    }
  },
  // DEEP (Black)
  {
    id: "couples_deep_1",
    category: "couples",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, what is a vulnerability or fear {p1} has shared with you that you hold closest to your heart?",
      fr: "{active}, quelle est la vulnérabilité ou la peur que {p1} t'a confiée et qui te touche le plus ?",
      es: "{active}, ¿cuál es una vulnerabilidad o miedo que {p1} te ha compartido y que guardas con más cariño?",
      lt: "{active}, kokia {p1} atskleista baimė ar pažeidžiamumas tau yra brangiausias?",
      jp: "{active}さん、{p1}さんがあなただけに打ち明けた、最も心に残っている弱みや恐れは何ですか？"
    }
  },
  {
    id: "couples_deep_2",
    category: "couples",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, what is a dream for the future that you have not shared with {p1} yet?",
      fr: "{active}, quel est le projet ou rêve d'avenir que tu n'as pas encore osé partager avec {p1} ?",
      es: "{active}, ¿cuál es un sueño para el futuro que aún no has compartido con {p1}?",
      lt: "{active}, kokią ateities svajonę vis dar slepi nuo {p1}?",
      jp: "{active}さん、{p1}さんにまだ伝えていない、将来に対する密かな夢は何ですか？"
    }
  },
  {
    id: "couples_deep_3",
    category: "couples",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, what is the hardest challenge you and {p1} have overcome together, and what did it teach you?",
      fr: "{active}, quel est le défi le plus rude que toi et {p1} avez surmonté ensemble, et qu'as-tu appris ?",
      es: "{active}, ¿cuál ha sido el desafío más duro que tú y {p1} han superado juntos y qué te enseñó?",
      lt: "{active}, koks buvo sunkiausias iššūkis, kurį įveikėte kartu su {p1}, ir ko jis tave išmokė?",
      jp: "{active}さん、あなたと{p1}さんが一緒に乗り越えた最も困難な試練は何ですか？そこから何を学びましたか？"
    }
  },

  // ==========================================
  // BUDDIES / ACQUAINTANCES CATEGORY
  // ==========================================
  // SOFT (Green)
  {
    id: "buddies_soft_1",
    category: "buddies",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, what was your genuine first impression of {p1}? Let them confirm if it was correct.",
      fr: "{active}, quelle a été ta véritable première impression de {p1} ? Laisse-le/la confirmer si c'était vrai.",
      es: "{active}, ¿cuál fue tu primera impresión real de {p1}? Deja que confirme si fue acertada.",
      lt: "{active}, koks buvo tavo pirmasis tikras įspūdis apie {p1}? Leisk jam pasakyti, ar tai tiesa.",
      jp: "{active}さん、{p1}さんに対する最初の印象は正直どうでしたか？本人に合っているか確認してもらいましょう。"
    }
  },
  {
    id: "buddies_soft_2",
    category: "buddies",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, if {p1} won the lottery tomorrow, what is the first thing they would buy?",
      fr: "{active}, si {p1} gagnait à la loterie demain, quelle est la première chose qu'il/elle s'offrirait ?",
      es: "{active}, si {p1} ganara la lotería mañana, ¿qué sería lo primero que se compraría?",
      lt: "{active}, jei {p1} rytoj laimėtų loterijoje, ką pirmiausia jis nusipirktų?",
      jp: "{active}さん、{p1}さんが明日宝くじで大金を当てたら、一番に何を買うと思いますか？"
    }
  },
  {
    id: "buddies_soft_3",
    category: "buddies",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, if {p1} had to choose a superpower, what would it be?",
      fr: "{active}, si {p1} devait choisir un super-pouvoir, lequel choisirait-il/elle ?",
      es: "{active}, si {p1} tuviera que elegir un superpoder, ¿cuál elegiría?",
      lt: "{active}, jei {p1} turėtų pasirinkti supergalią, kokia ji būtų?",
      jp: "{active}さん、{p1}さんが超能力を１つ選べるとしたら、何を選ぶと思いますか？"
    }
  },
  // EMPATHY (Blue)
  {
    id: "buddies_empathy_1",
    category: "buddies",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, what is a topic that {p1} is extremely passionate about? Give them 30 seconds to explain it.",
      fr: "{active}, quel est le sujet qui passionne le plus {p1} ? Donne-lui 30 secondes pour en parler.",
      es: "{active}, ¿de qué tema es {p1} extremadamente apasionado? Dale 30 segundos para hablar sobre ello.",
      lt: "{active}, kokia tema {p1} yra labai aistringas? Leisk jam kalbėti apie tai 30 sekundžių.",
      jp: "{active}さん、{p1}さんが非常に熱中している関心事・テーマは何ですか？本人に30秒間で語ってもらいましょう。"
    }
  },
  {
    id: "buddies_empathy_2",
    category: "buddies",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, what is one thing that {p1} does that always makes others feel welcome?",
      fr: "{active}, cite une chose que fait {p1} et qui fait que tout le monde se sent bien accueilli.",
      es: "{active}, ¿qué es algo que hace {p1} que siempre hace que los demás se sientan bienvenidos?",
      lt: "{active}, ką tokio daro {p1}, kas priverčia kitus pasijusti laukiamais?",
      jp: "{active}さん、{p1}さんの行動で、周りの人をいつも歓迎されている気分にさせるポイントは何ですか？"
    }
  },
  // DEEP (Black)
  {
    id: "buddies_deep_1",
    category: "buddies",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, do you think {p1} values their work/career or their free time and relationships more?",
      fr: "{active}, penses-tu que {p1} accorde plus d'importance à son travail ou à son temps libre et à ses proches ?",
      es: "{active}, ¿crees que {p1} valora más su trabajo/carrera o su tiempo libre y relaciones?",
      lt: "{active}, kaip manai, kas {p1} svarbiau: karjera ar laisvalaikis ir santykiai?",
      jp: "{active}さん、{p1}さんは仕事やキャリアと、プライベートの時間や人付き合い、どちらをより大切にしていると思いますか？"
    }
  },
  {
    id: "buddies_deep_2",
    category: "buddies",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, what is a life experience {p1} had that you think heavily shaped who they are today?",
      fr: "{active}, quelle expérience de vie {p1} a-t-il/elle vécue qui, selon toi, a forgé sa personnalité actuelle ?",
      es: "{active}, ¿qué experiencia de vida crees que ha tenido {p1} que haya marcado fuertemente quién es hoy?",
      lt: "{active}, kokia gyvenimo patirtis, tavo manymu, labiausiai suformavo tai, kas {p1} yra šiandien?",
      jp: "{active}さん、{p1}さんのこれまでの人生経験で、彼の今日の人格形成に最も影響を与えたと思うことは何ですか？"
    }
  },

  // ==========================================
  // FUNNY / DRINKING CATEGORY
  // ==========================================
  // SOFT (Green)
  {
    id: "funny_soft_1",
    category: "funny",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, what is {p1}'s most embarrassing favorite song?",
      fr: "{active}, quelle est la chanson préférée la plus honteuse de {p1} ?",
      es: "{active}, ¿cuál es la canción favorita más vergonzosa de {p1}?",
      lt: "{active}, kokia yra gėdingiausia mėgstama {p1} daina?",
      jp: "{active}さん、{p1}さんの「実は大好きなのに他人に言えない恥ずかしい曲」は何ですか？"
    }
  },
  {
    id: "funny_soft_2",
    category: "funny",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, if you and {p1} were locked in a supermarket overnight, which section would you raid first?",
      fr: "{active}, si toi et {p1} étiez enfermés dans un supermarché la nuit, quel rayon dévaliseriez-vous en premier ?",
      es: "{active}, si tú y {p1} se quedaran encerrados en un supermercado toda la noche, ¿qué sección asaltarían primero?",
      lt: "{active}, jei tu ir {p1} liktumėte užrakinti prekybos centre nakčiai, kurį skyrių nusiaubtumėte pirmiausia?",
      jp: "{active}さん、あなたと{p1}が一晩スーパーに閉じ込められたら、最初にどこの売り場を襲撃しますか？"
    }
  },
  {
    id: "funny_soft_3",
    category: "funny",
    type: "soft",
    minPlayers: 3,
    text: {
      en: "{active}, who is most likely to join a cult by accident, {p1} or {p2}?",
      fr: "{active}, qui est le plus susceptible de rejoindre une secte par accident, {p1} ou {p2} ?",
      es: "{active}, ¿quién es más probable que se una a una secta por accidente, {p1} o {p2}?",
      lt: "{active}, kas greičiau netyčia įstos į sektą: {p1} ar {p2}?",
      jp: "{active}さん、うっかり怪しい宗教やカルトに入信してしまいそうなのは誰ですか？{p1}さん、それとも{p2}さん？"
    }
  },
  // EMPATHY (Blue)
  {
    id: "funny_empathy_1",
    category: "funny",
    type: "empathy",
    minPlayers: 3,
    text: {
      en: "{active}, who between {p1} and {p2} is more likely to spend all their savings on a stupid business idea?",
      fr: "{active}, qui entre {p1} et {p2} dépenserait toutes ses économies pour une idée commerciale stupide ?",
      es: "{active}, ¿quién de {p1} o {p2} gastaría todos sus ahorros en una idea de negocio absurda?",
      lt: "{active}, kas iš {p1} ir {p2} greičiau išleistų visas santaupas kvailai verslo idėjai?",
      jp: "{active}さん、くだらないビジネスのアイデアに貯金を全部使い果たしてしまいそうなのはどちらですか？{p1}さん、それとも{p2}さん？"
    }
  },
  {
    id: "funny_empathy_2",
    category: "funny",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, mimic {p1}'s most annoying habit. If the group recognizes it, give 1 sip. Otherwise, take 1.",
      fr: "{active}, imite l'habitude la plus agaçante de {p1}. Si le groupe la reconnaît, donne 1 gorgée, sinon bois-en 1.",
      es: "{active}, imita el hábito más molesto de {p1}. Si el grupo lo reconoce, reparte 1 trago, si no, tómatelo tú.",
      lt: "{active}, pamėgdžiok labiausiai erzinantį {p1} įprotį. Jei visi atpažins, duok 1 gurkšnį, jei ne - išgerk pats.",
      jp: "{active}さん、{p1}さんの「ちょっとイラッとする癖」のモノマネをしてください。みんなが分かれば1口配る、分からなければ1口飲む。"
    }
  },
  // DEEP (Black)
  {
    id: "funny_deep_1",
    category: "funny",
    type: "deep",
    minPlayers: 3,
    text: {
      en: "{active}, who is the worst driver or has the worst sense of direction here? Look at them and name them, or take 2 sips.",
      fr: "{active}, qui conduit le plus mal ou a le pire sens de l'orientation ici ? Regarde-les et nomme-les, ou prends 2 gorgées.",
      es: "{active}, ¿quién conduce peor o tiene el peor sentido de la orientación aquí? Míralo y dilo, o toma 2 tragos.",
      lt: "{active}, kas čia prasčiausiai vairuoja arba turi blogiausią orientaciją? Pažiūrėk į jį ir pasakyk vardą, arba gerk 2 gurkšnius.",
      jp: "{active}さん、全員の中で最も運転が下手か、最も方向音痴なのは誰ですか？その人を見つめて名前を呼ぶか、2口飲んでください。"
    }
  },
  {
    id: "funny_deep_2",
    category: "funny",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, if {p1} were an animal, which one would they be? Be honest, if it's unflattering you must explain why.",
      fr: "{active}, si {p1} était un animal, lequel serait-ce ? Sois honnête, si c'est peu flatteur, tu dois expliquer pourquoi.",
      es: "{active}, si {p1} fuera un animal, ¿cuál sería? Sé sincero; si no es muy halagador, debes explicar por qué.",
      lt: "{active}, jei {p1} būtų gyvūnas, koks jis būtų? Būk atviras, jei tai nėra labai gražu - paaiškink kodėl.",
      jp: "{active}さん、もし{p1}さんが動物だとしたら何だと思いますか？正直に答えてください。もしあまり良くない動物なら、その理由も言ってください。"
    }
  },
  // FRIENDS SOFT
  {
    id: "friends_soft_6",
    category: "friends",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, what is the most adventurous thing you've ever done with {p1}?",
      fr: "{active}, quelle est la chose la plus aventureuse que tu aies faite avec {p1} ?",
      es: "{active}, ¿qué es lo más aventurero que has hecho con {p1}?",
      lt: "{active}, koks nuotykis su {p1} tau įsiminė labiausiai?",
      jp: "{active}さん、{p1}さんと一緒にした最も冒険的なことは何ですか？"
    }
  },
  {
    id: "friends_soft_7",
    category: "friends",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, if you and {p1} had a podcast, what would the main topic be?",
      fr: "{active}, si toi et {p1} aviez un podcast, quel en serait le sujet principal ?",
      es: "{active}, si tú y {p1} tuvieran un podcast, ¿cuál sería el tema principal?",
      lt: "{active}, jei tu ir {p1} kurtumėte laidą (podcast), kokia būtų jos pagrindinė tema?",
      jp: "{active}さん、もしあなたと{p1}さんでポッドキャストをやるとしたら、メインテーマは何にしますか？"
    }
  },
  {
    id: "friends_soft_8",
    category: "friends",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, what is a song that immediately makes you think of {p1}?",
      fr: "{active}, quelle chanson te fait immédiatement penser à {p1} ?",
      es: "{active}, ¿qué canción te hace pensar de inmediato en {p1}?",
      lt: "{active}, kokia daina tau iškart primena {p1}?",
      jp: "{active}さん、{p1}さんを瞬時に思い浮かべさせる曲は何ですか？"
    }
  },
  {
    id: "friends_soft_9",
    category: "friends",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, if {p1} were a fictional character, who would they be and why?",
      fr: "{active}, si {p1} était un personnage de fiction, qui serait-ce et pourquoi ?",
      es: "{active}, si {p1} fuera un personaje de ficción, ¿quién sería y por qué?",
      lt: "{active}, jei {p1} būtų filmų ar knygų veikėjas, kas jis būtų ir kodėl?",
      jp: "{active}さん、{p1}さんが架空のキャラクターだとしたら、誰だと思いますか？その理由は？"
    }
  },
  {
    id: "friends_soft_10",
    category: "friends",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, describe {p1} in only three words.",
      fr: "{active}, décris {p1} en seulement trois mots.",
      es: "{active}, describe a {p1} en solo tres palabras.",
      lt: "{active}, apibūdink {p1} tik trimis žodžiais.",
      jp: "{active}さん、{p1}さんを3つの単語だけで表現してください。"
    }
  },
  // FRIENDS EMPATHY
  {
    id: "friends_empathy_5",
    category: "friends",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, what is a dream {p1} has that you really want to see them achieve?",
      fr: "{active}, quel est le rêve de {p1} que tu aimerais vraiment voir se réaliser ?",
      es: "{active}, ¿qué sueño de {p1} te gustaría realmente ver cumplido?",
      lt: "{active}, kokią {p1} svajonę tu labai norėtum padėti jam įgyvendinti?",
      jp: "{active}さん、{p1}さんの夢の中で、本当に実現してほしいと願っているものは何ですか？"
    }
  },
  {
    id: "friends_empathy_6",
    category: "friends",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, when was a time you felt incredibly proud of {p1}?",
      fr: "{active}, à quel moment as-tu été incroyablement fier/fière de {p1} ?",
      es: "{active}, ¿en qué momento te sentiste increíblemente orgulloso de {p1}?",
      lt: "{active}, kada paskutinį kartą jautei didžiulį pasididžiavimą {p1}?",
      jp: "{active}さん、{p1}さんのことをものすごく誇りに思った瞬間 is いつですか？"
    }
  },
  {
    id: "friends_empathy_7",
    category: "friends",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, what is the best way to comfort {p1} when they are having a hard day?",
      fr: "{active}, quelle est la meilleure manière de réconforter {p1} après une journée difficile ?",
      es: "{active}, ¿cuál es la mejor manera de consolar a {p1} cuando tiene un día difícil?",
      lt: "{active}, kaip geriausia paguosti {p1}, kai jam sunki diena?",
      jp: "{active}さん、{p1}さんが辛い一日を過ごしたとき、一番慰めになる方法は何ですか？"
    }
  },
  {
    id: "friends_empathy_8",
    category: "friends",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, what is a personality trait of {p1} that you think is deeply misunderstood by others?",
      fr: "{active}, quel trait de caractère de {p1} est, selon toi, le plus mal compris par les autres ?",
      es: "{active}, ¿qué rasgo de la personalidad de {p1} crees que los demás comprenden peor?",
      lt: "{active}, koks {p1} asmenybės bruožas, tavo manymu, yra labiausiai nesuprantamas kitų?",
      jp: "{active}さん、{p1}さんの性格で、他の人に深く誤解されていると思う部分はどこですか？"
    }
  },
  {
    id: "friends_empathy_9",
    category: "friends",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, how do you know when {p1} is hiding their true feelings or pretending to be okay?",
      fr: "{active}, comment sais-tu que {p1} cache ses vrais sentiments ou fait semblant d'aller bien ?",
      es: "{active}, ¿cómo sabes cuando {p1} está ocultando sus verdaderos sentimientos o fingiendo estar bien?",
      lt: "{active}, kaip pastebi, kad {p1} slepia savo tikruosius jausmus ar apsimeta, jog viskas gerai?",
      jp: "{active}さん、{p1}さんが本音を隠していたry、大丈夫なふりをしているとき、どうやってそれを見抜きますか？"
    }
  },
  // FRIENDS DEEP
  {
    id: "friends_deep_4",
    category: "friends",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, what is a life lesson you learned from watching {p1}'s actions?",
      fr: "{active}, quelle leçon de vie as-tu apprise en observant les actions de {p1} ?",
      es: "{active}, ¿qué lección de vida has aprendido al observar las acciones de {p1}?",
      lt: "{active}, kokią gyvenimo pamoką išmokai stebėdamas {p1} elgesį?",
      jp: "{active}さん、{p1}さんの行動を見て学んだ人生のレッスンは何ですか？"
    }
  },
  {
    id: "friends_deep_5",
    category: "friends",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, if your friendship with {p1} ended tomorrow, what would you miss the most about them?",
      fr: "{active}, si ton amitié avec {p1} s'arrêtait demain, qu'est-ce qui te manquerait le plus chez lui/elle ?",
      es: "{active}, si tu amistad con {p1} terminara mañana, ¿qué es lo que más extrañarías de él/ella?",
      lt: "{active}, jei tavo draugystė su {p1} baigtųsi rytoj, ko tau labiausiai trūktų?",
      jp: "{active}さん、もし{p1}さんとの友情が明日終わるとしたら、彼らの何が最も恋しくなりますか？"
    }
  },
  {
    id: "friends_deep_6",
    category: "friends",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, is there a conversation you wish you could have with {p1} but haven't found the courage to start?",
      fr: "{active}, y a-t-il une discussion que tu aimerais avoir avec {p1} mais que tu n'as pas le courage d'entamer ?",
      es: "{active}, ¿hay alguna conversación que desearías tener con {p1} pero no has encontrado el valor para iniciar?",
      lt: "{active}, ar yra pokalbis, kurį norėtum pradėti su {p1}, bet vis nerandi drąsos?",
      jp: "{active}さん、{p1}さんと話したいけれど、まだ切り出す勇気が出ない話題はありますか？"
    }
  },
  {
    id: "friends_deep_7",
    category: "friends",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, how has {p1} helped you through a time when you were at your lowest?",
      fr: "{active}, comment {p1} t'a-t-il/elle aidé alors que tu étais au plus bas ?",
      es: "{active}, ¿cómo te ayudó {p1} en un momento en el que estabas en tu punto más bajo?",
      lt: "{active}, kaip {p1} tau padėjo, kai buvai sunkiausioje gyvenimo situacijoje?",
      jp: "{active}さん、あなたがどん底にいたとき、{p1}さんはどのように助けてくれましたか？"
    }
  },
  {
    id: "friends_deep_8",
    category: "friends",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, what is something you've never told {p1} because you were afraid it would change how they see you?",
      fr: "{active}, qu'est-ce que tu n'as jamais dit à {p1} par peur que cela change son regard sur toi ?",
      es: "{active}, ¿qué es algo que nunca le has dicho a {p1} por miedo a que cambie la forma en que te ve?",
      lt: "{active}, ko niekada nesakei {p1}, nes bijojai, kad tai pakeis jo nuomonę apie tave?",
      jp: "{active}さん、{p1}さんに言ったら自分の見方が変わってしまうのではないかと恐れて、まだ言えていないことは何ですか？"
    }
  },
  // COUPLES SOFT
  {
    id: "couples_soft_4",
    category: "couples",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, what is your favorite way to spend a rainy afternoon together with {p1}?",
      fr: "{active}, quelle est ta façon préférée de passer un après-midi pluvieux avec {p1} ?",
      es: "{active}, ¿cuál es tu manera favorita de pasar una tarde lluviosa junto a {p1}?",
      lt: "{active}, kaip tau labiausiai patinka leisti lietingą popietę kartu su {p1}?",
      jp: "{active}さん、{p1}さんと一緒に雨の日の午後を過ごすお気に入りの方法は何ですか？"
    }
  },
  {
    id: "couples_soft_5",
    category: "couples",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, if {p1} were a song, which genre would they be?",
      fr: "{active}, si {p1} était une chanson, de quel genre musical s'agirait-il ?",
      es: "{active}, si {p1} fuera una canción, ¿de qué género sería?",
      lt: "{active}, jei {p1} būtų daina, kokio žanro ji būtų?",
      jp: "{active}さん、{p1}さんが音楽ジャンルだとしたら、何だと思いますか？"
    }
  },
  {
    id: "couples_soft_6",
    category: "couples",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, what is the best meal {p1} has ever cooked for you (or ordered for you)?",
      fr: "{active}, quel est le meilleur repas que {p1} t'ait jamais préparé (ou commandé) ?",
      es: "{active}, ¿cuál es la mejor comida que {p1} te ha preparado (o pedido)?",
      lt: "{active}, koks yra geriausias patiekalas, kurį {p1} tau yra pagaminęs (ar užsakęs)?",
      jp: "{active}さん、これまでに{p1}さんが作erくれた（または注文してくれた）料理の中で、最も美味しかったものは何ですか？"
    }
  },
  {
    id: "couples_soft_7",
    category: "couples",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, what is a small gesture {p1} does that always makes you smile?",
      fr: "{active}, quel petit geste de {p1} te donne toujours le sourire ?",
      es: "{active}, ¿qué pequeño gesto de {p1} siempre te hace sonreír?",
      lt: "{active}, koks nedidelis {p1} poelgis visada priverčia tave nusišypsoti?",
      jp: "{active}さん、{p1}さんのどんな小さな仕草や気遣いが、いつもあなたを笑顔にしますか？"
    }
  },
  {
    id: "couples_soft_8",
    category: "couples",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, if you and {p1} could escape to anywhere in the world tomorrow, where would you go?",
      fr: "{active}, si toi et {p1} pouviez vous échapper n'importe où dans le monde demain, où iriez-vous ?",
      es: "{active}, si tú y {p1} pudieran escapar a cualquier lugar del mundo mañana, ¿a dónde irían?",
      lt: "{active}, jei tu ir {p1} rytoj galėtumėte pabėgti bet kur pasaulyje, kur nukeliautumėte?",
      jp: "{active}さん、もし明日{p1}さんと世界中のどこへでも逃避行できるとしたら、どこへ行きたいですか？"
    }
  },
  // COUPLES EMPATHY
  {
    id: "couples_empathy_4",
    category: "couples",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, what is a worry that {p1} has right now that they are keeping to themselves?",
      fr: "{active}, quelle est l'inquiétude que {p1} garde pour lui/elle en ce moment ?",
      es: "{active}, ¿cuál es una preocupación que tiene {p1} ahora mismo y que se está guardando para sí?",
      lt: "{active}, kokį rūpestį {p1} šiuo metu nešiojasi savyje ir nesidalina su kitais?",
      jp: "{active}さん、{p1}さんが今一人で抱え込んでいる悩みや不安は何だと思いますか？"
    }
  },
  {
    id: "couples_empathy_5",
    category: "couples",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, when was the last time you felt {p1} needed reassurance, and did you give it to them?",
      fr: "{active}, quand as-tu senti pour la dernière fois que {p1} avait besoin d'être rassuré(e), et l'as-tu fait ?",
      es: "{active}, ¿cuándo fue la última vez que sentiste que {p1} necesitaba tranquilidad y se la diste?",
      lt: "{active}, kada paskutinį kartą jautei, kad {p1} reikia palaikymo ar nuraminimo, ir ar jį suteikei?",
      jp: "{active}さん、{p1}さんが安心感を必要としていると最後に感じたのはいつですか？そのとき声をかけましたか？"
    }
  },
  {
    id: "couples_empathy_6",
    category: "couples",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, what is something {p1} does to show their love that you sometimes overlook?",
      fr: "{active}, qu'est-ce que {p1} fait pour te montrer son amour et que tu négliges parfois ?",
      es: "{active}, ¿qué hace {p1} para demostrarte su amor que a veces pasas por alto?",
      lt: "{active}, kokį {p1} meilės rodymą tu kartais nepastebi ar priimi kaip savaime suprantamą?",
      jp: "{active}さん、{p1}さんが愛情表現としてしてくれていることで、あなたが時々見過ごしてしまっていることは何ですか？"
    }
  },
  {
    id: "couples_empathy_7",
    category: "couples",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, how can you be a better partner to {p1} in the upcoming weeks?",
      fr: "{active}, comment peux-tu être un(e) meilleur(e) partenaire pour {p1} au cours des prochaines semaines ?",
      es: "{active}, ¿cómo puedes ser una mejor pareja para {p1} en las próximas semanas?",
      lt: "{active}, kaip galėtum būti geresnis partneris {p1} ateinančiomis savaitėmis?",
      jp: "{active}さん、これからの数週間、{p1}さんにとってより良いパートナーになるために何ができますか？"
    }
  },
  {
    id: "couples_empathy_8",
    category: "couples",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, what is the sweetest thing {p1} has said to you recently that stuck in your head?",
      fr: "{active}, quelle est la chose la plus douce que {p1} t'ait dite récemment et qui t'est restée en tête ?",
      es: "{active}, ¿qué ha sido lo más dulce que te ha dicho {p1} recientemente y que se te quedó grabado?",
      lt: "{active}, koks buvo mieliausias dalykas, kurį {p1} tau pasakė pastaruoju metu ir kuris įstrigo tavo atmintyje?",
      jp: "{active}さん、最近{p1}さんから言われて、心に深く残っている最も嬉しい言葉は何ですか？"
    }
  },
  // COUPLES DEEP
  {
    id: "couples_deep_4",
    category: "couples",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, how do you think you and {p1} have changed since you first started dating?",
      fr: "{active}, comment penses-tu que toi et {p1} avez changé depuis le début de votre relation ?",
      es: "{active}, ¿cómo crees que han cambiado tú y {p1} desde que empezaron a salir?",
      lt: "{active}, kaip, tavo manymu, tu ir {p1} pasikeitėte nuo santykių pradžios?",
      jp: "{active}さん、付き合い始めた当初と比べて、あなたと{p1}さんはどのように変化したと思いますか？"
    }
  },
  {
    id: "couples_deep_5",
    category: "couples",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, what is a fear you have about the long-term future of your relationship?",
      fr: "{active}, quelle peur as-tu concernant l'avenir à long terme de votre relation ?",
      es: "{active}, ¿qué miedo tienes sobre el futuro a largo plazo de su relación?",
      lt: "{active}, kokią baimę jauti dėl jūsų santykių ateities ilgalaikėje perspektyvoje?",
      jp: "{active}さん、二人の関係の長期的な将来について、密かに抱いている恐れや不安はありますか？"
    }
  },
  {
    id: "couples_deep_6",
    category: "couples",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, what does 'growing old together' mean to you in the context of your bond with {p1}?",
      fr: "{active}, que signifie 'vieillir ensemble' pour toi dans le contexte de ton lien avec {p1} ?",
      es: "{active}, ¿qué significa 'envejecer juntos' para ti en relación con tu vínculo con {p1}?",
      lt: "{active}, ką tau reiškia „senstame kartu“ kontekste su {p1}?",
      jp: "{active}さん、{p1}さんと「一緒に歳を重ねる」ということは、あなたにとって具体的にどういう意味を持ちますか？"
    }
  },
  {
    id: "couples_deep_7",
    category: "couples",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, is there a past hurt in this relationship that you are still trying to heal from?",
      fr: "{active}, y a-t-il une blessure passée dans cette relation dont tu essaies encore de guérir ?",
      es: "{active}, ¿hay alguna herida pasada en esta relación de la que todavía estés intentando sanar?",
      lt: "{active}, ar jūsų santykiuose yra praeities nuoskauda, kurią vis dar stengiesi pamiršti ir išgydyti?",
      jp: "{active}さん、この関係性の中で、未だに癒そうと努力している過去の傷やわだかまりはありますか？"
    }
  },
  {
    id: "couples_deep_8",
    category: "couples",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, what makes your connection with {p1} different from any other relationship you've had?",
      fr: "{active}, qu'est-ce qui rend ta connexion avec {p1} différente de toutes tes relations passées ?",
      es: "{active}, ¿qué hace que tu conexión con {p1} sea diferente de cualquier otra relación que hayas tenido?",
      lt: "{active}, kas jūsų ryšį su {p1} daro išskirtinį, palyginus su kitais tavo turėtais santykiais?",
      jp: "{active}さん、{p1}さんとのつながりは、これまでの他のどんな関係と比べて、何が異なっていますか？"
    }
  },
  // BUDDIES SOFT
  {
    id: "buddies_soft_4",
    category: "buddies",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, if {p1} had to choose a country to live in for a year, where would they choose?",
      fr: "{active}, si {p1} devait choisir un pays où vivre pendant un an, lequel choisirait-il/elle ?",
      es: "{active}, si {p1} tuviera que elegir un país para vivir por un año, ¿cuál elegiría?",
      lt: "{active}, jei {p1} turėtų pasirinkti šalį, kurioje gyventų metus, kokią jis pasirinktų?",
      jp: "{active}さん、{p1}さんが1年間海外に住むとしたら、どの国を選ぶと思いますか？"
    }
  },
  {
    id: "buddies_soft_5",
    category: "buddies",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, what is the first hobby or activity that you associate with {p1}?",
      fr: "{active}, quel est le premier passe-temps ou activité que tu associes à {p1} ?",
      es: "{active}, ¿cuál es el primer pasatiempo o actividad que asocias con {p1}?",
      lt: "{active}, koks yra pirmasis pomėgis ar veikla, kurią priskiri {p1}?",
      jp: "{active}さん、{p1}さんと言えば真っ先に思い浮かぶ趣味やアクティビティは何ですか？"
    }
  },
  {
    id: "buddies_soft_6",
    category: "buddies",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, if you had to plan a surprise party for {p1}, what would the theme be?",
      fr: "{active}, si tu devais organiser une fête surprise pour {p1}, quel en serait le thème ?",
      es: "{active}, si tuvieras que planear una fiesta sorpresa para {p1}, ¿cuál sería el tema?",
      lt: "{active}, jei turėtum suorganizuoti staigmenų vakarėlį {p1}, kokia būtų jo tema?",
      jp: "{active}さん、もしscrollが{p1}さんのためにサプライズパーティーを計画するとしたら、テーマは何にしますか？"
    }
  },
  {
    id: "buddies_soft_7",
    category: "buddies",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, what is {p1}'s style icon or how would you describe their fashion style?",
      fr: "{active}, quelle est l'icône de style de {p1} ou comment décrirais-tu son style vestimentaire ?",
      es: "{active}, ¿quién es el icono de estilo de {p1} o cómo describirías su forma de vestir?",
      lt: "{active}, koks yra {p1} aprangos stilius arba kaip jį apibūdintum?",
      jp: "{active}さん、{p1}さんのファッションスタイルを一言で説明すると？彼らが参考にしていそうな人物は？"
    }
  },
  {
    id: "buddies_soft_8",
    category: "buddies",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, if {p1} was a movie character, would they be the hero, the sidekick, or the villain?",
      fr: "{active}, si {p1} était un personnage de film, serait-il/elle le héros, le second rôle ou le méchant ?",
      es: "{active}, si {p1} fuera un personaje de película, ¿sería el héroe, el compañero o el villano?",
      lt: "{active}, jei {p1} būtų filmo veikėjas, kas jis būtų: herojus, jo padėjėjas ar piktadarys?",
      jp: "{active}さん、{p1}さんが映画のキャラクターだとしたら、主役（ヒーロー）、相棒、それとも悪役（ヴィラン）のどれだと思いますか？"
    }
  },
  // BUDDIES EMPATHY
  {
    id: "buddies_empathy_3",
    category: "buddies",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, what is a small act of kindness you've seen {p1} perform recently?",
      fr: "{active}, quel petit geste de gentillesse as-tu vu {p1} faire récemment ?",
      es: "{active}, ¿qué pequeño acto de amabilidad le has visto hacer a {p1} recientemente?",
      lt: "{active}, kokį nedidelį gerumo poelgį pastebėjai iš {p1} pastaruoju metu?",
      jp: "{active}さん、最近{p1}さんが見せた小さな優しさや親切な行動は何ですか？"
    }
  },
  {
    id: "buddies_empathy_4",
    category: "buddies",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, what do you think is {p1}'s greatest skill that they are too humble to brag about?",
      fr: "{active}, quelle est selon toi la plus grande compétence de {p1} dont il/elle est trop modeste pour se vanter ?",
      es: "{active}, ¿cuál crees que es la mayor habilidad de {p1} de la que es demasiado humilde para presumir?",
      lt: "{active}, koks yra didžiausias {p1} talentas ar gebėjimas, kuriuo jis pats per daug kuklinasi pasigirti?",
      jp: "{active}さん、{p1}さんの素晴らしい能力で、本人が謙虚すぎて自慢しないことは何だと思いますか？"
    }
  },
  {
    id: "buddies_empathy_5",
    category: "buddies",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, how does {p1} typically handle stress or high-pressure situations?",
      fr: "{active}, comment {p1} gère-t-il/elle habituellement le stress ou les situations de haute pression ?",
      es: "{active}, ¿cómo suele manejar {p1} el estrés o las situaciones de mucha presión?",
      lt: "{active}, kaip {p1} dažniausiai elgiasi patirdamas stresą ar spaudimą?",
      jp: "{active}さん、{p1}さんはストレスやプレッシャーがかかる状況で、普段どのように対処していると思いますか？"
    }
  },
  {
    id: "buddies_empathy_6",
    category: "buddies",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, what is one value that you think you and {p1} strongly share?",
      fr: "{active}, quelle est la valeur que tu penses partager le plus fortement avec {p1} ?",
      es: "{active}, ¿cuál es un valor que crees que tú y {p1} comparten firmemente?",
      lt: "{active}, kokią vertybę, tavo manymu, tu ir {p1} labiausiai dalinatės?",
      jp: "{active}さん、あなたと{p1}さんで深く共有している共通の価値観（Value）は何だと思いますか？"
    }
  },
  {
    id: "buddies_empathy_7",
    category: "buddies",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, what is a way that {p1} makes this group or setting feel more comfortable?",
      fr: "{active}, de quelle manière {p1} rend-il/elle ce groupe ou cet endroit plus confortable/chaleureux ?",
      es: "{active}, ¿de qué manera hace {p1} que este grupo o ambiente se sientan más cómodo?",
      lt: "{active}, kokiu būdu {p1} padeda šiai grupei pasijusti jaukiau?",
      jp: "{active}さん、{p1}さんはこのグループや集まりを居心地よくするために、どのような貢献をしていますか？"
    }
  },
  // BUDDIES DEEP
  {
    id: "buddies_deep_3",
    category: "buddies",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, what is a dream job or project {p1} has talked about that you think they would be amazing at?",
      fr: "{active}, quel travail ou projet de rêve dont {p1} a parlé serait, selon toi, parfait pour lui/elle ?",
      es: "{active}, ¿cuál es el trabajo o proyecto de ensueño del que ha hablado {p1} y en el que crees que sería increíble?",
      lt: "{active}, apie kokį svajonių darbą ar projektą yra užsiminęs {p1}, kuriame jis tavo manymu pasirodytų puikiai?",
      jp: "{active}さん、{p1}さんがこれまでに語った「夢の仕事やプロジェクト」で、彼なら絶対に大成功すると思うものは何ですか？"
    }
  },
  {
    id: "buddies_deep_4",
    category: "buddies",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, how do you think {p1}'s background or where they grew up influenced who they are today?",
      fr: "{active}, comment penses-tu que les origines de {p1} ou l'endroit où il/elle a grandi ont influencé sa personnalité ?",
      es: "{active}, ¿cómo crees que el origen de {p1} o el lugar donde creció influyeron en quién es hoy?",
      lt: "{active}, kaip, tavo manymu, {p1} kilmė ar vieta, kurioje užaugo, suformavo jį?",
      jp: "{active}さん、{p1}さんの生い立ちや育った環境が、今日の彼の人格にどのような影響を与えていると思いますか？"
    }
  },
  {
    id: "buddies_deep_5",
    category: "buddies",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, what is a topic you feel you could discuss with {p1} for hours if you had the time?",
      fr: "{active}, quel est le sujet dont tu penses pouvoir discuter pendant des heures avec {p1} si vous en aviez le temps ?",
      es: "{active}, ¿de qué tema crees que podrías hablar durante horas con {p1} si tuvieran tiempo?",
      lt: "{active}, kokia tema galėtum diskutuoti su {p1} valandų valandas, jei tik turėtumėte laiko?",
      jp: "{active}さん、もし時間があれば{p1}さんと何時間でも語り合えると思うテーマは何ですか？"
    }
  },
  {
    id: "buddies_deep_6",
    category: "buddies",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, do you think {p1} is someone who relies more on logic or intuition when making big decisions?",
      fr: "{active}, penses-tu que {p1} se repose plutôt sur la logique ou sur l'intuition pour prendre de grandes décisions ?",
      es: "¿Crees que {p1} es alguien que confía más en la lógica o en la intuición al tomar grandes decisiones?",
      lt: "{active}, kaip manai, priimdamas didelius sprendimus {p1} labiau remiasi logika ar intuicija?",
      jp: "{active}さん、{p1}さんは大きな決断を下すとき、論理（ロジック）と直感（フィーリング）のどちらを重視するタイプだと思いますか？"
    }
  },
  {
    id: "buddies_deep_7",
    category: "buddies",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, what is a quality in {p1} that you wish you could adopt more in your own life?",
      fr: "{active}, quelle est la qualité chez {p1} que tu aimerais intégrer davantage dans ta propre vie ?",
      es: "{active}, ¿qué cualidad de {p1} te gustaría adoptar más en tu propia vida?",
      lt: "{active}, kokią {p1} savybę tu labiausiai norėtum pritaikyti savo gyvenime?",
      jp: "{active}さん、{p1}さんの持っている長所で、自分も見習って取り入れたいと思うものは何ですか？"
    }
  },
  // FUNNY SOFT
  {
    id: "funny_soft_4",
    category: "funny",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, if {p1} was arrested, what would the group assume they did?",
      fr: "{active}, si {p1} se faisait arrêter, qu'est-ce que le groupe imaginerait qu'il/elle a fait ?",
      es: "{active}, si arrestaran a {p1}, ¿qué asumiría el grupo que hizo?",
      lt: "{active}, jei {p1} būtų suimtas, kaip manai, už kokį nusikaltimą visi pagalvotų, kad jį suėmė?",
      jp: "{active}さん、もし{p1}さんが逮捕されたとしたら、この場にいる全員が「一体何をしでかした」と思うでしょうか？"
    }
  },
  {
    id: "funny_soft_5",
    category: "funny",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, who would survive longer in a zombie apocalypse, you or {p1}? Why?",
      fr: "{active}, qui survivrait le plus longtemps à une apocalypse zombie, toi ou {p1} ? Pourquoi ?",
      es: "{active}, ¿quién sobreviviría más tiempo en un apocalipsis zombi, tú o {p1}? ¿Por qué?",
      lt: "{active}, kas ilgiau išgyventų zombių apokalipsėje: tu ar {p1}? Kodėl?",
      jp: "{active}さん、もしゾンビの黙示録が起きたら、あなたと{p1}さんのどちらが生き残ると思いますか？理由は？"
    }
  },
  {
    id: "funny_soft_6",
    category: "funny",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, what is {p1}'s most useless superpower or skill?",
      fr: "{active}, quel est le super-pouvoir ou talent le plus inutile de {p1} ?",
      es: "{active}, ¿cuál es el superpoder o habilidad más inútil de {p1}?",
      lt: "{active}, koks yra nenaudingiausias {p1} talentas ar supergalia?",
      jp: "{active}さん、{p1}さんが持っている「最も役に立たない特技・スキル」は何ですか？"
    }
  },
  {
    id: "funny_soft_7",
    category: "funny",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, if {p1} was an influencer, what ridiculous thing would they be promoting?",
      fr: "{active}, si {p1} était influenceur/influenceuse, de quel produit ridicule ferait-il/elle la promotion ?",
      es: "{active}, si {p1} fuera influencer, ¿qué producto ridículo promocionaría?",
      lt: "{active}, jei {p1} būtų nuomonės formuotojas (influenceris), kokį kvailą dalyką jis reklamuotų?",
      jp: "{active}さん、もし{p1}さんがインフルエンサーだとしたら、どんなくだらない商品を宣伝していると思いますか？"
    }
  },
  {
    id: "funny_soft_8",
    category: "funny",
    type: "soft",
    minPlayers: 2,
    text: {
      en: "{active}, what is the worst fashion disaster you have ever seen {p1} wear?",
      fr: "{active}, quel a été le pire désastre vestimentaire que tu aies vu {p1} porter ?",
      es: "{active}, ¿cuál ha sido el peor desastre de moda que le has visto vestir a {p1}?",
      lt: "{active}, kokį didžiausią mados nusikaltimą esi matęs dėvint {p1}?",
      jp: "{active}さん、あなたがこれまでに目撃した{p1}さんの「最悪のファッションのやらかし」は何ですか？"
    }
  },
  // FUNNY EMPATHY
  {
    id: "funny_empathy_3",
    category: "funny",
    type: "empathy",
    minPlayers: 3,
    text: {
      en: "{active}, who is most likely to cry during a sad animated movie, {p1} or {p2}? Mimic how they look when crying.",
      fr: "{active}, qui est le plus susceptible de pleurer devant un film d'animation triste, {p1} ou {p2} ? Imite sa tête quand il pleure.",
      es: "{active}, ¿cuán probable es que llore con una película animada triste, {p1} o {p2}? Imita cómo se ve cuando llora.",
      lt: "{active}, kas greičiau apsiverktų žiūrėdamas liūdną animacinį filmą: {p1} ar {p2}? Pamėgdžiok, kaip jis atrodo verkdamas.",
      jp: "{active}さん、悲しいアニメ映画を見て一番泣きそうなのは誰ですか？{p1}さん、それとも{p2}さん？泣いている姿のモノマネをしてください。"
    }
  },
  {
    id: "funny_empathy_4",
    category: "funny",
    type: "empathy",
    minPlayers: 3,
    text: {
      en: "{active}, if {p1} and {p2} were to fight over the last slice of pizza, who would win and what sneaky tactic would they use?",
      fr: "{active}, si {p1} et {p2} devaient se battre pour la dernière part de pizza, qui l'emporterait et quelle technique fourbe utiliserait-il/elle ?",
      es: "{active}, si {p1} y {p2} pelearan por la última porción de pizza, ¿quién ganaría y qué táctica sucia usaría?",
      lt: "{active}, jei {p1} ir {p2} kovotų dėl paskutinio picos gabalėlio, kas laimėtų ir kokią gudrybę panaudotų?",
      jp: "{active}さん、もし最後の1枚のピザを巡って{p1}さんと{p2}さんが争ったら、どちらが勝ちますか？どんな卑怯な手を使いますか？"
    }
  },
  {
    id: "funny_empathy_5",
    category: "funny",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, what is {p1}'s signature dance move? Demonstrate it. If you refuse, take 2 sips.",
      fr: "{active}, quel est le pas de danse fétiche de {p1} ? Fais-en la démonstration. Si tu refuses, prends 2 gorgées.",
      es: "{active}, ¿cuál es el paso de baile característico de {p1}? Demuéstralo. Si te niegas, toma 2 tragos.",
      lt: "{active}, koks yra firminis {p1} šokio judesys? Pademonstruok. Jei atsisakai - gerk 2 gurkšnius.",
      jp: "{active}さん、{p1}さんの定番のダンスムーブは何ですか？実演してください。断るなら2口飲んでください。"
    }
  },
  {
    id: "funny_empathy_6",
    category: "funny",
    type: "empathy",
    minPlayers: 3,
    text: {
      en: "{active}, who gets the hangry (hungry + angry) easiest in this group, {p1} or {p2}?",
      fr: "{active}, qui devient 'hangry' (irritable quand il a faim) le plus facilement dans le groupe, {p1} ou {p2} ?",
      es: "{active}, ¿quién se pone de mal humor por hambre (hangry) más fácilmente en este grupo, {p1} o {p2}?",
      lt: "{active}, kas šioje grupėje greičiausiai supyksta, kai būna alkanas: {p1} ar {p2}?",
      jp: "{active}さん、お腹が空くと一番不機嫌（ハングリー）になりやすいのは誰ですか？{p1}さん、それとも{p2}さん？"
    }
  },
  {
    id: "funny_empathy_7",
    category: "funny",
    type: "empathy",
    minPlayers: 2,
    text: {
      en: "{active}, if {p1} were an inanimate object in your house, what would they be and why?",
      fr: "{active}, si {p1} était un objet inanimé dans ta maison, ce serait quoi et pourquoi ?",
      es: "{active}, si {p1} fuera un objeto inanimado en tu casa, ¿qué sería y por qué?",
      lt: "{active}, jei {p1} būtų koks nors daiktas tavo namuose, kas jis būtų ir kodėl?",
      jp: "{active}さん、もし{p1}さんがあなたの家の中にある家電や家具だとしたら、何だと思いますか？その理由は？"
    }
  },
  // FUNNY DEEP
  {
    id: "funny_deep_3",
    category: "funny",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, what is a weird habit {p1} has that you secretly find hilarious?",
      fr: "{active}, quelle habitude bizarre de {p1} trouves-tu secrètement hilarante ?",
      es: "{active}, ¿qué hábito extraño tiene {p1} que secretamente te resulta divertidísimo?",
      lt: "{active}, kokį keistą {p1} įprotį tu paslapčia laikai beprotiškai juokingu?",
      jp: "{active}さん、{p1}さんの奇妙な癖で、実はあなたが心の中で「めちゃくちゃ面白い」と思っていることは何ですか？"
    }
  },
  {
    id: "funny_deep_4",
    category: "funny",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, tell the group the funniest text message {p1} has ever sent you, or take a sip.",
      fr: "{active}, raconte au groupe le SMS le plus drôle que {p1} t'ait envoyé, ou prends une gorgée.",
      es: "{active}, cuéntale al grupo el mensaje de texto más divertido que te ha enviado {p1}, o toma un trago.",
      lt: "{active}, papasakok visiems juokingiausią SMS žinutę, kurią tau atsiuntė {p1}, arba išgerk gurkšnį.",
      jp: "{active}さん、これまでに{p1}さんから送られてきた中で一番面白かったメッセージ（LINEやSMS）を皆に教えてください。さもなければ1口飲んでください。"
    }
  },
  {
    id: "funny_deep_5",
    category: "funny",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, if you had to swap lives with {p1} for one week, what is the first thing you would change in their routine?",
      fr: "{active}, si tu devais échanger ta vie avec celle de {p1} pendant une semaine, qu'est-ce que tu changerais en premier dans son quotidien ?",
      es: "{active}, si tuvieras que cambiar de vida con {p1} durante una semana, ¿qué sería lo primero que cambiarías de su rutina?",
      lt: "{active}, jei savaitei susikeistumėte gyvenimais su {p1}, ką pirmiausia pakeistum jo kasdienybėje?",
      jp: "{active}さん、もし{p1}さんと1週間生活を入れ替えられるとしたら、彼らのルーティンの中で真っ先に変えたいことは何ですか？"
    }
  },
  {
    id: "funny_deep_6",
    category: "funny",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, if {p1} was a cocktail, what ingredients would they be and how strong would the drink be?",
      fr: "{active}, si {p1} était un cocktail, quels en seraient les ingrédients et quel serait son degré d'alcool ?",
      es: "{active}, si {p1} fuera un cóctel, ¿qué ingredientes tendría y qué tan fuerte sería?",
      lt: "{active}, jei {p1} būtų kokteilis, kokie būtų jo ingredientai ir kokio stiprumo jis būtų?",
      jp: "{active}さん、もし{p1}さんがカクtelだとしたら、どんな材料でできていて、どのくらい度数が強いと思いますか？"
    }
  },
  {
    id: "funny_deep_7",
    category: "funny",
    type: "deep",
    minPlayers: 2,
    text: {
      en: "{active}, tell the group an unpopular opinion that {p1} holds that makes you shake your head.",
      fr: "{active}, partage avec le groupe une opinion impopulaire de {p1} qui te fait lever les yeux au ciel.",
      es: "{active}, cuéntale al grupo una opinión poco popular que tenga {p1} y que te haga negar con la cabeza.",
      lt: "{active}, papasakok visiems keistą ar nepopuliarią {p1} nuomonę, dėl kurios tau norisi tik kraipyti galvą.",
      jp: "{active}さん、{p1}さんが持っている「世間一般とは違う、あなたが理解に苦しむマイナーなこだわり・意見」を教えてください。"
    }
  }
];

// Export to window if in browser, or module.exports if in node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questions;
} else {
  window.questions = questions;
}
