
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, CircleCheck, Sparkles, Hexagon } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-green-50 to-blue-50"></div>
        
        {/* Animated honeycomb pattern */}
        <div className="absolute inset-0 honeycomb-pattern animate-honeycomb-shift"></div>
        
        {/* Dense pattern overlay */}
        <div className="absolute inset-0 honeycomb-pattern-dense opacity-50"></div>
        
        {/* Geometric accent shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 opacity-10">
          <Hexagon className="w-full h-full text-amber-500 animate-geometric-rotate" />
        </div>
        <div className="absolute bottom-20 left-20 w-24 h-24 opacity-10">
          <Hexagon className="w-full h-full text-green-500 animate-geometric-rotate" style={{animationDelay: '2s'}} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6 animate-slide-up">
              <Badge variant="secondary" className="glass-card bg-amber-100/80 text-amber-700 border-amber-200/50 backdrop-blur-sm px-4 py-2">
                <CircleCheck className="h-4 w-4 mr-2" />
                Powered by Internet Computer (ICP)
                <Sparkles className="h-3 w-3 ml-2 text-amber-500" />
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Trace, Fund, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-green-500">Sustain</span> Kenyan Honey
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Empower 2 million Kenyan beekeepers with blockchain-powered honey traceability, 
                tokenized crowdfunding, and pollination carbon credits.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <Link to="/dashboard">
                <Button size="lg" className="btn-modern bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300">
                  Join Platform
                  <ArrowUp className="ml-2 h-5 w-5 rotate-45" />
                </Button>
              </Link>
              <Link to="/track">
                <Button size="lg" variant="outline" className="btn-modern border-2 border-green-500 text-green-600 hover:bg-green-50 font-semibold px-8 py-4 h-auto glass-card transition-all duration-300">
                  Track Your Honey
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200/50 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="text-center group">
                <div className="text-3xl font-bold text-amber-600 group-hover:scale-110 transition-transform duration-300">11K</div>
                <div className="text-sm text-gray-600 font-medium">Current Tonnes</div>
                <div className="w-8 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-2 rounded-full"></div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-green-600 group-hover:scale-110 transition-transform duration-300">55K</div>
                <div className="text-sm text-gray-600 font-medium">Potential Tonnes</div>
                <div className="w-8 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mt-2 rounded-full"></div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">2M</div>
                <div className="text-sm text-gray-600 font-medium">Beekeepers</div>
                <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-2 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual */}
          <div className="relative animate-slide-up" style={{animationDelay: '0.3s'}}>
            {/* Main image container */}
            <div className="relative z-10">
              <div className="glass-card rounded-3xl p-8 shadow-2xl">
                <img 
                  src="/lovable-uploads/457a733f-f8ef-400c-b010-9d6aa9be9f34.png" 
                  alt="BeeTrace Platform" 
                  className="w-full max-w-md mx-auto h-auto rounded-2xl"
                />
              </div>
            </div>
            
            {/* Enhanced floating cards with modern design */}
            <div className="absolute top-8 right-8 glass-card rounded-2xl shadow-xl p-6 animate-float animate-pulse-glow border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full shadow-lg"></div>
                <span className="text-sm font-semibold text-gray-800">Honey Traced</span>
              </div>
              <div className="text-2xl font-bold text-green-600 mt-2">1,247 Batches</div>
              <div className="w-full h-1 bg-gradient-to-r from-green-200 to-green-400 rounded-full mt-2"></div>
            </div>
            
            <div className="absolute bottom-12 left-8 glass-card rounded-2xl shadow-xl p-6 animate-float animate-pulse-glow border border-white/20" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full shadow-lg"></div>
                <span className="text-sm font-semibold text-gray-800">$BEE Raised</span>
              </div>
              <div className="text-2xl font-bold text-amber-600 mt-2">$45,890</div>
              <div className="w-full h-1 bg-gradient-to-r from-amber-200 to-amber-400 rounded-full mt-2"></div>
            </div>

            {/* Geometric background elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 opacity-20">
              <Hexagon className="w-full h-full text-amber-400 animate-geometric-rotate" style={{animationDelay: '3s'}} />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-20">
              <Hexagon className="w-full h-full text-green-400 animate-geometric-rotate" style={{animationDelay: '4s'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
