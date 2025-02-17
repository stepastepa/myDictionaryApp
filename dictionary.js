const myDictionary = [
    ///////// 2018.11.09 /////////////////////////
    { rus: 'папа', heb: 'אַבָּא', speak: 'Аба', type: 'мужской' },
    { rus: 'пришёл', heb: 'בָּא', speak: 'ба', type: 'мужской' },
    { rus: 'пришла', heb: 'בָּאָה', speak: 'баА', type: 'женский' },
    { rus: 'отец', heb: 'אָב', speak: 'ав', type: 'мужской' },
    { rus: 'спина, назад, тыл, спинка (стула)', heb: 'גַּב', speak: 'гав', type: 'мужской' },
    { rus: 'крыша', heb: 'גַּג', speak: 'гаг', type: 'мужской' },
    { rus: 'ткань, холст, материя, ветка (редко используется)', heb: 'בַּד', speak: 'бад', type: 'мужской' },
    { rus: 'рыба', heb: 'דָּג', speak: 'даг', type: 'мужской' },
    { rus: 'беспокоится, переживать', heb: 'דָּאַג', speak: 'дАаг', type: 'инфинитив' },
    { rus: 'одежда', heb: 'בֶּגֶד', speak: 'бЭгэд', type: 'мужской' },
    { rus: 'руль, управлять (глагол)', heb: 'הֶגֶה', speak: 'хЭгэ', type: 'мужской' },
    { rus: 'любовь', heb: 'אַהֲבָה', speak: 'ахавА', type: 'женский' },
    
    ///////// 2018.11.10 /////////////////////////
    { rus: 'крючок', heb: 'וּו', speak: 'ву', type: 'мужской' },
    { rus: 'кукла', heb: 'בּוּבָה', speak: 'бувА', type: 'женский' },
    { rus: 'одинокий, изолированный', heb: 'בּוֹדֵד', speak: 'бодЭд', type: 'мужской' },
    { rus: 'одинокая, изолированная', heb: 'בּוֹדֵדָה', speak: 'бодЭда', type: 'женский' },
    
    ///////// 2018.11.11 /////////////////////////
    { rus: 'волк', heb: 'זֶאֶב', speak: 'зЭэв', type: 'мужской' },
    { rus: 'муха', heb: 'זְבוֹב', speak: 'звОв', type: 'мужской' },
    { rus: 'это (мужское)', heb: 'זֶה', speak: 'зэ', type: 'мужской' },
    { rus: 'это (женское)', heb: 'זוֹ', speak: 'зо', type: 'женский' },
    { rus: 'золото', heb: 'זָהָב', speak: 'заhАв', type: 'мужской' },
    
    ///////// 2018.11.12 /////////////////////////
    { rus: 'милый, любезный', heb: 'חָבִיב', speak: 'хавИв', type: 'мужской' },
    { rus: 'милая, любезная', heb: 'חֲבִיבָה', speak: 'хавивА', type: 'женский' },
    { rus: 'один', heb: 'אֶחָד', speak: 'эхАд', type: 'мужской' },
    { rus: 'одна', heb: 'אַחַת', speak: 'ахАт', type: 'женский' },
    { rus: 'процент, захват, поглощение', heb: 'אֲחוּז', speak: 'ахУз', type: 'мужской' },
    { rus: 'отклонил', heb: 'דָּחָה', speak: 'дахА', type: 'мужской' },
    { rus: 'отклонила', heb: 'דָּחָה', speak: 'дахА', type: 'женский' },
    
    ///////// 2018.11.13 /////////////////////////
    { rus: 'хороший, добрый', heb: 'טוֹב', speak: 'тОв', type: 'мужской' },
    { rus: 'хорошая, добрая', heb: 'טוֹבָה', speak: 'товА', type: 'женский' },
    { rus: 'нитка, шнур, провод', heb: 'חוּט', speak: 'хУт', type: 'мужской' },
    { rus: 'грех, ошибка', heb: 'חֵטְא', speak: 'хЭт', type: 'мужской' },
    { rus: 'согрешил, сделал ошибку', heb: 'חָטָא', speak: 'хатА', type: 'мужской (прошедшее)' },
    { rus: 'согрешила, сделала ошибку', heb: 'חָטְאָה', speak: "хат'А", type: 'женский (прошедшее)' },
    { rus: 'загадка, головоломка', heb: 'חִידָה', speak: 'хідА', type: 'женский' },
    { rus: 'надёжный, уверенный, безопасный', heb: 'בָּטוּחַ', speak: 'батУах', type: 'мужской' },
    { rus: 'надёжная, уверенная, безопасная', heb: 'בָּטוּחָה', speak: 'бтухА', type: 'женский' },
    
    ///////// 2018.11.14 /////////////////////////
    { rus: 'рука', heb: 'יָד', speak: 'яд', type: 'женский' },
    { rus: 'руки (несколько)', heb: 'יָדַיִם', speak: 'ядАйм', type: 'женский' },
    { rus: 'вместе', heb: 'יַחַד', speak: 'йАхад', type: '-' },
    { rus: 'друг, приятель', heb: 'יָדִיד', speak: 'йадИд', type: 'мужской' },
    { rus: 'подруга, приятельница', heb: 'יְדִידָה', speak: 'йедидА', type: 'женский' },
    { rus: 'живой, живёт', heb: 'חַי', speak: 'хАй', type: 'мужской' },
    { rus: 'живая, живёт (она), животное', heb: 'חַיָּה', speak: 'хайА', type: 'женский' },
    { rus: 'животное (общее название)', heb: 'חַיָּה', speak: 'хайА', type: 'женский' },
    { rus: 'честь, уважение, почёт', heb: 'כָּבוֹד', speak: 'кавОд', type: 'мужской' },
    { rus: 'длинный, протяжённый', heb: 'אָרוֹךְ', speak: 'арОх', type: 'мужской' },
    { rus: 'длинная, протяжённая', heb: 'אָרוּכָּה', speak: 'арухА', type: 'женский' },
    
    ///////// 2018.11.15 /////////////////////////
    { rus: 'сердце', heb: 'לֵב', speak: 'лЭв', type: 'мужской' },
    { rus: 'нет, не', heb: 'לֹא', speak: 'льО', type: '-' },
    { rus: 'собака', heb: 'כֶּלֶב', speak: 'кЭлэв', type: 'мужской' },
    { rus: 'шёл, путник', heb: 'הָלַךְ', speak: 'хАлах', type: 'мужской' },
    { rus: 'шла, путница', heb: 'הֲלָכָה', speak: 'халАха', type: 'женский' },
    { rus: 'прийти, приходить', heb: 'לָבוֹא', speak: 'лавО', type: 'инфинитив' },
    { rus: 'доска, планшет, таблица', heb: 'לוֹחַ', speak: 'лОах', type: 'мужской' },
    
    ///////// 2018.11.16 /////////////////////////
    { rus: 'мама', heb: 'אִמָּא', speak: 'Има', type: 'женский' },
    { rus: 'вода', heb: 'מַיִם', speak: 'мАим', type: 'множество' },
    { rus: 'мозг', heb: 'מוֹחַ', speak: 'мОах', type: 'мужской' },
    { rus: 'царь', heb: 'מֶלֶךְ', speak: 'мЭлэх', type: 'мужской' },
    { rus: 'красивая, привлекательная', heb: 'נָאָה', speak: 'нАа', type: 'женский' },
    { rus: 'красивый, привлекательный', heb: 'נָאֶה', speak: 'наЭ', type: 'мужской' },
    { rus: 'белый, был выяснен', heb: 'לָבָן', speak: 'лавАн', type: 'мужской' },
    { rus: 'белая, кирпич, луна', heb: 'לְבָנָה', speak: 'лэванА', type: 'женский' },
    { rus: 'пророк (он)', heb: 'נָבִיא', speak: 'навИ', type: 'мужской' },
    { rus: 'пророчица', heb: 'נְבִיאָה', speak: 'нэвиА', type: 'женский' },
    
    ///////// 2018.11.17 /////////////////////////
    { rus: 'конь, лошадь (самец)', heb: 'סוּס', speak: 'сУс', type: 'мужской' },
    { rus: 'конь, кобыла (самка)', heb: 'סוּסָה', speak: 'сусА', type: 'женский' },
    { rus: 'тайна, секрет', heb: 'סוֹד', speak: 'сОд', type: 'мужской' },
    { rus: 'переулок, тесная улочка', heb: 'סִמְטָה', speak: 'симтА', type: 'женский' },
    { rus: 'опыт, испытание, попытка (одна)', heb: 'נִסָּיוֹן', speak: 'нісайОн', type: 'мужской' },
    { rus: 'опыты, испытания, попытки (несколько)', heb: 'נִסְיוֹנוֹת', speak: 'нісйонОт', type: 'мужской' },
    { rus: 'вежливость, тактичность', heb: 'נִימוּס', speak: 'нимУс', type: 'мужской' },
    { rus: 'белка (самец)', heb: 'סְנַאי', speak: 'снАй', type: 'мужской' },
    { rus: 'белка (самка), улитка', heb: 'סְנָאִית', speak: 'снАіт', type: 'женский' },
    { rus: 'беда, осложнение, запутанность', heb: 'סִיבּוּךְ', speak: 'сибУх', type: 'мужской' },
    
    ///////// 2018.11.18 /////////////////////////
    { rus: 'глаз, источник воды', heb: 'עַיִן', speak: 'Аін', type: 'женский' },
    { rus: 'исчезнувший, пропавший, неизвестный', heb: 'נַעְלָם', speak: 'нэАлам', type: 'мужской' },
    { rus: 'исчезнувшая, пропавшая, неизвестная', heb: 'נַעֲלְמָה', speak: 'нэАльма', type: 'женский' },
    { rus: 'двигался, передвигался', heb: 'נַע', speak: 'нА', type: 'мужской (прошедшее)' },
    { rus: 'двигалась, передвигалась', heb: 'נַעֲה', speak: 'нАа', type: 'женский (прошедшее)' },
    { rus: 'касающийся, трогающий', heb: 'נֹגֵעַ', speak: 'нОгэа', type: 'мужской' },
    { rus: 'касающаяся, трогающая', heb: 'נוֹגַעַת', speak: 'ногАат', type: 'женский' },
    { rus: 'торт, пирог', heb: 'עוּגָה', speak: 'угА', type: 'женский' },
    { rus: 'изучение, анализ, обзор', heb: 'עִיוּן', speak: 'ійУн', type: 'мужской' },
    { rus: 'слон', heb: 'פִּיל', speak: 'пИль', type: 'мужской' },
    { rus: 'конец, окончание', heb: 'סוֹף', speak: 'сОф', type: 'мужской' },
    { rus: 'работник, деятель, глагол (в грамматике)', heb: 'פוֹעַל', speak: 'фОаль', type: 'мужской' },
    
    ///////// 2018.11.19 /////////////////////////
    { rus: 'игрушка', heb: 'צַעְצוּעַ', speak: 'цаацУа', type: 'мужской' },
    { rus: 'игрушки', heb: 'צַעֲצוּעִים', speak: 'цаацуИм', type: 'мужской' },
    { rus: 'дерево', heb: 'עֵץ', speak: 'Эц', type: 'мужской' },
    { rus: 'потомок (мужской)', heb: 'צֶאצָא', speak: 'цэцА', type: 'мужской' },
    { rus: 'потомок (женский)', heb: 'צֶאצָאִית', speak: 'цэцаИт', type: 'женский' },
    { rus: 'обезьяна', heb: 'קוֹף', speak: 'кОф', type: 'мужской' },
    { rus: 'лето, пробуждение', heb: 'קַיִץ', speak: 'кАиц', type: 'мужской' },
    { rus: 'отрывок, отрезок, сегмент, эпизод, фрагмент, абзац', heb: 'קֶטַע', speak: 'кЭта', type: 'мужской' },
    { rus: 'место, пространство', heb: 'מָקוֹם', speak: 'макОм', type: 'мужской' },
    { rus: 'места, пространства (много)', heb: 'מְקוֹמוֹת', speak: 'мэкомОт', type: 'мужской' },
    { rus: 'справедливость, правосудие', heb: 'צֶדֶק', speak: 'цЭдек', type: 'мужской' },
    { rus: 'прыгнул', heb: 'קָפַץ', speak: 'кафАц', type: 'мужской (прошедшее)' },
    { rus: 'прыгнула', heb: 'קָפְצָה', speak: 'кафцА', type: 'женский (прошедшее)' },
    
    ///////// 2018.11.20 /////////////////////////
    { rus: 'хочет, хотеть (мужской)', heb: 'רוֹצֶה', speak: 'роцЭ', type: 'мужской' },
    { rus: 'хочет, хотеть (женский)', heb: 'רוֹצָה', speak: 'роцА', type: 'женский' },
    { rus: 'вижу, смотрю (мужской)', heb: 'רוֹאֶה', speak: 'роЭ', type: 'мужской' },
    { rus: 'вижу, смотрю (женский)', heb: 'רוֹאָה', speak: 'роА', type: 'женский' },
    { rus: 'спокойный, тихий', heb: 'רָגֻעַ', speak: 'рагУа', type: 'мужской' },
    { rus: 'спокойная, тихая', heb: 'רְגוּעָה', speak: 'рэгуА', type: 'женский' },
    { rus: 'ветер, душа', heb: 'רוּח', speak: 'рУУх', type: 'женский' },
    { rus: 'доход, прибыль', heb: 'רֶוַח', speak: 'рЭвах', type: 'мужской' },
    { rus: 'холодный, холод', heb: 'קַר', speak: 'кАр', type: 'мужской' },
    { rus: 'холодная, холод', heb: 'קָרָה', speak: 'карА', type: 'женский' },
    
    ///////// 2018.11.21 /////////////////////////
    { rus: 'мир, привет, прощание', heb: 'שָלוֹם', speak: 'шалОм', type: 'мужской' },
    { rus: 'стол, таблица', heb: 'שֻלְחָן', speak: 'шульхАн', type: 'мужской' },
    { rus: 'столы, таблицы (много)', heb: 'שֻלְחָנוֹת', speak: 'шульханОт', type: 'мужской' },
    { rus: 'платье', heb: 'שִמְלָה', speak: 'щімэлА', type: 'женский' },
    { rus: 'весёлый, рад', heb: 'שָׂמֵחַ', speak: 'самЭах', type: 'мужской' },
    { rus: 'весёлая, рада', heb: 'שְׂמֵחָה', speak: 'смэхА', type: 'женский' },
    { rus: 'слышать, услышать', heb: 'לִשְׁמוֹעַ', speak: 'ліщмОа', type: 'инфинитив' },
    { rus: 'слышал, услышал', heb: 'שָמַע', speak: 'щамА', type: 'мужской (прошедшее)' },
    { rus: 'слышала, услышала', heb: 'שָמְעָה', speak: 'щамъА', type: 'женский (прошедшее)' },
    
    ///////// 2018.11.22 /////////////////////////
    { rus: 'апельсин, оранжевый', heb: 'תַּפּוּז', speak: 'тапУз', type: 'мужской' },
    { rus: 'апельсины (много), сладости', heb: 'תַּפּוּזִים', speak: 'тапузІм', type: 'мужской' },
    { rus: 'яблоко, набухший', heb: 'תַּפּוּחַ', speak: 'тапУах', type: 'мужской' },
    { rus: 'яблоки (много), отёчность', heb: 'תַּפּוּחִים', speak: 'тапухІм', type: 'мужской' },
    { rus: 'занятый, пойманный', heb: 'תָּפוּס', speak: 'тафУс', type: 'мужской' },
    { rus: 'занятая, пойманная', heb: 'תְּפוּסָה', speak: 'тфусА', type: 'женский' },
    { rus: 'неожиданный, удивительный, поразительный', heb: 'מַפְתִּיעַ', speak: 'мафтИйа', type: 'мужской' },
    { rus: 'неожиданная, удивительная, поразительная', heb: 'מַפְתִּיעָה', speak: 'мафтійА', type: 'женский' },
    { rus: 'ключ', heb: 'מַפְתֵּחַ', speak: 'мафтЭах', type: 'мужской' },
    { rus: 'промышленность, индустрия', heb: '(תעשייה) תַּעֲשִׂיָּה', speak: 'таасийА', type: 'женский' },
    { rus: 'надежда', heb: 'תִּקְוָה', speak: 'тиквА', type: 'женский' },

    ///////// 2025.01.20 /////////////////////////
    { rus: 'стоит того, имеет смысл, выгодный, рекомендуется', heb: 'כְּדַאִי', speak: 'кэдайИ', type: '-' },
    { rus: 'программа, план, проект', heb: 'תָּכְנִית', speak: 'тахнИт', type: 'женский' },
    { rus: 'программы, планы, проекты (много)', heb: 'תָּכְנִיּוֹת', speak: 'тахнийОт', type: 'женский' },
    { rus: 'корабль, судно', heb: '(אונייה) אֻנִיָּה', speak: '(онийА) унИйа', type: 'женский' },
    { rus: 'базар, рынок', heb: 'שׁוּק', speak: 'щук', type: 'мужской' },
    { rus: 'базары, рынки (много)', heb: 'שׁוּקִים', speak: 'щукИм', type: 'мужской' },
    { rus: 'число, номер', heb: 'מִסְפָּר', speak: 'міспАр', type: 'мужской' },
    { rus: 'парикмахер', heb: 'מַסְפֵּר', speak: 'маспЭр', type: 'мужской' },
    { rus: 'ось, петля (дверная), посол, дипломат', heb: 'צִיר', speak: 'цір', type: 'мужской' },
    { rus: 'птица', heb: 'צִפּוֹר', speak: 'ціпОр', type: 'женский' },
    { rus: 'птицы (много)', heb: 'צִפּוֹרוֹת', speak: 'ціпорОт', type: 'женский' },
    { rus: 'очередь, срок, стадо (животных)', heb: 'תּוֹר', speak: 'тор', type: 'мужской' },
    { rus: 'очереди, сроки, стада (много)', heb: 'תּוֹרוֹת', speak: 'торОт', type: 'мужской' },
    { rus: 'всё, весь, целый, всё остальное', heb: 'הַכֹּל', speak: 'hакОль', type: '-' },
    { rus: 'полдень, обед', heb: '(צהריים) צָהֳרַיִם', speak: 'цаhорАім', type: 'всегда множественное' },
    { rus: 'яйцо', heb: 'בֵּיצָה', speak: 'бэйцА', type: 'женский' },
    { rus: 'яйца (много)', heb: 'בֵּיצִים', speak: 'бэйцИм', type: 'женский' },
    { rus: 'о тебе (к мужчине)', heb: 'עָלֶיךָ', speak: 'алЭха', type: '-' },
    { rus: 'о тебе (к женщине)', heb: 'עָלֵיךְ', speak: 'алЭйіх', type: '-' },
    { rus: 'правда, истина', heb: 'אֱמֶת', speak: 'эмЭт', type: 'женский' },
    { rus: 'мальчик, подросток', heb: 'נַעַר', speak: 'нАар', type: 'мужской' },
    { rus: 'мальчики, подростоки (много)', heb: 'נְעָרִים', speak: 'нэарИм', type: 'мужской' },
    { rus: 'преступление, нарушение, переход, переправа', heb: 'עֲבֵירָה', speak: 'авЭйра', type: 'женский' },
    
    ///////// 2025.01.25 /////////////////////////
    { rus: 'азия', heb: 'אָסִיָּה', speak: 'Асія', type: 'женский' },
    { rus: 'октябрь', heb: 'אוֹקְטוֹבֶּר', speak: 'октОбэр', type: 'мужской' },
    { rus: 'победитель', heb: 'ווִינֵר', speak: 'вІнэр', type: 'мужской' },
    { rus: 'победители (много), сосиски', heb: 'ווִינֵרִים', speak: 'вінэрІм', type: 'мужской' },
    { rus: 'физика', heb: 'פִיזִיקָה', speak: 'фІзіка', type: 'женский' },
    { rus: 'театр', heb: 'תֵּיאַטְרוֹן', speak: 'тэатрОн', type: 'мужской' },
    { rus: 'театры (много)', heb: 'תֵּיאַטְרוֹנִים', speak: 'тэатронІм', type: 'мужской' },
    { rus: 'математика', heb: 'מָתֵמָטִיקָה', speak: 'матэмАтіка', type: 'женский' },
    { rus: 'кафедра', heb: 'קתדרה (כַּתֶּדְרָה)', speak: 'катэдрА', type: 'женский' },
    
    ///////// 2025.01.28 /////////////////////////
    { rus: 'салат', heb: 'סלט', speak: 'салАт', type: 'мужской' },
    { rus: 'шампанское', heb: 'שמפניה', speak: 'шампАнія', type: 'женский' },
    { rus: 'автобус', heb: 'אוטובוס', speak: 'Отобус', type: 'мужской' },
    { rus: 'шовинизм', heb: 'שוביניזם', speak: 'шовинИзэм', type: 'мужской' },
    { rus: 'цивилизация', heb: 'ציוויליזציה', speak: 'цівилизАція', type: 'женский' },
    { rus: 'рапорт, отчёт', heb: 'רפורט', speak: 'рапОрт', type: 'мужской' },
    { rus: 'карамель', heb: 'קרמל', speak: 'карамЭль', type: 'мужской' },
    { rus: 'репертуар', heb: 'רפרטואר', speak: 'рэпэртуАр', type: 'мужской' },
    { rus: 'реформа', heb: 'רפורמה', speak: 'рэфОрма', type: 'женский' },
    { rus: 'рецепт', heb: 'רצפט', speak: 'рэцЭпт', type: 'мужской' },
    { rus: 'ремонт', heb: 'רמונט', speak: 'рэмОнт', type: 'мужской' },
    { rus: 'флора', heb: 'פלורה', speak: 'флОра', type: 'женский' },
    { rus: 'целлюлоза', heb: 'צלולוזה', speak: 'цэлюлозА', type: '' },
    { rus: 'фонетика', heb: 'פונטיקה', speak: 'фонЭтика', type: '' },
    { rus: 'шок', heb: 'שוק', speak: 'шок', type: '' },
    { rus: 'комунна', heb: 'קומונה', speak: 'комУна', type: '' },
    { rus: 'керамика', heb: 'קרמיקה', speak: 'кэрАмика', type: '' },
    { rus: 'эмбарго', heb: 'אמברגו', speak: 'эмбАрго', type: '' },
    { rus: 'эпизод', heb: 'אפיזוד', speak: 'эпизОд', type: '' },
    { rus: 'эстетика', heb: 'אסתטיקה', speak: 'эстЭтика', type: '' },
    { rus: 'террор', heb: 'טרור', speak: 'терОр', type: '' },
    { rus: 'инсулин', heb: 'אינסולין', speak: 'инсулИн', type: '' },
    { rus: 'идиллия', heb: 'אידיליה', speak: 'идИлія', type: '' },
    { rus: 'агроном', heb: 'אגרונום', speak: 'агронОм', type: '' },
    { rus: 'демократия', heb: 'דמוקרטיה', speak: 'дэмокрАтія', type: '' },
    { rus: 'инфляция', heb: 'אינפלציה', speak: 'инфлЯція', type: '' },
    { rus: 'одеколон', heb: 'אודקולון', speak: 'одэкольОн', type: '' },
    { rus: 'депрессия', heb: 'דפרסיה', speak: 'дэпрэсія', type: '' },
    { rus: 'инстинкт', heb: 'אינסטינקט', speak: 'инстИнкэт', type: '' },
    { rus: 'халтура', heb: 'חלטורה', speak: 'хальтУра', type: '' },
    { rus: 'алгебра', heb: 'אלגברה', speak: 'альгэбрА', type: '' },
    { rus: 'элемент', heb: 'אלמנט', speak: 'элэмЕнт', type: '' },
    { rus: 'альбом', heb: 'אלבום', speak: 'альбОм', type: '' },
    { rus: 'инфекция', heb: 'אינפקציה', speak: 'инфЭкція', type: '' },
    { rus: 'автономия', heb: 'אוטונומיה', speak: 'отонОмія', type: '' },
    { rus: 'ислам', heb: 'אסלאם', speak: 'ислАм', type: '' },
    { rus: 'атлас', heb: 'אטלס', speak: 'Атлас', type: '' },
    { rus: 'имитация', heb: 'אימיטציה', speak: 'имитацІя', type: '' },
    { rus: 'администратор', heb: 'אדמיניסטרטור', speak: 'администратОр', type: '' },
    { rus: 'атом, герметичный, непрозрачный', heb: 'אטום', speak: 'атОм', type: '' },
    { rus: 'изоляция', heb: 'איזולציה', speak: 'изоляцІя', type: '' },
    { rus: 'инкогнито', heb: 'אינקוגניטו', speak: 'инкогнитО', type: '' },
    { rus: 'алтьтернатива', heb: 'אלטרנטיבה', speak: 'альтернатИва', type: '' },
    { rus: 'ирония', heb: 'אירוניה', speak: 'ирОнія', type: '' },
    { rus: 'алкоголь', heb: 'אלכוהול', speak: 'Алькохоль', type: '' },
    { rus: 'аллергия', heb: 'אלרגיה', speak: 'альЭргія', type: '' },
    { rus: 'монолог', heb: 'מונולוג', speak: 'монольОг', type: '' },
    { rus: 'графомания', heb: 'גרפומניה', speak: 'графомАнія', type: '' },
    { rus: 'хулиган', heb: 'חוליגן', speak: 'хулигАн', type: '' },
    { rus: 'дилетант', heb: 'דילטנט', speak: 'дильэтАнт', type: '' },
    
    ///////// 2025.01.29 /////////////////////////
    { rus: 'эволюция', heb: 'אבולוציה', speak: 'эволЮція', type: '' },
    { rus: 'эгоизм', heb: 'אגואיזם', speak: 'эгоИзэм', type: '' },
    { rus: 'вето', heb: 'וטו', speak: 'wЕто', type: '' },
    { rus: 'вектор', heb: 'וקטור', speak: 'вэктОр', type: '' },
    { rus: 'свитер', heb: 'סוודר', speak: 'свЭдэр', type: '' },
    { rus: 'позитив', heb: 'פוזיטיב', speak: 'позитИв', type: '' },
    { rus: 'репродукция', heb: 'רפרודוקציה', speak: 'репродУкція', type: '' },
    { rus: 'визуальный', heb: 'ויזואלי', speak: 'визуАлі', type: '' },
    { rus: 'конвенция, соглашение', heb: 'קונוונציה', speak: 'конвЭнція', type: '' },
    { rus: 'авангард', heb: 'אוונגרד', speak: 'авангАрд', type: '' },
    { rus: 'индивидуальный', heb: 'אינדיבידואלי', speak: 'индивидуАлі', type: '' },
    { rus: 'инвалид, неверный', heb: 'אינווליד', speak: 'инвальИд', type: '' },
    { rus: 'инвентарь, изобретатель', heb: 'אינוונטר', speak: 'инвэнтАр', type: '' },
    { rus: 'изобретать', heb: 'אינוונט', speak: 'инwАнт', type: '' },
    { rus: 'эквивалент', heb: 'אקוויוולנט', speak: 'эквивальЭнт', type: '' },
    { rus: 'аквариум', heb: 'אקווריום', speak: 'акwАриум', type: '' },
    { rus: 'гравитация', heb: 'גרוויטציה', speak: 'гравитАція', type: '' },
    { rus: 'саванна', heb: 'סוואנה', speak: 'саwАна', type: '' },
    { rus: 'сендвич', heb: "'סנדוויצ", speak: 'сэндвИч', type: '' },
    { rus: 'коллектив', heb: 'קולקטיב', speak: 'кольэктИв', type: '' },
    { rus: 'паб', heb: 'פאב', speak: 'паб', type: '' },
    { rus: 'клуб', heb: 'קלוב', speak: 'кльуб', type: '' },

    ///////// 2025.02.02 /////////////////////////
    { rus: 'бакалея', heb: 'מכולת', speak: 'макОльэт', type: '' },
    { rus: 'овсяная каша', heb: 'שיבולת שועל', speak: 'щибОлэт щуАль', type: '' },
    { rus: 'овсяные хлопья', heb: 'קוואקר', speak: 'кwAкэр', type: '' },
    { rus: 'лисица', heb: 'שועל', speak: 'щуАль', type: '' },
    
    ///////// 2025.02.03 /////////////////////////
    { rus: 'просить, требовать', heb: 'לבקש', speak: 'льэвакЭщ', type: '' },
    { rus: 'деревня, село', heb: 'כפר', speak: 'кфар', type: '' },
    
    ///////// 2025.02.06 /////////////////////////
    { rus: 'архитектор', heb: 'אדריכלית', speak: 'адрихалИт', type: '' },
    { rus: 'архитектура', heb: 'אדריכלות', speak: 'адрихальУт', type: '' },
    { rus: 'архитектор ландшафтный', heb: 'אדריכל נוף', speak: 'адрихАль ноф', type: '' },
    { rus: 'архитектура ландшафтная', heb: 'אדריכלות נוף', speak: 'адрихальУт ноф', type: '' },
    
    ///////// 2025.02.07 /////////////////////////
    { rus: 'число (номер)', heb: 'מספר', speak: 'миспАр', type: '' },
    { rus: 'единственный', heb: 'יחיד', speak: 'йахИд', type: 'мужской' },
    { rus: 'единственная (единица)', heb: 'יחידה', speak: 'йэхидА', type: 'женский' },
    { rus: 'много (мужской)', heb: 'רבים', speak: 'рабИм', type: 'мужской' },
    { rus: 'много (женский)', heb: 'רבות', speak: 'рабОт', type: 'женский' },
    { rus: 'двойной (пара)', heb: 'זוגי', speak: 'зугИ', type: '' },
    { rus: 'род', heb: 'מין', speak: 'мин', type: '' },
    { rus: 'мужской', heb: 'זכר', speak: 'захАр', type: 'мужской' },
    { rus: 'женский', heb: 'נקבה', speak: 'нэкэвА', type: 'женский' },
    { rus: 'ученик', heb: 'תלמיד', speak: 'тальмИд', type: 'мужской' },
    { rus: 'ученица', heb: 'תלמידה', speak: 'тальмидА', type: 'женский' },
    { rus: 'книга', heb: 'ספר', speak: 'сЭфэр', type: 'мужской' },
    { rus: 'тетрадь', heb: 'מחברת', speak: 'мэхабЭрэт', type: 'женский' },
    { rus: 'окно', heb: 'חלון', speak: 'хальОн', type: 'мужской' },
    { rus: 'магазин', heb: 'חנות', speak: 'ханУт', type: 'женский' }
];

export { myDictionary };
