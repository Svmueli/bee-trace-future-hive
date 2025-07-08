
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, CircleCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-amber-200">
                <CircleCheck className="h-3 w-3 mr-1" />
                Powered by Internet Computer (ICP)
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Trace, Fund, <span className="text-amber-500">Sustain</span> Kenyan Honey
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Empower 2 million Kenyan beekeepers with blockchain-powered honey traceability, 
                tokenized crowdfunding, and pollination carbon credits.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dashboard">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3">
                  Join Platform
                  <ArrowUp className="ml-2 h-4 w-4 rotate-45" />
                </Button>
              </Link>
              <Link to="/track">
                <Button size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 font-semibold px-8 py-3">
                  Track Your Honey
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">11K</div>
                <div className="text-sm text-gray-600">Current Tonnes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">55K</div>
                <div className="text-sm text-gray-600">Potential Tonnes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">2M</div>
                <div className="text-sm text-gray-600">Beekeepers</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/457a733f-f8ef-400c-b010-9d6aa9be9f34.png" 
                alt="BeeTrace Platform" 
                className="w-full max-w-md mx-auto h-auto"
              />
            </div>
            
            {/* Floating cards */}
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Honey Traced</span>
              </div>
              <div className="text-lg font-bold text-green-600 mt-1">1,247 Batches</div>
            </div>
            
            <div className="absolute bottom-8 left-4 bg-white rounded-lg shadow-lg p-4 animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <span className="text-sm font-medium">$BEE Raised</span>
              </div>
              <div className="text-lg font-bold text-amber-600 mt-1">$45,890</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
