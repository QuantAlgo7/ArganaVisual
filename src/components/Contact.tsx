import { useState } from 'react';
import { Send, DiscIcon as BrandDiscord, Youtube, GitBranch as BrandTelegram, Instagram, GitBranch as BrandTiktok, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email body
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `;
    
    // Create mailto link
    const mailtoLink = `mailto:arganabridgecapital@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 5000);
  };

  const socialLinks = [
    { icon: BrandDiscord, href: 'https://discord.gg/E4QnRWau', label: 'Discord' },
    { icon: Youtube, href: 'https://youtube.com/@ArganaBridgeCapital', label: 'YouTube' },
    { icon: BrandTelegram, href: 'https://t.me/Arganabridgecapital', label: 'Telegram' },
    { icon: Instagram, href: 'https://www.instagram.com/argana.bridge.capital', label: 'Instagram' },
    { icon: BrandTiktok, href: 'tiktok.com/@arganabridgecapital', label: 'TikTok' },
    { icon: Twitter, href: 'https://x.com/ArganaBC', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="section bg-dark relative">
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-light-dark max-w-2xl mx-auto">
              Ready to transform your investment strategy with institutional-grade algorithmic intelligence? Contact our team today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Contact Info */}
            <div>
              <div className="card">
                {/* Social Media Links */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-3 bg-dark-lighter rounded-lg hover:bg-dark-light transition-colors group"
                      >
                        <social.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                        <span className="text-xs mt-2 text-light-dark group-hover:text-accent transition-colors">
                          {social.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="card">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="bg-accent/10 inline-flex items-center justify-center p-3 rounded-full mb-4">
                    <Send className="text-accent" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-light-dark">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-dark-lighter border border-dark-light rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-dark-lighter border border-dark-light rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-dark-lighter border border-dark-light rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2 bg-dark-lighter border border-dark-light rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
                        required
                      />
                    </div>
                  </div>
                  
                  <button 
                    type="submit"
                    className="btn-primary w-full mt-6"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;