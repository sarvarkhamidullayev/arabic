/* HARFLAR RO'YXATI
   Yangi harf qo'shish: pastdagi ro'yxatning oxiriga (oxirgi "]" dan oldin) yangi blok nusxalab qo'ying.
   Har bir harfda 2-4 ta "forma" bo'ladi (tablar).
     t  - tab nomi              w - mashq qilinadigan so'z yoki harf (arabcha)
     i  - so'zdagi harfning tartib raqami (0 dan boshlanadi, o'ngdan emas, arabcha matndagi tartib)
     h  - sarlavha              p  - qisqa maslahat
   Qolgani (kulrang qolip, yozib ko'rsatish, tekshirish) avtomatik ishlaydi.

   SHABLON:
   ,{id:'ta',ar:'ت',name:'Ta',forms:[
     {t:'Yakka',w:'ت',i:0,h:'Yakka ta',p:'...'},
     {t:'Boshida',w:'...',i:0,h:'Boshida: ...',p:'...'},
     {t:"O'rtasida",w:'...',i:1,h:"O'rtasida: ...",p:'...'},
     {t:'Oxirida',w:'...',i:2,h:'Oxirida: ...',p:'...'}
   ]}
*/
window.LETTERS=[
 {id:'alif',ar:'ا',name:'Alif',forms:[
  {t:'Alif',w:'ا',i:0,h:'Yakka alif',p:'Yuqoridan pastga bitta tik chiziq torting.'},
  {t:'Boshida',w:'اسد',i:0,h:'Boshida: asad (sher)',p:"Alif keyingi harfga ulanmaydi, yakka alifdek yoziladi."},
  {t:"O'rtasida",w:'باب',i:1,h:"O'rtasida: bob (eshik)",p:"Oldingi harfdan ulanadi, keyingisiga ulanmaydi."},
  {t:'Oxirida',w:'سما',i:2,h:'Oxirida: sama (osmon)',p:"Oldingi harfdan ulanib, tik ko'tariladi."}
 ]},
 {id:'ba',ar:'ب',name:'Ba',forms:[
  {t:'Yakka',w:'ب',i:0,h:'Yakka ba',p:"Idish shaklida o'ngdan chapga yoziladi, tagiga bitta nuqta qo'yiladi."},
  {t:'Boshida',w:'بحر',i:0,h:'Boshida: bahr (dengiz)',p:"Keyingi harfga ulanadi: qisqa chiziq, tagida bitta nuqta."},
  {t:"O'rtasida",w:'حبل',i:1,h:"O'rtasida: habl (arqon)",p:"Ikki tomondan ulanadi: kichik tish, tagida bitta nuqta."},
  {t:'Oxirida',w:'درب',i:2,h:"Oxirida: darb (yo'l)",p:"Oldingi harfdan ulanib, idish shaklida tugaydi. Nuqtani oxirida qo'ying."}
 ]}
];
