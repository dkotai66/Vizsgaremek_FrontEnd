import { Component } from 'react';
import './Main.css';
import { GoArrowUp } from "react-icons/go";//react-icons octions icons
import { GoCheck } from "react-icons/go"; 
import { GoThreeBars } from "react-icons/go"; 
import { Link } from 'react-router-dom';

interface VideoGalleryElement {
  videoSrc: string;
  videoTitle: string;
  videoDetails: string;
}

interface WheyEducatorsElement {
  description: string;
  descriptionTitle: string;
}

interface AminoEducatorsElement {
  description: string;
  descriptionTitle: string;
}

interface CreatinEducatorsElement {
  description: string;
  descriptionTitle: string;
}

interface WeightGanerEducatorsElement {
  description: string;
  descriptionTitle: string;
}

interface VitaminEducatorsElement {
  description: string;
  descriptionTitle: string;
}

interface JointEducatorsElement {
  description: string;
  descriptionTitle: string;
}

interface currentEducatorElement {
  description: string;
  descriptionTitle: string;
}

const videoGallery: VideoGalleryElement[] = [
    {
        videoSrc: './video/fekvenyomas.mp4',
        videoTitle: 'Fekvenyomás',
        videoDetails: 'Fontos, hogy legyen elég hely a fekvenyomáshoz, gyakorlat közben ne ütközz bele semmibe. Feküdj hanyatt egy fekve nyomó padon, találd meg azt a magasságot a rúdhoz, hogy kényelmesen nyújtott kézzel ki tudd emelni. A gyakorlat stabil fekvést igényel, talajon lévő talpakat, és padon tartott fejet. A kiemelt rudat lassan engedd lefelé a mellbimbók vonalába, egészen a szegycsontodig, majd emeld vissza a kiinduló helyzetbe! A kézfej végig egyenes, a hátadban legyen egy kis domborulat, a lapockádat pedig told össze teljesen addig amíg már csak egy kis labdának maradna hely. Ezzel elősegíted a nagyobb erőkifejtést, és jobban terheled a mellizmokat. ',
    },
    {
        videoSrc: './video/felhuzas.mp4',
        videoTitle: 'Felhúzás',
        videoDetails: 'Állj csípőszéles terpeszbe, törzsed előtt tartva a tudat, vagy súlyzókat. Húzd ki magad, majd hajlítsd a csípődet a medence hátra nyomásával, a láb mentén engedd lefele a súlyt. A hát végig egyenes, és a fejed ne lógjon, csak addig engedd a súlyt amíg a hátad egyenes tud maradni. ',
    },
    {
        videoSrc: './video/guggolas.mp4',
        videoTitle: 'Guggolás súllyal',
        videoDetails: 'Állj csípőszéles terpeszbe, kifelé néző lábfejekkel, süllyeszd a medencédet a talaj irányába (mintha székre ülnél), és próbálj minél mélyebbre ereszkedni. Kinyomásnál (felállásnál) a sarkadat nyomd a talajba, feszítsd meg far és combizmodat. A gyakorlat során végig egyenes a láb, a térd egyenesen előre néz. A súlyt tartsd a válladon, vagy a kezedben. ',
    },
    {
        videoSrc: './video/vallbolnyomas.mp4',
        videoTitle: 'Vállból nyomás',
        videoDetails: 'Végezhető ülve, vagy állva. Emeld a súlyokat a vállad vonalába, a tenyerek előrefele néznek. A kar kinyújtásával nyomd ki a súlyokat a fejed fölé, majd engedd vissza kiinduló helyzetbe.',
    },
    {
        videoSrc: './video/lehuzas.mp4',
        videoTitle: 'Lehúzás mellhez',
        videoDetails: 'Fogd meg a rudat vállszélesen, akaszd be a combjaidat a párna alá, majd húzd le a rudat a szegycsontodig. A könyökök a törzs vonalát követik, lehúzásnál enyhén dőlj hátra. A fejed végig maradjon a gerinc vonalában. ',
    },
    {
        videoSrc: './video/fekvotamasz.mp4',
        videoTitle: 'Fekvőtámasz',
        videoDetails: 'Vedd fel a plank testtartást a földön, nyújtott karokkal. A tenyerek a válladdal egy vonalban legyenek. Nyomd le a vállaidat, minél távolabb a füledtől, a lapockáidat is le és hátra. A könyök 45 fokos szöget zár a testeddel, a tested legyen egyenes. Fújd ki a levegőt, ereszkedj le, és próbáld a padlóhoz érinteni a mellkasodat. Belégzés közben nyomd vissza magad a kezdő helyzetbe. ',
    },
    {
        videoSrc: './video/huzodzkodas.mp4',
        videoTitle: 'Húzódzkodás',
        videoDetails: 'Ugorj fel a rúdra, vállszélességnél egy kicsit szélesebben ragadd meg a rudat, lógj kinyújtott végtagokkal. Szorítsd, és told lefelé a lapockádat, ahogy megfeszíted a hátad, a törzsed és a farizmod. Húzd fel magad addig amíg, az állad a rúd fölé nem ér. A könyököket tartsd a törzsed mellet, a derekad őrizze a természetes ívét. Húzásnál képzeljük el, mintha a rudat a mellkasunkhoz húznánk. Ereszkedj vissza kezdő pozícióba. ',
    },
    {
        videoSrc: './video/guggolassulynelkul.mp4',
        videoTitle: 'Guggolás súly nélkül',
        videoDetails: 'Ugorj fel a rúdra, vállszélességnél egy kicsit szélesebben ragadd meg a rudat, lógj kinyújtott végtagokkal. Szorítsd, és told lefelé a lapockádat, ahogy megfeszíted a hátad, a törzsed és a farizmod. Húzd fel magad addig amíg, az állad a rúd fölé nem ér. A könyököket tartsd a törzsed mellet, a derekad őrizze a természetes ívét. Húzásnál képzeljük el, mintha a rudat a mellkasunkhoz húznánk. Ereszkedj vissza kezdő pozícióba. ',
    },
    {
        videoSrc: './video/plank.mp4',
        videoTitle: 'Plank',
        videoDetails: 'Térdelj le, plankelj nyújtott karokkal. A tenyerek a válladdal egy vonalban legyenek.  Nyomd le a vállaidat, minél távolabb a füledtől, a lapockáidat is le és hátra. A könyök 45 fokos szöget zár a testeddel, a tested legyen egyenes. Feszítsd a törzset, és tartsd egyenesen a testet. Nyugodt a légzés, és tartsd mozdulatlanul a testedet, és tartsd ezt a pozíciót a kitűzött ideig. ',
    },
];

