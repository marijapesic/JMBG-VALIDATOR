var maticnibroj = document.getElementById("maticnibroj");
var output = document.getElementById("output");
var regija;
var datumrodjenja = document.getElementById("datumrodjenja");
var mestorodjenja = document.getElementById("mestorodjenja");
var pol = document.getElementById("pol");

function check() {
    var jmbg = maticnibroj.value;
    datumrodjenja.innerHTML = "";
    mestorodjenja.innerHTML = "";
    pol.innerHTML = "";


    if (jmbg.length != 13) {
        output.innerHTML = "Vas broj nije ispravan...";
        return;
    }

    var DD = jmbg[0] + jmbg[1];
    var MM = jmbg[2] + jmbg[3];
    var GGG = jmbg[4] + jmbg[5] + jmbg[6];
    var RR = jmbg[7] + jmbg[8];
    var BBB = jmbg[9] + jmbg[10] + jmbg[11];
    var K = jmbg[12];

    //output.innerHTML = DD + MM + GGG + RR + BBB + K;

    if (Number(DD) < 1 || Number(DD) > 31) {
        output.innerHTML = "Vas broj nije ispravan...";
        return;
    }

    if (Number(MM) < 1 || Number(MM > 12)) {
        output.innerHTML = "Vas broj nije ispravan...";
        return;
    }


    if (Number(RR) < 70 || Number(MM > 60)) {
        output.innerHTML = "Vas broj nije ispravan...";
        return;
    }

    var A1 = Number(jmbg[0]);
    var A2 = Number(jmbg[1]);
    var A3 = Number(jmbg[2]);
    var A4 = Number(jmbg[3]);
    var A5 = Number(jmbg[4]);
    var A6 = Number(jmbg[5]);
    var A7 = Number(jmbg[6]);
    var A8 = Number(jmbg[7]);
    var A9 = Number(jmbg[8]);
    var A10 = Number(jmbg[9]);
    var A11 = Number(jmbg[10]);
    var A12 = Number(jmbg[11]);
    var A13 = Number(jmbg[12]);

    var S = 7 * (A1 + A7) + 6 * (A2 + A8) + 5 * (A3 + A9) + 4 * (A4 + A10) + 3 * (A5 + A11) + 2 * (A6 + A12);
    var L = S % 11;
    var M = 11 - L;
    var K;

    if (M < 10) {
        K = M

    } else { K = 0; }

    if (A13 != K) {
        output.innerHTML = "Vas broj nije ispravan...";
        return;
    }

    output.innerHTML = "Vas broj je ispravan...";



    switch (RR) {
        case "01":
            regija = "stranci u BiH";
            break;
        case "02":
            regija = "stranci u Crnoj Gori";
            break;
        case "03":
            regija = "stranci u Hrvatskoj";
            break;
        case "04":
            regija = "stranci u Makedoniji";
            break;
        case "05":
            regija = "stranci u Sloveniji";
            break;
        case "06":
            regija = "Nedefinisano mesto rodjenja";
            break;
        case "07":
            regija = "stranci u Srbiji (bez pokrajina)";
            break;
        case "08":
            regija = "stranci u Vojvodini";
            break;
        case "09":
            regija = "stranci u Kosovu";
            break;
        case "10":
            regija = "Banja Luka";
            break;
        case "11":
            regija = "Bihać";
            break;
        case "12":
            regija = "Doboj";
            break;
        case "13":
            regija = "Goražde";
            break;
        case "14":
            regija = "Livno";
            break;
        case "15":
            regija = "Mostar";
            break;
        case "16":
            regija = "Prijedor";
            break;
        case "17":
            regija = "Sarajevo";
            break;
        case "18":
            regija = "Tuzla";
            break;
        case "19":
            regija = "Zenica";
            break;
        case "20":
            regija = "Crna Gora";
            break;
        case "21":
            regija = "Podgorica";
            break;
        case "22":
            regija = "Crna Gora";
            break;
        case "23":
            regija = "Crna Gora";
            break;
        case "24":
            regija = "Crna Gora";
            break;
        case "25":
            regija = "Crna Gora";
            break;
        case "26":
            regija = "Nikšić";
            break;
        case "27":
            regija = "Crna Gora";
            break;
        case "28":
            regija = "Crna Gora";
            break;
        case "29":
            regija = "Pljevlja";
            break;
        case "30":
            regija = "Osijek, Slavonija region";
            break;
        case "31":
            regija =
                "Bjelovar, Virovitica, Koprivnica, Pakrac, Podravina region";
            break;
        case "32":
            regija = "Varaždin, Međimurje region";
            break;
        case "33":
            regija = "Zagreb";
            break;
        case "34":
            regija = "Karlovac";
            break;
        case "35":
            regija = "Gospić, Lika region";
            break;
        case "36":
            regija = "Rijeka, Pula, Istra and Primorje";
            break;
        case "37":
            regija = "Sisak, Banovina region";
            break;
        case "38":
            regija = "Split, Zadar, Dubrovnik, Dalmacija region";
            break;
        case "39":
            regija = "Hrvatska";
            break;
        case "40":
            regija = "";
            break;
        case "41":
            regija = "Bitolj";
            break;
        case "42":
            regija = "Kumanovo";
            break;
        case "43":
            regija = "Ohrid";
            break;
        case "44":
            regija = "Prilep";
            break;
        case "45":
            regija = "Skoplje";
            break;
            v;
        case "46":
            regija = "Strumica";
            break;
        case "47":
            regija = "Tetovo";
            break;
        case "48":
            regija = "Veles";
            break;
        case "49":
            regija = "Štip";
            break;
        case "50":
            regija = "Slovenija";
            break;
        case "70":
            regija = "Srbija";
            break;
        case "71":
            regija = "Beograd";
            break;
        case "72":
            regija = "Šumadija i Pomoravlje";
            break;
        case "73":
            regija = "Niš";
            break;
        case "74":
            regija = "Južna Morava";
            break;
        case "75":
            regija = "Zaječar";
            break;
        case "76":
            regija = "Podunavlje";
            break;
        case "77":
            regija = "Podrinje i Kolubara";
            break;
        case "78":
            regija = "Kraljevo";
            break;
        case "79":
            regija = "Užice";
            break;
        case "80":
            regija = "Novi Sad";
            break;
        case "81":
            regija = "Sombor";
            break;
        case "82":
            regija = "Subotica";
            break;
        case "83":
            regija = "Vojvodina";
            break;
        case "84":
            regija = "Vojvodina";
            break;
        case "85":
            regija = "Zrenjanin";
            break;
        case "86":
            regija = "Pančevo";
            break;
        case "87":
            regija = "Kikinda";
            break;
        case "88":
            regija = "Ruma";
            break;
        case "89":
            regija = "Sremska Mitrovica";
            break;
        case "90":
            regija = "Kosovo i Metohija";
            break;
        case "91":
            regija = "Priština";
            break;
        case "92":
            regija = "Kosovska Mitrovica";
            break;

        case "93":
            regija = "Peć";
            break;
        case "94":
            regija = "Đakovica";
            break;
        case "95":
            regija = "Prizren";
            break;
        case "96":
            regija = "Kosovsko Pomoravski okrug";
            break;
        case "97":
            regija = "Kosovo i Metohija";
            break;
        case "98":
            regija = "Kosovo i Metohija";
            break;
        case "99":
            regija = "Kosovo i Metohija";
            break;

        default:
            break;
    }


    datumrodjenja.innerHTML = "Datum rođenja: " + DD + "." + MM + "." + "1" + GGG + ".";
    mestorodjenja.innerHTML = "Mesto rođenja: " + regija;
    if (Number(BBB) < 500) {
        pol.innerHTML = "Pol: Muški";
    } else { pol.innerHTML = "Pol: Ženski" };


}