
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, CircleCheck, Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      <Navbar />
      <Hero />
      <StatsSection />
      <FeaturesSection />
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-500 to-green-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Kenyan Beekeeping?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of beekeepers, investors, and environmental champions building a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-3">
                Get Started Now
              </Button>
            </Link>
            <Link to="/track">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-3">
                Track Your Honey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/lovable-uploads/457a733f-f8ef-400c-b010-9d6aa9be9f34.png" alt="BeeTrace" className="h-8 w-auto" />
                <span className="text-xl font-bold">BeeTrace</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Empowering Kenyan beekeepers with blockchain technology for honey traceability, 
                crowdfunding, and environmental impact monetization.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/track" className="hover:text-white transition-colors">Track Honey</Link></li>
                <li><Link to="/invest" className="hover:text-white transition-colors">Invest</Link></li>
                <li><Link to="/credits" className="hover:text-white transition-colors">Carbon Credits</Link></li>
                <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BeeTrace. Built on Internet Computer Protocol (ICP). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
