import { Component } from 'react';
import './Main.css';
import { GoArrowUp } from "react-icons/go";//react-icons octions icons
import { GoCheck } from "react-icons/go"; 
import { GoThreeBars } from "react-icons/go"; 
import { Link } from 'react-router-dom';

/*
[
    {
        kategorianev: 'Fehérjék',
        menupontok: [

        ]
    },
    
]

*/

interface VideoGalleryElement {
    videoSrc: string;
    videoTitle: string;
    videoDetails: string;
}

interface EducatorsElement {
    categoryName: string;
    menuPoints: [];
    description: string;
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

/*
const Educators: EducatorsElement[] =[
    {
        categoryName: 'Fehérjék',
        menuPoints: [
            'Tejsavú fehérjék',
            'Fehérje izolátum',
            'Hidrolizált fehérjék',
            'Növényi alapú fehérjék',
            'Állati fehérje',
        ],
        description: 'A tejsavó fehérjét tejből technológiai eljárásokkal állítják elő. A tejsavó fehérje porok mindegyiké kissé eltér az összetevők emészthetőségében, emésztési sebességében, és persze az árában. Ezért célnak és igénynek megfelelően lehet választani tejsavó koncentrátumom, izolátumot, hidrolizátumot.',
    },
] 
*/

interface State {
    currentVideo: VideoGalleryElement;
}

export default class Main extends Component<{}, State> {

    constructor(props: {}) {
        super(props);

        this.state = {
            currentVideo: videoGallery[0],
        }
    }

  handleIsoWhey = async () => {
    const description = document.getElementById('description') as HTMLSpanElement;
    description.textContent = 'A tejsavó fehérjét tejből technológiai eljárásokkal állítják elő. A tejsavó fehérje porok mindegyiké kissé eltér az összetevők emészthetőségében, emésztési sebességében, és persze az árában. Ezért célnak és igénynek megfelelően lehet választani tejsavó koncentrátumom, izolátumot, hidrolizátumot';
    const amino = document.getElementById('amino') as HTMLParagraphElement;
    const wheys = document.getElementById('wheys') as HTMLParagraphElement;
    const vitamins = document.getElementById('vitamins') as HTMLParagraphElement;
    const weightgainer = document.getElementById('weightgainer') as HTMLParagraphElement;
    const joint = document.getElementById('joint') as HTMLParagraphElement;
    const creatin = document.getElementById('creatin') as HTMLParagraphElement;
    amino.style.color = 'white';
    wheys.style.color = 'black';
    vitamins.style.color = 'white';
    weightgainer.style.color = 'white';
    joint.style.color = 'white';
    creatin.style.color = 'white';
  }

  handleWheyIsolate = async () => {
    const description = document.getElementById('description') as HTMLSpanElement;
    description.textContent = 'Tejsavófehérje izolátumként is ismert, tejből gyártják, és hasznos aminosav spektrummal rendelkezik. Előállításnál a tejsavó koncentrátumot állítják elő, melyet ezután szűréssel tejsavó fehérje izolátum előállításra használnak fel. Tisztább port vihetünk be, a fehérje tartalma átlagosan 80% feletti, kevesebb zsírt tartalmaz, ami miatt könnyebben szívódik fel, és könnyebben emészthető.';
    const amino = document.getElementById('amino') as HTMLParagraphElement;
    const wheys = document.getElementById('wheys') as HTMLParagraphElement;
    const vitamins = document.getElementById('vitamins') as HTMLParagraphElement;
    const weightgainer = document.getElementById('weightgainer') as HTMLParagraphElement;
    const joint = document.getElementById('joint') as HTMLParagraphElement;
    const creatin = document.getElementById('creatin') as HTMLParagraphElement;
    amino.style.color = 'white';
    wheys.style.color = 'black';
    vitamins.style.color = 'white';
    weightgainer.style.color = 'white';
    joint.style.color = 'white';
    creatin.style.color = 'white';
  }

