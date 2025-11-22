import React from 'react';
import { InsightDashboard } from './components/InsightDashboard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-stone-100 flex items-center justify-center p-4 font-sans selection:bg-brand-pink selection:text-white overflow-hidden">
      <div className="w-full max-w-[1600px] aspect-video bg-brand-bg shadow-2xl rounded-xl overflow-hidden border border-stone-200 relative">
        <InsightDashboard />
      </div>
    </div>
  );
};

export default App;