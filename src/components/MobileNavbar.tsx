import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Settings, Menu, X, Contrast } from 'lucide-react';
import { useAccessibility } from '@/contexts/AccessibilityContext';

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isHighContrast, toggleHighContrast, fontSize, setFontSize } = useAccessibility();

  return (
    <>
      {/* Top Bar */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/457a733f-f8ef-400c-b010-9d6aa9be9f34.png" 
              alt="BeeTrace" 
              className="h-8 w-auto" 
            />
            <span className="text-lg font-bold text-foreground">
              BeeTrace
            </span>
          </div>

          {/* Settings Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="h-10 w-10"
            aria-label="Open settings menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Settings className="h-5 w-5" />}
          </Button>
        </div>

        {/* Accessibility Settings Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-card border-b border-border p-4 space-y-4 animate-slide-up">
            {/* High Contrast Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">High Contrast</span>
              <Button
                variant={isHighContrast ? "default" : "outline"}
                size="sm"
                onClick={toggleHighContrast}
                className="flex items-center gap-2"
              >
                <Contrast className="h-4 w-4" />
                {isHighContrast ? 'On' : 'Off'}
              </Button>
            </div>

            {/* Font Size Controls */}
            <div className="space-y-2">
              <span className="text-sm font-medium">Text Size</span>
              <div className="flex gap-2">
                {(['small', 'medium', 'large'] as const).map((size) => (
                  <Button
                    key={size}
                    variant={fontSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFontSize(size)}
                    className="capitalize"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default MobileNavbar;