const WheyEducators: WheyEducatorsElement[] =[
  {
    description: 'A tejsavó fehérjét tejből technológiai eljárásokkal állítják elő. A tejsavó fehérje porok mindegyiké kissé eltér az összetevők emészthetőségében, emésztési sebességében, és persze az árában. Ezért célnak és igénynek megfelelően lehet választani tejsavó koncentrátumom, izolátumot, hidrolizátumot',
    descriptionTitle: 'Tejsavú fehérjék',
  },
  {
    description: 'Tejsavófehérje izolátumként is ismert, tejből gyártják, és hasznos aminosav spektrummal rendelkezik. Előállításnál a tejsavó koncentrátumot állítják elő, melyet ezután szűréssel tejsavó fehérje izolátum előállításra használnak fel. Tisztább port vihetünk be, a fehérje tartalma átlagosan 80% feletti, kevesebb zsírt tartalmaz, ami miatt könnyebben szívódik fel, és könnyebben emészthető.',
    descriptionTitle: 'Fehérje izolátum',
  }, 
  {
    description: 'Tejsavófehérje izolátumként is ismert, előnyük a magas fehérjekoncentráció 70-85%, ezeknek a fehérjéknek a leggyorsabb felszívódási sebessége. Hidrolízissel nyerik ki tejsavóból, vagy izolátumból. A folyamat közben a keverék vegyületekkel gazdagodik, amelyek enzimatikusan bontják le a fehérjeláncokat rövidebb peptidekre.',
    descriptionTitle: 'Hidrolizált fehérjék',
  },
  {
    description: 'Növényi eredetű, kenderből, hüvelyesekből (szójából, borsból), gabonafélékből (rizsből) állítják elő. A laktózintoleranciában szenvedő emberek is fogyaszthatják. Hátránya, hogy az esszenciális aminosavak spektrumát tekintve kevésbé kedvező.',
    descriptionTitle: 'Növényalapú fehérjék',
  },
  {
    description: 'Aki kerüli a laktózt, vagy a tehéntejből származó fehérjét, annak tökéletes megoldást nyújt a marhahús fehérje. Ezek a porok leggyakrabban hidrolizált fehérjeporok formájában érhetőek el, jó felszívódású képességgel.',
    descriptionTitle: 'Állatifehérje',
  },
];

