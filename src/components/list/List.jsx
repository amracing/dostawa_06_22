import React from 'react'

// import Swiper core and required modules
// import { Navigation} from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';


const data = [
  {
      name: 'Opaska przewodu 8-10 mm',
      code: 'BX16100127',
      url: 'https://b2b-amracing.pl/pl/search?text=BX16100127',
      image1: 'https://b2b-amracing.pl/pol_pl_Opaska-przewodu-8-10-mm-BX16100127-12839_1.jpg',
  },
  {
      name: 'Opaska przewodu 11-13 mm',
      code: 'BX16100127/1113',
      url: 'https://b2b-amracing.pl/pl/search?text=BX16100127',
      image1: 'https://b2b-amracing.pl/pol_pl_Opaska-przewodu-8-10-mm-BX16100127-12839_1.jpg',
  },
  {
      name: 'Opaska przewodu 12-15 mm',
      code: 'BX16100127/1215',
      url: 'https://b2b-amracing.pl/pl/search?text=BX16100127',
      image1: 'https://b2b-amracing.pl/pol_pl_Opaska-przewodu-8-10-mm-BX16100127-12839_1.jpg',
  },
  {
      name: 'Opaska przewodu 17-20 mm',
      code: 'BX16100127/1720',
      url: 'https://b2b-amracing.pl/pl/search?text=BX16100127',
      image1: 'https://b2b-amracing.pl/pol_pl_Opaska-przewodu-8-10-mm-BX16100127-12839_1.jpg',
  },
  {
      name: 'Halogen led U5 18W',
      code: 'BX20005',
      url: 'https://b2b-amracing.pl/pl/products/halogen-led-lampa-reflektor-u5-15w-3000-lm-bx20005-5026?query_id=2',
      image1: 'https://b2b-amracing.pl/pol_pl_Halogen-led-lampa-reflektor-U5-15W-3000-lm-BX20005-5026_1.jpg',
  },
  {
      name: 'Halogen led U7 12W z pierścieniem',
      code: 'BX20007',
      url: 'https://b2b-amracing.pl/pl/products/halogen-led-u7-bx20007-12822?query_id=2',
      image1: 'https://b2b-amracing.pl/pol_pl_Halogen-led-U7-BX20007-12822_1.jpg',
  },
  {
    name: 'Lampa robocza led combo, 120W, 4600lm',
    code: 'BX202102',
    url: 'https://b2b-amracing.pl/pl/products/lampa-robocza-combo-led-40-120w-bx202102-12820?query_id=3',
    image1: 'https://b2b-amracing.pl/pol_pl_Lampa-robocza-combo-led-40-120W-BX202102-12820_4.jpg',
  },
  {
    name: 'Lampa robocza led combo, 60W, 2400lm',
    code: 'BX202101',
    url: 'https://b2b-amracing.pl/pl/products/lampa-robocza-combo-led-20-60w-bx202101-12819?query_id=3',
    image1: 'https://b2b-amracing.pl/pol_pl_Lampa-robocza-combo-led-20-60W-BX202101-12819_1.jpg',
  },
  {
    name: 'Lampa robocza led 6szt, 18W, 1200lm',
    code: 'BX202103',
    url: 'https://b2b-amracing.pl/pl/products/lampa-robocza-led-18-w-bx202103-12821?query_id=3',
    image1: 'https://b2b-amracing.pl/pol_pl_Lampa-robocza-led-18-W-BX202103-12821_1.jpg',
  },
  {
    name: 'lampa tył led 3w1',
    code: 'BX21030070',
    url: 'https://b2b-amracing.pl/pl/products/lampa-tyl-pasek-led-kierunki-l-p-stop-postoj-3w1-moto-cross-quad-am9913b-bx21030070-11010?query_id=4',
    image1: 'https://b2b-amracing.pl/pol_pl_Lampa-tyl-pasek-LED-kierunki-l-p-stop-postoj-3w1-moto-cross-quad-AM9913B-BX21030070-11010_6.jpg',
  },
  {
    name: 'Łyżka z rączką 370 mm',
    code: 'BX21110032',
    url: 'https://b2b-amracing.pl/pl/products/lyzka-do-opon-370-mm-z-uchwytem-bx21110032-12829?query_id=5',
    image1: 'https://b2b-amracing.pl/pol_pl_Lyzka-do-opon-370-mm-z-uchwytem-BX21110032-12829_1.jpg',
  },
  {
    name: 'Nakrętka na wentyl, kostka czarna',
    code: 'BX21110022',
    url: 'https://b2b-amracing.pl/pl/products/nakretki-na-wentyle-z-uszczelka-kostka-czarna-aw5411-11022?query_id=5',
    image1: 'https://b2b-amracing.pl/pol_pl_Nakretki-na-wentyle-z-uszczelka-kostka-czarna-AW5411-11022_1.jpg',
  },
  {
    name: 'Nakrętka na wentyl, kostka silver',
    code: 'BX21110022',
    url: 'https://b2b-amracing.pl/pl/products/nakretki-na-wentyle-z-uszczelka-kostka-biala-aw5412-11023?query_id=5',
    image1: 'https://b2b-amracing.pl/pol_pl_Nakretki-na-wentyle-z-uszczelka-kostka-biala-AW5412-11023_2.jpg',
  },
  {
    name: 'Nakrętka na wentyl, czaszka czarna',
    code: 'BX21110020',
    url: 'https://b2b-amracing.pl/pl/products/nakretka-na-wentyl-z-uszczelka-czacha-czarna-aw5405c-10012?query_id=5',
    image1: 'https://b2b-amracing.pl/pol_pl_Nakretka-na-wentyl-z-uszczelka-czacha-czarna-AW5405C-10012_1.jpg',
  },
  {
    name: 'Nakrętka na wentyl, granat czerwony',
    code: 'BX16100067',
    url: 'https://b2b-amracing.pl/pl/products/nakretka-na-wentyl-granat-czerwony-aw542183-10020?query_id=1',
    image1: 'https://b2b-amracing.pl/pol_pl_Nakretka-na-wentyl-granat-czerwony-AW542183-10020_1.jpg',
  },
  {
    name: 'Nakrętka na wentyl, granat niebieski',
    code: 'BX16100067',
    url: 'https://b2b-amracing.pl/pl/products/nakretka-wentyla-granat-niebieski-bx16100067bl-12857?query_id=1',
    image1: 'https://b2b-amracing.pl/pol_pl_Nakretka-wentyla-granat-niebieski-BX16100067BL-12857_1.jpg',
  },
  {
    name: 'Nakrętka na wentyl silver',
    code: 'BX21110025',
    url: 'https://b2b-amracing.pl/pl/products/nakretka-na-wentyl-z-uszczelka-silver-aw542188-10015?query_id=2',
    image1: 'https://b2b-amracing.pl/pol_pl_Nakretka-na-wentyl-z-uszczelka-silver-AW542188-10015_1.jpg',
  },
  {
    name: 'Nakrętka na wentyl czerwona',
    code: 'BX21110025',
    url: 'https://b2b-amracing.pl/pl/products/nakretka-wentyla-czerwona-bx21110025rd-12856?query_id=2',
    image1: 'https://b2b-amracing.pl/pol_pl_Nakretka-wentyla-czerwona-BX21110025RD-12856_1.jpg',
  },
  {
    name: 'Nakrętka na wentyl czarna',
    code: 'BX21110025',
    url: 'https://b2b-amracing.pl/pl/products/nakretka-wentyla-czarna-bx21110025bk-12855',
    image1: 'https://b2b-amracing.pl/pol_pl_Nakretka-wentyla-czarna-BX21110025BK-12855_1.jpg',
  },
  {
    name: 'Nakrętka na wentyl, korona złota',
    code: 'BX21110023',
    url: 'https://b2b-amracing.pl/pl/products/nakretka-na-wentyl-z-uszczelka-korona-gold-aw542197-10018?query_id=2',
    image1: 'https://b2b-amracing.pl/pol_pl_Nakretka-na-wentyl-z-uszczelka-korona-gold-AW542197-10018_1.jpg',
  },
  {
    name: 'Nakrętka na wentyl, korona silver',
    code: 'BX21110023',
    url: 'https://b2b-amracing.pl/pl/products/nakretka-na-wentyl-z-uszczelka-korona-silver-aw542196-10017',
    image1: 'https://b2b-amracing.pl/pol_pl_Nakretka-na-wentyl-z-uszczelka-korona-silver-AW542196-10017_1.jpg',
  },
  {
    name: 'Nakrętka na wentyl, krzyż',
    code: 'BX21110024',
    url: 'https://b2b-amracing.pl/pl/products/nakretka-na-wentyl-z-uszczelka-krzyz-maltanski-aw542191-10016?query_id=2',
    image1: 'https://b2b-amracing.pl/pol_pl_Nakretka-na-wentyl-z-uszczelka-krzyz-maltanski-AW542191-10016_1.jpg',
  },
  {
    name: 'Odpowietrznik korka paliwa czerwony',
    code: 'BX16110032',
    url: 'https://b2b-amracing.pl/pl/products/odpowietrznik-korka-paliwa-czerwony-bx16110032r-2299?query_id=3',
    image1: 'https://b2b-amracing.pl/pol_pl_Odpowietrznik-korka-paliwa-czerwony-BX16110032R-2299_1.jpg',
  },
  {
    name: 'Odpowietrznik korka paliwa złoty',
    code: 'BX16110032',
    url: 'https://b2b-amracing.pl/pl/products/odpowietrznik-korka-paliwa-zloty-cross-enduro-quad-bx16110032g-2298?query_id=3',
    image1: 'https://b2b-amracing.pl/pol_pl_Odpowietrznik-korka-paliwa-zloty-cross-enduro-quad-BX16110032G-2298_1.jpg',
  },
  {
    name: 'Odpowietrznik korka paliwa pomarańczowy',
    code: 'BX16110032',
    url: 'https://b2b-amracing.pl/pl/products/odpowietrznik-korka-paliwa-pomarancz-bx16110032o-12831',
    image1: 'https://b2b-amracing.pl/pol_pl_Odpowietrznik-korka-paliwa-pomarancz-BX16110032O-12831_1.jpg',
  },
  {
    name: 'Odpowietrznik korka paliwa niebieski',
    code: 'BX16110032',
    url: 'https://b2b-amracing.pl/pl/products/odpowietrznik-korka-paliwa-niebieski-cross-enduro-quad-bx16110032bl-2297',
    image1: 'https://b2b-amracing.pl/pol_pl_Odpowietrznik-korka-paliwa-niebieski-cross-enduro-quad-BX16110032BL-2297_1.jpg',
  },
  {
    name: 'Odpowietrznik korka paliwa czarny',
    code: 'BX16110032',
    url: 'https://b2b-amracing.pl/pl/products/odpowietrznik-korka-paliwa-czarny-cross-enduro-quad-abafs003bk-bx16110032bk-11772',
    image1: 'https://b2b-amracing.pl/pol_pl_Odpowietrznik-korka-paliwa-czarny-cross-enduro-quad-ABAFS003BK-BX16110032BK-11772_1.png',
  },
  {
    name: 'Klocki hamulcowe BARTON FIGHTER, ZIPP NEKEN',
    code: 'BX18030056',
    url: 'https://b2b-amracing.pl/pl/products/klocki-hamulcowe-przod-junak-901-902-romet-zetka-benzer-gsr-aston-barton-fighter-sprint-j9014105-bx18030056-6323?query_id=4',
    image1: 'https://b2b-amracing.pl/pol_pl_Klocki-hamulcowe-przod-Junak-901-902-romet-zetka-benzer-gsr-aston-barton-fighter-sprint-J9014105-BX18030056-6323_1.png',
  },
  {
    name: 'Klocki hamulcowe CROSS',
    code: 'BX18030059',
    url: 'https://b2b-amracing.pl/pl/products/klocki-hamulcowe-cross-4t-110-125-kxd-loncin-roy03768-aw0917c-bx18030059-10506?query_id=4',
    image1: 'https://b2b-amracing.pl/pol_pl_Klocki-hamulcowe-cross-4t-110-125-kxd-loncin-ROY03768-AW0917C-BX18030059-10506_1.jpg',
  },
  {
    name: 'Prowadnica łańcucha cross czerwona',
    code: 'BX20100076',
    url: 'https://b2b-amracing.pl/pl/products/prowadnica-lancucha-czarna-cross-110-125-140-pit-bike-roy26901-bx20100076bk-12818?query_id=5',
    image1: 'https://b2b-amracing.pl/pol_pl_Prowadnica-lancucha-czarna-cross-110-125-140-pit-bike-ROY26901-BX20100076BK-12818_1.jpg',
  },
  {
    name: 'Prowadnica łańcucha cross czarna',
    code: 'BX20100076',
    url: 'https://b2b-amracing.pl/pl/products/prowadnica-lancucha-czarna-cross-110-125-140-pit-bike-roy26901-9907',
    image1: 'https://b2b-amracing.pl/pol_pl_Prowadnica-lancucha-czarna-cross-110-125-140-pit-bike-ROY26901-9907_1.jpg',
  },
  {
    name: 'Prowadnica łańcucha cross pomarańczowa',
    code: 'BX20100076',
    url: 'https://b2b-amracing.pl/pl/products/prowadnica-lancucha-pomaranczowa-cross-110-125-140-pit-bike-roy25017-bx20100076o-11444',
    image1: 'https://b2b-amracing.pl/pol_pl_Prowadnica-lancucha-pomaranczowa-cross-110-125-140-pit-bike-ROY25017-BX20100076O-11444_1.png',
  },
  {
    name: 'Gniazdo / obudowa bezpiecznika mini',
    code: 'BX19060066',
    url: 'https://b2b-amracing.pl/pl/products/gniazdo-oprawa-bezpiecznika-bx19060066-12833?query_id=6',
    image1: 'https://b2b-amracing.pl/pol_pl_Gniazdo-oprawa-bezpiecznika-BX19060066-12833_1.jpg',
  },
  {
    name: 'Zębatka przód 428 16 (14/17)',
    code: 'BX19050138',
    url: 'https://b2b-amracing.pl/pl/products/zebatka-przod-428-16-chinski-motorower-sil-fmb-fmh-tzh-zp42816-9045?query_id=7',
    image1: 'https://b2b-amracing.pl/pol_pl_Zebatka-przod-428-16-chinski-motorower-sil-FMB-FMH-TZH-ZP42816-9045_1.jpg',
  },
  {
    name: 'Zębatka przód 428 15 (18/20)',
    code: 'BX15110314',
    url: 'https://b2b-amracing.pl/pl/products/zebatka-przod-428-15-chinski-motorower-quad-cross-walek-18-20-mm-zp42815-20-bx15110314-11112?query_id=8',
    image1: 'https://b2b-amracing.pl/pol_pl_Zebatka-przod-428-15-chinski-motorower-quad-cross-walek-18-20-mm-ZP42815-20-BX15110314-11112_1.jpg',
  },
  {
    name: 'Zębatka przód 428 13 (14/17)',
    code: 'BX15120161',
    url: 'https://b2b-amracing.pl/pl/products/zebatka-przod-420-13-chinski-quad-motorower-139fmb-147fmb-152fmb-zp42013-9035?query_id=9',
    image1: 'https://b2b-amracing.pl/pol_pl_Zebatka-przod-420-13-chinski-quad-motorower-139fmb-147fmb-152fmb-ZP42013-9035_1.jpg',
  },
  {
    name: 'Wyłącznik zapłonu, okrągły',
    code: 'BX20090060',
    url: 'https://b2b-amracing.pl/pl/products/wylacznik-wlacznik-zaplonu-bx20090060-12832?query_id=10',
    image1: 'https://b2b-amracing.pl/pol_pl_Wylacznik-wlacznik-zaplonu-BX20090060-12832_1.jpg',
  },
  {
    name: 'Rezystor / opornik 25W 12v 10 OM',
    code: 'BX21110028',
    url: 'https://b2b-amracing.pl/pl/products/opornik-kierunkowskazow-led-25w-roy27337-bx21110028-11699?query_id=2',
    image1: 'https://b2b-amracing.pl/pol_pl_Opornik-kierunkowskazow-LED-25W-ROY27337-BX21110028-11699_1.jpg',
  },
  {
    name: 'Sygnał dźwiękowy czarny',
    code: 'BX15090152',
    url: 'https://b2b-amracing.pl/pl/products/sygnal-dzwiekowy-klakson-12v-100db-1-5a-czarny-uniwersalny-50f2208c-pf246070001-sgt000242-bx15090152bk-aw263752b-3151?query_id=11',
    image1: 'https://b2b-amracing.pl/pol_pl_Sygnal-dzwiekowy-klakson-12v-100dB-1-5A-czarny-uniwersalny-50F2208C-pf246070001-sgt000242-BX15090152BK-AW263752B-3151_1.jpg',
  },
  {
    name: 'Sygnał dźwiękowy chrom',
    code: 'BX15090152',
    url: 'https://b2b-amracing.pl/pl/products/sygnal-klakson-50f2208c-bx16090152ch-12823?query_id=11',
    image1: 'https://b2b-amracing.pl/pol_pl_Sygnal-klakson-50F2208C-BX16090152CH-12823_1.jpg',
  },
  {
    name: 'Lampa tył led',
    code: 'BX16060684',
    url: 'https://b2b-amracing.pl/pl/products/lampa-tyl-led-hom-e24-3w1-klosz-czerwony-moto-quad-am9937-bx16060684-11013?query_id=12',
    image1: 'https://b2b-amracing.pl/pol_pl_Lampa-tyl-Led-Hom-E24-3w1-klosz-czerwony-moto-quad-AM9937-BX16060684-11013_1.png',
  },
  {
    name: 'Łańcuch 420H, 136 ogniw, szary',
    code: 'BX17070022',
    url: 'https://b2b-amracing.pl/pl/products/lancuch-420h-136-bx17070022-136-12845?query_id=13',
    image1: 'https://b2b-amracing.pl/pol_pl_Lancuch-420H-136-BX17070022-136-12845_1.jpg',
  },
  {
    name: 'Łańcuch 428H, 140 ogniw, szary',
    code: 'BX14110140',
    url: 'https://b2b-amracing.pl/pl/products/lancuch-428h-140-bx14110140-140-12843?query_id=14',
    image1: 'https://b2b-amracing.pl/pol_pl_Lancuch-420H-136-BX17070022-136-12845_1.jpg',
  },
  {
    name: 'Siedzenie skuter, czarne',
    code: 'BX16100054',
    url: 'https://b2b-amracing.pl/pl/products/siedzenie-kanapa-fotel-czarny-skuter-4t-zd5531-bx16100054-9018?query_id=15',
    image1: 'https://b2b-amracing.pl/pol_pl_Siedzenie-kanapa-fotel-czarny-skuter-4t-ZD5531-BX16100054-9018_1.png',
  },
  {
    name: 'Śruba owiewki M5x20 mm czarna',
    code: 'BX21110018',
    url: 'https://b2b-amracing.pl/pl/products/sruba-owiewki-5x20-czarna-bx21110018bk-12848?query_id=2',
    image1: 'https://b2b-amracing.pl/pol_pl_Sruba-owiewki-5x20-czarna-BX21110018BK-12848_1.jpg',
  },
  {
    name: 'Śruba owiewki M5x20 mm niebieska',
    code: 'BX21110018',
    url: 'https://b2b-amracing.pl/pl/products/sruba-owiewki-5x20-niebieska-bx21110018bl-12849',
    image1: 'https://b2b-amracing.pl/pol_pl_Sruba-owiewki-5x20-niebieska-BX21110018BL-12849_1.jpg',
  },
  {
    name: 'Śruba owiewki M5x20 mm czerwona',
    code: 'BX21110018',
    url: 'https://b2b-amracing.pl/pl/products/sruba-owiewki-5x20-czerwona-bx21110018rd-12847',
    image1: 'https://b2b-amracing.pl/pol_pl_Sruba-owiewki-5x20-czerwona-BX21110018RD-12847_1.jpg',
  },
  {
    name: 'Śruba owiewki M5x20 mm żółta',
    code: 'BX21110018',
    url: 'https://b2b-amracing.pl/pl/products/sruba-owiewki-5x20-zlota-bx21110018gd-12850',
    image1: 'https://b2b-amracing.pl/pol_pl_Sruba-owiewki-5x20-zlota-BX21110018GD-12850_1.jpg',
  },
  {
    name: 'Żarówka BA20D 12v 35W',
    code: 'BX14081229',
    url: 'https://b2b-amracing.pl/pl/products/zarowka-12v-35w-ba20d-bialy-reflektor-przod-skuter-4t-bu4116-bx14081229-4770?query_id=16',
    image1: 'https://b2b-amracing.pl/pol_pl_Zarowka-12v-35w-BA20D-bialy-reflektor-przod-skuter-4t-BU4116-BX14081229-4770_1.png',
  },
  {
    name: 'Napinacz łańcucha typ 2',
    code: 'BX18030310',
    url: 'https://b2b-amracing.pl/pl/products/napinacz-lancucha-rolka-quad-atv-cross-70-90-110-125-roy26917-roy09541-bx18030310-10396?query_id=17',
    image1: 'https://b2b-amracing.pl/pol_pl_Napinacz-lancucha-rolka-quad-atv-cross-70-90-110-125-ROY26917-ROY09541-BX18030310-10396_1.jpg',
  },
  {
    name: 'Napinacz łańcucha typ 1',
    code: 'BX21110033',
    url: 'https://b2b-amracing.pl/pl/products/napinacz-lancucha-rolka-quad-atv-125-150-bashan-kingway-shineray-loncin-roy00912-bx21110033-7797?query_id=18',
    image1: 'https://b2b-amracing.pl/pol_pl_Napinacz-lancucha-rolka-quad-atv-125-150-bashan-kingway-shineray-loncin-ROY00912-BX21110033-7797_1.jpg',
  },
  {
    name: 'Pokrywa alternatora 139 FMB, dół',
    code: 'BX1405586',
    url: 'https://b2b-amracing.pl/pl/products/pokrywa-alternatora-bx1405586-12837?query_id=19',
    image1: 'https://b2b-amracing.pl/pol_pl_Pokrywa-alternatora-BX1405586-12837_1.jpg',
  },
  {
    name: 'Pokrywa alternatora 139 FMB, góra, 6 cewek',
    code: 'BX17040002',
    url: 'https://b2b-amracing.pl/pl/products/pokrywa-alternatora-bx17040002-12835?query_id=20',
    image1: 'https://b2b-amracing.pl/pol_pl_Pokrywa-alternatora-BX17040002-12835_1.jpg',
  },
  {
    name: 'Pokrywa alternatora 139 FMB, góra, 2 cewki',
    code: 'BX15110258',
    url: 'https://b2b-amracing.pl/pl/products/pokrywa-alternatora-bx15110258-12836?query_id=21',
    image1: 'https://b2b-amracing.pl/pol_pl_Pokrywa-alternatora-BX15110258-12836_3.jpg',
  },
  {
    name: 'Zrywka zapłonu',
    code: 'BX21100050',
    url: 'https://b2b-amracing.pl/pl/products/zrywka-zaplonu-wylacznik-quad-cross-mini-pocket-aw2091-bx21100050-11020?query_id=22',
    image1: 'https://b2b-amracing.pl/pol_pl_Zrywka-zaplonu-wylacznik-quad-cross-mini-pocket-AW2091-BX21100050-11020_1.jpg',
  },
  {
    name: 'Rozrusznik górny, 139 fmb',
    code: 'BX15120303',
    url: 'https://b2b-amracing.pl/pl/products/rozrusznik-gorny-4t-139-fmb-quad-atv-50-70-110-125-chopper-czoper-roy03800-roy24835-149me1102-bx15120303-ns150fmh-100007-zc25010-7800?query_id=23',
    image1: 'https://b2b-amracing.pl/pol_pl_Rozrusznik-gorny-4t-139-fmb-quad-atv-50-70-110-125-chopper-czoper-ROY03800-ROY24835-149ME1102-BX15120303-ns150fmh-100007-zc25010-7800_1.jpg',
  },
  {
    name: 'Ściągacz magneta M22,5x1,5 mm prawy',
    code: 'BX21110030',
    url: 'https://b2b-amracing.pl/pl/products/sciagacz-kola-magnetycznego-22-5x1-mm-prawy-skuter-2t-minarelli-bx21110030-12826?query_id=18',
    image1: 'https://b2b-amracing.pl/pol_pl_Sciagacz-kola-magnetycznego-22-5x1-mm-prawy-skuter-2t-minarelli-BX21110030-12826_1.jpg',
  },
  {
    name: 'Ściągacz magneta M26x1 mm prawy',
    code: 'BX16060946',
    url: 'https://b2b-amracing.pl/pl/products/sciagacz-kola-magnetycznego-26x1-mm-prawy-skuter-piaggio-gilera-bx15060946-12828?query_id=24',
    image1: 'https://b2b-amracing.pl/pol_pl_Sciagacz-kola-magnetycznego-26x1-mm-prawy-skuter-piaggio-gilera-BX15060946-12828_1.jpg',
  },
  {
    name: 'Ściągacz magneta M24x1 mm prawy',
    code: 'BX15060010',
    url: 'https://b2b-amracing.pl/pl/products/sciagacz-kola-magnetycznego-24x1-mm-prawy-skuter-4t-50-100-139-qma-qmb-bx15060010-12827?query_id=25',
    image1: 'https://b2b-amracing.pl/pol_pl_Sciagacz-kola-magnetycznego-24x1-mm-prawy-skuter-4t-50-100-139-qma-qmb-BX15060010-12827_1.jpg',
  },
  {
    name: 'Ściągacz magneta M19x1 mm prawy',
    code: 'BX21110029',
    url: 'https://b2b-amracing.pl/pl/products/sciagacz-kola-magnetycznego-19x1-prawy-bx21110029-12824?query_id=26',
    image1: 'https://b2b-amracing.pl/pol_pl_Sciagacz-kola-magnetycznego-19x1-prawy-BX21110029-12824_1.jpg',
  },
  {
    name: 'Ściągacz magneta M27x1 mm i M24x1 mm',
    code: 'BX1506001',
    url: 'https://b2b-amracing.pl/pl/products/sciagacz-kola-magnetycznego-24x1-27x1-mm-prawy-skuter-chinski-4t-2t-139-qma-qmb-gy6-1pe40qmb-bx21110029-12825?query_id=25',
    image1: 'https://b2b-amracing.pl/pol_pl_Sciagacz-kola-magnetycznego-24x1-27x1-mm-prawy-skuter-chinski-4t-2t-139-qma-qmb-gy6-1PE40QMB-BX21110029-12825_1.jpg',
  },
  {
    name: 'Ośka koła przód cross',
    code: 'BX20100073',
    url: 'https://b2b-amracing.pl/pl/products/oska-kola-przod-cross-110-125-loncin-kxd-4t-roy11577-bx20100073-10503?query_id=5',
    image1: 'https://b2b-amracing.pl/pol_pl_Oska-kola-przod-cross-110-125-loncin-kxd-4t-ROY11577-BX20100073-10503_1.jpg',
  },
  {
    name: 'Ośka koła tył cross',
    code: 'BX21110016',
    url: 'https://b2b-amracing.pl/pl/products/oska-kola-tyl-cross-110-125-loncin-kxd-4t-roy26930-10504?query_id=2',
    image1: 'https://b2b-amracing.pl/pol_pl_Oska-kola-tyl-cross-110-125-loncin-kxd-4t-ROY26930-10504_1.jpg',
  },
]

