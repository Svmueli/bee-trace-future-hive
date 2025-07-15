
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
        {/* Centered Content */}
        <div className="text-center space-y-8">
          <div className="space-y-6 animate-slide-up max-w-4xl mx-auto">
            <Badge variant="secondary" className="glass-card bg-amber-100/80 text-amber-700 border-amber-200/50 backdrop-blur-sm px-4 py-2">
              <CircleCheck className="h-4 w-4 mr-2" />
              Powered by Internet Computer (ICP)
              <Sparkles className="h-3 w-3 ml-2 text-amber-500" />
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Trace, Fund, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-green-500">Sustain</span> Kenyan Honey
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Empower 2 million Kenyan beekeepers with blockchain-powered honey traceability, 
              tokenized crowdfunding, and pollination carbon credits.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.2s'}}>
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
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200/50 animate-slide-up max-w-2xl mx-auto" style={{animationDelay: '0.4s'}}>
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
      </div>
    </section>
  );
};

export default Hero;