const aminoEducators: AminoEducatorsElement[] =[
  {
    description: 'Ezek az aminosavak esszenciális amionosavak közé tartoznak, ami azt jelenti, hogy a szervezet nem tudja magától előállítani. Ezeket az aminosavakat fehérjévé alakítja át a szervezet, ami az izomszövet építőanyaga. A BCAA magukban is emészthetőek, emiatt fizikai aktivitás során szolgálhatnak energiaforrásként, ezzel lehetővé téve számunkra, hogy energia használat közben a szervezetünk ne az izomtömegünkhöz nyúljon hozzá.',
    descriptionTitle: 'BCAA',
  },
  {
    description: 'A szervezetben legnagyobb arányban lévő aminosavak közé tartozik. Izomtömeget létrehozó fehérjék alapköve, ezentúl immunrendszer és a bélnyálkahártya egyes sejtjeinek energiaforrása. A szervezetünk képes maga is előállítani a glutamint, de előfordul, hogy az előállítás mennyisége nem elegendő pl.: nehéz fizikai tevékenységnél, vagy stresszes időszakban.',
    descriptionTitle: 'L-Glutamin',
  },
  {
    description: 'Az EAA az izomtömeg regenerációjában és növekedésében játszik szerepet, emellett a hormonok, enzimek, és más vegyületek termelésének alapját képezi. A szervezet nem képes önmagam előállítani ezt, ezért csak táplálékkal, és táplálékkiegészítővel vagyunk képesek bejuttatni szervezetünkbe.',
    descriptionTitle: 'EAA',
  },
  {
    description: 'Kitágítja az ereket, ezáltal szabályozza az izmok vérellátását. Elősegíti az izmok oxigén és tápanyag ellátását edzés közben. Az arginin a kreatin alapvető építőeleme. Továbbá segít a természetes méregtelenítésben, késleltetheti a teljesítménycsökkenést. A szervezet képes maga is előállítani, de betegség vagy nehéz fizikai aktivitás során megnőhet a test igénye, emiatt fontos a külsőleges alkalmazás is.',
    descriptionTitle: 'Arginin',
  },
];

const creatinEducators: CreatinEducatorsElement[] =[
  {
    description: 'Kreatinok közül a monohidrát a legismertebb. A monohidrát társaihoz hasonlóan elősegíti az ATIP újra termelődését, ami gyors energiaforrásként ismert, ezáltal képes növelni a fizikai teljesítményt, elősegítheti a robbanékonyságot. A kreatin leginkább vázizomokban tárolódik. Vízzel épül be, emiatt fontos a sok folyadékbevitel. Napi 3gr kreatin bevitel ajánlott az eredmény érdekében.',
    descriptionTitle: 'Monohidrát'
  }, 
  {
    description: 'Kreatin egyéb formái a kreatin különböző formáit tartalmazó termékkategória, amelyek különböznek az összetevő profilban, oldhatóságban és felszívódási sebességben. Például a jobb oldhatóság és felszívódási sebesség miatt a kreatint nagyon finom porrá mikronizálják. A kreatin-monohidráthoz hasonlóan a kreatin más formái is elősegítik az ATP újratermelődését, amely gyors energiaforrásként ismert. Ezért képesek növelni a fizikai teljesítményt az intenzív, rövid, egymást követő edzésszakaszok során. A kreatin egyes formáit azzal a céllal fejlesztették ki, hogy javítsák felszívódási sebességüket és oldhatóságukat.',
    descriptionTitle: 'Egyébb formái',
  },
];

