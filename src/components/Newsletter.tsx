import { Mail, Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-amber-900 via-orange-800 to-amber-700" id="contact">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20">
          <div className="bg-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Mail className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ابقَ على اطلاع دائم
          </h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            اشترك في نشرتنا البريدية واحصل على أحدث الاستراتيجيات والنصائح مباشرة في بريدك
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-6 py-4 rounded-full text-right text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-amber-300 shadow-lg"
            />
            <button className="bg-white text-amber-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-100 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              <span>اشترك الآن</span>
              <Send className="w-5 h-5" />
            </button>
          </div>

          <p className="text-amber-200 text-sm mt-6">
            أكثر من ١٠،٠٠٠ متداول يثقون بنا. انضم إليهم اليوم!
          </p>
        </div>
      </div>
    </section>
  );
}
