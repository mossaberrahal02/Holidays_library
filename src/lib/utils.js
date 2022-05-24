// an est l'anne qui on veut s'avoir si c'est un jour ferie ou nn
export function getAllHolidays(an){

	var JourAn = new Date(an, "00", "01");
	var FeteTravail = new Date(an, "04", "01");
	var Victoire1945 = new Date(an, "04", "08");
	var FeteNationale = new Date(an,"06", "14");
	var Assomption = new Date(an, "07", "15");
	var Toussaint = new Date(an, "10", "01");
	var Armistice = new Date(an, "10", "11");
	var Noel = new Date(an, "11", "25");
	var SaintEtienne = new Date(an, "11", "26");
	
	var G = an%19;
	var C = Math.floor(an/100);
	var H = (C - Math.floor(C/4) - Math.floor((8*C+13)/25) + 19*G + 15)%30;
	var I = H - Math.floor(H/28)*(1 - Math.floor(H/28)*Math.floor(29/(H + 1))*Math.floor((21 - G)/11));
	var J = (an*1 + Math.floor(an/4) + I + 2 - C + Math.floor(C/4))%7;
	var L = I - J;
	var MoisPaques = 3 + Math.floor((L + 40)/44);
	var JourPaques = L + 28 - 31*Math.floor(MoisPaques/4);
	var Paques = new Date(an, MoisPaques-1, JourPaques);
	var VendrediSaint = new Date(an, MoisPaques-1, JourPaques-2);
	var LundiPaques = new Date(an, MoisPaques-1, JourPaques+1);
	var Ascension = new Date(an, MoisPaques-1, JourPaques+39);
	var Pentecote = new Date(an, MoisPaques-1, JourPaques+49);
	var LundiPentecote = new Date(an, MoisPaques-1, JourPaques+50);
	

    const jourDeAn = 'jour de l\'An est '+JourAn;//
    const feteDePaque = 'lundi de Paques '+LundiPaques;//
    const feteDeTravaille = 'fete de travaille '+FeteTravail;//
    const feteDeVictoire1945 = 'fete de victoire 1945 '+Victoire1945;//
    const feteDeAscension = 'fete de Ascension '+Ascension;//
    const fetePentecote = 'lundi de pentecote '+LundiPentecote;//
    const feteNationale = 'fete nationale est en '+FeteNationale;//
    const feteDeAssomption = 'fete de assomption '+Assomption;//
    const feteDeToussaint = 'fete de toussaint '+Toussaint;//
    const feteDeArmistice = 'fete de armistice '+Armistice;//
    const jourDeNoel = 'jour de noel '+Noel;//
    return new Array(jourDeAn, feteDePaque, feteDeTravaille, feteDeVictoire1945, feteDeAscension, fetePentecote, feteNationale, feteDeAssomption, feteDeToussaint, feteDeArmistice, jourDeNoel);
}

//anne doit etre sous la forme "yy/mm/dd";
export function isHolidayDay(anne){

    var v = anne.split('/');
    var an = v[0];
    date = Date.parse(anne);    // date hiya l parametre dyal switch li gha n9arnha m3aha l parametre dyal l function
    var JourAn = new Date(an, "00", "01");
	var FeteTravail = new Date(an, "04", "01");
	var Victoire1945 = new Date(an, "04", "08");
	var FeteNationale = new Date(an,"06", "14");
	var Assomption = new Date(an, "07", "15");
	var Toussaint = new Date(an, "10", "01");
	var Armistice = new Date(an, "10", "11");
	var Noel = new Date(an, "11", "25");
	var SaintEtienne = new Date(an, "11", "26");
	
	var G = an%19;
	var C = Math.floor(an/100);
	var H = (C - Math.floor(C/4) - Math.floor((8*C+13)/25) + 19*G + 15)%30;
	var I = H - Math.floor(H/28)*(1 - Math.floor(H/28)*Math.floor(29/(H + 1))*Math.floor((21 - G)/11));
	var J = (an*1 + Math.floor(an/4) + I + 2 - C + Math.floor(C/4))%7;
	var L = I - J;
	var MoisPaques = 3 + Math.floor((L + 40)/44);
	var JourPaques = L + 28 - 31*Math.floor(MoisPaques/4);
	var Paques = new Date(an, MoisPaques-1, JourPaques);
	var VendrediSaint = new Date(an, MoisPaques-1, JourPaques-2);
	var LundiPaques = new Date(an, MoisPaques-1, JourPaques+1);
	var Ascension = new Date(an, MoisPaques-1, JourPaques+39);
	var Pentecote = new Date(an, MoisPaques-1, JourPaques+49);
	var LundiPentecote = new Date(an, MoisPaques-1, JourPaques+50);

    switch(date){
        case Date.parse(JourAn) : 
            return 'Jour de l\'An ';
        break;
        case Date.parse(LundiPaques) :
            return 'lundi de PAQUES';
        break;
        case Date.parse(FeteTravail) :
            return 'Fête du travail';
        break;

        case Date.parse(Victoire1945) :
            return 'Victoire 1945';
        break;
        case Date.parse(Ascension) :
            return 'ASCENSION';
        break;
        case Date.parse(Pentecote) :
            return 'Pentecôte';
        break;

        case Date.parse(FeteNationale) :
            return 'Fete Nationale';
        break;
        case Date.parse(Assomption) :
            return 'ASSOMPTION';
        break;
        case Date.parse(Toussaint) :
            return 'TOUSSAINT';
        break;

        case Date.parse(Armistice) :
            return 'ARMISTICE 1918';
        break;
        case Date.parse(Noel) :
            return 'Jour de Noël';
        break;

        default :
            return 'ce n\'est pas un jour férié';
    } 
}