  handleHydrolyzedWheys = async () => {
    const description = document.getElementById('description') as HTMLSpanElement;
    description.textContent = 'Tejsavófehérje izolátumként is ismert, előnyük a magas fehérjekoncentráció 70-85%, ezeknek a fehérjéknek a leggyorsabb felszívódási sebessége. Hidrolízissel nyerik ki tejsavóból, vagy izolátumból. A folyamat közben a keverék vegyületekkel gazdagodik, amelyek enzimatikusan bontják le a fehérjeláncokat rövidebb peptidekre.';
    const amino = document.getElementById('amino') as HTMLParagraphElement;
    const wheys = document.getElementById('wheys') as HTMLParagraphElement;
    const vitamins = document.getElementById('vitamins') as HTMLParagraphElement;
    const weightgainer = document.getElementById('weightgainer') as HTMLParagraphElement;
    const joint = document.getElementById('joint') as HTMLParagraphElement;
    const creatin = document.getElementById('creatin') as HTMLParagraphElement;
    amino.style.color = 'white';
    wheys.style.color = 'black';
    vitamins.style.color = 'white';
    weightgainer.style.color = 'white';
    joint.style.color = 'white';
    creatin.style.color = 'white';
  }

  handleVeganWhey = async () => {
    const description = document.getElementById('description') as HTMLSpanElement;
    description.textContent = 'Növényi eredetű, kenderből, hüvelyesekből (szójából, borsból), gabonafélékből (rizsből) állítják elő. A laktózintoleranciában szenvedő emberek is fogyaszthatják. Hátránya, hogy az esszenciális aminosavak spektrumát tekintve kevésbé kedvező.';
    const amino = document.getElementById('amino') as HTMLParagraphElement;
    const wheys = document.getElementById('wheys') as HTMLParagraphElement;
    const vitamins = document.getElementById('vitamins') as HTMLParagraphElement;
    const weightgainer = document.getElementById('weightgainer') as HTMLParagraphElement;
    const joint = document.getElementById('joint') as HTMLParagraphElement;
    const creatin = document.getElementById('creatin') as HTMLParagraphElement;
    amino.style.color = 'white';
    wheys.style.color = 'black';
    vitamins.style.color = 'white';
    weightgainer.style.color = 'white';
    joint.style.color = 'white';
    creatin.style.color = 'white';
  }

  handleAnimalWhey = async () => {
    const description = document.getElementById('description') as HTMLSpanElement;
    description.textContent = 'Aki kerüli a laktózt, vagy a tehéntejből származó fehérjét, annak tökéletes megoldást nyújt a marhahús fehérje. Ezek a porok leggyakrabban hidrolizált fehérjeporok formájában érhetőek el, jó felszívódású képességgel.';
    const amino = document.getElementById('amino') as HTMLParagraphElement;
    const wheys = document.getElementById('wheys') as HTMLParagraphElement;
    const vitamins = document.getElementById('vitamins') as HTMLParagraphElement;
    const weightgainer = document.getElementById('weightgainer') as HTMLParagraphElement;
    const joint = document.getElementById('joint') as HTMLParagraphElement;
    const creatin = document.getElementById('creatin') as HTMLParagraphElement;
    amino.style.color = 'white';
    wheys.style.color = 'black';
    vitamins.style.color = 'white';
    weightgainer.style.color = 'white';
    joint.style.color = 'white';
    creatin.style.color = 'white';
  }

  handleBCAA = async () => {
    const description = document.getElementById('description') as HTMLSpanElement;
    const amino = document.getElementById('amino') as HTMLParagraphElement;
    const wheys = document.getElementById('wheys') as HTMLParagraphElement;
    const vitamins = document.getElementById('vitamins') as HTMLParagraphElement;
    const weightgainer = document.getElementById('weightgainer') as HTMLParagraphElement;
    const joint = document.getElementById('joint') as HTMLParagraphElement;
    const creatin = document.getElementById('creatin') as HTMLParagraphElement;
    description.textContent = 'Ezek az aminosavak esszenciális amionosavak közé tartoznak, ami azt jelenti, hogy a szervezet nem tudja magától előállítani. Ezeket az aminosavakat fehérjévé alakítja át a szervezet, ami az izomszövet építőanyaga. A BCAA magukban is emészthetőek, emiatt fizikai aktivitás során szolgálhatnak energiaforrásként, ezzel lehetővé téve számunkra, hogy energia használat közben a szervezetünk ne az izomtömegünkhöz nyúljon hozzá.';
    amino.style.color = 'black';
    wheys.style.color = 'white';
    vitamins.style.color = 'white';
    weightgainer.style.color = 'white';
    joint.style.color = 'white';
    creatin.style.color = 'white';
  }

