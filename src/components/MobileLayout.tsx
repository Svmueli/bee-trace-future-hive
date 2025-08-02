import { ReactNode } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import MobileNavbar from '@/components/MobileNavbar';
import BottomNavigation from '@/components/BottomNavigation';

interface MobileLayoutProps {
  children: ReactNode;
  showNavbar?: boolean;
  showBottomNav?: boolean;
  className?: string;
}

const MobileLayout = ({ 
  children, 
  showNavbar = true, 
  showBottomNav = true,
  className = "min-h-screen bg-background" 
}: MobileLayoutProps) => {
  return (
    <div className={className}>
      <Toaster />
      <Sonner />
      {showNavbar && <MobileNavbar />}
      <main className={`flex-1 ${showBottomNav ? 'pb-20' : ''}`}>
        {children}
      </main>
      {showBottomNav && <BottomNavigation />}
    </div>
  );
};

export default MobileLayout;