const List = () => {
  return (
    <div className='container'>
      <div className='row'>
          {
            data.map(({code, name, url, image1, image2, image3, image4}) => {
              return (
              <div className='col-sm-6 col-md-4 col-lg-3'>
                <div className="text-center mb-5 mt-5">
                  <div className="swiper__container">
                    <Swiper
                    // modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    // navigation
                    pagination={{ clickable: true }}

                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                      <SwiperSlide><img src={image1} className='image ' /></SwiperSlide>
                      <SwiperSlide><img src={image2} className='image' /></SwiperSlide>
                      <SwiperSlide><img src={image3} className='image' /></SwiperSlide>
                      <SwiperSlide><img src={image4} className='image' /></SwiperSlide>
                      
                    </Swiper>
                  </div>

                  <p className=''>({code})</p>
                  <p className='name'>{name}</p>
                  <div className="my-auto button_link">
                    <a href={ url }>Otwórz na stronie</a>
                  </div>


                  {/* <div  className='col-md-2 my-auto'>
                    <a href={image1}><img src={image1} className='image'/></a>
                  </div>
                  <div  className='col-md-2 my-auto'>
                    <a href={image2}><img src={image2} className='image'/></a>
                  </div>
                  <div  className='col-md-2 my-auto'>
                    <a href={image3}><img src={image3} className='image'/></a>
                  </div>
                  <div  className='col-md-2 my-auto'>
                    <a href={image4}><img src={image4} className='image'/></a>
                  </div> */}
                </div>
              </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default List