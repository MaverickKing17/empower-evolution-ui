import React, { useState, useEffect } from 'react';
import { 
  Wind, Thermometer, Zap, Award, ShieldCheck, 
  Activity, ArrowRight, Fan, Cpu, CheckCircle2,
  Settings, Flame, Snowflake, Plus, Minus,
  AlertTriangle, RefreshCw, ChevronRight, BarChart3,
  Droplets, Waves
} from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

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

// 3. Functional Component: Live System Health (Enhanced Wireframe with Controls)
const LiveSystemWireframe = () => {
  const [active, setActive] = useState(true);
  const [fanSpeed, setFanSpeed] = useState(2); // 0: Off, 1: Low, 2: Med, 3: High
  const [targetTemp, setTargetTemp] = useState(72);
  const [mode, setMode] = useState<'heat' | 'cool' | 'fan'>('heat');
  const [aqi, setAqi] = useState(14);
  const [humidity, setHumidity] = useState(42);

  // Sync active state with fan speed
  useEffect(() => {
    setActive(fanSpeed > 0);
  }, [fanSpeed]);

  // Simulate slight AQI and Humidity fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setAqi(prev => Math.max(8, Math.min(45, prev + (Math.random() > 0.5 ? 1 : -1))));
      setHumidity(prev => Math.max(30, Math.min(55, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getFanSpeedLabel = (speed: number) => {
    if (speed === 0) return 'System Off';
    if (speed === 1) return 'Low Intensity';
    if (speed === 2) return 'Balanced';
    return 'Full Power';
  };

  const getAnimationDuration = (speed: number) => {
    if (speed === 0) return '0s';
    if (speed === 1) return '4s';
    if (speed === 2) return '2s';
    return '0.8s'; // High speed
  };

  const modeColor = mode === 'heat' ? 'text-orange-400' : mode === 'cool' ? 'text-cyan-400' : 'text-emerald-400';
  const glowColor = mode === 'heat' ? 'bg-orange-500/20' : mode === 'cool' ? 'bg-cyan-500/20' : 'bg-emerald-500/20';

  return (
    <div className="glass-panel col-span-1 md:col-span-2 row-span-2 flex flex-col rounded-3xl p-6 relative overflow-hidden group">
      {/* Header Section */}
      <div className="z-10 flex justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="relative flex h-2.5 w-2.5">
              <span className={`absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 ${active ? 'animate-ping' : ''}`}></span>
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${active ? 'bg-emerald-500' : 'bg-zinc-600'}`}></span>
            </span>
            <h3 className="font-semibold text-zinc-100">Live System Monitor</h3>
          </div>
          <p className="text-sm text-zinc-500">Intelligent HVAC Telemetry</p>
        </div>
        <div className="flex gap-2">
            <div className="flex flex-col items-end px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[9px] uppercase tracking-wider text-zinc-500">AQI Index</span>
                <span className={`text-sm font-bold ${aqi < 50 ? 'text-emerald-400' : 'text-amber-400'}`}>{aqi} <span className="text-[10px] font-normal text-zinc-500 uppercase ml-0.5">Good</span></span>
            </div>
            <div className="hidden sm:flex flex-col items-end px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[9px] uppercase tracking-wider text-zinc-500">Humidity</span>
                <span className="text-sm font-bold text-zinc-200">{humidity}%</span>
            </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 flex-1 z-10">
        {/* Left: Wireframe Visual */}
        <div className="relative flex-1 flex items-center justify-center min-h-[240px] bg-zinc-900/30 rounded-2xl border border-white/5 overflow-hidden">
          {/* Wireframe Box */}
          <div className="relative h-48 w-full max-w-[280px] rounded-xl border border-dashed border-zinc-700 bg-zinc-900/50 p-4 transition-colors duration-500">
            
            {/* Airflow Lines Animation - Only if active */}
            {active && (
                <div className="absolute inset-0 overflow-hidden rounded-xl opacity-20">
                  <div className={`absolute left-0 top-1/4 h-0.5 w-full bg-gradient-to-r from-transparent via-${mode === 'heat' ? 'orange' : mode === 'cool' ? 'cyan' : 'emerald'}-500 to-transparent animate-pulse`} style={{ animationDuration: '2s' }}></div>
                  <div className={`absolute left-0 top-1/2 h-0.5 w-full bg-gradient-to-r from-transparent via-${mode === 'heat' ? 'orange' : mode === 'cool' ? 'cyan' : 'emerald'}-500 to-transparent animate-pulse`} style={{ animationDuration: '2.5s' }}></div>
                  <div className={`absolute left-0 top-3/4 h-0.5 w-full bg-gradient-to-r from-transparent via-${mode === 'heat' ? 'orange' : mode === 'cool' ? 'cyan' : 'emerald'}-500 to-transparent animate-pulse`} style={{ animationDuration: '1.8s' }}></div>
                </div>
            )}

            {/* Internal Components */}
            <div className="flex h-full justify-between items-center px-4">
               {/* Fan Unit */}
               <div className="flex flex-col items-center gap-2">
                  <Fan className={`h-10 w-10 text-zinc-500 ${active ? 'animate-spin' : ''}`} style={{ animationDuration: getAnimationDuration(fanSpeed) }} />
                  <span className="text-[10px] uppercase tracking-wider text-zinc-600">Blower</span>
               </div>

               {/* Core Unit */}
               <div className={`h-24 w-24 rounded-full border border-white/5 flex items-center justify-center relative transition-all duration-700 ${glowColor}`}>
                  {mode === 'heat' && <Flame className={`h-8 w-8 transition-colors ${active ? 'text-orange-400' : 'text-zinc-600'}`} />}
                  {mode === 'cool' && <Snowflake className={`h-8 w-8 transition-colors ${active ? 'text-cyan-400' : 'text-zinc-600'}`} />}
                  {mode === 'fan' && <Waves className={`h-8 w-8 transition-colors ${active ? 'text-emerald-400' : 'text-zinc-600'}`} />}
                  {active && <div className={`absolute inset-0 rounded-full border ${mode === 'heat' ? 'border-orange-400' : mode === 'cool' ? 'border-cyan-400' : 'border-emerald-400'} opacity-20 animate-ping`}></div>}
               </div>

               {/* Output Sensors */}
               <div className="flex flex-col items-center gap-2">
                  <div className="flex flex-col gap-1 items-center">
                    <Thermometer className="h-5 w-5 text-zinc-600" />
                    <div className="h-4 w-1 bg-zinc-800 rounded-full overflow-hidden">
                        <div className={`w-full bg-gradient-to-t from-transparent to-white/40 transition-all duration-1000`} style={{ height: active ? '70%' : '10%' }}></div>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-600">Sensor A2</span>
               </div>
            </div>
          </div>
          
           {/* Overlay Stats */}
           <div className="absolute bottom-4 left-4 flex flex-col gap-1">
                <div className="bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-mono text-zinc-400 border border-white/10">
                    MODE: <span className={`uppercase font-bold ${modeColor}`}>{mode}</span>
                </div>
           </div>
           <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-mono text-zinc-400 border border-white/10">
              {active ? `${fanSpeed * 450} RPM` : '0 RPM'}
           </div>
        </div>

        {/* Right: Controls */}
        <div className="w-full md:w-60 flex flex-col justify-between gap-3">
           
           {/* Mode Selector */}
           <div className="grid grid-cols-3 gap-1 p-1 bg-black/40 rounded-xl border border-white/5">
                {[
                    { id: 'heat', icon: Flame, color: 'hover:text-orange-400', activeClass: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
                    { id: 'cool', icon: Snowflake, color: 'hover:text-cyan-400', activeClass: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
                    { id: 'fan', icon: Waves, color: 'hover:text-emerald-400', activeClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' }
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setMode(item.id as any)}
                        className={`flex flex-col items-center justify-center py-2 rounded-lg border border-transparent transition-all ${mode === item.id ? item.activeClass : `text-zinc-500 ${item.color} hover:bg-white/5`}`}
                    >
                        <item.icon className="h-4 w-4 mb-1" />
                        <span className="text-[9px] uppercase font-bold tracking-tighter">{item.id}</span>
                    </button>
                ))}
           </div>

           {/* Temp Control */}
           <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center relative overflow-hidden">
              <span className="text-xs text-zinc-500 uppercase tracking-wider mb-2 z-10">Target Temp</span>
              <div className="flex items-center gap-5 mb-1 z-10">
                  <button 
                      onClick={() => setTargetTemp(t => t - 1)}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                      <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-4xl font-bold text-white tabular-nums">{targetTemp}°</span>
                  <button 
                       onClick={() => setTargetTemp(t => t + 1)}
                       className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                      <Plus className="h-4 w-4" />
                  </button>
              </div>
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-${mode === 'heat' ? 'orange' : mode === 'cool' ? 'cyan' : 'emerald'}-500/50 to-transparent w-full transition-all duration-700`}></div>
           </div>

           {/* Fan Control - Slider Refined */}
           <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider">Fan Intensity</span>
                  <span className="text-xs font-semibold text-electric-400 bg-electric-400/10 px-2 py-0.5 rounded-full">{fanSpeed}</span>
              </div>
              <div className="px-1 relative">
                <input 
                  type="range" 
                  min="0" 
                  max="3" 
                  step="1" 
                  value={fanSpeed} 
                  onChange={(e) => setFanSpeed(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-electric-500 focus:outline-none focus:ring-2 focus:ring-electric-500/20"
                />
                <div className="flex justify-between mt-3">
                    <span className={`text-[10px] font-medium transition-colors ${fanSpeed === 0 ? 'text-zinc-200' : 'text-zinc-600'}`}>OFF</span>
                    <span className={`text-[10px] font-medium transition-colors ${fanSpeed === 3 ? 'text-zinc-200' : 'text-zinc-600'}`}>MAX</span>
                </div>
              </div>
              <div className="mt-3 text-[10px] text-center text-zinc-500 font-medium italic">
                {getFanSpeedLabel(fanSpeed)}
              </div>
           </div>

           {/* Status Badge */}
           <div className={`flex items-center justify-center gap-2 p-3 rounded-xl border transition-all duration-300 ${active ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'bg-zinc-800/50 border-zinc-700 text-zinc-500'}`}>
              <CheckCircle2 className="h-4 w-4" />
              <span className="text-sm font-medium">{active ? `Active • ${mode.charAt(0).toUpperCase() + mode.slice(1)}ing` : 'Standby'}</span>
           </div>

        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[80px] transition-all duration-1000 pointer-events-none ${active ? (mode === 'heat' ? 'bg-orange-600/10' : mode === 'cool' ? 'bg-cyan-600/10' : 'bg-emerald-600/10') : 'bg-zinc-600/5'}`} />
    </div>
  );
};

// 4. Predictive Maintenance Module
const PredictiveMaintenance = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [data, setData] = useState([
    { day: 'Mon', efficiency: 98 },
    { day: 'Tue', efficiency: 97 },
    { day: 'Wed', efficiency: 98 },
    { day: 'Thu', efficiency: 96 },
    { day: 'Fri', efficiency: 92 },
    { day: 'Sat', efficiency: 88 }, // Drop
    { day: 'Sun', efficiency: 85 }, // Projected
  ]);

  const handleScan = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
    }, 2500);
  };

  return (
    <div className="glass-panel col-span-1 flex flex-col justify-between rounded-3xl p-6 relative overflow-hidden">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-electric-500/10 rounded-lg">
            <BarChart3 className="h-5 w-5 text-electric-400" />
          </div>
          <div>
            <h4 className="font-semibold text-white leading-tight">Predictive AI</h4>
            <p className="text-[10px] uppercase tracking-wider text-zinc-500">Maintenance Forecast</p>
          </div>
        </div>
        {analyzing ? (
          <RefreshCw className="h-4 w-4 text-electric-400 animate-spin" />
        ) : (
          <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
        )}
      </div>

      {/* Mini Chart */}
      <div className="h-24 w-full -ml-2 mb-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Tooltip 
              contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a', fontSize: '12px' }}
              itemStyle={{ color: '#fff' }}
              cursor={{ stroke: 'rgba(255,255,255,0.1)' }}
            />
            <Line 
              type="monotone" 
              dataKey="efficiency" 
              stroke="#fbbf24" // Amber for warning
              strokeWidth={2} 
              dot={false}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3">
        <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-3">
           <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-amber-200">Efficiency Drop Detected</p>
                <p className="text-[10px] text-amber-500/80 leading-relaxed mt-1">
                  Compressor motor displaying irregular vibration patterns. 85% probability of failure within 14 days.
                </p>
              </div>
           </div>
        </div>
        
        <button 
          onClick={handleScan}
          disabled={analyzing}
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 py-2 text-xs font-medium text-white transition-colors border border-white/5"
        >
          {analyzing ? 'Scanning System...' : 'Schedule Proactive Service'}
          {!analyzing && <ChevronRight className="h-3 w-3" />}
        </button>
      </div>
    </div>
  );
};


// 5. Bento Box: Smart System Card
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

// 6. Why Choose Us Card
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

            {/* 4. Predictive Maintenance Module */}
            <PredictiveMaintenance />

            {/* 5. Heat Pump (Moved) */}
            <div className="md:col-span-1 lg:col-start-4 lg:row-start-2">
               <SmartSystemCard 
                  name="Hybrid Heat Pump" 
                  icon={<Cpu className="h-5 w-5" />} 
                  score={94} 
                  status="Optimization required"
                  color="text-electric-400"
               />
            </div>

            {/* 6. Why Choose Us (Impact Statements) */}
            <div className="col-span-1 md:col-span-3 lg:col-span-4 lg:row-start-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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