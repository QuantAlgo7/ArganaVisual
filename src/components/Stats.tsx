import { Users, BookOpen, Award, TrendingUp } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      number: '٥٠٠٠+',
      label: 'طالب نشط',
      color: 'bg-blue-500'
    },
    {
      icon: BookOpen,
      number: '١٥٠+',
      label: 'درس تفاعلي',
      color: 'bg-green-500'
    },
    {
      icon: Award,
      number: '١٢+',
      label: 'دورة متخصصة',
      color: 'bg-amber-500'
    },
    {
      icon: TrendingUp,
      number: '٩٨٪',
      label: 'معدل النجاح',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className={`${stat.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
