import { Compass, TrendingUp, BookOpen, Award } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-orange-800 to-amber-700 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <nav className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-amber-600 p-3 rounded-full shadow-lg">
              <Compass className="w-8 h-8 text-white animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">كوانت عربيا</h1>
              <p className="text-sm text-amber-200">Quant Arabia</p>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-lg">
            <a href="#courses" className="hover:text-amber-300 transition-colors">الدورات</a>
            <a href="#about" className="hover:text-amber-300 transition-colors">من نحن</a>
            <a href="#contact" className="hover:text-amber-300 transition-colors">اتصل بنا</a>
          </div>
          <button className="bg-white text-amber-900 px-6 py-2 rounded-full font-bold hover:bg-amber-100 transition-all transform hover:scale-105 shadow-lg">
            ابدأ الآن
          </button>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-right">
            <div className="inline-block bg-amber-600/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-amber-200 flex items-center gap-2 text-sm">
                <Award className="w-4 h-4" />
                منصة التداول الكمي الرائدة في العالم العربي
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              اكتشف عالم
              <span className="block text-amber-300">التداول الكمي</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-amber-100 leading-relaxed">
              رحلتك نحو احتراف التداول الكمي تبدأ هنا. تعلم استراتيجيات متقدمة مع خبراء المجال
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-white text-amber-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-100 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                استكشف الدورات
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                تواصل معنا
              </button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-300">٥٠٠٠+</div>
                <div className="text-amber-200">طالب</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-300">١٥٠+</div>
                <div className="text-amber-200">درس</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-300">٩٨٪</div>
                <div className="text-amber-200">رضا الطلاب</div>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-amber-600/20 rounded-3xl backdrop-blur-sm transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/40 to-orange-600/40 rounded-3xl backdrop-blur-lg p-8 flex items-center justify-center shadow-2xl">
                <Compass className="w-64 h-64 text-white/80 animate-spin" style={{ animationDuration: '20s' }} />
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-800">+٤٥٪</div>
                    <div className="text-sm text-gray-600">معدل النجاح</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-50 to-transparent"></div>
    </div>
  );
}
