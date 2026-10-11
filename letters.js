/* HARFLAR RO'YXATI (28 ta harf)
   Yangi harf yoki so'z qo'shish: pastdagi shablonni nusxalab, ro'yxat oxiriga (oxirgi "]" dan oldin) qo'ying.
   Har bir harfda 4 ta forma (tab) bor:
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
  {t:'Alif',w:'ا',i:0,h:'Yakka alif',p:'Yuqoridan pastga bitta tik chiziq torting.'},
  {t:'Boshida',w:'اسد',i:0,h:'Boshida: asad (sher)',p:"Alif keyingi harfga ulanmaydi, yakka alifdek yoziladi."},
  {t:"O'rtasida",w:'باب',i:1,h:"O'rtasida: bob (eshik)",p:"Oldingi harfdan ulanadi, keyingisiga ulanmaydi."},
  {t:'Oxirida',w:'سما',i:2,h:'Oxirida: sama (osmon)',p:"Oldingi harfdan ulanib, tik ko'tariladi."}
 ]},
 {id:"ba",ar:"ب",name:"Ba",forms:[
  {t:"Yakka",w:"ب",i:0,h:"Yakka ba",p:"Pastiga bitta nuqta qo'yiladi. Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"بحر",i:0,h:"Boshida: bahr (dengiz)",p:"Keyingi harfga ulanadi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"O'rtasida",w:"حبل",i:1,h:"O'rtasida: habl (arqon)",p:"Ikki tomondan ulanadi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"Oxirida",w:"قلب",i:2,h:"Oxirida: qalb (yurak)",p:"Oldingi harfdan ulanib tugaydi. Nuqtani harfni yozib bo'lgach qo'ying."}
 ]},
 {id:"ta",ar:"ت",name:"Ta",forms:[
  {t:"Yakka",w:"ت",i:0,h:"Yakka ta",p:"Tepasiga ikkita nuqta qo'yiladi. ت ning shakli ب bilan bir xil, faqat nuqtasi boshqacha. Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"تمر",i:0,h:"Boshida: tamr (xurmo)",p:"Keyingi harfga ulanadi. Nuqtalarni harfni yozib bo'lgach qo'ying."},
  {t:"O'rtasida",w:"متر",i:1,h:"O'rtasida: mitr (metr)",p:"Ikki tomondan ulanadi. Nuqtalarni harfni yozib bo'lgach qo'ying."},
  {t:"Oxirida",w:"وقت",i:2,h:"Oxirida: vaqt (vaqt)",p:"Oldingi harfdan ulanib tugaydi. Nuqtalarni harfni yozib bo'lgach qo'ying."}
 ]},
 {id:"sa",ar:"ث",name:"Sa",forms:[
  {t:"Yakka",w:"ث",i:0,h:"Yakka sa",p:"Tepasiga uchta nuqta qo'yiladi. ث ning shakli ب bilan bir xil, faqat nuqtasi boshqacha. Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"ثمر",i:0,h:"Boshida: samar (meva)",p:"Keyingi harfga ulanadi. Nuqtalarni harfni yozib bo'lgach qo'ying."},
  {t:"O'rtasida",w:"مثل",i:1,h:"O'rtasida: misl (misol)",p:"Ikki tomondan ulanadi. Nuqtalarni harfni yozib bo'lgach qo'ying."},
  {t:"Oxirida",w:"بحث",i:2,h:"Oxirida: bahs (izlanish)",p:"Oldingi harfdan ulanib tugaydi. Nuqtalarni harfni yozib bo'lgach qo'ying."}
 ]},
 {id:"jim",ar:"ج",name:"Jim",forms:[
  {t:"Yakka",w:"ج",i:0,h:"Yakka jim",p:"Pastiga bitta nuqta qo'yiladi. ج ning shakli ح bilan bir xil, faqat nuqtasi boshqacha. Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"جمل",i:0,h:"Boshida: jamal (tuya)",p:"Keyingi harfga ulanadi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"O'rtasida",w:"مجد",i:1,h:"O'rtasida: majd (shon-sharaf)",p:"Ikki tomondan ulanadi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"Oxirida",w:"حج",i:1,h:"Oxirida: hajj (haj)",p:"Oldingi harfdan ulanib tugaydi. Nuqtani harfni yozib bo'lgach qo'ying."}
 ]},
 {id:"ha",ar:"ح",name:"Ha",forms:[
  {t:"Yakka",w:"ح",i:0,h:"Yakka ha",p:"Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"حمل",i:0,h:"Boshida: haml (yuk)",p:"Keyingi harfga ulanadi."},
  {t:"O'rtasida",w:"سحر",i:1,h:"O'rtasida: sahar (tong)",p:"Ikki tomondan ulanadi."},
  {t:"Oxirida",w:"ريح",i:2,h:"Oxirida: rih (shamol)",p:"Oldingi harfdan ulanib tugaydi."}
 ]},
 {id:"xa",ar:"خ",name:"Xa",forms:[
  {t:"Yakka",w:"خ",i:0,h:"Yakka xa",p:"Tepasiga bitta nuqta qo'yiladi. خ ning shakli ح bilan bir xil, faqat nuqtasi boshqacha. Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"خبز",i:0,h:"Boshida: xubz (non)",p:"Keyingi harfga ulanadi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"O'rtasida",w:"نخل",i:1,h:"O'rtasida: naxl (palma)",p:"Ikki tomondan ulanadi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"Oxirida",w:"شيخ",i:2,h:"Oxirida: shayx (shayx)",p:"Oldingi harfdan ulanib tugaydi. Nuqtani harfni yozib bo'lgach qo'ying."}
 ]},
 {id:"dal",ar:"د",name:"Dal",forms:[
  {t:"Yakka",w:"د",i:0,h:"Yakka dal",p:"Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"دار",i:0,h:"Boshida: dar (uy)",p:"Keyingi harfga ulanmaydi, yakka shaklga o'xshaydi."},
  {t:"O'rtasida",w:"بدر",i:1,h:"O'rtasida: badr (to'lin oy)",p:"Oldingi harfga ulanadi, keyingisiga ulanmaydi."},
  {t:"Oxirida",w:"ولد",i:2,h:"Oxirida: valad (bola)",p:"Oldingi harfdan ulanib tugaydi."}
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
  {t:"Yakka",w:"ن",i:0,h:"Yakka nun",p:"Tepasiga bitta nuqta qo'yiladi. Yozish tartibi uchun «▶ Yordam»ni bosing."},
  {t:"Boshida",w:"نجم",i:0,h:"Boshida: najm (yulduz)",p:"Keyingi harfga ulanadi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"O'rtasida",w:"عنب",i:1,h:"O'rtasida: inab (uzum)",p:"Ikki tomondan ulanadi. Nuqtani harfni yozib bo'lgach qo'ying."},
  {t:"Oxirida",w:"لبن",i:2,h:"Oxirida: laban (sut)",p:"Oldingi harfdan ulanib tugaydi. Nuqtani harfni yozib bo'lgach qo'ying."}
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
