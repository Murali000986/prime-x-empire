import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'motion/react';
import { 
  Gamepad2, 
  MessageSquare, 
  Trophy, 
  ShieldCheck, 
  Users, 
  Zap, 
  Disc as Discord,
  ChevronRight,
  Menu,
  X,
  Star,
  LayoutGrid,
  Music,
  Heart,
  Volume2,
  VolumeX,
  Mic2,
  Coins,
  Calendar,
  Sword,
  Shield,
  Trophy as TrophyIcon
} from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Stats', href: '#stats' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-zinc-950/80 backdrop-blur-xl shadow-2xl' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue p-[2px] shadow-lg shadow-brand-purple/20 group-hover:scale-110 transition-transform duration-500">
            <div className="w-full h-full bg-zinc-950 rounded-[10px] overflow-hidden">
              <img src="/image.png" alt="Prime X Empire Logo" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-white tracking-tighter leading-none group-hover:neon-white transition-all">PRIME <span className="text-brand-purple">X</span> EMPIRE</span>
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em]">Tamil Community</span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2, scale: 1.05 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a
            href="https://discord.gg/527vn4uPFx"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 rounded-full bg-brand-purple text-white text-sm font-semibold hover:bg-brand-purple/80 transition-all flex items-center gap-2 shadow-lg shadow-brand-purple/20"
          >
            <Discord size={18} />
            Join Discord
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 glass border-b p-6 md:hidden flex flex-col gap-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-zinc-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://discord.gg/527vn4uPFx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-brand-purple text-white text-center font-bold flex items-center justify-center gap-2"
            >
              <Discord size={20} />
              Join Discord
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-mesh">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-purple/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-brand-blue" />
            <span className="text-xs font-bold tracking-widest uppercase text-brand-blue">Tamil Gaming Community</span>
          </div>
          
          <motion.div
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.1] neon-white">
              PRIME <span className="text-gradient neon-gradient">X</span> EMPIRE
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium neon-white">
              Join the ultimate Tamil gaming & chill community. Level up your gaming experience with voice chats, events, and a friendly atmosphere.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://discord.gg/527vn4uPFx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-purple text-white font-bold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-brand-purple/40 group"
            >
              <Discord className="group-hover:rotate-12 transition-transform" />
              Join Discord
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl glass text-white font-bold text-lg flex items-center justify-center gap-2 glass-hover"
            >
              Explore Community
              <ChevronRight size={20} />
            </motion.a>
          </div>
        </motion.div>

        {/* Floating Icons */}
        <div className="hidden lg:block">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-20 left-10 p-4 glass rounded-2xl"
          >
            <Gamepad2 className="text-brand-purple w-8 h-8" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-40 left-20 p-4 glass rounded-2xl"
          >
            <MessageSquare className="text-brand-blue w-8 h-8" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-40 right-10 p-4 glass rounded-2xl"
          >
            <Trophy className="text-yellow-500 w-8 h-8" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 glass rounded-[40px] p-10 md:p-16 border-brand-purple/20"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-purple/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-3xl" />
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            THE <span className="text-gradient neon-gradient">EMPIRE</span> STORY
          </motion.h2>
          <motion.p variants={itemVariants} className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 font-medium">
            PRIME X EMPIRE is the premier destination for Tamil gamers worldwide. We've built a sanctuary where passion for gaming meets cultural connection. Whether you're a competitive pro or a casual player, there's a place for you in our empire.
          </motion.p>
          
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: <Users className="text-brand-blue" />, title: "5K+ Members", desc: "Active Community" },
              { icon: <Heart className="text-brand-purple" />, title: "Friendly", desc: "Toxic Free" },
              { icon: <Music className="text-brand-blue" />, title: "24/7 Music", desc: "Chill Vibes" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-2">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold">{item.title}</h4>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturesZone = () => {
  const games = [
    { 
      id: "VAL", 
      title: "Valorant", 
      genre: "Tactical FPS", 
      color: "from-red-500/20 to-rose-600/20",
      image: "/games/valorant.png",
      stats: ["5v5 Gameplay", "Agent Skills"]
    },
    { 
      id: "BGMI", 
      title: "BGMI", 
      genre: "Battle Royale", 
      color: "from-orange-500/20 to-amber-600/20",
      image: "/games/bgmi.png",
      stats: ["Squad Survivors", "Global Pro"]
    },
    { 
      id: "FF", 
      title: "Free Fire", 
      genre: "Weekly Scrims", 
      desc: "₹ Cash Prizes",
      color: "from-yellow-400/20 to-orange-500/20",
      image: "/games/freefire.jpg",
      stats: ["Mobile Elite", "Daily Tourneys"]
    },
    { 
      id: "COD", 
      title: "Call of Duty", 
      genre: "Mobile/PC", 
      color: "from-zinc-500/20 to-slate-700/20",
      image: "/games/cod.jpg",
      stats: ["Fast Paced", "Pro League"]
    },
    { 
      id: "MC", 
      title: "Minecraft", 
      genre: "Survival", 
      color: "from-emerald-500/20 to-green-600/20",
      image: "/games/mc.jpg",
      stats: ["Creative World", "Survive & Build"]
    },
    { 
      id: "₹", 
      title: "Prize Pool", 
      genre: "Total Rewards", 
      color: "from-brand-purple/20 to-indigo-600/20",
      stats: ["Monthly Caps", "Direct Payouts"]
    }
  ];

  const subFeatures = [
    { icon: <Calendar size={20} />, text: "Weekly Scrims" },
    { icon: <Coins size={20} />, text: "Cash Prizes" },
    { icon: <Sword size={20} />, text: "Team Formation" },
    { icon: <Mic2 size={20} />, text: "HD Voice" }
  ];

  return (
    <section id="gaming" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
                GAMING <br />
                <span className="text-gradient neon-gradient uppercase">Headquarters</span>
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                Elite isolated voice channels engineered for competitive gaming. Experience crystal-clear audio, zero latency, and dedicated spaces for every title. Squad up with Tamil gamers worldwide.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {subFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-zinc-300 font-medium">
                    <div className="w-10 h-10 rounded-xl glass border-brand-purple/20 flex items-center justify-center text-brand-purple shadow-lg shadow-brand-purple/10">
                      {feat.icon}
                    </div>
                    {feat.text}
                  </div>
                ))}
              </div>

              <motion.a
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                href="https://discord.gg/527vn4uPFx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-white text-black font-black text-xl shadow-2xl hover:shadow-white/20 transition-all group"
              >
                Join Gaming Division
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>

          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {games.map((game, i) => (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass rounded-3xl relative overflow-hidden group cursor-pointer border-white/5 hover:border-brand-purple/30 transition-all min-h-[220px]"
                >
                  {/* Background Image/Gradient */}
                  {game.image ? (
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={game.image} 
                        alt={game.title} 
                        className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent`} />
                    </div>
                  ) : (
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${game.color} opacity-10 blur-2xl group-hover:opacity-30 transition-opacity`} />
                  )}
                  
                  <div className="relative z-10 p-5 h-full flex flex-col">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${game.color} flex items-center justify-center text-white font-black text-xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      {game.id}
                    </div>
                    <h4 className="text-white font-bold text-lg mb-1">{game.title}</h4>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-4">{game.genre}</p>
                    
                    {game.desc && (
                      <div className="mb-4 inline-flex px-2 py-1 rounded bg-brand-purple/20 text-brand-purple text-[10px] font-bold uppercase tracking-widest border border-brand-purple/30 w-fit">
                        {game.desc}
                      </div>
                    )}

                    <div className="mt-auto space-y-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                      {game.stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[10px] text-zinc-400 font-medium whitespace-nowrap overflow-hidden">
                          <div className="w-1 h-1 rounded-full bg-brand-blue" />
                          {stat}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Rules = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  const rules = [
    "Respect all members and staff.",
    "No toxicity, hate speech, or bullying.",
    "No spamming or self-promotion.",
    "Keep conversations in appropriate channels.",
    "No NSFW content allowed.",
    "Follow Discord's Terms of Service."
  ];

  return (
    <section id="rules" className="py-24 bg-brand-dark/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass p-10 md:p-16 rounded-[40px] border-brand-blue/20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 text-center neon-white">Server <span className="text-brand-blue neon-blue">Rules</span></h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {rules.map((rule, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-blue/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-blue font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-zinc-300 font-medium">{rule}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Gaming Zone",
      desc: "Dedicated channels for BGMI, Valorant, GTA V, and more. Find your squad in seconds.",
      color: "from-brand-purple to-purple-400"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Chill & Talk",
      desc: "High-quality voice channels and music bots for the perfect chill vibe after a long day.",
      color: "from-brand-blue to-cyan-400"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Events & Giveaways",
      desc: "Weekly tournaments, movie nights, and exciting giveaways for active members.",
      color: "from-yellow-500 to-orange-400"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Level System",
      desc: "Earn XP by chatting and unlock exclusive roles, perks, and server permissions.",
      color: "from-emerald-500 to-teal-400"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Safe Community",
      desc: "Active moderation team ensuring a toxic-free and friendly environment for all.",
      color: "from-rose-500 to-pink-400"
    },
    {
      icon: <LayoutGrid className="w-8 h-8" />,
      title: "Custom Roles",
      desc: "Express yourself with unique self-assignable roles based on your interests.",
      color: "from-indigo-500 to-blue-400"
    }
  ];

  return (
    <section id="features" className="py-24 bg-brand-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 neon-white">Empire <span className="text-gradient neon-gradient">Features</span></h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">Discover what makes PRIME X EMPIRE the best Tamil Discord community.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.1)"
              }}
              className="glass p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${f.color} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity`} />
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 neon-white">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Members Count", value: 5420, suffix: "+" },
    { label: "Online Users", value: 850, suffix: "+" },
    { label: "Active Events", value: 12, suffix: "" },
    { label: "Server Level", value: 3, suffix: "" }
  ];

  const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
      if (hasStarted) {
        let start = 0;
        const end = value;
        const duration = 2000;
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        return () => clearInterval(timer);
      }
    }, [hasStarted, value]);

    return (
      <motion.span 
        onViewportEnter={() => setHasStarted(true)}
        className="text-4xl md:text-6xl font-black text-white neon-white"
      >
        {count}{suffix}
      </motion.span>
    );
  };

  return (
    <section id="stats" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((s, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center glass p-8 rounded-3xl group transition-all"
            >
              <Counter value={s.value} suffix={s.suffix} />
              <p className="text-brand-blue font-bold tracking-widest uppercase text-xs mt-4 group-hover:text-white transition-colors">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Gallery = () => null; // Removed as per request to remove images

const OverRiser = () => {
  const profiles = [
    {
      name: "RIZZ",
      id: "rizz",
      avatar: "/rizz.webp",
      link: "https://discord.com/channels/@me/1442015786745991289",
      role: "Elite Member",
      stats: { level: 85, rank: "Immortal" }
    },
    {
      name: "HULK",
      id: "hulk",
      avatar: "/hulk.gif",
      link: "https://discord.com/channels/@me/1447248571286950122",
      role: "Admin",
      stats: { level: 92, rank: "Radiant" }
    },
    {
      name: "VENOM",
      id: "venom",
      avatar: "/venom.webp",
      link: "https://discord.com/channels/@me/1420720149757165638",
      role: "Moderator",
      stats: { level: 78, rank: "Global Elite" }
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden" id="over-riser">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            OVER <span className="text-gradient neon-gradient uppercase">RISER</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            The legendary warriors leading the Tamil gaming empire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass p-1 group relative overflow-hidden rounded-[32px] border-white/5 hover:border-brand-purple/50 transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden rounded-[28px]">
                <img 
                  src={p.avatar} 
                  alt={p.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-3xl font-black text-white tracking-tighter">{p.name}</h3>
                    <div className="px-3 py-1 rounded-full bg-brand-purple/20 border border-brand-purple/30 text-brand-purple text-[10px] font-bold uppercase tracking-widest">
                      {p.role}
                    </div>
                  </div>
                  
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="flex-1 text-center py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                      <p className="text-zinc-500 text-[8px] uppercase font-bold tracking-widest">Level</p>
                      <p className="text-white font-black">{p.stats.level}</p>
                    </div>
                    <div className="flex-1 text-center py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                      <p className="text-brand-blue text-[8px] uppercase font-bold tracking-widest">Rank</p>
                      <p className="text-white font-black text-xs">{p.stats.rank}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Overlay Glow */}
              <div className="absolute inset-0 bg-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-purple/10 blur-[120px]" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="glass p-12 md:p-20 rounded-[40px] text-center border-brand-purple/20">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            READY TO JOIN THE <span className="text-gradient neon-gradient">EMPIRE?</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Don't miss out on the most active Tamil gaming community. Your new squad is waiting for you.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://discord.gg/527vn4uPFx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-12 py-6 rounded-2xl bg-brand-purple text-white font-black text-2xl shadow-2xl shadow-brand-purple/50 group"
          >
            <Discord size={32} className="group-hover:rotate-12 transition-transform" />
            JOIN NOW
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-purple to-brand-blue p-[1px] flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-zinc-950 rounded-[7px] overflow-hidden">
                <img src="/image.png" alt="Prime X Empire Logo" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="text-lg font-bold tracking-tighter text-white neon-white">
              PRIME <span className="text-brand-blue neon-blue">X</span> EMPIRE
            </span>
          </div>
          
          <div className="flex gap-8 text-zinc-500 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} PRIME X EMPIRE. All rights reserved.
            </div>
            <a 
              href="https://www.mrixtech.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-600 hover:text-brand-blue transition-colors group flex items-center gap-2"
            >
              Made with <span className="text-zinc-500 group-hover:text-brand-blue">MRIXTECH</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = 'auto';
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-brand-dark flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 rounded-3xl bg-gradient-to-br from-brand-purple to-brand-blue p-[2px] shadow-2xl shadow-brand-purple/40 mb-8"
          >
            <div className="w-full h-full bg-zinc-950 rounded-[22px] overflow-hidden">
              <img src="/image.png" alt="Prime X Empire Logo" className="w-full h-full object-cover animate-pulse" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-1 bg-brand-purple rounded-full overflow-hidden"
          >
            <div className="h-full bg-brand-blue w-full animate-pulse" />
          </motion.div>
          <p className="mt-4 text-brand-blue font-bold tracking-[0.3em] text-xs uppercase neon-blue">Loading Empire</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* The Neon "Shade" - Large trailing pulsing glow */}
      <motion.div
        className="fixed top-0 left-0 w-[450px] h-[450px] rounded-full bg-brand-purple/15 blur-[120px] pointer-events-none z-[9998] hidden md:block"
        animate={{ 
          x: mousePosition.x - 225, 
          y: mousePosition.y - 225, 
          scale: isHovering ? 1.4 : [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ 
          x: { type: "spring", stiffness: 40, damping: 25, mass: 0.8 },
          y: { type: "spring", stiffness: 40, damping: 25, mass: 0.8 },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Secondary Neon Glow - Closer to center */}
      <motion.div
        className="fixed top-0 left-0 w-[150px] h-[150px] rounded-full bg-brand-blue/20 blur-[60px] pointer-events-none z-[9998] hidden md:block"
        animate={{ 
          x: mousePosition.x - 75, 
          y: mousePosition.y - 75, 
          scale: isHovering ? 1.8 : 1
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30, mass: 0.5 }}
      />
      
      {/* The Outer Neon Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-brand-blue/60 pointer-events-none z-[9999] hidden md:block"
        style={{ boxShadow: '0 0 15px rgba(0, 163, 255, 0.4), inset 0 0 10px rgba(0, 163, 255, 0.2)' }}
        animate={{ 
          x: mousePosition.x - 20, 
          y: mousePosition.y - 20,
          scale: isHovering ? 2.5 : 1,
          borderColor: isHovering ? 'rgba(168, 85, 247, 0.8)' : 'rgba(0, 163, 255, 0.6)'
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      
      {/* The Center Neon Point */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,1),0_0_30px_rgba(168,85,247,0.8)] pointer-events-none z-[9999] hidden md:block"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4, scale: isHovering ? 0.4 : 1 }}
        transition={{ type: "spring", stiffness: 1000, damping: 30 }}
      />
    </>
  );
};

// --- Main App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Audio play failed:", err));
      }
    }
  }, [isMuted]);

  return (
    <div className="relative min-h-screen bg-transparent selection:bg-brand-purple/30">
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple to-brand-blue z-[60] origin-left"
        style={{ scaleX }}
      />
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted={true}
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
      >
        <source src="/prime_logo_intro_in.mov" type="video/quicktime" />
        <source src="/prime_logo_intro_in.mov" type="video/mp4" />
      </video>

      {/* Background Audio */}
      <audio
        ref={audioRef}
        loop
        playsInline
        src="/Home.mp3"
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <LoadingScreen />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Features />
          <Stats />
          <FeaturesZone />
          <Rules />
          <OverRiser />
          <CTA />
        </main>
        <Footer />
      </div>

      {/* Floating Sound Control */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="fixed bottom-6 right-6 z-[60] glass p-4 rounded-full flex items-center justify-center hover:bg-white/10 transition-all group shadow-2xl border border-brand-purple/20 hover:border-brand-purple/50 hidden md:flex"
        aria-label="Toggle Sound"
      >
        {isMuted ? (
          <VolumeX className="text-zinc-400 group-hover:text-white" size={24} />
        ) : (
          <Volume2 className="text-brand-purple" size={24} />
        )}
      </button>

      {/* Mobile Sound Control - Positioned above safe area */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="fixed bottom-24 right-4 z-[60] glass p-3 rounded-full md:hidden flex items-center justify-center shadow-lg border border-brand-purple/20"
        aria-label="Toggle Sound"
      >
        {isMuted ? (
          <VolumeX className="text-zinc-400" size={20} />
        ) : (
          <Volume2 className="text-brand-purple" size={20} />
        )}
      </button>
    </div>
  );
}
