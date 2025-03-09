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
    { rus: 'любовь', heb: 'אַהֲבָה', speak: 'аhавА', type: 'женский' },
    
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

    ///////// 2025.01.18 /////////////////////////
    { rus: 'буква, символ, знак', heb: 'אוֹת', speak: 'от', type: 'женский' },
    { rus: 'буквы (много)', heb: 'אוֹתִיּוֹת', speak: 'отійОт', type: 'женский' },
    { rus: 'символы, знаки (много)', heb: 'אוֹתוֹת', speak: 'отОт', type: 'женский' },
    { rus: 'конец, окончание', heb: 'סוֹף', speak: 'сОф', type: 'мужской' },
    { rus: 'конечный', heb: 'סוֹפִי', speak: 'софІ', type: 'мужской' },
    { rus: 'конечная', heb: 'סוֹפִית', speak: 'софІт', type: 'женский' },
    { rus: 'конечные', heb: 'סוֹפִיּוֹת', speak: 'софійОт', type: 'множественное' },
    { rus: 'конечная буква', heb: 'אוֹת סוֹפִית', speak: 'от софІт', type: 'женский' },
    { rus: 'конечные буквы', heb: 'אוֹתִיּוֹת סוֹפִיּוֹת', speak: 'отійОт софійОт', type: 'женский' },
    { rus: 'надо, нужно, должен', heb: 'צָרִיךְ', speak: 'царІх', type: 'мужской' },
    { rus: 'надо, нужно, должна', heb: 'צְרִיכָה', speak: 'цріхА', type: 'женский' },
    { rus: 'пословица', heb: 'פִּתְגָּם', speak: 'пітгАм', type: 'мужской' },
    { rus: 'да', heb: 'כֵּן', speak: 'кЭн', type: 'нейтральный' },
    { rus: 'кибуц', heb: 'קִיבּוּץ', speak: 'кібУц', type: 'мужской' },
    { rus: 'министр', heb: 'שַׂר', speak: 'сАр', type: 'мужской' },
    { rus: 'петь', heb: 'לָשִׁיר', speak: 'лащІр', type: 'инфинитив' },
    { rus: 'поёт', heb: 'שָׁר', speak: 'щАр', type: 'мужской (настоящее)' },
    
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
    { rus: 'магазин, продуктовая лавка, бакалея', heb: 'מַכּוֹלֶת', speak: 'макОльэт', type: 'женский' },
    { rus: 'овсянка', heb: 'שיבולת שועל', speak: 'щибОлэт щуАль', type: 'женский' },
    { rus: 'колос (злака)', heb: '(שִׁבֹּלֶת) שיבולת', speak: 'щибОлэт', type: 'женский' },
    { rus: 'лис (самец)', heb: 'שׁוּעָל', speak: 'щуАль', type: 'мужской' },
    { rus: 'лисица (самка)', heb: 'שׁוּעָלָה', speak: 'щуалА', type: 'женский' },
    { rus: 'овсяные хлопья', heb: 'קוואקר', speak: 'кwAкэр', type: 'мужской' },
    
    ///////// 2025.02.03 /////////////////////////
    { rus: 'просить, требовать, запрашивать', heb: 'לְבַקֵּשׁ', speak: 'льэвакЭщ', type: 'инфинитив' },
    { rus: 'деревня, поселение', heb: 'כְּפָר', speak: 'кфАр', type: 'мужской' },
    
    ///////// 2025.02.06 /////////////////////////
    { rus: 'архитектор', heb: 'אדריכלית', speak: 'адрихалИт', type: '' },
    { rus: 'архитектура', heb: 'אדריכלות', speak: 'адрихальУт', type: '' },
    { rus: 'архитектор ландшафтный', heb: 'אדריכל נוף', speak: 'адрихАль ноф', type: '' },
    { rus: 'архитектура ландшафтная', heb: 'אדריכלות נוף', speak: 'адрихальУт ноф', type: '' },
    
    ///////// 2025.02.07 /////////////////////////
    { rus: 'число (номер)', heb: 'מִסְפָּר', speak: 'миспАр', type: 'мужской' },
    { rus: 'единственный', heb: 'יָחִיד', speak: 'йахИд', type: 'мужской' },
    { rus: 'единственная (единица)', heb: 'יְחִידָה', speak: 'йэхидА', type: 'женский' },
    { rus: 'много (мужской), многочисленные', heb: 'רַבִּים', speak: 'рабИм', type: 'мужской' },
    { rus: 'много (женский), многочисленные', heb: 'רַבּוֹת', speak: 'рабОт', type: 'женский' },
    { rus: 'двойной, парный, чётный', heb: 'זוּגִי', speak: 'зугИ', type: 'мужской' },
    { rus: 'двойная, парная, чётная', heb: 'זוּגִית', speak: 'зугИт', type: 'женский' },
    { rus: 'пара (мужской)', heb: 'זוּג', speak: 'зУг', type: 'мужской' },
    { rus: 'пара (женский)', heb: 'זּוּגוֹת', speak: 'зугОт', type: 'женский' },
    { rus: 'род, пол, вид', heb: 'מִין', speak: 'мин', type: '-' },
    { rus: 'мужской пол', heb: 'זָכָר', speak: 'захАр', type: 'мужской' },
    { rus: 'женский пол', heb: 'נְקֵבָה', speak: 'нэкэвА', type: 'женский' },
    { rus: 'ученик', heb: 'תַּלְמִיד', speak: 'тальмИд', type: 'мужской' },
    { rus: 'ученица', heb: 'תַּלְמִידָה', speak: 'тальмидА', type: 'женский' },
    { rus: 'книга', heb: 'סֵפֶר', speak: 'сЭфэр', type: 'мужской' },
    { rus: 'книги (много)', heb: 'סְפָרִים', speak: 'сфарИм', type: 'мужской' },
    { rus: 'тетрадь', heb: 'מַחְבֶּרֶת', speak: 'мэхабЭрэт', type: 'женский' },
    { rus: 'окно', heb: 'חַלּוֹן', speak: 'хальОн', type: 'мужской' },
    { rus: 'магазин', heb: 'חֲנוּת', speak: 'ханУт', type: 'женский' },

    ///////// 2025.02.19 /////////////////////////
    { rus: 'стул', heb: 'כִּיסֵּא', speak: 'кісЭ', type: 'мужской' },
    { rus: 'кресло', heb: 'כּוּרסָה', speak: 'курсА', type: 'женский' },
    { rus: 'диван', heb: 'סַפָּה', speak: 'сапА', type: 'женский' },
    { rus: 'кровать', heb: 'מִיטָה', speak: 'мітА', type: 'женский' },
    { rus: 'табурет, крыльцо, веранда', heb: 'שְׁרַפרַף', speak: 'щрафрАф', type: 'мужской' },
    { rus: 'табуреты (много)', heb: 'שְׁרַפרָפִים', speak: 'щрафрапИм', type: 'мужской' },
    { rus: 'сумка, портфель, рюкзак', heb: 'תִּיק', speak: 'тік', type: 'мужской' },
    { rus: 'профессия, специальность, предмет (в школе)', heb: 'מִקְצוֹעַ', speak: 'мікцОа', type: 'мужской' },
    { rus: 'профессии, специальности, предметы (в школе), фрагменты', heb: 'מִקְצוֹעוֹת', speak: 'мікцоОт', type: 'мужской' },
    { rus: 'цвет, краска', heb: 'צֶבַע', speak: 'цэвА', type: 'мужской' },
    { rus: 'цвета, краски', heb: 'צְבָעִים', speak: 'цваІм', type: 'мужской' },
    { rus: 'инструмент, посудина, фигура (шахматная)', heb: 'כְּלִי', speak: 'клі', type: 'мужской' },
    { rus: 'инструменты, посуда, фигуры (шахматные)', heb: 'כֵּלִים', speak: 'кэлІм', type: 'мужской' },
    { rus: 'фрукт, плод', heb: 'פְּרִי', speak: 'прі', type: 'мужской' },
    { rus: 'фрукты, плоды (много)', heb: 'פֵּרוֹת', speak: 'пэрОт', type: 'мужской' },

    ///////// 2025.02.20 /////////////////////////
    { rus: 'репатриант', heb: 'עוֹלֶה', speak: 'олЭ', type: 'мужской' },
    { rus: 'репатриантка', heb: 'עוֹלָה', speak: 'олА', type: 'женский' },
    { rus: 'лист (растения, дерева)', heb: 'עָלֶה', speak: 'алЭ', type: 'мужской' },
    { rus: 'договор, контракт', heb: 'חוֹזֶה', speak: 'хозЭ', type: 'мужской' },
    { rus: 'договоры, контракты', heb: 'חוֹזִים', speak: 'хозИм', type: 'мужской' },
    { rus: 'грудь, грудная клетка', heb: 'חָזֶה', speak: 'хазЭ', type: 'мужской' },
    { rus: 'груди, грудные клетки', heb: 'חָזוֹת', speak: 'хазОт', type: 'мужской' },
    { rus: 'учитель', heb: 'מוֹרֶה', speak: 'морЭ', type: 'мужской' },
    { rus: 'учительница', heb: 'מוֹרָה', speak: 'морА', type: 'женский' },
    { rus: 'учители', heb: 'מוֹרִים', speak: 'морИм', type: 'мужской' },
    { rus: 'учительницы', heb: 'מוֹרוֹת', speak: 'морОт', type: 'женский' },

    ///////// 2025.02.21 /////////////////////////
    { rus: 'счётчик', heb: 'מוֹנֶה', speak: 'монЭ', type: 'мужской' },
    { rus: 'дедушка', heb: 'סַבָּא', speak: 'сАба', type: 'мужской' },
    { rus: 'дедушки и бабушки', heb: 'סַבָּאִים', speak: 'сабаИм', type: 'мужской' },
    { rus: 'армия', heb: 'צָבָא', speak: 'цавА', type: 'мужской' },
    { rus: 'армии (несколько)', heb: 'צְבָאוֹת', speak: 'цваОт', type: 'мужской' },
    { rus: 'жажда, испытывающий жажду', heb: 'צָמֵא', speak: 'цамЭ', type: 'мужской' },
    { rus: 'испытывающая жажду', heb: 'צְמֵאָה', speak: 'цмэА', type: 'женский' },
    { rus: 'трава, газон, лужайка, зелень', heb: 'דֶּשֶׁא', speak: 'дЭщэ', type: 'мужской' },
    { rus: 'травы, газоны, лужайки, зелень (много)', heb: 'דְּשָׁאִים', speak: 'дэщаИм', type: 'мужской' },

    ///////// 2025.02.23 /////////////////////////
    { rus: 'хлеб', heb: 'לֶחֶם', speak: 'лЭхэм', type: 'мужской' },
    { rus: 'хлеб (много)', heb: 'לְחָמִים', speak: 'лэхамИм', type: 'мужской' },
    { rus: 'молоко', heb: 'חָלָב', speak: 'хальАв', type: 'мужской' },
    { rus: 'молоко (много)', heb: 'חֲלָבִים', speak: 'хальавИм', type: 'мужской' },
    { rus: 'вино', heb: 'יַיִן', speak: 'йАін', type: 'мужской' },
    { rus: 'вина (много)', heb: 'יֵינוֹת', speak: 'йэінОт', type: 'мужской' },
    { rus: 'голубь, голубка', heb: 'יוֹנָה', speak: 'йонА', type: 'женский' },
    { rus: 'голуби (самцы)', heb: 'יוֹנִים', speak: 'йонИм', type: 'мужской' },
    { rus: 'голуби (самки)', heb: 'יוֹנוֹת', speak: 'йонОт', type: 'женский' },

    ///////// 2025.02.24 /////////////////////////
    { rus: 'Извините, простите', heb: 'סְלִיחָה', speak: 'сліхА', type: 'женский' },
    { rus: 'Спасибо', heb: 'תּוֹדָה', speak: 'тодА', type: 'женский' },
    { rus: 'Пожалуйста', heb: 'בְּבַקָּשָׁה', speak: 'бэвакащА', type: 'женский' },
    { rus: 'Где ...?', heb: 'אֵיפֹה', speak: 'Эйфо', type: '-' },
    { rus: 'Сколько ...?', heb: 'כַּמָּה', speak: 'кАма', type: '-' },
    { rus: 'Что ...?', heb: 'מַה', speak: 'мА', type: '-' },

    ///////// 2025.02.25 /////////////////////////
    { rus: 'опора, поддержка', heb: 'תּוֹמֵךְ', speak: 'томЭх', type: 'мужской' },
    { rus: 'поддерживать, подпирать', heb: 'לִתְמוֹךְ', speak: 'літмОх', type: 'инфинитив' },
    
    ///////// 2025.02.26 /////////////////////////
    { rus: 'тёплый, гарячий, свёкр, тесть, хам', heb: 'חַם', speak: 'хАм', type: 'мужской' },
    { rus: 'я', heb: 'אני', speak: 'анИ', type: 'местоимение' },
    { rus: 'ты', heb: 'אתה / את', speak: 'атА / ат', type: 'местоимение' },
    { rus: 'вы', heb: 'אתם / אתן', speak: 'атЭм / атЭн', type: 'местоимение' },
    { rus: 'мы', heb: 'אנחנו', speak: 'анАхну', type: 'местоимение' },
    { rus: 'он', heb: 'הוא', speak: 'hу', type: 'местоимение' },
    { rus: 'она', heb: 'היא', speak: 'hи', type: 'местоимение' },
    { rus: 'они', heb: 'הם / הן', speak: 'hем / hен', type: 'местоимение' },

    ///////// 2025.02.27 /////////////////////////
    { rus: 'любит (он)', heb: 'אוֹהֵב', speak: 'охЭв', type: 'мужской' },
    { rus: 'любит (она)', heb: 'אוֹהֶבֶת', speak: 'охэвЭт', type: 'женский' },
    { rus: 'король', heb: 'מֶלֶךְ', speak: 'мЭлэх', type: 'мужской' },
    { rus: 'короли (много)', heb: 'מְלָכִים', speak: 'мэлахИм', type: 'мужской' },
    { rus: 'королева', heb: 'מַלְכָּה', speak: 'малькА', type: 'женский' },
    { rus: 'ест (он), еда', heb: 'אוֹכֵל', speak: 'Охэль', type: 'мужской' },
    { rus: 'ест (она)', heb: 'אוֹכֶלֶת', speak: 'охЭлэт', type: 'женский' },
    { rus: 'идёт (он)', heb: 'הוֹלֵךְ', speak: 'холЭх', type: 'мужской' },
    { rus: 'идёт (она)', heb: 'הוֹלֶכֶת', speak: 'холЭхэт', type: 'женский' },
    { rus: 'вижу, видит (он)', heb: 'רוֹאֶה', speak: 'роЭ', type: 'мужской' },
    { rus: 'вижу, видит (она)', heb: 'רוֹאָה', speak: 'роА', type: 'женский' },
    { rus: 'мальчик', heb: 'יֶלֶד', speak: 'йЭлэд', type: 'мужской' },
    { rus: 'дети (смесь), мальчики', heb: 'יְלָדִים', speak: 'йэладИм', type: 'мужской' },
    { rus: 'девочка', heb: 'יַלְדָּה', speak: 'йэльдА', type: 'женский' },
    { rus: 'девочки (много)', heb: 'יְלָדוֹת', speak: 'йэладОт', type: 'женский' },
    { rus: 'мужчина', heb: 'גֶּבֶר', speak: 'гЭвэр', type: 'мужской' },
    { rus: 'мужчины (много)', heb: 'גְּבָרִים', speak: 'гварИм', type: 'мужской' },
    { rus: 'женщина', heb: 'אִישָׁה', speak: 'ищА', type: 'женский' },
    { rus: 'женщины (много)', heb: 'נָשִׁים', speak: 'нащИм', type: 'женский' },
    { rus: 'дорога, путь', heb: 'דֶּרֶךְ', speak: 'дЭрэх', type: 'женский' },
    { rus: 'радостный, весёлый', heb: 'שָׂמֵחַ', speak: 'самЭах', type: 'мужской' },
    { rus: 'радостная, весёлая', heb: 'שְׂמֵחָה', speak: 'смэхА', type: 'женский' },
    { rus: 'радорстные, весёлые (мужчины)', heb: 'שְׂמֵחִים', speak: 'смехИм', type: 'мужской' },
    { rus: 'радорстные, весёлые (женщины)', heb: 'שְׂמֵחוֹת', speak: 'смехОт', type: 'женский' },
    { rus: 'грузовик', heb: 'מַשָּׂאִית', speak: 'масаИт', type: 'женский' },
    { rus: 'грузовики (много)', heb: 'מַשָּׂאִיּוֹת', speak: 'масайОт', type: 'женский' },
    { rus: 'пьёт (он)', heb: 'שׁוֹתֶה', speak: 'щотЭ', type: 'мужской' },
    { rus: 'пьёт (она)', heb: 'שׁוֹתָה', speak: 'щотА', type: 'женский' },
    { rus: 'это (он)', heb: 'זֶה', speak: 'зэ', type: 'мужской' },
    { rus: 'это (она)', heb: 'זֹאת', speak: 'зот', type: 'женский' },
    { rus: 'рис', heb: 'אוֹרֶז', speak: 'Орэз', type: 'мужской' },
    { rus: 'орех', heb: 'אֱגוֹז', speak: 'эгОз', type: 'мужской' },
    { rus: 'орехи (много)', heb: 'אֱגוֹזִים', speak: 'эгозИм', type: 'мужской' },

    ///////// 2025.02.28 /////////////////////////
    { rus: 'хочет (он)', heb: 'רוֹצֶה', speak: 'роцЭ', type: 'мужской' },
    { rus: 'хочет (она)', heb: 'רוֹצָה', speak: 'роцА', type: 'женский' },

    ///////// 2025.03.01 /////////////////////////
    { rus: 'апельсин', heb: 'תַּפּוּז', speak: 'тапУз', type: 'мужской' },
    { rus: 'апельсины (много)', heb: 'תַּפּוּזִים', speak: 'тапузИм', type: 'мужской' },
    { rus: 'яблоко', heb: 'תַּפּוּחַ', speak: 'тапУах', type: 'мужской' },
    { rus: 'яблоки (много)', heb: 'תַּפּוּחִים', speak: 'тапухИм', type: 'мужской' },
    { rus: 'радость, удовольствие', heb: 'כֵּיף', speak: 'кЭф', type: 'мужской' },
    { rus: 'красивый', heb: 'יָפֶה', speak: 'йафЭ', type: 'мужской' },
    { rus: 'красивая', heb: 'יָפָה', speak: 'йафА', type: 'женский' },
    { rus: 'сладкий', heb: 'מָתוֹק', speak: 'матОк', type: 'мужской' },
    { rus: 'сладкая', heb: 'מְתוּקָה', speak: 'мэтукА', type: 'женский' },
    { rus: 'читает (он)', heb: 'קוֹרֵא', speak: 'корЭ', type: 'мужской' },
    { rus: 'читает (она)', heb: 'קוֹרֵאת', speak: 'корЭт', type: 'женский' },
    { rus: 'персик', heb: 'אֲפַרְסֵק', speak: 'афарсЭк', type: 'мужской' },
    { rus: 'персики (много)', heb: 'אֲפַרְסֵקִים', speak: 'афарсэкИм', type: 'мужской' },
    { rus: 'курица, птица', heb: 'עוף', speak: 'оф', type: 'мужской' },
    { rus: 'курицы, птицы', heb: 'עוֹפוֹת', speak: 'офОт', type: 'мужской' },
    { rus: 'торт, пирог', heb: 'עוּגָה', speak: 'угА', type: 'женский' },
    { rus: 'торты, пироги', heb: 'עוּגוֹת', speak: 'угОт', type: 'женский' },
    { rus: 'плохой, злой', heb: 'רַע', speak: 'рА', type: 'мужской' },
    { rus: 'плохая, злая', heb: 'רָעָה', speak: 'раА', type: 'женский' },
    { rus: 'грустный, печальный', heb: 'עַצּוּב', speak: 'ацУв', type: 'мужской' },
    { rus: 'грустная, печальная', heb: 'עַצּוּבָה', speak: 'ацувА', type: 'женский' },
    { rus: 'газета', heb: 'עִיתּוֹן', speak: 'итОн', type: 'мужской' },
    { rus: 'газеты (много)', heb: 'עִיתּוֹנִים', speak: 'итонИм', type: 'мужской' },
    { rus: 'сок', heb: 'מִיץ', speak: 'миц', type: 'мужской' },
    { rus: 'соки (много)', heb: 'מִיצִים', speak: 'мицИм', type: 'мужской' },
    { rus: 'кислый', heb: 'חָמוּץ', speak: 'хамУц', type: 'мужской' },
    { rus: 'кислая', heb: 'חָמוּצָה', speak: 'хамуцА', type: 'женский' },
    { rus: 'вкусный', heb: 'טָעִים', speak: 'таИм', type: 'мужской' },
    { rus: 'вкусная', heb: 'טְעִימָה', speak: 'тэймА', type: 'женский' },

    ///////// 2025.03.02 /////////////////////////
    { rus: 'Как вы? (он)', heb: 'מָה שְׁלוֹמְךָ', speak: 'ма щломхА', type: 'мужской' },
    { rus: 'Как вы? (она)', heb: 'מָה שְׁלוֹמֵךְ', speak: 'ма щломЭх', type: 'женский' },
    { rus: 'Как дела?', heb: 'מָה נִּשְׁמָע', speak: 'ма нищмА', type: 'мужской/женский' },
    { rus: 'Спасибо', heb: 'תּוֹדָה', speak: 'тодА', type: '-' },
    { rus: 'До свидания', heb: 'לְהִתְרָאוֹת', speak: 'леhитраОт', type: '-' },
    { rus: 'Что происходит?', heb: 'מָה קּוֹרֶה', speak: 'ма корЭ', type: '-' },

    ///////// 2025.03.03 /////////////////////////
    { rus: 'утро', heb: '(בֹּקֶר) בוקר', speak: 'бОкэр', type: 'мужской' },
    { rus: 'полдень', heb: 'צָהֳרַיִם', speak: 'цаhорАим', type: 'множественное' },
    { rus: 'вечер', heb: 'עֶרֶב', speak: 'Эрэв', type: 'мужской' },
    { rus: 'ночь', heb: 'לַיְלָה', speak: 'лАйла', type: 'мужской' },
    { rus: 'доброе утро', heb: 'בוקר טוֹב', speak: 'бОкэр тов', type: '-' },
    { rus: 'добрый день (полдень)', heb: 'צָהֳרַיִם טוֹבִים', speak: 'цаhорАим товИм', type: 'множественное' },
    { rus: 'доброго вечера', heb: 'עֶרֶב טוֹב', speak: 'Эрэв тов', type: '-' },
    { rus: 'доброй ночи', heb: 'לַיְלָה טוֹב', speak: 'лАйла тов', type: '-' },
    { rus: 'возможно, может быть', heb: 'אוּלַי', speak: 'ульАй', type: '-' },
    { rus: 'хорошо, ладно, ОК', heb: 'בְּסֵדֶר', speak: 'бэсЭдэр', type: '-' },
    { rus: 'извините, простите', heb: 'סְלִיחָה', speak: 'сліхА', type: '-' },
    { rus: 'пожалуйста', heb: 'בְּבַקָּשָׁה', speak: 'бєвакашА', type: '-' },
    { rus: 'не за что', heb: 'אֵין בְּעַד מָה', speak: 'эн бэАд ма', type: '-' },

    ///////// 2025.03.04 /////////////////////////
    { rus: 'Ты в порядке? (к мужчине)', heb: 'אַתָּה בְּסֵדֶר', speak: 'атА бэсЭдэр', type: 'мужской' },
    { rus: 'Ты в порядке? (к женщине)', heb: 'אַתְּ בְּסֵדֶר', speak: 'ат бэсЭдэр', type: 'женский' },
    { rus: 'говорить, разговаривать', heb: 'לְדַבֵּר', speak: 'лэдабЭр', type: 'инфинитив' },
    { rus: 'говорит (он)', heb: 'מְדַבֵּר', speak: 'мэдабЭр', type: 'мужской' },
    { rus: 'говорит (она)', heb: 'מְדַבֶּרֶת', speak: 'мэдабЭрэт', type: 'женский' },
    { rus: 'наслаждайся, enjoy (он)', heb: 'תֵּהָנֶה', speak: 'таhАнэ', type: 'мужской' },
    { rus: 'наслаждайся, enjoy (она)', heb: 'תֵּהָנִי', speak: 'тэhанИ', type: 'женский' },
    { rus: 'наслаждайтесь, enjoy (группа)', heb: 'תִּהֱנוּ', speak: 'тіhэнУ', type: 'множественное' },
    { rus: 'спасибо большое', heb: 'תּוֹדָה רַבָּה', speak: 'тодА рабА', type: '-' },
    { rus: 'поздравляю', heb: 'מַזָּל טוֹב', speak: 'мазАль тОв', type: '-' },
    { rus: 'приятного аппетита', heb: 'בְּתֵיאָבוֹן', speak: 'бэтэавОн', type: '-' },
    { rus: 'удачи, успехов', heb: 'בְּהַצְלָחָה', speak: 'бэhацлахА', type: '-' },

    ///////// 2025.03.05 /////////////////////////
    { rus: 'Добро пожаловать! (к мужчине)', heb: 'בָּרוּךְ הַבָּא', speak: 'барУх hабА', type: 'мужской' },
    { rus: 'Добро пожаловать! (к женщине)', heb: 'בְּרוּכָה הַבָּאָה', speak: 'бърухА hабаА', type: 'женский' },
    { rus: 'Добро пожаловать! (к группе мужчин или смешанной)', heb: 'ברוכים הבאים', speak: 'брухИм hабаИм', type: 'множественное' },
    { rus: 'Добро пожаловать! (к группе женщин)', heb: 'ברוכות הבאות', speak: 'брухИм hабаОт', type: 'множественное женское' },
    { rus: 'наслаждается, enjoying (он)', heb: 'נֶהֱנֶה', speak: 'нэhэнэ', type: 'мужской' },
    { rus: 'наслаждается, enjoying (она)', heb: 'הֱנֵית / נֶהֱנָה', speak: 'нэhэнА / hэнЭт', type: 'женский' },
    { rus: 'наслаждаются, enjoying (много муж.)', heb: 'נֶהֱנִים', speak: 'нэhэнИм', type: 'мужской' },
    { rus: 'наслаждаются, enjoying (много жен.)', heb: 'נֶהֱנוֹת', speak: 'нэhэнОт', type: 'женский' },
    
    ///////// 2025.03.06 /////////////////////////
    { rus: 'меня зовут ...', heb: 'קוֹרְאִים לִי', speak: 'корІм лі', type: '-' },
    { rus: 'моё имя ...', heb: 'שְׁמִי', speak: 'щмі', type: '-' },
    
    ///////// 2025.03.08 /////////////////////////
    { rus: 'видят (они, муж.)', heb: 'רואים', speak: 'роИм', type: 'мужской, множественное' },
    { rus: 'видят (они, жен.)', heb: 'רואות', speak: 'роОт', type: 'женский, множественное' },
    { rus: 'говорят (они, муж.)', heb: 'מְדַבְּרִים', speak: 'мэдабрИм', type: 'мужское, множественное' },
    { rus: 'говорят (они, жен.)', heb: 'מְדַבְּרוֹת', speak: 'мэдабрОт', type: 'женское, множественное' },
    
    ///////// 2025.03.09 /////////////////////////
    { rus: 'есть, имеется (there is)', heb: 'יֵשׁ', speak: 'йэщ', type: '-' },
    { rus: 'нету, не имеется (there is no)', heb: 'אֵין', speak: 'эн', type: '-' },
    { rus: 'мне (to me)', heb: 'לי', speak: 'лі', type: '-' },
    { rus: 'тебе (to you)(муж.)', heb: 'לְךָ', speak: 'льэхА', type: 'мужской' },
    { rus: 'тебе (to you)(жен.)', heb: 'לָךְ', speak: 'льах', type: 'женский' },
    { rus: 'ему (to him)', heb: 'לוֹ', speak: 'льО', type: 'мужской' },
    { rus: 'ей (to her)', heb: 'לָהּ', speak: 'льА', type: 'женский' },
    { rus: 'этому (to it)', heb: 'לָזֶה', speak: 'льэзЭ', type: 'к предмету' },
    { rus: 'нам (to us)', heb: 'לָנוּ', speak: 'лАну', type: 'множественное' },
    { rus: 'им (to them)(муж.)', heb: 'לָהֶם', speak: 'льахЭм', type: 'мужское, множественное' },
    { rus: 'им (to them)(жен.)', heb: 'לָהֶן', speak: 'льахЭн', type: 'женское, множественное' },
    
    ///////// 2025.03.10 /////////////////////////
    { rus: 'объектный маркер для указательньного местоимения (маму, еду, этот предмет)', heb: 'אֵת', speak: 'эт', type: '-' },
    { rus: '', heb: '', speak: '', type: '' },
    { rus: '', heb: '', speak: '', type: '' },
    { rus: '', heb: '', speak: '', type: '' },
];

export { myDictionary };