  handleLGlutamin = async () => {
    const description = document.getElementById('description') as HTMLSpanElement;
    description.textContent = 'A szervezetben legnagyobb arányban lévő aminosavak közé tartozik. Izomtömeget létrehozó fehérjék alapköve, ezentúl immunrendszer és a bélnyálkahártya egyes sejtjeinek energiaforrása. A szervezetünk képes maga is előállítani a glutamint, de előfordul, hogy az előállítás mennyisége nem elegendő pl.: nehéz fizikai tevékenységnél, vagy stresszes időszakban. ';
    const amino = document.getElementById('amino') as HTMLParagraphElement;
    const wheys = document.getElementById('wheys') as HTMLParagraphElement;
    const vitamins = document.getElementById('vitamins') as HTMLParagraphElement;
    const weightgainer = document.getElementById('weightgainer') as HTMLParagraphElement;
    const joint = document.getElementById('joint') as HTMLParagraphElement;
    const creatin = document.getElementById('creatin') as HTMLParagraphElement;
    amino.style.color = 'black';
    wheys.style.color = 'white';
    vitamins.style.color = 'white';
    weightgainer.style.color = 'white';
    joint.style.color = 'white';
    creatin.style.color = 'white';
  }

  handleEAA = async () => {
    const description = document.getElementById('description') as HTMLSpanElement;
    description.textContent = 'Az EAA az izomtömeg regenerációjában és növekedésében játszik szerepet, emellett a hormonok, enzimek, és más vegyületek termelésének alapját képezi. A szervezet nem képes önmagam előállítani ezt, ezért csak táplálékkal, és táplálékkiegészítővel vagyunk képesek bejuttatni szervezetünkbe. ';
    const amino = document.getElementById('amino') as HTMLParagraphElement;
    const wheys = document.getElementById('wheys') as HTMLParagraphElement;
    const vitamins = document.getElementById('vitamins') as HTMLParagraphElement;
    const weightgainer = document.getElementById('weightgainer') as HTMLParagraphElement;
    const joint = document.getElementById('joint') as HTMLParagraphElement;
    const creatin = document.getElementById('creatin') as HTMLParagraphElement;
    amino.style.color = 'black';
    wheys.style.color = 'white';
    vitamins.style.color = 'white';
    weightgainer.style.color = 'white';
    joint.style.color = 'white';
    creatin.style.color = 'white';
  }

  handleArginin = async () => {
    const description = document.getElementById('description') as HTMLSpanElement;
    description.textContent = 'Kitágítja az ereket, ezáltal szabályozza az izmok vérellátását. Elősegíti az izmok oxigén és tápanyag ellátását edzés közben. Az arginin a kreatin alapvető építőeleme. Továbbá segít a természetes méregtelenítésben, késleltetheti a teljesítménycsökkenést. A szervezet képes maga is előállítani, de betegség vagy nehéz fizikai aktivitás során megnőhet a test igénye, emiatt fontos a külsőleges alkalmazás is. ';
    const amino = document.getElementById('amino') as HTMLParagraphElement;
    const wheys = document.getElementById('wheys') as HTMLParagraphElement;
    const vitamins = document.getElementById('vitamins') as HTMLParagraphElement;
    const weightgainer = document.getElementById('weightgainer') as HTMLParagraphElement;
    const joint = document.getElementById('joint') as HTMLParagraphElement;
    const creatin = document.getElementById('creatin') as HTMLParagraphElement;
    amino.style.color = 'black';
    wheys.style.color = 'white';
    vitamins.style.color = 'white';
    weightgainer.style.color = 'white';
    joint.style.color = 'white';
    creatin.style.color = 'white';
  }

