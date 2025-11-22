import React from 'react';

interface MetricCardProps {
  value: string;
  label: string;
  description?: string;
  highlight?: boolean;
  compact?: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({ value, label, description, highlight = false, compact = false }) => {
  return (
    <div className={`flex flex-col justify-center h-full ${compact ? 'items-start p-4' : 'items-center text-center p-6'} ${highlight ? 'bg-gradient-to-br from-white to-brand-pink/10' : ''}`}>
      <h3 className={`font-serif font-bold text-brand-darkPink tracking-tight leading-none ${compact ? 'text-3xl mb-1' : 'text-4xl lg:text-5xl mb-2'}`}>
        {value}
      </h3>
      <p className={`text-brand-text font-bold uppercase tracking-wide leading-tight ${compact ? 'text-xs' : 'text-sm lg:text-base mb-1'}`}>
        {label}
      </p>
      {description && !compact && (
        <p className="text-gray-500 text-xs font-light leading-tight mt-2 max-w-[80%]">
          {description}
        </p>
      )}
    </div>
  );
};