/* HARFLAR RO'YXATI (28 ta harf)
   Yangi harf yoki so'z qo'shish: pastdagi shablonni nusxalab, ro'yxat oxiriga (oxirgi "]" dan oldin) qo'ying.
   Har bir harfda 4 ta forma (tab) bor (w - yozib mashq qilinadigan shakl; x - misol so'z; s - yozish yo'li, ixtiyoriy):
     t - tab nomi     w - mashq qilinadigan so'z/harf (arabcha)
     i - so'zdagi harfning tartib raqami (0 dan boshlanadi, arabcha matnning birinchi harfi = 0)
     h - sarlavha     p - qisqa maslahat
   SHABLON:
   ,{id:"xx",ar:"ت",name:"Nomi",forms:[
     {t:"Yakka",w:"ت",i:0,h:"Yakka ...",p:"..."},
     {t:"Boshida",w:"...",i:0,h:"Boshida: ...",p:"..."},
     {t:"O'rtasida",w:"...",i:1,h:"O'rtasida: ...",p:"..."},
     {t:"Oxirida",w:"...",i:2,h:"Oxirida: ...",p:"..."}
   ]}
*/
window.LETTERS=[
 {id:'alif',ar:'ا',name:'Alif',forms:[
  {t:"Alif",w:"ا",x:"ا",i:0,h:"Yakka alif",p:"Yuqoridan pastga bitta tik chiziq torting.",s:[[[0.5,0.05],[0.51,0.3],[0.52,0.5],[0.52,0.7],[0.51,0.94]]]},
  {t:"Boshida",w:"ا",x:"اسد",i:0,h:"Boshida: asad (sher)",p:"Alif keyingi harfga ulanmaydi, yakka alifdek yoziladi.",s:[[[0.5,0.05],[0.51,0.3],[0.52,0.5],[0.52,0.7],[0.51,0.94]]]},
  {t:"O'rtasida",w:"ـا",x:"باب",i:1,h:"O'rtasida: bob (eshik)",p:"Oldingi harfdan (chiziq bilan) ulanadi, keyingisiga ulanmaydi.",s:[[[1.0,0.91],[0.7,0.91],[0.45,0.9],[0.3,0.86],[0.201,0.65],[0.183,0.5],[0.169,0.35],[0.154,0.2],[0.189,0.06]]]},
  {t:"Oxirida",w:"ـا",x:"سما",i:2,h:"Oxirida: sama (osmon)",p:"Oldingi harfdan chiziq bilan ulanib, tik ko'tariladi.",s:[[[1.0,0.91],[0.7,0.91],[0.45,0.9],[0.3,0.86],[0.201,0.65],[0.183,0.5],[0.169,0.35],[0.154,0.2],[0.189,0.06]]]}
 ]},
 {id:"ba",ar:"ب",name:"Ba",forms:[
  {t:"Yakka",w:"ب",x:"ب",i:0,h:"Yakka ba",p:"Pastiga bitta nuqta qo'yiladi. Yozish tartibi uchun «▶ Yordam»ni bosing.",s:[[[0.93,0.04],[0.91,0.25],[0.84,0.42],[0.68,0.54],[0.45,0.58],[0.25,0.55],[0.12,0.45],[0.08,0.27]],[[0.469,0.889]]]},
  {t:"Boshida",w:"بـ",x:"بحر",i:0,h:"Boshida: bahr (dengiz)",p:"Keyingi harfga ulanadi. Nuqtani harfni yozib bo'lgach qo'ying.",s:[[[0.94,0.02],[0.93,0.3],[0.88,0.46],[0.74,0.52],[0.5,0.54],[0.25,0.54],[0.02,0.54]],[[0.796,0.884]]]},
  {t:"O'rtasida",w:"ـبـ",x:"حبل",i:1,h:"O'rtasida: habl (arqon)",p:"Ikki tomondan ulanadi. Nuqtani harfni yozib bo'lgach qo'ying.",s:[[[1.0,0.41],[0.84,0.41],[0.7,0.36],[0.63,0.2],[0.61,0.05],[0.57,0.2],[0.53,0.36],[0.4,0.42],[0.2,0.41],[0.0,0.41]],[[0.537,0.85]]]},
  {t:"Oxirida",w:"ـب",x:"قلب",i:2,h:"Oxirida: qalb (yurak)",p:"Oldingi harfdan ulanib tugaydi. Nuqtani harfni yozib bo'lgach qo'ying.",s:[[[1.0,0.47],[0.84,0.47],[0.73,0.45],[0.69,0.28],[0.68,0.12],[0.63,0.3],[0.57,0.43],[0.43,0.5],[0.27,0.5],[0.14,0.38],[0.08,0.2],[0.06,0.05]],[[0.355,0.864]]]}
 ]},
 {id:"ta",ar:"ت",name:"Ta",forms:[
  {t:"Yakka",w:"ت",x:"ت",i:0,h:"Yakka ta",p:"Tepasiga ikkita nuqta qo'yiladi. ت ning shakli ب bilan bir xil, faqat nuqtasi boshqacha. Yozish tartibi uchun «▶ Yordam»ni bosing.",s:[[[0.93,0.147],[0.91,0.433],[0.84,0.665],[0.68,0.829],[0.45,0.884],[0.25,0.843],[0.12,0.706],[0.08,0.461]],[[0.532,0.142]],[[0.336,0.179]]]},
  {t:"Boshida",w:"تـ",x:"تمر",i:0,h:"Boshida: tamr (xurmo)",p:"Keyingi harfga ulanadi. Nuqtalarni harfni yozib bo'lgach qo'ying.",s:[[[0.768,0.336],[0.76,0.637],[0.719,0.809],[0.604,0.874],[0.408,0.895],[0.204,0.895],[0.016,0.895]],[[0.877,0.116]],[[0.644,0.146]]]},
  {t:"O'rtasida",w:"ـتـ",x:"متر",i:1,h:"O'rtasida: mitr (metr)",p:"Ikki tomondan ulanadi. Nuqtalarni harfni yozib bo'lgach qo'ying.",s:[[[0.914,0.876],[0.768,0.876],[0.64,0.824],[0.576,0.658],[0.558,0.502],[0.521,0.658],[0.485,0.824],[0.366,0.886],[0.183,0.876],[0.0,0.876]],[[0.593,0.146]],[[0.429,0.183]]]},
  {t:"Oxirida",w:"ـت",x:"وقت",i:2,h:"Oxirida: vaqt (vaqt)",p:"Oldingi harfdan ulanib tugaydi. Nuqtalarni harfni yozib bo'lgach qo'ying.",s:[[[1.0,0.864],[0.84,0.864],[0.73,0.842],[0.69,0.651],[0.68,0.472],[0.63,0.674],[0.57,0.819],[0.43,0.898],[0.27,0.898],[0.14,0.763],[0.08,0.562],[0.06,0.394]],[[0.387,0.142]],[[0.252,0.179]]]}
 ]},
 {id:"sa",ar:"ث",name:"Sa",forms:[
  {t:"Yakka",w:"ث",x:"ث",i:0,h:"Yakka sa",p:"Tepasiga uchta nuqta qo'yiladi. ث ning shakli ب bilan bir xil, faqat nuqtasi boshqacha. Yozish tartibi uchun «▶ Yordam»ni bosing.",s:[[[0.93,0.244],[0.91,0.498],[0.84,0.704],[0.68,0.849],[0.45,0.897],[0.25,0.861],[0.12,0.74],[0.08,0.522]],[[0.546,0.252]],[[0.337,0.279]],[[0.438,0.114]]]},
  {t:"Boshida",w:"ثـ",x:"ثمر",i:0,h:"Boshida: samar (meva)",p:"Keyingi harfga ulanadi. Nuqtalarni harfni yozib bo'lgach qo'ying.",s:[[[0.76,0.399],[0.752,0.672],[0.711,0.827],[0.598,0.886],[0.404,0.905],[0.202,0.905],[0.016,0.905]],[[0.884,0.211]],[[0.639,0.233]],[[0.757,0.095]]]},
  {t:"O'rtasida",w:"ـثـ",x:"مثل",i:1,h:"O'rtasida: misl (misol)",p:"Ikki tomondan ulanadi. Nuqtalarni harfni yozib bo'lgach qo'ying.",s:[[[0.914,0.891],[0.768,0.891],[0.64,0.845],[0.576,0.698],[0.558,0.561],[0.521,0.698],[0.485,0.845],[0.366,0.9],[0.183,0.891],[0.0,0.891]],[[0.605,0.258]],[[0.431,0.286]],[[0.515,0.116]]]},
  {t:"Oxirida",w:"ـث",x:"بحث",i:2,h:"Oxirida: bahs (izlanish)",p:"Oldingi harfdan ulanib tugaydi. Nuqtalarni harfni yozib bo'lgach qo'ying.",s:[[[1.0,0.88],[0.84,0.88],[0.73,0.86],[0.69,0.691],[0.68,0.533],[0.63,0.711],[0.57,0.84],[0.43,0.909],[0.27,0.909],[0.14,0.79],[0.08,0.612],[0.06,0.463]],[[0.397,0.252]],[[0.253,0.279]],[[0.323,0.114]]]}
 ]},
 {id:"jim",ar:"ج",name:"Jim",forms:[
  {t:"Yakka",w:"ج",x:"ج",i:0,h:"Yakka jim",p:"Pastiga bitta nuqta qo'yiladi. ج ning shakli ح bilan bir xil, faqat nuqtasi boshqacha. Yozish tartibi uchun «▶ Yordam»ni bosing.",s:[[[0.09,0.17],[0.2,0.07],[0.4,0.1],[0.6,0.15],[0.8,0.18],[0.96,0.17],[0.8,0.2],[0.6,0.2],[0.4,0.22],[0.3,0.25],[0.24,0.34],[0.17,0.46],[0.15,0.6],[0.2,0.78],[0.3,0.9],[0.45,0.93],[0.7,0.9],[0.98,0.83]],[[0.57,0.583]]]},
  {t:"Boshida",w:"جـ",x:"جمل",i:0,h:"Boshida: jamal (tuya)",p:"Keyingi harfga ulanadi. Nuqtani harfni yozib bo'lgach qo'ying.",s:[[[0.4,0.22],[0.42,0.1],[0.5,0.06],[0.65,0.14],[0.82,0.23],[0.95,0.29],[0.88,0.4],[0.7,0.46],[0.5,0.55],[0.3,0.56],[0.0,0.55]],[[0.689,0.864]]]},
  {t:"O'rtasida",w:"ـجـ",x:"مجد",i:1,h:"O'rtasida: majd (shon-sharaf)",p:"Ikki tomondan ulanadi. Nuqtani harfni yozib bo'lgach qo'ying. (Yordamdagi yozish tartibi taxminiy.)",s:[[[1.0,0.56],[0.86,0.55],[0.74,0.52]],[[0.28,0.24],[0.3,0.1],[0.38,0.05],[0.5,0.08],[0.62,0.16],[0.72,0.27],[0.7,0.4],[0.62,0.5],[0.5,0.54],[0.3,0.56],[0.0,0.56]],[[0.518,0.864]]]},
  {t:"Oxirida",w:"ـج",x:"حج",i:1,h:"Oxirida: hajj (haj)",p:"Oldingi harfdan ulanib tugaydi. Nuqtani harfni yozib bo'lgach qo'ying. (Yordamdagi yozish tartibi taxminiy.)",s:[[[1.0,0.46],[0.8,0.46],[0.6,0.44]],[[0.06,0.18],[0.15,0.06],[0.3,0.07],[0.45,0.11],[0.58,0.14],[0.4,0.2],[0.28,0.27],[0.17,0.42],[0.12,0.6],[0.17,0.8],[0.3,0.93],[0.45,0.91],[0.58,0.84]],[[0.345,0.585]]]}
 ]},
 {id:"ha",ar:"ح",name:"Ha",forms:[
  {t:"Yakka",w:"ح",x:"ح",i:0,h:"Yakka ha",p:"Yozish tartibi uchun «▶ Yordam»ni bosing.",s:[[[0.09,0.17],[0.2,0.07],[0.4,0.1],[0.6,0.15],[0.8,0.18],[0.96,0.17],[0.8,0.2],[0.6,0.2],[0.4,0.22],[0.3,0.25],[0.24,0.34],[0.17,0.46],[0.15,0.6],[0.2,0.78],[0.3,0.9],[0.45,0.93],[0.7,0.9],[0.98,0.83]]]},
  {t:"Boshida",w:"حـ",x:"حمل",i:0,h:"Boshida: haml (yuk)",p:"Keyingi harfga ulanadi.",s:[[[0.4,0.33],[0.42,0.15],[0.5,0.09],[0.65,0.21],[0.82,0.345],[0.95,0.435],[0.88,0.601],[0.7,0.691],[0.5,0.826],[0.3,0.841],[0.0,0.826]]]},
  {t:"O'rtasida",w:"ـحـ",x:"سحر",i:1,h:"O'rtasida: sahar (tong)",p:"Ikki tomondan ulanadi. (Yordamdagi yozish tartibi taxminiy.)",s:[[[1.0,0.841],[0.86,0.826],[0.74,0.781]],[[0.28,0.36],[0.3,0.15],[0.38,0.075],[0.5,0.12],[0.62,0.24],[0.72,0.405],[0.7,0.601],[0.62,0.751],[0.5,0.811],[0.3,0.841],[0.0,0.841]]]},
  {t:"Oxirida",w:"ـح",x:"ريح",i:2,h:"Oxirida: rih (shamol)",p:"Oldingi harfdan ulanib tugaydi. (Yordamdagi yozish tartibi taxminiy.)",s:[[[1.0,0.46],[0.8,0.46],[0.6,0.44]],[[0.06,0.18],[0.15,0.06],[0.3,0.07],[0.45,0.11],[0.58,0.14],[0.4,0.2],[0.28,0.27],[0.17,0.42],[0.12,0.6],[0.17,0.8],[0.3,0.93],[0.45,0.91],[0.58,0.84]]]}
 ]},
 {id:"xa",ar:"خ",name:"Xa",forms:[
  {t:"Yakka",w:"خ",x:"خ",i:0,h:"Yakka xa",p:"Tepasiga bitta nuqta qo'yiladi. خ ning shakli ح bilan bir xil, faqat nuqtasi boshqacha. Yozish tartibi uchun «▶ Yordam»ni bosing.",s:[[[0.09,0.361],[0.2,0.284],[0.4,0.307],[0.6,0.346],[0.8,0.369],[0.96,0.361],[0.8,0.384],[0.6,0.384],[0.4,0.4],[0.3,0.423],[0.24,0.492],[0.17,0.584],[0.15,0.692],[0.2,0.831],[0.3,0.923],[0.45,0.946],[0.7,0.923],[0.98,0.869]],[[0.488,0.086]]]},
  {t:"Boshida",w:"خـ",x:"خبز",i:0,h:"Boshida: xubz (non)",p:"Keyingi harfga ulanadi. Nuqtani harfni yozib bo'lgach qo'ying.",s:[[[0.4,0.589],[0.42,0.479],[0.5,0.442],[0.65,0.516],[0.82,0.599],[0.95,0.654],[0.88,0.755],[0.7,0.81],[0.5,0.893],[0.3,0.902],[0.0,0.893]],[[0.62,0.132]]]},
  {t:"O'rtasida",w:"ـخـ",x:"نخل",i:1,h:"O'rtasida: naxl (palma)",p:"Ikki tomondan ulanadi. Nuqtani harfni yozib bo'lgach qo'ying. (Yordamdagi yozish tartibi taxminiy.)",s:[[[1.0,0.902],[0.86,0.893],[0.74,0.866]],[[0.28,0.608],[0.3,0.479],[0.38,0.433],[0.5,0.46],[0.62,0.534],[0.72,0.635],[0.7,0.755],[0.62,0.847],[0.5,0.884],[0.3,0.902],[0.0,0.902]],[[0.474,0.132]]]},
  {t:"Oxirida",w:"ـخ",x:"شيخ",i:2,h:"Oxirida: shayx (shayx)",p:"Oldingi harfdan ulanib tugaydi. Nuqtani harfni yozib bo'lgach qo'ying. (Yordamdagi yozish tartibi taxminiy.)",s:[[[1.0,0.588],[0.8,0.588],[0.6,0.573]],[[0.06,0.375],[0.15,0.284],[0.3,0.291],[0.45,0.322],[0.58,0.345],[0.4,0.39],[0.28,0.444],[0.17,0.558],[0.12,0.695],[0.17,0.848],[0.3,0.947],[0.45,0.931],[0.58,0.878]],[[0.315,0.09]]]}
 ]},
 {id:"dal",ar:"د",name:"Dal",forms:[
  {t:"Yakka",w:"د",x:"د",i:0,h:"Yakka dal",p:"Yozish tartibi uchun «▶ Yordam»ni bosing.",s:[[[0.47,0.22],[0.55,0.1],[0.64,0.06],[0.76,0.22],[0.87,0.45],[0.93,0.66],[0.84,0.8],[0.6,0.88],[0.32,0.88],[0.12,0.82],[0.06,0.74]]]},
  {t:"Boshida",w:"د",x:"دار",i:0,h:"Boshida: dar (uy)",p:"Keyingi harfga ulanmaydi, yakka shaklga o'xshaydi.",s:[[[0.47,0.22],[0.55,0.1],[0.64,0.06],[0.76,0.22],[0.87,0.45],[0.93,0.66],[0.84,0.8],[0.6,0.88],[0.32,0.88],[0.12,0.82],[0.06,0.74]]]},
  {t:"O'rtasida",w:"ـد",x:"بدر",i:1,h:"O'rtasida: badr (to'lin oy)",p:"Oldingi harfga ulanadi, keyingisiga ulanmaydi. (Yordamdagi yozish tartibi taxminiy.)",s:[[[0.4,0.03],[0.41,0.2],[0.46,0.42],[0.52,0.62],[0.56,0.76]],[[1.0,0.84],[0.8,0.84],[0.62,0.82],[0.5,0.85],[0.35,0.86],[0.2,0.88],[0.1,0.84],[0.06,0.74]]]},
  {t:"Oxirida",w:"ـد",x:"ولد",i:2,h:"Oxirida: valad (bola)",p:"Oldingi harfdan ulanib tugaydi. (Yordamdagi yozish tartibi taxminiy.)",s:[[[0.4,0.03],[0.41,0.2],[0.46,0.42],[0.52,0.62],[0.56,0.76]],[[1.0,0.84],[0.8,0.84],[0.62,0.82],[0.5,0.85],[0.35,0.86],[0.2,0.88],[0.1,0.84],[0.06,0.74]]]}
 ]},
 {id:"zal",ar:"ذ",name:"Zal",forms:[
  {t:"Yakka",w:"ذ",x:"ذ",i:0,h:"Yakka zal",p:"Tepasiga bitta nuqta qo'yiladi. ذ ning shakli د bilan bir xil, faqat nuqtasi boshqacha. Yozish tartibi uchun «▶ Yordam»ni bosing.",s:[[[0.47,0.47],[0.55,0.388],[0.64,0.361],[0.76,0.47],[0.87,0.626],[0.93,0.769],[0.84,0.864],[0.6,0.918],[0.32,0.918],[0.12,0.878],[0.06,0.823]],[[0.545,0.118]]]},
  {t:"Boshida",w:"ذ",x:"ذهب",i:0,h:"Boshida: zahab (oltin)",p:"Keyingi harfga ulanmaydi, yakka shaklga o'xshaydi. Nuqtani harfni yozib bo'lgach qo'ying.",s:[[[0.47,0.47],[0.55,0.388],[0.64,0.361],[0.76,0.47],[0.87,0.626],[0.93,0.769],[0.84,0.864],[0.6,0.918],[0.32,0.918],[0.12,0.878],[0.06,0.823]],[[0.545,0.118]]]},
  {t:"O'rtasida",w:"ـذ",x:"بذر",i:1,h:"O'rtasida: bazr (urug')",p:"Oldingi harfga ulanadi, keyingisiga ulanmaydi. Nuqtani harfni yozib bo'lgach qo'ying. (Yordamdagi yozish tartibi taxminiy.)",s:[[[0.4,0.341],[0.41,0.456],[0.46,0.606],[0.52,0.742],[0.56,0.837]],[[1.0,0.891],[0.8,0.891],[0.62,0.878],[0.5,0.898],[0.35,0.905],[0.2,0.918],[0.1,0.891],[0.06,0.823]],[[0.289,0.118]]]},
  {t:"Oxirida",w:"ـذ",x:"فخذ",i:2,h:"Oxirida: faxz (son)",p:"Oldingi harfdan ulanib tugaydi. Nuqtani harfni yozib bo'lgach qo'ying. (Yordamdagi yozish tartibi taxminiy.)",s:[[[0.4,0.341],[0.41,0.456],[0.46,0.606],[0.52,0.742],[0.56,0.837]],[[1.0,0.891],[0.8,0.891],[0.62,0.878],[0.5,0.898],[0.35,0.905],[0.2,0.918],[0.1,0.891],[0.06,0.823]],[[0.289,0.118]]]}
 ]},
 {id:"ra",ar:"ر",name:"Ra",forms:[
  {t:"Yakka",w:"ر",x:"ر",i:0,h:"Yakka ra",p:"Yozish tartibi uchun «▶ Yordam»ni bosing.",s:[[[0.6,0.2],[0.68,0.08],[0.78,0.1],[0.9,0.27],[0.95,0.48],[0.9,0.68],[0.75,0.84],[0.55,0.9],[0.35,0.91],[0.15,0.87],[0.05,0.82]]]},
  {t:"Boshida",w:"ر",x:"رمل",i:0,h:"Boshida: raml (qum)",p:"Keyingi harfga ulanmaydi, yakka shaklga o'xshaydi.",s:[[[0.6,0.2],[0.68,0.08],[0.78,0.1],[0.9,0.27],[0.95,0.48],[0.9,0.68],[0.75,0.84],[0.55,0.9],[0.35,0.91],[0.15,0.87],[0.05,0.82]]]},
  {t:"O'rtasida",w:"ـر",x:"برد",i:1,h:"O'rtasida: bard (sovuq)",p:"Oldingi harfga ulanadi, keyingisiga ulanmaydi. (Yordamdagi yozish tartibi taxminiy.)",s:[[[0.44,0.05],[0.42,0.18],[0.45,0.32],[0.5,0.45],[0.54,0.56]],[[1.0,0.54],[0.8,0.54],[0.62,0.55],[0.54,0.64],[0.46,0.77],[0.34,0.88],[0.2,0.9],[0.08,0.85],[0.04,0.82]]]},
  {t:"Oxirida",w:"ـر",x:"نهر",i:2,h:"Oxirida: nahr (daryo)",p:"Oldingi harfdan ulanib tugaydi. (Yordamdagi yozish tartibi taxminiy.)",s:[[[0.44,0.05],[0.42,0.18],[0.45,0.32],[0.5,0.45],[0.54,0.56]],[[1.0,0.54],[0.8,0.54],[0.62,0.55],[0.54,0.64],[0.46,0.77],[0.34,0.88],[0.2,0.9],[0.08,0.85],[0.04,0.82]]]}
 ]},
 {id:"zay",ar:"ز",name:"Zay",forms:[
  {t:"Yakka",w:"ز",x:"ز",i:0,h:"Yakka zay",p:"Tepasiga bitta nuqta qo'yiladi. ز ning shakli ر bilan bir xil, faqat nuqtasi boshqacha. Yozish tartibi uchun «▶ Yordam»ni bosing.",s:[[[0.6,0.415],[0.68,0.327],[0.78,0.342],[0.9,0.466],[0.95,0.62],[0.9,0.766],[0.75,0.883],[0.55,0.927],[0.35,0.934],[0.15,0.905],[0.05,0.868]],[[0.643,0.099]]]},
  {t:"Boshida",w:"ز",x:"زيت",i:0,h:"Boshida: zayt (moy)",p:"Keyingi harfga ulanmaydi, yakka shaklga o'xshaydi. Nuqtani harfni yozib bo'lgach qo'ying.",s:[[[0.6,0.415],[0.68,0.327],[0.78,0.342],[0.9,0.466],[0.95,0.62],[0.9,0.766],[0.75,0.883],[0.55,0.927],[0.35,0.934],[0.15,0.905],[0.05,0.868]],[[0.643,0.099]]]},
  {t:"O'rtasida",w:"ـز",x:"عزم",i:1,h:"O'rtasida: azm (qat'iyat)",p:"Oldingi harfga ulanadi, keyingisiga ulanmaydi. Nuqtani harfni yozib bo'lgach qo'ying. (Yordamdagi yozish tartibi taxminiy.)",s:[[[0.44,0.305],[0.42,0.4],[0.45,0.502],[0.5,0.598],[0.54,0.678]],[[1.0,0.663],[0.8,0.663],[0.62,0.671],[0.54,0.737],[0.46,0.832],[0.34,0.912],[0.2,0.927],[0.08,0.89],[0.04,0.868]],[[0.368,0.099]]]},
  {t:"Oxirida",w:"ـز",x:"كنز",i:2,h:"Oxirida: kanz (xazina)",p:"Oldingi harfdan ulanib tugaydi. Nuqtani harfni yozib bo'lgach qo'ying. (Yordamdagi yozish tartibi taxminiy.)",s:[[[0.44,0.305],[0.42,0.4],[0.45,0.502],[0.5,0.598],[0.54,0.678]],[[1.0,0.663],[0.8,0.663],[0.62,0.671],[0.54,0.737],[0.46,0.832],[0.34,0.912],[0.2,0.927],[0.08,0.89],[0.04,0.868]],[[0.368,0.099]]]}
 ]},
 {id:"sin",ar:"س",name:"Sin",forms:[
  {t:"Yakka",w:"س",x:"س",i:0,h:"Yakka sin",p:"Yozish tartibi uchun «▶ Yordam»ni bosing.",s:[[[0.95,0.03],[0.97,0.2],[0.95,0.36],[0.85,0.45],[0.78,0.5],[0.73,0.38],[0.73,0.2],[0.7,0.4],[0.64,0.5],[0.55,0.5],[0.5,0.42],[0.47,0.25],[0.43,0.22],[0.41,0.4],[0.46,0.6],[0.4,0.78],[0.28,0.9],[0.15,0.9],[0.08,0.78],[0.05,0.6],[0.04,0.47]]]},
  {t:"Boshida",w:"سـ",x:"سمك",i:0,h:"Boshida: samak (baliq)",p:"Keyingi harfga ulanadi. (Yordamdagi yozish tartibi taxminiy.)",s:[[[0.95,0.03],[0.93,0.25],[0.9,0.5],[0.85,0.72],[0.78,0.82],[0.7,0.78],[0.68,0.55],[0.7,0.3],[0.72,0.24],[0.66,0.5],[0.62,0.74],[0.55,0.8],[0.5,0.6],[0.48,0.4],[0.46,0.36],[0.43,0.55],[0.38,0.75],[0.3,0.82],[0.15,0.83],[0.0,0.83]]]},
  {t:"O'rtasida",w:"ـسـ",x:"نسر",i:1,h:"O'rtasida: nasr (burgut)",p:"Ikki tomondan ulanadi. (Yordamdagi yozish tartibi taxminiy.)",s:[[[1.0,0.78],[0.88,0.78],[0.76,0.7],[0.72,0.4],[0.71,0.06],[0.67,0.4],[0.64,0.7],[0.6,0.78],[0.56,0.55],[0.54,0.08],[0.52,0.4],[0.5,0.72],[0.44,0.8],[0.38,0.6],[0.36,0.2],[0.34,0.5],[0.3,0.75],[0.25,0.8],[0.0,0.78]]]},
  {t:"Oxirida",w:"ـس",x:"شمس",i:2,h:"Oxirida: shams (quyosh)",p:"Oldingi harfdan ulanib tugaydi. (Yordamdagi yozish tartibi taxminiy.)",s:[[[1.0,0.42],[0.88,0.42],[0.8,0.38],[0.75,0.2],[0.75,0.05],[0.72,0.25],[0.68,0.4],[0.62,0.45],[0.6,0.25],[0.6,0.06],[0.57,0.3],[0.53,0.45],[0.47,0.5],[0.42,0.45],[0.36,0.25],[0.33,0.08],[0.31,0.3],[0.32,0.55],[0.28,0.72],[0.2,0.88],[0.1,0.85],[0.06,0.7],[0.05,0.5],[0.06,0.4]]]}
 ]},
 {id:"shin",ar:"ش",name:"Shin",forms:[
  {t:"Yakka",w:"ش",x:"ش",i:0,h:"Yakka shin",p:"Tepasiga uchta nuqta qo'yiladi. ش ning shakli س bilan bir xil, faqat nuqtasi boshqacha. Yozish tartibi uchun «▶ Yordam»ni bosing.",s:[[[0.95,0.261],[0.97,0.39],[0.95,0.512],[0.85,0.581],[0.78,0.619],[0.73,0.527],[0.73,0.39],[0.7,0.543],[0.64,0.619],[0.55,0.619],[0.5,0.558],[0.47,0.428],[0.43,0.405],[0.41,0.543],[0.46,0.695],[0.4,0.832],[0.28,0.924],[0.15,0.924],[0.08,0.832],[0.05,0.695],[0.04,0.596]],[[0.779,0.167]],[[0.703,0.075]],[[0.632,0.184]]]},
  {t:"Boshida",w:"شـ",x:"شجر",i:0,h:"Boshida: shajar (daraxt)",p:"Keyingi harfga ulanadi. Nuqtalarni harfni yozib bo'lgach qo'ying. (Yordamdagi yozish tartibi taxminiy.)",s:[[[0.95,0.361],[0.93,0.506],[0.9,0.67],[0.85,0.815],[0.78,0.881],[0.7,0.855],[0.68,0.703],[0.7,0.539],[0.72,0.499],[0.66,0.67],[0.62,0.829],[0.55,0.868],[0.5,0.736],[0.48,0.604],[0.46,0.578],[0.43,0.703],[0.38,0.835],[0.3,0.881],[0.15,0.888],[0.0,0.888]],[[0.748,0.239]],[[0.666,0.108]],[[0.589,0.264]]]},
  {t:"O'rtasida",w:"ـشـ",x:"عشر",i:1,h:"O'rtasida: ashr (o'n)",p:"Ikki tomondan ulanadi. Nuqtalarni harfni yozib bo'lgach qo'ying. (Yordamdagi yozish tartibi taxminiy.)",s:[[[1.0,0.885],[0.88,0.885],[0.76,0.843],[0.72,0.686],[0.71,0.508],[0.67,0.686],[0.64,0.843],[0.6,0.885],[0.56,0.765],[0.54,0.519],[0.52,0.686],[0.5,0.853],[0.44,0.895],[0.38,0.791],[0.36,0.581],[0.34,0.738],[0.3,0.869],[0.25,0.895],[0.0,0.885]],[[0.574,0.239]],[[0.511,0.108]],[[0.452,0.264]]]},
  {t:"Oxirida",w:"ـش",x:"نقش",i:2,h:"Oxirida: naqsh (naqsh)",p:"Oldingi harfdan ulanib tugaydi. Nuqtalarni harfni yozib bo'lgach qo'ying. (Yordamdagi yozish tartibi taxminiy.)",s:[[[1.0,0.613],[0.88,0.613],[0.8,0.586],[0.75,0.466],[0.75,0.366],[0.72,0.499],[0.68,0.6],[0.62,0.633],[0.6,0.499],[0.6,0.373],[0.57,0.533],[0.53,0.633],[0.47,0.666],[0.42,0.633],[0.36,0.499],[0.33,0.386],[0.31,0.533],[0.32,0.7],[0.28,0.813],[0.2,0.92],[0.1,0.9],[0.06,0.8],[0.05,0.666],[0.06,0.6]],[[0.602,0.167]],[[0.542,0.075]],[[0.485,0.184]]]}
 ]},
 {id:"sod",ar:"ص",name:"Sod",forms:[
  {t:"Yakka",w:"ص",x:"ص",i:0,h:"Yakka sod",p:"Yozish tartibi uchun «▶ Yordam»ni bosing.",s:[[[0.5,0.4],[0.6,0.22],[0.7,0.1],[0.8,0.07],[0.9,0.15],[0.95,0.28],[0.92,0.4],[0.8,0.52],[0.65,0.55],[0.52,0.54],[0.47,0.4],[0.42,0.26],[0.4,0.22],[0.4,0.4],[0.43,0.6],[0.4,0.78],[0.3,0.88],[0.2,0.92],[0.1,0.85],[0.06,0.68],[0.05,0.5]]]},
  {t:"Boshida",w:"صـ",x:"صبر",i:0,h:"Boshida: sabr (sabr)",p:"Keyingi harfga ulanadi. (Yordamdagi yozish tartibi taxminiy.)",s:[[[0.5,0.62],[0.57,0.48],[0.65,0.3],[0.73,0.14],[0.8,0.06],[0.9,0.15],[0.95,0.4],[0.95,0.62],[0.88,0.8],[0.75,0.87],[0.62,0.87],[0.5,0.85],[0.46,0.65],[0.43,0.42],[0.43,0.37],[0.41,0.55],[0.38,0.75],[0.3,0.83],[0.15,0.83],[0.0,0.83]]]},
  {t:"O'rtasida",w:"ـصـ",x:"بصر",i:1,h:"O'rtasida: basar (ko'rish)",p:"Ikki tomondan ulanadi. (Yordamdagi yozish tartibi taxminiy.)",s:[[[1.0,0.83],[0.85,0.83],[0.76,0.78]],[[0.4,0.62],[0.5,0.4],[0.55,0.22],[0.6,0.07],[0.67,0.15],[0.73,0.35],[0.73,0.55],[0.68,0.75],[0.58,0.86],[0.46,0.87],[0.38,0.82],[0.35,0.66],[0.33,0.45],[0.33,0.38],[0.31,0.55],[0.29,0.72],[0.2,0.82],[0.0,0.83]]]},
  {t:"Oxirida",w:"ـص",x:"نقص",i:2,h:"Oxirida: naqs (kamchilik)",p:"Oldingi harfdan ulanib tugaydi. (Yordamdagi yozish tartibi taxminiy.)",s:[[[1.0,0.5],[0.88,0.5],[0.78,0.47]],[[0.4,0.38],[0.46,0.28],[0.53,0.12],[0.6,0.07],[0.67,0.15],[0.72,0.3],[0.7,0.4],[0.6,0.48],[0.5,0.5],[0.42,0.5],[0.38,0.45],[0.33,0.3],[0.32,0.22],[0.32,0.4],[0.35,0.58],[0.32,0.75],[0.22,0.9],[0.13,0.9],[0.07,0.75],[0.05,0.6],[0.05,0.47]]]}
 ]},
 {id:"dod",ar:"ض",name:"Dod",forms:[
  {t:"Yakka",w:"ض",x:"ض",i:0,h:"Yakka dod",p:"Tepasiga bitta nuqta qo'yiladi. ض ning shakli ص bilan bir xil, faqat nuqtasi boshqacha. Yozish tartibi uchun «▶ Yordam»ni bosing.",s:[[[0.5,0.552],[0.6,0.417],[0.7,0.328],[0.8,0.305],[0.9,0.365],[0.95,0.462],[0.92,0.552],[0.8,0.642],[0.65,0.664],[0.52,0.656],[0.47,0.552],[0.42,0.447],[0.4,0.417],[0.4,0.552],[0.43,0.701],[0.4,0.836],[0.3,0.91],[0.2,0.94],[0.1,0.888],[0.06,0.761],[0.05,0.627]],[[0.673,0.089]]]},
  {t:"Boshida",w:"ضـ",x:"ضيف",i:0,h:"Boshida: dayf (mehmon)",p:"Keyingi harfga ulanadi. Nuqtani harfni yozib bo'lgach qo'ying. (Yordamdagi yozish tartibi taxminiy.)",s:[[[0.5,0.755],[0.57,0.665],[0.65,0.549],[0.73,0.446],[0.8,0.395],[0.9,0.452],[0.95,0.614],[0.95,0.755],[0.88,0.871],[0.75,0.916],[0.62,0.916],[0.5,0.903],[0.46,0.775],[0.43,0.626],[0.43,0.594],[0.41,0.71],[0.38,0.839],[0.3,0.89],[0.15,0.89],[0.0,0.89]],[[0.652,0.126]]]},
  {t:"O'rtasida",w:"ـضـ",x:"غضب",i:1,h:"O'rtasida: g'azab (g'azab)",p:"Ikki tomondan ulanadi. Nuqtani harfni yozib bo'lgach qo'ying. (Yordamdagi yozish tartibi taxminiy.)",s:[[[1.0,0.89],[0.85,0.89],[0.76,0.858]],[[0.4,0.755],[0.5,0.614],[0.55,0.498],[0.6,0.401],[0.67,0.452],[0.73,0.581],[0.73,0.71],[0.68,0.839],[0.58,0.91],[0.46,0.916],[0.38,0.884],[0.35,0.781],[0.33,0.646],[0.33,0.601],[0.31,0.71],[0.29,0.82],[0.2,0.884],[0.0,0.89]],[[0.49,0.126]]]},
  {t:"Oxirida",w:"ـض",x:"بيض",i:2,h:"Oxirida: bayd (tuxum)",p:"Oldingi harfdan ulanib tugaydi. Nuqtani harfni yozib bo'lgach qo'ying. (Yordamdagi yozish tartibi taxminiy.)",s:[[[1.0,0.627],[0.88,0.627],[0.78,0.604]],[[0.4,0.537],[0.46,0.462],[0.53,0.343],[0.6,0.305],[0.67,0.365],[0.72,0.477],[0.7,0.552],[0.6,0.612],[0.5,0.627],[0.42,0.627],[0.38,0.589],[0.33,0.477],[0.32,0.417],[0.32,0.552],[0.35,0.686],[0.32,0.813],[0.22,0.925],[0.13,0.925],[0.07,0.813],[0.05,0.701],[0.05,0.604]],[[0.511,0.089]]]}
 ]},
 {id:"to",ar:"ط",name:"To",forms:[
  {t:"Yakka",w:"ط",x:"ط",i:0,h:"Yakka to",p:"Yozish tartibi uchun «▶ Yordam»ni bosing.",s:[[[0.38,0.66],[0.5,0.52],[0.7,0.5],[0.85,0.55],[0.95,0.63],[0.9,0.78],[0.75,0.88],[0.55,0.93],[0.35,0.93],[0.2,0.9],[0.1,0.85],[0.04,0.82]],[[0.3,0.04],[0.26,0.3],[0.29,0.5],[0.33,0.7]]]},
  {t:"Boshida",w:"طـ",x:"طين",i:0,h:"Boshida: tin (loy)",p:"Keyingi harfga ulanadi. (Yordamdagi yozish tartibi taxminiy.)",s:[[[0.45,0.66],[0.55,0.52],[0.7,0.47],[0.85,0.52],[0.95,0.63],[0.88,0.78],[0.72,0.88],[0.5,0.92],[0.3,0.91],[0.0,0.91]],[[0.43,0.04],[0.43,0.3],[0.44,0.5],[0.45,0.7]]]},
  {t:"O'rtasida",w:"ـطـ",x:"بطن",i:1,h:"O'rtasida: batn (qorin)",p:"Ikki tomondan ulanadi. (Yordamdagi yozish tartibi taxminiy.)",s:[[[1.0,0.91],[0.85,0.9],[0.76,0.82]],[[0.38,0.66],[0.47,0.52],[0.57,0.45],[0.66,0.5],[0.71,0.62],[0.66,0.78],[0.58,0.88],[0.45,0.91],[0.3,0.9],[0.0,0.91]],[[0.3,0.04],[0.27,0.3],[0.3,0.5],[0.33,0.7]]]},
  {t:"Oxirida",w:"ـط",x:"وسط",i:2,h:"Oxirida: vasat (o'rta)",p:"Oldingi harfdan ulanib tugaydi. (Yordamdagi yozish tartibi taxminiy.)",s:[[[1.0,0.9],[0.9,0.9],[0.78,0.84]],[[0.3,0.66],[0.4,0.53],[0.5,0.47],[0.6,0.5],[0.69,0.6],[0.71,0.74],[0.64,0.86],[0.5,0.92],[0.3,0.93],[0.15,0.9],[0.05,0.82]],[[0.27,0.05],[0.23,0.3],[0.26,0.5],[0.29,0.68]]]}
 ]},
 {id:"zo",ar:"ظ",name:"Zo",forms:[
  {t:"Yakka",w:"ظ",i:0,h:"Yakka zo",p:"Tepasiga bitta nuqta qo'yiladi. ظ ning shakli ط bilan bir xil, faqat nuqtasi boshqacha. Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"ظهر",i:0,h:"Boshida: zuhr (tush payti)",p:"Keyingi harfga ulanadi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"O'rtasida",w:"نظر",i:1,h:"O'rtasida: nazar (nazar)",p:"Ikki tomondan ulanadi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"Oxirida",w:"حفظ",i:2,h:"Oxirida: hifz (yodlash)",p:"Oldingi harfdan ulanib tugaydi. Nuqtani harfni yozib bo'lgach qo'ying."}
 ]},
 {id:"ayn",ar:"ع",name:"Ayn",forms:[
  {t:"Yakka",w:"ع",i:0,h:"Yakka ayn",p:"Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"عين",i:0,h:"Boshida: ayn (ko'z)",p:"Keyingi harfga ulanadi."},
  {t:"O'rtasida",w:"بعد",i:1,h:"O'rtasida: ba'd (keyin)",p:"Ikki tomondan ulanadi."},
  {t:"Oxirida",w:"سبع",i:2,h:"Oxirida: sab' (yetti)",p:"Oldingi harfdan ulanib tugaydi."}
 ]},
 {id:"gayn",ar:"غ",name:"G'ayn",forms:[
  {t:"Yakka",w:"غ",i:0,h:"Yakka g'ayn",p:"Tepasiga bitta nuqta qo'yiladi. غ ning shakli ع bilan bir xil, faqat nuqtasi boshqacha. Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"غرب",i:0,h:"Boshida: g'arb (g'arb)",p:"Keyingi harfga ulanadi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"O'rtasida",w:"بغل",i:1,h:"O'rtasida: bag'l (xachir)",p:"Ikki tomondan ulanadi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"Oxirida",w:"صبغ",i:2,h:"Oxirida: sibg' (bo'yoq)",p:"Oldingi harfdan ulanib tugaydi. Nuqtani harfni yozib bo'lgach qo'ying."}
 ]},
 {id:"fa",ar:"ف",name:"Fa",forms:[
  {t:"Yakka",w:"ف",i:0,h:"Yakka fa",p:"Tepasiga bitta nuqta qo'yiladi. Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"فيل",i:0,h:"Boshida: fil (fil)",p:"Keyingi harfga ulanadi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"O'rtasida",w:"صفر",i:1,h:"O'rtasida: sifr (nol)",p:"Ikki tomondan ulanadi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"Oxirida",w:"سيف",i:2,h:"Oxirida: sayf (qilich)",p:"Oldingi harfdan ulanib tugaydi. Nuqtani harfni yozib bo'lgach qo'ying."}
 ]},
 {id:"qof",ar:"ق",name:"Qof",forms:[
  {t:"Yakka",w:"ق",i:0,h:"Yakka qof",p:"Tepasiga ikkita nuqta qo'yiladi. Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"قمر",i:0,h:"Boshida: qamar (oy)",p:"Keyingi harfga ulanadi. Nuqtalarni harfni yozib bo'lgach qo'ying."},
  {t:"O'rtasida",w:"بقر",i:1,h:"O'rtasida: baqar (sigir)",p:"Ikki tomondan ulanadi. Nuqtalarni harfni yozib bo'lgach qo'ying."},
  {t:"Oxirida",w:"عشق",i:2,h:"Oxirida: ishq (ishq)",p:"Oldingi harfdan ulanib tugaydi. Nuqtalarni harfni yozib bo'lgach qo'ying."}
 ]},
 {id:"kof",ar:"ك",name:"Kof",forms:[
  {t:"Yakka",w:"ك",i:0,h:"Yakka kof",p:"Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"كلب",i:0,h:"Boshida: kalb (it)",p:"Keyingi harfga ulanadi."},
  {t:"O'rtasida",w:"سكر",i:1,h:"O'rtasida: sukkar (shakar)",p:"Ikki tomondan ulanadi."},
  {t:"Oxirida",w:"ملك",i:2,h:"Oxirida: malik (podshoh)",p:"Oldingi harfdan ulanib tugaydi."}
 ]},
 {id:"lam",ar:"ل",name:"Lam",forms:[
  {t:"Yakka",w:"ل",i:0,h:"Yakka lam",p:"Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"لحم",i:0,h:"Boshida: lahm (go'sht)",p:"Keyingi harfga ulanadi."},
  {t:"O'rtasida",w:"قلم",i:1,h:"O'rtasida: qalam (qalam)",p:"Ikki tomondan ulanadi."},
  {t:"Oxirida",w:"نمل",i:2,h:"Oxirida: naml (chumoli)",p:"Oldingi harfdan ulanib tugaydi."}
 ]},
 {id:"mim",ar:"م",name:"Mim",forms:[
  {t:"Yakka",w:"م",i:0,h:"Yakka mim",p:"Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"ملح",i:0,h:"Boshida: milh (tuz)",p:"Keyingi harfga ulanadi."},
  {t:"O'rtasida",w:"نمر",i:1,h:"O'rtasida: namir (bars)",p:"Ikki tomondan ulanadi."},
  {t:"Oxirida",w:"حلم",i:2,h:"Oxirida: hilm (tush)",p:"Oldingi harfdan ulanib tugaydi."}
 ]},
 {id:"nun",ar:"ن",name:"Nun",forms:[
  {t:"Yakka",w:"ن",x:"ن",i:0,h:"Yakka nun",p:"Tepasiga bitta nuqta qo'yiladi. Yozish tartibi uchun «▶ Yordam»ni bosing.",s:[[[0.9,0.24],[0.94,0.42],[0.9,0.6],[0.78,0.75],[0.6,0.84],[0.4,0.9],[0.22,0.86],[0.12,0.72],[0.08,0.52]],[[0.449,0.12]]]},
  {t:"Boshida",w:"نـ",x:"نجم",i:0,h:"Boshida: najm (yulduz)",p:"Keyingi harfga ulanadi. Nuqtani harfni yozib bo'lgach qo'ying.",s:[[[0.94,0.363],[0.93,0.652],[0.88,0.817],[0.74,0.879],[0.5,0.899],[0.25,0.899],[0.02,0.899]],[[0.794,0.126]]]},
  {t:"O'rtasida",w:"ـنـ",x:"عنب",i:1,h:"O'rtasida: inab (uzum)",p:"Ikki tomondan ulanadi. Nuqtani harfni yozib bo'lgach qo'ying.",s:[[[1.0,0.882],[0.84,0.882],[0.7,0.833],[0.63,0.675],[0.61,0.527],[0.57,0.675],[0.53,0.833],[0.4,0.892],[0.2,0.882],[0.0,0.882]],[[0.512,0.156]]]},
  {t:"Oxirida",w:"ـن",x:"لبن",i:2,h:"Oxirida: laban (sut)",p:"Oldingi harfdan ulanib tugaydi. Nuqtani harfni yozib bo'lgach qo'ying.",s:[[[1.0,0.5],[0.78,0.5],[0.64,0.46],[0.6,0.3],[0.58,0.22],[0.55,0.38],[0.52,0.58],[0.5,0.75],[0.38,0.88],[0.22,0.89],[0.1,0.76],[0.07,0.5]],[[0.291,0.12]]]}
 ]},
 {id:"he",ar:"ه",name:"He",forms:[
  {t:"Yakka",w:"ه",i:0,h:"Yakka he",p:"Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"هرم",i:0,h:"Boshida: haram (piramida)",p:"Keyingi harfga ulanadi."},
  {t:"O'rtasida",w:"سهم",i:1,h:"O'rtasida: sahm (o'q)",p:"Ikki tomondan ulanadi."},
  {t:"Oxirida",w:"وجه",i:2,h:"Oxirida: vajh (yuz)",p:"Oldingi harfdan ulanib tugaydi."}
 ]},
 {id:"vov",ar:"و",name:"Vov",forms:[
  {t:"Yakka",w:"و",i:0,h:"Yakka vov",p:"Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"ورد",i:0,h:"Boshida: vard (gul)",p:"Keyingi harfga ulanmaydi, yakka shaklga o'xshaydi."},
  {t:"O'rtasida",w:"نور",i:1,h:"O'rtasida: nur (nur)",p:"Oldingi harfga ulanadi, keyingisiga ulanmaydi."},
  {t:"Oxirida",w:"عفو",i:2,h:"Oxirida: afv (kechirim)",p:"Oldingi harfdan ulanib tugaydi."}
 ]},
 {id:"ya",ar:"ي",name:"Ya",forms:[
  {t:"Yakka",w:"ي",i:0,h:"Yakka ya",p:"Pastiga ikkita nuqta qo'yiladi. Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"يد",i:0,h:"Boshida: yad (qo'l)",p:"Keyingi harfga ulanadi. Nuqtalarni harfni yozib bo'lgach qo'ying."},
  {t:"O'rtasida",w:"ليل",i:1,h:"O'rtasida: layl (tun)",p:"Ikki tomondan ulanadi. Nuqtalarni harfni yozib bo'lgach qo'ying."},
  {t:"Oxirida",w:"علي",i:2,h:"Oxirida: Ali (ism)",p:"Oldingi harfdan ulanib tugaydi. Nuqtalarni harfni yozib bo'lgach qo'ying."}
 ]}
];