const weightGanerEducators: WeightGanerEducatorsElement[] =[
  {
    description: 'A tömegnövelő szerek főképp szénhidrátban, kretainban a leggazdagabbak, de természetesen fehérje is van bennük. Tömegnövelő által extra kalória mennyiséget vihetünk be. Ajánlott nehéz fizikai munkát végzők számára, ektomorf (nehezen hízó vékony testalkatú) embereknek, és azoknak akik gyorsítani kívánják a regenerációt, vagy tömeget szeretnének növelni.',
    descriptionTitle: 'Általánosság',
  },
];

const vitaminEducators: VitaminEducatorsElement[] =[
  {
    description: 'Komplex táplálékkiegészítő kategória. A legtöbb esetben szervezetünk nem képes ezeket az anyagokat kellő mennyiségben előállítani, ezért fontos a rendszeres pótlásuk. Általában négy kategória létezik: Nőknek (pl.: hialuron savval, cinkkel kiegészítve) , Férfiaknak (pl.: emésztőenzimekkel, nootropikus anyokkal kiegészítve), sima multivitamin, 3 évnél idősebb gyermekek számára (rágótabletta formában, gyümölcsös ízben). A legtöbb esetben 8-15 vitamin tartalmaznak egyszerre, kevesebb mennyiségben.',
    descriptionTitle: 'Multivitaminok',
  },
  {
    description: 'Zsírban oldodó vitamin, táplálékon keresztül nyert zsírhoz kötődnek. Az A-vitamin a sejtek specializálódásában játszik szerepet, és a vasanyagcserében is. Emellett hozzájárul a nyálkahártyák egészségéhez, valamint bőr és látás megfelelő állapotához.',
    descriptionTitle: 'A-vitamin',
  },
  {
    description: 'Ide tartoznak a B1, B2, B3, B5, B6, B7, B9, B12 vitaminok, melyek könnyen felszívódnak szervezetünkben. B1: Energia előállításához szükséges, illetve az idegrendszert támogatja. B2: Közérzetünkért felelős, illetve a megfelelő vasanyagcseréért, és csökkenti a fáradtság érzetet. B3: megfelelő anyagcserét biztosítja, csökkenti a fáradtság, és a kimerültség érzetet. B5: csökkenti a fáradtság, és a kimerültség érzetet, illetve segít az optimális szellemi teljesítményben. B6: Hozzájárul a hormonális aktivitás szabályozásához, megfelelő immunfunkciókhoz, csökkenti a fáradtság, és a kimerültség érzetet. B7: Részt vesz a mentális jóllét, és az idegrendszer támogatásában. B9: Különösen a terhes nőknek fontos a magzat fejlődési és növekedési szakaszban. B12: Hozzájárul a megfelelő mentális egészség megőrzéséhez és az idegrendszer működéséhez.',
    descriptionTitle: 'B-vitamin',
  },
  {
    description: 'A C vitamin vízben oldodó vitaminok közé tartozik, melyek az emberi szervezetben látják el funkciójukat. Többlet esetén a szervezet űríti ezt a vitamint. A C vitamin hatással van az immunrendszerre, idegrendszerre, és az elmére. Részt vesz a stresszel szembeni védelemben, és a fáradtáság csökkenésében.',
    descriptionTitle: 'C-vitamin',
  },
  {
    description: 'A D vitaminnak két fő formája van, ergokalciferol, és kolekaciferol. A D vitamin főleg állati eredetű, az egyetlen kivétel összetevőjében a kolekarciferol mely zuzmóbol készül. A D vitamin feladata, a sejt osztódás, és ezenkívül az immunitás megfelelő működése. Segít az egészséges fogakat, csontokat, izmokat fenntartani.',
    descriptionTitle: 'D-vitamin'
  },
  {
    description: '8 vegyületet foglal magába, 4 tokoferolt és 4 tokotrienolt. Zsírban oldodó vitamin, emaitt bélfalon jobban szívódik fel. Feladata, hogy megvédje a sejteket az ocidatív stressztől és a szabad gyököktől.',
    descriptionTitle: 'E-vitamin'
  },
];

