import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useState } from 'react';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section bg-dark-light relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Client Success Stories
          </h2>
          <p className="text-light-dark">
            Hear from institutional investors and professional traders who have leveraged our algorithmic strategies to achieve exceptional results.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -left-4 top-0 opacity-30">
            <Quote size={80} className="text-accent" />
          </div>
          
          <div className="card p-8 md:p-12">
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-6">
                <p className="text-lg md:text-xl italic mb-8">
                  "{currentTestimonial.quote}"
                </p>
                
                <div className="flex flex-col items-center">
                  <img 
                    src={currentTestimonial.avatar} 
                    alt={currentTestimonial.name} 
                    className="w-16 h-16 rounded-full mb-4 border-2 border-accent"
                  />
                  <h4 className="font-display font-semibold text-xl">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-light-dark">{currentTestimonial.title}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={goToPrev}
              className="p-2 border border-dark-lighter rounded-full hover:bg-dark-lighter transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} className="text-accent" />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-accent w-6'
                      : 'bg-dark-lighter hover:bg-light-dark'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={goToNext}
              className="p-2 border border-dark-lighter rounded-full hover:bg-dark-lighter transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} className="text-accent" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;