  handleCreatin = async () => {
    const description = document.getElementById('description') as HTMLSpanElement;
    description.textContent = 'Kreatinok közül a monohidrát a legismertebb. A monohidrát társaihoz hasonlóan elősegíti az ATIP újra termelődését, ami gyors energiaforrásként ismert, ezáltal képes növelni a fizikai teljesítményt, elősegítheti a robbanékonyságot. A kreatin leginkább vázizomokban tárolódik. Vízzel épül be, emiatt fontos a sok folyadékbevitel. Napi 3gr kreatin bevitel ajánlott az eredmény érdekében.';
    const amino = document.getElementById('amino') as HTMLParagraphElement;
    const wheys = document.getElementById('wheys') as HTMLParagraphElement;
    const vitamins = document.getElementById('vitamins') as HTMLParagraphElement;
    const weightgainer = document.getElementById('weightgainer') as HTMLParagraphElement;
    const joint = document.getElementById('joint') as HTMLParagraphElement;
    const creatin = document.getElementById('creatin') as HTMLParagraphElement;
    amino.style.color = 'white';
    wheys.style.color = 'white';
    vitamins.style.color = 'white';
    weightgainer.style.color = 'white';
    joint.style.color = 'white';
    creatin.style.color = 'black';
  }

  handleWeightGainer = async () => {
    const description = document.getElementById('description') as HTMLSpanElement;
    description.textContent = 'A tömegnövelő szerek főképp szénhidrátban, kretainban a leggazdagabbak, de természetesen fehérje is van bennük. Tömegnövelő által extra kalória mennyiséget vihetünk be. Ajánlott nehéz fizikai munkát végzők számára, ektomorf (nehezen hízó vékony testalkatú) embereknek, és azoknak akik gyorsítani kívánják a regenerációt, vagy tömeget szeretnének növelni.';
    const amino = document.getElementById('amino') as HTMLParagraphElement;
    const wheys = document.getElementById('wheys') as HTMLParagraphElement;
    const vitamins = document.getElementById('vitamins') as HTMLParagraphElement;
    const weightgainer = document.getElementById('weightgainer') as HTMLParagraphElement;
    const joint = document.getElementById('joint') as HTMLParagraphElement;
    const creatin = document.getElementById('creatin') as HTMLParagraphElement;
    amino.style.color = 'white';
    wheys.style.color = 'white';
    vitamins.style.color = 'white';
    weightgainer.style.color = 'black';
    joint.style.color = 'white';
    creatin.style.color = 'white';
  }

  handleVitaminMulti = async () => {
    const description = document.getElementById('description') as HTMLSpanElement;
    description.textContent = 'Komplex táplálékkiegészítő kategória. A legtöbb esetben szervezetünk nem képes ezeket az anyagokat kellő mennyiségben előállítani, ezért fontos a rendszeres pótlásuk. Általában négy kategória létezik: Nőknek (pl.: hialuron savval, cinkkel kiegészítve) , Férfiaknak (pl.: emésztőenzimekkel, nootropikus anyokkal kiegészítve), sima multivitamin, 3 évnél idősebb gyermekek számára (rágótabletta formában, gyümölcsös ízben). A legtöbb esetben 8-15 vitamin tartalmaznak egyszerre, kevesebb mennyiségben.';
    const amino = document.getElementById('amino') as HTMLParagraphElement;
    const wheys = document.getElementById('wheys') as HTMLParagraphElement;
    const vitamins = document.getElementById('vitamins') as HTMLParagraphElement;
    const weightgainer = document.getElementById('weightgainer') as HTMLParagraphElement;
    const joint = document.getElementById('joint') as HTMLParagraphElement;
    const creatin = document.getElementById('creatin') as HTMLParagraphElement;
    amino.style.color = 'white';
    wheys.style.color = 'white';
    vitamins.style.color = 'black';
    weightgainer.style.color = 'white';
    joint.style.color = 'white';
    creatin.style.color = 'white';
  }

