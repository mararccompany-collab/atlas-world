import type { Country } from '../data/countriesWithDetails';

interface CountryDetailProps {
  country: Country;
  onBack: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export default function CountryDetail({ country, onBack, isFavorite = false, onToggleFavorite }: CountryDetailProps) {
  return (
    <div className="min-h-screen pb-12 bg-[#0a0a0f] text-white" dir="rtl">
      {/* Fixed Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Header */}
      <div className="relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-gray-900 to-gray-950" />
        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors group"
            >
              <svg className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>العودة</span>
            </button>
            {onToggleFavorite && (
              <button
                onClick={onToggleFavorite}
                className={`text-3xl transition-transform hover:scale-110 ${isFavorite ? 'text-pink-500' : 'text-gray-400 hover:text-pink-400'}`}
              >
                {isFavorite ? '❤️' : '🤍'}
              </button>
            )}
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="text-8xl md:text-9xl">{country.flag}</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white">{country.nameAr}</h1>
              <p className="text-xl text-gray-400 mt-1">{country.name}</p>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 text-sm font-medium">
                  🏛 العاصمة: {country.capitalAr}
                </span>
                <span className="px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40 text-sm font-medium">
                  👥 السكان: {country.population}
                </span>
                <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-sm font-medium">
                  📐 المساحة: {country.area}
                </span>
                <span className="px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/40 text-sm font-medium">
                  🗣 اللغة: {country.language}
                </span>
                {country.isArab && (
                  <span className="px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/40 text-sm font-medium">
                    🌙 دولة عربية
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 space-y-8">
        {/* Location */}
        <Section title="📍 الموقع الجغرافي" color="amber">
          <p className="text-gray-300 text-lg leading-relaxed">{country.location}</p>
        </Section>

        {/* Leader */}
        <Section title="👑 رئيس الدولة" color="purple">
          <div className="bg-gradient-to-r from-purple-500/10 to-transparent rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white">{country.leader.nameAr}</h3>
            <p className="text-purple-400 text-sm mt-1">{country.leader.name}</p>
            <div className="flex flex-wrap gap-3 mt-3">
              <span className="text-sm bg-purple-500/20 px-3 py-1 rounded-full text-purple-300">
                {country.leader.title}
              </span>
              <span className="text-sm bg-purple-500/20 px-3 py-1 rounded-full text-purple-300">
                منذ {country.leader.since}
              </span>
            </div>
            <p className="text-gray-300 mt-4 leading-relaxed">{country.leader.bio}</p>
          </div>
        </Section>

        {/* Military */}
        <Section title="⚔️ القوة العسكرية" color="red">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {country.military.rank > 0 && (
              <StatBox label="الترتيب العالمي" value={`#${country.military.rank}`} color="red" />
            )}
            <StatBox label="القوام البشري" value={country.military.personnel} color="red" />
            <StatBox label="الميزانية" value={country.military.budget} color="red" />
            <StatBox label="الدبابات" value={country.military.tanks} color="red" />
            <StatBox label="الطائرات" value={country.military.aircraft} color="red" />
            <StatBox label="القوة البحرية" value={country.military.navy} color="red" />
          </div>
          {(country.armyPersonnel || country.navyPersonnel || country.airForcePersonnel || country.reservePersonnel) && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {country.armyPersonnel && <StatBox label="القوات البرية" value={country.armyPersonnel} color="red" />}
              {country.navyPersonnel && <StatBox label="القوات البحرية" value={country.navyPersonnel} color="red" />}
              {country.airForcePersonnel && <StatBox label="القوات الجوية" value={country.airForcePersonnel} color="red" />}
              {country.reservePersonnel && <StatBox label="قوات الاحتياط" value={country.reservePersonnel} color="red" />}
            </div>
          )}
          {country.military.nuclear && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-4 flex items-center gap-3">
              <span className="text-3xl">☢️</span>
              <span className="text-red-400 font-bold text-lg">تمتلك أسلحة نووية</span>
            </div>
          )}
          <p className="text-gray-300 leading-relaxed">{country.military.details}</p>
        </Section>

        {/* Economy */}
        <Section title="💰 الاقتصاد" color="emerald">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <StatBox label="الناتج المحلي" value={country.economy.gdp} color="emerald" />
            <StatBox label="نصيب الفرد" value={country.economy.gdpPerCapita} color="emerald" />
            <StatBox label="العملة" value={country.economy.currency} color="emerald" />
          </div>
          <div className="mb-6">
            <h4 className="text-emerald-400 font-bold mb-3">القطاعات الرئيسية:</h4>
            <div className="flex flex-wrap gap-2">
              {country.economy.mainSectors.map((sector, i) => (
                <span key={i} className="px-3 py-1.5 bg-emerald-500/15 text-emerald-300 rounded-full text-sm border border-emerald-500/30">
                  {sector}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h4 className="text-emerald-400 font-bold mb-3">🏦 أهم البنوك:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {country.economy.banks.map((bank, i) => (
                <div key={i} className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3 text-center">
                  <span className="text-white font-medium">{bank}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">{country.economy.details}</p>
        </Section>

        {/* Politicians */}
        {country.politicians.length > 0 && (
          <Section title="🏛 أهم السياسيين" color="blue">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {country.politicians.map((pol, i) => (
                <div key={i} className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center text-blue-300 font-bold">
                    {i + 1}
                  </div>
                  <span className="text-white font-medium">{pol}</span>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Provinces */}
        <Section title="🗺 المحافظات والمناطق" color="cyan">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {country.provinces.map((prov, i) => (
              <div key={i} className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
                <h4 className="text-cyan-300 font-bold text-lg">{prov.name}</h4>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="text-gray-400">العاصمة: <span className="text-white">{prov.capital}</span></p>
                  <p className="text-gray-400">السكان: <span className="text-white">{prov.population}</span></p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Rivers & Lakes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Section title="🏞 الأنهار" color="blue">
            <div className="space-y-2">
              {country.rivers.map((river, i) => (
                <div key={i} className="flex items-center gap-3 bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                  <span className="text-blue-400">🌊</span>
                  <div>
                    <span className="text-white">{river}</span>
                  </div>
                </div>
              ))}
            </div>
            {country.riverDetails && country.riverDetails.length > 0 && (
              <div className="mt-4 space-y-3">
                {country.riverDetails.map((r, i) => (
                  <div key={i} className="bg-blue-500/5 border border-blue-500/15 rounded-xl p-4">
                    <h4 className="text-blue-300 font-bold text-lg">{r.nameAr}</h4>
                    <p className="text-gray-400 text-xs mt-1">{r.name}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs bg-blue-500/20 px-2 py-0.5 rounded text-blue-300">الطول: {r.length}</span>
                    </div>
                    <p className="text-gray-300 text-sm mt-2 leading-relaxed">{r.description}</p>
                  </div>
                ))}
              </div>
            )}
          </Section>

          <Section title="💧 البحيرات" color="sky">
            <div className="space-y-2">
              {country.lakes.map((lake, i) => (
                <div key={i} className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-3 border border-sky-500/20">
                  <span className="text-sky-400">💎</span>
                  <div>
                    <span className="text-white">{lake}</span>
                  </div>
                </div>
              ))}
            </div>
            {country.lakeDetails && country.lakeDetails.length > 0 && (
              <div className="mt-4 space-y-3">
                {country.lakeDetails.map((l, i) => (
                  <div key={i} className="bg-sky-500/5 border border-sky-500/15 rounded-xl p-4">
                    <h4 className="text-sky-300 font-bold text-lg">{l.nameAr}</h4>
                    <p className="text-gray-400 text-xs mt-1">{l.name}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs bg-sky-500/20 px-2 py-0.5 rounded text-sky-300">المساحة: {l.area}</span>
                    </div>
                    <p className="text-gray-300 text-sm mt-2 leading-relaxed">{l.description}</p>
                  </div>
                ))}
              </div>
            )}
          </Section>
        </div>

        {/* Mountains */}
        {country.mountains && country.mountains.length > 0 && (
          <Section title="⛰️ الجبال" color="amber">
            <div className="space-y-4">
              {country.mountains.map((m, i) => (
                <div key={i} className="bg-amber-500/5 border border-amber-500/15 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⛰️</span>
                    <div className="flex-1">
                      <h4 className="text-amber-300 font-bold text-lg">{m.nameAr}</h4>
                      <p className="text-gray-400 text-xs">{m.name}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-xs bg-amber-500/20 px-2 py-0.5 rounded text-amber-300">الارتفاع: {m.height}</span>
                      </div>
                      <p className="text-gray-300 text-sm mt-2 leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Bordering Seas */}
        {country.borderingSeas && country.borderingSeas.length > 0 && (
          <Section title="🌊 البحار والمحيطات المطلة" color="blue">
            <div className="flex flex-wrap gap-2">
              {country.borderingSeas.map((sea, i) => (
                <span key={i} className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-300 text-sm">
                  🌊 {sea}
                </span>
              ))}
            </div>
          </Section>
        )}

        {/* Landmarks */}
        <Section title="🏛 أهم المعالم" color="orange">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {country.landmarks.map((landmark, i) => (
              <div key={i} className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 text-center hover:bg-orange-500/20 transition-colors">
                <span className="text-2xl mb-2 block">🏛</span>
                <span className="text-white font-medium">{landmark}</span>
              </div>
            ))}
          </div>
          {country.landmarkDetails && country.landmarkDetails.length > 0 && (
            <div className="mt-6 space-y-4">
              {country.landmarkDetails.map((lm, i) => (
                <div key={i} className="bg-orange-500/5 border border-orange-500/15 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏛</span>
                    <div className="flex-1">
                      <h4 className="text-orange-300 font-bold text-lg">{lm.nameAr}</h4>
                      <p className="text-gray-400 text-xs">{lm.name}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-xs bg-orange-500/20 px-2 py-0.5 rounded text-orange-300">النوع: {lm.type}</span>
                      </div>
                      <p className="text-gray-300 text-sm mt-2 leading-relaxed">{lm.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Section>

        {/* News */}
        <Section title="📰 آخر الأخبار" color="rose">
          <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-6 text-center">
            <p className="text-gray-300 mb-4">للاطلاع على آخر الأخبار المباشرة عن {country.nameAr}</p>
            <a
              href={`https://news.google.com/search?q=${encodeURIComponent(country.newsKeywords)}&hl=ar`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-xl transition-colors font-bold"
            >
              <span>📰</span>
              <span>أخبار مباشرة - Google News</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a
                href={`https://www.aljazeera.net/search/${encodeURIComponent(country.nameAr)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm transition-colors"
              >
                الجزيرة نت
              </a>
              <a
                href={`https://www.bbc.com/arabic/search?q=${encodeURIComponent(country.nameAr)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm transition-colors"
              >
                BBC عربي
              </a>
              <a
                href={`https://www.reuters.com/search/news?query=${encodeURIComponent(country.newsKeywords)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm transition-colors"
              >
                Reuters
              </a>
            </div>
          </div>
        </Section>

        {/* Additional Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {country.climate && (
            <Section title="🌤 المناخ" color="amber">
              <p className="text-gray-300 leading-relaxed">{country.climate}</p>
            </Section>
          )}
          {country.timezone && (
            <Section title="🕐 المنطقة الزمنية" color="blue">
              <p className="text-gray-300 text-lg">{country.timezone}</p>
            </Section>
          )}
          {country.independence && (
            <Section title="📜 الاستقلال" color="purple">
              <p className="text-gray-300 text-lg">{country.independence}</p>
            </Section>
          )}
          {country.lifeExpectancy && (
            <Section title="👴 متوسط العمر المتوقع" color="green">
              <p className="text-gray-300 text-lg">{country.lifeExpectancy}</p>
            </Section>
          )}
          {country.literacyRate && (
            <Section title="📚 نسبة التعليم" color="cyan">
              <p className="text-gray-300 text-lg">{country.literacyRate}</p>
            </Section>
          )}
          {country.devIndex && (
            <Section title="📊 مؤشر التنمية البشرية" color="emerald">
              <p className="text-gray-300 text-lg">{country.devIndex}</p>
            </Section>
          )}
          {country.hungerIndex && (
            <Section title="🍞 مؤشر الجوع العالمي" color="orange">
              <p className="text-gray-300 text-lg">{country.hungerIndex}</p>
            </Section>
          )}
        </div>

        {/* Comprehensive Statistics */}
        {(country.birthRate || country.deathRate || country.medianAge || country.urbanPopulation || country.giniIndex || country.internetUsers || country.hdiRank) && (
          <Section title="📊 إحصائيات شاملة" color="emerald">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {country.birthRate && <StatBox label="معدل المواليد" value={`${country.birthRate} / 1000`} color="emerald" />}
              {country.deathRate && <StatBox label="معدل الوفيات" value={`${country.deathRate} / 1000`} color="emerald" />}
              {country.medianAge && <StatBox label="متوسط العمر" value={`${country.medianAge} سنة`} color="emerald" />}
              {country.urbanPopulation && <StatBox label="سكان الحضر" value={country.urbanPopulation} color="emerald" />}
              {country.giniIndex && <StatBox label="مؤشر جيني" value={country.giniIndex} color="emerald" />}
              {country.internetUsers && <StatBox label="مستخدمو الإنترنت" value={country.internetUsers} color="emerald" />}
              {country.hdiRank && <StatBox label="ترتيب التنمية البشرية" value={country.hdiRank} color="emerald" />}
              {country.unemploymentRate && <StatBox label="نسبة البطالة" value={country.unemploymentRate} color="emerald" />}
              {country.inflationRate && <StatBox label="معدل التضخم" value={country.inflationRate} color="emerald" />}
              {country.tourismArrivals && <StatBox label="السياح سنوياً" value={country.tourismArrivals} color="emerald" />}
            </div>
          </Section>
        )}

        {/* Geography */}
        {(country.coastline || country.highestPoint || country.lowestPoint) && (
          <Section title="📍 جغرافية" color="sky">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {country.coastline && <StatBox label="طول الساحل" value={country.coastline} color="sky" />}
              {country.highestPoint && <StatBox label="أعلى نقطة" value={country.highestPoint} color="sky" />}
              {country.lowestPoint && <StatBox label="أدنى نقطة" value={country.lowestPoint} color="sky" />}
            </div>
          </Section>
        )}

        {/* Religions */}
        {country.religions && country.religions.length > 0 && (
          <Section title="🕌 الديانات" color="purple">
            <div className="flex flex-wrap gap-3">
              {country.religions.map((rel, i) => (
                <span key={i} className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-xl text-white">
                  {rel}
                </span>
              ))}
            </div>
          </Section>
        )}

        {/* Exports & Imports */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {country.topExports && country.topExports.length > 0 && (
            <Section title="📤 أهم الصادرات" color="emerald">
              <div className="flex flex-wrap gap-2">
                {country.topExports.map((item, i) => (
                  <span key={i} className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-300 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </Section>
          )}
          {country.topImports && country.topImports.length > 0 && (
            <Section title="📥 أهم الواردات" color="blue">
              <div className="flex flex-wrap gap-2">
                {country.topImports.map((item, i) => (
                  <span key={i} className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-300 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </Section>
          )}
        </div>

        {/* Borders */}
        {country.borders && country.borders.length > 0 && (
          <Section title="🗺 الدول المجاورة" color="cyan">
            <div className="flex flex-wrap gap-2">
              {country.borders.map((b, i) => (
                <span key={i} className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-300 text-sm">
                  {b}
                </span>
              ))}
            </div>
          </Section>
        )}

        {/* Natural Resources */}
        {country.naturalResources && country.naturalResources.length > 0 && (
          <Section title="⛏ الموارد الطبيعية" color="amber">
            <div className="flex flex-wrap gap-2">
              {country.naturalResources.map((r, i) => (
                <span key={i} className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-300 text-sm">
                  {r}
                </span>
              ))}
            </div>
          </Section>
        )}

        {/* Leader Children */}
        {country.leaderChildren && country.leaderChildren.length > 0 && (
          <Section title="👨‍👩‍👧‍👦 أبناء رئيس الدولة" color="purple">
            <div className="flex flex-wrap gap-3">
              {country.leaderChildren.map((child, i) => (
                <span key={i} className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-xl text-white">
                  {child}
                </span>
              ))}
            </div>
          </Section>
        )}

        {/* Previous Leaders */}
        {country.previousLeaders && country.previousLeaders.length > 0 && (
          <Section title="📜 الرؤساء والحكام السابقون" color="amber">
            <div className="space-y-3">
              {country.previousLeaders.map((pl, i) => (
                <div key={i} className="bg-amber-500/5 border border-amber-500/15 rounded-xl p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-amber-300 font-bold text-lg">{pl.nameAr}</h4>
                      <p className="text-gray-400 text-xs">{pl.name}</p>
                    </div>
                    <span className="text-xs bg-amber-500/20 px-2 py-1 rounded text-amber-300">{pl.title}</span>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">من {pl.from} إلى {pl.to}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Celebrities */}
        {country.celebrities && country.celebrities.length > 0 && (
          <Section title="🌟 مشاهير ونجوم" color="rose">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {country.celebrities.map((cel, i) => (
                <div key={i} className="bg-rose-500/5 border border-rose-500/15 rounded-xl p-4">
                  <h4 className="text-rose-300 font-bold">{cel.nameAr}</h4>
                  <p className="text-gray-400 text-xs">{cel.name}</p>
                  <span className="inline-block mt-2 text-xs bg-rose-500/20 px-2 py-0.5 rounded text-rose-300">{cel.profession}</span>
                  <p className="text-gray-300 text-xs mt-2 leading-relaxed">{cel.knownFor}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* New Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {country.governmentType && (
            <Section title="🏛 نظام الحكم" color="purple">
              <p className="text-gray-300 text-lg">{country.governmentType}</p>
            </Section>
          )}
          {country.drivingSide && (
            <Section title="🚗 جهة القيادة" color="blue">
              <p className="text-gray-300 text-lg">{country.drivingSide}</p>
            </Section>
          )}
          {country.nationalDish && (
            <Section title="🍜 الطبق الوطني" color="orange">
              <p className="text-gray-300 text-lg">{country.nationalDish}</p>
            </Section>
          )}
          {country.nationalAnimal && (
            <Section title="🦁 الحيوان الوطني" color="emerald">
              <p className="text-gray-300 text-lg">{country.nationalAnimal}</p>
            </Section>
          )}
          {country.airportCount && (
            <Section title="✈️ عدد المطارات" color="cyan">
              <p className="text-gray-300 text-lg">{country.airportCount}</p>
            </Section>
          )}
          {country.unescoSites && (
            <Section title="🏛 مواقع اليونسكو" color="amber">
              <p className="text-gray-300 text-lg">{country.unescoSites}</p>
            </Section>
          )}
        </div>
      </div>
    </div>
  );
}

function Section({ title, color, children }: { title: string; color: string; children: React.ReactNode }) {
  const borderColors: Record<string, string> = {
    amber: 'border-amber-500/30',
    purple: 'border-purple-500/30',
    red: 'border-red-500/30',
    emerald: 'border-emerald-500/30',
    blue: 'border-blue-500/30',
    cyan: 'border-cyan-500/30',
    sky: 'border-sky-500/30',
    orange: 'border-orange-500/30',
    rose: 'border-rose-500/30',
    green: 'border-green-500/30',
  };

  const titleColors: Record<string, string> = {
    amber: 'text-amber-400',
    purple: 'text-purple-400',
    red: 'text-red-400',
    emerald: 'text-emerald-400',
    blue: 'text-blue-400',
    cyan: 'text-cyan-400',
    sky: 'text-sky-400',
    orange: 'text-orange-400',
    rose: 'text-rose-400',
    green: 'text-green-400',
  };

  return (
    <div className={`bg-gray-900/60 backdrop-blur-lg border ${borderColors[color] || 'border-gray-700/50'} rounded-2xl p-6`}>
      <h2 className={`text-2xl font-black ${titleColors[color] || 'text-white'} mb-5 flex items-center gap-2`}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function StatBox({ label, value, color }: { label: string; value: string; color: string }) {
  const bgColors: Record<string, string> = {
    red: 'bg-red-500/10 border-red-500/20',
    emerald: 'bg-emerald-500/10 border-emerald-500/20',
    sky: 'bg-sky-500/10 border-sky-500/20',
    green: 'bg-green-500/10 border-green-500/20',
  };

  return (
    <div className={`${bgColors[color] || 'bg-gray-800/60 border-gray-700/30'} border rounded-xl p-4 text-center`}>
      <div className="text-xs text-gray-400 mb-1">{label}</div>
      <div className="text-white font-bold text-sm">{value}</div>
    </div>
  );
}
