import { useState } from 'react';
import MobileLayout from '@/components/MobileLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Thermometer, 
  Scale, 
  Activity, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  MapPin,
  Calendar
} from 'lucide-react';

const BeekeeperDashboard = () => {
  const [selectedHive, setSelectedHive] = useState(1);

  const hives = [
    { 
      id: 1, 
      name: 'Hive Alpha', 
      status: 'healthy', 
      weight: 45.2, 
      temp: 35, 
      humidity: 68,
      lastInspection: '2 days ago'
    },
    { 
      id: 2, 
      name: 'Hive Beta', 
      status: 'warning', 
      weight: 38.7, 
      temp: 37, 
      humidity: 72,
      lastInspection: '5 days ago'
    },
    { 
      id: 3, 
      name: 'Hive Gamma', 
      status: 'healthy', 
      weight: 42.1, 
      temp: 34, 
      humidity: 65,
      lastInspection: '1 day ago'
    },
  ];

  const currentHive = hives.find(h => h.id === selectedHive) || hives[0];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-accent/20 text-accent';
      case 'warning': return 'bg-destructive/20 text-destructive';
      default: return 'bg-muted/20 text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return <CheckCircle className="h-4 w-4" />;
      case 'warning': return <AlertTriangle className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">My Hives</h1>
            <p className="text-muted-foreground flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Nakuru County
            </p>
          </div>
          <Badge className="bg-primary/20 text-primary">
            {hives.length} Active
          </Badge>
        </div>

        {/* Hive Selector */}
        <div className="space-y-2">
          <h3 className="font-medium text-sm text-muted-foreground">Select Hive</h3>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {hives.map((hive) => (
              <Button
                key={hive.id}
                variant={selectedHive === hive.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedHive(hive.id)}
                className="flex-shrink-0 flex items-center gap-2"
              >
                {getStatusIcon(hive.status)}
                {hive.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Selected Hive Details */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between">
              <span>{currentHive.name}</span>
              <Badge className={getStatusColor(currentHive.status)}>
                {currentHive.status}
              </Badge>
            </CardTitle>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              Last inspection: {currentHive.lastInspection}
            </p>
          </CardHeader>
        </Card>

        {/* IoT Data Visualization */}
        <div className="grid grid-cols-1 gap-4">
          {/* Weight Card */}
          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  <span className="font-medium">Weight</span>
                </div>
                <span className="text-2xl font-bold text-primary">{currentHive.weight}kg</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Target: 50kg</span>
                  <span>{Math.round((currentHive.weight / 50) * 100)}%</span>
                </div>
                <Progress value={(currentHive.weight / 50) * 100} className="h-2" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                +2.3kg from last week
              </p>
            </CardContent>
          </Card>

          {/* Temperature Card */}
          <Card className="border-l-4 border-l-accent">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-accent" />
                  <span className="font-medium">Temperature</span>
                </div>
                <span className="text-2xl font-bold text-accent">{currentHive.temp}°C</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Optimal: 32-36°C</span>
                  <span className="text-accent">Normal</span>
                </div>
                <div className="h-2 bg-muted rounded-full">
                  <div 
                    className="h-2 bg-accent rounded-full transition-all"
                    style={{ width: `${Math.min((currentHive.temp / 40) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Humidity Card */}
          <Card className="border-l-4 border-l-secondary">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-secondary" />
                  <span className="font-medium">Humidity</span>
                </div>
                <span className="text-2xl font-bold text-secondary">{currentHive.humidity}%</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Optimal: 60-70%</span>
                  <span className="text-accent">Good</span>
                </div>
                <div className="h-2 bg-muted rounded-full">
                  <div 
                    className="h-2 bg-secondary rounded-full transition-all"
                    style={{ width: `${currentHive.humidity}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button size="lg" className="h-16 flex-col gap-2">
            <Activity className="h-5 w-5" />
            Record Inspection
          </Button>
          <Button variant="outline" size="lg" className="h-16 flex-col gap-2">
            <TrendingUp className="h-5 w-5" />
            View History
          </Button>
        </div>

        {/* Quick Tips */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4">
            <h4 className="font-semibold text-primary mb-2">💡 Tip of the Day</h4>
            <p className="text-sm text-muted-foreground">
              Monitor temperature closely during hot weather. Consider adding ventilation if temperature exceeds 38°C.
            </p>
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  );
};

export default BeekeeperDashboard;