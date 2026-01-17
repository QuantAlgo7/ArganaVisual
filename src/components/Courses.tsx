import { Clock, Users, Star, ArrowLeft } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      title: 'أساسيات التداول الكمي',
      description: 'تعلم المبادئ الأساسية للتداول الكمي والبرمجة المالية من الصفر',
      level: 'مبتدئ',
      duration: '٨ أسابيع',
      students: '١٢٠٠',
      rating: '٤.٩',
      price: '٤٩٩ ريال',
      image: 'from-blue-400 to-blue-600'
    },
    {
      title: 'استراتيجيات متقدمة',
      description: 'استراتيجيات تداول متطورة باستخدام الذكاء الاصطناعي والتعلم الآلي',
      level: 'متقدم',
      duration: '١٢ أسبوع',
      students: '٨٥٠',
      rating: '٥.٠',
      price: '٧٩٩ ريال',
      image: 'from-orange-400 to-red-600'
    },
    {
      title: 'تحليل البيانات المالية',
      description: 'تعلم كيفية تحليل البيانات المالية الضخمة واستخراج الفرص الاستثمارية',
      level: 'متوسط',
      duration: '١٠ أسابيع',
      students: '٩٥٠',
      rating: '٤.٨',
      price: '٦٤٩ ريال',
      image: 'from-green-400 to-teal-600'
    },
    {
      title: 'بناء روبوتات التداول',
      description: 'طور روبوتات تداول ذكية وقم باختبارها على بيانات حقيقية',
      level: 'متقدم',
      duration: '١٦ أسبوع',
      students: '٦٠٠',
      rating: '٤.٩',
      price: '٩٩٩ ريال',
      image: 'from-purple-400 to-pink-600'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-amber-50" id="courses">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4 font-semibold">
            دوراتنا التدريبية
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            ابدأ رحلتك التعليمية
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اختر الدورة المناسبة لمستواك وابدأ في تطوير مهاراتك في التداول الكمي
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
            >
              <div className={`h-48 bg-gradient-to-br ${course.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute top-4 right-4 bg-white text-amber-600 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  {course.level}
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                  {course.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {course.students} طالب
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-l from-amber-600 to-orange-600 text-white py-3 rounded-full font-bold hover:from-amber-700 hover:to-orange-700 transition-all group-hover:shadow-lg flex items-center justify-center gap-2">
                  <span>اشترك الآن</span>
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-l from-amber-600 to-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105">
            عرض جميع الدورات
          </button>
        </div>
      </div>
    </section>
  );
}
