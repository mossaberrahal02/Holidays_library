class App {
    constructor() {
    }
    // le parametre an   C'est l'année où nous voulons savoir quels jours fériés contiennent
    getAllHolidays = (an) => {

        var JourAn = new Date(an, "00", "01");
        var FeteTravail = new Date(an, "04", "01");
        var Victoire1945 = new Date(an, "04", "08");
        var FeteNationale = new Date(an, "06", "14");
        var Assomption = new Date(an, "07", "15");
        var Toussaint = new Date(an, "10", "01");
        var Armistice = new Date(an, "10", "11");
        var Noel = new Date(an, "11", "25");
        var SaintEtienne = new Date(an, "11", "26");

        var G = an % 19;
        var C = Math.floor(an / 100);
        var H = (C - Math.floor(C / 4) - Math.floor((8 * C + 13) / 25) + 19 * G + 15) % 30;
        var I = H - Math.floor(H / 28) * (1 - Math.floor(H / 28) * Math.floor(29 / (H + 1)) * Math.floor((21 - G) / 11));
        var J = (an * 1 + Math.floor(an / 4) + I + 2 - C + Math.floor(C / 4)) % 7;
        var L = I - J;
        var MoisPaques = 3 + Math.floor((L + 40) / 44);
        var JourPaques = L + 28 - 31 * Math.floor(MoisPaques / 4);
        var Paques = new Date(an, MoisPaques - 1, JourPaques);
        var VendrediSaint = new Date(an, MoisPaques - 1, JourPaques - 2);
        var LundiPaques = new Date(an, MoisPaques - 1, JourPaques + 1);
        var Ascension = new Date(an, MoisPaques - 1, JourPaques + 39);
        var Pentecote = new Date(an, MoisPaques - 1, JourPaques + 49);
        var LundiPentecote = new Date(an, MoisPaques - 1, JourPaques + 50);


        const jourDeAn = 'jour de l\'An est ' + JourAn.getFullYear()+'-'+(JourAn.getMonth()+1)+'-'+JourAn.getDate();
        const feteDePaque = 'lundi de Paques ' + LundiPaques.getFullYear()+'-'+(LundiPaques.getMonth()+1)+'-'+LundiPaques.getDate();
        const feteDeTravaille = 'fete de travaille ' + FeteTravail.getFullYear()+'-'+(FeteTravail.getMonth()+1)+'-'+FeteTravail.getDate();
        const feteDeVictoire1945 = 'fete de victoire 1945 ' + Victoire1945.getFullYear()+'-'+(Victoire1945.getMonth()+1)+'-'+Victoire1945.getDate();
        const feteDeAscension = 'fete de Ascension ' + Ascension.getFullYear()+'-'+(Ascension.getMonth()+1)+'-'+Ascension.getDate();
        const fetePentecote = 'lundi de pentecote ' + LundiPentecote.getFullYear()+'-'+(LundiPentecote.getMonth()+1)+'-'+LundiPentecote.getDate();
        const feteNationale = 'fete nationale est en ' + FeteNationale.getFullYear()+'-'+(FeteNationale.getMonth()+1)+'-'+FeteNationale.getDate();
        const feteDeAssomption = 'fete de assomption ' + Assomption.getFullYear()+'-'+(Assomption.getMonth()+1)+'-'+Assomption.getDate();
        const feteDeToussaint = 'fete de toussaint ' + Toussaint.getFullYear()+'-'+(Toussaint.getMonth()+1)+'-'+Toussaint.getDate();
        const feteDeArmistice = 'fete de armistice ' + Armistice.getFullYear()+'-'+(Armistice.getMonth()+1)+'-'+Armistice.getDate();
        const jourDeNoel = 'jour de noel ' + Noel.getFullYear()+'-'+(Noel.getMonth()+1)+'-'+Noel.getDate();
        return `${jourDeAn}${feteDePaque}${feteDeTravaille}${feteDeVictoire1945}${feteDeAscension}${fetePentecote}${feteNationale}${feteDeAssomption}${feteDeToussaint}${feteDeArmistice}${jourDeNoel}`;
    }

    //le param anne doit etre un string sous la forme "yyyy/mm/dd";
    isHolidayDay = (anne) => {

        var v = anne.split('/');
        var an = v[0];
        var date = Date.parse(anne);
        var JourAn = new Date(an, "00", "01");
        var FeteTravail = new Date(an, "04", "01");
        var Victoire1945 = new Date(an, "04", "08");
        var FeteNationale = new Date(an, "06", "14");
        var Assomption = new Date(an, "07", "15");
        var Toussaint = new Date(an, "10", "01");
        var Armistice = new Date(an, "10", "11");
        var Noel = new Date(an, "11", "25");
        var SaintEtienne = new Date(an, "11", "26");

        var G = an % 19;
        var C = Math.floor(an / 100);
        var H = (C - Math.floor(C / 4) - Math.floor((8 * C + 13) / 25) + 19 * G + 15) % 30;
        var I = H - Math.floor(H / 28) * (1 - Math.floor(H / 28) * Math.floor(29 / (H + 1)) * Math.floor((21 - G) / 11));
        var J = (an * 1 + Math.floor(an / 4) + I + 2 - C + Math.floor(C / 4)) % 7;
        var L = I - J;
        var MoisPaques = 3 + Math.floor((L + 40) / 44);
        var JourPaques = L + 28 - 31 * Math.floor(MoisPaques / 4);
        var Paques = new Date(an, MoisPaques - 1, JourPaques);
        var VendrediSaint = new Date(an, MoisPaques - 1, JourPaques - 2);
        var LundiPaques = new Date(an, MoisPaques - 1, JourPaques + 1);
        var Ascension = new Date(an, MoisPaques - 1, JourPaques + 39);
        var Pentecote = new Date(an, MoisPaques - 1, JourPaques + 49);
        var LundiPentecote = new Date(an, MoisPaques - 1, JourPaques + 50);

        switch (date) {
            case Date.parse(JourAn):
                return 'Jour de l\'An ';
            case Date.parse(LundiPaques):
                return 'lundi de PAQUES';
            case Date.parse(FeteTravail):
                return 'Fête du travail';
            case Date.parse(Victoire1945):
                return 'Victoire 1945';
            case Date.parse(Ascension):
                return 'ASCENSION';
            case Date.parse(Pentecote):
                return 'Pentecôte';
            case Date.parse(FeteNationale):
                return 'Fete Nationale';
            case Date.parse(Assomption):
                return 'ASSOMPTION';
            case Date.parse(Toussaint):
                return 'TOUSSAINT';
            case Date.parse(Armistice):
                return 'ARMISTICE 1918';
            case Date.parse(Noel):
                return 'Jour de Noël';
            default:
                return 'ce n\'est pas un jour férié';
        }
    }
}

export default App;