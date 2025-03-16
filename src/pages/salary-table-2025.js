import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import CoupangBanner from "../components/CoupangBanner";

export default function SalaryTable2025() {
  const [searchSalary, setSearchSalary] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const salaryTable = [
    {
      salary: 1000000,
      takeHome: 905960,
      total: 94040,
      pension: 45000,
      health: 35450,
      care: 4590,
      employment: 9000,
      tax: 0,
      localTax: 0,
    },
    {
      salary: 1100000,
      takeHome: 994810,
      total: 105190,
      pension: 49500,
      health: 38990,
      care: 5040,
      employment: 9900,
      tax: 1600,
      localTax: 160,
    },
    {
      salary: 1200000,
      takeHome: 1083880,
      total: 116120,
      pension: 54000,
      health: 42540,
      care: 5500,
      employment: 10800,
      tax: 2990,
      localTax: 290,
    },
    {
      salary: 1300000,
      takeHome: 1172550,
      total: 127450,
      pension: 58500,
      health: 46080,
      care: 5960,
      employment: 11700,
      tax: 4740,
      localTax: 470,
    },
    {
      salary: 1400000,
      takeHome: 1260871,
      total: 139129,
      pension: 63000,
      health: 49630,
      care: 6420,
      employment: 12599,
      tax: 6800,
      localTax: 680,
    },
    {
      salary: 1500000,
      takeHome: 1349141,
      total: 150859,
      pension: 67500,
      health: 53170,
      care: 6880,
      employment: 13499,
      tax: 8920,
      localTax: 890,
    },
    {
      salary: 1600000,
      takeHome: 1437471,
      total: 162529,
      pension: 72000,
      health: 56720,
      care: 7340,
      employment: 14399,
      tax: 10980,
      localTax: 1090,
    },
    {
      salary: 1700000,
      takeHome: 1525791,
      total: 174209,
      pension: 76500,
      health: 60260,
      care: 7800,
      employment: 15299,
      tax: 13050,
      localTax: 1300,
    },
    {
      salary: 1800000,
      takeHome: 1614111,
      total: 185889,
      pension: 81000,
      health: 63810,
      care: 8260,
      employment: 16199,
      tax: 15110,
      localTax: 1510,
    },
    {
      salary: 1900000,
      takeHome: 1702440,
      total: 197560,
      pension: 85500,
      health: 67350,
      care: 8720,
      employment: 17100,
      tax: 17180,
      localTax: 1710,
    },
    {
      salary: 2000000,
      takeHome: 1790450,
      total: 209550,
      pension: 90000,
      health: 70900,
      care: 9180,
      employment: 18000,
      tax: 19520,
      localTax: 1950,
    },
    {
      salary: 2100000,
      takeHome: 1877520,
      total: 222480,
      pension: 94500,
      health: 74440,
      care: 9630,
      employment: 18900,
      tax: 22740,
      localTax: 2270,
    },
    {
      salary: 2200000,
      takeHome: 1964580,
      total: 235420,
      pension: 99000,
      health: 77990,
      care: 10090,
      employment: 19800,
      tax: 25950,
      localTax: 2590,
    },
    {
      salary: 2300000,
      takeHome: 2051650,
      total: 248350,
      pension: 103500,
      health: 81530,
      care: 10550,
      employment: 20700,
      tax: 29160,
      localTax: 2910,
    },
    {
      salary: 2400000,
      takeHome: 2138700,
      total: 261300,
      pension: 108000,
      health: 85080,
      care: 11010,
      employment: 21600,
      tax: 32380,
      localTax: 3230,
    },
    {
      salary: 2500000,
      takeHome: 2225750,
      total: 274250,
      pension: 112500,
      health: 88620,
      care: 11470,
      employment: 22500,
      tax: 35600,
      localTax: 3560,
    },
    {
      salary: 2600000,
      takeHome: 2311850,
      total: 288150,
      pension: 117000,
      health: 92170,
      care: 11930,
      employment: 23400,
      tax: 39690,
      localTax: 3960,
    },
    {
      salary: 2700000,
      takeHome: 2393031,
      total: 306969,
      pension: 121500,
      health: 95710,
      care: 12390,
      employment: 24299,
      tax: 48250,
      localTax: 4820,
    },
    {
      salary: 2800000,
      takeHome: 2474211,
      total: 325789,
      pension: 126000,
      health: 99260,
      care: 12850,
      employment: 25199,
      tax: 56800,
      localTax: 5680,
    },
    {
      salary: 2900000,
      takeHome: 2555401,
      total: 344599,
      pension: 130500,
      health: 102800,
      care: 13310,
      employment: 26099,
      tax: 65360,
      localTax: 6530,
    },
    {
      salary: 3000000,
      takeHome: 2636101,
      total: 363899,
      pension: 135000,
      health: 106350,
      care: 13770,
      employment: 26999,
      tax: 74350,
      localTax: 7430,
    },
    {
      salary: 3100000,
      takeHome: 2717291,
      total: 382709,
      pension: 139500,
      health: 109890,
      care: 14230,
      employment: 27899,
      tax: 82900,
      localTax: 8290,
    },
    {
      salary: 3200000,
      takeHome: 2798471,
      total: 401529,
      pension: 144000,
      health: 113440,
      care: 14690,
      employment: 28799,
      tax: 91460,
      localTax: 9140,
    },
    {
      salary: 3300000,
      takeHome: 2876641,
      total: 423359,
      pension: 148500,
      health: 116980,
      care: 15140,
      employment: 29699,
      tax: 102770,
      localTax: 10270,
    },
    {
      salary: 3400000,
      takeHome: 2953791,
      total: 446209,
      pension: 153000,
      health: 120530,
      care: 15600,
      employment: 30599,
      tax: 114990,
      localTax: 11490,
    },
    {
      salary: 3500000,
      takeHome: 3030931,
      total: 469069,
      pension: 157500,
      health: 124070,
      care: 16060,
      employment: 31499,
      tax: 127220,
      localTax: 12720,
    },
    {
      salary: 3600000,
      takeHome: 3108081,
      total: 491919,
      pension: 162000,
      health: 127620,
      care: 16520,
      employment: 32399,
      tax: 139440,
      localTax: 13940,
    },
    {
      salary: 3700000,
      takeHome: 3185230,
      total: 514770,
      pension: 166500,
      health: 131160,
      care: 16980,
      employment: 33300,
      tax: 151670,
      localTax: 15160,
    },
    {
      salary: 3800000,
      takeHome: 3256470,
      total: 543530,
      pension: 171000,
      health: 134710,
      care: 17440,
      employment: 34200,
      tax: 169260,
      localTax: 16920,
    },
    {
      salary: 3900000,
      takeHome: 3332380,
      total: 567620,
      pension: 175500,
      health: 138250,
      care: 17900,
      employment: 35100,
      tax: 182610,
      localTax: 18260,
    },
    {
      salary: 4000000,
      takeHome: 3408290,
      total: 591710,
      pension: 180000,
      health: 141800,
      care: 18360,
      employment: 36000,
      tax: 195960,
      localTax: 19590,
    },
    {
      salary: 4100000,
      takeHome: 3484200,
      total: 615800,
      pension: 184500,
      health: 145340,
      care: 18820,
      employment: 36900,
      tax: 209310,
      localTax: 20930,
    },
    {
      salary: 4200000,
      takeHome: 3560110,
      total: 639890,
      pension: 189000,
      health: 148890,
      care: 19280,
      employment: 37800,
      tax: 222660,
      localTax: 22260,
    },
    {
      salary: 4300000,
      takeHome: 3636030,
      total: 663970,
      pension: 193500,
      health: 152430,
      care: 19730,
      employment: 38700,
      tax: 236010,
      localTax: 23600,
    },
    {
      salary: 4400000,
      takeHome: 3711940,
      total: 688060,
      pension: 198000,
      health: 155980,
      care: 20190,
      employment: 39600,
      tax: 249360,
      localTax: 24930,
    },
    {
      salary: 4500000,
      takeHome: 3787710,
      total: 712290,
      pension: 202500,
      health: 159520,
      care: 20650,
      employment: 40500,
      tax: 262840,
      localTax: 26280,
    },
    {
      salary: 4600000,
      takeHome: 3860120,
      total: 739880,
      pension: 207000,
      health: 163070,
      care: 21110,
      employment: 41400,
      tax: 279370,
      localTax: 27930,
    },
    {
      salary: 4700000,
      takeHome: 3935300,
      total: 764700,
      pension: 211500,
      health: 166610,
      care: 21570,
      employment: 42300,
      tax: 293390,
      localTax: 29330,
    },
    {
      salary: 4800000,
      takeHome: 4010450,
      total: 789550,
      pension: 216000,
      health: 170160,
      care: 22030,
      employment: 43200,
      tax: 307420,
      localTax: 30740,
    },
    {
      salary: 4900000,
      takeHome: 4085630,
      total: 814370,
      pension: 220500,
      health: 173700,
      care: 22490,
      employment: 44100,
      tax: 321440,
      localTax: 32140,
    },
    {
      salary: 5000000,
      takeHome: 4160790,
      total: 839210,
      pension: 225000,
      health: 177250,
      care: 22950,
      employment: 45000,
      tax: 335470,
      localTax: 33540,
    },
    {
      salary: 5100000,
      takeHome: 4235970,
      total: 864030,
      pension: 229500,
      health: 180790,
      care: 23410,
      employment: 45900,
      tax: 349490,
      localTax: 34940,
    },
    {
      salary: 5200000,
      takeHome: 4311120,
      total: 888880,
      pension: 234000,
      health: 184340,
      care: 23870,
      employment: 46800,
      tax: 363520,
      localTax: 36350,
    },
    {
      salary: 5300000,
      takeHome: 4386300,
      total: 913700,
      pension: 238500,
      health: 187880,
      care: 24330,
      employment: 47700,
      tax: 377540,
      localTax: 37750,
    },
    {
      salary: 5400000,
      takeHome: 4461461,
      total: 938539,
      pension: 243000,
      health: 191430,
      care: 24790,
      employment: 48599,
      tax: 391570,
      localTax: 39150,
    },
    {
      salary: 5500000,
      takeHome: 4536651,
      total: 963349,
      pension: 247500,
      health: 194970,
      care: 25240,
      employment: 49499,
      tax: 405590,
      localTax: 40550,
    },
    {
      salary: 5600000,
      takeHome: 4611801,
      total: 988199,
      pension: 252000,
      health: 198520,
      care: 25700,
      employment: 50399,
      tax: 419620,
      localTax: 41960,
    },
    {
      salary: 5700000,
      takeHome: 4686981,
      total: 1013019,
      pension: 256500,
      health: 202060,
      care: 26160,
      employment: 51299,
      tax: 433640,
      localTax: 43360,
    },
    {
      salary: 5800000,
      takeHome: 4762141,
      total: 1037859,
      pension: 261000,
      health: 205610,
      care: 26620,
      employment: 52199,
      tax: 447670,
      localTax: 44760,
    },
    {
      salary: 5900000,
      takeHome: 4813631,
      total: 1086369,
      pension: 265500,
      health: 209150,
      care: 27080,
      employment: 53099,
      tax: 483220,
      localTax: 48320,
    },
    {
      salary: 6000000,
      takeHome: 4879271,
      total: 1120729,
      pension: 270000,
      health: 212700,
      care: 27540,
      employment: 53999,
      tax: 505900,
      localTax: 50590,
    },
    {
      salary: 6100000,
      takeHome: 4944931,
      total: 1155069,
      pension: 274500,
      health: 216240,
      care: 28000,
      employment: 54899,
      tax: 528580,
      localTax: 52850,
    },
    {
      salary: 6200000,
      takeHome: 5011921,
      total: 1188079,
      pension: 277650,
      health: 219790,
      care: 28460,
      employment: 55799,
      tax: 551260,
      localTax: 55120,
    },
    {
      salary: 6300000,
      takeHome: 5082071,
      total: 1217929,
      pension: 277650,
      health: 223330,
      care: 28920,
      employment: 56699,
      tax: 573940,
      localTax: 57390,
    },
    {
      salary: 6400000,
      takeHome: 5152211,
      total: 1247789,
      pension: 277650,
      health: 226880,
      care: 29380,
      employment: 57599,
      tax: 596620,
      localTax: 59660,
    },
    {
      salary: 6500000,
      takeHome: 5222371,
      total: 1277629,
      pension: 277650,
      health: 230420,
      care: 29830,
      employment: 58499,
      tax: 619300,
      localTax: 61930,
    },
    {
      salary: 6600000,
      takeHome: 5292521,
      total: 1307479,
      pension: 277650,
      health: 233970,
      care: 30290,
      employment: 59399,
      tax: 641980,
      localTax: 64190,
    },
    {
      salary: 6700000,
      takeHome: 5362671,
      total: 1337329,
      pension: 277650,
      health: 237510,
      care: 30750,
      employment: 60299,
      tax: 664660,
      localTax: 66460,
    },
    {
      salary: 6800000,
      takeHome: 5432811,
      total: 1367189,
      pension: 277650,
      health: 241060,
      care: 31210,
      employment: 61199,
      tax: 687340,
      localTax: 68730,
    },
    {
      salary: 6900000,
      takeHome: 5502961,
      total: 1397039,
      pension: 277650,
      health: 244600,
      care: 31670,
      employment: 62099,
      tax: 710020,
      localTax: 71000,
    },
    {
      salary: 7000000,
      takeHome: 5573101,
      total: 1426899,
      pension: 277650,
      health: 248150,
      care: 32130,
      employment: 62999,
      tax: 732700,
      localTax: 73270,
    },
    {
      salary: 7100000,
      takeHome: 5643261,
      total: 1456739,
      pension: 277650,
      health: 251690,
      care: 32590,
      employment: 63899,
      tax: 755380,
      localTax: 75530,
    },
    {
      salary: 7200000,
      takeHome: 5713401,
      total: 1486599,
      pension: 277650,
      health: 255240,
      care: 33050,
      employment: 64799,
      tax: 778060,
      localTax: 77800,
    },
    {
      salary: 7300000,
      takeHome: 5783550,
      total: 1516450,
      pension: 277650,
      health: 258780,
      care: 33510,
      employment: 65700,
      tax: 800740,
      localTax: 80070,
    },
    {
      salary: 7400000,
      takeHome: 5853690,
      total: 1546310,
      pension: 277650,
      health: 262330,
      care: 33970,
      employment: 66600,
      tax: 823420,
      localTax: 82340,
    },
    {
      salary: 7500000,
      takeHome: 5923840,
      total: 1576160,
      pension: 277650,
      health: 265870,
      care: 34430,
      employment: 67500,
      tax: 846100,
      localTax: 84610,
    },
    {
      salary: 7600000,
      takeHome: 5994000,
      total: 1606000,
      pension: 277650,
      health: 269420,
      care: 34880,
      employment: 68400,
      tax: 868780,
      localTax: 86870,
    },
    {
      salary: 7700000,
      takeHome: 6064150,
      total: 1635850,
      pension: 277650,
      health: 272960,
      care: 35340,
      employment: 69300,
      tax: 891460,
      localTax: 89140,
    },
    {
      salary: 7800000,
      takeHome: 6134290,
      total: 1665710,
      pension: 277650,
      health: 276510,
      care: 35800,
      employment: 70200,
      tax: 914140,
      localTax: 91410,
    },
    {
      salary: 7900000,
      takeHome: 6204440,
      total: 1695560,
      pension: 277650,
      health: 280050,
      care: 36260,
      employment: 71100,
      tax: 936820,
      localTax: 93680,
    },
    {
      salary: 8000000,
      takeHome: 6274580,
      total: 1725420,
      pension: 277650,
      health: 283600,
      care: 36720,
      employment: 72000,
      tax: 959500,
      localTax: 95950,
    },
    {
      salary: 8100000,
      takeHome: 6344740,
      total: 1755260,
      pension: 277650,
      health: 287140,
      care: 37180,
      employment: 72900,
      tax: 982180,
      localTax: 98210,
    },
    {
      salary: 8200000,
      takeHome: 6414880,
      total: 1785120,
      pension: 277650,
      health: 290690,
      care: 37640,
      employment: 73800,
      tax: 1004860,
      localTax: 100480,
    },
    {
      salary: 8300000,
      takeHome: 6485030,
      total: 1814970,
      pension: 277650,
      health: 294230,
      care: 38100,
      employment: 74700,
      tax: 1027540,
      localTax: 102750,
    },
    {
      salary: 8400000,
      takeHome: 6554560,
      total: 1845440,
      pension: 277650,
      health: 297780,
      care: 38560,
      employment: 75600,
      tax: 1050780,
      localTax: 105070,
    },
    {
      salary: 8500000,
      takeHome: 6623920,
      total: 1876080,
      pension: 277650,
      health: 301320,
      care: 39020,
      employment: 76500,
      tax: 1074180,
      localTax: 107410,
    },
    {
      salary: 8600000,
      takeHome: 6693270,
      total: 1906730,
      pension: 277650,
      health: 304870,
      care: 39480,
      employment: 77400,
      tax: 1097580,
      localTax: 109750,
    },
    {
      salary: 8700000,
      takeHome: 6762640,
      total: 1937360,
      pension: 277650,
      health: 308410,
      care: 39930,
      employment: 78300,
      tax: 1120980,
      localTax: 112090,
    },
    {
      salary: 8800000,
      takeHome: 6831990,
      total: 1968010,
      pension: 277650,
      health: 311960,
      care: 40390,
      employment: 79200,
      tax: 1144380,
      localTax: 114430,
    },
    {
      salary: 8900000,
      takeHome: 6901350,
      total: 1998650,
      pension: 277650,
      health: 315500,
      care: 40850,
      employment: 80100,
      tax: 1167780,
      localTax: 116770,
    },
    {
      salary: 9000000,
      takeHome: 6970700,
      total: 2029300,
      pension: 277650,
      health: 319050,
      care: 41310,
      employment: 81000,
      tax: 1191180,
      localTax: 119110,
    },
    {
      salary: 9100000,
      takeHome: 7040060,
      total: 2059940,
      pension: 277650,
      health: 322590,
      care: 41770,
      employment: 81900,
      tax: 1214580,
      localTax: 121450,
    },
    {
      salary: 9200000,
      takeHome: 7109410,
      total: 2090590,
      pension: 277650,
      health: 326140,
      care: 42230,
      employment: 82800,
      tax: 1237980,
      localTax: 123790,
    },
    {
      salary: 9300000,
      takeHome: 7167150,
      total: 2132850,
      pension: 277650,
      health: 329680,
      care: 42690,
      employment: 83700,
      tax: 1271940,
      localTax: 127190,
    },
    {
      salary: 9400000,
      takeHome: 7224700,
      total: 2175300,
      pension: 277650,
      health: 333230,
      care: 43150,
      employment: 84600,
      tax: 1306070,
      localTax: 130600,
    },
    {
      salary: 9500000,
      takeHome: 7282270,
      total: 2217730,
      pension: 277650,
      health: 336770,
      care: 43610,
      employment: 85500,
      tax: 1340190,
      localTax: 134010,
    },
    {
      salary: 9600000,
      takeHome: 7339810,
      total: 2260190,
      pension: 277650,
      health: 340320,
      care: 44070,
      employment: 86400,
      tax: 1374320,
      localTax: 137430,
    },
    {
      salary: 9700000,
      takeHome: 7397390,
      total: 2302610,
      pension: 277650,
      health: 343860,
      care: 44520,
      employment: 87300,
      tax: 1408440,
      localTax: 140840,
    },
    {
      salary: 9800000,
      takeHome: 7454940,
      total: 2345060,
      pension: 277650,
      health: 347410,
      care: 44980,
      employment: 88200,
      tax: 1442570,
      localTax: 144250,
    },
    {
      salary: 9900000,
      takeHome: 7512510,
      total: 2387490,
      pension: 277650,
      health: 350950,
      care: 45440,
      employment: 89100,
      tax: 1476690,
      localTax: 147660,
    },
    {
      salary: 10000000,
      takeHome: 7573810,
      total: 2426190,
      pension: 277650,
      health: 354500,
      care: 45900,
      employment: 90000,
      tax: 1507400,
      localTax: 150740,
    },
    {
      salary: 15000000,
      takeHome: 10382260,
      total: 4617740,
      pension: 277650,
      health: 531750,
      care: 68860,
      employment: 135000,
      tax: 3276800,
      localTax: 327680,
    },
    {
      salary: 20000000,
      takeHome: 13088860,
      total: 6911140,
      pension: 277650,
      health: 709000,
      care: 91810,
      employment: 180000,
      tax: 5138800,
      localTax: 513880,
    },
    {
      salary: 25000000,
      takeHome: 15795461,
      total: 9204539,
      pension: 277650,
      health: 886250,
      care: 114760,
      employment: 224999,
      tax: 7000800,
      localTax: 700080,
    },
    {
      salary: 30000000,
      takeHome: 18458930,
      total: 11541070,
      pension: 277650,
      health: 1063500,
      care: 137720,
      employment: 270000,
      tax: 8902000,
      localTax: 890200,
    },
    {
      salary: 35000000,
      takeHome: 21013730,
      total: 13986270,
      pension: 277650,
      health: 1240750,
      care: 160670,
      employment: 315000,
      tax: 10902000,
      localTax: 1090200,
    },
    {
      salary: 40000000,
      takeHome: 23568520,
      total: 16431480,
      pension: 277650,
      health: 1418000,
      care: 183630,
      employment: 360000,
      tax: 12902000,
      localTax: 1290200,
    },
    {
      salary: 45000000,
      takeHome: 26123321,
      total: 18876679,
      pension: 277650,
      health: 1595250,
      care: 206580,
      employment: 404999,
      tax: 14902000,
      localTax: 1490200,
    },
    {
      salary: 50000000,
      takeHome: 28568121,
      total: 21431879,
      pension: 277650,
      health: 1772500,
      care: 229530,
      employment: 449999,
      tax: 17002000,
      localTax: 1700200,
    },
  ];

  const findClosestSalary = (input) => {
    const targetSalary = Number(input);
    if (!targetSalary) return null;

    let closest = salaryTable[0];
    let minDiff = Math.abs(salaryTable[0].salary - targetSalary);

    for (const entry of salaryTable) {
      const diff = Math.abs(entry.salary - targetSalary);
      if (diff < minDiff) {
        minDiff = diff;
        closest = entry;
      }
    }

    return closest;
  };

  const handleSearch = () => {
    const result = findClosestSalary(searchSalary);
    setSearchResult(result);
  };

  return (
    <>
      <Head>
        <title>2025년 월급 실수령액 조회 - 급여별 세금 공제 안내</title>
        <meta
          name="description"
          content="2025년 기준 월급 실수령액과 4대보험, 세금 공제액을 한눈에 확인하세요. 급여 구간별 상세 공제내역을 제공합니다."
        />
      </Head>

      <div className="min-h-screen bg-green-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <Link href="/" className="text-green-300 hover:text-green-100">
              ← 홈으로 돌아가기
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-6">2025년 월급 실수령액 조회</h1>

          <div className="bg-white text-black p-6 rounded-lg shadow-lg mb-8">
            <div className="mb-6">
              <label className="block mb-2">
                월급 검색 (원)
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={searchSalary}
                    onChange={(e) => setSearchSalary(e.target.value)}
                    className="flex-1 p-2 border rounded"
                    placeholder="월급을 입력하세요"
                  />
                  <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                  >
                    검색
                  </button>
                </div>
              </label>
            </div>

            {searchResult && (
              <div className="mt-4 p-4 bg-gray-100 rounded">
                <h3 className="text-lg font-bold mb-4">▶ 검색 결과</h3>
                <div className="space-y-2">
                  <div className="flex justify-between font-bold">
                    <span>세전 월급</span>
                    <span>{searchResult.salary.toLocaleString()} 원</span>
                  </div>
                  <div className="flex justify-between text-blue-600 font-bold">
                    <span>실수령액</span>
                    <span>{searchResult.takeHome.toLocaleString()} 원</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="font-bold mb-2">공제 내역</p>
                    <div className="space-y-1 pl-4">
                      <div className="flex justify-between text-sm">
                        <span>국민연금 (4.5%)</span>
                        <span>{searchResult.pension.toLocaleString()} 원</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>건강보험 (3.43%)</span>
                        <span>{searchResult.health.toLocaleString()} 원</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>장기요양보험</span>
                        <span>{searchResult.care.toLocaleString()} 원</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>고용보험 (0.9%)</span>
                        <span>
                          {searchResult.employment.toLocaleString()} 원
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>소득세</span>
                        <span>{searchResult.tax.toLocaleString()} 원</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>지방소득세</span>
                        <span>{searchResult.localTax.toLocaleString()} 원</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-2 border-t font-bold">
                    <span>총 공제액</span>
                    <span>{searchResult.total.toLocaleString()} 원</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-800 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">2025년 공제율 안내</h2>
            <div className="space-y-4">
              <div className="bg-green-700 p-4 rounded">
                <p className="font-bold mb-2">4대 보험 요율</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>국민연금: 월급의 4.5%</li>
                  <li>건강보험: 월급의 3.43%</li>
                  <li>장기요양보험: 건강보험료의 12.81%</li>
                  <li>고용보험: 월급의 0.9%</li>
                </ul>
              </div>

              <div className="bg-green-700 p-4 rounded">
                <p className="font-bold mb-2">소득세율</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>1,200만원 이하: 6%</li>
                  <li>4,600만원 이하: 15%</li>
                  <li>8,800만원 이하: 24%</li>
                  <li>1억 5천만원 이하: 35%</li>
                  <li>3억원 이하: 38%</li>
                  <li>5억원 이하: 40%</li>
                  <li>5억원 초과: 42%</li>
                </ul>
              </div>

              <p className="text-sm">
                * 지방소득세는 소득세의 10%가 적용됩니다.
              </p>
            </div>
          </div>

          <CoupangBanner />
        </div>
      </div>
    </>
  );
}
