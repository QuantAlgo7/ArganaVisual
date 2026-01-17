import { Compass, Mail, Phone, MapPin, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-600 p-3 rounded-full">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">كوانت عربيا</h3>
                <p className="text-sm text-gray-400">Quant Arabia</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              منصة تعليمية رائدة في مجال التداول الكمي والتحليل المالي في العالم العربي
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">الرئيسية</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-amber-400 transition-colors">الدورات</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors">من نحن</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">المدونة</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">الدورات</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">أساسيات التداول</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">استراتيجيات متقدمة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">تحليل البيانات</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">الذكاء الاصطناعي</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-amber-400" />
                info@quantarabia.com
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-amber-400" />
                <span dir="ltr">+966 50 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-amber-400" />
                الرياض، المملكة العربية السعودية
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-center md:text-right">
              © ٢٠٢٦ كوانت عربيا. جميع الحقوق محفوظة.
            </p>

            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-all transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-all transform hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-all transform hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-amber-400 transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-amber-400 transition-colors">الشروط والأحكام</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