const jointEducators: JointEducatorsElement[] =[
  {
    description: 'Feladata az ízületek, porcok, csontok, ínak és más kötőszövetek egészségének támogatása. Általában állati szövetekből állítják elő, elsősorban tengeri állatokéból.',
    descriptionTitle: 'Kollagén',
  },
  {
    description: 'Elsősorban térdízület erősségének és ellenállásának, valamint a porcok rugalmasságának támogatása miatt ismert. Étrend-kiegészítőkben leggyakrabban glükozamin-szulfátként található meg, mivel hatékonyabban szívódik fel, mint a glükozamin-hidroklorid.',
    descriptionTitle: 'Glükózamin',
  },
];

const currentEducator: currentEducatorElement[] =[
  {
    description: 'A tejsavó fehérjét tejből technológiai eljárásokkal állítják elő. A tejsavó fehérje porok mindegyiké kissé eltér az összetevők emészthetőségében, emésztési sebességében, és persze az árában. Ezért célnak és igénynek megfelelően lehet választani tejsavó koncentrátumom, izolátumot, hidrolizátumot',
    descriptionTitle: 'Tejsavú fehérjék',
  },
  {
    description: 'Tejsavófehérje izolátumként is ismert, tejből gyártják, és hasznos aminosav spektrummal rendelkezik. Előállításnál a tejsavó koncentrátumot állítják elő, melyet ezután szűréssel tejsavó fehérje izolátum előállításra használnak fel. Tisztább port vihetünk be, a fehérje tartalma átlagosan 80% feletti, kevesebb zsírt tartalmaz, ami miatt könnyebben szívódik fel, és könnyebben emészthető.',
    descriptionTitle: 'Fehérje izolátum',
  }, 
  {
    description: 'Tejsavófehérje izolátumként is ismert, előnyük a magas fehérjekoncentráció 70-85%, ezeknek a fehérjéknek a leggyorsabb felszívódási sebessége. Hidrolízissel nyerik ki tejsavóból, vagy izolátumból. A folyamat közben a keverék vegyületekkel gazdagodik, amelyek enzimatikusan bontják le a fehérjeláncokat rövidebb peptidekre.',
    descriptionTitle: 'Hidrolizált fehérjék',
  },
  {
    description: 'Növényi eredetű, kenderből, hüvelyesekből (szójából, borsból), gabonafélékből (rizsből) állítják elő. A laktózintoleranciában szenvedő emberek is fogyaszthatják. Hátránya, hogy az esszenciális aminosavak spektrumát tekintve kevésbé kedvező.',
    descriptionTitle: 'Növényalapú fehérjék',
  },
  {
    description: 'Aki kerüli a laktózt, vagy a tehéntejből származó fehérjét, annak tökéletes megoldást nyújt a marhahús fehérje. Ezek a porok leggyakrabban hidrolizált fehérjeporok formájában érhetőek el, jó felszívódású képességgel.',
    descriptionTitle: 'Állatifehérje',
  },
  {
    description: 'Ezek az aminosavak esszenciális amionosavak közé tartoznak, ami azt jelenti, hogy a szervezet nem tudja magától előállítani. Ezeket az aminosavakat fehérjévé alakítja át a szervezet, ami az izomszövet építőanyaga. A BCAA magukban is emészthetőek, emiatt fizikai aktivitás során szolgálhatnak energiaforrásként, ezzel lehetővé téve számunkra, hogy energia használat közben a szervezetünk ne az izomtömegünkhöz nyúljon hozzá.',
    descriptionTitle: 'BCAA',
  },
  {
    description: 'A szervezetben legnagyobb arányban lévő aminosavak közé tartozik. Izomtömeget létrehozó fehérjék alapköve, ezentúl immunrendszer és a bélnyálkahártya egyes sejtjeinek energiaforrása. A szervezetünk képes maga is előállítani a glutamint, de előfordul, hogy az előállítás mennyisége nem elegendő pl.: nehéz fizikai tevékenységnél, vagy stresszes időszakban.',
    descriptionTitle: 'L-Glutamin',
  },
  {
    description: 'Az EAA az izomtömeg regenerációjában és növekedésében játszik szerepet, emellett a hormonok, enzimek, és más vegyületek termelésének alapját képezi. A szervezet nem képes önmagam előállítani ezt, ezért csak táplálékkal, és táplálékkiegészítővel vagyunk képesek bejuttatni szervezetünkbe.',
    descriptionTitle: 'EAA',
  },
  {
    description: 'Kitágítja az ereket, ezáltal szabályozza az izmok vérellátását. Elősegíti az izmok oxigén és tápanyag ellátását edzés közben. Az arginin a kreatin alapvető építőeleme. Továbbá segít a természetes méregtelenítésben, késleltetheti a teljesítménycsökkenést. A szervezet képes maga is előállítani, de betegség vagy nehéz fizikai aktivitás során megnőhet a test igénye, emiatt fontos a külsőleges alkalmazás is.',
    descriptionTitle: 'Arginin',
  },
  {
    description: 'Kreatinok közül a monohidrát a legismertebb. A monohidrát társaihoz hasonlóan elősegíti az ATIP újra termelődését, ami gyors energiaforrásként ismert, ezáltal képes növelni a fizikai teljesítményt, elősegítheti a robbanékonyságot. A kreatin leginkább vázizomokban tárolódik. Vízzel épül be, emiatt fontos a sok folyadékbevitel. Napi 3gr kreatin bevitel ajánlott az eredmény érdekében.',
    descriptionTitle: 'Monohidrát'
  }, 
  {
    description: 'Kreatin egyéb formái a kreatin különböző formáit tartalmazó termékkategória, amelyek különböznek az összetevő profilban, oldhatóságban és felszívódási sebességben. Például a jobb oldhatóság és felszívódási sebesség miatt a kreatint nagyon finom porrá mikronizálják. A kreatin-monohidráthoz hasonlóan a kreatin más formái is elősegítik az ATP újratermelődését, amely gyors energiaforrásként ismert. Ezért képesek növelni a fizikai teljesítményt az intenzív, rövid, egymást követő edzésszakaszok során. A kreatin egyes formáit azzal a céllal fejlesztették ki, hogy javítsák felszívódási sebességüket és oldhatóságukat.',
    descriptionTitle: 'Egyébb formái',
  },
  {
    description: 'A tömegnövelő szerek főképp szénhidrátban, kretainban a leggazdagabbak, de természetesen fehérje is van bennük. Tömegnövelő által extra kalória mennyiséget vihetünk be. Ajánlott nehéz fizikai munkát végzők számára, ektomorf (nehezen hízó vékony testalkatú) embereknek, és azoknak akik gyorsítani kívánják a regenerációt, vagy tömeget szeretnének növelni.',
    descriptionTitle: 'Általánosság',
  },
  {
    description: 'Komplex táplálékkiegészítő kategória. A legtöbb esetben szervezetünk nem képes ezeket az anyagokat kellő mennyiségben előállítani, ezért fontos a rendszeres pótlásuk. Általában négy kategória létezik: Nőknek (pl.: hialuron savval, cinkkel kiegészítve) , Férfiaknak (pl.: emésztőenzimekkel, nootropikus anyokkal kiegészítve), sima multivitamin, 3 évnél idősebb gyermekek számára (rágótabletta formában, gyümölcsös ízben). A legtöbb esetben 8-15 vitamin tartalmaznak egyszerre, kevesebb mennyiségben.',
    descriptionTitle: 'Multivitaminok',
  },
  {
    description: 'Zsírban oldodó vitamin, táplálékon keresztül nyert zsírhoz kötődnek. Az A-vitamin a sejtek specializálódásában játszik szerepet, és a vasanyagcserében is. Emellett hozzájárul a nyálkahártyák egészségéhez, valamint bőr és látás megfelelő állapotához.',
    descriptionTitle: 'A-vitamin',
  },
  {
    description: 'Ide tartoznak a B1, B2, B3, B5, B6, B7, B9, B12 vitaminok, melyek könnyen felszívódnak szervezetünkben. B1: Energia előállításához szükséges, illetve az idegrendszert támogatja. B2: Közérzetünkért felelős, illetve a megfelelő vasanyagcseréért, és csökkenti a fáradtság érzetet. B3: megfelelő anyagcserét biztosítja, csökkenti a fáradtság, és a kimerültség érzetet. B5: csökkenti a fáradtság, és a kimerültség érzetet, illetve segít az optimális szellemi teljesítményben. B6: Hozzájárul a hormonális aktivitás szabályozásához, megfelelő immunfunkciókhoz, csökkenti a fáradtság, és a kimerültség érzetet. B7: Részt vesz a mentális jóllét, és az idegrendszer támogatásában. B9: Különösen a terhes nőknek fontos a magzat fejlődési és növekedési szakaszban. B12: Hozzájárul a megfelelő mentális egészség megőrzéséhez és az idegrendszer működéséhez.',
    descriptionTitle: 'B-vitamin',
  },
  {
    description: 'A C vitamin vízben oldodó vitaminok közé tartozik, melyek az emberi szervezetben látják el funkciójukat. Többlet esetén a szervezet űríti ezt a vitamint. A C vitamin hatással van az immunrendszerre, idegrendszerre, és az elmére. Részt vesz a stresszel szembeni védelemben, és a fáradtáság csökkenésében.',
    descriptionTitle: 'C-vitamin',
  },
  {
    description: 'A D vitaminnak két fő formája van, ergokalciferol, és kolekaciferol. A D vitamin főleg állati eredetű, az egyetlen kivétel összetevőjében a kolekarciferol mely zuzmóbol készül. A D vitamin feladata, a sejt osztódás, és ezenkívül az immunitás megfelelő működése. Segít az egészséges fogakat, csontokat, izmokat fenntartani.',
    descriptionTitle: 'D-vitamin'
  },
  {
    description: '8 vegyületet foglal magába, 4 tokoferolt és 4 tokotrienolt. Zsírban oldodó vitamin, emaitt bélfalon jobban szívódik fel. Feladata, hogy megvédje a sejteket az ocidatív stressztől és a szabad gyököktől.',
    descriptionTitle: 'E-vitamin'
  },
  {
    description: 'Feladata az ízületek, porcok, csontok, ínak és más kötőszövetek egészségének támogatása. Általában állati szövetekből állítják elő, elsősorban tengeri állatokéból.',
    descriptionTitle: 'Kollagén',
  },
  {
    description: 'Elsősorban térdízület erősségének és ellenállásának, valamint a porcok rugalmasságának támogatása miatt ismert. Étrend-kiegészítőkben leggyakrabban glükozamin-szulfátként található meg, mivel hatékonyabban szívódik fel, mint a glükozamin-hidroklorid.',
    descriptionTitle: 'Glükózamin',
  },
]