  handleVitaminA = async () => {
    const description = document.getElementById('description') as HTMLSpanElement;
    description.textContent = 'Zsírban oldodó vitamin, táplálékon keresztül nyert zsírhoz kötődnek. Az A-vitamin a sejtek specializálódásában játszik szerepet, és a vasanyagcserében is. Emellett hozzájárul a nyálkahártyák egészségéhez, valamint bőr és látás megfelelő állapotához.';
    const amino = document.getElementById('amino') as HTMLParagraphElement;
    const wheys = document.getElementById('wheys') as HTMLParagraphElement;
    const vitamins = document.getElementById('vitamins') as HTMLParagraphElement;
    const weightgainer = document.getElementById('weightgainer') as HTMLParagraphElement;
    const joint = document.getElementById('joint') as HTMLParagraphElement;
    const creatin = document.getElementById('creatin') as HTMLParagraphElement;
    amino.style.color = 'white';
    wheys.style.color = 'white';
    vitamins.style.color = 'black';
    weightgainer.style.color = 'white';
    joint.style.color = 'white';
    creatin.style.color = 'white';
  }

  handleVitaminB = async () => {
    const description = document.getElementById('description') as HTMLSpanElement;
    description.textContent = 'Ide tartoznak a B1, B2, B3, B5, B6, B7, B9, B12 vitaminok, melyek könnyen felszívódnak szervezetünkben. B1: Energia előállításához szükséges, illetve az idegrendszert támogatja. B2: Közérzetünkért felelős, illetve a megfelelő vasanyagcseréért, és csökkenti a fáradtság érzetet. B3: megfelelő anyagcserét biztosítja, csökkenti a fáradtság, és a kimerültség érzetet. B5: csökkenti a fáradtság, és a kimerültség érzetet, illetve segít az optimális szellemi teljesítményben. B6: Hozzájárul a hormonális aktivitás szabályozásához, megfelelő immunfunkciókhoz, csökkenti a fáradtság, és a kimerültség érzetet. B7: Részt vesz a mentális jóllét, és az idegrendszer támogatásában. B9: Különösen a terhes nőknek fontos a magzat fejlődési és növekedési szakaszban. B12: Hozzájárul a megfelelő mentális egészség megőrzéséhez és az idegrendszer működéséhez.';
    const amino = document.getElementById('amino') as HTMLParagraphElement;
    const wheys = document.getElementById('wheys') as HTMLParagraphElement;
    const vitamins = document.getElementById('vitamins') as HTMLParagraphElement;
    const weightgainer = document.getElementById('weightgainer') as HTMLParagraphElement;
    const joint = document.getElementById('joint') as HTMLParagraphElement;
    const creatin = document.getElementById('creatin') as HTMLParagraphElement;
    amino.style.color = 'white';
    wheys.style.color = 'white';
    vitamins.style.color = 'black';
    weightgainer.style.color = 'white';
    joint.style.color = 'white';
    creatin.style.color = 'white';
  }

  handleVitaminC = async () => {
    const description = document.getElementById('description') as HTMLSpanElement;
    description.textContent = 'A C vitamin vízben oldodó vitaminok közé tartozik, melyek az emberi szervezetben látják el funkciójukat. Többlet esetén a szervezet űríti ezt a vitamint. A C vitamin hatással van az immunrendszerre, idegrendszerre, és az elmére. Részt vesz a stresszel szembeni védelemben, és a fáradtáság csökkenésében.';
    const amino = document.getElementById('amino') as HTMLParagraphElement;
    const wheys = document.getElementById('wheys') as HTMLParagraphElement;
    const vitamins = document.getElementById('vitamins') as HTMLParagraphElement;
    const weightgainer = document.getElementById('weightgainer') as HTMLParagraphElement;
    const joint = document.getElementById('joint') as HTMLParagraphElement;
    const creatin = document.getElementById('creatin') as HTMLParagraphElement;
    amino.style.color = 'white';
    wheys.style.color = 'white';
    vitamins.style.color = 'black';
    weightgainer.style.color = 'white';
    joint.style.color = 'white';
    creatin.style.color = 'white';
  }

