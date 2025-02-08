const myDictionary = [
    ///////// 2018.11.09 /////////////////////////
    { rus: 'папа', heb: 'אבא', speak: 'аба', type: '' },
    { rus: 'пришёл', heb: 'בא', speak: 'ба', type: '' },
    { rus: 'отец', heb: 'אב', speak: 'ав', type: '' },
    { rus: 'спина, назад, тыл', heb: 'גב', speak: 'гев', type: '' },
    { rus: 'крыша', heb: 'גג', speak: 'гаг', type: '' },
    { rus: 'ткань, холст', heb: 'בד', speak: 'бад', type: '' },
    { rus: 'рыба', heb: 'דג', speak: 'даг', type: '' },
    //
    { rus: 'волновался', heb: 'דאג', speak: '', type: '' },
    //
    { rus: 'одежда', heb: 'בגד', speak: 'бегед', type: '' },
    { rus: 'руль', heb: 'הגה', speak: 'хеге', type: '' },
    { rus: 'любовь', heb: 'אהבה', speak: 'ахава', type: '' },
    ///////// 2018.11.10 /////////////////////////
    { rus: 'крючок', heb: 'וו', speak: 'ву (вав)', type: '' },
    { rus: 'кукла', heb: 'בובה', speak: 'буба', type: '' },
    { rus: 'одинокий', heb: 'בודד', speak: 'бодед', type: '' },
    ///////// 2018.11.11 /////////////////////////
    { rus: 'волк', heb: 'זאב', speak: 'зеев', type: '' },
    { rus: 'муха', heb: 'זבוב', speak: 'звув', type: '' },
    { rus: 'это', heb: 'זה', speak: 'зе', type: '' },
    { rus: 'золото', heb: 'זהב', speak: 'захав', type: '' },


    
    ///////// 2018.11.12 /////////////////////////
    { rus: 'милый', heb: 'חביב', speak: '', type: '' },
    { rus: 'один', heb: 'אחד', speak: '', type: '' },
    { rus: 'процент', heb: 'אחוז', speak: '', type: '' },
    { rus: 'отклонил', heb: 'דחה', speak: '', type: '' },
    ///////// 2018.11.13 /////////////////////////
    { rus: 'хорошо', heb: 'טוב', speak: '', type: '' },
    { rus: 'нитка', heb: 'חוט', speak: '', type: '' },
    { rus: 'грех', heb: 'חטא', speak: '', type: '' },
    { rus: 'грешить', heb: 'חטא', speak: '', type: '' },
    { rus: 'загадка', heb: 'חידה', speak: '', type: '' },
    { rus: 'надёжный', heb: 'בטוח', speak: '', type: '' },
    ///////// 2018.11.14 /////////////////////////
    { rus: 'рука', heb: 'יד', speak: '', type: '' },
    { rus: 'вместе', heb: 'יחד', speak: '', type: '' },
    { rus: 'друг', heb: 'ידיד', speak: '', type: '' },
    { rus: 'живой', heb: 'חי', speak: '', type: '' },
    { rus: 'зверь', heb: 'חיה', speak: '', type: '' },
    { rus: 'честь', heb: 'כבוד', speak: '', type: '' },
    { rus: 'длинный', heb: 'ארוך', speak: '', type: '' },
    ///////// 2018.11.15 /////////////////////////
    { rus: 'сердце', heb: 'לב', speak: '', type: '' },
    { rus: 'нет!', heb: 'לא', speak: '', type: '' },
    { rus: 'собака', heb: 'כלב', speak: '', type: '' },
    { rus: 'шел, путник', heb: 'הלך', speak: '', type: '' },
    { rus: 'приходить', heb: 'לבוא', speak: '', type: '' },
    { rus: 'доска, таблица', heb: 'לוח', speak: '', type: '' },
    ///////// 2018.11.16 /////////////////////////
    { rus: 'мама', heb: 'אמא', speak: '', type: '' },
    { rus: 'вода', heb: 'מים', speak: '', type: '' },
    { rus: 'мозг', heb: 'מוח', speak: '', type: '' },
    { rus: 'царь', heb: 'מלך', speak: '', type: '' },
    { rus: 'приятный', heb: 'נאה', speak: '', type: '' },
    { rus: 'белый', heb: 'לבן', speak: '', type: '' },
    { rus: 'пророк', heb: 'נביא', speak: '', type: '' },
    ///////// 2018.11.17 /////////////////////////
    { rus: 'лошадь', heb: 'סוס', speak: '', type: '' },
    { rus: 'секрет', heb: 'סוד', speak: '', type: '' },
    { rus: 'переулок', heb: 'סמטה', speak: '', type: '' },
    { rus: 'опыт', heb: 'ניסיון', speak: '', type: '' },
    { rus: 'вежливость', heb: 'נימוס', speak: '', type: '' },
    { rus: 'белка', heb: 'סנאי', speak: '', type: '' },
    { rus: 'осложнение', heb: 'סיבוך', speak: '', type: '' },
    ///////// 2018.11.18 /////////////////////////
    { rus: 'глаз', heb: 'עין', speak: '', type: '' },
    { rus: 'исчез, неизвестное', heb: 'נעלם', speak: '', type: '' },
    { rus: 'двигается', heb: 'נע', speak: '', type: '' },
    { rus: 'касается', heb: 'נוגע', speak: '', type: '' },
    { rus: 'пирог', heb: 'עוגה', speak: '', type: '' },
    { rus: 'изучение', heb: 'עיון', speak: '', type: '' },
    { rus: 'слон', heb: 'פיל', speak: '', type: '' },
    { rus: 'конец', heb: 'סוף', speak: '', type: '' },
    { rus: 'рабочий, работающий', heb: 'פועל', speak: '', type: '' },
    ///////// 2018.11.19 /////////////////////////
    { rus: 'игрушка, игрушечный', heb: 'צעצוע', speak: '', type: '' },
    { rus: 'дерево', heb: 'עץ', speak: '', type: '' },
    { rus: 'потомок', heb: 'צאצא', speak: '', type: '' },
    { rus: 'обезьяна', heb: 'קוף', speak: '', type: '' },
    { rus: 'лето, пробуждение', heb: 'קיץ', speak: 'каиц', type: '' },
    { rus: 'отрывок, сегмент', heb: 'קטע', speak: '', type: '' },
    { rus: 'место, местоположение', heb: 'מקום', speak: '', type: '' },
    { rus: 'справедливость', heb: 'צדק', speak: '', type: '' },
    { rus: 'прыгал, сустав', heb: 'קפץ', speak: '', type: '' },
    ///////// 2018.11.20 /////////////////////////
    { rus: 'хочет, хотеть', heb: 'רוצה', speak: '', type: '' },
    { rus: 'видит, зритель', heb: 'רואה', speak: '', type: '' },
    { rus: 'спокойный, штиль', heb: 'רגוע', speak: '', type: '' },
    { rus: 'ветер', heb: 'רוח', speak: '', type: '' },
    { rus: 'доход, прибыль', heb: 'רוח', speak: '', type: '' },
    { rus: 'холодный, прохлада', heb: 'קר', speak: '', type: '' },
    ///////// 2018.11.21 /////////////////////////
    { rus: 'мир, привет!', heb: 'שלום', speak: '', type: '' },
    { rus: 'стол, таблица', heb: 'שולחן', speak: '', type: '' },
    { rus: 'платье', heb: 'שמלה', speak: '', type: '' },
    { rus: 'весёлый, рад', heb: 'שמח', speak: '', type: '' },
    { rus: 'слышал, звук, слух', heb: 'שמע', speak: '', type: '' },
    ///////// 2018.11.22 /////////////////////////
    { rus: 'апельсин, оранжевый', heb: 'תפוז', speak: '', type: '' },
    { rus: 'яблоко, набухший', heb: 'תפוח', speak: '', type: '' },
    { rus: 'занятый, занято', heb: 'תפוס', speak: '', type: '' },
    { rus: 'неожиданный, удивительно', heb: 'מפתיע', speak: '', type: '' },
    { rus: 'ключ', heb: 'מפתח', speak: '', type: '' },
    { rus: 'промышленность, индустрия', heb: 'תעשיה', speak: '', type: '' },
    { rus: 'надежда', heb: 'תקוה', speak: '', type: '' },


    
    ///////// 2025.01.29 /////////////////////////
    { rus: 'эволюция', heb: 'אבולוציה', speak: 'еволюцья', type: '' },
    { rus: 'эгоизм', heb: 'אגואיזם', speak: 'егОизем', type: '' },
    { rus: 'вето', heb: 'וטו', speak: 'wето', type: '' },
    { rus: 'вектор', heb: 'וקטור', speak: 'вектОр', type: '' },
    { rus: 'свитер', heb: 'סוודר', speak: 'свЕдер', type: '' },
    { rus: 'позитив', heb: 'פוזיטיב', speak: 'позитИв', type: '' },
    { rus: 'репродукция', heb: 'רפרודוקציה', speak: 'репродУкцья', type: '' },
    { rus: 'визуальный', heb: 'ויזואלי', speak: 'визуАли', type: '' },
    { rus: 'конвенция, соглашение', heb: 'קונוונציה', speak: 'конвЕнцья', type: '' },
    { rus: 'квакер', heb: 'קוואקר', speak: 'кwакер', type: '' },
    { rus: 'авангард', heb: 'אוונגרד', speak: 'авангАрд', type: '' },
    { rus: 'индивидуальный', heb: 'אינדיבידואלי', speak: 'индивидуалИ', type: '' },
    { rus: 'инвалид, неверный', heb: 'אינווליד', speak: 'инвалИд', type: '' },
    { rus: 'инвентарь, изобретатель', heb: 'אינוונטר', speak: 'инвентАр', type: '' },
    { rus: 'изобретать', heb: 'אינוונט', speak: 'инwАнт', type: '' },
    { rus: 'эквивалент', heb: 'אקוויוולנט', speak: ''эквивалЕнт', type: '' },
    { rus: 'аквариум', heb: 'אקווריום', speak: 'акwАриум', type: '' },
    { rus: 'гравитация', heb: 'גרוויטציה', speak: 'гравитАцья', type: '' },
    { rus: 'саванна', heb: 'סוואנה', speak: 'саwАна', type: '' },
    { rus: 'сендвич', heb: "'סנדוויצ", speak: 'сендвИч', type: '' },
    { rus: 'коллектив', heb: 'קולקטיב', speak: 'колектИв', type: '' },
    { rus: 'паб', heb: 'פאב', speak: 'паб', type: '' },
    { rus: 'клуб', heb: 'קלוב', speak: 'кльуб', type: '' },
    ///////// 2025.02.03 /////////////////////////
    { rus: 'просить, требовать', heb: 'לבקש', speak: 'левакЕщ', type: '' },
    { rus: 'деревня, село', heb: 'כפר', speak: 'кфар', type: '' },
    ///////// 2025.02.06 /////////////////////////
    { rus: 'архитектор', heb: 'אדריכלית', speak: 'адрихалИт', type: '' },
    { rus: 'архитектура', heb: 'אדריכלות', speak: 'адрихальУт', type: '' },
    { rus: 'архитектор ландшафтный', heb: 'אדריכל נוף', speak: 'адрихАль ноф', type: '' },
    { rus: 'архитектура ландшафтная', heb: 'אדריכלות נוף', speak: 'адрихальУт ноф', type: '' },
    ///////// 2025.02.07 /////////////////////////
    { rus: 'число (номер)', heb: 'מספר', speak: 'миспАр', type: '' },
    { rus: 'единственный', heb: 'יחיד', speak: 'йахИд', type: 'мужской' },
    { rus: 'единственная (единица)', heb: 'יחידה', speak: 'йехидА', type: 'женский' },
    { rus: 'много (мужской)', heb: 'רבים', speak: 'рабИм', type: 'мужской' },
    { rus: 'много (женский)', heb: 'רבות', speak: 'рабОт', type: 'женский' },
    { rus: 'двойной (пара)', heb: 'זוגי', speak: 'зугИ', type: '' },
    { rus: 'род', heb: 'מין', speak: 'мин', type: '' },
    { rus: 'мужской', heb: 'זכר', speak: 'захАр', type: 'мужской' },
    { rus: 'женский', heb: 'נקבה', speak: 'некевА', type: 'женский' },
    { rus: 'ученик', heb: 'תלמיד', speak: 'тальмИд', type: 'мужской' },
    { rus: 'ученица', heb: 'תלמידה', speak: 'тальмидА', type: 'женский' },
    { rus: 'книга', heb: 'ספר', speak: 'сЕфер', type: 'мужской' },
    { rus: 'тетрадь', heb: 'מחברת', speak: 'мехабЕрет', type: 'женский' },
    { rus: 'окно', heb: 'חלון', speak: 'хальОн', type: 'мужской' },
    { rus: 'магазин', heb: 'חנות', speak: 'ханУт', type: 'женский' }
    
];

export { myDictionary };
