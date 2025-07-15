
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
import Footer from '@/components/Footer';

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
            Join thousands of beekeepers, investors, and environmental champions building a sustainable future through our marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/wallet-login">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-3">
                Connect Wallet
              </Button>
            </Link>
            <Link to="/marketplace">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-3">
                Explore Marketplace
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