  handleVitaminD = async () => {
    const description = document.getElementById('description') as HTMLSpanElement;
    description.textContent = 'A D vitaminnak két fő formája van, ergokalciferol, és kolekaciferol. A D vitamin főleg állati eredetű, az egyetlen kivétel összetevőjében a kolekarciferol mely zuzmóbol készül. A D vitamin feladata, a sejt osztódás, és ezenkívül az immunitás megfelelő működése. Segít az egészséges fogakat, csontokat, izmokat fenntartani. ';
    const amino = document.getElementById('amino') as HTMLParagraphElement;
    const wheys = document.getElementById('wheys') as HTMLParagraphElement;
    const vitamins = document.getElementById('vitamins') as HTMLParagraphElement;
    const weightgainer = document.getElementById('weightgainer') as HTMLParagraphElement;
    const joint = document.getElementById('joint') as HTMLParagraphElement;
    const creatin = document.getElementById('creatin') as HTMLParagraphElement;
    amino.style.color = 'white';
    wheys.style.color = 'white';
    vitamins.style.color = 'black';
    weightgainer.style.color = 'white';
    joint.style.color = 'white';
    creatin.style.color = 'white';
  }

  handleVitaminE = async () => {
    const description = document.getElementById('description') as HTMLSpanElement;
    description.textContent = '8 vegyületet foglal magába, 4 tokoferolt és 4 tokotrienolt. Zsírban oldodó vitamin, emaitt bélfalon jobban szívódik fel. Feladata, hogy megvédje a sejteket az ocidatív stressztől és a szabad gyököktől.';
    const amino = document.getElementById('amino') as HTMLParagraphElement;
    const wheys = document.getElementById('wheys') as HTMLParagraphElement;
    const vitamins = document.getElementById('vitamins') as HTMLParagraphElement;
    const weightgainer = document.getElementById('weightgainer') as HTMLParagraphElement;
    const joint = document.getElementById('joint') as HTMLParagraphElement;
    const creatin = document.getElementById('creatin') as HTMLParagraphElement;
    amino.style.color = 'white';
    wheys.style.color = 'white';
    vitamins.style.color = 'black';
    weightgainer.style.color = 'white';
    joint.style.color = 'white';
    creatin.style.color = 'white';
  }

  handleCollagen= async () => {
    const description = document.getElementById('description') as HTMLSpanElement;
    description.textContent = 'Feladata az ízületek, porcok, csontok, ínak és más kötőszövetek egészségének támogatása. Általában állati szövetekből állítják elő, elsősorban tengeri állatokéból.';
    const amino = document.getElementById('amino') as HTMLParagraphElement;
    const wheys = document.getElementById('wheys') as HTMLParagraphElement;
    const vitamins = document.getElementById('vitamins') as HTMLParagraphElement;
    const weightgainer = document.getElementById('weightgainer') as HTMLParagraphElement;
    const joint = document.getElementById('joint') as HTMLParagraphElement;
    const creatin = document.getElementById('creatin') as HTMLParagraphElement;
    amino.style.color = 'white';
    wheys.style.color = 'white';
    vitamins.style.color = 'white';
    weightgainer.style.color = 'white';
    joint.style.color = 'black';
    creatin.style.color = 'white';
  }

