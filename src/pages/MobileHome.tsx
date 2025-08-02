import { useState, useEffect } from 'react';
import MobileLayout from '@/components/MobileLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Layers, MapPin, Calendar, Droplets, Coins } from 'lucide-react';

const MobileHome = () => {
  const [userRole, setUserRole] = useState<'beekeeper' | 'investor' | null>(null);

  useEffect(() => {
    const role = localStorage.getItem('userRole') as 'beekeeper' | 'investor' | null;
    setUserRole(role);
  }, []);

  const BeekeeperDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">Habari Samuel!</h1>
        <p className="text-muted-foreground">Your hives are doing well today</p>
        <Badge variant="outline" className="mt-3 bg-primary/10 text-primary border-primary/20">
          <MapPin className="h-3 w-3 mr-1" />
          Nakuru County
        </Badge>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="border-l-4 border-l-primary">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Hives</p>
                <p className="text-2xl font-bold text-foreground">12</p>
              </div>
              <Layers className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-accent">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold text-foreground">45kg</p>
              </div>
              <Droplets className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Recent Activity
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div>
                <p className="font-medium text-sm">Hive #7 Inspection</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
              <Badge className="bg-accent/20 text-accent">Healthy</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div>
                <p className="font-medium text-sm">Honey Harvest</p>
                <p className="text-xs text-muted-foreground">Yesterday</p>
              </div>
              <Badge className="bg-primary/20 text-primary">8.5kg</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button size="lg" className="h-16 flex-col gap-2">
          <Layers className="h-5 w-5" />
          Track Hive
        </Button>
        <Button variant="outline" size="lg" className="h-16 flex-col gap-2">
          <TrendingUp className="h-5 w-5" />
          View Earnings
        </Button>
      </div>
    </div>
  );

  const InvestorDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">Welcome Back!</h1>
        <p className="text-muted-foreground">Supporting 24 beekeepers across Kenya</p>
      </div>

      {/* Portfolio Overview */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-4">Portfolio Overview</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total Invested</span>
              <span className="font-bold text-lg">$2,450</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Expected Returns</span>
              <span className="font-bold text-lg text-accent">$3,185</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>68%</span>
              </div>
              <Progress value={68} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Investments */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-4">Active Investments</h3>
          <div className="space-y-3">
            <div className="p-3 bg-muted/50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium text-sm">Samuel's Apiary</p>
                  <p className="text-xs text-muted-foreground">Nakuru County</p>
                </div>
                <Badge className="bg-accent/20 text-accent">Active</Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span>$350 invested</span>
                <span className="text-accent">+12% ROI</span>
              </div>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium text-sm">Grace's Hives</p>
                  <p className="text-xs text-muted-foreground">Meru County</p>
                </div>
                <Badge className="bg-primary/20 text-primary">Harvesting</Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span>$500 invested</span>
                <span className="text-accent">+8% ROI</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button size="lg" className="h-16 flex-col gap-2">
          <TrendingUp className="h-5 w-5" />
          New Investment
        </Button>
        <Button variant="outline" size="lg" className="h-16 flex-col gap-2">
          <Coins className="h-5 w-5" />
          View Returns
        </Button>
      </div>
    </div>
  );

  return (
    <MobileLayout>
      <div className="p-4 pb-8">
        {userRole === 'beekeeper' ? <BeekeeperDashboard /> : <InvestorDashboard />}
      </div>
    </MobileLayout>
  );
};

export default MobileHome;