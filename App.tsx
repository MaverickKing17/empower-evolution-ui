import React, { useState, useEffect } from 'react';
import { 
  Wind, Thermometer, Zap, Award, ShieldCheck, 
  Activity, ArrowRight, Fan, Cpu, CheckCircle2,
  Settings, Flame, Snowflake
} from 'lucide-react';

// --- Components ---

// 1. Navigation
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass-panel border-b border-white/5 bg-charcoal-950/80 backdrop-blur-md">
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
        <span className="font-bold text-lg">E</span>
      </div>
      <span className="text-lg font-semibold tracking-tight text-white">Empower</span>
    </div>
    <div className="flex items-center gap-6">
      <button className="hidden text-sm font-medium text-zinc-400 hover:text-white md:block">Technology</button>
      <button className="hidden text-sm font-medium text-zinc-400 hover:text-white md:block">Support</button>
      <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-transform hover:scale-105 hover:bg-zinc-200">
        Get Started
      </button>
    </div>
  </nav>
);

// 2. Trust Bar (Marquee)
const TrustBar = () => {
  const awards = [
    "HomeStars Best of the Best 2024",
    "Google 4.9/5 Star Rated",
    "Lennox Premier Dealer",
    "Top Choice Award Winner",
    "Better Business Bureau A+",
    "HRAI Certified",
    "TSSA Registered"
  ];

  return (
    <div className="w-full overflow-hidden border-y border-white/5 bg-black/20 py-4">
      <div className="flex w-[200%] animate-marquee items-center gap-16 whitespace-nowrap">
        {[...awards, ...awards].map((award, i) => (
          <div key={i} className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-zinc-600">
            <Award className="h-4 w-4" />
            {award}
          </div>
        ))}
      </div>
    </div>
  );
};