  handleGlucosamine= async () => {
    const description = document.getElementById('description') as HTMLSpanElement;
    description.textContent = 'Elsősorban térdízület erősségének és ellenállásának, valamint a porcok rugalmasságának támogatása miatt ismert. Étrend-kiegészítőkben leggyakrabban glükozamin-szulfátként található meg, mivel hatékonyabban szívódik fel, mint a glükozamin-hidroklorid.';
    const amino = document.getElementById('amino') as HTMLParagraphElement;
    const wheys = document.getElementById('wheys') as HTMLParagraphElement;
    const vitamins = document.getElementById('vitamins') as HTMLParagraphElement;
    const weightgainer = document.getElementById('weightgainer') as HTMLParagraphElement;
    const joint = document.getElementById('joint') as HTMLParagraphElement;
    const creatin = document.getElementById('creatin') as HTMLParagraphElement;
    amino.style.color = 'white';
    wheys.style.color = 'white';
    vitamins.style.color = 'white';
    weightgainer.style.color = 'white';
    joint.style.color = 'black';
    creatin.style.color = 'white';
  }

  render() {
    return <div className='mainContainer'>
        <div className='container'>
          <header>
            <nav>
            <span id='teamName'>EasyWay Fitness</span>
              <ul className='nav justify-content-center'>
                <li><a href='#'>Főoldal</a></li>
                <li><a href='#ismeretterjesztok'>Ismeretterjesztők</a></li>
                <li><a href='#gyakorlatok'>Gyakorlatok</a></li>
                <li><a href='#'>Kalkulátor</a></li>
              </ul>
                <button id='registration'><Link to='/SignUpSignIn' id='signupsignin'>Regisztráció</Link></button>
            </nav>
          </header>
            
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
              <h3>Ismeretterjesztők</h3>
                <div className='row'>
                  <div className='col-lg-2 dropdown'>
                   <p className='dropdowntitle' id='wheys'>Fehérjék</p>
                   <div className='dropdownContent'>
                    <p onClick={this.handleIsoWhey}>Tejsavú fehérjék</p>
                    <p onClick={this.handleWheyIsolate}>Fehérje izolátum</p>
                    <p onClick={this.handleHydrolyzedWheys}>Hidrolizált fehérjék</p>
                    <p onClick={this.handleVeganWhey}>Növényalapú fehérjék</p>
                    <p onClick={this.handleAnimalWhey}>Állatifehérje</p>
                   </div>
                  </div>
                  <div className='col-lg-2 dropdown'>
                   <p className='dropdowntitle' id='amino'>Aminosavak</p>
                   <div className='dropdownContent'>
                    <p onClick={this.handleBCAA}>BCAA</p>
                    <p onClick={this.handleLGlutamin}>L-Glutamin</p>
                    <p onClick={this.handleEAA}>EAA</p>
                    <p onClick={this.handleArginin}>Arginin</p>
                   </div>
                  </div>
                  <div className='col-lg-2 dropdown'>
                   <p onClick={this.handleCreatin} className='dropdowntitle' id='creatin'>Kreatin</p>
                  </div>
                  <div className='col-lg-2 dropdown'>
                   <p onClick={this.handleWeightGainer} className='dropdowntitle' id='weightgainer'>Tömegnövelő</p>
                  </div>
                  <div className='col-lg-2 dropdown'>
                   <p className='dropdowntitle' id='vitamins'>Vitaminok</p>
                   <div className='dropdownContent'>
                    <p onClick={this.handleVitaminMulti}>Multivitaminok</p>
                    <p onClick={this.handleVitaminA}>A-vitamin</p>
                    <p onClick={this.handleVitaminB}>B-vitamin</p>
                    <p onClick={this.handleVitaminC}>C-vitamin</p>
                    <p onClick={this.handleVitaminD}>D-vitamin</p>
                    <p onClick={this.handleVitaminE}>E-vitamin</p>
                   </div>
                  </div>
                  <div className='col-lg-2 dropdown'>
                   <p className='dropdowntitle' id='joint'>Izületvédelem</p>
                   <div className='dropdownContent'>
                    <p onClick={this.handleCollagen}>Kollagén</p>
                    <p onClick={this.handleGlucosamine}>Glkükózamin</p>
                   </div>
                  </div>
                </div>
                <hr id='informationHr'/>
                <div className='container contentInformation'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <span id='description'>Válassz ki egy megismerni kívánt táplálékkiegészítőt</span>
                    </div>
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

