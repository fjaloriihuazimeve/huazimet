const result = document.getElementById("result");
const btn = document.getElementById("search-btn");

// Të dhënat e ruajtura lokal
const dictionaryData = {
    "ambient": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : franceze",
        definition: "Tërësia e kushteve natyrore, ku jeton dhe zhvillohet një qenie.",
        example: "SINONIMI NË SHQIP : mjedis"
    },
   "aplikacion": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : franceze",
        definition: "Automjet me madhësi e forma të ndryshme,që shërben për mbartjen e udhëtarëve ose të mallrave.",
        example: "SINONIMI NË SHQIP : zbatim"
    },
   "automobil": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : franceze",
        definition: "Automjet me madhësi e forma të ndryshme,që shërben për mbartjen e udhëtarëve ose të mallrave.",
        example: "SINONIMI NË SHQIP : veturë"
    },
  "dokument": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : latine/angleze",
        definition: "Akt i shkruar që shërben për të dëshmuar ose për të vërtetuar diçka.",
        example: "SINONIMI NË SHQIP : shkresë"
    },
  "fakultet": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : latine",
        definition: "Pjesë e një shkolle të lartë,që përfshin një degë ose disa degë të afërta të dijes.",
        example: "SINONIMI NË SHQIP : degë studimi"
    },
   "festival": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : franceze",
        definition: "Shfaqje e madhe disaditëshe,në të cilën marrin pjesë përfaqësues të një fushe arti e kulture.",
        example: "SINONIMI NË SHQIP : festë"
    },
  "gjeneratë": {
        partOfSpeech: "emër",
        phonetic: "ORGJINA : latine",
        definition: "Tërësia e njerëzve që kanë pak a shumë të njëjtën moshë.",
        example: "SINONIMI NË SHQIP : brez"
    },
   "informacion": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : latine",
        definition: "Njoftim që marrim për diçka,të dhëna për gjendjen e punëve në një fushë të caktuar.",
        example: "SINONIMI NË SHQIP : të dhëna"
    },
   "kapital": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : latine",
        definition: "Shumë e madhe parash",
        example: "SINONIMI NË SHQIP : pasuri"
    },
   "komfort": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : franceze/latine",
        definition: "Gjendje qetësie,pa shqetësime e pa kokëçarje.",
        example: "SINONIMI NË SHQIP : rehati"
    },
   "kompleks": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : franceze",
        definition: "Tërësia e elementeve përbërës të diçkaje,që lidhen ngushtë ndërmjet tyre dhe plotësojnë njëri-tjetrin.",
        example: "SINONIMI NË SHQIP : grup ndërtesash"
    },
  "konferencë": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : latine",
        definition: "Mbledhje e gjerë me karakter kombëtar a ndërkombëtar ku marrin pjesë përfaqësues të organizatave politike,shoqërore etj.",
        example: "SINONIMI NË SHQIP : mbledhje"
    },
  "konstruksion": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : latine",
        definition: "Rregullim i një ndërtese ekzistuese.",
        example: "SINONIMI NË SHQIP : riparim"
    },
  "kriter": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : franceze",
        definition: "Rrethanë a gjendje e domosdoshme,nga e cila varet qenia e diçkaje ose zhvillimi i saj.",
        example: "SINONIMI NË SHQIP : kusht"
    },
  "manual": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : latine",
        definition: "Libër doracak që përmban në mënyrë të përmbledhur njohuritë themelore të një fushe të caktuar të shkencës etj.",
        example: "SINONIMI NË SHQIP : udhëzues"
    },
  "marketing": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : angleze",
        definition: "Tërësia e masave dhe e veprimeve që ndërmerren në vendet me tregti për të bërë sa më të njohur një mall,një shfaqje etj; me qëllim që të tërhiqen blerë apo shikues.",
        example: "SINONIMI NË SHQIP : reklamim"
    },
  "operator": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : latine",
        definition: "Një individ që kryen një veprim të caktuar.",
        example: "SINONIMI NË SHQIP : individi në një shërbim telefonik"
    },
  "organizatë": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : franceze",
        definition: "Bashkim politik a shoqëror,që ka qëllime të caktuara,zhvillon veprimtari të rregullt dhe vepron sipas normave të vendosura në rregulloren e vet.",
        example: "SINONIMI NË SHQIP : shoqatë"
    },
  "personalitet": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : franceze",
        definition: "Tërësia e veçorive psikike të karakterit,të sjelljes,të veprimtarisë etj, të njeriut,të cilat e dallojnë atë nga të tjerët.",
        example: "SINONIMI NË SHQIP : karakter"
    },
  "proces": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : latine",
        definition: "Ecuria a vija e zhvillimit të diçkaje në etapat e saj të ndryshme.",
        example: "SINONIMI NË SHQIP : përpunim"
    },
  "produkt": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : latine",
        definition: "Send me vlerë,mjet,vegël etj , që përgatitet në një fabrikë,në një ndërmarrje etj.",
        example: "SINONIMI NË SHQIP : diçka që del nga puna e njeriut"
    },
  "projekt": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : latine",
        definition: "Plani i një ndërtese,ure a  ndonjë vepre tjetër, që paraqet me hollësi veprë a pjesët e saj dhe shërben gjatë ndërtimit.",
        example: "SINONIMI NË SHQIP : plan"
    },
  "reformë": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : franceze",
        definition: "Ndryshim i thellë a i gjerë që bëhet në një fushë të veprimtarisë shoqërore,riorganizim a shndërrim i thellë i diçkaje.",
        example: "SINONIMI NË SHQIP : ndryshim"
    },
  "resurs": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : franceze",
        definition: "Vendi ku nxirret një lëndë e parë.",
        example: "SINONIMI NË SHQIP : burim"
    },
  "sistem": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : greke",
        definition: "Rregulli sipas të cilit janë vndosur a veprojnë pjesët e një tërësie me lidhje e marrëdhënie të caktuara ndërmjet tyre,që përcaktojnë ndërtimin e brendshëm të gjithë tërësisë.",
        example: "SINONIMI NË SHQIP : rrjet"
    },
  "strategji": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : latine/greke",
        definition: "Arti dhe shkenca e përgatitjes dhe e drejtimit të veprimeve të diçkaje.",
        example: "SINONIMI NË SHQIP : plan veprimi"
    },
  "strukturë": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : franceze",
        definition: "Mënyra si janë vendosur dhe si janë të lidhura në mes tyre pjesët përbërëse të diçkaje.",
        example: "SINONIMI NË SHQIP : mënyra e ndërtimit të diçkaje"
    },
  "universitet": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : latine/italiane",
        definition: "Shkollë e lartë që përfshin shumë fakultete,ku përgatiten specialistë për degë të ndryshme të shkencave shoqërore shoqërore,natyrore e teknike dhe bëhen kërkime e studime shkencore.",
        example: "SINONIMI NË SHQIP : shkollë e lartë"
    },
  "vizion": {
        partOfSpeech: "emër",
        phonetic: "ORIGJINA : franceze",
        definition: "Qëllimi i fundit që duam të arrijmë,pika ku synojmë të arrijmë në një punë a në një veprimtari.",
        example: "SINONIMI NË SHQIP : pikësynim"
    },
};

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value.toLowerCase();

    // Kontrollojmë nëse fjala është në fjalorin e paracaktuar
    if (dictionaryData[inpWord]) {
        const word = dictionaryData[inpWord];
        result.innerHTML = `
            <div class="word">
                <h3>${inpWord}</h3>
            </div>
            <div class="details">
                <p>${word.partOfSpeech}</p>
                <p>/${word.phonetic}/</p>
            </div>
            <p class="word-meaning">
                ${word.definition}
            </p>
            <p class="word-example">
                ${word.example}
            </p>`;
    } else {
        result.innerHTML = `<h3 class="error">Kjo fjalë nuk është e huazuar. Ose është shkruar gabim.</h3>`;
    }
});
