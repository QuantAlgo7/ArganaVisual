import { Compass, Map, Navigation, Telescope } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Compass,
      title: 'التوجيه الدقيق',
      description: 'نرشدك خطوة بخطوة في رحلتك نحو إتقان التداول الكمي مع خبراء متخصصين',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Map,
      title: 'خريطة طريق واضحة',
      description: 'منهج تعليمي متكامل من الأساسيات إلى الاستراتيجيات المتقدمة',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Navigation,
      title: 'أدوات عملية',
      description: 'استخدم أحدث الأدوات والتقنيات المستخدمة في صناعة التداول الكمي',
      color: 'from-amber-600 to-orange-600'
    },
    {
      icon: Telescope,
      title: 'رؤية مستقبلية',
      description: 'تعلم كيفية تحليل الأسواق وبناء استراتيجيات تداول مربحة ومستدامة',
      color: 'from-orange-600 to-amber-700'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-amber-50 to-white" id="about">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4 font-semibold">
            لماذا كوانت عربيا؟
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            بوصلتك في عالم التداول الكمي
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نوفر لك كل ما تحتاجه لتصبح متداولاً كمياً محترفاً في الأسواق العالمية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-bl-full`}></div>
                <div className={`relative bg-gradient-to-br ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-br from-amber-900 to-orange-800 rounded-3xl p-12 text-white text-center shadow-2xl">
          <Compass className="w-16 h-16 mx-auto mb-6 text-amber-300" />
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            ابدأ رحلتك اليوم
          </h3>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            انضم إلى آلاف الطلاب الذين بدأوا رحلتهم نحو النجاح في التداول الكمي
          </p>
          <button className="bg-white text-amber-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-100 transition-all transform hover:scale-105 shadow-xl">
            احجز استشارة مجانية
          </button>
        </div>
      </div>
    </section>
  );
}
