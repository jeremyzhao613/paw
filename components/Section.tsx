import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, subtitle, children, className = "" }) => {
  return (
    <section className={`mb-16 ${className}`}>
      <div className="mb-8 border-l-4 border-brand-pink pl-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-text">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-500 mt-1 text-sm md:text-base">
            {subtitle}
          </p>
        )}
      </div>
      <div className="w-full">
        {children}
      </div>
    </section>
  );
};