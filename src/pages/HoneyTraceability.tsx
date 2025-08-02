import { useState } from 'react';
import MobileLayout from '@/components/MobileLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  QrCode, 
  MapPin, 
  Calendar, 
  User, 
  Shield, 
  Award,
  CheckCircle,
  Thermometer,
  Scale
} from 'lucide-react';

const HoneyTraceability = () => {
  const [scanResult, setScanResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  // Mock scan result data
  const mockScanData = {
    productId: "BT-NK-2024-001",
    beekeeper: {
      name: "Samuel Kiprop",
      location: "Nakuru County, Kenya",
      experience: "12 years",
      rating: 4.8,
      photo: "/lovable-uploads/457a733f-f8ef-400c-b010-9d6aa9be9f34.png"
    },
    honey: {
      harvestDate: "March 15, 2024",
      weight: "500g",
      moistureContent: "18.2%",
      flowerSource: "Acacia & Wildflowers",
      quality: "Grade A Premium"
    },
    verification: {
      blockchainHash: "0x4f2a...b8c9",
      certifiedOrganic: true,
      labTested: true,
      fairTrade: true
    },
    journey: [
      { date: "Mar 15, 2024", event: "Harvested from Hive Alpha", location: "Nakuru Farm" },
      { date: "Mar 16, 2024", event: "Quality testing completed", location: "Local Lab" },
      { date: "Mar 18, 2024", event: "Packaged & sealed", location: "Processing Center" },
      { date: "Mar 20, 2024", event: "Shipped to retailer", location: "Nairobi" }
    ]
  };

  const handleScan = () => {
    setIsScanning(true);
    // Simulate scanning delay
    setTimeout(() => {
      setScanResult(mockScanData);
      setIsScanning(false);
    }, 2000);
  };

  const ScannerView = () => (
    <div className="p-4 space-y-6">
      <div className="text-center space-y-4">
        <div className="mx-auto w-32 h-32 bg-muted/50 rounded-2xl flex items-center justify-center">
          <QrCode className="h-16 w-16 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Trace Your Honey</h1>
          <p className="text-muted-foreground">
            Scan the QR code on your honey jar to discover its complete journey from hive to home
          </p>
        </div>
      </div>

      <Button 
        size="lg" 
        className="w-full h-16 text-lg"
        onClick={handleScan}
        disabled={isScanning}
      >
        {isScanning ? "Scanning..." : "Scan QR Code"}
      </Button>

      <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
        <h3 className="font-semibold text-primary mb-2">✨ What you'll discover:</h3>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>• Meet your beekeeper</li>
          <li>• See the exact hive location</li>
          <li>• Verify quality certifications</li>
          <li>• Track the complete journey</li>
        </ul>
      </div>
    </div>
  );

  const TraceabilityView = () => (
    <div className="p-4 space-y-6">
      {/* Product Header */}
      <Card className="bg-gradient-to-r from-primary/20 to-accent/20">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Premium Acacia Honey</h1>
              <p className="text-muted-foreground">ID: {scanResult.productId}</p>
              <Badge className="bg-accent/20 text-accent mt-2">
                {scanResult.honey.quality}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Beekeeper Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Meet Your Beekeeper
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">{scanResult.beekeeper.name}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {scanResult.beekeeper.location}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Experience</span>
              <p className="font-medium">{scanResult.beekeeper.experience}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Rating</span>
              <p className="font-medium">⭐ {scanResult.beekeeper.rating}/5</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Honey Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="h-5 w-5" />
            Product Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Harvest Date</span>
              <p className="font-medium flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {scanResult.honey.harvestDate}
              </p>
            </div>
            <div>
              <span className="text-muted-foreground">Weight</span>
              <p className="font-medium">{scanResult.honey.weight}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Moisture</span>
              <p className="font-medium flex items-center gap-1">
                <Thermometer className="h-3 w-3" />
                {scanResult.honey.moistureContent}
              </p>
            </div>
            <div>
              <span className="text-muted-foreground">Source</span>
              <p className="font-medium">{scanResult.honey.flowerSource}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Certifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {scanResult.verification.certifiedOrganic && (
              <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">Organic</span>
              </div>
            )}
            {scanResult.verification.labTested && (
              <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Lab Tested</span>
              </div>
            )}
            {scanResult.verification.fairTrade && (
              <div className="flex items-center gap-2 p-3 bg-secondary/10 rounded-lg">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Fair Trade</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Journey Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Journey Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scanResult.journey.map((step, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  {index < scanResult.journey.length - 1 && (
                    <div className="w-0.5 h-8 bg-border mt-1" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-sm">{step.event}</p>
                      <p className="text-xs text-muted-foreground">{step.location}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{step.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Blockchain Verification */}
      <Card className="bg-muted/30 border-dashed">
        <CardContent className="p-4 text-center">
          <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
          <p className="text-sm font-medium mb-1">Blockchain Verified</p>
          <p className="text-xs text-muted-foreground">
            Hash: {scanResult.verification.blockchainHash}
          </p>
        </CardContent>
      </Card>

      <Button 
        variant="outline" 
        className="w-full"
        onClick={() => setScanResult(null)}
      >
        Scan Another Product
      </Button>
    </div>
  );

  return (
    <MobileLayout>
      {!scanResult ? <ScannerView /> : <TraceabilityView />}
    </MobileLayout>
  );
};

export default HoneyTraceability;