// 3. Functional Component: Live System Health (Wireframe)
const LiveSystemWireframe = () => {
  const [active, setActive] = useState(true);
  
  // Simulation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel col-span-1 md:col-span-2 row-span-2 flex flex-col justify-between rounded-3xl p-8 relative overflow-hidden group">
      <div className="z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <h3 className="font-semibold text-zinc-100">Live System Monitor</h3>
          </div>
          <p className="text-sm text-zinc-500">Real-time diagnostic stream</p>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-zinc-400">
          ID: 849-AF-2
        </div>
      </div>

      {/* 2D Wireframe Visual */}
      <div className="relative flex-1 flex items-center justify-center my-6">
        {/* Wireframe Box */}
        <div className="relative h-48 w-full max-w-sm rounded-xl border border-dashed border-zinc-700 bg-zinc-900/50 p-4">
          
          {/* Airflow Lines Animation */}
          <div className="absolute inset-0 overflow-hidden rounded-xl opacity-20">
            <div className="absolute left-0 top-1/4 h-0.5 w-full bg-gradient-to-r from-transparent via-electric-500 to-transparent animate-pulse" style={{ animationDuration: '2s' }}></div>
            <div className="absolute left-0 top-1/2 h-0.5 w-full bg-gradient-to-r from-transparent via-electric-500 to-transparent animate-pulse" style={{ animationDuration: '2.5s' }}></div>
            <div className="absolute left-0 top-3/4 h-0.5 w-full bg-gradient-to-r from-transparent via-electric-500 to-transparent animate-pulse" style={{ animationDuration: '1.8s' }}></div>
          </div>

          {/* Internal Components */}
          <div className="flex h-full justify-between items-center px-6">
             {/* Fan Unit */}
             <div className="flex flex-col items-center gap-2">
                <Fan className={`h-10 w-10 text-zinc-500 ${active ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }} />
                <span className="text-[10px] uppercase tracking-wider text-zinc-600">Blower</span>
             </div>

             {/* Core Unit */}
             <div className="h-24 w-24 rounded-full border border-electric-500/30 bg-electric-500/10 flex items-center justify-center relative">
                <Activity className="h-8 w-8 text-electric-400" />
                <div className="absolute inset-0 rounded-full border border-electric-400 opacity-20 animate-ping"></div>
             </div>

             {/* Output */}
             <div className="flex flex-col items-center gap-2">
                <Flame className={`h-8 w-8 ${active ? 'text-orange-400' : 'text-zinc-600'}`} />
                <span className="text-[10px] uppercase tracking-wider text-zinc-600">Ignition</span>
             </div>
          </div>
        </div>

        {/* Labels connecting to wireframe */}
        <div className="absolute -right-4 top-10 hidden lg:flex items-center gap-2">
           <div className="h-px w-8 bg-zinc-700"></div>
           <div className="text-xs text-emerald-400">System Active</div>
        </div>
      </div>

      {/* Status Data */}
      <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
        <div>
          <p className="text-xs text-zinc-500 mb-1">Airflow Strength</p>
          <div className="text-sm font-medium text-white flex items-center gap-2">
            <Wind className="h-4 w-4 text-electric-400" />
            Strong
          </div>
        </div>
        <div>
          <p className="text-xs text-zinc-500 mb-1">Heating Power</p>
          <div className="text-sm font-medium text-white flex items-center gap-2">
            <Zap className="h-4 w-4 text-amber-400" />
            Optimal
          </div>
        </div>
        <div>
          <p className="text-xs text-zinc-500 mb-1">System Status</p>
          <div className="text-sm font-medium text-emerald-400 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            Active
          </div>
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-electric-600/10 blur-[80px] group-hover:bg-electric-600/20 transition-all duration-500" />
    </div>
  );
};

// 4. Bento Box: Smart System Card
interface SmartSystemProps {
  name: string;
  icon: React.ReactNode;
  score: number;
  status: string;
  color: string;
}

const SmartSystemCard: React.FC<SmartSystemProps> = ({ name, icon, score, status, color }) => (
  <div className="glass-panel flex flex-col justify-between rounded-3xl p-6 transition-all hover:translate-y-[-2px]">
    <div className="flex justify-between items-start">
      <div className={`rounded-full p-3 bg-white/5 border border-white/5 ${color}`}>
        {icon}
      </div>
      <div className="flex flex-col items-end">
        <span className="text-2xl font-bold text-white">{score}%</span>
        <span className="text-[10px] uppercase text-zinc-500">Health Score</span>
      </div>
    </div>
    <div className="mt-8">
      <h4 className="font-medium text-zinc-200">{name}</h4>
      <div className="mt-2 flex items-center gap-2 text-xs text-zinc-400">
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
        {status}
      </div>
    </div>
  </div>
);

// 5. Why Choose Us Card
const ImpactCard: React.FC<{ title: string; subtitle: string; icon: React.ReactNode }> = ({ title, subtitle, icon }) => (
  <div className="glass-panel flex items-center gap-4 rounded-3xl p-5 hover:bg-white/5 transition-colors">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10">
      {React.cloneElement(icon as React.ReactElement, { className: "w-5 h-5 text-zinc-300" })}
    </div>
    <div>
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <p className="text-xs text-zinc-500">{subtitle}</p>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-zinc-200 selection:bg-electric-500/30 overflow-x-hidden">
      <Navbar />

      <main className="relative pt-24 pb-12">
        {/* Background Gradients */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-electric-600/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-indigo-900/10 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          
          {/* Hero Section */}
          <section className="mb-16 text-center">
            <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
              Your Home Intelligence, <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">Perfected.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
              The premium dashboard for modern home climate control. Monitor, optimize, and maintain your comfort systems with military-grade precision.
            </p>
            
            <div className="mt-12 mb-16">
              <TrustBar />
            </div>
          </section>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:grid-rows-2">
            
            {/* 1. Live System Monitor (Large Functional) */}
            <LiveSystemWireframe />

            {/* 2. Smart Furnace */}
            <SmartSystemCard 
              name="Smart Furnace" 
              icon={<Flame className="h-5 w-5" />} 
              score={98} 
              status="Operating efficiently"
              color="text-orange-400"
            />

            {/* 3. Central AC */}
            <SmartSystemCard 
              name="Central AC" 
              icon={<Snowflake className="h-5 w-5" />} 
              score={100} 
              status="Standby Mode"
              color="text-cyan-400"
            />

            {/* 4. Heat Pump */}
            <div className="md:col-span-1 lg:col-start-4 lg:row-start-2">
               <SmartSystemCard 
                  name="Hybrid Heat Pump" 
                  icon={<Cpu className="h-5 w-5" />} 
                  score={94} 
                  status="Optimization required"
                  color="text-electric-400"
               />
            </div>

            {/* 5-8. Why Choose Us (Impact Statements) */}
            <div className="col-span-1 md:col-span-3 lg:col-span-3 lg:row-start-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <ImpactCard 
                title="Support" 
                subtitle="Toronto's Top-Rated" 
                icon={<Award />} 
              />
              <ImpactCard 
                title="Logic" 
                subtitle="Precision Diagnostic" 
                icon={<Cpu />} 
              />
              <ImpactCard 
                title="Speed" 
                subtitle="Same-Day Service" 
                icon={<Zap />} 
              />
              <ImpactCard 
                title="Quality" 
                subtitle="Certified Experts" 
                icon={<ShieldCheck />} 
              />
            </div>

          </div>

          {/* Bottom CTA */}
          <section className="mt-20 flex flex-col items-center justify-center rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-12 text-center backdrop-blur-sm">
             <h2 className="text-2xl font-semibold text-white">Ready to upgrade your comfort?</h2>
             <p className="mt-2 text-zinc-400">Join thousands of Toronto homeowners optimizing their climate.</p>
             <button className="mt-8 flex items-center gap-2 rounded-full bg-electric-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-electric-500 hover:shadow-lg hover:shadow-electric-500/25">
                Book Consultation <ArrowRight className="h-4 w-4" />
             </button>
          </section>

        </div>
      </main>
    </div>
  );
}