import { TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-dark-light border-t border-dark-lighter" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <TrendingUp className={`text-accent ${isRTL ? 'ml-2' : 'mr-2'}`} size={24} />
              <span className="font-display text-xl font-semibold tracking-wide">
                Argana Bridge Capital
              </span>
            </div>
            <p className="text-light-dark mb-4 max-w-md">
              {t('footer.description')}
            </p>
          </div>
          
          <div className={isRTL ? 'text-right' : ''}>
            <h3 className="font-display font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-light-dark hover:text-accent transition-colors">{t('footer.links.home')}</a></li>
              <li><a href="#chart" className="text-light-dark hover:text-accent transition-colors">{t('footer.links.liveChart')}</a></li>
              <li><a href="#strategies" className="text-light-dark hover:text-accent transition-colors">{t('footer.links.strategies')}</a></li>
              <li><a href="#testimonials" className="text-light-dark hover:text-accent transition-colors">{t('footer.links.testimonials')}</a></li>
              <li><a href="#contact" className="text-light-dark hover:text-accent transition-colors">{t('footer.links.contact')}</a></li>
            </ul>
          </div>
          
          <div className={isRTL ? 'text-right' : ''}>
            <h3 className="font-display font-semibold text-lg mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-light-dark hover:text-accent transition-colors">{t('footer.links.terms')}</a></li>
              <li><a href="#" className="text-light-dark hover:text-accent transition-colors">{t('footer.links.privacy')}</a></li>
              <li><a href="#" className="text-light-dark hover:text-accent transition-colors">{t('footer.links.disclaimer')}</a></li>
              <li><a href="#" className="text-light-dark hover:text-accent transition-colors">{t('footer.links.risk')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className={`border-t border-dark-lighter mt-10 pt-6 flex flex-col md:flex-row justify-between items-center ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <p className="text-light-dark text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Argana Bridge Capital. {t('footer.copyright')}
          </p>
          <p className={`text-light-dark text-sm text-center ${isRTL ? 'md:text-left' : 'md:text-right'}`}>
            <span className="block md:inline mb-2 md:mb-0 md:mr-4">{t('footer.tagline')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;