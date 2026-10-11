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
  {t:"Yakka",w:"ج",x:"ج",i:0,h:"Yakka jim",p:"Pastiga bitta nuqta qo'yiladi. ج ning shakli ح bilan bir xil, faqat nuqtasi boshqacha. Yozish tartibi uchun «▶ Yordam»ni bosing.",s:[[[0.97,0.17],[0.75,0.18],[0.55,0.14],[0.4,0.14],[0.26,0.15],[0.2,0.3],[0.15,0.45],[0.14,0.6],[0.22,0.82],[0.42,0.93],[0.7,0.9],[0.98,0.83]],[[0.57,0.583]]]},
  {t:"Boshida",w:"جـ",x:"جمل",i:0,h:"Boshida: jamal (tuya)",p:"Keyingi harfga ulanadi. Nuqtani harfni yozib bo'lgach qo'ying. (Yordamdagi yozish tartibi taxminiy.)",s:[[[0.4,0.22],[0.42,0.1],[0.5,0.06],[0.65,0.14],[0.82,0.23],[0.95,0.29],[0.88,0.4],[0.7,0.46],[0.5,0.55],[0.3,0.56],[0.0,0.55]],[[0.689,0.864]]]},
  {t:"O'rtasida",w:"ـجـ",x:"مجد",i:1,h:"O'rtasida: majd (shon-sharaf)",p:"Ikki tomondan ulanadi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"Oxirida",w:"ـج",x:"حج",i:1,h:"Oxirida: hajj (haj)",p:"Oldingi harfdan ulanib tugaydi. Nuqtani harfni yozib bo'lgach qo'ying."}
 ]},
 {id:"ha",ar:"ح",name:"Ha",forms:[
  {t:"Yakka",w:"ح",x:"ح",i:0,h:"Yakka ha",p:"Yozish tartibi uchun «▶ Yordam»ni bosing.",s:[[[0.97,0.17],[0.75,0.18],[0.55,0.14],[0.4,0.14],[0.26,0.15],[0.2,0.3],[0.15,0.45],[0.14,0.6],[0.22,0.82],[0.42,0.93],[0.7,0.9],[0.98,0.83]]]},
  {t:"Boshida",w:"حـ",x:"حمل",i:0,h:"Boshida: haml (yuk)",p:"Keyingi harfga ulanadi. (Yordamdagi yozish tartibi taxminiy.)",s:[[[0.4,0.33],[0.42,0.15],[0.5,0.09],[0.65,0.21],[0.82,0.345],[0.95,0.435],[0.88,0.601],[0.7,0.691],[0.5,0.826],[0.3,0.841],[0.0,0.826]]]},
  {t:"O'rtasida",w:"ـحـ",x:"سحر",i:1,h:"O'rtasida: sahar (tong)",p:"Ikki tomondan ulanadi."},
  {t:"Oxirida",w:"ـح",x:"ريح",i:2,h:"Oxirida: rih (shamol)",p:"Oldingi harfdan ulanib tugaydi."}
 ]},
 {id:"xa",ar:"خ",name:"Xa",forms:[
  {t:"Yakka",w:"خ",x:"خ",i:0,h:"Yakka xa",p:"Tepasiga bitta nuqta qo'yiladi. خ ning shakli ح bilan bir xil, faqat nuqtasi boshqacha. Yozish tartibi uchun «▶ Yordam»ni bosing.",s:[[[0.97,0.361],[0.75,0.369],[0.55,0.338],[0.4,0.338],[0.26,0.346],[0.2,0.461],[0.15,0.577],[0.14,0.692],[0.22,0.861],[0.42,0.946],[0.7,0.923],[0.98,0.869]],[[0.488,0.086]]]},
  {t:"Boshida",w:"خـ",x:"خبز",i:0,h:"Boshida: xubz (non)",p:"Keyingi harfga ulanadi. Nuqtani harfni yozib bo'lgach qo'ying. (Yordamdagi yozish tartibi taxminiy.)",s:[[[0.4,0.589],[0.42,0.479],[0.5,0.442],[0.65,0.516],[0.82,0.599],[0.95,0.654],[0.88,0.755],[0.7,0.81],[0.5,0.893],[0.3,0.902],[0.0,0.893]],[[0.62,0.132]]]},
  {t:"O'rtasida",w:"ـخـ",x:"نخل",i:1,h:"O'rtasida: naxl (palma)",p:"Ikki tomondan ulanadi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"Oxirida",w:"ـخ",x:"شيخ",i:2,h:"Oxirida: shayx (shayx)",p:"Oldingi harfdan ulanib tugaydi. Nuqtani harfni yozib bo'lgach qo'ying."}
 ]},
 {id:"dal",ar:"د",name:"Dal",forms:[
  {t:"Yakka",w:"د",x:"د",i:0,h:"Yakka dal",p:"Yozish tartibi uchun «▶ Yordam»ni bosing.",s:[[[0.47,0.22],[0.55,0.1],[0.64,0.06],[0.76,0.22],[0.87,0.45],[0.93,0.66],[0.84,0.8],[0.6,0.88],[0.32,0.88],[0.12,0.82],[0.06,0.74]]]},
  {t:"Boshida",w:"د",x:"دار",i:0,h:"Boshida: dar (uy)",p:"Keyingi harfga ulanmaydi, yakka shaklga o'xshaydi.",s:[[[0.47,0.22],[0.55,0.1],[0.64,0.06],[0.76,0.22],[0.87,0.45],[0.93,0.66],[0.84,0.8],[0.6,0.88],[0.32,0.88],[0.12,0.82],[0.06,0.74]]]},
  {t:"O'rtasida",w:"ـد",x:"بدر",i:1,h:"O'rtasida: badr (to'lin oy)",p:"Oldingi harfga ulanadi, keyingisiga ulanmaydi."},
  {t:"Oxirida",w:"ـد",x:"ولد",i:2,h:"Oxirida: valad (bola)",p:"Oldingi harfdan ulanib tugaydi."}
 ]},
 {id:"zal",ar:"ذ",name:"Zal",forms:[
  {t:"Yakka",w:"ذ",i:0,h:"Yakka zal",p:"Tepasiga bitta nuqta qo'yiladi. ذ ning shakli د bilan bir xil, faqat nuqtasi boshqacha. Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"ذهب",i:0,h:"Boshida: zahab (oltin)",p:"Keyingi harfga ulanmaydi, yakka shaklga o'xshaydi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"O'rtasida",w:"بذر",i:1,h:"O'rtasida: bazr (urug')",p:"Oldingi harfga ulanadi, keyingisiga ulanmaydi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"Oxirida",w:"فخذ",i:2,h:"Oxirida: faxz (son)",p:"Oldingi harfdan ulanib tugaydi. Nuqtani harfni yozib bo'lgach qo'ying."}
 ]},
 {id:"ra",ar:"ر",name:"Ra",forms:[
  {t:"Yakka",w:"ر",i:0,h:"Yakka ra",p:"Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"رمل",i:0,h:"Boshida: raml (qum)",p:"Keyingi harfga ulanmaydi, yakka shaklga o'xshaydi."},
  {t:"O'rtasida",w:"برد",i:1,h:"O'rtasida: bard (sovuq)",p:"Oldingi harfga ulanadi, keyingisiga ulanmaydi."},
  {t:"Oxirida",w:"نهر",i:2,h:"Oxirida: nahr (daryo)",p:"Oldingi harfdan ulanib tugaydi."}
 ]},
 {id:"zay",ar:"ز",name:"Zay",forms:[
  {t:"Yakka",w:"ز",i:0,h:"Yakka zay",p:"Tepasiga bitta nuqta qo'yiladi. ز ning shakli ر bilan bir xil, faqat nuqtasi boshqacha. Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"زيت",i:0,h:"Boshida: zayt (moy)",p:"Keyingi harfga ulanmaydi, yakka shaklga o'xshaydi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"O'rtasida",w:"عزم",i:1,h:"O'rtasida: azm (qat'iyat)",p:"Oldingi harfga ulanadi, keyingisiga ulanmaydi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"Oxirida",w:"كنز",i:2,h:"Oxirida: kanz (xazina)",p:"Oldingi harfdan ulanib tugaydi. Nuqtani harfni yozib bo'lgach qo'ying."}
 ]},
 {id:"sin",ar:"س",name:"Sin",forms:[
  {t:"Yakka",w:"س",i:0,h:"Yakka sin",p:"Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"سمك",i:0,h:"Boshida: samak (baliq)",p:"Keyingi harfga ulanadi."},
  {t:"O'rtasida",w:"نسر",i:1,h:"O'rtasida: nasr (burgut)",p:"Ikki tomondan ulanadi."},
  {t:"Oxirida",w:"شمس",i:2,h:"Oxirida: shams (quyosh)",p:"Oldingi harfdan ulanib tugaydi."}
 ]},
 {id:"shin",ar:"ش",name:"Shin",forms:[
  {t:"Yakka",w:"ش",i:0,h:"Yakka shin",p:"Tepasiga uchta nuqta qo'yiladi. ش ning shakli س bilan bir xil, faqat nuqtasi boshqacha. Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"شجر",i:0,h:"Boshida: shajar (daraxt)",p:"Keyingi harfga ulanadi. Nuqtalarni harfni yozib bo'lgach qo'ying."},
  {t:"O'rtasida",w:"عشر",i:1,h:"O'rtasida: ashr (o'n)",p:"Ikki tomondan ulanadi. Nuqtalarni harfni yozib bo'lgach qo'ying."},
  {t:"Oxirida",w:"نقش",i:2,h:"Oxirida: naqsh (naqsh)",p:"Oldingi harfdan ulanib tugaydi. Nuqtalarni harfni yozib bo'lgach qo'ying."}
 ]},
 {id:"sod",ar:"ص",name:"Sod",forms:[
  {t:"Yakka",w:"ص",i:0,h:"Yakka sod",p:"Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"صبر",i:0,h:"Boshida: sabr (sabr)",p:"Keyingi harfga ulanadi."},
  {t:"O'rtasida",w:"بصر",i:1,h:"O'rtasida: basar (ko'rish)",p:"Ikki tomondan ulanadi."},
  {t:"Oxirida",w:"نقص",i:2,h:"Oxirida: naqs (kamchilik)",p:"Oldingi harfdan ulanib tugaydi."}
 ]},
 {id:"dod",ar:"ض",name:"Dod",forms:[
  {t:"Yakka",w:"ض",i:0,h:"Yakka dod",p:"Tepasiga bitta nuqta qo'yiladi. ض ning shakli ص bilan bir xil, faqat nuqtasi boshqacha. Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"ضيف",i:0,h:"Boshida: dayf (mehmon)",p:"Keyingi harfga ulanadi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"O'rtasida",w:"غضب",i:1,h:"O'rtasida: g'azab (g'azab)",p:"Ikki tomondan ulanadi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"Oxirida",w:"بيض",i:2,h:"Oxirida: bayd (tuxum)",p:"Oldingi harfdan ulanib tugaydi. Nuqtani harfni yozib bo'lgach qo'ying."}
 ]},
 {id:"to",ar:"ط",name:"To",forms:[
  {t:"Yakka",w:"ط",i:0,h:"Yakka to",p:"Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"طين",i:0,h:"Boshida: tin (loy)",p:"Keyingi harfga ulanadi."},
  {t:"O'rtasida",w:"بطن",i:1,h:"O'rtasida: batn (qorin)",p:"Ikki tomondan ulanadi."},
  {t:"Oxirida",w:"وسط",i:2,h:"Oxirida: vasat (o'rta)",p:"Oldingi harfdan ulanib tugaydi."}
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
