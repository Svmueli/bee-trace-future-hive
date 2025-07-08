
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, CirclePlus, User } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Blockchain Traceability",
      description: "Create immutable NFT records for every honey batch, combating adulteration and building consumer trust.",
      badge: "Core Feature",
      badgeColor: "bg-amber-100 text-amber-700",
      benefits: ["Prevent honey adulteration", "Boost export confidence", "Increase market value"]
    },
    {
      icon: CirclePlus,
      title: "Tokenized Crowdfunding",
      description: "Fund modern hives through $BEE tokens, enabling beekeepers to increase yields from 5-10kg to 20-40kg.",
      badge: "Innovation",
      badgeColor: "bg-green-100 text-green-700",
      benefits: ["Access to modern equipment", "Higher honey yields", "Sustainable returns"]
    },
    {
      icon: User,
      title: "Carbon Credit Trading",
      description: "Monetize pollination services within a 5km radius per hive through blockchain-verified carbon credits.",
      badge: "Environmental",
      badgeColor: "bg-blue-100 text-blue-700",
      benefits: ["Additional revenue stream", "Environmental impact tracking", "Climate action rewards"]
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Three Pillars of Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform addresses Kenya's beekeeping challenges through innovative blockchain solutions, 
            creating value for beekeepers, investors, and the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-amber-400 to-amber-500">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge className={feature.badgeColor}>
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
