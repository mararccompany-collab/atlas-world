import { Country } from './countries';

export const extraDetailsData: Record<string, Partial<Country>> = {
  sa: {
    landmarkDetails: [
      { name: "Al-Masjid al-Haram", nameAr: "المسجد الحرام", type: "مسجد", description: "أقدس مسجد في الإسلام وأكبر مسجد في العالم، يقع في مكة المكرمة ويستقبل ملايين الحجاج سنوياً." },
      { name: "Al-Masjid an-Nabawi", nameAr: "المسجد النبوي", type: "مسجد", description: "المسجد النبوي في المدينة المنورة، ثاني أقدس مسجد في الإسلام، يضم قبر النبي محمد صلى الله عليه وسلم." },
      { name: "Mada'in Saleh", nameAr: "مدائن صالح", type: "موقع أثري", description: "موقع أثري نبطي في العلا، أول موقع سعودي في قائمة التراث العالمي لليونسكو." },
      { name: "Edge of the World", nameAr: "حافة العالم", type: "منطقة طبيعية", description: "جرف ضخم يطل على سهل شاسع، جزء من جبال طويق غرب الرياض." },
    ],
    riverDetails: [
      { name: "Wadi al-Rummah", nameAr: "وادي الرمة", length: "600 كم", description: "أطول وادي في المملكة العربية السعودية، يمتد من المدينة المنورة إلى الخليج العربي." },
    ],
    lakeDetails: [
      { name: "Lake al-Asfar", nameAr: "بحيرة الأصفر", area: "20 كم²", description: "بحيرة موسمية في الأحساء، تشكلت من تجمع مياه الأمطار والينابيع." },
    ],
    borderingSeas: ['الخليج العربي', 'البحر الأحمر'],
    celebrities: [
      { name: "Mohammed Abdo", nameAr: "محمد عبده", profession: "مطرب", knownFor: "فنان سعودي مخضرم، يُلقب بمهندس الأغنية العربية." },
      { name: "Majed Abdullah", nameAr: "ماجد عبدالله", profession: "لاعب كرة قدم", knownFor: "أسطورة كرة القدم السعودية، هداف النصر والمنتخب التاريخي." },
      { name: "Ahmed Ali", nameAr: "أحمد علي", profession: "ممثل", knownFor: "ممثل سعودي كوميدي، عُرف بمسلسل طاش ما طاش." },
    ],
    previousLeaders: [
      { name: "King Abdulaziz Al Saud", nameAr: "الملك عبدالعزيز آل سعود", title: "ملك", from: "1932", to: "1953" },
      { name: "King Saud", nameAr: "الملك سعود", title: "ملك", from: "1953", to: "1964" },
      { name: "King Faisal", nameAr: "الملك فيصل", title: "ملك", from: "1964", to: "1975" },
      { name: "King Khalid", nameAr: "الملك خالد", title: "ملك", from: "1975", to: "1982" },
      { name: "King Fahd", nameAr: "الملك فهد", title: "ملك", from: "1982", to: "2005" },
      { name: "King Abdullah", nameAr: "الملك عبدالله", title: "ملك", from: "2005", to: "2015" },
    ],
    leaderChildren: ['الأمير محمد بن سلمان', 'الأمير خالد بن سلمان', 'الأمير فيصل بن سلمان'],
  },
  ae: {
    landmarkDetails: [
      { name: "Burj Khalifa", nameAr: "برج خليفة", type: "برج", description: "أطول برج في العالم بارتفاع 828 متراً، يقع في دبي وهو رمز الحداثة في الإمارات." },
      { name: "Sheikh Zayed Grand Mosque", nameAr: "جامع الشيخ زايد", type: "مسجد", description: "أكبر مسجد في الإمارات، يتميز بعمارته الإسلامية الفريدة وثرياته الضخمة." },
      { name: "Palm Jumeirah", nameAr: "نخلة جميرا", type: "جزيرة اصطناعية", description: "جزيرة اصطناعية على شكل نخلة، من أعجوبات الهندسة الحديثة في دبي." },
      { name: "Louvre Abu Dhabi", nameAr: "متحف اللوفر أبوظبي", type: "متحف", description: "متحف فني عالمي في أبوظبي، ثمرة شراكة مع متحف اللوفر الفرنسي." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['الخليج العربي', 'بحر عمان'],
    celebrities: [
      { name: "Hussain Al Jassmi", nameAr: "حسين الجسمي", profession: "مطرب", knownFor: "مطرب إماراتي شهير بأغانيه الوطنية والعاطفية عبر الوطن العربي." },
      { name: "Ahmed Helmy", nameAr: "أحمد حلمي", profession: "ممثل", knownFor: "ممثل مصري-إماراتي كوميدي، من أبرز نجوم السينما المصرية." },
      { name: "Ali Mabkhout", nameAr: "علي مبخوت", profession: "لاعب كرة قدم", knownFor: "هداف منتخب الإمارات التاريخي، أحد أفضل المهاجمين في آسيا." },
    ],
    previousLeaders: [
      { name: "Sheikh Zayed bin Sultan", nameAr: "الشيخ زايد بن سلطان آل نهيان", title: "رئيس الدولة", from: "1971", to: "2004" },
      { name: "Sheikh Khalifa bin Zayed", nameAr: "الشيخ خليفة بن زايد آل نهيان", title: "رئيس الدولة", from: "2004", to: "2022" },
    ],
    leaderChildren: ['الشيخ خالد بن محمد بن راشد', 'الشيخ حمدان بن محمد بن راشد'],
  },
  eg: {
    landmarkDetails: [
      { name: "Pyramids of Giza", nameAr: "أهرامات الجيزة", type: "أثر فرعوني", description: "أهرامات خوفو وخفرع ومنقرع، واحدة من عجائب الدنيا السبع القديمة." },
      { name: "Great Sphinx", nameAr: "أبو الهول", type: "تمثال", description: "تمثال أسطوري برأس إنسان وجسد أسد، يقع بجوار أهرامات الجيزة." },
      { name: "Karnak Temple", nameAr: "معبد الكرنك", type: "معبد فرعوني", description: "مجمع معابد ضخم في الأقصر، أكبر موقع ديني قديم في العالم." },
      { name: "Nile River", nameAr: "نهر النيل", type: "نهر", description: "أطول نهر في العالم، شريان الحياة لمصر منذ آلاف السنين." },
    ],
    riverDetails: [
      { name: "Nile River", nameAr: "نهر النيل", length: "6,650 كم", description: "أطول نهر في العالم، ينبع من بحيرة فيكتوريا ويصب في البحر الأبيض المتوسط." },
    ],
    lakeDetails: [
      { name: "Lake Nasser", nameAr: "بحيرة ناصر", area: "5,250 كم²", description: "بحيرة اصطناعية ضخمة خلف السد العالي في أسوان، ثاني أكبر بحيرة اصطناعية في العالم." },
    ],
    borderingSeas: ['البحر الأبيض المتوسط', 'البحر الأحمر'],
    celebrities: [
      { name: "Mohamed Salah", nameAr: "محمد صلاح", profession: "لاعب كرة قدم", knownFor: "نجم ليفربول ومنتخب مصر، أحد أفضل لاعبي كرة القدم في العالم." },
      { name: "Amr Diab", nameAr: "عمرو دياب", profession: "مطرب", knownFor: "مطرب مصري شهير، يُلقب بالهضبة، أحد أيقونات الموسيقى العربية." },
      { name: "Youssef Chahine", nameAr: "يوسف شاهين", profession: "مخرج", knownFor: "مخرج سينمائي مصري عالمي، من رواد السينما العربية." },
      { name: "Adel Imam", nameAr: "عادل إمام", profession: "ممثل", knownFor: "ممثل مصري كبير، أحد أبرز نجوم الكوميديا والدراما في الوطن العربي." },
    ],
    previousLeaders: [
      { name: "Gamal Abdel Nasser", nameAr: "جمال عبدالناصر", title: "رئيس", from: "1956", to: "1970" },
      { name: "Anwar Sadat", nameAr: "محمد أنور السادات", title: "رئيس", from: "1970", to: "1981" },
      { name: "Hosni Mubarak", nameAr: "حسني مبارك", title: "رئيس", from: "1981", to: "2011" },
      { name: "Mohamed Morsi", nameAr: "محمد مرسي", title: "رئيس", from: "2012", to: "2013" },
      { name: "Abdel Fattah el-Sisi", nameAr: "عبدالفتاح السيسي", title: "رئيس", from: "2014", to: "حتى الآن" },
    ],
    leaderChildren: ['محمود السيسي', 'حسن السيسي'],
  },
  iq: {
    landmarkDetails: [
      { name: "Babylon", nameAr: "بابل الأثرية", type: "موقع أثري", description: "مدينة بابل التاريخية، من أعظم حضارات العالم القديم، موقع مدرج على قائمة اليونسكو." },
      { name: "Al-Kadhimiya Mosque", nameAr: "جامع الكاظمية", type: "مسجد", description: "مسجد ومزار شيعي في بغداد، يضم مرقدي الإمام موسى الكاظم ومحمد الجواد." },
      { name: "Erbil Citadel", nameAr: "قلعة أربيل", type: "قلعة", description: "قلعة تاريخية في وسط أربيل، واحدة من أقدم المواقع المأهولة باستمرار في العالم." },
      { name: "Mesopotamian Marshes", nameAr: "الأهوار", type: "منطقة طبيعية", description: "أهوار جنوب العراق، موطن الحضارة السومرية ونظام بيئي فريد في العالم." },
    ],
    riverDetails: [
      { name: "Tigris River", nameAr: "نهر دجلة", length: "1,900 كم", description: "أحد النهرين الرئيسيين في بلاد الرافدين، ينبع من تركيا ويجري عبر بغداد." },
      { name: "Euphrates River", nameAr: "نهر الفرات", length: "2,800 كم", description: "أطول نهر في غرب آسيا، شريان الحضارة في بلاد الرافدين." },
    ],
    lakeDetails: [
      { name: "Lake Tharthar", nameAr: "بحيرة الثرثار", area: "2,710 كم²", description: "أكبر بحيرة في العراق، وتقع بين دجلة والفرات شمال غرب بغداد." },
    ],
    borderingSeas: ['الخليج العربي'],
    celebrities: [
      { name: "Kazem al-Saher", nameAr: "كاظم الساهر", profession: "مطرب", knownFor: "مطرب عراقي عالمي، يُلقب بقيصر الغناء العربي." },
      { name: "Nazem al-Ghazali", nameAr: "ناظم الغزالي", profession: "مطرب", knownFor: "مطرب عراقي راحل، من رواد الغناء العراقي الأصيل." },
      { name: "Fahad", nameAr: "فهد", profession: "ممثل", knownFor: "ممثل عراقي كوميدي، عُرف بشخصية فهد في المسلسلات." },
    ],
    previousLeaders: [
      { name: "Saddam Hussein", nameAr: "صدام حسين", title: "رئيس", from: "1979", to: "2003" },
      { name: "Jalal Talabani", nameAr: "جلال طالباني", title: "رئيس", from: "2005", to: "2014" },
      { name: "Fuad Masum", nameAr: "فؤاد معصوم", title: "رئيس", from: "2014", to: "2018" },
      { name: "Barham Salih", nameAr: "برهم صالح", title: "رئيس", from: "2018", to: "2022" },
    ],
    leaderChildren: ['عدي صدام حسين', 'قصي صدام حسين'],
  },
  jo: {
    landmarkDetails: [
      { name: "Petra", nameAr: "البتراء", type: "موقع أثري", description: "مدينة نبطية منحوتة في الصخر، إحدى عجائب الدنيا السبع الجديدة." },
      { name: "Dead Sea", nameAr: "البحر الميت", type: "منطقة طبيعية", description: "أخفض نقطة على سطح الأرض، بحيرة شديدة الملوحة ذات فوائد علاجية." },
      { name: "Jerash", nameAr: "جرش الأثرية", type: "موقع أثري", description: "واحدة من أفضل المدن الرومانية المحفوظة في العالم خارج إيطاليا." },
      { name: "Wadi Rum", nameAr: "وادي رم", type: "منطقة طبيعية", description: "صحراء خلابة بتكويناتها الصخرية الحمراء، عُرفت بوصفها وادي القمر." },
    ],
    riverDetails: [
      { name: "Jordan River", nameAr: "نهر الأردن", length: "251 كم", description: "نهر مقدس في الديانات الثلاث، يجري من جبل الشيخ إلى البحر الميت." },
    ],
    lakeDetails: [
      { name: "Dead Sea", nameAr: "البحر الميت", area: "605 كم²", description: "أخفض نقطة على وجه الأرض وأكثر المسطحات المائية ملوحة في العالم." },
    ],
    borderingSeas: [],
    celebrities: [
      { name: "King Abdullah II", nameAr: "الملك عبدالله الثاني", profession: "ملك", knownFor: "ملك المملكة الأردنية الهاشمية، قائد عربي بارز على الساحة الدولية." },
      { name: "Hussein Al-Salman", nameAr: "حسين السلمان", profession: "ممثل", knownFor: "ممثل أردني، عُرف بأدواره في الدراما البدوية والتاريخية." },
      { name: "Ahmad Abu Ubaid", nameAr: "أحمد أبو عبيد", profession: "إعلامي", knownFor: "إعلامي أردني بارز في مجال الإعلام الرياضي." },
    ],
    previousLeaders: [
      { name: "King Hussein bin Talal", nameAr: "الملك حسين بن طلال", title: "ملك", from: "1952", to: "1999" },
    ],
    leaderChildren: ['ولي العهد الأمير الحسين', 'الأميرة إيمان', 'الأميرة سلمى', 'الأمير هاشم'],
  },
  lb: {
    landmarkDetails: [
      { name: "Jeita Grotto", nameAr: "مغارة جعيتا", type: "كهف", description: "أجمل كهف في العالم، يتكون من معرضين علوي وسفلي بصواعد ونوازل مذهلة." },
      { name: "Pigeon Rocks", nameAr: "صخرة الروشة", type: "منطقة طبيعية", description: "تكوينات صخرية طبيعية في بيروت، من أبرز معالم لبنان السياحية." },
      { name: "Baalbek", nameAr: "آثار بعلبك", type: "موقع أثري", description: "معابد رومانية ضخمة في مدينة بعلبك، من أعظم المواقع الأثرية في العالم." },
      { name: "Downtown Beirut", nameAr: "وسط بيروت", type: "منطقة حضرية", description: "منطقة حيوية تجمع بين التراث القديم والعمارة الحديثة في قلب العاصمة." },
    ],
    riverDetails: [
      { name: "Litani River", nameAr: "نهر الليطاني", length: "140 كم", description: "أطول نهر يجري بالكامل داخل الأراضي اللبنانية، مصدر رئيسي للري والطاقة." },
    ],
    lakeDetails: [
      { name: "Lake Qaraoun", nameAr: "بحيرة القرعون", area: "11 كم²", description: "بحيرة اصطناعية في البقاع، تشكلت خلف سد القرعون لتوليد الكهرباء." },
    ],
    borderingSeas: ['البحر الأبيض المتوسط'],
    celebrities: [
      { name: "Fairuz", nameAr: "فيروز", profession: "مطربة", knownFor: "أسطورة الغناء العربي، صوت لبنان الخالد عبر الأجيال." },
      { name: "Ragheb Alama", nameAr: "راغب علامة", profession: "مطرب", knownFor: "مطرب لبناني شهير، أحد نجوم الطرب العربي المعاصر." },
      { name: "Nadine Labaki", nameAr: "نادين لبكي", profession: "مخرجة", knownFor: "مخرجة وممثلة لبنانية عالمية، رشحت لجائزة الأوسكار." },
      { name: "Rafic Hariri", nameAr: "رفيق الحريري", profession: "سياسي", knownFor: "رئيس وزراء لبنان الأسبق، رجل أعمال بارز وراعي إعادة إعمار بيروت." },
    ],
    previousLeaders: [
      { name: "Bechara El Khoury", nameAr: "بشارة الخوري", title: "رئيس", from: "1943", to: "1952" },
      { name: "Camille Chamoun", nameAr: "كميل شمعون", title: "رئيس", from: "1952", to: "1958" },
      { name: "Fouad Chehab", nameAr: "فؤاد شهاب", title: "رئيس", from: "1958", to: "1964" },
      { name: "Rafic Hariri", nameAr: "رفيق الحريري", title: "رئيس وزراء", from: "1992", to: "2005" },
    ],
    leaderChildren: ['سعد الحريري', 'بهاء الحريري'],
  },
  sy: {
    landmarkDetails: [
      { name: "Aleppo Citadel", nameAr: "قلعة حلب", type: "قلعة", description: "قلعة تاريخية ضخمة في وسط حلب، واحدة من أقدم وأكبر القلاع في العالم." },
      { name: "Umayyad Mosque", nameAr: "الجامع الأموي", type: "مسجد", description: "أحد أقدم وأعظم مساجد الإسلام، يقع في قلب دمشق القديمة." },
      { name: "Palmyra", nameAr: "تدمر", type: "موقع أثري", description: "مدينة تدمر التاريخية، جوهرة الصحراء السورية وموقع تراث عالمي." },
      { name: "Hamidiya Souq", nameAr: "بازار حميدية", type: "سوق", description: "سوق تاريخي مغطى في دمشق، من أشهر الأسواق التقليدية في الشرق الأوسط." },
    ],
    riverDetails: [
      { name: "Orontes River", nameAr: "نهر العاصي", length: "571 كم", description: "نهر يجري في سوريا ولبنان وتركيا، يتميز بجريانه عكس اتجاه معظم الأنهار." },
      { name: "Euphrates River", nameAr: "نهر الفرات", length: "2,800 كم", description: "أطول نهر في غرب آسيا، مصدر حيوي للمياه والطاقة الكهرومائية في سوريا." },
    ],
    lakeDetails: [
      { name: "Lake Assad", nameAr: "بحيرة الأسد", area: "610 كم²", description: "بحيرة اصطناعية في شمال سوريا خلف سد الفرات، أكبر بحيرة في البلاد." },
    ],
    borderingSeas: ['البحر الأبيض المتوسط'],
    celebrities: [
      { name: "Asala Nasri", nameAr: "أصالة نصري", profession: "مطربة", knownFor: "مطربة سورية شهيرة، صوت قوي وأغانٍ عاطفية، من أيقونات الغناء العربي." },
      { name: "Duraid Lahham", nameAr: "دريد لحام", profession: "ممثل", knownFor: "ممثل سوري كوميدي كبير، عُرف بشخصية غوار الطوشة." },
      { name: "Nazem al-Qudsi", nameAr: "ناظم القدسي", profession: "سياسي", knownFor: "رئيس سوريا الأسبق، أحد رجالات السياسة السورية." },
    ],
    previousLeaders: [
      { name: "Husni al-Za'im", nameAr: "حسني الزعيم", title: "رئيس", from: "1949", to: "1949" },
      { name: "Adib Shishakli", nameAr: "أديب الشيشكلي", title: "رئيس", from: "1953", to: "1954" },
      { name: "Hafez al-Assad", nameAr: "حافظ الأسد", title: "رئيس", from: "1971", to: "2000" },
    ],
    leaderChildren: ['بشار الأسد', 'باسل الأسد (متوفي)', 'بشرى الأسد'],
  },
  kw: {
    landmarkDetails: [
      { name: "Kuwait Towers", nameAr: "أبراج الكويت", type: "برج", description: "أبراج الكويت الثلاثة، رمز الكويت الحديثة وأشهر معالمها على الخليج." },
      { name: "Grand Mosque", nameAr: "المسجد الكبير", type: "مسجد", description: "أكبر مسجد في دولة الكويت، يتميز بطرازه المعماري الإسلامي الفخم." },
      { name: "Failaka Island", nameAr: "جزيرة فيلكا", type: "جزيرة", description: "جزيرة تاريخية تضم آثاراً من حضارتي دلمون والإسكندر المقدوني." },
      { name: "Al-Mubarakiya Souq", nameAr: "سوق المباركية", type: "سوق", description: "سوق تقليدي عريق في الكويت، ملتقى الثقافة والتراث والتجارة." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['الخليج العربي'],
    celebrities: [
      { name: "Abdulkarim Abdulqader", nameAr: "عبدالكريم عبدالقادر", profession: "مطرب", knownFor: "مطرب كويتي كبير، أحد أعمدة الأغنية الخليجية." },
      { name: "Nabil Shuail", nameAr: "نبيل شعيل", profession: "مطرب", knownFor: "مطرب كويتي شهير بأغانيه الرومانسية والوطنية." },
      { name: "Mohammad Al-Mansour", nameAr: "محمد المنصور", profession: "ممثل", knownFor: "ممثل كويتي رائد، من مؤسسي الحركة المسرحية في الكويت." },
    ],
    previousLeaders: [
      { name: "Sheikh Abdullah Al-Salim", nameAr: "الشيخ عبدالله السالم", title: "أمير", from: "1950", to: "1965" },
      { name: "Sheikh Sabah Al-Salim", nameAr: "الشيخ صباح السالم", title: "أمير", from: "1965", to: "1977" },
      { name: "Sheikh Jaber Al-Ahmad", nameAr: "الشيخ جابر الأحمد", title: "أمير", from: "1977", to: "2006" },
      { name: "Sheikh Sabah Al-Ahmad", nameAr: "الشيخ صباح الأحمد", title: "أمير", from: "2006", to: "2020" },
      { name: "Sheikh Nawaf Al-Ahmad", nameAr: "الشيخ نواف الأحمد", title: "أمير", from: "2020", to: "2023" },
    ],
    leaderChildren: ['الشيخ أحمد نواف الأحمد الصباح'],
  },
  qa: {
    landmarkDetails: [
      { name: "National Museum of Qatar", nameAr: "متحف قطر الوطني", type: "متحف", description: "متحف وطني بتصميم معماري مستوحى من وردة الصحراء، يروي تاريخ قطر." },
      { name: "Katara Cultural Village", nameAr: "كتارا", type: "منطقة ثقافية", description: "مركز ثقافي في الدوحة، يجمع بين الفنون والعمارة والتراث القطري." },
      { name: "Souq Waqif", nameAr: "سوق واقف", type: "سوق", description: "سوق تقليدي في قلب الدوحة، وجهة سياحية وتراثية بارزة." },
      { name: "Museum of Islamic Art", nameAr: "متحف الفن الإسلامي", type: "متحف", description: "متحف عالمي يضم مجموعة نادرة من الفنون الإسلامية عبر العصور." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['الخليج العربي'],
    celebrities: [
      { name: "Nasser Al-Qasabi", nameAr: "ناصر القصبي", profession: "ممثل", knownFor: "ممثل قطري كوميدي، من نجوم المسلسلات الخليجية الشهيرة." },
      { name: "Abdulaziz Jassim", nameAr: "عبدالعزيز جاسم", profession: "ممثل", knownFor: "ممثل قطري، أحد أبرز نجوم الدراما الخليجية." },
      { name: "Ali Afif", nameAr: "علي عفيفي", profession: "لاعب كرة قدم", knownFor: "مهاجم منتخب قطر، من أبرز لاعبي كرة القدم القطريين." },
    ],
    previousLeaders: [
      { name: "Sheikh Khalifa bin Hamad", nameAr: "الشيخ خليفة بن حمد آل ثاني", title: "أمير", from: "1972", to: "1995" },
      { name: "Sheikh Hamad bin Khalifa", nameAr: "الشيخ حمد بن خليفة آل ثاني", title: "أمير", from: "1995", to: "2013" },
      { name: "Sheikh Tamim bin Hamad", nameAr: "الشيخ تميم بن حمد آل ثاني", title: "أمير", from: "2013", to: "حتى الآن" },
    ],
    leaderChildren: ['الشيخ جاسم بن تميم', 'الشيخ عبدالله بن تميم'],
  },
  bh: {
    landmarkDetails: [
      { name: "Bahrain Fort", nameAr: "قلعة البحرين", type: "قلعة", description: "قلعة تاريخية تعود للحضارة البرتغالية، موقع تراث عالمي من اليونسكو." },
      { name: "Al-Fateh Grand Mosque", nameAr: "مسجد الفاتح", type: "مسجد", description: "أكبر مسجد في البحرين، يتسع لأكثر من 7,000 مصلٍ." },
      { name: "King Fahd Causeway", nameAr: "جسر الملك فهد", type: "جسر", description: "جسر يربط البحرين بالسعودية، بطول 25 كم فوق مياه الخليج." },
      { name: "Bahrain International Circuit", nameAr: "حلبة البحرين الدولية", type: "حلبة سباق", description: "حلبة سباق سيارات عالمية تستضيف سباق جائزة البحرين الكبرى للفورمولا 1." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['الخليج العربي'],
    celebrities: [
      { name: "Mohamed Abdulwahab", nameAr: "محمد عبدالوهاب", profession: "مطرب", knownFor: "مطرب بحريني مخضرم، من رواد الغناء في الخليج العربي." },
      { name: "Ali Rashid", nameAr: "علي راشد", profession: "مطرب", knownFor: "مطرب بحريني معروف بأغانيه الشعبية والخليجية." },
    ],
    previousLeaders: [
      { name: "Sheikh Isa bin Salman", nameAr: "الشيخ عيسى بن سلمان آل خليفة", title: "أمير", from: "1961", to: "1999" },
      { name: "King Hamad bin Isa", nameAr: "الملك حمد بن عيسى آل خليفة", title: "ملك", from: "1999", to: "حتى الآن" },
    ],
    leaderChildren: ['ولي العهد سلمان بن حمد آل خليفة', 'الشيخ خالد بن حمد آل خليفة'],
  },
  om: {
    landmarkDetails: [
      { name: "Sultan Qaboos Grand Mosque", nameAr: "جامع السلطان قابوس", type: "مسجد", description: "أكبر مسجد في عُمان، تحفة معمارية تجمع بين الطراز الإسلامي والعماني." },
      { name: "Wadi Shab", nameAr: "وادي شاب", type: "منطقة طبيعية", description: "وادي خلاب بمياهه الفيروزية ومسابحه الطبيعية وأشجار النخيل." },
      { name: "Nizwa Fort", nameAr: "قلعة نزوى", type: "قلعة", description: "قلعة تاريخية ضخمة في مدينة نزوى، من أشهر القلاع العمانية." },
      { name: "Al-Majlis Cave", nameAr: "كهف المجلي", type: "كهف", description: "كهف سياحي فريد بغرفته الرئيسية الشاسعة وتكويناته الجيولوجية." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['بحر العرب', 'الخليج العربي', 'بحر عمان'],
    celebrities: [
      { name: "Youssef Al-Balushi", nameAr: "يوسف البلوشي", profession: "ممثل", knownFor: "ممثل عماني كوميدي، عُرف بإطلالاته في المسلسلات الخليجية." },
      { name: "Hanan", nameAr: "حنان", profession: "مطربة", knownFor: "مطربة عمانية، من أبرز الأصوات النسائية في الخليج." },
    ],
    previousLeaders: [
      { name: "Sultan Qaboos bin Said", nameAr: "السلطان قابوس بن سعيد", title: "سلطان", from: "1970", to: "2020" },
      { name: "Sultan Haitham bin Tariq", nameAr: "السلطان هيثم بن طارق", title: "سلطان", from: "2020", to: "حتى الآن" },
    ],
    leaderChildren: ['ذي يزن بن هيثم آل سعيد'],
  },
  ye: {
    landmarkDetails: [
      { name: "Old Sana'a", nameAr: "سور صنعاء القديم", type: "مدينة قديمة", description: "مدينة صنعاء القديمة المسورة، موقع تراث عالمي بهندستها المعمارية الفريدة." },
      { name: "Jabal Sabr", nameAr: "جبل صبر", type: "جبل", description: "جبل يطل على مدينة تعز، يتميز بمناظره الخلابة وبساتينه الخضراء." },
      { name: "Socotra Island", nameAr: "جزيرة سقطرى", type: "جزيرة", description: "جزيرة فريدة بتنوعها البيولوجي، موطن شجرة دم الأخوين النادرة." },
      { name: "Dar al-Hajar", nameAr: "دار الحجر", type: "قصر", description: "قصر صخري يطل على وادي ظهر، من أبرز المعالم التاريخية في اليمن." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['البحر العربي', 'البحر الأحمر', 'خليج عدن'],
    celebrities: [
      { name: "Ali bin Mohammed Al-Samahi", nameAr: "علي بن محمد السمحي", profession: "شاعر", knownFor: "شاعر يمني بارز، من رموز الشعر الشعبي اليمني." },
      { name: "Abu Bakr Salem", nameAr: "أبو بكر سالم", profession: "مطرب", knownFor: "أحد أشهر مطربي الجزيرة العربية، بصوته وألحانه الخالدة." },
    ],
    previousLeaders: [
      { name: "Ali Abdullah Saleh", nameAr: "علي عبدالله صالح", title: "رئيس", from: "1990", to: "2012" },
      { name: "Abdrabbuh Mansur Hadi", nameAr: "عبد ربه منصور هادي", title: "رئيس", from: "2012", to: "2015" },
    ],
    leaderChildren: ['أحمد علي عبدالله صالح'],
  },
  ly: {
    landmarkDetails: [
      { name: "Leptis Magna", nameAr: "لبدة الأثرية", type: "موقع أثري", description: "مدينة رومانية قديمة على ساحل البحر المتوسط، من أفضل المواقع الرومانية حفظاً." },
      { name: "Ghadames", nameAr: "مدينة غدامس", type: "مدينة قديمة", description: "لؤلؤة الصحراء، مدينة قديمة ذات هندسة معمارية فريدة مدرجة على قائمة التراث." },
      { name: "Akakus Mountains", nameAr: "جبال أكاكوس", type: "منطقة طبيعية", description: "جبال صحراوية برسومات ونقوش صخرية تعود إلى عصور ما قبل التاريخ." },
      { name: "Sirte", nameAr: "سرت", type: "مدينة", description: "مدينة ساحلية على البحر المتوسط، ذات أهمية استراتيجية وتاريخية في ليبيا." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['البحر الأبيض المتوسط'],
    celebrities: [
      { name: "Mohamed Al-Senussi", nameAr: "محمد السنوسي", profession: "ممثل", knownFor: "ممثل ليبي، من أبرز وجوه الدراما والمسرح في ليبيا." },
    ],
    previousLeaders: [
      { name: "Muammar Gaddafi", nameAr: "معمر القذافي", title: "قائد", from: "1969", to: "2011" },
      { name: "Mustafa Abdul Jalil", nameAr: "مصطفى عبدالجليل", title: "رئيس المجلس الانتقالي", from: "2011", to: "2012" },
    ],
    leaderChildren: ['سيف الإسلام القذافي', 'الساعدي القذافي', 'عائشة القذافي'],
  },
  tn: {
    landmarkDetails: [
      { name: "Zaytuna Mosque", nameAr: "جامع الزيتونة", type: "مسجد", description: "أقدم وأهم مسجد في تونس، وجامعته العريقة من أقدم الجامعات في العالم الإسلامي." },
      { name: "Carthage", nameAr: "قرطاج الأثرية", type: "موقع أثري", description: "مدينة قرطاج الفينيقية القديمة، من أعظم حضارات البحر المتوسط القديمة." },
      { name: "Sidi Bou Said", nameAr: "سيدي بوسعيد", type: "منطقة سياحية", description: "بلدة زرقاء-بيضاء خلابة على تل يطل على البحر المتوسط." },
      { name: "El Jem Amphitheatre", nameAr: "مدرج الجم", type: "مدرج روماني", description: "مدرج روماني ضخم في مدينة الجم، ثالث أكبر مدرج في الإمبراطورية الرومانية." },
    ],
    riverDetails: [
      { name: "Medjerda River", nameAr: "نهر مجردة", length: "450 كم", description: "أطول نهر في تونس، ينبع من الجزائر ويصب في خليج تونس." },
    ],
    lakeDetails: [
      { name: "Lake of Tunis", nameAr: "بحيرة تونس", area: "37 كم²", description: "بحيرة ضحلة تفصل مدينة تونس عن خليج تونس، ممر مائي طبيعي." },
    ],
    borderingSeas: ['البحر الأبيض المتوسط'],
    celebrities: [
      { name: "El General", nameAr: "الشيخ الإمام", profession: "مطرب", knownFor: "مطرب راب تونسي، أيقونة الثورة التونسية بأغانيه الاحتجاجية." },
      { name: "Hend Sabri", nameAr: "هند صبري", profession: "ممثلة", knownFor: "ممثلة تونسية عالمية، من أبرز نجمات السينما العربية." },
      { name: "Mohamed Ali", nameAr: "محمد علي", profession: "ملاكم", knownFor: "أشهر ملاكم في التاريخ، بطل العالم في الوزن الثقيل." },
    ],
    previousLeaders: [
      { name: "Habib Bourguiba", nameAr: "الحبيب بورقيبة", title: "رئيس", from: "1957", to: "1987" },
      { name: "Zine El Abidine Ben Ali", nameAr: "زين العابدين بن علي", title: "رئيس", from: "1987", to: "2011" },
      { name: "Moncef Marzouki", nameAr: "المنصف المرزوقي", title: "رئيس", from: "2011", to: "2014" },
      { name: "Beji Caid Essebsi", nameAr: "الباجي قائد السبسي", title: "رئيس", from: "2014", to: "2019" },
    ],
    leaderChildren: ['قيس سعيد (لا يوجد أبناء في الحكم)'],
  },
  dz: {
    landmarkDetails: [
      { name: "Djamaa El Djazair", nameAr: "جامع الجزائر", type: "مسجد", description: "ثالث أكبر مسجد في العالم، يتميز بمئذنته الأطول التي تبلغ 265 متراً." },
      { name: "Casbah of Algiers", nameAr: "قصبة الجزائر", type: "مدينة قديمة", description: "مدينة قديمة تاريخية في قلب الجزائر العاصمة، موقع تراث عالمي." },
      { name: "Tassili n'Ajjer", nameAr: "طاسيلي ناجر", type: "منطقة طبيعية", description: "هضبة صحراوية برسومات صخرية تعود إلى 12,000 سنة، موقع تراث عالمي." },
      { name: "Timgad", nameAr: "مدينة تيمقاد", type: "موقع أثري", description: "مدينة رومانية قديمة تأسست في القرن الأول الميلادي، مدرجة على قائمة اليونسكو." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['البحر الأبيض المتوسط'],
    celebrities: [
      { name: "Khaled", nameAr: "الشاب خالد", profession: "مطرب", knownFor: "ملك موسيقى الراي، مطرب جزائري عالمي شهير." },
      { name: "Karim Benzema", nameAr: "كريم بن سونة", profession: "لاعب كرة قدم", knownFor: "مهاجم ريال مدريد ومنتخب فرنسا، حاصل على الكرة الذهبية." },
      { name: "Malek Bennabi", nameAr: "مالك بن نبي", profession: "مفكر", knownFor: "مفكر وفيلسوف جزائري، من أبرز دعاة النهضة الإسلامية." },
    ],
    previousLeaders: [
      { name: "Ahmed Ben Bella", nameAr: "أحمد بن بلة", title: "رئيس", from: "1963", to: "1965" },
      { name: "Houari Boumédiène", nameAr: "هواري بومدين", title: "رئيس", from: "1965", to: "1978" },
      { name: "Chadli Bendjedid", nameAr: "الشاذلي بن جديد", title: "رئيس", from: "1979", to: "1992" },
      { name: "Abdelaziz Bouteflika", nameAr: "عبدالعزيز بوتفليقة", title: "رئيس", from: "1999", to: "2019" },
    ],
    leaderChildren: ['علي بوتفليقة'],
  },
  ma: {
    landmarkDetails: [
      { name: "Hassan II Mosque", nameAr: "جامع الحسن الثاني", type: "مسجد", description: "ثاني أكبر مسجد في العالم، يقع على شاطئ المحيط الأطلسي في الدار البيضاء." },
      { name: "Jemaa el-Fnaa", nameAr: "ساحة جامع الفنا", type: "ساحة", description: "ساحة حيوية في قلب مراكش، ملتقى الثقافة والفنون الشعبية المغربية." },
      { name: "Old City of Fez", nameAr: "مدينة فاس القديمة", type: "مدينة قديمة", description: "أقدم مدينة إسلامية في المغرب، تضم جامعة القرويين أقدم جامعة في العالم." },
      { name: "Ouzoud Falls", nameAr: "شلالات أوزود", type: "منطقة طبيعية", description: "شلالات خلابة في جبال الأطلس، أروع شلالات شمال أفريقيا." },
    ],
    riverDetails: [
      { name: "Sebou River", nameAr: "نهر سبو", length: "458 كم", description: "أهم نهر في المغرب، ينبع من جبال الأطلس المتوسط ويصب في المحيط الأطلسي." },
      { name: "Moulouya River", nameAr: "نهر ملوية", length: "520 كم", description: "أطول نهر في المغرب العربي، ينبع من الأطلس الكبير ويصب في البحر المتوسط." },
    ],
    lakeDetails: [],
    borderingSeas: ['البحر الأبيض المتوسط', 'المحيط الأطلسي'],
    celebrities: [
      { name: "Saad Lamjarred", nameAr: "سعد لمجرد", profession: "مطرب", knownFor: "مطرب مغربي عالمي، من أكثر الفنانين العرب مشاهدة على يوتيوب." },
      { name: "Nabila Maan", nameAr: "نبيلة معروف", profession: "ممثلة", knownFor: "ممثلة مغربية شهيرة، من نجوم الدراما المغربية والعربية." },
      { name: "Noureddine Morabit", nameAr: "نور الدين مرابط", profession: "لاعب كرة قدم", knownFor: "لاعب كرة قدم مغربي، من أبرز نجوم المنتخب المغربي." },
    ],
    previousLeaders: [
      { name: "King Mohammed V", nameAr: "الملك محمد الخامس", title: "ملك", from: "1957", to: "1961" },
      { name: "King Hassan II", nameAr: "الملك الحسن الثاني", title: "ملك", from: "1961", to: "1999" },
    ],
    leaderChildren: ['ولي العهد الحسن بن محمد', 'الأميرة خديجة'],
  },
  sd: {
    landmarkDetails: [
      { name: "Nubian Pyramids", nameAr: "الأهرامات النوبية", type: "موقع أثري", description: "أهرامات مملكة كوش في مروي، موقع تراث عالمي يعكس حضارة النوبة العريقة." },
      { name: "Jebel Marra", nameAr: "جبل مرة", type: "جبل", description: "أعلى قمة في السودان، منطقة زراعية غنية بالينابيع والبحيرات البركانية." },
      { name: "Blue and White Nile", nameAr: "النيل الأزرق والنيل الأبيض", type: "نهر", description: "نهر النيل الأزرق والنيل الأبيض يلتقيان في الخرطوم ليشكلا نهر النيل." },
      { name: "Sai Island", nameAr: "جزيرة صاي", type: "جزيرة", description: "جزيرة في النيل شمال السودان، غنية بالآثار الفرعونية والنوبية." },
    ],
    riverDetails: [
      { name: "Nile River", nameAr: "نهر النيل", length: "6,650 كم", description: "أطول نهر في العالم، يمر عبر السودان بطول كبير." },
      { name: "Blue Nile", nameAr: "النيل الأزرق", length: "1,450 كم", description: "أحد روافد نهر النيل الرئيسية، ينبع من بحيرة تانا في إثيوبيا." },
      { name: "White Nile", nameAr: "النيل الأبيض", length: "3,700 كم", description: "أحد روافد نهر النيل، ينبع من منطقة البحيرات العظمى في أفريقيا." },
    ],
    lakeDetails: [
      { name: "Lake Nubia", nameAr: "بحيرة النوبة", area: "5,250 كم²", description: "بحيرة خلف سد النهضة، تمتد بين السودان وإثيوبيا." },
    ],
    borderingSeas: ['البحر الأحمر'],
    celebrities: [
      { name: "Mohamed Wardi", nameAr: "محمد وردي", profession: "مطرب", knownFor: "مطرب سوداني أسطوري، صوت الثورة والثقافة السودانية." },
      { name: "Mustafa Sidahmed", nameAr: "مصطفى سيد أحمد", profession: "ممثل", knownFor: "ممثل سوداني كبير، من رواد الدراما والسينما السودانية." },
    ],
    previousLeaders: [
      { name: "Jaafar Nimeiry", nameAr: "جعفر النميري", title: "رئيس", from: "1969", to: "1985" },
      { name: "Omar al-Bashir", nameAr: "عمر البشير", title: "رئيس", from: "1989", to: "2019" },
      { name: "Abdel Fattah al-Burhan", nameAr: "عبدالفتاح البرهان", title: "رئيس مجلس السيادة", from: "2019", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  mr: {
    landmarkDetails: [
      { name: "Chinguetti", nameAr: "شنقيط", type: "مدينة قديمة", description: "مدينة تاريخية في موريتانيا، من أقدم المدن الإسلامية في أفريقيا." },
      { name: "Ouadane", nameAr: "وادان", type: "مدينة تاريخية", description: "مدينة أثرية في موريتانيا، كانت مركزاً تجارياً هاماً في الصحراء." },
      { name: "Banc d'Arguin National Park", nameAr: "منتزه بانك دارغين", type: "محمية طبيعية", description: "محمية طبيعية ساحلية، موقع تراث عالمي وموطن هجرة الطيور." },
    ],
    riverDetails: [
      { name: "Senegal River", nameAr: "نهر السنغال", length: "1,790 كم", description: "نهر في غرب أفريقيا يشكل الحدود بين موريتانيا والسنغال." },
    ],
    lakeDetails: [],
    borderingSeas: ['المحيط الأطلسي'],
    celebrities: [
      { name: "Mokhtar Ould Dahi", nameAr: "المختار ولد داهي", profession: "سياسي", knownFor: "سياسي موريتاني بارز في مجال الإعلام والثقافة." },
    ],
    previousLeaders: [
      { name: "Mokhtar Ould Daddah", nameAr: "المختار ولد داداه", title: "رئيس", from: "1960", to: "1978" },
      { name: "Maaouya Ould Sid'Ahmed Taya", nameAr: "معاوية ولد الطايع", title: "رئيس", from: "1984", to: "2005" },
      { name: "Mohamed Ould Abdel Aziz", nameAr: "محمد ولد عبدالعزيز", title: "رئيس", from: "2008", to: "2019" },
    ],
    leaderChildren: [],
  },
  so: {
    landmarkDetails: [
      { name: "Gauresa Palace", nameAr: "قصر غوري", type: "قصر", description: "قصر تاريخي في مقديشو، من المعالم المعمارية البارزة في الصومال." },
      { name: "Bakaara Market", nameAr: "سوق بكارة", type: "سوق", description: "أكبر سوق في مقديشو، مركز تجاري حيوي في العاصمة الصومالية." },
      { name: "Jezira Beach", nameAr: "شاطئ جيزيرا", type: "شاطئ", description: "شاطئ رملي جميل جنوب مقديشو، وجهة سياحية محبوبة." },
    ],
    riverDetails: [
      { name: "Jubba River", nameAr: "نهر جوبا", length: "1,008 كم", description: "أحد نهرين رئيسيين في الصومال، ينبع من إثيوبيا ويصب في المحيط الهندي." },
      { name: "Shebelle River", nameAr: "نهر شبلي", length: "1,130 كم", description: "نهر موسمي يجري في الصومال وإثيوبيا، مصدر رئيسي للري." },
    ],
    lakeDetails: [],
    borderingSeas: ['المحيط الهندي', 'خليج عدن'],
    celebrities: [
      { name: "Maryam Hussein", nameAr: "مريم حسين", profession: "ممثلة", knownFor: "ممثلة صومالية عُرفت بأعمالها في السينما والتلفزيون الصومالي." },
    ],
    previousLeaders: [
      { name: "Siad Barre", nameAr: "محمد سياد بري", title: "رئيس", from: "1969", to: "1991" },
      { name: "Abdiqasim Salad Hassan", nameAr: "عبدالقاسم صلاد حسن", title: "رئيس", from: "2000", to: "2004" },
      { name: "Sharif Sheikh Ahmed", nameAr: "شريف شيخ أحمد", title: "رئيس", from: "2009", to: "2012" },
    ],
    leaderChildren: [],
  },
  dj: {
    landmarkDetails: [
      { name: "Lake Assal", nameAr: "بحيرة عسل", type: "بحيرة", description: "أكثر بحيرة ملوحة في العالم، تقع في منخفض داناكيل الشهير." },
      { name: "Mount Goda", nameAr: "جبل الله", type: "جبل", description: "أعلى قمة في جيبوتي، تتميز بغاباتها الكثيفة وحياتها البرية." },
      { name: "Gulf of Tadjoura", nameAr: "خليج تدجورة", type: "خليج", description: "خليج جميل على المحيط الهندي، موطن للحياة البحرية والشعاب المرجانية." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Lake Assal", nameAr: "بحيرة عسل", area: "54 كم²", description: "أكثر بحيرة ملوحة في العالم، تقع على عمق 155 متراً تحت سطح البحر." },
    ],
    borderingSeas: ['خليج عدن', 'البحر الأحمر'],
    celebrities: [],
    previousLeaders: [
      { name: "Hassan Gouled Aptidon", nameAr: "حسن جوليد أبتيدون", title: "رئيس", from: "1977", to: "1999" },
      { name: "Ismaïl Omar Guelleh", nameAr: "إسماعيل عمر جيله", title: "رئيس", from: "1999", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  km: {
    landmarkDetails: [
      { name: "Mount Karthala", nameAr: "جبل كرتالا", type: "جبل", description: "بركان نشط في جزيرة القمر الكبرى، أعلى نقطة في جزر القمر." },
      { name: "Chomoni Beach", nameAr: "شاطئ شوموني", type: "شاطئ", description: "شاطئ رملي أبيض جميل مع مياه فيروزية صافية في جزيرة القمر الكبرى." },
      { name: "Moroni Mosque", nameAr: "مسجد موروني", type: "مسجد", description: "المسجد الرئيسي في العاصمة موروني، رمز ديني ومعماري للبلاد." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['المحيط الهندي'],
    celebrities: [],
    previousLeaders: [
      { name: "Ahmed Abdallah", nameAr: "أحمد عبدالله", title: "رئيس", from: "1975", to: "1989" },
      { name: "Mohamed Tadjidine", nameAr: "محمد تجاني", title: "رئيس", from: "1996", to: "1998" },
      { name: "Azali Assoumani", nameAr: "أزالي أسوماني", title: "رئيس", from: "2002", to: "2006" },
    ],
    leaderChildren: [],
  },
  ps: {
    landmarkDetails: [
      { name: "Al-Aqsa Mosque", nameAr: "المسجد الأقصى", type: "مسجد", description: "ثالث أقدس مسجد في الإسلام، قبلة المسلمين الأولى في القدس الشريف." },
      { name: "Church of the Nativity", nameAr: "كنيسة المهد", type: "كنيسة", description: "أقدم كنيسة في العالم، بنيت فوق المغارة التي وُلد فيها المسيح في بيت لحم." },
      { name: "Dome of the Rock", nameAr: "قبة الصخرة", type: "مسجد", description: "أقدم أثر إسلامي في العالم، يتميز بقبته الذهبية في القدس الشريف." },
      { name: "Old City", nameAr: "البلدة القديمة", type: "مدينة قديمة", description: "البلدة القديمة في القدس بأسوارها وأبوابها وأحيائها التاريخية." },
    ],
    riverDetails: [
      { name: "Jordan River", nameAr: "نهر الأردن", length: "251 كم", description: "نهر حدودي تاريخي، يحظى بقدسية دينية كبرى في الديانات الثلاث." },
    ],
    lakeDetails: [
      { name: "Dead Sea", nameAr: "البحر الميت", area: "605 كم²", description: "أخفض بقعة على وجه الأرض، مسطح مائي فريد بخصائصه الطبيعية والعلاجية." },
    ],
    borderingSeas: ['البحر الأبيض المتوسط', 'البحر الميت'],
    celebrities: [
      { name: "Mahmoud Darwish", nameAr: "محمود درويش", profession: "شاعر", knownFor: "شاعر فلسطيني عظيم، أحد أبرز شعراء العرب المعاصرين." },
      { name: "Edward Said", nameAr: "إدوارد سعيد", profession: "مفكر", knownFor: "مفكر فلسطيني عالمي، صاحب كتاب الاستشراق." },
      { name: "Lana Zaki", nameAr: "لانا زكي", profession: "ممثلة", knownFor: "ممثلة فلسطينية، من نجمات الدراما الفلسطينية والعربية." },
    ],
    previousLeaders: [
      { name: "Yasser Arafat", nameAr: "ياسر عرفات", title: "رئيس السلطة الفلسطينية", from: "1994", to: "2004" },
      { name: "Mahmoud Abbas", nameAr: "محمود عباس", title: "رئيس السلطة الفلسطينية", from: "2005", to: "حتى الآن" },
    ],
    leaderChildren: ['ياسر عرفات (لا يوجد)', 'يوسف عباس', 'طارق عباس'],
  },
  us: {
    landmarkDetails: [
      { name: "Statue of Liberty", nameAr: "تمثال الحرية", type: "نصب تذكاري", description: "تمثال الحرية في نيويورك، هدية فرنسا للولايات المتحدة ورمز للحرية." },
      { name: "Grand Canyon", nameAr: "جراند كانيون", type: "منطقة طبيعية", description: "أخدود ضخم في أريزونا، واحدة من أعجب الظواهر الطبيعية في العالم." },
      { name: "White House", nameAr: "البيت الأبيض", type: "مبنى حكومي", description: "المقر الرسمي لرئيس الولايات المتحدة الأمريكية في واشنطن العاصمة." },
      { name: "Times Square", nameAr: "تايمز سكوير", type: "منطقة حضرية", description: "أشهر ساحة في نيويورك، قلب مدينة المسارح والإعلانات المبهرة." },
    ],
    riverDetails: [
      { name: "Mississippi River", nameAr: "نهر المسيسيبي", length: "3,730 كم", description: "أطول نهر في أمريكا الشمالية، شريان النقل والتجارة في وسط أمريكا." },
      { name: "Colorado River", nameAr: "نهر كولورادو", length: "2,330 كم", description: "نهر غرب أمريكا، يشق جراند كانيون ويوفر المياه لسبع ولايات." },
    ],
    lakeDetails: [
      { name: "Lake Superior", nameAr: "بحيرة سوبيريور", area: "82,100 كم²", description: "أكبر بحيرة عذبة في العالم من حيث المساحة، إحدى البحيرات العظمى." },
      { name: "Lake Michigan", nameAr: "بحيرة ميشيغان", area: "58,000 كم²", description: "ثاني أكبر البحيرات العظمى، البحيرة الوحيدة التي تقع بالكامل داخل أمريكا." },
    ],
    borderingSeas: ['المحيط الأطلسي', 'المحيط الهادئ', 'خليج المكسيك', 'المحيط المتجمد الشمالي'],
    celebrities: [
      { name: "Tom Hanks", nameAr: "توم هانكس", profession: "ممثل", knownFor: "ممثل أمريكي عالمي، حائز على جائزتي أوسكار." },
      { name: "Beyoncé", nameAr: "بيونسيه", profession: "مطربة", knownFor: "مطربة ومنتجة أمريكية عالمية، إحدى أعظم نجمات البوب." },
      { name: "Michael Jordan", nameAr: "مايكل جوردن", profession: "لاعب كرة سلة", knownFor: "أعظم لاعب كرة سلة في التاريخ، أسطورة شيكاغو بولز." },
      { name: "Steve Jobs", nameAr: "ستيف جوبز", profession: "رجل أعمال", knownFor: "مؤسس شركة آبل، أحد أعظم رواد التكنولوجيا في العالم." },
    ],
    previousLeaders: [
      { name: "George Washington", nameAr: "جورج واشنطن", title: "رئيس", from: "1789", to: "1797" },
      { name: "Abraham Lincoln", nameAr: "أبراهام لينكون", title: "رئيس", from: "1861", to: "1865" },
      { name: "Franklin D. Roosevelt", nameAr: "فرانكلين روزفلت", title: "رئيس", from: "1933", to: "1945" },
      { name: "Barack Obama", nameAr: "باراك أوباما", title: "رئيس", from: "2009", to: "2017" },
      { name: "Donald Trump", nameAr: "دونالد ترامب", title: "رئيس", from: "2017", to: "2021" },
    ],
    leaderChildren: ['هانتر بايدن', 'آشلي بايدن', 'إيفانكا ترامب', 'دونالد ترامب الابن', 'إريك ترامب'],
  },
  cn: {
    landmarkDetails: [
      { name: "Great Wall of China", nameAr: "سور الصين العظيم", type: "سور", description: "أطول سور في العالم، أحد عجائب الدنيا السبع الجديدة، يمتد لآلاف الكيلومترات." },
      { name: "Forbidden City", nameAr: "المدينة المحرمة", type: "قصر", description: "القصر الإمبراطوري في بكين، أكبر مجموعة قصور خشبية في العالم." },
      { name: "Terracotta Army", nameAr: "جيش التيراكوتا", type: "تماثيل", description: "آلاف التماثيل الطينية لجنود وخيول في موقع دفن الإمبراطور تشين." },
      { name: "Yangtze River", nameAr: "نهر اليانغتسي", type: "نهر", description: "أطول نهر في آسيا، أحد أهم الممرات المائية والاقتصادية في الصين." },
    ],
    riverDetails: [
      { name: "Yangtze River", nameAr: "نهر اليانغتسي", length: "6,300 كم", description: "أطول نهر في آسيا وثالث أطول نهر في العالم." },
      { name: "Yellow River", nameAr: "النهر الأصفر", length: "5,464 كم", description: "ثاني أطول نهر في الصين، مهد الحضارة الصينية القديمة." },
    ],
    lakeDetails: [
      { name: "Dongting Lake", nameAr: "بحيرة دونغتينغ", area: "2,820 كم²", description: "ثاني أكبر بحيرة للمياه العذبة في الصين، في مقاطعة هونان." },
      { name: "Poyang Lake", nameAr: "بحيرة بو يانغ", area: "3,585 كم²", description: "أكبر بحيرة مياه عذبة في الصين، تقع في مقاطعة جيانغشي." },
    ],
    borderingSeas: ['بحر الصين الشرقي', 'بحر الصين الجنوبي', 'البحر الأصفر'],
    celebrities: [
      { name: "Jackie Chan", nameAr: "جاكي شان", profession: "ممثل", knownFor: "ممثل ومخرج صيني عالمي، أسطورة أفلام الحركة والكوميديا." },
      { name: "Yao Ming", nameAr: "ياو مينغ", profession: "لاعب كرة سلة", knownFor: "لاعب كرة سلة صيني عملاق، نجم سابق في NBA." },
      { name: "Liu Yifei", nameAr: "ليو يي فاي", profession: "ممثلة", knownFor: "ممثلة صينية عالمية، بطلة فيلم Mulan من ديزني." },
    ],
    previousLeaders: [
      { name: "Mao Zedong", nameAr: "ماو تسي تونغ", title: "رئيس", from: "1949", to: "1976" },
      { name: "Deng Xiaoping", nameAr: "دنغ شياو بينغ", title: "زعيم", from: "1978", to: "1989" },
      { name: "Jiang Zemin", nameAr: "جيانغ زيمين", title: "رئيس", from: "1993", to: "2003" },
      { name: "Hu Jintao", nameAr: "هو جينتاو", title: "رئيس", from: "2003", to: "2013" },
      { name: "Xi Jinping", nameAr: "شي جين بينغ", title: "رئيس", from: "2013", to: "حتى الآن" },
    ],
    leaderChildren: ['شي مينغزه (ابنة شي جين بينغ)'],
  },
  ru: {
    landmarkDetails: [
      { name: "Kremlin", nameAr: "الكرملين", type: "قلعة", description: "مجمع تاريخي محصن في موسكو، مقر الرئاسة الروسية وأحد رموز روسيا." },
      { name: "Red Square", nameAr: "الساحة الحمراء", type: "ساحة", description: "الساحة الرئيسية في موسكو، موقع تاريخي وثقافي عالمي." },
      { name: "Saint Basil's Cathedral", nameAr: "كاتدرائية القديس باسيل", type: "كنيسة", description: "كاتدرائية أيقونية في الساحة الحمراء بقبابها البصلية الملونة." },
      { name: "Lake Baikal", nameAr: "بحيرة بايكال", type: "بحيرة", description: "أعمق وأقدم بحيرة في العالم، تحتوي خُمس المياه العذبة السطحية على الأرض." },
    ],
    riverDetails: [
      { name: "Volga River", nameAr: "نهر الفولغا", length: "3,530 كم", description: "أطول نهر في أوروبا، شريان الحياة الروسي." },
      { name: "Lena River", nameAr: "نهر لينا", length: "4,400 كم", description: "أحد أطول الأنهار في العالم، يجري في سيبيريا الشرقية." },
      { name: "Ob River", nameAr: "نهر أوب", length: "3,650 كم", description: "نهر ضخم في غرب سيبيريا، من أطول أنهار العالم." },
    ],
    lakeDetails: [
      { name: "Lake Baikal", nameAr: "بحيرة بايكال", area: "31,722 كم²", description: "أعمق (1,642 م) وأقدم (25 مليون سنة) بحيرة في العالم." },
      { name: "Lake Ladoga", nameAr: "بحيرة لادوغا", area: "17,700 كم²", description: "أكبر بحيرة في أوروبا، تقع في شمال غرب روسيا." },
    ],
    borderingSeas: ['المحيط المتجمد الشمالي', 'المحيط الهادئ', 'بحر البلطيق', 'البحر الأسود', 'بحر قزوين'],
    celebrities: [
      { name: "Leo Tolstoy", nameAr: "ليو تولستوي", profession: "كاتب", knownFor: "أحد أعظم كتاب الروايات في التاريخ، مؤلف الحرب والسلام." },
      { name: "Yuri Gagarin", nameAr: "يوري غاغارين", profession: "رائد فضاء", knownFor: "أول إنسان يسافر إلى الفضاء الخارجي في 1961." },
      { name: "Vladimir Putin", nameAr: "فلاديمير بوتين", profession: "سياسي", knownFor: "رئيس روسيا الحالي، أحد أقوى السياسيين في العالم." },
    ],
    previousLeaders: [
      { name: "Peter the Great", nameAr: "بطرس الأكبر", title: "قيصر", from: "1682", to: "1725" },
      { name: "Catherine the Great", nameAr: "كاثرين العظيمة", title: "إمبراطورة", from: "1762", to: "1796" },
      { name: "Nicholas II", nameAr: "نيكولاس الثاني", title: "قيصر", from: "1894", to: "1917" },
      { name: "Vladimir Lenin", nameAr: "لينين", title: "زعيم", from: "1917", to: "1924" },
      { name: "Joseph Stalin", nameAr: "ستالين", title: "زعيم", from: "1924", to: "1953" },
      { name: "Boris Yeltsin", nameAr: "يلتسن", title: "رئيس", from: "1991", to: "1999" },
    ],
    leaderChildren: ['ماريا فورونتسوفا', 'إيكاترينا تيخونوفا'],
  },
  gb: {
    landmarkDetails: [
      { name: "Big Ben", nameAr: "ساعة بيغ بن", type: "ساعة", description: "برج ساعة البرلمان في لندن، أيقونة المملكة المتحدة الأكثر شهرة." },
      { name: "Buckingham Palace", nameAr: "قصر باكنغهام", type: "قصر", description: "المقر الرسمي للملك تشارلز الثالث في لندن." },
      { name: "Stonehenge", nameAr: "ستونهنج", type: "موقع أثري", description: "نصب حجري يعود لعصور ما قبل التاريخ، من أغرب وأشهر المواقع الأثرية." },
      { name: "Tower Bridge", nameAr: "جسر البرج", type: "جسر", description: "جسر متحرك في لندن فوق نهر التايمز، من أشهر الجسور في العالم." },
    ],
    riverDetails: [
      { name: "River Thames", nameAr: "نهر التايمز", length: "346 كم", description: "أشهر نهر في المملكة المتحدة، يجري عبر وسط لندن." },
      { name: "River Severn", nameAr: "نهر سيفيرن", length: "354 كم", description: "أطول نهر في المملكة المتحدة، ينبع في ويلز ويصب في القنال الإنجليزي." },
    ],
    lakeDetails: [
      { name: "Loch Ness", nameAr: "بحيرة لوخ نيس", area: "56 كم²", description: "بحيرة عميقة في اسكتلندا، اشتهرت بأسطورة وحش بحيرة لوخ نيس." },
      { name: "Lake Windermere", nameAr: "بحيرة ويندرمير", area: "15 كم²", description: "أكبر بحيرة طبيعية في إنجلترا، في منطقة البحيرات الجميلة." },
    ],
    borderingSeas: ['البحر الأيرلندي', 'بحر الشمال', 'القنال الإنجليزي', 'المحيط الأطلسي'],
    celebrities: [
      { name: "William Shakespeare", nameAr: "شكسبير", profession: "كاتب", knownFor: "أعظم كاتب مسرحي في التاريخ، مؤلف هاملت وروميو وجولييت." },
      { name: "Winston Churchill", nameAr: "وينستون تشرشل", profession: "سياسي", knownFor: "رئيس وزراء بريطانيا خلال الحرب العالمية الثانية." },
      { name: "Ed Sheeran", nameAr: "إد شيران", profession: "مطرب", knownFor: "مطرب وكاتب أغاني بريطاني عالمي." },
      { name: "Emma Watson", nameAr: "إيما واتسون", profession: "ممثلة", knownFor: "ممثلة بريطانية، اشتهرت بشخصية هيرمينجر في هاري بوتر." },
    ],
    previousLeaders: [
      { name: "Winston Churchill", nameAr: "وينستون تشرشل", title: "رئيس وزراء", from: "1940", to: "1955" },
      { name: "Margaret Thatcher", nameAr: "مارغريت تاتشر", title: "رئيسة وزراء", from: "1979", to: "1990" },
      { name: "Tony Blair", nameAr: "توني بلير", title: "رئيس وزراء", from: "1997", to: "2007" },
      { name: "David Cameron", nameAr: "ديفيد كاميرون", title: "رئيس وزراء", from: "2010", to: "2016" },
    ],
    leaderChildren: ['الملك تشارلز الثالث (ابن إليزابيث الثانية)', 'الأميرة آن', 'الأمير أندرو', 'الأمير إدوارد'],
  },
  fr: {
    landmarkDetails: [
      { name: "Eiffel Tower", nameAr: "برج إيفل", type: "برج", description: "أشهر برج في العالم، رمز باريس وفرنسا، صممه غوستاف إيفل." },
      { name: "Louvre Museum", nameAr: "متحف اللوفر", type: "متحف", description: "أكبر متحف فني في العالم، يضم الموناليزا وآلاف التحف الفنية." },
      { name: "Palace of Versailles", nameAr: "قصر فرساي", type: "قصر", description: "قصر ملكي فخم خارج باريس، أعجوبة معمارية وحدائق خلابة." },
      { name: "Notre-Dame Cathedral", nameAr: "كاتدرائية نوتردام", type: "كاتدرائية", description: "كاتدرائية قوطية شهيرة في قلب باريس، تحفة معمارية عمرها 800 عام." },
    ],
    riverDetails: [
      { name: "Seine River", nameAr: "نهر السين", length: "776 كم", description: "نهر باريس الشهير، يقسم المدينة إلى ضفتين، أحد أشهر أنهار أوروبا." },
      { name: "Loire River", nameAr: "نهر اللوار", length: "1,012 كم", description: "أطول نهر في فرنسا، تشتهر ضفافه بقصور العصر النهضة." },
      { name: "Rhône River", nameAr: "نهر الرون", length: "813 كم", description: "نهر رئيسي في جنوب شرق فرنسا، ينبع من الألب السويسرية." },
    ],
    lakeDetails: [
      { name: "Lake Geneva", nameAr: "بحيرة جنيف", area: "582 كم²", description: "أكبر بحيرة في أوروبا الغربية، مشتركة بين فرنسا وسويسرا." },
      { name: "Lake Bourget", nameAr: "بحيرة بورجيه", area: "45 كم²", description: "أكبر بحيرة طبيعية في فرنسا، تقع في جبال الألب الفرنسية." },
    ],
    borderingSeas: ['البحر الأبيض المتوسط', 'المحيط الأطلسي', 'القنال الإنجليزي'],
    celebrities: [
      { name: "Napoleon Bonaparte", nameAr: "نابليون بونابرت", profession: "قائد", knownFor: "إمبراطور فرنسا وقائد عسكري عظيم غير وجه أوروبا." },
      { name: "Édith Piaf", nameAr: "إديث بياف", profession: "مطربة", knownFor: "أيقونة الغناء الفرنسي، صوت باريس الخالد." },
      { name: "Zinedine Zidane", nameAr: "زين الدين زيدان", profession: "لاعب كرة قدم", knownFor: "أسطورة كرة القدم الفرنسية، أفضل لاعب في العالم 3 مرات." },
      { name: "Brigitte Bardot", nameAr: "بريجيت باردو", profession: "ممثلة", knownFor: "ممثلة وأيقونة جمال فرنسية عالمية في الخمسينات والستينات." },
    ],
    previousLeaders: [
      { name: "Charles de Gaulle", nameAr: "شارل ديغول", title: "رئيس", from: "1959", to: "1969" },
      { name: "François Mitterrand", nameAr: "فرانسوا ميتران", title: "رئيس", from: "1981", to: "1995" },
      { name: "Jacques Chirac", nameAr: "جاك شيراك", title: "رئيس", from: "1995", to: "2007" },
      { name: "Nicolas Sarkozy", nameAr: "نيكولا ساركوزي", title: "رئيس", from: "2007", to: "2012" },
      { name: "François Hollande", nameAr: "فرانسوا هولاند", title: "رئيس", from: "2012", to: "2017" },
    ],
    leaderChildren: ['إيمانويل ماكرون (لا يوجد أبناء)'],
  },
  de: {
    landmarkDetails: [
      { name: "Brandenburg Gate", nameAr: "بوابة براندنبورغ", type: "بوابة", description: "أشهر معلم في برلين، بوابة نصر كلاسيكية ورمز الوحدة الألمانية." },
      { name: "Neuschwanstein Castle", nameAr: "قلعة نويشفانشتاين", type: "قلعة", description: "قلعة خيالية في جبال الألب البافارية، ألهمت قلعة ديزني." },
      { name: "Cologne Cathedral", nameAr: "كاتدرائية كولونيا", type: "كاتدرائية", description: "أكبر كاتدرائية قوطية في شمال أوروبا، موقع تراث عالمي." },
      { name: "Berlin Wall", nameAr: "جدار برلين", type: "نصب تذكاري", description: "الجدار الذي قسم برلين خلال الحرب الباردة، رمز الحرية والتوحيد." },
    ],
    riverDetails: [
      { name: "Rhine River", nameAr: "نهر الراين", length: "1,230 كم", description: "أهم نهر في ألمانيا، شريان اقتصادي وسياحي عبر أوروبا الغربية." },
      { name: "Elbe River", nameAr: "نهر إلبه", length: "1,094 كم", description: "نهر رئيسي في وسط أوروبا، يجري عبر ألمانيا وجمهورية التشيك." },
      { name: "Danube River", nameAr: "نهر الدانوب", length: "2,850 كم", description: "ثاني أطول نهر في أوروبا، يمر عبر عشر دول من ألمانيا إلى البحر الأسود." },
    ],
    lakeDetails: [
      { name: "Lake Constance", nameAr: "بحيرة كونستانس", area: "536 كم²", description: "بحيرة كبيرة مشتركة بين ألمانيا وسويسرا والنمسا في جبال الألب." },
      { name: "Lake Müritz", nameAr: "بحيرة موريتز", area: "7 كم²", description: "أكبر بحيرة في شمال ألمانيا، ضمن حديقة موريتز الوطنية." },
    ],
    borderingSeas: ['بحر الشمال', 'بحر البلطيق'],
    celebrities: [
      { name: "Ludwig van Beethoven", nameAr: "بيتهوفن", profession: "ملحن", knownFor: "أحد أعظم الملحنين في التاريخ الغربي، موسيقاه خالدة." },
      { name: "Albert Einstein", nameAr: "ألبرت أينشتاين", profession: "عالم", knownFor: "أشهر عالم في التاريخ، صاحب نظرية النسبية." },
      { name: "Angela Merkel", nameAr: "أنجيلا ميركل", profession: "سياسية", knownFor: "أول امرأة تتولى مستشارية ألمانيا، أقوى امرأة في العالم." },
      { name: "Manuel Neuer", nameAr: "مانويل نوير", profession: "لاعب كرة قدم", knownFor: "أفضل حارس مرمى في العالم، قائد منتخب ألمانيا وبايرن ميونخ." },
    ],
    previousLeaders: [
      { name: "Otto von Bismarck", nameAr: "أوتو فون بسمارك", title: "مستشار", from: "1871", to: "1890" },
      { name: "Adolf Hitler", nameAr: "أدولف هتلر", title: "مستشار", from: "1933", to: "1945" },
      { name: "Konrad Adenauer", nameAr: "كونراد أديناور", title: "مستشار", from: "1949", to: "1963" },
      { name: "Helmut Kohl", nameAr: "هلموت كول", title: "مستشار", from: "1982", to: "1998" },
      { name: "Angela Merkel", nameAr: "أنجيلا ميركل", title: "مستشارة", from: "2005", to: "2021" },
    ],
    leaderChildren: ['أنجيلا ميركل (لا يوجد)', 'أولاف شولتس (لا يوجد)'],
  },
  in: {
    landmarkDetails: [
      { name: "Taj Mahal", nameAr: "تاج محل", type: "ضريح", description: "ضريح رخامي أبيض في أغرا، إحدى عجائب الدنيا السبع الجديدة." },
      { name: "Red Fort", nameAr: "القلعة الحمراء", type: "قلعة", description: "قلعة تاريخية ضخمة في دلهي، موقع تراث عالمي وأيقونة الهند." },
      { name: "Varanasi Ghats", nameAr: "غاتس فاراناسي", type: "سلالم نهرية", description: "سلالم نهرية على ضفاف الغانج في أقدس مدن الهند." },
      { name: "India Gate", nameAr: "بوابة الهند", type: "نصب تذكاري", description: "نصب تذكاري في نيودلهي، تكريماً للجنود الهنود." },
    ],
    riverDetails: [
      { name: "Ganges River", nameAr: "نهر الغانج", length: "2,525 كم", description: "أقدس نهر في الهند، شريان الحياة لشمال الهند." },
      { name: "Indus River", nameAr: "نهر السند", length: "3,180 كم", description: "أحد أطول أنهار آسيا، مهد حضارة وادي السند القديمة." },
      { name: "Brahmaputra River", nameAr: "نهر براهمابوترا", length: "2,900 كم", description: "نهر عابر للحدود يجري في التبت والهند وبنغلاديش." },
    ],
    lakeDetails: [
      { name: "Chilika Lake", nameAr: "بحيرة تشيلكا", area: "1,100 كم²", description: "أكبر بحيرة ساحلية في الهند، محمية طبيعية للطيور المهاجرة." },
      { name: "Dal Lake", nameAr: "بحيرة دال", area: "18 كم²", description: "بحيرة خلابة في سريناغار بكشمير، جوهرة وادي كشمير." },
    ],
    borderingSeas: ['المحيط الهندي', 'خليج البنغال', 'بحر العرب'],
    celebrities: [
      { name: "Mahatma Gandhi", nameAr: "مهاتما غاندي", profession: "زعيم", knownFor: "قائد استقلال الهند، أبو الأمة الهندية، فيلسوف المقاومة السلمية." },
      { name: "Shahid Kapoor", nameAr: "شاهد كابور", profession: "ممثل", knownFor: "ممثل بوليوودي شهير، من نجوم السينما الهندية." },
      { name: "Priyanka Chopra", nameAr: "بريانكا شوبرا", profession: "ممثلة", knownFor: "ممثلة هندية عالمية، ملكة جمال العالم سابقاً." },
      { name: "Sachin Tendulkar", nameAr: "ساشين تيندولكار", profession: "لاعب كريكيت", knownFor: "أعظم لاعب كريكيت في التاريخ، إله الكريكيت الهندي." },
    ],
    previousLeaders: [
      { name: "Jawaharlal Nehru", nameAr: "جواهر لال نهرو", title: "رئيس وزراء", from: "1947", to: "1964" },
      { name: "Indira Gandhi", nameAr: "أنديرا غاندي", title: "رئيسة وزراء", from: "1966", to: "1984" },
      { name: "Rajiv Gandhi", nameAr: "راجيف غاندي", title: "رئيس وزراء", from: "1984", to: "1989" },
      { name: "Narendra Modi", nameAr: "ناريندرا مودي", title: "رئيس وزراء", from: "2014", to: "حتى الآن" },
    ],
    leaderChildren: ['راجيف غاندي (ابن أنديرا)', 'سانجاي غاندي (ابن أنديرا)'],
  },
  jp: {
    landmarkDetails: [
      { name: "Mount Fuji", nameAr: "جبل فوجي", type: "جبل", description: "أعلى جبل في اليابان (3,776 م)، رمز اليابان الأكثر شهرة." },
      { name: "Osaka Castle", nameAr: "قلعة أوساكا", type: "قلعة", description: "قلعة تاريخية يابانية رائعة، من أشهر قلاع فترة الإيدو." },
      { name: "Kinkaku-ji", nameAr: "معبد كينكاكو-جي", type: "معبد", description: "معبد مذهب في كيوتو، من أجمل المعابد البوذية في اليابان." },
      { name: "Tokyo Tower", nameAr: "برج طوكيو", type: "برج", description: "برج الاتصالات في طوكيو، مستوحى من برج إيفل، رمز العاصمة." },
    ],
    riverDetails: [
      { name: "Shinano River", nameAr: "نهر شينانو", length: "367 كم", description: "أطول نهر في اليابان، يجري في منطقة تشوبو." },
      { name: "Tone River", nameAr: "نهر توني", length: "322 كم", description: "ثاني أطول نهر في اليابان، مصدر رئيسي للمياه في منطقة كانتو." },
    ],
    lakeDetails: [
      { name: "Lake Biwa", nameAr: "بحيرة بيوا", area: "670 كم²", description: "أكبر بحيرة في اليابان، من أقدم البحيرات في العالم." },
      { name: "Lake Kawaguchi", nameAr: "بحيرة كاواغوتشي", area: "6 كم²", description: "بحيرة خلابة مع منظر رائع لجبل فوجي، وجهة سياحية شهيرة." },
    ],
    borderingSeas: ['المحيط الهادئ', 'بحر اليابان', 'بحر أوخوتسك'],
    celebrities: [
      { name: "Akira Kurosawa", nameAr: "أكيرا كوروساوا", profession: "مخرج", knownFor: "أعظم مخرج ياباني، صانع أفلام الساموراي الخالدة." },
      { name: "Hayao Miyazaki", nameAr: "هاياو ميازاكي", profession: "مخرج أنمي", knownFor: "أشهر مخرج أنمي في العالم، مؤسس استوديو جيبلي." },
      { name: "Naomi Osaka", nameAr: "نايومي أوساكا", profession: "لاعبة تنس", knownFor: "بطلة تنس يابانية، مصنفة الأولى عالمياً سابقاً." },
      { name: "Yoko Ono", nameAr: "يوكو أونو", profession: "فنانة", knownFor: "فنانة طليعية وناشطة سلام، أرملة جون لينون." },
    ],
    previousLeaders: [
      { name: "Emperor Hirohito", nameAr: "الإمبراطور هيروهيتو", title: "إمبراطور", from: "1926", to: "1989" },
      { name: "Hayato Ikeda", nameAr: "هاياتو إيكيدا", title: "رئيس وزراء", from: "1960", to: "1964" },
      { name: "Yasuhiro Nakasone", nameAr: "ياسوهيرو ناكاسوني", title: "رئيس وزراء", from: "1982", to: "1987" },
      { name: "Shinzo Abe", nameAr: "شينزو آبي", title: "رئيس وزراء", from: "2012", to: "2020" },
    ],
    leaderChildren: ['الأميرة أيكو (ابنة الإمبراطور ناروهيتو)', 'شينزو آبي (لا يوجد)'],
  },
  kr: {
    landmarkDetails: [
      { name: "Gyeongbokgung Palace", nameAr: "قصر غيونغبوك", type: "قصر", description: "أكبر قصر ملكي من عصر جوسون في سيول، رمز الثقافة الكورية." },
      { name: "N Seoul Tower", nameAr: "برج سيول N", type: "برج", description: "برج اتصالات على جبل نامسان، أشهر معالم سيول الحديثة." },
      { name: "Jeju Island", nameAr: "جزيرة جيجو", type: "جزيرة", description: "جزيرة بركانية خلابة، عجيبة طبيعية ووجهة سياحية عالمية." },
      { name: "DMZ", nameAr: "منطقة دي إم زد", type: "منطقة منزوعة السلاح", description: "المنطقة منزوعة السلاح بين الكوريتين، منطقة عازلة فريدة." },
    ],
    riverDetails: [
      { name: "Han River", nameAr: "نهر الهان", length: "514 كم", description: "النهر الرئيسي في كوريا الجنوبية، يجري عبر سيول." },
      { name: "Nakdong River", nameAr: "نهر ناكدونغ", length: "510 كم", description: "أطول نهر في كوريا الجنوبية، مصدر رئيسي للمياه." },
    ],
    lakeDetails: [],
    borderingSeas: ['البحر الأصفر', 'بحر اليابان', 'مضيق كوريا'],
    celebrities: [
      { name: "BTS (RM)", nameAr: "بوب (آر إم)", profession: "مغني", knownFor: "قائد فرقة BTS العالمية، أشهر فرقة بوب في العالم." },
      { name: "IU", nameAr: "أيو", profession: "مغنية", knownFor: "مغنية وكاتبة أغاني كورية، نجمة البوب الكوري." },
      { name: "Park Chan-wook", nameAr: "بارك تشان ووك", profession: "مخرج", knownFor: "مخرج سينمائي كوري عالمي، صائد الجوائز الدولية." },
      { name: "Son Heung-min", nameAr: "سون هيونغ مين", profession: "لاعب كرة قدم", knownFor: "أفضل لاعب كرة قدم كوري، نجم توتنهام هوتسبير." },
    ],
    previousLeaders: [
      { name: "Park Chung-hee", nameAr: "باك تشونغ هي", title: "رئيس", from: "1962", to: "1979" },
      { name: "Kim Dae-jung", nameAr: "كيم داي جونغ", title: "رئيس", from: "1998", to: "2003" },
      { name: "Roh Moo-hyun", nameAr: "روه مو هيون", title: "رئيس", from: "2003", to: "2008" },
      { name: "Moon Jae-in", nameAr: "مون جاي إن", title: "رئيس", from: "2017", to: "2022" },
    ],
    leaderChildren: ['كيم داي جونغ (3 أبناء)'],
  },
  br: {
    landmarkDetails: [
      { name: "Christ the Redeemer", nameAr: "تمثال المسيح الفادي", type: "تمثال", description: "تمثال ضخم للمسيح على قمة جبل كوركوفادو في ريو دي جانيرو، أحد عجائب الدنيا السبع الجديدة." },
      { name: "Iguazu Falls", nameAr: "شلالات إجوازو", type: "شلال", description: "واحدة من أروع منظومات الشلالات في العالم، على الحدود بين البرازيل والأرجنتين." },
      { name: "Corcovado", nameAr: "كوركوفادو", type: "جبل", description: "جبل يطل على ريو دي جانيرو، يعلوه تمثال المسيح الفادي الشهير." },
      { name: "Copacabana Beach", nameAr: "شاطئ كوباكابانا", type: "شاطئ", description: "أشهر شواطئ العالم، يمتد لمسافة 4 كم في ريو دي جانيرو." },
    ],
    riverDetails: [
      { name: "Amazon River", nameAr: "نهر الأمازون", length: "6,992 كم", description: "أطول وأكبر نهر في العالم من حيث حجم المياه، يجري في غابات الأمازون المطيرة." },
      { name: "Paraná River", nameAr: "نهر بارانا", length: "4,880 كم", description: "ثاني أطول نهر في أمريكا الجنوبية، يشكل حدوداً طبيعية بين البرازيل وباراغواي والأرجنتين." },
    ],
    lakeDetails: [
      { name: "Lagoa dos Patos", nameAr: "بحيرة لاغوا دوس باتوس", area: "10,000 كم²", description: "أكبر بحيرة في البرازيل، بحيرة ساحلية ضحلة في ولاية ريو غراندي دو سول." },
      { name: "Lake Patos", nameAr: "بحيرة باتوس", area: "11,000 كم²", description: "بحيرة ساحلية كبيرة في جنوب البرازيل، مفصولة عن المحيط الأطلسي بحاجز رملي." },
    ],
    borderingSeas: ['المحيط الأطلسي'],
    celebrities: [
      { name: "Pelé", nameAr: "بيليه", profession: "لاعب كرة قدم", knownFor: "أسطورة كرة القدم البرازيلية، أفضل لاعب في القرن العشرين." },
      { name: "Neymar", nameAr: "نيمار", profession: "لاعب كرة قدم", knownFor: "نجم كرة القدم البرازيلي، أحد أشهر الرياضيين في العالم." },
      { name: "Gisele Bündchen", nameAr: "جيسيل بوندشين", profession: "عارضة أزياء", knownFor: "أشهر عارضة أزياء برازيلية في العالم، أيقونة الموضة العالمية." },
      { name: "Paulo Coelho", nameAr: "باولو كويلو", profession: "كاتب", knownFor: "كاتب برازيلي عالمي، مؤلف رواية الخيميائي الأكثر مبيعاً." },
    ],
    previousLeaders: [
      { name: "Getúlio Vargas", nameAr: "جيتوليو فارجاس", title: "رئيس", from: "1930", to: "1945" },
      { name: "Juscelino Kubitschek", nameAr: "جوسيلينو كوبيتشيك", title: "رئيس", from: "1956", to: "1961" },
      { name: "Luiz Inácio Lula da Silva", nameAr: "لويس إيناسيو لولا دا سيلفا", title: "رئيس", from: "2003", to: "2011" },
      { name: "Dilma Rousseff", nameAr: "ديلما روسيف", title: "رئيسة", from: "2011", to: "2016" },
    ],
    leaderChildren: ['لولا دا سيلفا (5 أبناء)'],
  },
  tr: {
    landmarkDetails: [
      { name: "Hagia Sophia", nameAr: "آيا صوفيا", type: "مسجد/متحف", description: "أحد أعظم الصروح المعمارية في التاريخ، جامع ومتحف سابقاً في إسطنبول." },
      { name: "Topkapi Palace", nameAr: "قصر توبكابي", type: "قصر", description: "القصر الملكي للسلاطين العثمانيين في إسطنبول، متحف اليوم." },
      { name: "Cappadocia", nameAr: "كابادوكيا", type: "منطقة طبيعية", description: "منطقة طبيعية خلابة بتكويناتها الصخرية الفريدة ومدنها تحت الأرض." },
      { name: "Blue Mosque", nameAr: "الجامع الأزرق", type: "مسجد", description: "مسجد سلطان أحمد في إسطنبول، يتميز بمآذنه الست وقبابه الرائعة." },
    ],
    riverDetails: [
      { name: "Tigris River", nameAr: "نهر دجلة", length: "1,900 كم", description: "نهر دولي ينبع من شرق تركيا ويجري عبر سوريا والعراق." },
      { name: "Euphrates River", nameAr: "نهر الفرات", length: "2,800 كم", description: "أطول نهر في غرب آسيا، ينبع من شرق تركيا." },
      { name: "Kızılırmak River", nameAr: "نهر قيزيل إرماك", length: "1,355 كم", description: "أطول نهر يقع بالكامل داخل الأراضي التركية." },
    ],
    lakeDetails: [
      { name: "Lake Van", nameAr: "بحيرة وان", area: "3,755 كم²", description: "أكبر بحيرة في تركيا، بحيرة مالحة في شرق الأناضول." },
      { name: "Lake Tuz", nameAr: "بحيرة توز", area: "1,665 كم²", description: "ثاني أكبر بحيرة في تركيا، بحيرة مالحة ضحلة في وسط الأناضول." },
    ],
    borderingSeas: ['البحر الأبيض المتوسط', 'بحر إيجة', 'بحر مرمرة', 'البحر الأسود'],
    celebrities: [
      { name: "Mustafa Kemal Atatürk", nameAr: "مصطفى كمال أتاتورك", profession: "قائد", knownFor: "مؤسس الجمهورية التركية الحديثة، أحد أعظم قادة القرن العشرين." },
      { name: "Tarık Akan", nameAr: "طارق أكان", profession: "ممثل", knownFor: "ممثل تركي شهير، من نجوم السينما التركية الكلاسيكية." },
      { name: "Murat Yıldırım", nameAr: "مراد يلدرم", profession: "ممثل", knownFor: "ممثل تركي معروف بأعماله في الدراما التركية والعالمية." },
      { name: "Tuba Büyüküstün", nameAr: "توبا بويوك أوستون", profession: "ممثلة", knownFor: "ممثلة تركية شهيرة، من أشهر نجمات الدراما التركية." },
    ],
    previousLeaders: [
      { name: "Mustafa Kemal Atatürk", nameAr: "مصطفى كمال أتاتورك", title: "رئيس", from: "1923", to: "1938" },
      { name: "İsmet İnönü", nameAr: "عصمت إينونو", title: "رئيس", from: "1938", to: "1950" },
      { name: "Turgut Özal", nameAr: "توركوت أوزال", title: "رئيس", from: "1989", to: "1993" },
      { name: "Recep Tayyip Erdoğan", nameAr: "رجب طيب أردوغان", title: "رئيس", from: "2014", to: "حتى الآن" },
    ],
    leaderChildren: ['أحمد أردوغان', 'أمينة أردوغان', 'بلال أردوغان', 'سمية أردوغان'],
  },
  ir: {
    landmarkDetails: [
      { name: "Naqsh-e Jahan Square", nameAr: "ميدان نقش جهان", type: "ميدان", description: "ساحة ضخمة في أصفهان، من روائع العمارة الصفوية وموقع تراث عالمي." },
      { name: "Persepolis", nameAr: "تخت جمشيد", type: "قصر أثرية", description: "عاصمة الإمبراطورية الأخمينية، أحد أعظم المواقع الأثرية في العالم." },
      { name: "Shah Mosque", nameAr: "مسجد شاه", type: "مسجد", description: "مسجد رائع في أصفهان، تحفة معمارية من العصر الصفوي." },
      { name: "Mount Damavand", nameAr: "جبل دماوند", type: "جبل", description: "أعلى قمة في إيران والشرق الأوسط، بركان خامد ذو أهمية أسطورية." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Lake Urmia", nameAr: "بحيرة أرومية", area: "5,200 كم²", description: "بحيرة مالحة في شمال غرب إيران، كانت أكبر بحيرة في الشرق الأوسط." },
    ],
    borderingSeas: ['الخليج العربي', 'بحر قزوين', 'خليج عمان'],
    celebrities: [
      { name: "Shirin Ebadi", nameAr: "شيرين عبادي", profession: "محامية", knownFor: "محامية وناشطة حقوق إنسان إيرانية، حاصلة على جائزة نوبل للسلام." },
      { name: "Mulla Sadra", nameAr: "الملا صدرا", profession: "فيلسوف", knownFor: "فيلسوف ومتصوف إيراني، أحد أعظم فلاسفة الإسلام." },
      { name: "Asghar Farhadi", nameAr: "أصغر فرهادي", profession: "مخرج", knownFor: "مخرج سينمائي إيراني عالمي، حائز على جائزتي أوسكار." },
      { name: "Mohammad Khatami", nameAr: "محمد خاتمي", profession: "سياسي", knownFor: "رئيس إيران الأسبق، داعية حوار الحضارات." },
    ],
    previousLeaders: [
      { name: "Mohammad Reza Pahlavi", nameAr: "محمد رضا بهلوي", title: "شاه", from: "1941", to: "1979" },
      { name: "Ruhollah Khomeini", nameAr: "روح الله الخميني", title: "المرشد الأعلى", from: "1979", to: "1989" },
      { name: "Ali Khamenei", nameAr: "علي خامنئي", title: "المرشد الأعلى", from: "1989", to: "حتى الآن" },
      { name: "Hassan Rouhani", nameAr: "حسن روحاني", title: "رئيس", from: "2013", to: "2021" },
    ],
    leaderChildren: ['حسن روحاني (3 أبناء)'],
  },
  il: {
    landmarkDetails: [
      { name: "Western Wall", nameAr: "حائط البراق", type: "موقع ديني", description: "أقدس موقع لليهود في العالم القدس، بقايا الهيكل الثاني." },
      { name: "Al-Aqsa Mosque", nameAr: "المسجد الأقصى", type: "مسجد", description: "ثالث أقدس مسجد في الإسلام، قبلة المسلمين الأولى في القدس الشريف." },
      { name: "Church of the Holy Sepulchre", nameAr: "كنيسة القيامة", type: "كنيسة", description: "أقدس كنيسة في المسيحية، بنيت على موقع صلب وقيامة المسيح." },
      { name: "Dead Sea", nameAr: "البحر الميت", type: "منطقة طبيعية", description: "أخفض نقطة على وجه الأرض، مسطح مائي فريد بخصائصه العلاجية." },
    ],
    riverDetails: [
      { name: "Jordan River", nameAr: "نهر الأردن", length: "251 كم", description: "نهر مقدس في الديانات الثلاث، يجري عبر الوادي المتصدع." },
    ],
    lakeDetails: [
      { name: "Dead Sea", nameAr: "البحر الميت", area: "605 كم²", description: "أخفض بقعة على وجه الأرض وأكثر المسطحات المائية ملوحة." },
      { name: "Sea of Galilee", nameAr: "بحيرة طبريا", area: "166 كم²", description: "بحيرة مياه عذبة في شمال إسرائيل، موقع مقدس في المسيحية." },
    ],
    borderingSeas: ['البحر الأبيض المتوسط', 'البحر الميت', 'بحيرة طبريا'],
    celebrities: [
      { name: "Natalie Portman", nameAr: "ناتالي بورتمان", profession: "ممثلة", knownFor: "ممثلة إسرائيلية-أمريكية حائزة على جائزة أوسكار." },
      { name: "Golda Meir", nameAr: "غولدا مائير", profession: "سياسية", knownFor: "رئيسة وزراء إسرائيل الرابعة، أول امرأة تتولى المنصب." },
      { name: "Arnold Schwarzenegger", nameAr: "أرنولد شوارزنيجر", profession: "ممثل", knownFor: "ممثل وسياسي نمساوي-أمريكي، حاكم كاليفورنيا الأسبق." },
    ],
    previousLeaders: [
      { name: "David Ben-Gurion", nameAr: "دافيد بن غوريون", title: "رئيس وزراء", from: "1948", to: "1963" },
      { name: "Golda Meir", nameAr: "غولدا مائير", title: "رئيسة وزراء", from: "1969", to: "1974" },
      { name: "Menachem Begin", nameAr: "مناحم بيجن", title: "رئيس وزراء", from: "1977", to: "1983" },
      { name: "Benjamin Netanyahu", nameAr: "بنيامين نتنياهو", title: "رئيس وزراء", from: "1996", to: "حتى الآن" },
    ],
    leaderChildren: ['يائير نتنياهو', 'أبنير نتنياهو', 'نوآ نتنياهو'],
  },
  pk: {
    landmarkDetails: [
      { name: "Faisal Mosque", nameAr: "مسجد الملك فيصل", type: "مسجد", description: "أكبر مسجد في باكستان، تحفة معمارية حديثة في إسلام آباد." },
      { name: "Mazar-e-Quaid", nameAr: "ضريح جناح", type: "ضريح", description: "ضريح مؤسس باكستان محمد علي جناح في كراتشي." },
      { name: "Hunza Valley", nameAr: "وادي هونزا", type: "منطقة طبيعية", description: "وادي خلاب في جبال قراقرم، جوهرة طبيعية في شمال باكستان." },
      { name: "India Gate", nameAr: "بوابة الهند", type: "نصب", description: "نصب تذكاري في إسلام آباد يرمز للتراث الباكستاني." },
    ],
    riverDetails: [
      { name: "Indus River", nameAr: "نهر السند", length: "3,180 كم", description: "أطول نهر في باكستان، شريان الحياة ومهد حضارة وادي السند." },
      { name: "Jhelum River", nameAr: "نهر جيلم", length: "725 كم", description: "أحد روافد نهر السند الخمسة، يجري في إقليم البنجاب." },
    ],
    lakeDetails: [
      { name: "Saiful Muluk Lake", nameAr: "بحيرة سيف الملوك", area: "2.5 كم²", description: "بحيرة جبلية جميلة في وادي كاغان، محاطة بقمم الثلوج." },
    ],
    borderingSeas: ['بحر العرب'],
    celebrities: [
      { name: "Muhammad Ali Jinnah", nameAr: "محمد علي جناح", profession: "مؤسس", knownFor: "مؤسس دولة باكستان، القائد الأعظم." },
      { name: "Imran Khan", nameAr: "عمران خان", profession: "لاعب كريكت/سياسي", knownFor: "أسطورة الكريكت ثم رئيس وزراء باكستان." },
      { name: "Atif Aslam", nameAr: "عطا الله خان", profession: "مطرب", knownFor: "مطرب باكستاني عالمي، أحد أشهر أصوات جنوب آسيا." },
      { name: "Malala Yousafzai", nameAr: "ملالا يوسف زاي", profession: "ناشطة", knownFor: "ناشطة حقوق تعليم المرأة، أصغر حاصلة على نوبل للسلام." },
    ],
    previousLeaders: [
      { name: "Muhammad Ali Jinnah", nameAr: "محمد علي جناح", title: "حاكم عام", from: "1947", to: "1948" },
      { name: "Liaquat Ali Khan", nameAr: "لياقت علي خان", title: "رئيس وزراء", from: "1947", to: "1951" },
      { name: "Muhammad Zia-ul-Haq", nameAr: "ضياء الحق", title: "رئيس", from: "1978", to: "1988" },
      { name: "Imran Khan", nameAr: "عمران خان", title: "رئيس وزراء", from: "2018", to: "2022" },
    ],
    leaderChildren: ['سليمان عمران خان', 'قاسم عمران خان'],
  },
  it: {
    landmarkDetails: [
      { name: "Colosseum", nameAr: "الكولوسيوم", type: "مدرج", description: "مدرج روماني ضخم في روما، أحد عجائب الدنيا السبع الجديدة." },
      { name: "Leaning Tower of Pisa", nameAr: "برج بيزا المائل", type: "برج", description: "برج أجراس مائل مشهور عالمياً في ساحة المعجزات ببيزا." },
      { name: "Trevi Fountain", nameAr: "نافورة تريفي", type: "نافورة", description: "أجمل نافورة في العالم، تحفة باروكية في قلب روما." },
      { name: "Venice Canals", nameAr: "قنوات البندقية", type: "قنوات مائية", description: "شبكة قنوات مائية ساحرة في مدينة البندقية الرومانسية." },
    ],
    riverDetails: [
      { name: "Tiber River", nameAr: "نهر التيبر", length: "405 كم", description: "ثالث أطول نهر في إيطاليا، يجري عبر مدينة روما." },
      { name: "Po River", nameAr: "نهر بو", length: "652 كم", description: "أطول نهر في إيطاليا، شريان وادي بو الزراعي والصناعي." },
    ],
    lakeDetails: [
      { name: "Lake Garda", nameAr: "بحيرة غاردا", area: "370 كم²", description: "أكبر بحيرة في إيطاليا، وجهة سياحية خلابة في شمال البلاد." },
      { name: "Lake Como", nameAr: "بحيرة كومو", area: "146 كم²", description: "بحيرة فاخرة في جبال الألب، ملاذ المشاهير والأثرياء." },
    ],
    borderingSeas: ['البحر الأبيض المتوسط', 'البحر الأدرياتيكي', 'البحر الأيوني', 'البحر التيراني'],
    celebrities: [
      { name: "Leonardo da Vinci", nameAr: "ليوناردو دا فينشي", profession: "فنان", knownFor: "عبقري عصر النهضة، رسام الموناليزا والعشاء الأخير." },
      { name: "Luciano Pavarotti", nameAr: "لوتشيانو بافاروتي", profession: "مغني أوبرا", knownFor: "أشهر تينور في العالم، أيقونة الأوبرا الإيطالية." },
      { name: "Sophia Loren", nameAr: "صوفيا لورين", profession: "ممثلة", knownFor: "أسطورة السينما الإيطالية والعالمية، حائزة على أوسكار." },
      { name: "Roberto Baggio", nameAr: "روبرتو باجيو", profession: "لاعب كرة قدم", knownFor: "أسطورة كرة القدم الإيطالية، حائز على الكرة الذهبية." },
    ],
    previousLeaders: [
      { name: "Benito Mussolini", nameAr: "بينيتو موسوليني", title: "دوتشي", from: "1922", to: "1943" },
      { name: "Alcide De Gasperi", nameAr: "ألتشيدي دي غاسبيري", title: "رئيس وزراء", from: "1946", to: "1953" },
      { name: "Silvio Berlusconi", nameAr: "سيلفيو برلسكوني", title: "رئيس وزراء", from: "1994", to: "2011" },
    ],
    leaderChildren: ['مارينا برلسكوني', 'بييرسيلفيو برلسكوني', 'باربرا برلسكوني', 'إليونورا برلسكوني'],
  },
  es: {
    landmarkDetails: [
      { name: "Sagrada Familia", nameAr: "كاتدرائية ساغرادا فاميليا", type: "كاتدرائية", description: "تحفة أنطوني غاودي المعمارية في برشلونة، من أروع الكنائس في العالم." },
      { name: "Alhambra", nameAr: "قصر الحمراء", type: "قصر", description: "قصر وحصن أندلسي في غرناطة، جوهرة العمارة الإسلامية في إسبانيا." },
      { name: "Prado Museum", nameAr: "متحف برادو", type: "متحف", description: "أهم متحف فني في إسبانيا، يضم روائع كبار الرسامين." },
      { name: "Camp Nou", nameAr: "ملعب كامب نو", type: "ملعب", description: "أكبر ملعب كرة قدم في أوروبا، معقل نادي برشلونة." },
    ],
    riverDetails: [
      { name: "Ebro River", nameAr: "نهر إيبرو", length: "930 كم", description: "أطول نهر يقع بالكامل داخل إسبانيا، يجري في شمال شرق البلاد." },
      { name: "Tagus River", nameAr: "نهر تاجة", length: "1,038 كم", description: "أطول نهر في شبه الجزيرة الإيبيرية، يجري عبر إسبانيا والبرتغال." },
    ],
    lakeDetails: [
      { name: "Sanabria Lake", nameAr: "بحيرة سانابريا", area: "3.5 كم²", description: "أكبر بحيرة طبيعية في إسبانيا، تقع في جبال سانابريا." },
    ],
    borderingSeas: ['البحر الأبيض المتوسط', 'المحيط الأطلسي', 'بحر البليار'],
    celebrities: [
      { name: "Pablo Picasso", nameAr: "بابلو بيكاسو", profession: "رسام", knownFor: "أحد أعظم فناني القرن العشرين، مؤسس الحركة التكعيبية." },
      { name: "Rafael Nadal", nameAr: "رافاييل نادال", profession: "لاعب كرة مضرب", knownFor: "أسطورة التنس الإسبانية، بطل 14 مرة لبطولة رولان غاروس." },
      { name: "Penélope Cruz", nameAr: "بينيلوبي كروز", profession: "ممثلة", knownFor: "ممثلة إسبانية عالمية، حائزة على جائزة أوسكار." },
      { name: "Miguel de Cervantes", nameAr: "ميغيل دي ثيربانتس", profession: "كاتب", knownFor: "مؤلف دون كيشوت، أعظم كاتب في اللغة الإسبانية." },
    ],
    previousLeaders: [
      { name: "Francisco Franco", nameAr: "فرانسيسكو فرانكو", title: "قائد الدولة", from: "1939", to: "1975" },
      { name: "Felipe González", nameAr: "فيليبي غونزاليس", title: "رئيس وزراء", from: "1982", to: "1996" },
      { name: "José María Aznar", nameAr: "خوسيه ماريا أثنار", title: "رئيس وزراء", from: "1996", to: "2004" },
      { name: "Mariano Rajoy", nameAr: "ماريانو راخوي", title: "رئيس وزراء", from: "2011", to: "2018" },
    ],
    leaderChildren: ['انفانتا كريستينا (ابنة خوان كارلوس)', 'فيليبي السادس (ابن خوان كارلوس)'],
  },
  au: {
    landmarkDetails: [
      { name: "Sydney Opera House", nameAr: "دار أوبرا سيدني", type: "دار أوبرا", description: "أيقونة أستراليا المعمارية على ميناء سيدني، موقع تراث عالمي." },
      { name: "Great Barrier Reef", nameAr: "الحاجز المرجاني العظيم", type: "شعاب مرجانية", description: "أكبر نظام شعاب مرجانية في العالم، إحدى عجائب الطبيعة." },
      { name: "Uluru", nameAr: "أولورو", type: "صخرة", description: "صخرة ضخمة من الحجر الرملي في وسط أستراليا، موقع مقدس للسكان الأصليين." },
      { name: "Sydney Harbour", nameAr: "ميناء سيدني", type: "ميناء", description: "أحد أجمل الموانئ الطبيعية في العالم." },
    ],
    riverDetails: [
      { name: "Murray River", nameAr: "نهر موراي", length: "2,508 كم", description: "أطول نهر في أستراليا، شريان الزراعة في جنوب شرق البلاد." },
      { name: "Darling River", nameAr: "نهر دارلينغ", length: "2,740 كم", description: "ثالث أطول نهر في أستراليا، رافد لنهر موراي." },
    ],
    lakeDetails: [
      { name: "Lake Eyre", nameAr: "بحيرة إير", area: "9,500 كم²", description: "أكبر بحيرة في أستراليا، بحيرة مالحة جافة معظم أيام السنة." },
    ],
    borderingSeas: ['المحيط الهادئ', 'المحيط الهندي', 'بحر كورال', 'بحر تسمان'],
    celebrities: [
      { name: "Nicole Kidman", nameAr: "نيكول كيدمان", profession: "ممثلة", knownFor: "ممثلة أسترالية-أمريكية حائزة على أوسكار." },
      { name: "Hugh Jackman", nameAr: "هيو جاكمان", profession: "ممثل", knownFor: "ممثل أسترالي عالمي، اشتهر بدور ولفيرين." },
      { name: "Cathy Freeman", nameAr: "كاثي فريمان", profession: "عداءة", knownFor: "بطلة أولمبية أسترالية، أيقونة المصالحة مع السكان الأصليين." },
      { name: "Steve Irwin", nameAr: "ستيف إيروين", profession: "شخصية تلفزيونية", knownFor: "صياد التماسيح الشهير، ناشط بيئي أسترالي." },
    ],
    previousLeaders: [
      { name: "Edmund Barton", nameAr: "إدموند بارتون", title: "رئيس وزراء", from: "1901", to: "1903" },
      { name: "Robert Menzies", nameAr: "روبرت منزيس", title: "رئيس وزراء", from: "1949", to: "1966" },
      { name: "John Howard", nameAr: "جون هوارد", title: "رئيس وزراء", from: "1996", to: "2007" },
      { name: "Scott Morrison", nameAr: "سكوت موريسون", title: "رئيس وزراء", from: "2018", to: "2022" },
    ],
    leaderChildren: ['ليلي موريسون', 'كلير موريسون'],
  },
  ca: {
    landmarkDetails: [
      { name: "CN Tower", nameAr: "برج CN", type: "برج", description: "أطول برج في نصف الكرة الغربي، رمز مدينة تورونتو." },
      { name: "Niagara Falls", nameAr: "شلالات نياغرا", type: "شلالات", description: "أشهر شلالات في العالم، على الحدود بين كندا والولايات المتحدة." },
      { name: "Rocky Mountains", nameAr: "جبال روكي", type: "جبال", description: "سلسلة جبال خلابة تمتد عبر غرب كندا، وجهة سياحية عالمية." },
      { name: "Stanley Park", nameAr: "ستانلي بارك", type: "حديقة", description: "أشهر حديقة حضرية في فانكوفر، ملاذ طبيعي في قلب المدينة." },
    ],
    riverDetails: [
      { name: "Mackenzie River", nameAr: "نهر ماكنزي", length: "4,241 كم", description: "أطول نهر في كندا، يجري في الأقاليم الشمالية الغربية." },
      { name: "Saint Lawrence River", nameAr: "نهر سانت لورانس", length: "3,058 كم", description: "نهر رئيسي في شرق كندا، يربط البحيرات العظمى بالمحيط الأطلسي." },
    ],
    lakeDetails: [
      { name: "Lake Superior", nameAr: "بحيرة سوبيريور", area: "82,100 كم²", description: "أكبر بحيرة عذبة في العالم، مشتركة بين كندا والولايات المتحدة." },
      { name: "Lake Huron", nameAr: "بحيرة هورون", area: "59,600 كم²", description: "ثاني أكبر البحيرات العظمى، تضم 30,000 جزيرة." },
      { name: "Lake Erie", nameAr: "بحيرة إري", area: "25,700 كم²", description: "أكثر البحيرات العظمى دفئاً والأقل عمقاً." },
    ],
    borderingSeas: ['المحيط الأطلسي', 'المحيط الهادئ', 'المحيط المتجمد الشمالي', 'خليج هدسون'],
    celebrities: [
      { name: "Justin Bieber", nameAr: "جاستن بيبر", profession: "مطرب", knownFor: "مطرب بوب كندي عالمي، أحد أشهر الفنانين في العالم." },
      { name: "Celine Dion", nameAr: "سيلين ديون", profession: "مطربة", knownFor: "أسطورة الغناء الكندية، صوت عالمي استثنائي." },
      { name: "Wayne Gretzky", nameAr: "واين جريتسكي", profession: "لاعب هوكي", knownFor: "أعظم لاعب هوكي جليد في التاريخ." },
      { name: "Keanu Reeves", nameAr: "كيانو ريفز", profession: "ممثل", knownFor: "ممثل كندي عالمي، اشتهر بأفلام ماتريكس وجون ويك." },
    ],
    previousLeaders: [
      { name: "John A. Macdonald", nameAr: "جون ماكدونالد", title: "رئيس وزراء", from: "1867", to: "1891" },
      { name: "Pierre Trudeau", nameAr: "بيير ترودو", title: "رئيس وزراء", from: "1968", to: "1984" },
      { name: "Stephen Harper", nameAr: "ستيفن هاربر", title: "رئيس وزراء", from: "2006", to: "2015" },
      { name: "Justin Trudeau", nameAr: "جاستن ترودو", title: "رئيس وزراء", from: "2015", to: "حتى الآن" },
    ],
    leaderChildren: ['كزافييه ترودو', 'إيلا-جريس ترودو', 'هادريان ترودو'],
  },
  mx: {
    landmarkDetails: [
      { name: "Chichen Itza", nameAr: "تشيتشن إيتزا", type: "موقع أثري", description: "مدينة مايا قديمة في يوكاتان، إحدى عجائب الدنيا السبع الجديدة." },
      { name: "Mexico City Cathedral", nameAr: "كاتدرائية مكسيكو سيتي", type: "كاتدرائية", description: "أقدم وأكبر كاتدرائية في أمريكا اللاتينية." },
      { name: "Cancún", nameAr: "كانكون", type: "منتجع", description: "منتجع سياحي عالمي على ساحل البحر الكاريبي." },
      { name: "Zócalo", nameAr: "سوكالو", type: "ساحة", description: "الساحة الرئيسية في مكسيكو سيتي، ثاني أكبر ساحة في العالم." },
    ],
    riverDetails: [
      { name: "Rio Grande", nameAr: "نهر ريو غراندي", length: "3,051 كم", description: "نهر يشكل الحدود الطبيعية بين المكسيك والولايات المتحدة." },
    ],
    lakeDetails: [
      { name: "Lake Chapala", nameAr: "بحيرة تشابالا", area: "1,100 كم²", description: "أكبر بحيرة للمياه العذبة في المكسيك." },
    ],
    borderingSeas: ['المحيط الهادئ', 'خليج المكسيك', 'البحر الكاريبي'],
    celebrities: [
      { name: "Frida Kahlo", nameAr: "فريدا كاهلو", profession: "رسامة", knownFor: "أشهر رسامة مكسيكية في العالم، أيقونة فنية ونسوية." },
      { name: "Salma Hayek", nameAr: "سلمان حايك", profession: "ممثلة", knownFor: "ممثلة مكسيكية عالمية، حائزة على ترشيحات أوسكار." },
      { name: "Guillermo del Toro", nameAr: "غييرمو ديل تورو", profession: "مخرج", knownFor: "مخرج سينمائي مكسيكي عالمي، حائز على أوسكار." },
      { name: "Agustín Lara", nameAr: "أوغوستين لارا", profession: "ملحن", knownFor: "ملحن ومطرب مكسيكي شهير، أيقونة الموسيقى المكسيكية." },
    ],
    previousLeaders: [
      { name: "Benito Juárez", nameAr: "بينيتو خواريز", title: "رئيس", from: "1858", to: "1872" },
      { name: "Porfirio Díaz", nameAr: "بورفيريو دياز", title: "رئيس", from: "1876", to: "1911" },
      { name: "Lázaro Cárdenas", nameAr: "لازارو كارديناس", title: "رئيس", from: "1934", to: "1940" },
      { name: "Vicente Fox", nameAr: "فيثنتي فوكس", title: "رئيس", from: "2000", to: "2006" },
      { name: "Andrés Manuel López Obrador", nameAr: "لوبيز أوبرادور", title: "رئيس", from: "2018", to: "2024" },
    ],
    leaderChildren: ['فيثنتي فوكس (ابنان: فيثنتي، آنا كريستينا)'],
  },
  id: {
    landmarkDetails: [
      { name: "Borobudur Temple", nameAr: "معبد بوروبودور", type: "معبد بوذي", description: "أكبر معبد بوذي في العالم، من عجائب الهندسة المعمارية القديمة." },
      { name: "Bali Island", nameAr: "جزيرة بالي", type: "جزيرة", description: "جزيرة سياحية عالمية، جوهرة إندونيسيا بطبيعتها الخلابة وثقافتها." },
      { name: "Kuta Beach", nameAr: "شاطئ كوتا", type: "شاطئ", description: "أشهر شواطئ بالي، وجهة راكبي الأمواج من جميع أنحاء العالم." },
      { name: "Komodo National Park", nameAr: "حديقة كومودو الوطنية", type: "محمية طبيعية", description: "موطن تنين كومودو، أكبر سحلية في العالم." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Lake Toba", nameAr: "بحيرة توبا", area: "1,130 كم²", description: "أكبر بحيرة بركانية في العالم، في جزيرة سومطرة." },
    ],
    borderingSeas: ['المحيط الهندي', 'المحيط الهادئ', 'بحر جاوة', 'بحر بالي'],
    celebrities: [
      { name: "Rahma Azhar", nameAr: "رحمة أزهر", profession: "ممثلة", knownFor: "ممثلة إندونيسية شهيرة في الدراما والسينما." },
      { name: "Iwan Gumis", nameAr: "إيفان غومس", profession: "مغني", knownFor: "مطرب إندونيسي معروف بأغانيه الشعبية." },
      { name: "Sukarno", nameAr: "سوكارنو", profession: "سياسي", knownFor: "أول رئيس لإندونيسيا، قائد استقلال البلاد." },
    ],
    previousLeaders: [
      { name: "Sukarno", nameAr: "سوكارنو", title: "رئيس", from: "1945", to: "1967" },
      { name: "Suharto", nameAr: "سوهارتو", title: "رئيس", from: "1967", to: "1998" },
      { name: "Abdurrahman Wahid", nameAr: "عبد الرحمن وحيد", title: "رئيس", from: "1999", to: "2001" },
      { name: "Susilo Bambang Yudhoyono", nameAr: "سوسيلو بامبانغ يودهويونو", title: "رئيس", from: "2004", to: "2014" },
    ],
    leaderChildren: ['ميغاواتي سوكارنوبوتري (ابنة سوكارنو)', 'سوهارتو (6 أبناء)'],
  },
  my: {
    landmarkDetails: [
      { name: "Petronas Towers", nameAr: "أبراج بتروناس", type: "برج", description: "أطول برجين توأم في العالم، رمز كوالالمبور الحديثة." },
      { name: "Batu Caves", nameAr: "كهوف باتو", type: "كهف", description: "كهف هندوسي مقدس في تلال كلانغ، يتميز بتمثال موروغان الذهبي." },
      { name: "Langkawi Island", nameAr: "جزيرة لانكاوي", type: "جزيرة", description: "أرخبيل استوائي خلاب، جوهرة سياحية في شمال ماليزيا." },
      { name: "Mount Kinabalu", nameAr: "جبل كينابالو", type: "جبل", description: "أعلى قمة في جنوب شرق آسيا (4,095 م)، موقع تراث عالمي." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['بحر الصين الجنوبي', 'مضيق ملقا', 'بحر سولو'],
    celebrities: [
      { name: "Michelle Yeoh", nameAr: "ميشيل يوه", profession: "ممثلة", knownFor: "ممثلة ماليزية عالمية، حائزة على جائزة أوسكار." },
      { name: "Jimmy Shu", nameAr: "جيمي شو", profession: "مخرج", knownFor: "مخرج سينمائي ماليزي بارز." },
      { name: "Mahathir Mohamad", nameAr: "مهاتير محمد", profession: "سياسي", knownFor: "أطول رئيس وزراء ماليزي خدمة، مهندس الحداثة الماليزية." },
    ],
    previousLeaders: [
      { name: "Tuanku Abdul Rahman", nameAr: "عبد الرحمن", title: "رئيس وزراء", from: "1957", to: "1970" },
      { name: "Mahathir Mohamad", nameAr: "مهاتير محمد", title: "رئيس وزراء", from: "1981", to: "2020" },
      { name: "Anwar Ibrahim", nameAr: "أنور إبراهيم", title: "رئيس وزراء", from: "2022", to: "حتى الآن" },
    ],
    leaderChildren: ['مريز مهاتير', 'ميرا مهاتير', 'مليندا مهاتير', 'مازلين مهاتير'],
  },
  th: {
    landmarkDetails: [
      { name: "Grand Palace", nameAr: "القصر الكبير", type: "قصر", description: "مجمع قصور ملكي في بانكوك، تحفة معمارية تايلاندية." },
      { name: "Wat Pho", nameAr: "وات فو", type: "معبد", description: "أقدم معبد في بانكوك، يضم تمثال بوذا المتكئ الضخم." },
      { name: "Phuket Beach", nameAr: "شاطئ بوكيت", type: "شاطئ", description: "أشهر جزيرة في تايلاند، وجهة سياحية عالمية." },
      { name: "Ko Samui Island", nameAr: "جزيرة كو ساموي", type: "جزيرة", description: "جزيرة استوائية خلابة في خليج تايلاند." },
    ],
    riverDetails: [
      { name: "Chao Phraya River", nameAr: "نهر تشاو فرايا", length: "372 كم", description: "النهر الرئيسي في تايلاند، يجري عبر بانكوك." },
    ],
    lakeDetails: [],
    borderingSeas: ['خليج تايلاند', 'بحر أندامان'],
    celebrities: [
      { name: "Tony Jaa", nameAr: "طوني جا", profession: "ممثل", knownFor: "ممثل وفنان قتال تايلاندي عالمي." },
      { name: "Aurapa", nameAr: "أوم أباراتشا", profession: "مطربة", knownFor: "مطربة تايلاندية شهيرة." },
    ],
    previousLeaders: [
      { name: "King Rama IX", nameAr: "الملك راما التاسع", title: "ملك", from: "1946", to: "2016" },
      { name: "Sarit Thanarat", nameAr: "ساريت ثاناراث", title: "رئيس وزراء", from: "1959", to: "1963" },
      { name: "Thaksin Shinawatra", nameAr: "تاكسين شيناواترا", title: "رئيس وزراء", from: "2001", to: "2006" },
    ],
    leaderChildren: ['بيتونغتارن شيناواترا', 'بانثونجتا شيناواترا'],
  },
  sg: {
    landmarkDetails: [
      { name: "Merlion Park", nameAr: "مرفأ ميرليون", type: "تمثال", description: "تمثال نصف سمكة ونصف أسد، رمز سنغافورة الأكثر شهرة." },
      { name: "Marina Bay Sands", nameAr: "مارينا باي ساندز", type: "فندق", description: "منتجع متكامل مع فندق أيقوني ومسبح لا متناه على السطح." },
      { name: "Gardens by the Bay", nameAr: "جاردنز باي ذا باي", type: "حديقة", description: "حديقة مستقبلية رائعة بأشجار سوبرتري العملاقة." },
      { name: "Sentosa Island", nameAr: "جزيرة سنتوسا", type: "جزيرة", description: "منتجع ترفيهي سياحي في جنوب سنغافورة." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['مضيق سنغافورة', 'مضيق ملقا'],
    celebrities: [
      { name: "Lee Kuan Yew", nameAr: "لي كوان يو", profession: "مؤسس", knownFor: "مؤسس سنغافورة الحديثة، أحد أعظم قادة القرن العشرين." },
    ],
    previousLeaders: [
      { name: "Lee Kuan Yew", nameAr: "لي كوان يو", title: "رئيس وزراء", from: "1959", to: "1990" },
      { name: "Goh Chok Tong", nameAr: "غوه تشوك تونغ", title: "رئيس وزراء", from: "1990", to: "2004" },
      { name: "Lee Hsien Loong", nameAr: "لي هسين لونغ", title: "رئيس وزراء", from: "2004", to: "2024" },
    ],
    leaderChildren: ['لي شيوي تشي (ابنة لي هسين لونغ)', 'لي هاو يي (ابن لي هسين لونغ)'],
  },
  vn: {
    landmarkDetails: [
      { name: "Ha Long Bay", nameAr: "خليج هالونغ", type: "خليج", description: "خليج خلاب بآلاف الجزر الكلسية، إحدى عجائب الطبيعة." },
      { name: "Son Doong Cave", nameAr: "كهف شون دونغ", type: "كهف", description: "أكبر كهف في العالم، اكتُشف حديثاً في فيتنام." },
      { name: "Hoi An Ancient Town", nameAr: "مدينة هوي آن القديمة", type: "مدينة قديمة", description: "مدينة ساحلية تاريخية، موقع تراث عالمي." },
      { name: "Temple of Literature", nameAr: "معبد الأدب", type: "معبد", description: "أول جامعة في فيتنام، معبد كونفوشيوس في هانوي." },
    ],
    riverDetails: [
      { name: "Mekong River", nameAr: "نهر ميكونغ", length: "4,350 كم", description: "أحد أطول أنهار العالم، دلتاه في فيتنام سلة أرز آسيا." },
      { name: "Red River", nameAr: "النهر الأحمر", length: "1,149 كم", description: "نهر رئيسي في شمال فيتنام، ينبع من الصين." },
    ],
    lakeDetails: [],
    borderingSeas: ['بحر الصين الجنوبي', 'خليج تونكين'],
    celebrities: [
      { name: "Ho Chi Minh", nameAr: "هو تشي منه", profession: "قائد", knownFor: "قائد استقلال فيتنام، مؤسس فيتنام الحديثة." },
      { name: "Nguyen Dieu", nameAr: "نغوين ديو", profession: "مطربة", knownFor: "مطربة فيتنامية شهيرة." },
    ],
    previousLeaders: [
      { name: "Ho Chi Minh", nameAr: "هو تشي منه", title: "رئيس", from: "1945", to: "1969" },
      { name: "Pham Van Dong", nameAr: "فام فان دونغ", title: "رئيس وزراء", from: "1976", to: "1987" },
      { name: "Nguyen Minh Triet", nameAr: "نغوين مينه تريت", title: "رئيس", from: "2006", to: "2016" },
    ],
    leaderChildren: [],
  },
  ph: {
    landmarkDetails: [
      { name: "Chocolate Hills", nameAr: "تلال الشوكولاتة", type: "تلال", description: "تكوينات جيولوجية فريدة في جزيرة بوهول، تتحول للون البني في الجفاف." },
      { name: "Boracay Beach", nameAr: "شاطئ بوراكاي", type: "شاطئ", description: "أشهر شواطئ الفلبين، برماله البيضاء ومياهه الفيروزية." },
      { name: "Rizal Park", nameAr: "ريزال بارك", type: "حديقة", description: "حديقة تاريخية في مانيلا، تكريماً للبطل القومي خوسيه ريزال." },
      { name: "Mayon Volcano", nameAr: "جبل مايون", type: "بركان", description: "أجمل بركان في العالم بمخروطه المثالي المتناسق." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Laguna de Bay", nameAr: "بحيرة باي", area: "949 كم²", description: "أكبر بحيرة في الفلبين، تقع جنوب شرق مانيلا." },
    ],
    borderingSeas: ['المحيط الهادئ', 'بحر الصين الجنوبي', 'بحر سولو'],
    celebrities: [
      { name: "Manny Pacquiao", nameAr: "ماني باكياو", profession: "ملاكم", knownFor: "أسطورة الملاكمة الفلبينية، بطل العالم في 8 فئات." },
      { name: "Lea Salonga", nameAr: "ليلى أفيليو", profession: "مغنية", knownFor: "مغنية وممثلة فلبينية عالمية، حائزة على توني." },
      { name: "José Rizal", nameAr: "خوسيه ريزال", profession: "بطل قومي", knownFor: "بطل الاستقلال الفلبيني، كاتب وطبيب." },
    ],
    previousLeaders: [
      { name: "Emilio Aguinaldo", nameAr: "إميليو أغوينالدو", title: "رئيس", from: "1899", to: "1901" },
      { name: "Ferdinand Marcos", nameAr: "فرديناند ماركوس", title: "رئيس", from: "1965", to: "1986" },
      { name: "Corazon Aquino", nameAr: "كورازون أكينو", title: "رئيسة", from: "1986", to: "1992" },
      { name: "Rodrigo Duterte", nameAr: "رودريغو دوتيرتي", title: "رئيس", from: "2016", to: "2022" },
    ],
    leaderChildren: ['إيمي ماركوس (ابنة فرديناند)', 'فرديناند ماركوس الابن', 'سارة دوتيرتي', 'باولو دوتيرتي'],
  },
  ng: {
    landmarkDetails: [
      { name: "Zuma Rock", nameAr: "صخرة زوما", type: "صخرة", description: "صخرة ضخمة في ولاية النيجر، رمز نيجيريا الأكثر شهرة." },
      { name: "Oludomo", nameAr: "أولودومو", type: "ملاذ طبيعي", description: "محمية طبيعية جميلة في جنوب غرب نيجيريا." },
      { name: "Abuja National Mosque", nameAr: "مسجد أبوجا", type: "مسجد", description: "مسجد وطني في العاصمة أبوجا، تحفة معمارية إسلامية." },
      { name: "Onitsha Market", nameAr: "سوق أونيتشا", type: "سوق", description: "أحد أكبر الأسواق في غرب أفريقيا." },
    ],
    riverDetails: [
      { name: "Niger River", nameAr: "نهر النيجر", length: "4,180 كم", description: "أطول نهر في غرب أفريقيا، شريان الحياة في نيجيريا." },
      { name: "Benue River", nameAr: "نهر بنوي", length: "1,400 كم", description: "أهم رافد لنهر النيجر في نيجيريا." },
    ],
    lakeDetails: [
      { name: "Lake Chad", nameAr: "بحيرة تشاد", area: "1,350 كم²", description: "بحيرة كبرى في وسط أفريقيا، مشتركة بين نيجيريا وتشاد والكاميرون والنيجر." },
    ],
    borderingSeas: ['خليج غينيا', 'المحيط الأطلسي'],
    celebrities: [
      { name: "Wole Soyinka", nameAr: "وول سوينكا", profession: "كاتب", knownFor: "أديب نيجيري حاصل على جائزة نوبل للآداب." },
      { name: "Davido", nameAr: "دايفيدو", profession: "مغني", knownFor: "مطرب نيجيري عالمي، أحد نجوم الأفروبيت." },
      { name: "Jay-Jay Okocha", nameAr: "جاي جاي أوكوتشا", profession: "لاعب كرة قدم", knownFor: "أسطورة كرة القدم النيجيرية، أحد أعظم لاعبي أفريقيا." },
    ],
    previousLeaders: [
      { name: "Nnamdi Azikiwe", nameAr: "نامدي أزيكيوي", title: "رئيس", from: "1963", to: "1966" },
      { name: "Olusegun Obasanjo", nameAr: "أولوسيغون أوباسانجو", title: "رئيس", from: "1976", to: "2007" },
      { name: "Muhammadu Buhari", nameAr: "محمد بخاري", title: "رئيس", from: "1983", to: "2023" },
    ],
    leaderChildren: ['زهرة بخاري', 'فاطمة بخاري', 'عائشة بخاري'],
  },
  za: {
    landmarkDetails: [
      { name: "Table Mountain", nameAr: "جبل الطاولة", type: "جبل", description: "أشهر جبل في أفريقيا، قمته المسطحة رمز كيب تاون." },
      { name: "Cape of Good Hope", nameAr: "كيب الرجاء الصالح", type: "رأس", description: "رأس تاريخي عند الطرف الجنوبي لأفريقيا، ملتقى المحيطين." },
      { name: "Robben Island", nameAr: "جزيرة روبن", type: "جزيرة", description: "جزيرة قرب كيب تاون، سجن نيلسون مانديلا سابقاً." },
      { name: "Kruger National Park", nameAr: "حديقة كروغر", type: "حديقة وطنية", description: "أشهر محمية طبيعية في أفريقيا، موطن الخمسة الكبار." },
    ],
    riverDetails: [
      { name: "Orange River", nameAr: "نهر أورانج", length: "2,200 كم", description: "أطول نهر في جنوب أفريقيا، شريان الزراعة." },
      { name: "Limpopo River", nameAr: "نهر ليمبوبو", length: "1,750 كم", description: "نهر عابر للحدود في جنوب أفريقيا." },
    ],
    lakeDetails: [],
    borderingSeas: ['المحيط الأطلسي', 'المحيط الهندي'],
    celebrities: [
      { name: "Nelson Mandela", nameAr: "نيلسون مانديلا", profession: "زعيم", knownFor: "بطل مناهضة الفصل العنصري، أول رئيس أسود لجنوب أفريقيا." },
      { name: "Desmond Tutu", nameAr: "ديزموند توتو", profession: "أسقف", knownFor: "أسقف وناشط سلام، حائز على جائزة نوبل للسلام." },
      { name: "Charlize Theron", nameAr: "تشارليز ثيرون", profession: "ممثلة", knownFor: "ممثلة جنوب أفريقية عالمية، حائزة على جائزة أوسكار." },
      { name: "Jacob Zuma", nameAr: "جاكوب زوما", profession: "سياسي", knownFor: "رئيس جنوب أفريقيا الأسبق." },
    ],
    previousLeaders: [
      { name: "Nelson Mandela", nameAr: "نيلسون مانديلا", title: "رئيس", from: "1994", to: "1999" },
      { name: "Thabo Mbeki", nameAr: "تابو مبيكي", title: "رئيس", from: "1999", to: "2008" },
      { name: "Jacob Zuma", nameAr: "جاكوب زوما", title: "رئيس", from: "2009", to: "2018" },
      { name: "Cyril Ramaphosa", nameAr: "سيريل رامافوزا", title: "رئيس", from: "2018", to: "حتى الآن" },
    ],
    leaderChildren: ['مبيكيزوي مانديلا', 'زيناني مانديلا', 'ماكازي مانديلا'],
  },
  et: {
    landmarkDetails: [
      { name: "Rock-Hewn Churches of Lalibela", nameAr: "الكنائس المحفورة في لاليبيلا", type: "كنائس", description: "11 كنيسة منحوتة في الصخر، من عجائب الهندسة المعمارية الدينية." },
      { name: "Aksum Obelisks", nameAr: "أحجار أكسوم المسلة", type: "أثرية", description: "مسلات حجرية ضخمة تعود لمملكة أكسوم القديمة." },
      { name: "Danakil Depression", nameAr: "منخفض داناكيل", type: "منطقة طبيعية", description: "أحد أكثر الأماكن حرارة على وجه الأرض، بتكويناته الجيولوجية الفريدة." },
      { name: "Blue Nile Falls", nameAr: "شلالات النيل الأزرق", type: "شلال", description: "شلالات رائعة على النيل الأزرق في إثيوبيا." },
    ],
    riverDetails: [
      { name: "Blue Nile", nameAr: "النيل الأزرق", length: "1,450 كم", description: "رافد رئيسي لنهر النيل، ينبع من بحيرة تانا في إثيوبيا." },
      { name: "Awash River", nameAr: "نهر أواش", length: "1,200 كم", description: "نهر رئيسي في إثيوبيا، يجري عبر الوادي المتصدع." },
    ],
    lakeDetails: [
      { name: "Lake Tana", nameAr: "بحيرة تانا", area: "3,600 كم²", description: "أكبر بحيرة في إثيوبيا، منبع النيل الأزرق." },
      { name: "Lake Ziway", nameAr: "بحيرة زيواي", area: "440 كم²", description: "بحيرة مياه عذبة في الوادي المتصدع الإثيوبي." },
    ],
    borderingSeas: [],
    celebrities: [
      { name: "Haile Selassie", nameAr: "هايلي سيليسي", profession: "إمبراطور", knownFor: "آخر إمبراطور لإثيوبيا، شخصية مقدسة لدى الراستافارية." },
      { name: "Haile Gebrselassie", nameAr: "هيلا جبريل", profession: "عداء", knownFor: "أسطورة ألعاب القوى الإثيوبية، بطل أولمبي وعالمي." },
    ],
    previousLeaders: [
      { name: "Haile Selassie", nameAr: "هايلي سيليسي", title: "إمبراطور", from: "1930", to: "1974" },
      { name: "Mengistu Haile Mariam", nameAr: "مينغستو هيلا مريام", title: "رئيس", from: "1977", to: "1991" },
      { name: "Meles Zenawi", nameAr: "مليس زيناوي", title: "رئيس وزراء", from: "1991", to: "2012" },
      { name: "Abiy Ahmed", nameAr: "أبيي أحمد", title: "رئيس وزراء", from: "2018", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  ke: {
    landmarkDetails: [
      { name: "Maasai Mara Reserve", nameAr: "محمية ماساي مارا", type: "محمية", description: "أشهر محمية طبيعية في كينيا، موطن الهجرة السنوية للحيوانات." },
      { name: "Mount Kenya", nameAr: "جبل كينيا", type: "جبل", description: "ثاني أعلى قمة في أفريقيا (5,199 م)، موقع تراث عالمي." },
      { name: "Lake Nakuru", nameAr: "بحيرة نكورو", type: "بحيرة", description: "بحيرة قلوية تشتهر بأسراب طيور الفلامنغو الوردية." },
      { name: "Mombasa Coast", nameAr: "ساحل مومباسا", type: "ساحل", description: "ساحل كيني جميل بشواطئه الرملية البيضاء." },
    ],
    riverDetails: [
      { name: "Tana River", nameAr: "نهر تانا", length: "800 كم", description: "أطول نهر في كينيا، مصدر رئيسي للطاقة الكهرومائية." },
    ],
    lakeDetails: [
      { name: "Lake Victoria", nameAr: "بحيرة فيكتوريا", area: "68,800 كم²", description: "أكبر بحيرة في أفريقيا، ثاني أكبر بحيرة عذبة في العالم." },
      { name: "Lake Naivasha", nameAr: "بحيرة نيفاشا", area: "139 كم²", description: "بحيرة مياه عذبة في الوادي المتصدع، محمية طبيعية." },
    ],
    borderingSeas: ['المحيط الهندي'],
    celebrities: [
      { name: "Wangari Maathai", nameAr: "ونجاري ماثاي", profession: "ناشطة", knownFor: "ناشطة بيئية كينية، أول امرأة أفريقية تحصل على نوبل للسلام." },
      { name: "Eliud Kipchoge", nameAr: "كيبشوج كيبيو", profession: "عداء", knownFor: "أعظم عداء ماراثون في التاريخ، كسر حاجز الساعتين." },
      { name: "Barack Obama Sr.", nameAr: "باراك أوباما الأب", profession: "سياسي", knownFor: "والد الرئيس الأمريكي الأسبق باراك أوباما." },
    ],
    previousLeaders: [
      { name: "Jomo Kenyatta", nameAr: "جومو كينياتا", title: "رئيس", from: "1964", to: "1978" },
      { name: "Daniel arap Moi", nameAr: "دانييل أراب موي", title: "رئيس", from: "1978", to: "2002" },
      { name: "Mwai Kibaki", nameAr: "مواي كيباكي", title: "رئيس", from: "2002", to: "2013" },
      { name: "Uhuru Kenyatta", nameAr: "أوهورو كينياتا", title: "رئيس", from: "2013", to: "2022" },
    ],
    leaderChildren: ['أوهورو كينياتا (ابن جومو كينياتا)', 'كريستينا كينياتا', 'أني كينياتا'],
  },
  gh: {
    landmarkDetails: [
      { name: "Kwame Nkrumah Mausoleum", nameAr: "ضريح كوامي نكروما", type: "ضريح", description: "ضريح أول رئيس لغانا وأحد أبرز زعماء أفريقيا." },
      { name: "Cape Coast Castle", nameAr: "قلعة كيب كوست", type: "قلعة", description: "قلعة تاريخية على ساحل الذهب، كانت مركزاً لتجارة العبيد." },
      { name: "Lake Volta", nameAr: "بحيرة فولتا", type: "بحيرة", description: "أكبر بحيرة اصطناعية في العالم." },
    ],
    riverDetails: [
      { name: "Volta River", nameAr: "نهر فولتا", length: "1,600 كم", description: "النهر الرئيسي في غانا." },
    ],
    lakeDetails: [
      { name: "Lake Volta", nameAr: "بحيرة فولتا", area: "8,502 كم²", description: "أكبر بحيرة اصطناعية في العالم." },
    ],
    borderingSeas: ['خليج غينيا', 'المحيط الأطلسي'],
    celebrities: [
      { name: "Kwame Nkrumah", nameAr: "كوامي نكروما", profession: "سياسي", knownFor: "أول رئيس لغانا وأحد مؤسسي حركة عدم الانحياز." },
    ],
    previousLeaders: [
      { name: "Kwame Nkrumah", nameAr: "كوامي نكروما", title: "الرئيس", from: "1960", to: "1966" },
      { name: "Jerry Rawlings", nameAr: "جيري رولينغز", title: "الرئيس", from: "1979", to: "2001" },
      { name: "John Kufuor", nameAr: "جون كوفور", title: "الرئيس", from: "2001", to: "2009" },
      { name: "Nana Akufo-Addo", nameAr: "نانا أكوفو أدو", title: "الرئيس", from: "2017", to: "2025" },
    ],
    leaderChildren: [],
  },
  tz: {
    landmarkDetails: [
      { name: "Mount Kilimanjaro", nameAr: "جبل كيليمانجارو", type: "جبل", description: "أعلى قمة في أفريقيا بارتفاع 5,895 متراً." },
      { name: "Serengeti National Park", nameAr: "حديقة سيرينغيتي الوطنية", type: "محمية", description: "من أشهر المحميات الطبيعية في أفريقيا." },
      { name: "Zanzibar", nameAr: "زنجبار", type: "جزيرة", description: "جزيرة سياحية في المحيط الهندي." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Lake Tanganyika", nameAr: "بحيرة تنجانيقا", area: "32,900 كم²", description: "ثاني أعمق بحيرة في العالم." },
      { name: "Lake Victoria", nameAr: "بحيرة فيكتوريا", area: "68,800 كم²", description: "أكبر بحيرة في أفريقيا." },
    ],
    borderingSeas: ['المحيط الهندي'],
    celebrities: [
      { name: "Julius Nyerere", nameAr: "يوليوس نيريري", profession: "سياسي", knownFor: "أول رئيس لتنزانيا وأب الأمة." },
    ],
    previousLeaders: [
      { name: "Julius Nyerere", nameAr: "يوليوس نيريري", title: "الرئيس", from: "1964", to: "1985" },
      { name: "Ali Hassan Mwinyi", nameAr: "علي حسن مويني", title: "الرئيس", from: "1985", to: "1995" },
      { name: "Jakaya Kikwete", nameAr: "جكاية كيكويتي", title: "الرئيس", from: "2005", to: "2015" },
      { name: "Samia Suluhu", nameAr: "سامية سولوهو", title: "الرئيسة", from: "2021", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  ug: {
    landmarkDetails: [
      { name: "Murchison Falls", nameAr: "شلالات مرتشيسون", type: "شلال", description: "شلالات رائعة على نهر النيل." },
      { name: "Bwindi Impenetrable Forest", nameAr: "غابة بويندي", type: "محمية", description: "موطن الغوريلا الجبلية." },
      { name: "Lake Victoria", nameAr: "بحيرة فيكتوريا", type: "بحيرة", description: "أكبر بحيرة في أفريقيا." },
    ],
    riverDetails: [
      { name: "Nile River", nameAr: "نهر النيل", length: "6,650 كم", description: "أطول نهر في العالم، ينبع من أوغندا." },
    ],
    lakeDetails: [
      { name: "Lake Victoria", nameAr: "بحيرة فيكتوريا", area: "68,800 كم²", description: "أكبر بحيرة استوائية في العالم." },
    ],
    borderingSeas: [],
    celebrities: [
      { name: "Yoweri Museveni", nameAr: "يوري موسفيني", profession: "سياسي", knownFor: "رئيس أوغندا منذ 1986." },
    ],
    previousLeaders: [
      { name: "Milton Obote", nameAr: "ميلتون أوبوتي", title: "الرئيس", from: "1966", to: "1971" },
      { name: "Idi Amin", nameAr: "عيدي أمين", title: "الرئيس", from: "1971", to: "1979" },
      { name: "Yoweri Museveni", nameAr: "يوري موسفيني", title: "الرئيس", from: "1986", to: "حتى الآن" },
    ],
    leaderChildren: ['موهوزي كاينروغابا'],
  },
  rw: {
    landmarkDetails: [
      { name: "Kigali Genocide Memorial", nameAr: "النصب التذكاري للإبادة في كيغالي", type: "نصب تذكاري", description: "نصب تذكاري لضحايا الإبادة الجماعية." },
      { name: "Volcanoes National Park", nameAr: "حديقة البراكين الوطنية", type: "محمية", description: "موطن الغوريلا الجبلية." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Lake Kivu", nameAr: "بحيرة كيفو", area: "2,700 كم²", description: "بحيرة جميلة على الحدود مع الكونغو." },
    ],
    borderingSeas: [],
    celebrities: [
      { name: "Paul Kagame", nameAr: "بول كاغامي", profession: "سياسي", knownFor: "رئيس رواندا منذ 2000." },
    ],
    previousLeaders: [
      { name: "Juvénal Habyarimana", nameAr: "جوفينال هابياريمانا", title: "الرئيس", from: "1973", to: "1994" },
      { name: "Pasteur Bizimungu", nameAr: "باستور بيزيمونغو", title: "الرئيس", from: "1994", to: "2000" },
      { name: "Paul Kagame", nameAr: "بول كاغامي", title: "الرئيس", from: "2000", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  sn: {
    landmarkDetails: [
      { name: "Île de Gorée", nameAr: "جزيرة غوري", type: "جزيرة", description: "جزيرة تاريخية كانت مركزاً لتجارة العبيد." },
      { name: "Lake Retba", nameAr: "بحيرة ريتبا", type: "بحيرة", description: "البحيرة الوردية الشهيرة." },
      { name: "Grand Mosque of Dakar", nameAr: "جامع داكار الكبير", type: "مسجد", description: "أكبر مسجد في السنغال." },
    ],
    riverDetails: [
      { name: "Senegal River", nameAr: "نهر السنغال", length: "1,790 كم", description: "النهر الرئيسي في السنغال." },
    ],
    lakeDetails: [
      { name: "Lake Retba", nameAr: "بحيرة ريتبا", area: "3 كم²", description: "البحيرة الوردية، لونها وردي بسبب البكتيريا." },
    ],
    borderingSeas: ['المحيط الأطلسي'],
    celebrities: [
      { name: "Youssou N'Dour", nameAr: "يوسو ندور", profession: "مطرب", knownFor: "أشهر مطرب سنغالي في العالم." },
      { name: "Léopold Sédar Senghor", nameAr: "ليوبولد سيدار سنغور", profession: "شاعر وسياسي", knownFor: "أول رئيس للسنغال وشاعر مشهور." },
    ],
    previousLeaders: [
      { name: "Léopold Sédar Senghor", nameAr: "ليوبولد سيدار سنغور", title: "الرئيس", from: "1960", to: "1980" },
      { name: "Abdou Diouf", nameAr: "عبدو ضيوف", title: "الرئيس", from: "1981", to: "2000" },
      { name: "Abdoulaye Wade", nameAr: "عبد الله واد", title: "الرئيس", from: "2000", to: "2012" },
      { name: "Macky Sall", nameAr: "ماكي سال", title: "الرئيس", from: "2012", to: "2024" },
    ],
    leaderChildren: ['كريم واد'],
  },
  ci: {
    landmarkDetails: [
      { name: "Basilica of Our Lady of Peace", nameAr: "بازيليك سيدة السلام", type: "كنيسة", description: "أكبر كنيسة في العالم." },
      { name: "Tai National Park", nameAr: "حديقة تاي الوطنية", type: "محمية", description: "غابة استوائية محمية." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['خليج غينيا', 'المحيط الأطلسي'],
    celebrities: [
      { name: "Laurent Gbagbo", nameAr: "لوران غباغبو", profession: "سياسي", knownFor: "رئيس ساحل العاج الأسبق." },
      { name: "Didier Drogba", nameAr: "ديدييه دروغبا", profession: "لاعب كرة قدم", knownFor: "أسطورة كرة القدم الإيفوارية." },
    ],
    previousLeaders: [
      { name: "Félix Houphouët-Boigny", nameAr: "فيليكس هوفويت بوانيي", title: "الرئيس", from: "1960", to: "1993" },
      { name: "Laurent Gbagbo", nameAr: "لوران غباغبو", title: "الرئيس", from: "2000", to: "2011" },
      { name: "Alassane Ouattara", nameAr: "الحسن واتارا", title: "الرئيس", from: "2011", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  cm: {
    landmarkDetails: [
      { name: "Mount Cameroon", nameAr: "جبل الكاميرون", type: "جبل", description: "أعلى قمة في غرب أفريقيا بركان نشط." },
      { name: "Waza National Park", nameAr: "حديقة وازا الوطنية", type: "محمية", description: "محمية طبيعية للحيوانات." },
    ],
    riverDetails: [
      { name: "Sanaga River", nameAr: "نهر ساناغا", length: "600 كم", description: "أطول نهر في الكاميرون." },
    ],
    lakeDetails: [],
    borderingSeas: ['خليج غينيا', 'المحيط الأطلسي'],
    celebrities: [
      { name: "Roger Milla", nameAr: "روجر ميلا", profession: "لاعب كرة قدم", knownFor: "أسطورة كرة القدم الكاميرونية." },
      { name: "Samuel Eto'o", nameAr: "صامويل إيتو", profession: "لاعب كرة قدم", knownFor: "أحد أعظم لاعبي كرة القدم الأفارقة." },
    ],
    previousLeaders: [
      { name: "Ahmadou Ahidjo", nameAr: "أحمدو أهيجو", title: "الرئيس", from: "1960", to: "1982" },
      { name: "Paul Biya", nameAr: "بول بيا", title: "الرئيس", from: "1982", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  ao: {
    landmarkDetails: [
      { name: "Kalandula Falls", nameAr: "شلالات كالاندولا", type: "شلال", description: "من أكبر الشلالات في أفريقيا." },
      { name: "Fortress of São Miguel", nameAr: "قلعة ساو ميغيل", type: "قلعة", description: "قلعة برتغالية قديمة." },
    ],
    riverDetails: [
      { name: "Kwanza River", nameAr: "نهر كوانزا", length: "960 كم", description: "أطول نهر في أنغولا." },
    ],
    lakeDetails: [],
    borderingSeas: ['المحيط الأطلسي'],
    celebrities: [
      { name: "José Eduardo dos Santos", nameAr: "جوزيه إدواردو دوس سانتوس", profession: "سياسي", knownFor: "رئيس أنغولا لمدة 38 عاماً." },
    ],
    previousLeaders: [
      { name: "Agostinho Neto", nameAr: "أغوستينو نيتو", title: "الرئيس", from: "1975", to: "1979" },
      { name: "José Eduardo dos Santos", nameAr: "جوزيه إدواردو دوس سانتوس", title: "الرئيس", from: "1979", to: "2017" },
      { name: "João Lourenço", nameAr: "جواو لورنسو", title: "الرئيس", from: "2017", to: "حتى الآن" },
    ],
    leaderChildren: ['إيزابيل دوس سانتوس'],
  },
  cd: {
    landmarkDetails: [
      { name: "Virunga National Park", nameAr: "حديقة فيرونغا الوطنية", type: "محمية", description: "أقدم حديقة وطنية في أفريقيا." },
      { name: "Livingstone Falls", nameAr: "شلالات ليفينغستون", type: "شلال", description: "سلسلة من الشلالات على نهر الكونغو." },
    ],
    riverDetails: [
      { name: "Congo River", nameAr: "نهر الكونغو", length: "4,700 كم", description: "ثاني أطول نهر في أفريقيا." },
    ],
    lakeDetails: [
      { name: "Lake Tanganyika", nameAr: "بحيرة تنجانيقا", area: "32,900 كم²", description: "ثاني أعمق بحيرة في العالم." },
    ],
    borderingSeas: ['المحيط الأطلسي (شريط ساحلي صغير)'],
    celebrities: [
      { name: "Patrice Lumumba", nameAr: "باتريس لومومبا", profession: "سياسي", knownFor: "أول رئيس وزراء للكونغو المستقلة." },
    ],
    previousLeaders: [
      { name: "Patrice Lumumba", nameAr: "باتريس لومومبا", title: "رئيس الوزراء", from: "1960", to: "1960" },
      { name: "Mobutu Sese Seko", nameAr: "موبوتو سيسي سيكو", title: "الرئيس", from: "1965", to: "1997" },
      { name: "Laurent Kabila", nameAr: "لوران كابيلا", title: "الرئيس", from: "1997", to: "2001" },
      { name: "Joseph Kabila", nameAr: "جوزيف كابيلا", title: "الرئيس", from: "2001", to: "2019" },
      { name: "Félix Tshisekedi", nameAr: "فيليكس تشيسيكيدي", title: "الرئيس", from: "2019", to: "حتى الآن" },
    ],
    leaderChildren: ['جوزيف كابيلا', 'جاي كابيلا'],
  },
  ua: {
    landmarkDetails: [
      { name: "Saint Sophia Cathedral", nameAr: "كاتدرائية القديسة صوفيا", type: "كاتدرائية", description: "كاتدرائية تاريخية في كييف." },
      { name: "Kyiv Pechersk Lavra", nameAr: "لافرا كييف بيشيرسك", type: "دير", description: "دير أرثوذكسي تاريخي." },
      { name: "Carpathian Mountains", nameAr: "جبال الكاربات", type: "منطقة طبيعية", description: "سلسلة جبال جميلة في غرب أوكرانيا." },
    ],
    riverDetails: [
      { name: "Dnieper River", nameAr: "نهر الدنيبر", length: "2,201 كم", description: "أكبر نهر في أوكرانيا." },
    ],
    lakeDetails: [],
    borderingSeas: ['البحر الأسود', 'بحر آزوف'],
    celebrities: [
      { name: "Taras Shevchenko", nameAr: "تاراس شيفتشينكو", profession: "شاعر", knownFor: "أعظم شاعر أوكراني." },
      { name: "Volodymyr Zelenskyy", nameAr: "فولوديمير زيلينسكي", profession: "سياسي", knownFor: "رئيس أوكرانيا وقائدها في الحرب." },
    ],
    previousLeaders: [
      { name: "Leonid Kravchuk", nameAr: "ليونيد كرافتشوك", title: "الرئيس", from: "1991", to: "1994" },
      { name: "Leonid Kuchma", nameAr: "ليونيد كوتشما", title: "الرئيس", from: "1994", to: "2005" },
      { name: "Viktor Yushchenko", nameAr: "فيكتور يوشتشينكو", title: "الرئيس", from: "2005", to: "2010" },
      { name: "Viktor Yanukovych", nameAr: "فيكتور يانوكوفيتش", title: "الرئيس", from: "2010", to: "2014" },
      { name: "Petro Poroshenko", nameAr: "بيترو بوروشنكو", title: "الرئيس", from: "2014", to: "2019" },
      { name: "Volodymyr Zelenskyy", nameAr: "فولوديمير زيلينسكي", title: "الرئيس", from: "2019", to: "حتى الآن" },
    ],
    leaderChildren: ['أولكساندرا زيلينسكا', 'كيريلو زيلينسكي'],
  },
  pl: {
    landmarkDetails: [
      { name: "Wawel Castle", nameAr: "قلعة فافيل", type: "قلعة", description: "القلعة الملكية في كراكوف." },
      { name: "Warsaw Old Town", nameAr: "البلدة القديمة في وارسو", type: "مدينة قديمة", description: "موقع تراث عالمي لليونسكو." },
      { name: "Auschwitz-Birkenau", nameAr: "أوشفيتز-بيركيناو", type: "متحف", description: "معسكر الاعتقال النازي السابق ومتحف." },
    ],
    riverDetails: [
      { name: "Vistula River", nameAr: "نهر فيستولا", length: "1,047 كم", description: "أطول نهر في بولندا." },
    ],
    lakeDetails: [
      { name: "Lake Śniardwy", nameAr: "بحيرة شنياردوي", area: "113 كم²", description: "أكبر بحيرة في بولندا." },
    ],
    borderingSeas: ['بحر البلطيق'],
    celebrities: [
      { name: "Frederic Chopin", nameAr: "فريدريك شوبان", profession: "ملحن", knownFor: "أشهر ملحن بولندي." },
      { name: "Marie Curie", nameAr: "ماري كوري", profession: "عالمة", knownFor: "حاصلة على جائزة نوبل في الفيزياء والكيمياء." },
      { name: "Robert Lewandowski", nameAr: "روبرت ليفاندوفسكي", profession: "لاعب كرة قدم", knownFor: "أحد أفضل مهاجمي كرة القدم في العالم." },
    ],
    previousLeaders: [
      { name: "Lech Wałęsa", nameAr: "ليخ فاونسا", title: "الرئيس", from: "1990", to: "1995" },
      { name: "Aleksander Kwaśniewski", nameAr: "ألكسندر كواسنيفسكي", title: "الرئيس", from: "1995", to: "2005" },
      { name: "Lech Kaczyński", nameAr: "ليخ كاتشينسكي", title: "الرئيس", from: "2005", to: "2010" },
      { name: "Andrzej Duda", nameAr: "أندجي دودا", title: "الرئيس", from: "2015", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  nl: {
    landmarkDetails: [
      { name: "Anne Frank House", nameAr: "منزل آن فرانك", type: "متحف", description: "المكان الذي اختبأت فيه آن فرانك." },
      { name: "Rijksmuseum", nameAr: "متحف ريكس", type: "متحف", description: "المتحف الوطني الهولندي." },
      { name: "Keukenhof Gardens", nameAr: "حدائق كوكنهوف", type: "حديقة", description: "أشهر حدائق الزهور في العالم." },
    ],
    riverDetails: [
      { name: "Rhine River", nameAr: "نهر الراين", length: "1,230 كم", description: "أحد أهم الأنهار في أوروبا." },
    ],
    lakeDetails: [
      { name: "IJsselmeer", nameAr: "بحيرة آيسل", area: "1,100 كم²", description: "بحيرة اصطناعية في وسط هولندا." },
    ],
    borderingSeas: ['بحر الشمال'],
    celebrities: [
      { name: "Vincent van Gogh", nameAr: "فينسنت فان جوخ", profession: "رسام", knownFor: "أشهر رسام هولندي." },
      { name: "Johan Cruyff", nameAr: "يوهان كرويف", profession: "لاعب كرة قدم", knownFor: "أسطورة كرة القدم الهولندية." },
    ],
    previousLeaders: [
      { name: "Queen Beatrix", nameAr: "الملكة بياتريكس", title: "الملكة", from: "1980", to: "2013" },
      { name: "King Willem-Alexander", nameAr: "الملك فيليم ألكسندر", title: "الملك", from: "2013", to: "حتى الآن" },
      { name: "Mark Rutte", nameAr: "مارك روته", title: "رئيس الوزراء", from: "2010", to: "2024" },
    ],
    leaderChildren: ['الملك فيليم ألكسندر (كاتارينا أماليا، أليكسيا، أريان)'],
  },
  be: {
    landmarkDetails: [
      { name: "Grand Place", nameAr: "السوق الكبير", type: "ساحة", description: "أجمل ساحة في أوروبا." },
      { name: "Atomium", nameAr: "أتوميوم", type: "معلم", description: "رمز بروكسل الشهير على شكل ذرة حديد." },
      { name: "Manneken Pis", nameAr: "مانيكان بيس", type: "تمثال", description: "التمثال الشهير لطفل يبول." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['بحر الشمال'],
    celebrities: [
      { name: "René Magritte", nameAr: "رينيه ماغريت", profession: "رسام", knownFor: "أشهر رسام بلجيكي سريالي." },
      { name: "Hergé", nameAr: "إيرجيه", profession: "رسام كاريكاتير", knownFor: "مؤلف مغامرات تان تان." },
      { name: "Jean-Claude Van Damme", nameAr: "جان كلود فان دام", profession: "ممثل", knownFor: "ممثل أفلام أكشن." },
    ],
    previousLeaders: [
      { name: "Baudouin", nameAr: "الملك بودوان", title: "الملك", from: "1951", to: "1993" },
      { name: "Albert II", nameAr: "الملك ألبير الثاني", title: "الملك", from: "1993", to: "2013" },
      { name: "Philippe", nameAr: "الملك فيليب", title: "الملك", from: "2013", to: "حتى الآن" },
    ],
    leaderChildren: ['الملك فيليب (الأميرة إليزابيث، الأمير غابرييل، الأمير إيمانويل)'],
  },
  at: {
    landmarkDetails: [
      { name: "Schönbrunn Palace", nameAr: "قصر شونبرون", type: "قصر", description: "القصر الإمبراطوري الصيفي." },
      { name: "Hofburg Palace", nameAr: "قصر هوفبورغ", type: "قصر", description: "المقر الشتوي للإمبراطور." },
      { name: "Hallstatt", nameAr: "هالستات", type: "قرية", description: "قرية خلابة في جبال الألب." },
    ],
    riverDetails: [
      { name: "Danube River", nameAr: "نهر الدانوب", length: "2,850 كم", description: "يمر عبر فيينا." },
    ],
    lakeDetails: [
      { name: "Lake Hallstatt", nameAr: "بحيرة هالستات", area: "8.5 كم²", description: "بحيرة جبلية جميلة." },
    ],
    borderingSeas: [],
    celebrities: [
      { name: "Wolfgang Amadeus Mozart", nameAr: "فولفغانغ أماديوس موزارت", profession: "ملحن", knownFor: "أحد أعظم الملحنين في التاريخ." },
      { name: "Sigmund Freud", nameAr: "سيغموند فرويد", profession: "طبيب نفسي", knownFor: "مؤسس التحليل النفسي." },
      { name: "Arnold Schwarzenegger", nameAr: "أرنولد شوارزنيجر", profession: "ممثل وسياسي", knownFor: "حاكم كاليفورنيا الأسبق." },
    ],
    previousLeaders: [
      { name: "Maria Theresa", nameAr: "ماريا تيريزا", title: "الإمبراطورة", from: "1740", to: "1780" },
      { name: "Franz Joseph I", nameAr: "فرانز جوزيف الأول", title: "الإمبراطور", from: "1848", to: "1916" },
      { name: "Bruno Kreisky", nameAr: "برونو كرايسكي", title: "المستشار", from: "1970", to: "1983" },
    ],
    leaderChildren: [],
  },
  ch: {
    landmarkDetails: [
      { name: "Matterhorn", nameAr: "ماترهورن", type: "جبل", description: "أشهر جبل في جبال الألب." },
      { name: "Lake Geneva", nameAr: "بحيرة جنيف", type: "بحيرة", description: "أكبر بحيرة في أوروبا الغربية." },
      { name: "Rhine Falls", nameAr: "شلالات الراين", type: "شلال", description: "أكبر شلال في أوروبا." },
    ],
    riverDetails: [
      { name: "Rhine River", nameAr: "نهر الراين", length: "1,230 كم", description: "يمر عبر سويسرا." },
    ],
    lakeDetails: [
      { name: "Lake Geneva", nameAr: "بحيرة جنيف", area: "582 كم²", description: "أكبر بحيرة في سويسرا." },
    ],
    borderingSeas: [],
    celebrities: [
      { name: "Albert Einstein", nameAr: "ألبرت أينشتاين", profession: "عالم", knownFor: "نظرية النسبية." },
      { name: "Roger Federer", nameAr: "روجر فيدرر", profession: "لاعب كرة مضرب", knownFor: "أسطورة التنس العالمية." },
      { name: "Carl Jung", nameAr: "كارل يونغ", profession: "طبيب نفسي", knownFor: "مؤسس علم النفس التحليلي." },
    ],
    previousLeaders: [
      { name: "Guillaume-Henri Dufour", nameAr: "غيوم هنري دوفور", title: "الرئيس الاتحادي", from: "1848", to: "1849" },
    ],
    leaderChildren: [],
  },
  se: {
    landmarkDetails: [
      { name: "Vasa Museum", nameAr: "متحف فاسا", type: "متحف", description: "متحف سفينة حربية من القرن السابع عشر." },
      { name: "Gamla Stan", nameAr: "البلدة القديمة", type: "منطقة", description: "البلدة القديمة في ستوكهولم." },
      { name: "ABBA Museum", nameAr: "متحف آبا", type: "متحف", description: "متحف فرقة آبا الشهيرة." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Lake Vänern", nameAr: "بحيرة فيرنرن", area: "5,650 كم²", description: "أكبر بحيرة في السويد." },
    ],
    borderingSeas: ['بحر البلطيق'],
    celebrities: [
      { name: "Alfred Nobel", nameAr: "ألفريد نوبل", profession: "مخترع", knownFor: "مخترع الديناميت ومؤسس جائزة نوبل." },
      { name: "Zlatan Ibrahimović", nameAr: "زلاتان إبراهيموفيتش", profession: "لاعب كرة قدم", knownFor: "أحد أعظم لاعبي كرة القدم." },
      { name: "Greta Thunberg", nameAr: "غريتا تونبرغ", profession: "ناشطة", knownFor: "ناشطة مناخية عالمية." },
    ],
    previousLeaders: [
      { name: "Gustav Vasa", nameAr: "غوستاف فاسا", title: "الملك", from: "1523", to: "1560" },
      { name: "Olof Palme", nameAr: "أولوف بالمه", title: "رئيس الوزراء", from: "1969", to: "1986" },
      { name: "Carl XVI Gustaf", nameAr: "الملك كارل السادس عشر غوستاف", title: "الملك", from: "1973", to: "حتى الآن" },
    ],
    leaderChildren: ['الملك كارل غوستاف (فيكتوريا، كارل فيليب، مادلين)'],
  },
  no: {
    landmarkDetails: [
      { name: "Geirangerfjord", nameAr: "مضيق غيرانغر", type: "مضيق", description: "أجمل مضيق في النرويج." },
      { name: "Northern Lights", nameAr: "الشفق القطبي", type: "ظاهرة طبيعية", description: "أضواء الشمال الساحرة." },
      { name: "Viking Ship Museum", nameAr: "متحف سفن الفايكنج", type: "متحف", description: "متحف السفن الفايكنغية." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['بحر الشمال', 'المحيط الأطلسي', 'بحر بارنتس'],
    celebrities: [
      { name: "Edvard Munch", nameAr: "إدفارد مونك", profession: "رسام", knownFor: "لوحة الصرخة." },
      { name: "Henrik Ibsen", nameAr: "هنريك إبسن", profession: "كاتب مسرحي", knownFor: "أشهر كاتب مسرحي نرويجي." },
    ],
    previousLeaders: [
      { name: "Harald V", nameAr: "الملك هارالد الخامس", title: "الملك", from: "1991", to: "حتى الآن" },
      { name: "Gro Harlem Brundtland", nameAr: "غرو هارلم برونتلاند", title: "رئيسة الوزراء", from: "1981", to: "1996" },
    ],
    leaderChildren: ['الملك هارالد (هوكون، مارتا لويز)'],
  },
  dk: {
    landmarkDetails: [
      { name: "Tivoli Gardens", nameAr: "حدائق تيفولي", type: "منتزه", description: "واحدة من أقدم مدن الملاهي في العالم." },
      { name: "The Little Mermaid", nameAr: "تمثال الحورية الصغيرة", type: "تمثال", description: "رمز كوبنهاغن." },
      { name: "Kronborg Castle", nameAr: "قلعة كرونبورغ", type: "قلعة", description: "قلعة هاملت الشهيرة." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['بحر الشمال', 'بحر البلطيق'],
    celebrities: [
      { name: "Hans Christian Andersen", nameAr: "هانس كريستيان أندرسن", profession: "كاتب", knownFor: "مؤلف أشهر قصص الأطفال." },
      { name: "Mads Mikkelsen", nameAr: "مادس ميكلسن", profession: "ممثل", knownFor: "ممثل عالمي." },
    ],
    previousLeaders: [
      { name: "Queen Margrethe II", nameAr: "الملكة مارغريت الثانية", title: "الملكة", from: "1972", to: "2024" },
      { name: "Frederik X", nameAr: "الملك فريدريك العاشر", title: "الملك", from: "2024", to: "حتى الآن" },
    ],
    leaderChildren: ['الملك فريدريك (كريستيان، إيزابيلا، فنسنت، جوزفين)'],
  },
  fi: {
    landmarkDetails: [
      { name: "Suomenlinna Fortress", nameAr: "قلعة سوومنلينا", type: "قلعة", description: "قلعة بحرية من القرن الثامن عشر." },
      { name: "Northern Lights", nameAr: "الشفق القطبي", type: "ظاهرة طبيعية", description: "مشاهدة الشفق القطبي في لابلاند." },
      { name: "Santa Claus Village", nameAr: "قرية سانتا كلوز", type: "قرية", description: "القرية الشهيرة في روفانيمي." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Lake Saimaa", nameAr: "بحيرة سايما", area: "4,400 كم²", description: "أكبر بحيرة في فنلندا." },
    ],
    borderingSeas: ['خليج فنلندا', 'بحر البلطيق'],
    celebrities: [
      { name: "Jean Sibelius", nameAr: "جان سيبيليوس", profession: "ملحن", knownFor: "أشهر ملحن فنلندي." },
    ],
    previousLeaders: [
      { name: "Carl Gustaf Mannerheim", nameAr: "كارل غوستاف مانرهايم", title: "الرئيس", from: "1944", to: "1946" },
      { name: "Urho Kekkonen", nameAr: "أورهو كيكونن", title: "الرئيس", from: "1956", to: "1982" },
      { name: "Sauli Niinistö", nameAr: "ساولي نينيستو", title: "الرئيس", from: "2012", to: "2024" },
    ],
    leaderChildren: [],
  },
  pt: {
    landmarkDetails: [
      { name: "Belém Tower", nameAr: "برج بيليم", type: "برج", description: "برج تاريخي يعود للقرن السادس عشر." },
      { name: "Jerónimos Monastery", nameAr: "دير جيرونيموس", type: "دير", description: "تحفة معمارية مانويلية." },
      { name: "Pena Palace", nameAr: "قصر بينا", type: "قصر", description: "قصر رومانسي في سينترا." },
    ],
    riverDetails: [
      { name: "Tagus River", nameAr: "نهر تاجة", length: "1,038 كم", description: "أطول نهر في شبه الجزيرة الأيبيرية." },
    ],
    lakeDetails: [],
    borderingSeas: ['المحيط الأطلسي'],
    celebrities: [
      { name: "Luís de Camões", nameAr: "لويس دي كامويس", profession: "شاعر", knownFor: "مؤلف ملحمة اللوسياد." },
      { name: "Cristiano Ronaldo", nameAr: "كريستيانو رونالدو", profession: "لاعب كرة قدم", knownFor: "أحد أعظم لاعبي كرة القدم." },
    ],
    previousLeaders: [
      { name: "António de Oliveira Salazar", nameAr: "أنطونيو سالازار", title: "رئيس الوزراء", from: "1932", to: "1968" },
      { name: "Mário Soares", nameAr: "ماريو سواريش", title: "الرئيس", from: "1986", to: "1996" },
      { name: "Aníbal Cavaco Silva", nameAr: "أنيبال كافاكو سيلفا", title: "الرئيس", from: "2006", to: "2016" },
    ],
    leaderChildren: [],
  },
  gr: {
    landmarkDetails: [
      { name: "Parthenon", nameAr: "البارثينون", type: "معبد", description: "أشهر معبد يوناني قديم على الأكروبوليس." },
      { name: "Santorini", nameAr: "سانتوريني", type: "جزيرة", description: "جزيرة بركانية خلابة." },
      { name: "Meteora", nameAr: "ميتيورا", type: "أديرة", description: "أديرة معلقة على قمم صخرية." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['البحر الأبيض المتوسط', 'بحر إيجة', 'البحر الأيوني'],
    celebrities: [
      { name: "Aristotle", nameAr: "أرسطو", profession: "فيلسوف", knownFor: "أحد أعظم الفلاسفة في التاريخ." },
      { name: "Socrates", nameAr: "سقراط", profession: "فيلسوف", knownFor: "مؤسس الفلسفة الغربية." },
      { name: "Nikos Kazantzakis", nameAr: "نيكوس كازانتزاكيس", profession: "كاتب", knownFor: "مؤلف رواية زوربا." },
    ],
    previousLeaders: [
      { name: "Pericles", nameAr: "بريكليس", title: "قائد", from: "461 ق.م", to: "429 ق.م" },
      { name: "Alexander the Great", nameAr: "الإسكندر الأكبر", title: "الملك", from: "336 ق.م", to: "323 ق.م" },
      { name: "Eleftherios Venizelos", nameAr: "إلفثيريوس فينيزيلوس", title: "رئيس الوزراء", from: "1910", to: "1933" },
    ],
    leaderChildren: [],
  },
  cz: {
    landmarkDetails: [
      { name: "Charles Bridge", nameAr: "جسر تشارلز", type: "جسر", description: "جسر تاريخي في براغ." },
      { name: "Prague Castle", nameAr: "قلعة براغ", type: "قلعة", description: "أكبر قلعة في العالم." },
      { name: "Old Town Square", nameAr: "ساحة البلدة القديمة", type: "ساحة", description: "ساحة تاريخية في براغ." },
    ],
    riverDetails: [
      { name: "Vltava River", nameAr: "نهر فلتافا", length: "430 كم", description: "أطول نهر في التشيك." },
    ],
    lakeDetails: [],
    borderingSeas: [],
    celebrities: [
      { name: "Franz Kafka", nameAr: "فرانز كافكا", profession: "كاتب", knownFor: "أحد أشهر كتاب القرن العشرين." },
      { name: "Antonín Dvořák", nameAr: "أنتونين دفورجاك", profession: "ملحن", knownFor: "مؤلف السيمفونية التاسعة." },
      { name: "Milan Kundera", nameAr: "ميلان كونديرا", profession: "كاتب", knownFor: "مؤلف رواية كائن لا تحتمل خفته." },
    ],
    previousLeaders: [
      { name: "Václav Havel", nameAr: "فاتسلاف هافيل", title: "الرئيس", from: "1989", to: "2003" },
      { name: "Václav Klaus", nameAr: "فاتسلاف كلاوس", title: "الرئيس", from: "2003", to: "2013" },
      { name: "Miloš Zeman", nameAr: "ميلوش زيمان", title: "الرئيس", from: "2013", to: "2023" },
    ],
    leaderChildren: [],
  },
  ro: {
    landmarkDetails: [
      { name: "Transylvania", nameAr: "ترانسيلفانيا", type: "منطقة", description: "منطقة تاريخية تشتهر بقلعة دراكولا." },
      { name: "Bran Castle", nameAr: "قلعة بران", type: "قلعة", description: "قلعة دراكولا الشهيرة." },
      { name: "Palace of the Parliament", nameAr: "قصر البرلمان", type: "مبنى", description: "أثقل مبنى في العالم." },
    ],
    riverDetails: [
      { name: "Danube River", nameAr: "نهر الدانوب", length: "2,850 كم", description: "يمر عبر رومانيا ويصب في البحر الأسود." },
    ],
    lakeDetails: [],
    borderingSeas: ['البحر الأسود'],
    celebrities: [
      { name: "Nadia Comăneci", nameAr: "ناديا كومانتشي", profession: "لاعبة جمباز", knownFor: "أول لاعبة تحصل على 10 كامل." },
      { name: "Vlad the Impaler", nameAr: "فلاد المخوزق", profession: "حاكم", knownFor: "قائد روماني مشهور." },
    ],
    previousLeaders: [
      { name: "Nicolae Ceaușescu", nameAr: "نيكولاي تشاوتشيسكو", title: "الرئيس", from: "1965", to: "1989" },
      { name: "Ion Iliescu", nameAr: "أيون إلييسكو", title: "الرئيس", from: "1989", to: "1996" },
      { name: "Traian Băsescu", nameAr: "ترايان باسيسكو", title: "الرئيس", from: "2004", to: "2014" },
    ],
    leaderChildren: ['نيكولاي تشاوتشيسكو (فالنتين، زويا، نيكو)'],
  },
  hu: {
    landmarkDetails: [
      { name: "Hungarian Parliament", nameAr: "مبنى البرلمان المجري", type: "مبنى", description: "أحد أجمل مباني البرلمان في العالم." },
      { name: "Buda Castle", nameAr: "قلعة بودا", type: "قلعة", description: "القلعة التاريخية في بودابست." },
      { name: "Lake Balaton", nameAr: "بحيرة بالاتون", type: "بحيرة", description: "أكبر بحيرة في وسط أوروبا." },
    ],
    riverDetails: [
      { name: "Danube River", nameAr: "نهر الدانوب", length: "2,850 كم", description: "يقسم بودابست إلى قسمين." },
    ],
    lakeDetails: [
      { name: "Lake Balaton", nameAr: "بحيرة بالاتون", area: "592 كم²", description: "أكبر بحيرة في أوروبا الوسطى." },
    ],
    borderingSeas: [],
    celebrities: [
      { name: "Franz Liszt", nameAr: "فرانز ليست", profession: "ملحن", knownFor: "أعظم عازف بيانو في القرن التاسع عشر." },
      { name: "Ernő Rubik", nameAr: "إرنو روبيك", profession: "مخترع", knownFor: "مخترع مكعب روبيك." },
    ],
    previousLeaders: [
      { name: "János Kádár", nameAr: "يانوش كادار", title: "الأمين العام", from: "1956", to: "1988" },
      { name: "Viktor Orbán", nameAr: "فيكتور أوربان", title: "رئيس الوزراء", from: "2010", to: "حتى الآن" },
    ],
    leaderChildren: ['فيكتور أوربان (رايموند، غاشبار، فلورا، آنا)'],
  },
  ie: {
    landmarkDetails: [
      { name: "Cliffs of Moher", nameAr: "منحدرات موهير", type: "منطقة طبيعية", description: "من أروع المنحدرات الطبيعية في العالم." },
      { name: "Dublin Castle", nameAr: "قلعة دبلن", type: "قلعة", description: "قلعة تاريخية في قلب دبلن." },
      { name: "Giant's Causeway", nameAr: "ممر العمالقة", type: "منطقة طبيعية", description: "تكوينات صخرية بازلتية فريدة." },
    ],
    riverDetails: [
      { name: "River Shannon", nameAr: "نهر شانون", length: "360 كم", description: "أطول نهر في أيرلندا." },
    ],
    lakeDetails: [],
    borderingSeas: ['المحيط الأطلسي', 'البحر الأيرلندي'],
    celebrities: [
      { name: "James Joyce", nameAr: "جيمس جويس", profession: "كاتب", knownFor: "مؤلف رواية عوليس." },
      { name: "Oscar Wilde", nameAr: "أوسكار وايلد", profession: "كاتب", knownFor: "أشهر كاتب أيرلندي." },
      { name: "U2", nameAr: "يو تو", profession: "فرقة موسيقية", knownFor: "فرقة الروك الشهيرة." },
    ],
    previousLeaders: [
      { name: "Éamon de Valera", nameAr: "إيمون دي فاليرا", title: "الرئيس", from: "1959", to: "1973" },
      { name: "Mary Robinson", nameAr: "ماري روبنسون", title: "الرئيسة", from: "1990", to: "1997" },
      { name: "Michael D. Higgins", nameAr: "مايكل دي هيغينز", title: "الرئيس", from: "2011", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  nz: {
    landmarkDetails: [
      { name: "Sky Tower", nameAr: "برج السماء", type: "برج", description: "أطول مبنى في نيوزيلندا." },
      { name: "Milford Sound", nameAr: "مضيق ميلفورد", type: "مضيق", description: "أحد أجمل المضائق في العالم." },
      { name: "Tongariro National Park", nameAr: "حديقة تونغاريرو الوطنية", type: "محمية", description: "أقدم حديقة وطنية في نيوزيلندا." },
    ],
    riverDetails: [
      { name: "Waikato River", nameAr: "نهر وايكاتو", length: "425 كم", description: "أطول نهر في نيوزيلندا." },
    ],
    lakeDetails: [
      { name: "Lake Taupo", nameAr: "بحيرة توبو", area: "616 كم²", description: "أكبر بحيرة في نيوزيلندا." },
    ],
    borderingSeas: ['المحيط الهادئ', 'بحر تسمان'],
    celebrities: [
      { name: "Ernest Rutherford", nameAr: "إرنست رذرفورد", profession: "عالم", knownFor: "مكتشف النواة الذرية." },
      { name: "Peter Jackson", nameAr: "بيتر جاكسون", profession: "مخرج", knownFor: "مخرج أفلام سيد الخواتم." },
      { name: "Jacinda Ardern", nameAr: "جاسيندا أرديرن", profession: "سياسية", knownFor: "أصغر رئيسة وزراء في نيوزيلندا." },
    ],
    previousLeaders: [
      { name: "Richard Seddon", nameAr: "ريتشارد سيدون", title: "رئيس الوزراء", from: "1893", to: "1906" },
      { name: "Michael Joseph Savage", nameAr: "مايكل جوزيف سافاج", title: "رئيس الوزراء", from: "1935", to: "1940" },
      { name: "Helen Clark", nameAr: "هيلين كلارك", title: "رئيسة الوزراء", from: "1999", to: "2008" },
      { name: "Jacinda Ardern", nameAr: "جاسيندا أرديرن", title: "رئيسة الوزراء", from: "2017", to: "2023" },
    ],
    leaderChildren: [],
  },
  ar: {
    landmarkDetails: [
      { name: "Obelisco de Buenos Aires", nameAr: "مسلة بوينس آيرس", type: "نصب تذكاري", description: "أشهر معلم في بوينس آيرس." },
      { name: "Iguazu Falls", nameAr: "شلالات إجوازو", type: "شلال", description: "واحدة من أعظم شلالات العالم." },
      { name: "Perito Moreno Glacier", nameAr: "نهر بيريتو مورينو الجليدي", type: "نهر جليدي", description: "نهر جليدي مذهل في باتاغونيا." },
    ],
    riverDetails: [
      { name: "Paraná River", nameAr: "نهر بارانا", length: "4,880 كم", description: "ثاني أطول نهر في أمريكا الجنوبية." },
    ],
    lakeDetails: [],
    borderingSeas: ['المحيط الأطلسي'],
    celebrities: [
      { name: "Eva Perón", nameAr: "إيفا بيرون", profession: "سياسية", knownFor: "السيدة الأولى للأرجنتين." },
      { name: "Lionel Messi", nameAr: "ليونيل ميسي", profession: "لاعب كرة قدم", knownFor: "أحد أعظم لاعبي كرة القدم." },
      { name: "Diego Maradona", nameAr: "دييغو مارادونا", profession: "لاعب كرة قدم", knownFor: "أسطورة كرة القدم الأرجنتينية." },
      { name: "Jorge Luis Borges", nameAr: "خورخي لويس بورخيس", profession: "كاتب", knownFor: "أشهر كاتب أرجنتيني." },
    ],
    previousLeaders: [
      { name: "Juan Perón", nameAr: "خوان بيرون", title: "الرئيس", from: "1946", to: "1955" },
      { name: "Isabel Perón", nameAr: "إيزابيل بيرون", title: "الرئيسة", from: "1974", to: "1976" },
      { name: "Raúl Alfonsín", nameAr: "راؤول ألفونسين", title: "الرئيس", from: "1983", to: "1989" },
      { name: "Carlos Menem", nameAr: "كارلوس منعم", title: "الرئيس", from: "1989", to: "1999" },
      { name: "Cristina Fernández de Kirchner", nameAr: "كريستينا فيرنانديز دي كيرشنر", title: "الرئيسة", from: "2007", to: "2015" },
      { name: "Alberto Fernández", nameAr: "ألبرتو فيرنانديز", title: "الرئيس", from: "2019", to: "2023" },
    ],
    leaderChildren: [],
  },
  cl: {
    landmarkDetails: [
      { name: "Easter Island", nameAr: "جزيرة القيامة", type: "جزيرة", description: "جزيرة تماثيل المواي الشهيرة." },
      { name: "Atacama Desert", nameAr: "صحراء أتاكاما", type: "صحراء", description: "أجف صحراء في العالم." },
      { name: "Torres del Paine", nameAr: "أبراج باين", type: "منطقة طبيعية", description: "متنزه وطني جميل في باتاغونيا." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['المحيط الهادئ'],
    celebrities: [
      { name: "Pablo Neruda", nameAr: "بابلو نيرودا", profession: "شاعر", knownFor: "حائز على جائزة نوبل في الأدب." },
      { name: "Isabel Allende", nameAr: "إيزابيل أليندي", profession: "كاتبة", knownFor: "أشهر كاتبة تشيلية." },
      { name: "Alexis Sánchez", nameAr: "أليكسيس سانشيز", profession: "لاعب كرة قدم", knownFor: "أشهر لاعب كرة قدم تشيلي." },
    ],
    previousLeaders: [
      { name: "Salvador Allende", nameAr: "سلفادور أليندي", title: "الرئيس", from: "1970", to: "1973" },
      { name: "Augusto Pinochet", nameAr: "أوغستو بينوشيه", title: "الرئيس", from: "1973", to: "1990" },
      { name: "Michelle Bachelet", nameAr: "ميشيل باتشيليت", title: "الرئيسة", from: "2006", to: "2010" },
      { name: "Sebastián Piñera", nameAr: "سباستيان بينيرا", title: "الرئيس", from: "2010", to: "2014" },
      { name: "Gabriel Boric", nameAr: "غابرييل بوريك", title: "الرئيس", from: "2022", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  co: {
    landmarkDetails: [
      { name: "Cartagena Old Town", nameAr: "مدينة كارتاخينا القديمة", type: "مدينة قديمة", description: "مدينة استعمارية جميلة." },
      { name: "Monserrate", nameAr: "جبل مونسيرات", type: "جبل", description: "جبل يطل على بوغوتا." },
      { name: "Amazon Rainforest", nameAr: "غابة الأمازون", type: "منطقة طبيعية", description: "أكبر غابة استوائية في العالم." },
    ],
    riverDetails: [
      { name: "Magdalena River", nameAr: "نهر ماغدالينا", length: "1,540 كم", description: "أهم نهر في كولومبيا." },
    ],
    lakeDetails: [],
    borderingSeas: ['المحيط الهادئ', 'البحر الكاريبي'],
    celebrities: [
      { name: "Gabriel García Márquez", nameAr: "غابرييل غارسيا ماركيز", profession: "كاتب", knownFor: "حائز على جائزة نوبل، مؤلف مئة عام من العزلة." },
      { name: "Shakira", nameAr: "شاكيرا", profession: "مطربة", knownFor: "أشهر مطربة كولومبية." },
      { name: "Fernando Botero", nameAr: "فيرناندو بوتيرو", profession: "رسام", knownFor: "الرسام الكولومبي المشهور بلوحاته الممتلئة." },
      { name: "James Rodríguez", nameAr: "جيمس رودريغيز", profession: "لاعب كرة قدم", knownFor: "هداف كأس العالم 2014." },
    ],
    previousLeaders: [
      { name: "Simón Bolívar", nameAr: "سيمون بوليفار", title: "الرئيس", from: "1819", to: "1830" },
      { name: "Alfonso López Michelsen", nameAr: "ألفونسو لوبيز ميكلسين", title: "الرئيس", from: "1974", to: "1978" },
      { name: "Álvaro Uribe", nameAr: "ألفارو أوريبي", title: "الرئيس", from: "2002", to: "2010" },
      { name: "Juan Manuel Santos", nameAr: "خوان مانويل سانتوس", title: "الرئيس", from: "2010", to: "2018" },
      { name: "Gustavo Petro", nameAr: "غوستافو بيترو", title: "الرئيس", from: "2022", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  pe: {
    landmarkDetails: [
      { name: "Machu Picchu", nameAr: "ماتشو بيتشو", type: "موقع أثري", description: "مدينة الإنكا المفقودة." },
      { name: "Nazca Lines", nameAr: "خطوط نازكا", type: "موقع أثري", description: "رسوم عملاقة في الصحراء." },
      { name: "Lake Titicaca", nameAr: "بحيرة تيتيكاكا", type: "بحيرة", description: "أعلى بحيرة ملاحية في العالم." },
    ],
    riverDetails: [
      { name: "Amazon River", nameAr: "نهر الأمازون", length: "6,992 كم", description: "أطول نهر في العالم، ينبع من بيرو." },
    ],
    lakeDetails: [
      { name: "Lake Titicaca", nameAr: "بحيرة تيتيكاكا", area: "8,372 كم²", description: "أعلى بحيرة ملاحية في العالم." },
    ],
    borderingSeas: ['المحيط الهادئ'],
    celebrities: [
      { name: "Mario Vargas Llosa", nameAr: "ماريو فارغاس يوسا", profession: "كاتب", knownFor: "حائز على جائزة نوبل في الأدب." },
      { name: "Pedro Castillo", nameAr: "بيدرو كاستيلو", profession: "سياسي", knownFor: "الرئيس السابق لبيرو." },
    ],
    previousLeaders: [
      { name: "Francisco Pizarro", nameAr: "فرانسيسكو بيزارو", title: "الحاكم", from: "1532", to: "1541" },
      { name: "Alberto Fujimori", nameAr: "ألبرتو فوجيموري", title: "الرئيس", from: "1990", to: "2000" },
      { name: "Alejandro Toledo", nameAr: "أليخاندرو توليدو", title: "الرئيس", from: "2001", to: "2006" },
      { name: "Pedro Castillo", nameAr: "بيدرو كاستيلو", title: "الرئيس", from: "2021", to: "2022" },
    ],
    leaderChildren: [],
  },
  ve: {
    landmarkDetails: [
      { name: "Angel Falls", nameAr: "شلالات أنجل", type: "شلال", description: "أعلى شلال في العالم بارتفاع 979 متراً." },
      { name: "Roraima Tepui", nameAr: "توبوي رورايما", type: "جبل", description: "جبل طاولة شهير." },
      { name: "Los Roques", nameAr: "لوس روكيس", type: "جزيرة", description: "أرخبيل سياحي جميل." },
    ],
    riverDetails: [
      { name: "Orinoco River", nameAr: "نهر أورينوكو", length: "2,410 كم", description: "ثالث أطول نهر في أمريكا الجنوبية." },
    ],
    lakeDetails: [
      { name: "Lake Maracaibo", nameAr: "بحيرة ماراكايبو", area: "13,210 كم²", description: "أكبر بحيرة في أمريكا الجنوبية." },
    ],
    borderingSeas: ['البحر الكاريبي', 'المحيط الأطلسي'],
    celebrities: [
      { name: "Simón Bolívar", nameAr: "سيمون بوليفار", profession: "قائد", knownFor: "محرر أمريكا الجنوبية." },
      { name: "Hugo Chávez", nameAr: "هوغو شافيز", profession: "سياسي", knownFor: "الرئيس السابق لفنزويلا." },
      { name: "Carolina Herrera", nameAr: "كارولينا هيريرا", profession: "مصممة أزياء", knownFor: "مصممة أزياء عالمية." },
    ],
    previousLeaders: [
      { name: "Simón Bolívar", nameAr: "سيمون بوليفار", title: "الرئيس", from: "1813", to: "1830" },
      { name: "Carlos Andrés Pérez", nameAr: "كارلوس أندريس بيريز", title: "الرئيس", from: "1974", to: "1979" },
      { name: "Hugo Chávez", nameAr: "هوغو شافيز", title: "الرئيس", from: "1999", to: "2013" },
      { name: "Nicolás Maduro", nameAr: "نيكولاس مادورو", title: "الرئيس", from: "2013", to: "حتى الآن" },
    ],
    leaderChildren: ['نيكولاس مادورو الابن', 'روسا فرجينيا'],
  },
  cu: {
    landmarkDetails: [
      { name: "Old Havana", nameAr: "هافانا القديمة", type: "مدينة قديمة", description: "موقع تراث عالمي لليونسكو." },
      { name: "El Capitolio", nameAr: "الكابيتوليو", type: "مبنى", description: "مبنى الكابيتول في هافانا." },
      { name: "Varadero Beach", nameAr: "شاطئ فاراديرو", type: "شاطئ", description: "أشهر شاطئ في كوبا." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['البحر الكاريبي', 'خليج المكسيك'],
    celebrities: [
      { name: "Fidel Castro", nameAr: "فيدل كاسترو", profession: "سياسي", knownFor: "قائد الثورة الكوبية." },
      { name: "Ernesto Che Guevara", nameAr: "إرنستو تشي غيفارا", profession: "ثائر", knownFor: "رمز الثورة العالمية." },
      { name: "Gloria Estefan", nameAr: "غلوريا إستيفان", profession: "مطربة", knownFor: "مطربة كوبية-أمريكية شهيرة." },
    ],
    previousLeaders: [
      { name: "Fulgencio Batista", nameAr: "فولجينسيو باتيستا", title: "الرئيس", from: "1940", to: "1944" },
      { name: "Fidel Castro", nameAr: "فيدل كاسترو", title: "الرئيس", from: "1959", to: "2008" },
      { name: "Raúl Castro", nameAr: "راؤول كاسترو", title: "الرئيس", from: "2008", to: "2018" },
      { name: "Miguel Díaz-Canel", nameAr: "ميغيل دياز كانيل", title: "الرئيس", from: "2018", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  kp: {
    landmarkDetails: [
      { name: "Arch of Triumph", nameAr: "قوس النصر", type: "نصب تذكاري", description: "أكبر قوس نصر في العالم." },
      { name: "Kim Il-sung Square", nameAr: "ساحة كيم إيل سونغ", type: "ساحة", description: "الساحة الرئيسية في بيونغ يانغ." },
      { name: "Juche Tower", nameAr: "برج جوتشي", type: "برج", description: "برج الفكرة الجوتشية." },
    ],
    riverDetails: [
      { name: "Yalu River", nameAr: "نهر يالو", length: "790 كم", description: "النهر الحدودي مع الصين." },
    ],
    lakeDetails: [],
    borderingSeas: ['بحر اليابان', 'البحر الأصفر'],
    celebrities: [
      { name: "Kim Il-sung", nameAr: "كيم إيل سونغ", profession: "سياسي", knownFor: "مؤسس كوريا الشمالية." },
    ],
    previousLeaders: [
      { name: "Kim Il-sung", nameAr: "كيم إيل سونغ", title: "الزعيم", from: "1948", to: "1994" },
      { name: "Kim Jong-il", nameAr: "كيم جونغ إيل", title: "الزعيم", from: "1994", to: "2011" },
      { name: "Kim Jong-un", nameAr: "كيم جونغ أون", title: "الزعيم", from: "2011", to: "حتى الآن" },
    ],
    leaderChildren: ['كيم جونغ أون (كيم جو-إيه)'],
  },
  af: {
    landmarkDetails: [
      { name: "Buddhas of Bamiyan", nameAr: "تماثيل باميان", type: "تماثيل", description: "تماثيل بوذا العملاقة (دمرت عام 2001)." },
      { name: "Blue Mosque", nameAr: "المسجد الأزرق", type: "مسجد", description: "مسجد تاريخي في مزار شريف." },
      { name: "Panjshir Valley", nameAr: "وادي بنجشير", type: "منطقة طبيعية", description: "وادي جميل في شمال شرق أفغانستان." },
    ],
    riverDetails: [
      { name: "Helmand River", nameAr: "نهر هلمند", length: "1,150 كم", description: "أطول نهر في أفغانستان." },
    ],
    lakeDetails: [],
    borderingSeas: [],
    celebrities: [
      { name: "Ahmad Shah Massoud", nameAr: "أحمد شاه مسعود", profession: "قائد", knownFor: "بطل المقاومة الأفغانية." },
      { name: "Malala Yousafzai", nameAr: "ملالا يوسف زاي", profession: "ناشطة", knownFor: "حائزة على جائزة نوبل للسلام." },
    ],
    previousLeaders: [
      { name: "Mohammad Zahir Shah", nameAr: "محمد ظاهر شاه", title: "الملك", from: "1933", to: "1973" },
      { name: "Mohammad Najibullah", nameAr: "محمد نجيب الله", title: "الرئيس", from: "1987", to: "1992" },
      { name: "Hamid Karzai", nameAr: "حامد كرزاي", title: "الرئيس", from: "2001", to: "2014" },
      { name: "Ashraf Ghani", nameAr: "أشرف غني", title: "الرئيس", from: "2014", to: "2021" },
    ],
    leaderChildren: [],
  },
  bd: {
    landmarkDetails: [
      { name: "Lalbagh Fort", nameAr: "قلعة لالباغ", type: "قلعة", description: "قلعة مغولية في دكا." },
      { name: "Sundarbans", nameAr: "غابات سونداربانس", type: "محمية", description: "أكبر غابة مانغروف في العالم." },
      { name: "Cox's Bazar", nameAr: "كوكس بازار", type: "شاطئ", description: "أطول شاطئ بحري في العالم." },
    ],
    riverDetails: [
      { name: "Ganges River", nameAr: "نهر الغانج", length: "2,525 كم", description: "أهم نهر في بنغلاديش." },
      { name: "Brahmaputra", nameAr: "نهر براهمابوترا", length: "2,900 كم", description: "أحد أهم الأنهار في آسيا." },
    ],
    lakeDetails: [],
    borderingSeas: ['خليج البنغال'],
    celebrities: [
      { name: "Sheikh Mujibur Rahman", nameAr: "الشيخ مجيب الرحمن", profession: "سياسي", knownFor: "أب الأمة البنغلاديشية." },
      { name: "Muhammad Yunus", nameAr: "محمد يونس", profession: "اقتصادي", knownFor: "حائز على جائزة نوبل للسلام." },
    ],
    previousLeaders: [
      { name: "Sheikh Mujibur Rahman", nameAr: "الشيخ مجيب الرحمن", title: "الرئيس", from: "1971", to: "1975" },
      { name: "Ziaur Rahman", nameAr: "ضياء الرحمن", title: "الرئيس", from: "1977", to: "1981" },
      { name: "Sheikh Hasina", nameAr: "الشيخة حسينة", title: "رئيسة الوزراء", from: "1996", to: "2001" },
      { name: "Sheikh Hasina", nameAr: "الشيخة حسينة", title: "رئيسة الوزراء", from: "2009", to: "حتى الآن" },
    ],
    leaderChildren: ['الشيخة حسينة (سجيب وجويا)'],
  },
  np: {
    landmarkDetails: [
      { name: "Mount Everest", nameAr: "جبل إيفرست", type: "جبل", description: "أعلى قمة في العالم بارتفاع 8,849 متراً." },
      { name: "Lumbini", nameAr: "لومبيني", type: "موقع ديني", description: "مهد بوذا." },
      { name: "Patan Durbar Square", nameAr: "ساحة باتان دوربار", type: "ساحة", description: "ساحة تاريخية في كاتماندو." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: [],
    celebrities: [
      { name: "Gautama Buddha", nameAr: "غوتاما بوذا", profession: "زعيم ديني", knownFor: "مؤسس البوذية." },
      { name: "Tenzing Norgay", nameAr: "تينزينغ نورغاي", profession: "متسلق جبال", knownFor: "أول من تسلق إيفرست." },
    ],
    previousLeaders: [
      { name: "King Mahendra", nameAr: "الملك ماهيندرا", title: "الملك", from: "1955", to: "1972" },
      { name: "King Birendra", nameAr: "الملك بريندرا", title: "الملك", from: "1972", to: "2001" },
      { name: "King Gyanendra", nameAr: "الملك جيانيندرا", title: "الملك", from: "2001", to: "2008" },
      { name: "Sher Bahadur Deuba", nameAr: "شير بهادور ديوبا", title: "رئيس الوزراء", from: "2017", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  lk: {
    landmarkDetails: [
      { name: "Sigiriya Rock", nameAr: "صخرة سيجيريا", type: "موقع أثري", description: "قلعة صخرية قديمة." },
      { name: "Temple of the Tooth", nameAr: "معبد السن", type: "معبد", description: "يحتوي على سن بوذا." },
      { name: "Galle Fort", nameAr: "قلعة غالي", type: "قلعة", description: "قلعة برتغالية هولندية." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['خليج البنغال', 'المحيط الهندي'],
    celebrities: [
      { name: "Mahinda Rajapaksa", nameAr: "ماهيندا راجاباكسا", profession: "سياسي", knownFor: "الرئيس السابق لسريلانكا." },
      { name: "Kumar Sangakkara", nameAr: "كومار سانغاكارا", profession: "لاعب كريكيت", knownFor: "أشهر لاعب كريكيت سريلانكي." },
    ],
    previousLeaders: [
      { name: "D. S. Senanayake", nameAr: "دون سيناناييكي", title: "رئيس الوزراء", from: "1947", to: "1952" },
      { name: "Sirimavo Bandaranaike", nameAr: "سيريمافو باندرانايكي", title: "رئيسة الوزراء", from: "1960", to: "1965" },
      { name: "Mahinda Rajapaksa", nameAr: "ماهيندا راجاباكسا", title: "الرئيس", from: "2005", to: "2015" },
      { name: "Gotabaya Rajapaksa", nameAr: "غوتابايا راجاباكسا", title: "الرئيس", from: "2019", to: "2022" },
    ],
    leaderChildren: [],
  },
  mm: {
    landmarkDetails: [
      { name: "Shwedagon Pagoda", nameAr: "معبد شوداغون", type: "معبد", description: "أقدس معبد بوذي في ميانمار." },
      { name: "Bagan Temples", nameAr: "معابد باغان", type: "موقع أثري", description: "آلاف المعابد البوذية القديمة." },
      { name: "Inle Lake", nameAr: "بحيرة إينلي", type: "بحيرة", description: "بحيرة جميلة في المرتفعات." },
    ],
    riverDetails: [
      { name: "Irrawaddy River", nameAr: "نهر إيراوادي", length: "2,170 كم", description: "أهم نهر في ميانمار." },
    ],
    lakeDetails: [
      { name: "Inle Lake", nameAr: "بحيرة إينلي", area: "116 كم²", description: "بحيرة ضحلة في ولاية شان." },
    ],
    borderingSeas: ['خليج البنغال', 'بحر أندامان'],
    celebrities: [
      { name: "Aung San Suu Kyi", nameAr: "أونغ سان سو تشي", profession: "سياسية", knownFor: "حائزة على جائزة نوبل للسلام." },
      { name: "Aung San", nameAr: "أونغ سان", profession: "قائد", knownFor: "بطل استقلال ميانمار." },
    ],
    previousLeaders: [
      { name: "U Nu", nameAr: "يو نو", title: "رئيس الوزراء", from: "1948", to: "1962" },
      { name: "Ne Win", nameAr: "ني وين", title: "الرئيس", from: "1962", to: "1981" },
      { name: "Than Shwe", nameAr: "تان شوي", title: "الرئيس", from: "1992", to: "2011" },
      { name: "Thein Sein", nameAr: "ثين سين", title: "الرئيس", from: "2011", to: "2016" },
    ],
    leaderChildren: [],
  },
  kz: {
    landmarkDetails: [
      { name: "Bayterek Tower", nameAr: "برج بايتيريك", type: "برج", description: "رمز أستانا الحديث." },
      { name: "Medeu Skating Rink", nameAr: "ميديو للتزلج", type: "منتجع", description: "أعلى حلبة تزلج في العالم." },
      { name: "Lake Kaindy", nameAr: "بحيرة كايندي", type: "بحيرة", description: "بحيرة جميلة تحت الماء غابة." },
    ],
    riverDetails: [
      { name: "Irtysh River", nameAr: "نهر إرتيش", length: "4,248 كم", description: "أطول نهر في كازاخستان." },
    ],
    lakeDetails: [
      { name: "Caspian Sea", nameAr: "بحر قزوين", area: "371,000 كم²", description: "أكبر بحيرة في العالم." },
      { name: "Lake Balkhash", nameAr: "بحيرة بالكاش", area: "16,400 كم²", description: "بحيرة كبيرة في جنوب شرق كازاخستان." },
    ],
    borderingSeas: ['بحر قزوين'],
    celebrities: [
      { name: "Nursultan Nazarbayev", nameAr: "نور سلطان نزارباييف", profession: "سياسي", knownFor: "أول رئيس لكازاخستان." },
      { name: "Kazhimukan Munaitpasov", nameAr: "كازيموكان مونايتپاسوف", profession: "مصارع", knownFor: "بطل مصارعة عالمي." },
    ],
    previousLeaders: [
      { name: "Nursultan Nazarbayev", nameAr: "نور سلطان نزارباييف", title: "الرئيس", from: "1990", to: "2019" },
      { name: "Kassym-Jomart Tokayev", nameAr: "قاسم جومارت توكاييف", title: "الرئيس", from: "2019", to: "حتى الآن" },
    ],
    leaderChildren: ['نور سلطان نزارباييف (داريغا، دينارا، عليا)'],
  },
  uz: {
    landmarkDetails: [
      { name: "Registan Square", nameAr: "ساحة ريجستان", type: "ساحة", description: "ساحة تاريخية في سمرقند." },
      { name: "Samarkand", nameAr: "سمرقند", type: "مدينة قديمة", description: "مدينة خيالية على طريق الحرير." },
      { name: "Bukhara", nameAr: "بخارى", type: "مدينة قديمة", description: "مدينة تاريخية على طريق الحرير." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Aral Sea", nameAr: "بحيرة آرال", area: "68,000 كم² (سابقاً)", description: "بحيرة كانت رابع أكبر بحيرة في العالم وجفت تقريباً." },
    ],
    borderingSeas: [],
    celebrities: [
      { name: "Amir Timur", nameAr: "أمير تيمور", profession: "قائد", knownFor: "مؤسس الدولة التيمورية." },
      { name: "Ulugh Beg", nameAr: "أولوغ بيك", profession: "عالم فلك", knownFor: "أشهر عالم فلك في العالم الإسلامي." },
      { name: "Islam Karimov", nameAr: "إسلام كريموف", profession: "سياسي", knownFor: "أول رئيس لأوزبكستان." },
    ],
    previousLeaders: [
      { name: "Islam Karimov", nameAr: "إسلام كريموف", title: "الرئيس", from: "1991", to: "2016" },
      { name: "Shavkat Mirziyoyev", nameAr: "شوكت ميرزيوييف", title: "الرئيس", from: "2016", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  az: {
    landmarkDetails: [
      { name: "Maiden Tower", nameAr: "برج العذراء", type: "برج", description: "برج تاريخي في باكو." },
      { name: "Palace of the Shirvanshahs", nameAr: "قصر شيرفانشاه", type: "قصر", description: "قصر من العصور الوسطى." },
      { name: "Flame Towers", nameAr: "أبراج اللهب", type: "برج", description: "أبراج باكو الحديثة." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['بحر قزوين'],
    celebrities: [
      { name: "Heydar Aliyev", nameAr: "حيدر علييف", profession: "سياسي", knownFor: "الرئيس السابق لأذربيجان." },
    ],
    previousLeaders: [
      { name: "Heydar Aliyev", nameAr: "حيدر علييف", title: "الرئيس", from: "1993", to: "2003" },
      { name: "Ilham Aliyev", nameAr: "إلهام علييف", title: "الرئيس", from: "2003", to: "حتى الآن" },
    ],
    leaderChildren: ['إلهام علييف (ليلى، أرسو، حيدر)'],
  },
  ge: {
    landmarkDetails: [
      { name: "Tbilisi Old Town", nameAr: "تبليسي القديمة", type: "مدينة قديمة", description: "البلدة القديمة في العاصمة." },
      { name: "Gelati Monastery", nameAr: "دير غيلاتي", type: "دير", description: "دير من العصور الوسطى." },
      { name: "Uplistsikhe Cave Town", nameAr: "مدينة أوبليستسيخي الكهفية", type: "موقع أثري", description: "مدينة كهفية قديمة." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['البحر الأسود'],
    celebrities: [
      { name: "Joseph Stalin", nameAr: "جوزيف ستالين", profession: "سياسي", knownFor: "زعيم الاتحاد السوفيتي." },
      { name: "Kakha Kaladze", nameAr: "كاخا كالادزه", profession: "لاعب كرة قدم", knownFor: "لاعب ميلان السابق." },
    ],
    previousLeaders: [
      { name: "Zviad Gamsakhurdia", nameAr: "زفياد غامساخورديا", title: "الرئيس", from: "1991", to: "1992" },
      { name: "Eduard Shevardnadze", nameAr: "إدوارد شيفرنادزه", title: "الرئيس", from: "1995", to: "2003" },
      { name: "Mikheil Saakashvili", nameAr: "ميخائيل ساكاشفيلي", title: "الرئيس", from: "2004", to: "2013" },
    ],
    leaderChildren: ['ميخائيل ساكاشفيلي (إدوارد، نيكولوز)'],
  },
  is: {
    landmarkDetails: [
      { name: "Blue Lagoon", nameAr: "البحيرة الزرقاء", type: "منتجع", description: "منتجع حراري جيوثيرمالي مشهور." },
      { name: "Gullfoss Waterfall", nameAr: "شلال غولفوس", type: "شلال", description: "شلال مذهل في وادي النهر." },
      { name: "Northern Lights", nameAr: "الشفق القطبي", type: "ظاهرة طبيعية", description: "أضواء الشمال الخلابة." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['المحيط الأطلسي', 'بحر غرينلاند'],
    celebrities: [
      { name: "Björk", nameAr: "بيورك", profession: "مطربة", knownFor: "أشهر مطربة آيسلندية." },
    ],
    previousLeaders: [
      { name: "Jón Sigurðsson", nameAr: "جون سيغوردسون", title: "زعيم", from: "1848", to: "1879" },
    ],
    leaderChildren: [],
  },
  lu: {
    landmarkDetails: [
      { name: "Bock Fortress", nameAr: "قلعة بوك", type: "قلعة", description: "قلعة تاريخية من العصور الوسطى." },
      { name: "Grand Ducal Palace", nameAr: "القصر الدوقي الكبير", type: "قصر", description: "مقر الدوق الأكبر." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: [],
    celebrities: [
      { name: "Grand Duke Henri", nameAr: "الدوق الأكبر هنري", profession: "حاكم", knownFor: "دوق لوكسمبورغ." },
    ],
    previousLeaders: [
      { name: "Grand Duke Jean", nameAr: "الدوق الأكبر جان", title: "الدوق الأكبر", from: "1964", to: "2000" },
      { name: "Grand Duke Henri", nameAr: "الدوق الأكبر هنري", title: "الدوق الأكبر", from: "2000", to: "حتى الآن" },
    ],
    leaderChildren: ['الدوق الأكبر هنري (غيوم، فيليكس، لويس، كلير)'],
  },
  mt: {
    landmarkDetails: [
      { name: "St. John's Co-Cathedral", nameAr: "كاتدرائية القديس يوحنا", type: "كاتدرائية", description: "كاتدرائية رائعة من العصور الوسطى." },
      { name: "Blue Lagoon", nameAr: "البحيرة الزرقاء", type: "منطقة طبيعية", description: "مياه فيروزية خلابة." },
      { name: "Mdina", nameAr: "مدينة مدينا", type: "مدينة قديمة", description: "العاصمة القديمة لمالطا." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['البحر الأبيض المتوسط'],
    celebrities: [],
    previousLeaders: [
      { name: "Agatha Barbara", nameAr: "أغاثا بربارا", title: "الرئيسة", from: "1982", to: "1987" },
      { name: "Eddie Fenech Adami", nameAr: "إدي فينيك أدامي", title: "الرئيس", from: "2004", to: "2009" },
    ],
    leaderChildren: [],
  },
  cy: {
    landmarkDetails: [
      { name: "Tombs of the Kings", nameAr: "مقابر الملوك", type: "موقع أثري", description: "مقابر من العصر الهلنستي." },
      { name: "Aphrodite's Rock", nameAr: "صخرة أفروديت", type: "منطقة طبيعية", description: "موقع أسطوري لميلاد إلهة الجمال." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['البحر الأبيض المتوسط'],
    celebrities: [
      { name: "Zeno of Citium", nameAr: "زينون الرواقي", profession: "فيلسوف", knownFor: "مؤسس المدرسة الرواقية." },
    ],
    previousLeaders: [
      { name: "Makarios III", nameAr: "مكاريوس الثالث", title: "الرئيس", from: "1960", to: "1977" },
      { name: "Spyros Kyprianou", nameAr: "سبيروس كيبريانو", title: "الرئيس", from: "1977", to: "1988" },
      { name: "Nicos Anastasiades", nameAr: "نيكوس أناستاسيادس", title: "الرئيس", from: "2013", to: "2023" },
    ],
    leaderChildren: [],
  },
  bg: {
    landmarkDetails: [
      { name: "Rila Monastery", nameAr: "دير ريلا", type: "دير", description: "أكبر وأشهر دير في بلغاريا." },
      { name: "Alexander Nevsky Cathedral", nameAr: "كاتدرائية ألكسندر نيفسكي", type: "كاتدرائية", description: "إحدى أكبر الكاتدرائيات الأرثوذكسية." },
      { name: "Old Nessebar", nameAr: "نيسيبار القديمة", type: "مدينة قديمة", description: "مدينة تاريخية على البحر الأسود." },
    ],
    riverDetails: [
      { name: "Maritsa River", nameAr: "نهر ماريتسا", length: "480 كم", description: "أطول نهر في بلغاريا." },
    ],
    lakeDetails: [],
    borderingSeas: ['البحر الأسود'],
    celebrities: [
      { name: "Cyril and Methodius", nameAr: "كيرلس وميثوديوس", profession: "قديسان", knownFor: "مبتكرا الأبجدية السلافية." },
      { name: "Hristo Stoichkov", nameAr: "خريستو ستويتشكوف", profession: "لاعب كرة قدم", knownFor: "أفضل لاعب كرة قدم بلغاري." },
    ],
    previousLeaders: [
      { name: "Todor Zhivkov", nameAr: "تودور جيفكوف", title: "الرئيس", from: "1971", to: "1989" },
      { name: "Zhelyu Zhelev", nameAr: "جيليو جيليف", title: "الرئيس", from: "1990", to: "1997" },
      { name: "Georgi Parvanov", nameAr: "جورجي بارفانوف", title: "الرئيس", from: "2002", to: "2012" },
      { name: "Rumen Radev", nameAr: "رومن راديف", title: "الرئيس", from: "2017", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  hr: {
    landmarkDetails: [
      { name: "Plitvice Lakes", nameAr: "بحيرات بليتفيتش", type: "منطقة طبيعية", description: "منتزه وطني خلاب." },
      { name: "Diocletian's Palace", nameAr: "قصر ديوكلتيانوس", type: "قصر", description: "قصر روماني قديم في سبليت." },
      { name: "Dubrovnik Old Town", nameAr: "دوبروفنيك القديمة", type: "مدينة قديمة", description: "موقع تراث عالمي." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['البحر الأدرياتيكي'],
    celebrities: [
      { name: "Nikola Tesla", nameAr: "نيكولا تيسلا", profession: "مخترع", knownFor: "عبقري الكهرباء." },
    ],
    previousLeaders: [
      { name: "Franjo Tuđman", nameAr: "فرانيو تودجمان", title: "الرئيس", from: "1990", to: "1999" },
      { name: "Stjepan Mesić", nameAr: "ستيبان ميسيتش", title: "الرئيس", from: "2000", to: "2010" },
      { name: "Ivo Josipović", nameAr: "إيفو يوسيبوفيتش", title: "الرئيس", from: "2010", to: "2015" },
      { name: "Zoran Milanović", nameAr: "زوران ميلانوفيتش", title: "الرئيس", from: "2020", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  rs: {
    landmarkDetails: [
      { name: "Belgrade Fortress", nameAr: "قلعة بلغراد", type: "قلعة", description: "القلعة التاريخية في بلغراد." },
      { name: "St. Sava Temple", nameAr: "معبد القديس سافا", type: "كنيسة", description: "أكبر كنيسة أرثوذكسية في البلقان." },
      { name: "Studenica Monastery", nameAr: "دير ستودينيتسا", type: "دير", description: "دير من العصور الوسطى." },
    ],
    riverDetails: [
      { name: "Danube River", nameAr: "نهر الدانوب", length: "2,850 كم", description: "يمر عبر بلغراد." },
    ],
    lakeDetails: [],
    borderingSeas: [],
    celebrities: [
      { name: "Novak Djokovic", nameAr: "نوفاك ديوكوفيتش", profession: "لاعب كرة مضرب", knownFor: "أحد أعظم لاعبي التنس." },
      { name: "Emir Kusturica", nameAr: "أمير كوستوريتسا", profession: "مخرج", knownFor: "مخرج أفلام مشهور." },
      { name: "Nikola Tesla", nameAr: "نيكولا تيسلا", profession: "مخترع", knownFor: "عبقري الكهرباء (صربي)." },
    ],
    previousLeaders: [
      { name: "Slobodan Milošević", nameAr: "سلوبودان ميلوشيفيتش", title: "الرئيس", from: "1989", to: "1997" },
      { name: "Vojislav Koštunica", nameAr: "فويسلاف كوشتونيتسا", title: "الرئيس", from: "2000", to: "2003" },
      { name: "Boris Tadić", nameAr: "بوريس تاديتش", title: "الرئيس", from: "2004", to: "2012" },
      { name: "Aleksandar Vučić", nameAr: "ألكسندر فوتشيتش", title: "الرئيس", from: "2017", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  sk: {
    landmarkDetails: [
      { name: "Bratislava Castle", nameAr: "قلعة براتيسلافا", type: "قلعة", description: "القلعة التاريخية المطلة على العاصمة." },
      { name: "High Tatras", nameAr: "جبال تاترا العالية", type: "منطقة طبيعية", description: "أعلى جبال في سلوفاكيا." },
      { name: "Spiš Castle", nameAr: "قلعة سبيش", type: "قلعة", description: "من أكبر القلاع في أوروبا." },
    ],
    riverDetails: [
      { name: "Danube River", nameAr: "نهر الدانوب", length: "2,850 كم", description: "يمر عبر براتيسلافا." },
    ],
    lakeDetails: [],
    borderingSeas: [],
    celebrities: [],
    previousLeaders: [
      { name: "Milan Rastislav Štefánik", nameAr: "ميلان راستيسلاف شتيفانيك", title: "قائد", from: "1918", to: "1919" },
      { name: "Andrej Hlinka", nameAr: "أندريه هلينكا", title: "زعيم", from: "1918", to: "1938" },
    ],
    leaderChildren: [],
  },
  si: {
    landmarkDetails: [
      { name: "Lake Bled", nameAr: "بحيرة بليد", type: "بحيرة", description: "بحيرة خلابة مع جزيرة وقلعة." },
      { name: "Predjama Castle", nameAr: "قلعة بريدياما", type: "قلعة", description: "قلعة داخل كهف." },
      { name: "Postojna Cave", nameAr: "كهف بوستوينا", type: "كهف", description: "أحد أكبر الكهوف في العالم." },
    ],
    riverDetails: [
      { name: "Sava River", nameAr: "نهر سافا", length: "990 كم", description: "أطول نهر في سلوفينيا." },
    ],
    lakeDetails: [
      { name: "Lake Bled", nameAr: "بحيرة بليد", area: "1.45 كم²", description: "بحيرة جليدية جميلة." },
    ],
    borderingSeas: ['البحر الأدرياتيكي (شريط ساحلي صغير)'],
    celebrities: [
      { name: "Melania Trump", nameAr: "ميلانيا ترامب", profession: "عارضة أزياء", knownFor: "السيدة الأولى السابقة للولايات المتحدة." },
    ],
    previousLeaders: [
      { name: "Milan Kučan", nameAr: "ميلان كوتشان", title: "الرئيس", from: "1991", to: "2002" },
      { name: "Janez Drnovšek", nameAr: "يانيز درنوفشيك", title: "الرئيس", from: "2002", to: "2007" },
      { name: "Borut Pahor", nameAr: "بوروت باهور", title: "الرئيس", from: "2012", to: "2022" },
      { name: "Nataša Pirc Musar", nameAr: "ناتاشا بيرتس موسار", title: "الرئيسة", from: "2022", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  lt: {
    landmarkDetails: [
      { name: "Trakai Castle", nameAr: "قلعة تراكاي", type: "قلعة", description: "قلعة مائية جميلة." },
      { name: "Hill of Crosses", nameAr: "تلة الصلبان", type: "موقع ديني", description: "موقع حج مذهل." },
      { name: "Vilnius Old Town", nameAr: "فيلنيوس القديمة", type: "مدينة قديمة", description: "واحدة من أكبر المدن القديمة في أوروبا." },
    ],
    riverDetails: [
      { name: "Neman River", nameAr: "نهر نيمان", length: "937 كم", description: "أطول نهر في ليتوانيا." },
    ],
    lakeDetails: [],
    borderingSeas: ['بحر البلطيق'],
    celebrities: [
      { name: "Vytautas the Great", nameAr: "فيتاوتاس الكبير", profession: "حاكم", knownFor: "أعظم حكام ليتوانيا." },
    ],
    previousLeaders: [
      { name: "Vytautas Landsbergis", nameAr: "فيتاوتاس لاندسبيرغيس", title: "الرئيس", from: "1990", to: "1992" },
      { name: "Algirdas Brazauskas", nameAr: "ألغيرداس برازوسكاس", title: "الرئيس", from: "1993", to: "1998" },
      { name: "Valdas Adamkus", nameAr: "فالداس أدامكوس", title: "الرئيس", from: "1998", to: "2003" },
      { name: "Dalia Grybauskaitė", nameAr: "داليا غريباوسكايتي", title: "الرئيسة", from: "2009", to: "2019" },
      { name: "Gitanas Nausėda", nameAr: "غيتاناس ناوسيدا", title: "الرئيس", from: "2019", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  lv: {
    landmarkDetails: [
      { name: "Riga Old Town", nameAr: "ريغا القديمة", type: "مدينة قديمة", description: "موقع تراث عالمي." },
      { name: "Gauja National Park", nameAr: "حديقة غاويا الوطنية", type: "محمية", description: "أكبر منتزه وطني في لاتفيا." },
      { name: "Jurmala Beach", nameAr: "شاطئ جورمالا", type: "شاطئ", description: "أشهر منتجع شاطئي في لاتفيا." },
    ],
    riverDetails: [
      { name: "Daugava River", nameAr: "نهر دوغافا", length: "1,020 كم", description: "أطول نهر في لاتفيا." },
    ],
    lakeDetails: [],
    borderingSeas: ['بحر البلطيق', 'خليج ريغا'],
    celebrities: [
      { name: "Rainis", nameAr: "راينيس", profession: "شاعر", knownFor: "أشهر شاعر لاتفي." },
      { name: "Mikhail Baryshnikov", nameAr: "ميخائيل باريشنيكوف", profession: "راقص باليه", knownFor: "أشهر راقص باليه." },
    ],
    previousLeaders: [
      { name: "Vaira Vīķe-Freiberga", nameAr: "فايرا فيكي-فريبيرغا", title: "الرئيسة", from: "1999", to: "2007" },
      { name: "Andris Bērziņš", nameAr: "أندريس بيرزينش", title: "الرئيس", from: "2007", to: "2011" },
      { name: "Raimonds Vējonis", nameAr: "رايموندز فيجونيس", title: "الرئيس", from: "2015", to: "2019" },
      { name: "Egils Levits", nameAr: "إيغيلس ليفيتس", title: "الرئيس", from: "2019", to: "2023" },
    ],
    leaderChildren: [],
  },
  ee: {
    landmarkDetails: [
      { name: "Tallinn Old Town", nameAr: "تالين القديمة", type: "مدينة قديمة", description: "أفضل مدينة قديمة محفوظة في أوروبا." },
      { name: "Lahemaa National Park", nameAr: "حديقة لاهيما الوطنية", type: "محمية", description: "أكبر منتزه وطني في إستونيا." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Lake Peipus", nameAr: "بحيرة بيبوس", area: "3,555 كم²", description: "رابع أكبر بحيرة في أوروبا." },
    ],
    borderingSeas: ['خليج فنلندا', 'بحر البلطيق'],
    celebrities: [
      { name: "Lennart Meri", nameAr: "لينارت ميري", profession: "سياسي", knownFor: "الرئيس الإستوني ومؤسس الاستقلال." },
      { name: "Arvo Pärt", nameAr: "أرفو بارت", profession: "ملحن", knownFor: "أشهر ملحن إستوني." },
    ],
    previousLeaders: [
      { name: "Lennart Meri", nameAr: "لينارت ميري", title: "الرئيس", from: "1992", to: "2001" },
      { name: "Toomas Hendrik Ilves", nameAr: "تووماس هندريك إلفيس", title: "الرئيس", from: "2006", to: "2016" },
      { name: "Kersti Kaljulaid", nameAr: "كيرستي كاليولايد", title: "الرئيسة", from: "2016", to: "2021" },
      { name: "Alar Karis", nameAr: "ألار كاريس", title: "الرئيس", from: "2021", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  do: {
    landmarkDetails: [
      { name: "Colonial Zone", nameAr: "المنطقة الاستعمارية", type: "مدينة قديمة", description: "أول مستوطنة أوروبية في أمريكا." },
      { name: "Pico Duarte", nameAr: "قمة دوارتي", type: "جبل", description: "أعلى قمة في الكاريبي." },
      { name: "Punta Cana", nameAr: "بونتا كانا", type: "منتجع", description: "أشهر وجهة سياحية." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['البحر الكاريبي', 'المحيط الأطلسي'],
    celebrities: [
      { name: "Juan Luis Guerra", nameAr: "خوان لويس غيرا", profession: "مطرب", knownFor: "أشهر مطرب دومينيكاني." },
      { name: "Sammy Sosa", nameAr: "سامي سوسا", profession: "لاعب بيسبول", knownFor: "أسطورة البيسبول." },
    ],
    previousLeaders: [
      { name: "Rafael Trujillo", nameAr: "رافاييل تروخيو", title: "الرئيس", from: "1930", to: "1961" },
      { name: "Joaquín Balaguer", nameAr: "خواكين بالاغير", title: "الرئيس", from: "1960", to: "1962" },
      { name: "Leonel Fernández", nameAr: "ليونيل فيرنانديز", title: "الرئيس", from: "1996", to: "2000" },
      { name: "Danilo Medina", nameAr: "دانيلو ميدينا", title: "الرئيس", from: "2012", to: "2020" },
    ],
    leaderChildren: [],
  },
  cr: {
    landmarkDetails: [
      { name: "Arenal Volcano", nameAr: "بركان أرينال", type: "بركان", description: "أحد أكثر البراكين نشاطاً في العالم." },
      { name: "Manuel Antonio Beach", nameAr: "شاطئ مانويل أنطونيو", type: "شاطئ", description: "أجمل شاطئ في كوستاريكا." },
      { name: "Monteverde Cloud Forest", nameAr: "غابة مونتيفيردي الضبابية", type: "محمية", description: "محمية طبيعية رائعة." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['البحر الكاريبي', 'المحيط الهادئ'],
    celebrities: [
      { name: "Óscar Arias", nameAr: "أوسكار آرياس", profession: "سياسي", knownFor: "حائز على جائزة نوبل للسلام." },
      { name: "Keylor Navas", nameAr: "كيلور نافاس", profession: "لاعب كرة قدم", knownFor: "حارس مرمى ريال مدريد السابق." },
    ],
    previousLeaders: [
      { name: "José Figueres Ferrer", nameAr: "خوسيه فيغيريس فيرير", title: "الرئيس", from: "1948", to: "1949" },
      { name: "Óscar Arias", nameAr: "أوسكار آرياس", title: "الرئيس", from: "1986", to: "1990" },
      { name: "Laura Chinchilla", nameAr: "لورا شينشيلا", title: "الرئيسة", from: "2010", to: "2014" },
      { name: "Carlos Alvarado", nameAr: "كارلوس ألفارادو", title: "الرئيس", from: "2018", to: "2022" },
    ],
    leaderChildren: [],
  },
  pa: {
    landmarkDetails: [
      { name: "Panama Canal", nameAr: "قناة بنما", type: "قناة", description: "أحد أهم الممرات الملاحية في العالم." },
      { name: "Casco Viejo", nameAr: "كاسكو فيجو", type: "مدينة قديمة", description: "البلدة القديمة في بنما." },
      { name: "San Blas Islands", nameAr: "جزر سان بلاس", type: "جزر", description: "جزر استوائية جميلة." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Gatun Lake", nameAr: "بحيرة غاتون", area: "425 كم²", description: "بحيرة اصطناعية في قناة بنما." },
    ],
    borderingSeas: ['البحر الكاريبي', 'المحيط الهادئ'],
    celebrities: [
      { name: "Ruben Blades", nameAr: "روبن بليدز", profession: "مطرب", knownFor: "أشهر مطرب بنمي." },
    ],
    previousLeaders: [
      { name: "Manuel Noriega", nameAr: "مانويل نورييغا", title: "الزعيم", from: "1983", to: "1989" },
      { name: "Guillermo Endara", nameAr: "غييرمو إندارا", title: "الرئيس", from: "1989", to: "1994" },
      { name: "Martín Torrijos", nameAr: "مارتين توريخوس", title: "الرئيس", from: "2004", to: "2009" },
      { name: "Ricardo Martinelli", nameAr: "ريكاردو مارتينيلي", title: "الرئيس", from: "2009", to: "2014" },
    ],
    leaderChildren: [],
  },
  ec: {
    landmarkDetails: [
      { name: "Galápagos Islands", nameAr: "جزر غالاباغوس", type: "جزر", description: "جزر داروين الشهيرة." },
      { name: "Middle of the World", nameAr: "منتصف العالم", type: "نصب تذكاري", description: "خط الاستواء." },
      { name: "Cotopaxi Volcano", nameAr: "بركان كوتوباكسي", type: "بركان", description: "أحد أعلى البراكين النشطة." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['المحيط الهادئ'],
    celebrities: [
      { name: "Jefferson Pérez", nameAr: "جيفرسون بيريز", profession: "عداء", knownFor: "الحائز على الميدالية الذهبية الأولمبية." },
      { name: "Cristina Rodlo", nameAr: "كريستينا رودلو", profession: "ممثلة", knownFor: "ممثلة إكوادورية." },
    ],
    previousLeaders: [
      { name: "Eloy Alfaro", nameAr: "إلوي ألفارو", title: "الرئيس", from: "1895", to: "1911" },
      { name: "Jaime Roldós", nameAr: "خايمي رولدوس", title: "الرئيس", from: "1979", to: "1981" },
      { name: "Rafael Correa", nameAr: "رافاييل كوريا", title: "الرئيس", from: "2007", to: "2017" },
      { name: "Lenín Moreno", nameAr: "لينين مورينو", title: "الرئيس", from: "2017", to: "2021" },
      { name: "Daniel Noboa", nameAr: "دانيال نوبوا", title: "الرئيس", from: "2023", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  bo: {
    landmarkDetails: [
      { name: "Salar de Uyuni", nameAr: "سطح أويوني الملحي", type: "منطقة طبيعية", description: "أكبر سطح ملحي في العالم." },
      { name: "Lake Titicaca", nameAr: "بحيرة تيتيكاكا", type: "بحيرة", description: "أعلى بحيرة ملاحية." },
      { name: "Tiwanaku", nameAr: "تيواناكو", type: "موقع أثري", description: "مدينة قديمة قبل الإنكا." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Lake Titicaca", nameAr: "بحيرة تيتيكاكا", area: "8,372 كم²", description: "أعلى بحيرة ملاحية في العالم." },
    ],
    borderingSeas: [],
    celebrities: [
      { name: "Evo Morales", nameAr: "إيفو موراليس", profession: "سياسي", knownFor: "أول رئيس من السكان الأصليين." },
    ],
    previousLeaders: [
      { name: "Simón Bolívar", nameAr: "سيمون بوليفار", title: "الرئيس", from: "1825", to: "1825" },
      { name: "Andrés de Santa Cruz", nameAr: "أندريس دي سانتا كروز", title: "الرئيس", from: "1829", to: "1839" },
      { name: "Hugo Banzer", nameAr: "هوغو بانزر", title: "الرئيس", from: "1971", to: "1978" },
      { name: "Evo Morales", nameAr: "إيفو موراليس", title: "الرئيس", from: "2006", to: "2019" },
      { name: "Luis Arce", nameAr: "لويس آرسي", title: "الرئيس", from: "2020", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  uy: {
    landmarkDetails: [
      { name: "Punta del Este", nameAr: "بونتا دل إيستي", type: "منتجع", description: "أشهر منتجع في أمريكا الجنوبية." },
      { name: "Colonia del Sacramento", nameAr: "كولونيا دل ساكرامنتو", type: "مدينة قديمة", description: "موقع تراث عالمي." },
      { name: "Montevideo Rambla", nameAr: "كورنيش مونتيفيديو", type: "منطقة حضرية", description: "أطول كورنيش في العالم." },
    ],
    riverDetails: [
      { name: "Uruguay River", nameAr: "نهر أوروغواي", length: "1,838 كم", description: "النهر الحدودي مع الأرجنتين." },
    ],
    lakeDetails: [],
    borderingSeas: ['المحيط الأطلسي'],
    celebrities: [
      { name: "José Mujica", nameAr: "خوسيه موخيكا", profession: "سياسي", knownFor: "أفقر رئيس في العالم." },
      { name: "Luis Suárez", nameAr: "لويس سواريز", profession: "لاعب كرة قدم", knownFor: "أحد أعظم المهاجمين." },
      { name: "Diego Forlán", nameAr: "دييغو فورلان", profession: "لاعب كرة قدم", knownFor: "هداف كأس العالم 2010." },
    ],
    previousLeaders: [
      { name: "José Batlle y Ordóñez", nameAr: "خوسيه باتل إي أوردونييز", title: "الرئيس", from: "1903", to: "1907" },
      { name: "José Mujica", nameAr: "خوسيه موخيكا", title: "الرئيس", from: "2010", to: "2015" },
      { name: "Tabaré Vázquez", nameAr: "تاباري فاسكيز", title: "الرئيس", from: "2005", to: "2010" },
      { name: "Luis Lacalle Pou", nameAr: "لويس لاكالي بو", title: "الرئيس", from: "2020", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  mn: {
    landmarkDetails: [
      { name: "Gobi Desert", nameAr: "صحراء غوبي", type: "صحراء", description: "أكبر صحراء في آسيا." },
      { name: "Karakorum", nameAr: "كاراكوروم", type: "مدينة قديمة", description: "العاصمة القديمة للإمبراطورية المغولية." },
      { name: "Lake Khövsgöl", nameAr: "بحيرة خوفسغول", type: "بحيرة", description: "أجمل بحيرة في منغوليا." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Lake Khövsgöl", nameAr: "بحيرة خوفسغول", area: "2,760 كم²", description: "ثاني أكبر بحيرة في منغوليا." },
    ],
    borderingSeas: [],
    celebrities: [
      { name: "Genghis Khan", nameAr: "جنكيز خان", profession: "قائد", knownFor: "مؤسس الإمبراطورية المغولية." },
      { name: "Kublai Khan", nameAr: "قوبلاي خان", profession: "إمبراطور", knownFor: "خان المغول العظيم." },
    ],
    previousLeaders: [
      { name: "Bogd Khan", nameAr: "بوغد خان", title: "الخان", from: "1911", to: "1924" },
      { name: "Yumjaagiin Tsedenbal", nameAr: "يومجاغين تسيدنبال", title: "الأمين العام", from: "1940", to: "1984" },
      { name: "Punsalmaagiin Ochirbat", nameAr: "بونسالماكين أوتشيربات", title: "الرئيس", from: "1990", to: "1997" },
      { name: "Tsakhiagiin Elbegdorj", nameAr: "تساخيا إلبغدوريج", title: "الرئيس", from: "2009", to: "2017" },
      { name: "Ukhnaagiin Khürelsükh", nameAr: "أوخنانغين خوريلسوخ", title: "الرئيس", from: "2021", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  kh: {
    landmarkDetails: [
      { name: "Angkor Wat", nameAr: "أنغكور وات", type: "معبد", description: "أكبر معبد ديني في العالم." },
      { name: "Bayon Temple", nameAr: "معبد بايون", type: "معبد", description: "معبد الوجوه الحجرية." },
      { name: "Angkor Thom", nameAr: "أنغكور ثوم", type: "مدينة قديمة", description: "العاصمة القديمة لخمير." },
    ],
    riverDetails: [
      { name: "Mekong River", nameAr: "نهر ميكونغ", length: "4,350 كم", description: "أهم نهر في جنوب شرق آسيا." },
    ],
    lakeDetails: [
      { name: "Tonlé Sap", nameAr: "بحيرة تونلي ساب", area: "2,700 كم²", description: "أكبر بحيرة للمياه العذبة في جنوب شرق آسيا." },
    ],
    borderingSeas: ['خليج تايلاند'],
    celebrities: [
      { name: "Pol Pot", nameAr: "بول بوت", profession: "سياسي", knownFor: "زعيم الخمير الحمر." },
      { name: "Norodom Sihanouk", nameAr: "نورودوم سيهانوك", profession: "ملك", knownFor: "ملك كمبوديا." },
    ],
    previousLeaders: [
      { name: "Norodom Sihanouk", nameAr: "نورودوم سيهانوك", title: "الملك", from: "1941", to: "1955" },
      { name: "Lon Nol", nameAr: "لون نول", title: "الرئيس", from: "1970", to: "1975" },
      { name: "Pol Pot", nameAr: "بول بوت", title: "رئيس الوزراء", from: "1976", to: "1979" },
      { name: "Hun Sen", nameAr: "هون سين", title: "رئيس الوزراء", from: "1985", to: "2023" },
      { name: "Norodom Sihamoni", nameAr: "نورودوم سيهاموني", title: "الملك", from: "2004", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  mg: {
    landmarkDetails: [
      { name: "Avenue of the Baobabs", nameAr: "طريق الباوباب", type: "منطقة طبيعية", description: "أشجار الباوباب العملاقة." },
      { name: "Nosy Be", nameAr: "نوسي بي", type: "جزيرة", description: "وجهة سياحية استوائية." },
      { name: "Tsingy de Bemaraha", nameAr: "تسينجي دي بيماراها", type: "منطقة طبيعية", description: "تكوينات صخرية فريدة." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['المحيط الهندي'],
    celebrities: [
      { name: "Didier Ratsiraka", nameAr: "ديدييه راتسيراكا", profession: "سياسي", knownFor: "الرئيس السابق لمدغشقر." },
    ],
    previousLeaders: [
      { name: "Philibert Tsiranana", nameAr: "فيليبير تسيرانانا", title: "الرئيس", from: "1960", to: "1972" },
      { name: "Didier Ratsiraka", nameAr: "ديدييه راتسيراكا", title: "الرئيس", from: "1975", to: "1993" },
      { name: "Marc Ravalomanana", nameAr: "مارك رافالومانانا", title: "الرئيس", from: "2002", to: "2009" },
      { name: "Andry Rajoelina", nameAr: "أندريه راجولينا", title: "الرئيس", from: "2019", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  mz: {
    landmarkDetails: [
      { name: "Bazaruto Archipelago", nameAr: "أرخبيل بازاروتو", type: "جزر", description: "جزر استوائية جميلة." },
      { name: "Gorongosa Park", nameAr: "حديقة غورونغوسا", type: "محمية", description: "محمية طبيعية." },
    ],
    riverDetails: [
      { name: "Zambezi River", nameAr: "نهر زامبيزي", length: "2,574 كم", description: "أطول نهر في موزمبيق." },
    ],
    lakeDetails: [],
    borderingSeas: ['المحيط الهندي', 'قناة موزمبيق'],
    celebrities: [
      { name: "Samora Machel", nameAr: "سامورا ماشيل", profession: "سياسي", knownFor: "أول رئيس لموزمبيق." },
    ],
    previousLeaders: [
      { name: "Samora Machel", nameAr: "سامورا ماشيل", title: "الرئيس", from: "1975", to: "1986" },
      { name: "Joaquim Chissano", nameAr: "جواكيم شيسانو", title: "الرئيس", from: "1986", to: "2005" },
      { name: "Armando Guebuza", nameAr: "أرماندو غويبوزا", title: "الرئيس", from: "2005", to: "2015" },
      { name: "Filipe Nyusi", nameAr: "فيليبي نيوسي", title: "الرئيس", from: "2015", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  zm: {
    landmarkDetails: [
      { name: "Victoria Falls", nameAr: "شلالات فيكتوريا", type: "شلال", description: "أحد أعظم شلالات العالم." },
      { name: "Kafue National Park", nameAr: "حديقة كافو الوطنية", type: "محمية", description: "أكبر حديقة وطنية في زامبيا." },
      { name: "Lake Kariba", nameAr: "بحيرة كاريبا", type: "بحيرة", description: "أكبر بحيرة اصطناعية في العالم." },
    ],
    riverDetails: [
      { name: "Zambezi River", nameAr: "نهر زامبيزي", length: "2,574 كم", description: "رابع أطول نهر في أفريقيا." },
    ],
    lakeDetails: [
      { name: "Lake Kariba", nameAr: "بحيرة كاريبا", area: "5,580 كم²", description: "أكبر بحيرة اصطناعية." },
      { name: "Lake Tanganyika", nameAr: "بحيرة تنجانيقا", area: "32,900 كم²", description: "ثاني أعمق بحيرة." },
    ],
    borderingSeas: [],
    celebrities: [
      { name: "Kenneth Kaunda", nameAr: "كينيث كاوندا", profession: "سياسي", knownFor: "أول رئيس لزامبيا." },
    ],
    previousLeaders: [
      { name: "Kenneth Kaunda", nameAr: "كينيث كاوندا", title: "الرئيس", from: "1964", to: "1991" },
      { name: "Frederick Chiluba", nameAr: "فريدريك تشيلوبا", title: "الرئيس", from: "1991", to: "2002" },
      { name: "Michael Sata", nameAr: "مايكل ساتا", title: "الرئيس", from: "2011", to: "2014" },
      { name: "Edgar Lungu", nameAr: "إدغار لونغو", title: "الرئيس", from: "2015", to: "2021" },
      { name: "Hakainde Hichilema", nameAr: "هاكايندي هيشيليما", title: "الرئيس", from: "2021", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  fj: {
    landmarkDetails: [
      { name: "Mamanuca Islands", nameAr: "جزر مامانوكا", type: "جزر", description: "جزر استوائية جميلة." },
      { name: "Garden of the Sleeping Giant", nameAr: "حديقة العملاق النائم", type: "حديقة", description: "حديقة بساتين الفاكهة." },
      { name: "Suva Municipal Market", nameAr: "سوق سوفا البلدي", type: "سوق", description: "أكبر سوق في فيجي." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['المحيط الهادئ'],
    celebrities: [],
    previousLeaders: [
      { name: "Ratu Sir Kamisese Mara", nameAr: "راتو كاميسيسي مارا", title: "الرئيس", from: "1987", to: "1993" },
      { name: "Josaia Voreqe Bainimarama", nameAr: "جوسايا فوريكي باينيماراما", title: "رئيس الوزراء", from: "2007", to: "2022" },
      { name: "Sitiveni Rabuka", nameAr: "سيتيفيني رابوكا", title: "رئيس الوزراء", from: "2022", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  pg: {
    landmarkDetails: [
      { name: "Kokoda Track", nameAr: "مسار كوكودا", type: "مسار", description: "مسار تاريخي عبر الغابة." },
      { name: "Mount Wilhelm", nameAr: "جبل فيلهلم", type: "جبل", description: "أعلى قمة في بابوا غينيا الجديدة." },
      { name: "Port Moresby", nameAr: "بورت مورسبي", type: "مدينة", description: "العاصمة." },
    ],
    riverDetails: [
      { name: "Sepik River", nameAr: "نهر سيبيك", length: "1,126 كم", description: "أطول نهر في بابوا غينيا الجديدة." },
    ],
    lakeDetails: [],
    borderingSeas: ['المحيط الهادئ', 'بحر سليمان', 'بحر المرجان'],
    celebrities: [],
    previousLeaders: [
      { name: "Michael Somare", nameAr: "مايكل سوماري", title: "رئيس الوزراء", from: "1975", to: "1980" },
      { name: "Paias Wingti", nameAr: "بيا وينجتي", title: "رئيس الوزراء", from: "1985", to: "1988" },
      { name: "Peter O'Neill", nameAr: "بيتر أونيل", title: "رئيس الوزراء", from: "2012", to: "2019" },
      { name: "James Marape", nameAr: "جيمس مارابي", title: "رئيس الوزراء", from: "2019", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  al: {
    landmarkDetails: [
      { name: "Butrint", nameAr: "بوترينت", type: "موقع أثري", description: "مدينة يونانية-رومانية قديمة." },
      { name: "Berat Castle", nameAr: "قلعة بيرات", type: "قلعة", description: "مدينة الألف نافذة." },
      { name: "Albanian Riviera", nameAr: "ريفيرا ألبانيا", type: "منطقة ساحلية", description: "ساحل جميل على البحر الأيوني." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['البحر الأدرياتيكي', 'البحر الأيوني'],
    celebrities: [
      { name: "Mother Teresa", nameAr: "الأم تريزا", profession: "راهبة", knownFor: "قديسة وحائزة على جائزة نوبل للسلام." },
      { name: "Ismail Kadare", nameAr: "إسماعيل كاداريه", profession: "كاتب", knownFor: "أشهر كاتب ألباني." },
    ],
    previousLeaders: [
      { name: "Enver Hoxha", nameAr: "أنور خوجة", title: "الأمين العام", from: "1944", to: "1985" },
      { name: "Ramiz Alia", nameAr: "رامز عليا", title: "الرئيس", from: "1985", to: "1992" },
      { name: "Sali Berisha", nameAr: "صالي بريشا", title: "الرئيس", from: "1992", to: "1997" },
      { name: "Edi Rama", nameAr: "إيدي راما", title: "رئيس الوزراء", from: "2013", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  am: {
    landmarkDetails: [
      { name: "Etchmiadzin Cathedral", nameAr: "كاتدرائية إتشميادزين", type: "كاتدرائية", description: "أقدم كاتدرائية في العالم." },
      { name: "Garni Temple", nameAr: "معبد غارني", type: "معبد", description: "المعبد اليوناني الوحيد في أرمينيا." },
      { name: "Lake Sevan", nameAr: "بحيرة سيفان", type: "بحيرة", description: "أكبر بحيرة في أرمينيا." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Lake Sevan", nameAr: "بحيرة سيفان", area: "940 كم²", description: "أكبر بحيرة في أرمينيا." },
    ],
    borderingSeas: [],
    celebrities: [
      { name: "Khachatur Abovyan", nameAr: "خاتشاتور أبوفيان", profession: "كاتب", knownFor: "مؤسس الأدب الأرمني الحديث." },
      { name: "Aram Khachaturian", nameAr: "آرام خاتشاتوريان", profession: "ملحن", knownFor: "مؤلف موسيقى رقصة السيوف." },
    ],
    previousLeaders: [
      { name: "Levon Ter-Petrosyan", nameAr: "ليفون تير-بتروسيان", title: "الرئيس", from: "1991", to: "1998" },
      { name: "Robert Kocharyan", nameAr: "روبرت كوتشاريان", title: "الرئيس", from: "1998", to: "2008" },
      { name: "Serzh Sargsyan", nameAr: "سرج سركسيان", title: "الرئيس", from: "2008", to: "2018" },
      { name: "Nikol Pashinyan", nameAr: "نيكول باشينيان", title: "رئيس الوزراء", from: "2018", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  ba: {
    landmarkDetails: [
      { name: "Stari Most", nameAr: "الجسر القديم", type: "جسر", description: "جسر موستار الشهير." },
      { name: "Baščaršija", nameAr: "باشتشارشيا", type: "سوق", description: "السوق القديم في سراييفو." },
      { name: "Sutjeska Park", nameAr: "حديقة سوتيسكا", type: "محمية", description: "أقدم منتزه وطني في البوسنة." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: [],
    celebrities: [
      { name: "Ivo Andrić", nameAr: "إيفو أندريتش", profession: "كاتب", knownFor: "حائز على جائزة نوبل في الأدب." },
      { name: "Goran Bregović", nameAr: "غوران بريغوفيتش", profession: "موسيقي", knownFor: "موسيقي مشهور عالمياً." },
    ],
    previousLeaders: [
      { name: "Josip Broz Tito", nameAr: "جوزيف بروز تيتو", title: "الرئيس", from: "1945", to: "1980" },
      { name: "Alija Izetbegović", nameAr: "عليا عزت بيغوفيتش", title: "الرئيس", from: "1990", to: "2000" },
      { name: "Milorad Dodik", nameAr: "ميلوراد دوديك", title: "الرئيس", from: "2018", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  by: {
    landmarkDetails: [
      { name: "Mir Castle", nameAr: "قلعة مير", type: "قلعة", description: "قلعة من العصور الوسطى." },
      { name: "Nesvizh Castle", nameAr: "قلعة نسفيج", type: "قلعة", description: "موقع تراث عالمي." },
      { name: "Belovezhskaya Pushcha", nameAr: "غابة بيلوفيج", type: "محمية", description: "أقدم غابة في أوروبا." },
    ],
    riverDetails: [
      { name: "Dnieper River", nameAr: "نهر الدنيبر", length: "2,201 كم", description: "يمر عبر بيلاروسيا." },
    ],
    lakeDetails: [],
    borderingSeas: [],
    celebrities: [
      { name: "Francysk Skaryna", nameAr: "فرانسيسك سكارينا", profession: "طابع", knownFor: "أول طابع كتب في أوروبا الشرقية." },
    ],
    previousLeaders: [
      { name: "Pyotr Masherov", nameAr: "بيوتر ماشيروف", title: "الأمين العام", from: "1965", to: "1980" },
      { name: "Alexander Lukashenko", nameAr: "ألكسندر لوكاشينكو", title: "الرئيس", from: "1994", to: "حتى الآن" },
    ],
    leaderChildren: ['ألكسندر لوكاشينكو (فيكتور، دميتري، نيكولاي)'],
  },
  md: {
    landmarkDetails: [
      { name: "Orheiul Vechi", nameAr: "أورهيول فيكي", type: "موقع أثري", description: "دير كهفي من العصور الوسطى." },
      { name: "Cricova Winery", nameAr: "خمور كريكوفا", type: "متحف", description: "أكبر قبو نبيذ في العالم." },
      { name: "Stephen the Great Monument", nameAr: "نصب ستيفن الكبير", type: "نصب تذكاري", description: "أهم نصب في كيشيناو." },
    ],
    riverDetails: [
      { name: "Dniester River", nameAr: "نهر دنيستر", length: "1,362 كم", description: "النهر الرئيسي في مولدوفا." },
    ],
    lakeDetails: [],
    borderingSeas: [],
    celebrities: [],
    previousLeaders: [
      { name: "Mircea Snegur", nameAr: "ميرتشيا سنيغور", title: "الرئيس", from: "1990", to: "1997" },
      { name: "Vladimir Voronin", nameAr: "فلاديمير فورونين", title: "الرئيس", from: "2001", to: "2009" },
      { name: "Maia Sandu", nameAr: "مايا ساندو", title: "الرئيسة", from: "2020", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  mk: {
    landmarkDetails: [
      { name: "Lake Ohrid", nameAr: "بحيرة أوخريد", type: "بحيرة", description: "أقدم وأعمق بحيرة في البلقان." },
      { name: "Ohrid Old Town", nameAr: "أوخريد القديمة", type: "مدينة قديمة", description: "موقع تراث عالمي." },
      { name: "Stone Bridge", nameAr: "الجسر الحجري", type: "جسر", description: "رمز سكوبيه." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Lake Ohrid", nameAr: "بحيرة أوخريد", area: "358 كم²", description: "أقدم بحيرة في أوروبا." },
    ],
    borderingSeas: [],
    celebrities: [
      { name: "Mother Teresa", nameAr: "الأم تريزا", profession: "راهبة", knownFor: "قديسة (ولدت في سكوبيه)." },
    ],
    previousLeaders: [
      { name: "Boris Trajkovski", nameAr: "بوريس ترايكوفسكي", title: "الرئيس", from: "1999", to: "2004" },
      { name: "Branko Crvenkovski", nameAr: "برانكو كرفينكوفسكي", title: "الرئيس", from: "2004", to: "2009" },
      { name: "Gjorge Ivanov", nameAr: "جورجي إيفانوف", title: "الرئيس", from: "2009", to: "2019" },
      { name: "Stevo Pendarovski", nameAr: "ستيفو بينداروفسكي", title: "الرئيس", from: "2019", to: "2024" },
    ],
    leaderChildren: [],
  },
  me: {
    landmarkDetails: [
      { name: "Bay of Kotor", nameAr: "خليج كوتور", type: "خليج", description: "أجمل خليج في البلقان." },
      { name: "Sveti Stefan", nameAr: "سفيتي ستيفان", type: "جزيرة", description: "جزيرة-فندق جميلة." },
      { name: "Durmitor Park", nameAr: "حديقة دورميتور", type: "محمية", description: "منتزه وطني جميل." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Skadar Lake", nameAr: "بحيرة سكادار", area: "370 كم²", description: "أكبر بحيرة في البلقان." },
    ],
    borderingSeas: ['البحر الأدرياتيكي'],
    celebrities: [],
    previousLeaders: [
      { name: "Milo Đukanović", nameAr: "ميلو جوكانوفيتش", title: "الرئيس", from: "2018", to: "2023" },
      { name: "Jakov Milatović", nameAr: "ياكوف ميلاتوفيتش", title: "الرئيس", from: "2023", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  bf: {
    landmarkDetails: [
      { name: "Ruins of Loropéni", nameAr: "أطلال لوروبيني", type: "موقع أثري", description: "أول موقع تراث عالمي في بوركينا فاسو." },
      { name: "Sindou Peaks", nameAr: "قمم سيندو", type: "منطقة طبيعية", description: "تكوينات صخرية مذهلة." },
      { name: "Lake Tengrela", nameAr: "بحيرة تينغريلا", type: "بحيرة", description: "بحيرة أفراس النهر." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Lake Tengrela", nameAr: "بحيرة تينغريلا", area: "3 كم²", description: "بحيرة صغيرة لأفراس النهر." },
    ],
    borderingSeas: [],
    celebrities: [
      { name: "Thomas Sankara", nameAr: "توماس سانكارا", profession: "سياسي", knownFor: "زعيم الثورة البوركينية." },
    ],
    previousLeaders: [
      { name: "Maurice Yaméogo", nameAr: "موريس ياميوغو", title: "الرئيس", from: "1960", to: "1966" },
      { name: "Thomas Sankara", nameAr: "توماس سانكارا", title: "الرئيس", from: "1983", to: "1987" },
      { name: "Blaise Compaoré", nameAr: "بليز كومباوري", title: "الرئيس", from: "1987", to: "2014" },
      { name: "Roch Marc Christian Kaboré", nameAr: "روش مارك كريستيان كابوري", title: "الرئيس", from: "2015", to: "2022" },
      { name: "Ibrahim Traoré", nameAr: "إبراهيم تراوري", title: "الرئيس", from: "2022", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  bj: {
    landmarkDetails: [
      { name: "Royal Palaces of Abomey", nameAr: "القصور الملكية في أبومي", type: "موقع أثري", description: "قصور تاريخية من مملكة داهومي." },
      { name: "Pendjari Park", nameAr: "حديقة بيندجاري", type: "محمية", description: "أكبر محمية طبيعية في بنين." },
      { name: "Ganvié", nameAr: "غانفي", type: "قرية", description: "أكبر قرية على الماء في أفريقيا." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['خليج غينيا', 'المحيط الأطلسي'],
    celebrities: [
      { name: "Dieudonné Gnammankou", nameAr: "ديدوني غنامانكو", profession: "مؤرخ", knownFor: "مؤرخ بنيني." },
    ],
    previousLeaders: [
      { name: "Mathieu Kérékou", nameAr: "ماثيو كيريكو", title: "الرئيس", from: "1972", to: "1991" },
      { name: "Nicéphore Soglo", nameAr: "نيسفور سوغلو", title: "الرئيس", from: "1991", to: "1996" },
      { name: "Thomas Boni Yayi", nameAr: "توماس بوني يايي", title: "الرئيس", from: "2006", to: "2016" },
      { name: "Patrice Talon", nameAr: "باتريس تالون", title: "الرئيس", from: "2016", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  bw: {
    landmarkDetails: [
      { name: "Okavango Delta", nameAr: "دلتا أوكافانغو", type: "منطقة طبيعية", description: "أكبر دلتا داخلية في العالم." },
      { name: "Chobe Park", nameAr: "حديقة تشوبي", type: "محمية", description: "أكبر تجمع للأفيال في أفريقيا." },
      { name: "Kalahari Desert", nameAr: "صحراء كالاهاري", type: "صحراء", description: "صحراء شاسعة." },
    ],
    riverDetails: [
      { name: "Okavango River", nameAr: "نهر أوكافانغو", length: "1,600 كم", description: "النهر الرئيسي في بوتسوانا." },
    ],
    lakeDetails: [],
    borderingSeas: [],
    celebrities: [
      { name: "Seretse Khama", nameAr: "سيريتسي خاما", profession: "سياسي", knownFor: "أول رئيس لبوتسوانا." },
    ],
    previousLeaders: [
      { name: "Seretse Khama", nameAr: "سيريتسي خاما", title: "الرئيس", from: "1966", to: "1980" },
      { name: "Quett Masire", nameAr: "كويت ماسيري", title: "الرئيس", from: "1980", to: "1998" },
      { name: "Festus Mogae", nameAr: "فيستوس موغاي", title: "الرئيس", from: "1998", to: "2008" },
      { name: "Ian Khama", nameAr: "إيان خاما", title: "الرئيس", from: "2008", to: "2018" },
      { name: "Mokgweetsi Masisi", nameAr: "موكغويتسي ماسيسي", title: "الرئيس", from: "2018", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  cf: {
    landmarkDetails: [
      { name: "Boali Falls", nameAr: "شلالات بوال", type: "شلال", description: "شلالات جميلة." },
      { name: "Dzanga Sangha Reserve", nameAr: "محمية دزانغا سانغا", type: "محمية", description: "محمية طبيعية للغوريلا." },
    ],
    riverDetails: [
      { name: "Ubangi River", nameAr: "نهر أوبانغي", length: "1,060 كم", description: "النهر الرئيسي في جمهورية أفريقيا الوسطى." },
    ],
    lakeDetails: [],
    borderingSeas: [],
    celebrities: [],
    previousLeaders: [
      { name: "Jean-Bédel Bokassa", nameAr: "جان بيديل بوكاسا", title: "الإمبراطور", from: "1966", to: "1979" },
      { name: "André Kolingba", nameAr: "أندريه كولينغبا", title: "الرئيس", from: "1981", to: "1993" },
      { name: "Ange-Félix Patassé", nameAr: "أنجي فيليكس باتاسي", title: "الرئيس", from: "1993", to: "2003" },
      { name: "François Bozizé", nameAr: "فرانسوا بوزيزيه", title: "الرئيس", from: "2003", to: "2013" },
      { name: "Faustin-Archange Touadéra", nameAr: "فوستين أرشنج تواديرا", title: "الرئيس", from: "2016", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  cg: {
    landmarkDetails: [
      { name: "Nouabalé-Ndoki Park", nameAr: "حديقة نوبالي-ندوكي", type: "محمية", description: "غابة استوائية بكر." },
      { name: "Congo River Rapids", nameAr: "منحدرات نهر الكونغو", type: "منطقة طبيعية", description: "منحدرات مائية قوية." },
      { name: "Basilica of Sainte-Anne", nameAr: "كاتدرائية سانت آن", type: "كنيسة", description: "كنيسة جميلة في برازافيل." },
    ],
    riverDetails: [
      { name: "Congo River", nameAr: "نهر الكونغو", length: "4,700 كم", description: "ثاني أطول نهر في أفريقيا." },
    ],
    lakeDetails: [],
    borderingSeas: ['المحيط الأطلسي'],
    celebrities: [],
    previousLeaders: [
      { name: "Denis Sassou-Nguesso", nameAr: "ديني ساسو نغيسو", title: "الرئيس", from: "1979", to: "1992" },
      { name: "Pascal Lissouba", nameAr: "باسكال ليسوبا", title: "الرئيس", from: "1992", to: "1997" },
      { name: "Denis Sassou-Nguesso", nameAr: "ديني ساسو نغيسو", title: "الرئيس", from: "1997", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  ga: {
    landmarkDetails: [
      { name: "Loango Park", nameAr: "حديقة لوانغو", type: "محمية", description: "محمية طبيعية مشهورة." },
      { name: "Pointe Denis", nameAr: "بوينت دينيس", type: "شاطئ", description: "منتجع شاطئي." },
      { name: "Lopé National Park", nameAr: "حديقة لوبي الوطنية", type: "محمية", description: "موقع تراث عالمي." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['المحيط الأطلسي', 'خليج غينيا'],
    celebrities: [
      { name: "Omar Bongo", nameAr: "عمر بونغو", profession: "سياسي", knownFor: "أطول رئيس أفريقي حكماً." },
    ],
    previousLeaders: [
      { name: "Léon M'ba", nameAr: "ليون إمبا", title: "الرئيس", from: "1960", to: "1967" },
      { name: "Omar Bongo", nameAr: "عمر بونغو", title: "الرئيس", from: "1967", to: "2009" },
      { name: "Ali Bongo Ondimba", nameAr: "علي بونغو أونديمبا", title: "الرئيس", from: "2009", to: "حتى الآن" },
    ],
    leaderChildren: ['علي بونغو', 'باسكالين بونغو'],
  },
  gn: {
    landmarkDetails: [
      { name: "Mount Nimba Reserve", nameAr: "محمية جبل نيمبا", type: "محمية", description: "موقع تراث عالمي." },
      { name: "Fouta Djallon", nameAr: "فوتا جالون", type: "منطقة طبيعية", description: "مرتفعات خلابة." },
      { name: "Conakry Grand Mosque", nameAr: "مسجد كوناكري الكبير", type: "مسجد", description: "أكبر مسجد في غينيا." },
    ],
    riverDetails: [
      { name: "Niger River", nameAr: "نهر النيجر", length: "4,180 كم", description: "ينبع من غينيا." },
    ],
    lakeDetails: [],
    borderingSeas: ['المحيط الأطلسي'],
    celebrities: [
      { name: "Sékou Touré", nameAr: "سيكو توري", profession: "سياسي", knownFor: "أول رئيس لغينيا." },
      { name: "Alpha Condé", nameAr: "ألفا كوندي", profession: "سياسي", knownFor: "الرئيس السابق لغينيا." },
    ],
    previousLeaders: [
      { name: "Sékou Touré", nameAr: "سيكو توري", title: "الرئيس", from: "1958", to: "1984" },
      { name: "Lansana Conté", nameAr: "لانسانا كونتي", title: "الرئيس", from: "1984", to: "2008" },
      { name: "Alpha Condé", nameAr: "ألفا كوندي", title: "الرئيس", from: "2010", to: "2021" },
      { name: "Mamady Doumbouya", nameAr: "مامادي دومبويا", title: "الرئيس", from: "2021", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  gw: {
    landmarkDetails: [
      { name: "Bissau Old Fortress", nameAr: "قلعة بيساو القديمة", type: "قلعة", description: "قلعة برتغالية." },
      { name: "Bijagós Islands", nameAr: "جزر بيجاغوس", type: "جزر", description: "أرخبيل جميل." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['المحيط الأطلسي'],
    celebrities: [
      { name: "Amílcar Cabral", nameAr: "أميلكار كابرال", profession: "قائد", knownFor: "زعيم الاستقلال." },
    ],
    previousLeaders: [
      { name: "João Bernardo Vieira", nameAr: "جواو برناردو فييرا", title: "الرئيس", from: "1980", to: "1984" },
      { name: "José Mário Vaz", nameAr: "جوزيه ماريو فاز", title: "الرئيس", from: "2014", to: "2019" },
      { name: "Umaro Sissoco Embaló", nameAr: "أومارو سيسوكو إمبالو", title: "الرئيس", from: "2020", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  ls: {
    landmarkDetails: [
      { name: "Maletsunyane Falls", nameAr: "شلالات ماليتسونيان", type: "شلال", description: "أحد أعلى الشلالات في أفريقيا." },
      { name: "Sani Pass", nameAr: "ممر ساني", type: "منطقة طبيعية", description: "ممر جبلي خلاب." },
      { name: "Thaba-Bosiu", nameAr: "تابا-بوسيو", type: "جبل", description: "جبل تاريخي." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Katse Dam", nameAr: "سد كاتسي", area: "29 كم²", description: "ثاني أكبر سد في أفريقيا." },
    ],
    borderingSeas: [],
    celebrities: [
      { name: "Moshoeshoe I", nameAr: "موشويشوي الأول", profession: "ملك", knownFor: "مؤسس مملكة ليسوتو." },
    ],
    previousLeaders: [
      { name: "Moshoeshoe II", nameAr: "موشويشوي الثاني", title: "الملك", from: "1966", to: "1990" },
      { name: "Letsie III", nameAr: "ليتسي الثالث", title: "الملك", from: "1995", to: "حتى الآن" },
      { name: "Pakalitha Mosisili", nameAr: "باكاليثا موسيسيلي", title: "رئيس الوزراء", from: "1998", to: "2012" },
    ],
    leaderChildren: [],
  },
  lr: {
    landmarkDetails: [
      { name: "Providence Island", nameAr: "جزيرة بروفيدنس", type: "جزيرة", description: "موقع وصول العبيد المحررين." },
      { name: "Sapo National Park", nameAr: "حديقة سابو الوطنية", type: "محمية", description: "أكبر محمية في ليبيريا." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['المحيط الأطلسي'],
    celebrities: [
      { name: "Ellen Johnson Sirleaf", nameAr: "إلين جونسون سيرليف", profession: "سياسية", knownFor: "أول رئيسة أفريقية." },
      { name: "George Weah", nameAr: "جورج ويا", profession: "لاعب كرة قدم", knownFor: "أفضل لاعب في العالم سابقاً." },
    ],
    previousLeaders: [
      { name: "William Tubman", nameAr: "ويليام توبمان", title: "الرئيس", from: "1944", to: "1971" },
      { name: "Samuel Doe", nameAr: "صامويل دو", title: "الرئيس", from: "1980", to: "1990" },
      { name: "Charles Taylor", nameAr: "تشارلز تايلور", title: "الرئيس", from: "1997", to: "2003" },
      { name: "Ellen Johnson Sirleaf", nameAr: "إلين جونسون سيرليف", title: "الرئيسة", from: "2006", to: "2018" },
      { name: "George Weah", nameAr: "جورج ويا", title: "الرئيس", from: "2018", to: "2024" },
    ],
    leaderChildren: ['جورج ويا (تيموثي ويا)'],
  },
  mw: {
    landmarkDetails: [
      { name: "Lake Malawi", nameAr: "بحيرة ملاوي", type: "بحيرة", description: "بحيرة النجوم." },
      { name: "Mount Mulanje", nameAr: "جبل مولانجي", type: "جبل", description: "أعلى جبل في ملاوي." },
      { name: "Zomba Plateau", nameAr: "هضبة زومبا", type: "منطقة طبيعية", description: "هضبة جميلة." },
    ],
    riverDetails: [
      { name: "Shire River", nameAr: "نهر شاير", length: "402 كم", description: "النهر الوحيد الخارج من بحيرة ملاوي." },
    ],
    lakeDetails: [
      { name: "Lake Malawi", nameAr: "بحيرة ملاوي", area: "29,600 كم²", description: "ثالث أكبر بحيرة في أفريقيا." },
    ],
    borderingSeas: [],
    celebrities: [
      { name: "Hastings Banda", nameAr: "هاستينغز باندا", profession: "سياسي", knownFor: "أول رئيس لملاوي." },
    ],
    previousLeaders: [
      { name: "Hastings Banda", nameAr: "هاستينغز باندا", title: "الرئيس", from: "1966", to: "1994" },
      { name: "Bakili Muluzi", nameAr: "باكيلي مولوزي", title: "الرئيس", from: "1994", to: "2004" },
      { name: "Bingu wa Mutharika", nameAr: "بينغو وا موتاريكا", title: "الرئيس", from: "2004", to: "2012" },
      { name: "Lazarus Chakwera", nameAr: "لازاروس تشاكويرا", title: "الرئيس", from: "2020", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  ml: {
    landmarkDetails: [
      { name: "Djenné Mosque", nameAr: "مسجد جينيه", type: "مسجد", description: "أكبر مبنى طيني في العالم." },
      { name: "Timbuktu", nameAr: "تمبكتو", type: "مدينة قديمة", description: "مدينة العلم والعلماء." },
      { name: "Dogon Country", nameAr: "بلد الدوغون", type: "منطقة ثقافية", description: "ثقافة فريدة ومنازل صخرية." },
    ],
    riverDetails: [
      { name: "Niger River", nameAr: "نهر النيجر", length: "4,180 كم", description: "يمر عبر تمبكتو." },
    ],
    lakeDetails: [],
    borderingSeas: [],
    celebrities: [
      { name: "Mansa Musa", nameAr: "مانسا موسى", profession: "إمبراطور", knownFor: "أغنى رجل في التاريخ." },
      { name: "Amadou Toumani Touré", nameAr: "أمادو توماني توري", profession: "سياسي", knownFor: "الرئيس السابق." },
    ],
    previousLeaders: [
      { name: "Modibo Keita", nameAr: "موديبو كيتا", title: "الرئيس", from: "1960", to: "1968" },
      { name: "Moussa Traoré", nameAr: "موسى تراوري", title: "الرئيس", from: "1968", to: "1991" },
      { name: "Alpha Oumar Konaré", nameAr: "ألفا عمر كوناري", title: "الرئيس", from: "1992", to: "2002" },
      { name: "Amadou Toumani Touré", nameAr: "أمادو توماني توري", title: "الرئيس", from: "2002", to: "2012" },
      { name: "Assimi Goïta", nameAr: "أسيمي غويتا", title: "الرئيس", from: "2021", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  na: {
    landmarkDetails: [
      { name: "Sossusvlei Dunes", nameAr: "كثبان سوسوسفلي", type: "منطقة طبيعية", description: "أعلى الكثبان الرملية في العالم." },
      { name: "Fish River Canyon", nameAr: "وادي نهر السمك", type: "منطقة طبيعية", description: "ثاني أكبر وادي في العالم." },
      { name: "Etosha Pan", nameAr: "سهل إيتوشا", type: "محمية", description: "محمية طبيعية ضخمة." },
    ],
    riverDetails: [
      { name: "Fish River", nameAr: "نهر السمك", length: "650 كم", description: "أطول نهر داخلي في ناميبيا." },
    ],
    lakeDetails: [],
    borderingSeas: ['المحيط الأطلسي'],
    celebrities: [
      { name: "Sam Nujoma", nameAr: "سام نوجوما", profession: "سياسي", knownFor: "أول رئيس لناميبيا." },
    ],
    previousLeaders: [
      { name: "Sam Nujoma", nameAr: "سام نوجوما", title: "الرئيس", from: "1990", to: "2005" },
      { name: "Hifikepunye Pohamba", nameAr: "هيفيكيبوني بوهامبا", title: "الرئيس", from: "2005", to: "2015" },
      { name: "Hage Geingob", nameAr: "هاغي غينغوب", title: "الرئيس", from: "2015", to: "2024" },
      { name: "Nangolo Mbumba", nameAr: "نانغولو مبومبا", title: "الرئيس", from: "2024", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  ne: {
    landmarkDetails: [
      { name: "Aïr Mountains", nameAr: "جبال آير", type: "منطقة طبيعية", description: "جبال صحراوية خلابة." },
      { name: "W National Park", nameAr: "حديقة دبليو", type: "محمية", description: "محمية طبيعية." },
      { name: "Grand Mosque of Niamey", nameAr: "جامع نيامي الكبير", type: "مسجد", description: "أكبر مسجد في النيجر." },
    ],
    riverDetails: [
      { name: "Niger River", nameAr: "نهر النيجر", length: "4,180 كم", description: "يمر عبر النيجر." },
    ],
    lakeDetails: [],
    borderingSeas: [],
    celebrities: [
      { name: "Djibo Bakary", nameAr: "جيبو باكاري", profession: "سياسي", knownFor: "زعيم الاستقلال." },
    ],
    previousLeaders: [
      { name: "Hamani Diori", nameAr: "هاماني ديوري", title: "الرئيس", from: "1960", to: "1974" },
      { name: "Seyni Kountché", nameAr: "سيني كونتشي", title: "الرئيس", from: "1974", to: "1987" },
      { name: "Mahamadou Issoufou", nameAr: "محمد إيسوفو", title: "الرئيس", from: "2011", to: "2021" },
      { name: "Mohamed Bazoum", nameAr: "محمد بازوم", title: "الرئيس", from: "2021", to: "2023" },
      { name: "Abdourahamane Tchiani", nameAr: "عبد الرحمن تشياني", title: "الرئيس", from: "2023", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  sl: {
    landmarkDetails: [
      { name: "Bunce Island", nameAr: "جزيرة بانسي", type: "جزيرة", description: "قلعة تجارة العبيد." },
      { name: "Tacugama Sanctuary", nameAr: "محمية تاكوغاما", type: "محمية", description: "محمية الشمبانزي." },
      { name: "Freetown Peninsula", nameAr: "شبه جزيرة فريتاون", type: "منطقة ساحلية", description: "شواطئ جميلة." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['المحيط الأطلسي'],
    celebrities: [
      { name: "Siaka Stevens", nameAr: "سياكا ستيفنز", profession: "سياسي", knownFor: "الرئيس السابق." },
    ],
    previousLeaders: [
      { name: "Siaka Stevens", nameAr: "سياكا ستيفنز", title: "الرئيس", from: "1971", to: "1985" },
      { name: "Joseph Momoh", nameAr: "جوزيف موموه", title: "الرئيس", from: "1985", to: "1992" },
      { name: "Ahmad Tejan Kabbah", nameAr: "أحمد تجان كابا", title: "الرئيس", from: "1996", to: "2007" },
      { name: "Ernest Bai Koroma", nameAr: "إرنست باي كوروما", title: "الرئيس", from: "2007", to: "2018" },
      { name: "Julius Maada Bio", nameAr: "جوليوس مادا بيو", title: "الرئيس", from: "2018", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  tg: {
    landmarkDetails: [
      { name: "Koutammakou", nameAr: "كوتاماكو", type: "منطقة ثقافية", description: "منازل الطين التقليدية." },
      { name: "Lomé Cathedral", nameAr: "كاتدرائية لومي", type: "كاتدرائية", description: "كاتدرائية كولونيالية." },
      { name: "Lake Togo", nameAr: "بحيرة توغو", type: "بحيرة", description: "بحيرة جميلة." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Lake Togo", nameAr: "بحيرة توغو", area: "64 كم²", description: "أكبر بحيرة في توغو." },
    ],
    borderingSeas: ['خليج غينيا', 'المحيط الأطلسي'],
    celebrities: [],
    previousLeaders: [
      { name: "Gnassingbé Eyadéma", nameAr: "ناسينغبي إياديما", title: "الرئيس", from: "1967", to: "2005" },
      { name: "Faure Gnassingbé", nameAr: "فور ناسينغبي", title: "الرئيس", from: "2005", to: "حتى الآن" },
    ],
    leaderChildren: ['فور ناسينغبي'],
  },
  er: {
    landmarkDetails: [
      { name: "Asmara", nameAr: "أسمرة", type: "مدينة", description: "روما أفريقيا - مدينة حديثة." },
      { name: "Dahlak Archipelago", nameAr: "أرخبيل دهلك", type: "جزر", description: "جزر جميلة في البحر الأحمر." },
      { name: "Qohaito", nameAr: "قهوتو", type: "موقع أثري", description: "مدينة قديمة." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['البحر الأحمر'],
    celebrities: [
      { name: "Isaias Afwerki", nameAr: "أسياس أفورقي", profession: "سياسي", knownFor: "أول رئيس لإريتريا." },
    ],
    previousLeaders: [
      { name: "Isaias Afwerki", nameAr: "أسياس أفورقي", title: "الرئيس", from: "1993", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  ss: {
    landmarkDetails: [
      { name: "Sudd Wetlands", nameAr: "مستنقعات السد", type: "منطقة طبيعية", description: "أكبر مستنقع في أفريقيا." },
      { name: "Nimule Park", nameAr: "حديقة نيمولي", type: "محمية", description: "محمية طبيعية." },
      { name: "Juba Bridge", nameAr: "جسر جوبا", type: "جسر", description: "جسر رئيسي على النيل." },
    ],
    riverDetails: [
      { name: "White Nile", nameAr: "النيل الأبيض", length: "3,700 كم", description: "يمر عبر جوبا." },
    ],
    lakeDetails: [],
    borderingSeas: [],
    celebrities: [
      { name: "John Garang", nameAr: "جون قرنق", profession: "قائد", knownFor: "زعيم حركة التحرير." },
    ],
    previousLeaders: [
      { name: "Salva Kiir Mayardit", nameAr: "سلفا كير ميارديت", title: "الرئيس", from: "2011", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  ht: {
    landmarkDetails: [
      { name: "Citadelle Laferrière", nameAr: "قلعة لا فيريير", type: "قلعة", description: "أكبر قلعة في الأمريكتين." },
      { name: "Sans-Souci Palace", nameAr: "قصر سان سوسي", type: "قصر", description: "قصر ملكي مدمر." },
      { name: "Île-à-Vache", nameAr: "جزيرة إيل-آ-فاش", type: "جزيرة", description: "جزيرة سياحية." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['البحر الكاريبي', 'المحيط الأطلسي'],
    celebrities: [
      { name: "Toussaint Louverture", nameAr: "توسان لوفيرتير", profession: "قائد", knownFor: "بطل الاستقلال." },
      { name: "Jean-Jacques Dessalines", nameAr: "جان جاك ديسالين", profession: "إمبراطور", knownFor: "مؤسس هايتي." },
    ],
    previousLeaders: [
      { name: "François Duvalier", nameAr: "فرانسوا دوفالييه", title: "الرئيس", from: "1957", to: "1971" },
      { name: "Jean-Claude Duvalier", nameAr: "جان كلود دوفالييه", title: "الرئيس", from: "1971", to: "1986" },
      { name: "Jean-Bertrand Aristide", nameAr: "جان برتران أريستيد", title: "الرئيس", from: "1991", to: "1996" },
      { name: "Michel Martelly", nameAr: "ميشيل مارتيلي", title: "الرئيس", from: "2011", to: "2016" },
    ],
    leaderChildren: [],
  },
  jm: {
    landmarkDetails: [
      { name: "Dunn's River Falls", nameAr: "شلالات دن", type: "شلال", description: "شلالات سياحية شهيرة." },
      { name: "Bob Marley Museum", nameAr: "متحف بوب مارلي", type: "متحف", description: "منزل أسطورة الريغي." },
      { name: "Seven Mile Beach", nameAr: "شاطئ السبعة أميال", type: "شاطئ", description: "أشهر شاطئ في جامايكا." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['البحر الكاريبي'],
    celebrities: [
      { name: "Bob Marley", nameAr: "بوب مارلي", profession: "مطرب", knownFor: "أسطورة موسيقى الريغي." },
      { name: "Usain Bolt", nameAr: "يوسين بولت", profession: "عداء", knownFor: "أسرع رجل في العالم." },
      { name: "Jimmy Cliff", nameAr: "جيمي كليف", profession: "مطرب", knownFor: "موسيقي ريغي." },
    ],
    previousLeaders: [
      { name: "Norman Manley", nameAr: "نورمان مانلي", title: "رئيس الوزراء", from: "1955", to: "1962" },
      { name: "Michael Manley", nameAr: "مايكل مانلي", title: "رئيس الوزراء", from: "1972", to: "1980" },
      { name: "Edward Seaga", nameAr: "إدوارد سياغا", title: "رئيس الوزراء", from: "1980", to: "1989" },
      { name: "P.J. Patterson", nameAr: "بي جي باترسون", title: "رئيس الوزراء", from: "1992", to: "2006" },
      { name: "Portia Simpson-Miller", nameAr: "بورتيا سيمبسون-ميلر", title: "رئيسة الوزراء", from: "2006", to: "2007" },
    ],
    leaderChildren: [],
  },
  hn: {
    landmarkDetails: [
      { name: "Copán Ruins", nameAr: "أطلال كوبان", type: "موقع أثري", description: "مدينة المايا القديمة." },
      { name: "Bay Islands", nameAr: "جزر الخليج", type: "جزر", description: "جزر استوائية للغوص." },
      { name: "La Tigra Park", nameAr: "حديقة لا تيغرا", type: "محمية", description: "غابة سحابية." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Lake Yojoa", nameAr: "بحيرة يوهوا", area: "79 كم²", description: "أكبر بحيرة في هندوراس." },
    ],
    borderingSeas: ['البحر الكاريبي', 'المحيط الهادئ'],
    celebrities: [
      { name: "Francisco Morazán", nameAr: "فرانسيسكو مورازان", profession: "قائد", knownFor: "بطل أمريكا الوسطى." },
    ],
    previousLeaders: [
      { name: "Manuel Zelaya", nameAr: "مانويل زيلايا", title: "الرئيس", from: "2006", to: "2009" },
      { name: "Porfirio Lobo Sosa", nameAr: "بورفيريو لوبو سوسا", title: "الرئيس", from: "2010", to: "2014" },
      { name: "Juan Orlando Hernández", nameAr: "خوان أورلاندو هيرنانديز", title: "الرئيس", from: "2014", to: "2022" },
      { name: "Xiomara Castro", nameAr: "شيومارا كاسترو", title: "الرئيسة", from: "2022", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  ni: {
    landmarkDetails: [
      { name: "Granada", nameAr: "غرناطة", type: "مدينة", description: "أقدم مدينة استعمارية." },
      { name: "Lake Nicaragua", nameAr: "بحيرة نيكاراغوا", type: "بحيرة", description: "أكبر بحيرة في أمريكا الوسطى." },
      { name: "Masaya Volcano", nameAr: "بركان ماسايا", type: "بركان", description: "بركان نشط." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Lake Nicaragua", nameAr: "بحيرة نيكاراغوا", area: "8,264 كم²", description: "أكبر بحيرة في أمريكا الوسطى." },
    ],
    borderingSeas: ['البحر الكاريبي', 'المحيط الهادئ'],
    celebrities: [
      { name: "Rubén Darío", nameAr: "روبين دارييو", profession: "شاعر", knownFor: "أعظم شاعر في اللغة الإسبانية." },
      { name: "Daniel Ortega", nameAr: "دانيال أورتيغا", profession: "سياسي", knownFor: "الرئيس الحالي." },
    ],
    previousLeaders: [
      { name: "José Santos Zelaya", nameAr: "خوسيه سانتوس زيلايا", title: "الرئيس", from: "1893", to: "1909" },
      { name: "Anastasio Somoza", nameAr: "أناستاسيو سوموزا", title: "الرئيس", from: "1937", to: "1947" },
      { name: "Daniel Ortega", nameAr: "دانيال أورتيغا", title: "الرئيس", from: "1985", to: "1990" },
      { name: "Daniel Ortega", nameAr: "دانيال أورتيغا", title: "الرئيس", from: "2007", to: "حتى الآن" },
    ],
    leaderChildren: ['دانيال أورتيغا (كاميلا، لوتشو)'],
  },
  py: {
    landmarkDetails: [
      { name: "Itaipu Dam", nameAr: "سد إيتايبو", type: "سد", description: "أكبر سد في العالم." },
      { name: "Iguazu Falls", nameAr: "شلالات إجوازو", type: "شلال", description: "شلالات رائعة." },
      { name: "Encarnación", nameAr: "إينكارناسيون", type: "مدينة", description: "مدينة تاريخية." },
    ],
    riverDetails: [
      { name: "Paraguay River", nameAr: "نهر باراغواي", length: "2,549 كم", description: "النهر الرئيسي في باراغواي." },
    ],
    lakeDetails: [
      { name: "Lake Ypacaraí", nameAr: "بحيرة إيباكاراي", area: "60 كم²", description: "بحيرة جميلة." },
    ],
    borderingSeas: [],
    celebrities: [
      { name: "Alfredo Stroessner", nameAr: "ألفريدو ستروسنر", profession: "سياسي", knownFor: "أطول رئيس حكماً." },
      { name: "Agustín Barboza", nameAr: "أغوستين باربوزا", profession: "مطرب", knownFor: "مطرب باراغواياني." },
    ],
    previousLeaders: [
      { name: "José Gaspar Rodríguez de Francia", nameAr: "خوسيه غاسبار رودريغيز دي فرانسيا", title: "الرئيس", from: "1814", to: "1840" },
      { name: "Alfredo Stroessner", nameAr: "ألفريدو ستروسنر", title: "الرئيس", from: "1954", to: "1989" },
      { name: "Fernando Lugo", nameAr: "فيرناندو لوغو", title: "الرئيس", from: "2008", to: "2012" },
      { name: "Santiago Peña", nameAr: "سانتياغو بينيا", title: "الرئيس", from: "2023", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  bt: {
    landmarkDetails: [
      { name: "Tiger's Nest Monastery", nameAr: "دير عش النمر", type: "دير", description: "أشهر معلم في بوتان." },
      { name: "Punakha Dzong", nameAr: "بوناخا دزونغ", type: "قلعة", description: "أجمل دير-قلعة." },
      { name: "Buddha Dordenma", nameAr: "بوذا دوردينما", type: "تمثال", description: "تمثال بوذا العملاق." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: [],
    celebrities: [
      { name: "Jigme Singye Wangchuck", nameAr: "جيغمي سينغي وانغشوك", profession: "ملك", knownFor: "الملك الرابع لبوتان." },
    ],
    previousLeaders: [
      { name: "Jigme Dorji Wangchuck", nameAr: "جيغمي دورجي وانغشوك", title: "الملك", from: "1952", to: "1972" },
      { name: "Jigme Singye Wangchuck", nameAr: "جيغمي سينغي وانغشوك", title: "الملك", from: "1972", to: "2006" },
      { name: "Jigme Khesar Namgyel Wangchuck", nameAr: "جيغمي خيسار نامغيال وانغشوك", title: "الملك", from: "2006", to: "حتى الآن" },
    ],
    leaderChildren: ['الملك جيغمي (الأمير جيغمي نامغيال)'],
  },
  la: {
    landmarkDetails: [
      { name: "Luang Prabang", nameAr: "لوانغ برابانغ", type: "مدينة", description: "موقع تراث عالمي." },
      { name: "That Luang Stupa", nameAr: "ستوبا ذات لوانغ", type: "معبد", description: "المعبد الوطني." },
      { name: "Kuang Si Falls", nameAr: "شلالات كوانغ سي", type: "شلال", description: "شلالات جميلة." },
    ],
    riverDetails: [
      { name: "Mekong River", nameAr: "نهر ميكونغ", length: "4,350 كم", description: "أهم نهر في لاوس." },
    ],
    lakeDetails: [],
    borderingSeas: [],
    celebrities: [],
    previousLeaders: [
      { name: "Souphanouvong", nameAr: "سوفانوفونغ", title: "الرئيس", from: "1975", to: "1991" },
      { name: "Kaysone Phomvihane", nameAr: "كايسون فومفيهان", title: "الأمين العام", from: "1975", to: "1992" },
      { name: "Thongloun Sisoulith", nameAr: "ثونغلون سيسوليث", title: "الأمين العام", from: "2021", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  bn: {
    landmarkDetails: [
      { name: "Sultan Omar Ali Saifuddin Mosque", nameAr: "مسجد سلطان عمر علي سيف الدين", type: "مسجد", description: "أجمل مسجد في بروناي." },
      { name: "Jame' Asr Hassanil Bolkiah Mosque", nameAr: "مسجد جامع عصر حسن البلقية", type: "مسجد", description: "أكبر مسجد في بروناي." },
      { name: "Ulu Temburong Park", nameAr: "حديقة أولو تيمبورونغ", type: "محمية", description: "غابة استوائية." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['بحر الصين الجنوبي'],
    celebrities: [
      { name: "Sultan Hassanal Bolkiah", nameAr: "السلطان حسن البلقية", profession: "سلطان", knownFor: "أحد أغنى الملوك في العالم." },
    ],
    previousLeaders: [
      { name: "Sultan Hassanal Bolkiah", nameAr: "السلطان حسن البلقية", title: "السلطان", from: "1967", to: "حتى الآن" },
    ],
    leaderChildren: ['السلطان حسن (المهتدي بالله، الملك المتقي بالله، عبد العزيز)'],
  },
  tw: {
    landmarkDetails: [
      { name: "Taipei 101", nameAr: "برج تايبيه", type: "برج", description: "ناطحة سحاب أيقونية في تايبيه، كانت أطول مبنى في العالم." },
      { name: "Sun Moon Lake", nameAr: "بحيرة الشمس والقمر", type: "بحيرة", description: "أجمل بحيرة في تايوان، وجهة سياحية شهيرة." },
      { name: "National Palace Museum", nameAr: "المتحف الوطني", type: "متحف", description: "متحف يضم مجموعة ضخمة من التحف الصينية القديمة." },
    ],
    riverDetails: [
      { name: "Tamsui River", nameAr: "نهر تامسوي", length: "158 كم", description: "نهر رئيسي في شمال تايوان." },
    ],
    lakeDetails: [
      { name: "Sun Moon Lake", nameAr: "بحيرة الشمس والقمر", area: "7.9 كم²", description: "أكبر بحيرة في تايوان، مقصد سياحي رئيسي." },
    ],
    borderingSeas: ['بحر الصين الشرقي', 'بحر الصين الجنوبي', 'المحيط الهادئ'],
    celebrities: [
      { name: "Ang Lee", nameAr: "أنج لي", profession: "مخرج سينمائي", knownFor: "مخرج حائز على جائزة الأوسكار، أخرج فيلم حياة باي." },
    ],
    previousLeaders: [
      { name: "Lee Teng-hui", nameAr: "لي تنغ هوي", title: "رئيس", from: "1988", to: "2000" },
      { name: "Chen Shui-bian", nameAr: "تشين شوي بيان", title: "رئيس", from: "2000", to: "2008" },
      { name: "Ma Ying-jeou", nameAr: "ما يينغ جيو", title: "رئيس", from: "2008", to: "2016" },
      { name: "Tsai Ing-wen", nameAr: "تساي إنغ ون", title: "رئيس", from: "2016", to: "2024" },
      { name: "Lai Ching-te", nameAr: "لاي تشينغ دي", title: "رئيس", from: "2024", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  li: {
    landmarkDetails: [
      { name: "Vaduz Castle", nameAr: "قلعة فادوز", type: "قلعة", description: "القلعة الرسمية لأمير ليختنشتاين وتطل على العاصمة." },
      { name: "Gutenberg Castle", nameAr: "قلعة غوتنبرغ", type: "قلعة", description: "قلعة تاريخية في بلدة بالزرس." },
    ],
    riverDetails: [
      { name: "Rhine River", nameAr: "نهر الراين", length: "375 كم", description: "أحد أطول أنهار أوروبا، يمر عبر ليختنشتاين." },
    ],
    lakeDetails: [],
    borderingSeas: [],
    celebrities: [],
    previousLeaders: [
      { name: "Franz Joseph II", nameAr: "فرانز جوزيف الثاني", title: "أمير", from: "1938", to: "1989" },
      { name: "Hans-Adam II", nameAr: "هانز آدم الثاني", title: "أمير", from: "1989", to: "حتى الآن" },
    ],
    leaderChildren: ['ولي العهد ألويس'],
  },
  mc: {
    landmarkDetails: [
      { name: "Monte Carlo Casino", nameAr: "كازينو مونت كارلو", type: "كازينو", description: "أشهر كازينو في العالم، معلم سياحي في موناكو." },
      { name: "Prince's Palace", nameAr: "القصر الأميري", type: "قصر", description: "المقر الرسمي لأمير موناكو." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['البحر الأبيض المتوسط'],
    celebrities: [
      { name: "Grace Kelly", nameAr: "غريس كيلي", profession: "ممثلة", knownFor: "ممثلة أمريكية أصبحت أميرة موناكو." },
      { name: "Prince Rainier III", nameAr: "الأمير رينيه الثالث", profession: "أمير", knownFor: "حكم موناكو لمدة 56 عاماً." },
    ],
    previousLeaders: [
      { name: "Prince Rainier III", nameAr: "الأمير رينيه الثالث", title: "أمير", from: "1949", to: "2005" },
      { name: "Prince Albert II", nameAr: "الأمير ألبير الثاني", title: "أمير", from: "2005", to: "حتى الآن" },
    ],
    leaderChildren: ['الأميرة كارولين', 'الأمير ألبير'],
  },
  ad: {
    landmarkDetails: [
      { name: "Madriu Valley", nameAr: "وادي مادريو", type: "وادي", description: "موقع تراث عالمي لليونسكو، يتميز بجمال طبيعي خلاب." },
      { name: "Casa de la Vall", nameAr: "كازا دي لا فال", type: "مبنى تاريخي", description: "مقر البرلمان الأندوري القديم." },
    ],
    riverDetails: [
      { name: "Valira River", nameAr: "نهر فاليرا", length: "44 كم", description: "أطول نهر في أندورا." },
    ],
    lakeDetails: [],
    borderingSeas: [],
    celebrities: [],
    previousLeaders: [
      { name: "Joan Enric Vives", nameAr: "جوان إنريك فيفس", title: "الأمير الأسقفي", from: "2003", to: "حتى الآن" },
      { name: "Emmanuel Macron", nameAr: "إيمانويل ماكرون", title: "الأمير الفرنسي", from: "2017", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  sm: {
    landmarkDetails: [
      { name: "Guaita Tower", nameAr: "برج غوايتا", type: "برج", description: "أقدم وأشهر أبراج سان مارينو." },
      { name: "Palazzo Pubblico", nameAr: "القصر العام", type: "قصر", description: "مقر الحكومة الرسمي في سان مارينو." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: [],
    celebrities: [],
    previousLeaders: [
      { name: "Captains Regent", nameAr: "القبطان الحاكمان", title: "رئيس الدولة", from: "6 أشهر", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  va: {
    landmarkDetails: [
      { name: "St. Peter's Basilica", nameAr: "كاتدرائية القديس بطرس", type: "كاتدرائية", description: "أكبر كنيسة في العالم، قلب الفاتيكان." },
      { name: "Sistine Chapel", nameAr: "كنيسة سيستين", type: "كنيسة", description: "تشتهر بلوحات مايكل أنجلو على سقفها." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: [],
    celebrities: [
      { name: "Pope Francis", nameAr: "البابا فرنسيس", profession: "بابا", knownFor: "بابا الكنيسة الكاثوليكية، شخصية دينية عالمية." },
    ],
    previousLeaders: [
      { name: "Pope John Paul II", nameAr: "البابا يوحنا بولس الثاني", title: "بابا", from: "1978", to: "2005" },
      { name: "Pope Benedict XVI", nameAr: "البابا بنديكت السادس عشر", title: "بابا", from: "2005", to: "2013" },
      { name: "Pope Francis", nameAr: "البابا فرنسيس", title: "بابا", from: "2013", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  sc: {
    landmarkDetails: [
      { name: "Vallée de Mai", nameAr: "وادي مي", type: "محمية", description: "موقع تراث عالمي، موطن نخيل جوز الهند الفريد." },
      { name: "Anse Lazio", nameAr: "شاطئ أنس لازيو", type: "شاطئ", description: "أجمل شاطئ في سيشل." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['المحيط الهندي'],
    celebrities: [],
    previousLeaders: [
      { name: "James Michel", nameAr: "جيمس ميشيل", title: "رئيس", from: "2004", to: "2016" },
      { name: "Danny Faure", nameAr: "داني فور", title: "رئيس", from: "2016", to: "2020" },
      { name: "Wavel Ramkalawan", nameAr: "وافيل رامكالاوان", title: "رئيس", from: "2020", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  mu: {
    landmarkDetails: [
      { name: "Seven Colored Earths", nameAr: "الأرض ذات الألوان السبعة", type: "موقع طبيعي", description: "ظاهرة جيولوجية فريدة من سبعة ألوان في شاماريل." },
      { name: "Port Louis", nameAr: "بورت لويس", type: "مدينة", description: "عاصمة موريشيوس وأكبر مدنها." },
    ],
    riverDetails: [
      { name: "Grand River South East", nameAr: "النهر الكبير الجنوبي الشرقي", length: "34 كم", description: "أطول نهر في موريشيوس." },
    ],
    lakeDetails: [],
    borderingSeas: ['المحيط الهندي'],
    celebrities: [],
    previousLeaders: [
      { name: "Sir Seewoosagur Ramgoolam", nameAr: "سير سيووساغور رامغولام", title: "رئيس الوزراء", from: "1968", to: "1982" },
      { name: "Anerood Jugnauth", nameAr: "أنيرود جوجنوث", title: "رئيس الوزراء", from: "1982", to: "1995" },
      { name: "Navin Ramgoolam", nameAr: "نافين رامغولام", title: "رئيس الوزراء", from: "1995", to: "2000" },
      { name: "Paul Bérenger", nameAr: "بول بيرنجر", title: "رئيس الوزراء", from: "2003", to: "2005" },
      { name: "Pravind Jugnauth", nameAr: "برافيند جوجنوث", title: "رئيس الوزراء", from: "2017", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  cv: {
    landmarkDetails: [
      { name: "Mount Fogo", nameAr: "جبل فوغو", type: "بركان", description: "أعلى قمة في الرأس الأخضر، بركان نشط." },
      { name: "Sal Island", nameAr: "جزيرة سال", type: "جزيرة", description: "أشهر وجهة سياحية في الرأس الأخضر." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['المحيط الأطلسي'],
    celebrities: [
      { name: "Cesária Évora", nameAr: "سيزاريا إيفورا", profession: "مطربة", knownFor: "مطربة رأس أخضرية شهيرة، حائزة على جائزة غرامي." },
    ],
    previousLeaders: [
      { name: "Pedro Pires", nameAr: "بيدرو بيريس", title: "رئيس", from: "2001", to: "2011" },
      { name: "Jorge Carlos Fonseca", nameAr: "خورخي كارلوس فونسيكا", title: "رئيس", from: "2011", to: "2021" },
      { name: "José Maria Neves", nameAr: "جوزيه ماريا نيفيز", title: "رئيس", from: "2021", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  bs: {
    landmarkDetails: [
      { name: "Atlantis Paradise Island", nameAr: "أتلانتس", type: "منتجع", description: "منتجع وفندق فخم في جزر البهاما." },
      { name: "Pig Beach", nameAr: "شاطئ الخنازير", type: "شاطئ", description: "شاطئ شهير تسبح فيه خنازير برية." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['المحيط الأطلسي', 'البحر الكاريبي'],
    celebrities: [
      { name: "Sidney Poitier", nameAr: "سيدني بواتييه", profession: "ممثل", knownFor: "أول ممثل أمريكي من أصل أفريقي يفوز بجائزة الأوسكار." },
    ],
    previousLeaders: [
      { name: "Sir Lynden Pindling", nameAr: "سير ليندن بيندلينغ", title: "رئيس الوزراء", from: "1973", to: "1992" },
      { name: "Hubert Minnis", nameAr: "هوبيرت مينيس", title: "رئيس الوزراء", from: "2017", to: "2021" },
      { name: "Philip Davis", nameAr: "فيليب ديفيس", title: "رئيس الوزراء", from: "2021", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  bb: {
    landmarkDetails: [
      { name: "Harrison's Cave", nameAr: "كهف هاريسون", type: "كهف", description: "كهف جيري جميل في بربادوس." },
      { name: "Carlisle Bay", nameAr: "خليج كارلايل", type: "خليج", description: "خليج جميل تشتهر بشواطئه." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['المحيط الأطلسي', 'البحر الكاريبي'],
    celebrities: [
      { name: "Rihanna", nameAr: "ريانا", profession: "مطربة", knownFor: "مغنية ورائدة أعمال باربادوسية عالمية." },
      { name: "Sir Garfield Sobers", nameAr: "سير غارفيلد سوبرز", profession: "لاعب كريكيت", knownFor: "أسطورة الكريكيت في العالم." },
    ],
    previousLeaders: [
      { name: "Errol Barrow", nameAr: "إيرول بارو", title: "رئيس الوزراء", from: "1966", to: "1976" },
      { name: "Tom Adams", nameAr: "توم آدامز", title: "رئيس الوزراء", from: "1976", to: "1985" },
      { name: "Freundel Stuart", nameAr: "فروندل ستيوارت", title: "رئيس الوزراء", from: "2010", to: "2018" },
      { name: "Mia Mottley", nameAr: "ميا موتلي", title: "رئيس الوزراء", from: "2018", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  bz: {
    landmarkDetails: [
      { name: "Great Blue Hole", nameAr: "الحفرة الزرقاء العظيمة", type: "حفرة بحرية", description: "حفرة بحرية عملاقة قرب بليز، وجهة غوص عالمية." },
      { name: "Belize Barrier Reef", nameAr: "حاجز بليز المرجاني", type: "شعاب مرجانية", description: "ثاني أكبر حاجز مرجاني في العالم." },
    ],
    riverDetails: [
      { name: "Belize River", nameAr: "نهر بليز", length: "290 كم", description: "أطول نهر في بليز." },
    ],
    lakeDetails: [],
    borderingSeas: ['البحر الكاريبي'],
    celebrities: [],
    previousLeaders: [
      { name: "George Price", nameAr: "جورج برايس", title: "رئيس الوزراء", from: "1981", to: "1984" },
      { name: "Dean Barrow", nameAr: "دين بارو", title: "رئيس الوزراء", from: "2008", to: "2020" },
      { name: "Johnny Briceño", nameAr: "جوني بريسينيو", title: "رئيس الوزراء", from: "2020", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  sr: {
    landmarkDetails: [
      { name: "Brownsberg Park", nameAr: "حديقة براونزبرغ", type: "حديقة", description: "محمية طبيعية على هضبة براونزبرغ." },
      { name: "Paramaribo", nameAr: "باراماريبو", type: "مدينة", description: "عاصمة سورينام، موقع تراث عالمي." },
    ],
    riverDetails: [
      { name: "Suriname River", nameAr: "نهر سورينام", length: "480 كم", description: "أهم نهر في سورينام." },
    ],
    lakeDetails: [
      { name: "Brokopondo Reservoir", nameAr: "بحيرة بروكوبوندو", area: "1,560 كم²", description: "أكبر بحيرة اصطناعية في سورينام." },
    ],
    borderingSeas: ['المحيط الأطلسي'],
    celebrities: [],
    previousLeaders: [
      { name: "Dési Bouterse", nameAr: "ديزي باوترسه", title: "رئيس", from: "2010", to: "2020" },
      { name: "Chan Santokhi", nameAr: "تشان سانتوكي", title: "رئيس", from: "2020", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  gy: {
    landmarkDetails: [
      { name: "Kaieteur Falls", nameAr: "شلالات كايتيور", type: "شلال", description: "واحدة من أقوى الشلالات في العالم." },
      { name: "St. George's Cathedral", nameAr: "كاتدرائية القديس جورج", type: "كاتدرائية", description: "واحدة من أطول الكنائس الخشبية في العالم." },
    ],
    riverDetails: [
      { name: "Essequibo River", nameAr: "نهر إيسيكويبو", length: "1,014 كم", description: "أطول نهر في غيانا." },
    ],
    lakeDetails: [],
    borderingSeas: ['المحيط الأطلسي'],
    celebrities: [],
    previousLeaders: [
      { name: "Cheddi Jagan", nameAr: "شيدي جاغان", title: "رئيس", from: "1992", to: "1997" },
      { name: "Bharrat Jagdeo", nameAr: "بهارات جاغديو", title: "رئيس", from: "1999", to: "2011" },
      { name: "David A. Granger", nameAr: "ديفيد غرانجر", title: "رئيس", from: "2015", to: "2020" },
      { name: "Irfaan Ali", nameAr: "عرفان علي", title: "رئيس", from: "2020", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  tl: {
    landmarkDetails: [
      { name: "Cristo Rei", nameAr: "تمثال المسيح الملك", type: "تمثال", description: "تمثال ضخم للمسيح يطل على ديلي." },
      { name: "Atauro Island", nameAr: "جزيرة أتاورو", type: "جزيرة", description: "جزيرة جميلة شمال ديلي." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['بحر تيمور'],
    celebrities: [],
    previousLeaders: [
      { name: "Xanana Gusmão", nameAr: "زانانا غوسماو", title: "رئيس", from: "2004", to: "2007" },
      { name: "José Ramos-Horta", nameAr: "جوزيه راموس هورتا", title: "رئيس", from: "2007", to: "2012" },
      { name: "Taur Matan Ruak", nameAr: "تاور ماتان رواك", title: "رئيس", from: "2012", to: "2017" },
      { name: "Francisco Guterres", nameAr: "فرانسيسكو غوتيريس", title: "رئيس", from: "2017", to: "2022" },
      { name: "José Ramos-Horta", nameAr: "جوزيه راموس هورتا", title: "رئيس", from: "2022", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  sb: {
    landmarkDetails: [
      { name: "Marovo Lagoon", nameAr: "بحيرة ماروفو", type: "بحيرة", description: "أكبر بحيرة مالحة في العالم." },
      { name: "Guadalcanal", nameAr: "غوادالكانال", type: "جزيرة", description: "أكبر جزيرة في جزر سليمان." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['المحيط الهادئ'],
    celebrities: [],
    previousLeaders: [
      { name: "Manasseh Sogavare", nameAr: "ماناسيه سوغافار", title: "رئيس الوزراء", from: "2000", to: "2001" },
      { name: "Gordon Darcy Lilo", nameAr: "غوردون دارسي ليلو", title: "رئيس الوزراء", from: "2011", to: "2014" },
      { name: "Manasseh Sogavare", nameAr: "ماناسيه سوغافار", title: "رئيس الوزراء", from: "2014", to: "2019" },
      { name: "Jeremiah Manele", nameAr: "جيرمياه مانيل", title: "رئيس الوزراء", from: "2024", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  vu: {
    landmarkDetails: [
      { name: "Mount Yasur", nameAr: "جبل ياسور", type: "بركان", description: "بركان نشط يمكن للسياح رؤيته عن قرب." },
      { name: "Champagne Beach", nameAr: "شاطئ الشمبانيا", type: "شاطئ", description: "أجمل شاطئ في فانواتو." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['المحيط الهادئ'],
    celebrities: [],
    previousLeaders: [
      { name: "Edward Natapei", nameAr: "إدوارد ناتابي", title: "رئيس الوزراء", from: "2001", to: "2004" },
      { name: "Charlot Salwai", nameAr: "تشارلوت سالواي", title: "رئيس الوزراء", from: "2016", to: "2020" },
      { name: "Bob Loughman", nameAr: "بوب لوفمان", title: "رئيس الوزراء", from: "2020", to: "2022" },
      { name: "Ishmael Kalsakau", nameAr: "إسماعيل كالساكاو", title: "رئيس الوزراء", from: "2022", to: "2023" },
      { name: "Charlot Salwai", nameAr: "تشارلوت سالواي", title: "رئيس الوزراء", from: "2023", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  ws: {
    landmarkDetails: [
      { name: "To Sua Ocean Trench", nameAr: "خندق تو سوا", type: "مسبح طبيعي", description: "مسبح طبيعي عميق محاط بالحدائق." },
      { name: "Lalomanu Beach", nameAr: "شاطئ لالومانو", type: "شاطئ", description: "أجمل شاطئ في ساموا." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['المحيط الهادئ'],
    celebrities: [
      { name: "Dwayne Johnson", nameAr: "دوين جونسون", profession: "ممثل", knownFor: "ممثل أمريكي-سامواني، نجم مصارعة وتمثيل عالمي." },
      { name: "Roman Reigns", nameAr: "رومان رينز", profession: "مصارع", knownFor: "مصارع محترف من أصل سامواني." },
    ],
    previousLeaders: [
      { name: "Tuilaepa Aiono Sailele Malielegaoi", nameAr: "تويليبا سايليلي ماليليغاوي", title: "رئيس الوزراء", from: "1998", to: "2021" },
      { name: "Naomi Mataʻafa", nameAr: "نعومي ماتافا", title: "رئيس الوزراء", from: "2021", to: "حتى الآن" },
    ],
    leaderChildren: [],
  },
  to: {
    landmarkDetails: [
      { name: "Ha'amonga 'a Maui", nameAr: "حجر هامونغا", type: "نصب أثري", description: "قوس حجري ضخم من القرن الثالث عشر." },
      { name: "Royal Palace", nameAr: "القصر الملكي", type: "قصر", description: "المقر الرسمي لملك تونغا." },
    ],
    riverDetails: [],
    lakeDetails: [],
    borderingSeas: ['المحيط الهادئ'],
    celebrities: [],
    previousLeaders: [
      { name: "King Tāufaʻāhau Tupou IV", nameAr: "الملك تاوفاهاو توبو الرابع", title: "ملك", from: "1965", to: "2006" },
      { name: "King George Tupou V", nameAr: "الملك جورج توبو الخامس", title: "ملك", from: "2006", to: "2012" },
      { name: "King Tupou VI", nameAr: "الملك توبو السادس", title: "ملك", from: "2012", to: "حتى الآن" },
    ],
    leaderChildren: ['الأميرة لافاكا'],
  },
  pw: {
    landmarkDetails: [
      { name: "Rock Islands", nameAr: "جزر روك", type: "جزر", description: "مجموعة جزر مرجانية خلابة مدرجة على قائمة التراث العالمي." },
      { name: "Jellyfish Lake", nameAr: "بحيرة قنديل البحر", type: "بحيرة", description: "بحيرة مليئة بقناديل البحر غير المؤذية." },
    ],
    riverDetails: [],
    lakeDetails: [
      { name: "Jellyfish Lake", nameAr: "بحيرة قنديل البحر", area: "بحيرة", description: "بحيرة بحرية تضم ملايين قناديل البحر الذهبية." },
    ],
    borderingSeas: ['المحيط الهادئ'],
    celebrities: [],
    previousLeaders: [
      { name: "Tommy Remengesau Jr.", nameAr: "تومي ريمنجساو جونيور", title: "رئيس", from: "2001", to: "2009" },
      { name: "Johnson Toribiong", nameAr: "جونسون توريبيونغ", title: "رئيس", from: "2009", to: "2013" },
      { name: "Tommy Remengesau Jr.", nameAr: "تومي ريمنجساو جونيور", title: "رئيس", from: "2013", to: "2021" },
      { name: "Surangel Whipps Jr.", nameAr: "سورانجيل ويبس جونيور", title: "رئيس", from: "2021", to: "حتى الآن" },
    ],
    leaderChildren: [],
  }
};
