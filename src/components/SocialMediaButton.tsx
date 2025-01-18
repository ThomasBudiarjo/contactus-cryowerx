import React from 'react';

interface SocialMediaButtonProps {
  icon: string;
  href: string;
  alt: string;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ icon, href, alt }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-[#1B1B1B] flex items-center justify-center transition-all duration-300 hover:bg-white group dark:invert dark:hover:invert"
    >
      <img 
        src={icon} 
        alt={alt} 
        className="w-5 h-5 transition-all duration-300 group-hover:invert"
      />
    </a>
  );
};

export default SocialMediaButton;