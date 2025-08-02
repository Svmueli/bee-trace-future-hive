import { useState } from 'react';
import MobileLayout from '@/components/MobileLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { 
  MapPin, 
  Calendar, 
  Users, 
  Target, 
  TrendingUp,
  Heart,
  Share2,
  DollarSign,
  Award,
  CheckCircle
} from 'lucide-react';

const CrowdfundingProject = () => {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [isInvesting, setIsInvesting] = useState(false);

  const project = {
    id: "PRJ-001",
    title: "Grace's Hive Expansion Project",
    beekeeper: {
      name: "Grace Wanjiku",
      location: "Meru County, Kenya",
      experience: "8 years",
      rating: 4.9,
      projects: 3,
      photo: "/lovable-uploads/457a733f-f8ef-400c-b010-9d6aa9be9f34.png"
    },
    funding: {
      target: 5000,
      raised: 3250,
      investors: 42,
      daysLeft: 18,
      minInvestment: 25,
      expectedROI: 15
    },
    description: "Help me expand from 10 to 25 hives to increase honey production and support my community. Your investment will help purchase new hives, protective equipment, and initial bee colonies.",
    milestones: [
      { title: "Purchase 15 new hives", amount: 2000, completed: true },
      { title: "Buy protective equipment", amount: 500, completed: true },
      { title: "Acquire bee colonies", amount: 1500, completed: false },
      { title: "Setup and training", amount: 1000, completed: false }
    ],
    returns: {
      month6: "5% honey share",
      month12: "15% total return",
      ongoing: "Quarterly honey dividends"
    }
  };

  const progressPercentage = (project.funding.raised / project.funding.target) * 100;

  const handleInvest = () => {
    setIsInvesting(true);
    // Simulate investment process
    setTimeout(() => {
      setIsInvesting(false);
      // Show success state
    }, 2000);
  };

  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        {/* Project Header */}
        <Card className="bg-gradient-to-r from-primary/20 to-accent/20">
          <CardContent className="p-6">
            <div className="space-y-4">
              <Badge className="bg-accent/20 text-accent w-fit">
                Active Campaign
              </Badge>
              <h1 className="text-xl font-bold text-foreground">{project.title}</h1>
              <p className="text-muted-foreground text-sm">{project.description}</p>
            </div>
          </CardContent>
        </Card>

        {/* Funding Progress */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-primary">
                ${project.funding.raised.toLocaleString()}
              </span>
              <span className="text-sm text-muted-foreground">
                of ${project.funding.target.toLocaleString()} goal
              </span>
            </div>
            
            <Progress value={progressPercentage} className="h-3" />
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-lg font-bold text-foreground">{Math.round(progressPercentage)}%</p>
                <p className="text-xs text-muted-foreground">Funded</p>
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">{project.funding.investors}</p>
                <p className="text-xs text-muted-foreground">Investors</p>
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">{project.funding.daysLeft}</p>
                <p className="text-xs text-muted-foreground">Days Left</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Beekeeper Profile */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Meet the Beekeeper
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{project.beekeeper.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {project.beekeeper.location}
                </p>
                <div className="flex items-center gap-4 mt-2 text-sm">
                  <span>⭐ {project.beekeeper.rating}/5</span>
                  <span>{project.beekeeper.experience} experience</span>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                "I've been beekeeping for 8 years and currently manage 10 hives. This expansion will help me triple my production and create employment for 5 local women in my community."
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Investment Returns */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Expected Returns
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                <span className="text-sm font-medium">6 Months</span>
                <span className="text-sm font-bold text-primary">{project.returns.month6}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg">
                <span className="text-sm font-medium">12 Months</span>
                <span className="text-sm font-bold text-accent">{project.returns.month12}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-secondary/10 rounded-lg">
                <span className="text-sm font-medium">Ongoing</span>
                <span className="text-sm font-bold text-secondary">{project.returns.ongoing}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Milestones */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Project Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {project.milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    milestone.completed ? 'bg-accent text-white' : 'bg-muted'
                  }`}>
                    {milestone.completed ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <span className="text-xs">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${
                      milestone.completed ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {milestone.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      ${milestone.amount.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Investment Section */}
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-6 space-y-4">
            <div className="text-center">
              <h3 className="font-bold text-lg text-foreground mb-2">Make an Investment</h3>
              <p className="text-sm text-muted-foreground">
                Minimum investment: ${project.funding.minInvestment}
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(e.target.value)}
                  className="pl-10 h-12 text-lg"
                  min={project.funding.minInvestment}
                />
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                {[50, 100, 250].map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    size="sm"
                    onClick={() => setInvestmentAmount(amount.toString())}
                    className="h-10"
                  >
                    ${amount}
                  </Button>
                ))}
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full h-12"
              onClick={handleInvest}
              disabled={isInvesting || !investmentAmount || parseInt(investmentAmount) < project.funding.minInvestment}
            >
              {isInvesting ? "Processing..." : `Invest $${investmentAmount || "0"}`}
            </Button>

            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                Save
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Trust & Security */}
        <Card className="bg-muted/30 border-dashed">
          <CardContent className="p-4 text-center space-y-2">
            <Award className="h-8 w-8 text-primary mx-auto" />
            <p className="text-sm font-medium">Secure & Transparent</p>
            <p className="text-xs text-muted-foreground">
              All investments are blockchain-verified and smart contract protected
            </p>
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  );
};

export default CrowdfundingProject;
