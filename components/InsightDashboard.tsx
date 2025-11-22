import React from 'react';
import { MetricCard } from './MetricCard';
import { 
  PerceptionPieChart, 
  MotivationBarChart, 
  MarketGrowthChart,
  WillingnessChart 
} from './Charts';
import { PawPrint, TrendingUp, Heart, Users, ArrowUpRight, DollarSign, Home, Search } from 'lucide-react';

// --- Logo Component ---
const BrandLogo: React.FC = () => (
  <div className="flex items-center gap-3 select-none opacity-100 group cursor-pointer">
    <div className="relative transition-transform duration-500 group-hover:rotate-12">
      <div className="absolute inset-0 bg-orange-400 blur-md rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
      <PawPrint className="w-10 h-10 text-[#f6ad55] fill-[#f6ad55] relative z-10 transform -rotate-12" />
    </div>
    <div className="flex flex-col leading-none justify-center">
      <span className="font-sans font-black text-2xl tracking-tight text-[#392f5a]">PAW</span>
      <span className="font-sans font-black text-2xl tracking-[0.2em] text-[#392f5a] -mt-1 ml-0.5">TRACE</span>
    </div>
  </div>
);

export const InsightDashboard: React.FC = () => {
  return (
    <div className="w-full h-full p-6 lg:p-8 grid grid-cols-12 grid-rows-12 gap-4 text-brand-text bg-[#fdfbfb]">
      
      {/* --- ROW 1-2: HEADER & KPI STRIP --- */}
      
      {/* Title Block & Logo */}
      <div className="col-span-4 row-span-2 flex flex-row items-center justify-between border-b-2 border-brand-pink/20 pr-2">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 bg-brand-text text-white text-[10px] font-bold tracking-widest uppercase rounded-sm">2025 Report</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-serif font-bold text-brand-text leading-none tracking-tight">
            <span className="text-brand-darkPink italic pr-1">Consumer</span>Insight
          </h1>
          <p className="text-[10px] text-gray-500 mt-1 font-medium tracking-wide">
            PET ECONOMY • EMOTIONAL ANCHOR • INNOVATION
          </p>
        </div>
        {/* Logo Placed Here */}
        <div className="pl-4 border-l border-dashed border-gray-200">
          <BrandLogo />
        </div>
      </div>

      {/* KPI 1: Market Size */}
      <div className="col-span-2 row-span-2 bg-white rounded-xl shadow-sm border border-stone-100 transition-all hover:shadow-md">
        <MetricCard 
          value="¥4042 Bn" 
          label="2027E Market Size" 
          compact={false}
          highlight={true}
          description="Urban pet market projected expansion"
        />
      </div>

      {/* KPI 2: Growth Rate */}
      <div className="col-span-2 row-span-2 bg-white rounded-xl shadow-sm border border-stone-100 flex flex-col justify-center items-center p-4 transition-all hover:shadow-md group">
         <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-brand-accent/10 group-hover:bg-brand-accent/30 transition-colors rounded-full text-brand-text">
              <TrendingUp size={20} className="stroke-2" />
            </div>
            <span className="text-sm font-bold text-gray-600">CAGR</span>
         </div>
         <span className="text-4xl font-serif font-bold text-brand-accent tracking-tight">8.4%</span>
         <span className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-semibold">2021-2027 Growth</span>
      </div>

      {/* KPI 3: Gen Z */}
      <div className="col-span-2 row-span-2 bg-white rounded-xl shadow-sm border border-stone-100 transition-all hover:shadow-md">
        <MetricCard 
          value="+43.5%" 
          label="Gen Z Growth" 
          compact={false}
          description="Increase in ownership since 2023"
        />
      </div>

       {/* KPI 4: Housing */}
       <div className="col-span-2 row-span-2 bg-white rounded-xl shadow-sm border border-stone-100 transition-all hover:shadow-md">
        <MetricCard 
          value="58.5%" 
          label="Dedicated Spaces" 
          compact={false}
          description="Owners creating specific pet areas"
        />
      </div>

      {/* --- ROW 3-8: MAIN CHARTS MIDDLE --- */}

      {/* Market Growth (Left Large) */}
      <div className="col-span-5 row-span-6 bg-white rounded-xl shadow-sm border border-stone-100 p-6 relative overflow-hidden group">
         <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-serif font-bold text-xl text-brand-text flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-brand-darkPink stroke-[2.5]"/> Market Outlook
              </h3>
              <p className="text-xs text-gray-400 font-medium mt-1">2021-2027E Urban Pet Market (Billion CNY)</p>
            </div>
         </div>
         <div className="h-[80%] w-full">
            <MarketGrowthChart />
         </div>
         <div className="absolute bottom-6 right-6 text-right">
            <p className="text-3xl font-serif font-bold text-brand-text">¥3002 Bn</p>
            <div className="flex items-center justify-end gap-1">
              <span className="w-2 h-2 rounded-full bg-brand-darkPink animate-pulse"></span>
              <p className="text-xs text-brand-darkPink font-bold uppercase tracking-wider">2024 Current</p>
            </div>
         </div>
      </div>

      {/* Motivation (Center Tall) */}
      <div className="col-span-4 row-span-6 bg-white rounded-xl shadow-sm border border-stone-100 p-6">
        <div className="mb-4">
            <h3 className="font-serif font-bold text-xl text-brand-text flex items-center gap-2">
              <Heart className="w-5 h-5 text-brand-darkPink stroke-[2.5]"/> Key Drivers
            </h3>
            <p className="text-xs text-gray-400 font-medium mt-1">Emotional Value vs Functional Needs</p>
        </div>
        <div className="h-[85%] w-full">
           <MotivationBarChart />
        </div>
      </div>

      {/* Right Column: Perception & Willingness */}
      <div className="col-span-3 row-span-6 grid grid-rows-2 gap-4">
          {/* Perception */}
          <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-5 flex flex-col">
             <h3 className="font-serif font-bold text-lg text-brand-text mb-1">Role Perception</h3>
             <p className="text-[10px] text-gray-400 mb-2">How owners view their pets</p>
             <div className="flex-1 min-h-0">
                <PerceptionPieChart />
             </div>
          </div>

          {/* Willingness */}
          <div className="bg-brand-text rounded-xl shadow-md border border-stone-100 p-5 relative overflow-hidden text-white group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/20 rounded-full -mr-12 -mt-12 blur-2xl transition-all group-hover:bg-brand-pink/30"></div>
             <h3 className="font-serif font-bold text-lg mb-2 z-10 relative text-white">Willingness to Pay</h3>
             <div className="flex items-center justify-between h-full pb-2">
                 <div className="w-[45%] h-28 relative z-10">
                    <WillingnessChart />
                 </div>
                 <div className="w-[55%] text-right z-10 pl-2">
                    <span className="text-4xl font-serif font-bold text-brand-accent">61.5%</span>
                    <p className="text-[10px] text-gray-300 leading-snug mt-2 font-light">
                      Believe emotional health is vital & are <strong className="text-white font-semibold">willing to pay</strong> premium.
                    </p>
                 </div>
             </div>
          </div>
      </div>

      {/* --- ROW 9-12: FOOTER METRICS & INSIGHTS --- */}

      {/* Insight Text Block 1 */}
      <div className="col-span-4 row-span-4 bg-[#fbf6f7] border-t-4 border-brand-pink rounded-br-xl rounded-bl-xl p-6 flex flex-col justify-center relative overflow-hidden">
         <div className="absolute top-4 right-4 opacity-5">
            <PawPrint size={100} />
         </div>
         <h4 className="text-brand-darkPink font-bold uppercase text-[10px] tracking-[0.2em] mb-3">The Core Insight</h4>
         <p className="font-serif text-xl md:text-2xl text-brand-text leading-snug italic mb-4 z-10">
           "Pets are no longer just companions; they are co-creators of lifestyle and projections of self-identity."
         </p>
         <div className="flex gap-2 mt-auto">
            <div className="h-1.5 w-10 bg-brand-darkPink rounded-full"></div>
            <div className="h-1.5 w-3 bg-brand-pink rounded-full"></div>
            <div className="h-1.5 w-3 bg-brand-pink/40 rounded-full"></div>
         </div>
      </div>

      {/* Demographics Table Style */}
      <div className="col-span-4 row-span-4 bg-white rounded-xl shadow-sm p-6 border border-stone-100">
          <h3 className="font-serif font-bold text-lg text-brand-text mb-5 flex items-center gap-2">
             <Users className="w-5 h-5 text-gray-600" /> 
             Demographics
          </h3>
          <div className="space-y-4 font-sans">
             <div className="flex justify-between items-center border-b border-dashed border-gray-100 pb-2">
                <span className="text-sm text-gray-600 font-medium">Post-90s <span className="text-[10px] text-gray-400 font-normal ml-1">(Primary)</span></span>
                <span className="font-bold text-brand-text bg-stone-100 px-3 py-1 rounded-md text-sm">41.2%</span>
             </div>
             <div className="flex justify-between items-center border-b border-dashed border-gray-100 pb-2">
                <span className="text-sm text-brand-darkPink font-bold">Post-00s <span className="text-[10px] text-brand-darkPink/60 font-normal ml-1">(Fastest Growth)</span></span>
                <span className="font-bold text-brand-darkPink bg-brand-pink/10 px-3 py-1 rounded-md text-sm">25.6%</span>
             </div>
             <div className="flex justify-between items-center pb-1">
                <span className="text-sm text-gray-500">Post-80s</span>
                <span className="font-bold text-gray-400 px-3 py-1 text-sm">26.5%</span>
             </div>
          </div>
      </div>

      {/* Trend List */}
      <div className="col-span-4 row-span-4 bg-white rounded-xl p-6 border border-stone-100 flex flex-col justify-between">
         <div>
            <h3 className="font-serif font-bold text-lg text-brand-text mb-4 flex items-center gap-2">
                <Home className="w-5 h-5 text-gray-600"/> Lifestyle Integration
            </h3>
            <ul className="space-y-3">
                <li className="text-sm flex items-start gap-3 text-gray-600 group">
                   <div className="mt-0.5 p-1 bg-brand-accent/20 rounded text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-3 h-3" />
                   </div>
                   <span className="leading-tight"><strong className="text-brand-text font-bold">58.5%</strong> Create dedicated indoor areas for pets</span>
                </li>
                <li className="text-sm flex items-start gap-3 text-gray-600 group">
                   <div className="mt-0.5 p-1 bg-brand-accent/20 rounded text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-3 h-3" />
                   </div>
                   <span className="leading-tight"><strong className="text-brand-text font-bold">41.1%</strong> Prioritize pet-friendly housing</span>
                </li>
                <li className="text-sm flex items-start gap-3 text-gray-600 group">
                   <div className="mt-0.5 p-1 bg-brand-accent/20 rounded text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-3 h-3" />
                   </div>
                   <span className="leading-tight"><strong className="text-brand-text font-bold">47.9%</strong> Adjust daily schedule for pet needs</span>
                </li>
            </ul>
         </div>
         <div className="text-right flex items-center justify-end gap-1 text-[10px] text-gray-400 uppercase mt-3 font-medium tracking-wider">
            <Search className="w-3 h-3" /> Source: JD Research Institute 2025
         </div>
      </div>

    </div>
  );
};