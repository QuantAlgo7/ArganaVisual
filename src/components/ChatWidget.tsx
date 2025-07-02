import { useState } from 'react';
import { X, MessageCircle, DiscIcon as Discord, Youtube, GitBranch as Telegram, Instagram, GitBranch as TikTok, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const socialLinks = [
  { icon: Discord, href: 'https://discord.gg/E4QnRWau', label: 'Discord' },
  { icon: Youtube, href: 'https://youtube.com/@ArganaBridgeCapital', label: 'YouTube' },
  { icon: Telegram, href: 'https://t.me/Arganabridgecapital', label: 'Telegram' },
  { icon: Instagram, href: 'https://www.instagram.com/argana.bridge.capital', label: 'Instagram' },
  { icon: TikTok, href: 'tiktok.com/@arganabridgecapital', label: 'TikTok' },
  { icon: Twitter, href: 'https://x.com/ArganaBC', label: 'Twitter' }
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, isRTL } = useLanguage();

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} bg-accent text-dark p-4 rounded-full shadow-lg hover:bg-accent-light transition-colors z-50`}
        aria-label={t('chat.openChat')}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-24 ${isRTL ? 'left-6' : 'right-6'} w-80 bg-dark-card border border-dark-lighter rounded-xl shadow-xl overflow-hidden z-50`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {/* Header */}
            <div className={`flex justify-between items-center p-4 border-b border-dark-lighter ${isRTL ? 'flex-row-reverse' : ''}`}>
              <h3 className="font-display font-semibold">{t('chat.title')}</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-light-dark hover:text-accent transition-colors"
                aria-label={t('chat.closeChat')}
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="text-light-dark mb-4">
                {t('chat.description')}
              </p>

              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-3 bg-dark-lighter rounded-lg hover:bg-dark-light transition-colors group"
                  >
                    <social.icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-xs mt-2 text-light-dark group-hover:text-accent transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;