interface State {
    currentVideo: VideoGalleryElement;
    currentEducator: currentEducatorElement;
    WheycurrentDescription: WheyEducatorsElement;
    AminocurrentDescription: AminoEducatorsElement;
    CreatincurrentDescription: CreatinEducatorsElement;
    WeightGanercurrentDescription: WeightGanerEducatorsElement;
    VitamincurrentDescription: VitaminEducatorsElement;
    JointcurrentDescription: JointEducatorsElement;
}

export default class Main extends Component<{}, State> {

    constructor(props: {}) {
        super(props);

        this.state = {
            currentVideo: videoGallery[0],
            currentEducator: currentEducator[0],
            WheycurrentDescription: WheyEducators[0],
            AminocurrentDescription: aminoEducators[0],
            CreatincurrentDescription: creatinEducators[0],
            WeightGanercurrentDescription: weightGanerEducators[0],
            VitamincurrentDescription: vitaminEducators[0],
            JointcurrentDescription: jointEducators[0],
        }
    }

  render() {
    return <div className='mainContainer'>
        <div className='container'>
          <header>
            <nav>
            <span id='teamName'>EasyWay Fitness</span>
              <ul className='nav justify-content-center'>
                <li><a href='#/'>Főoldal</a></li>
                <li><a href='#ismeretterjesztok'>Ismeretterjesztők</a></li>
                <li><a href='#gyakorlatok'>Gyakorlatok</a></li>
                <li><a href='#calculator'>Kalkulátor</a></li>
              </ul>
                <button id='registration'><Link to='/SignUpSignIn' id='signupsignin'>Regisztráció</Link></button>
            </nav>
          </header>
            
            <main>
              <div className='findTheWay'>
                <div className='findTheWayContent'>
                  <h2>Találd meg az utat</h2>
                    <h2>A testi tökéletesség felé</h2>
                    <hr />
                    <span>Itt megtanulhatod az alapokat</span><br />
                    <span>Segítünk az elindulásban</span><br />
                    <button id='go'>Mehet</button>
                </div>
                <div className='findTheWayImage'>
                  <img src="./img/pullup.jpg" alt="pullupimage" id='pullupImage'/>
                </div>   
              </div>

              <div className='container educators'>
                <div className='row'>
                  <div className='col-lg-4 leftSideEducators'>
                    <h4 className='dropdowntitle' id='wheys'>Fehérjék</h4>
                      {
                        WheyEducators.map(e => <div className='dropdownContent'>
                          <p onClick={() => this.setState({currentEducator: e})}>{e.descriptionTitle}</p>
                        </div>)
                      }
                    <h4 className='dropdowntitle' id='amino'>Aminosavak</h4>
                      {
                        aminoEducators.map(e => <div className='dropdownContent'>
                          <p onClick={() => this.setState({currentEducator: e})}>{e.descriptionTitle}</p>
                        </div>)
                      }
                    <h4 className='dropdowntitle' id='creatin'>Kreatin</h4>
                      {
                        creatinEducators.map(e => <div className='dropdownContent'>
                          <p onClick={() => this.setState({currentEducator: e})}>{e.descriptionTitle}</p>
                        </div>)
                      }
                    <h4 className='dropdowntitle' id='weightgainer'>Tömegnövelő</h4>
                      {
                        weightGanerEducators.map(e => <div className='dropdownContent'>
                          <p onClick={() => this.setState({currentEducator: e})}>{e.descriptionTitle}</p>
                        </div>)
                      }
                    <h4 className='dropdowntitle' id='vitamins'>Vitaminok</h4>
                      {
                        vitaminEducators.map(e => <div className='dropdownContent'>
                          <p onClick={() => this.setState({currentEducator: e})}>{e.descriptionTitle}</p>
                        </div>)
                      }
                    <h4 className='dropdowntitle' id='joint'>Izületvédelem</h4>
                      {
                        jointEducators.map(e => <div className='dropdownContent'>
                          <p onClick={() => this.setState({currentEducator: e})}>{e.descriptionTitle}</p>
                        </div>)
                      }
                      
                    
                  </div>
                  <div className="col-lg-8 rightSideEducators">
                    <h3>Ismeretterjesztők</h3>
                    <p id='description'>{this.state.currentEducator.description}</p>
                  </div>
                </div>
              </div>

              <div className='container exercises'>
              <h2>Gyakorlatok</h2>
              <div className='row'>
                <div className='col-lg-6 mainvideo'>
                  <div className='video'>
                    <video src={this.state.currentVideo.videoSrc} id='video' controls muted autoPlay></video>
                    <h3 id='videoTitle'>{ this.state.currentVideo.videoTitle }</h3>
                    <span id='excercisesDetails'>{ this.state.currentVideo.videoDetails }</span>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='videoList'>
                    <h3 className='exercisestitles'>Súlyzós Gyakorlatok</h3>
                    {
                      videoGallery.map(ge => <div className='vid'>
                        <video src={ge.videoSrc} onClick={() => this.setState({ currentVideo: ge })} muted></video>
                        <h4 className='videoTitle' onClick={() => this.setState({ currentVideo: ge })}>{ge.videoTitle}</h4>
                      </div>)
                    }
                  </div>
                </div>
              </div>
              </div>
            </main>

          </div>

          <a href="#" id='goUp'><GoArrowUp /></a>

          <footer>
            <div className='footerContainer'>
                <h3>EasyWay Fitness</h3>
                <span>BMSZC Petrik Lajos Két tanítási Nyelvű Technikum</span><br />
                <span>Vizsgaremek</span>
            </div>
          </footer>
    </div>
  }
}


