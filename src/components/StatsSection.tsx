
import { Card, CardContent } from '@/components/ui/card';

const StatsSection = () => {
  const stats = [
    {
      value: "400%",
      label: "Yield Increase",
      description: "Modern hives produce 20-40kg vs 5-10kg traditional",
      color: "text-amber-600"
    },
    {
      value: "98%",
      label: "Export Untapped",
      description: "Kenya exports only 2% of honey production potential",
      color: "text-green-600"
    },
    {
      value: "5km",
      label: "Pollination Radius",
      description: "Environmental impact per hive monetized as carbon credits",
      color: "text-blue-600"
    },
    {
      value: "$2M",
      label: "Capital Gap",
      description: "Investment needed for modern hive adoption",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Opportunity in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kenya's beekeeping sector has massive untapped potential. BeeTrace bridges the gap 
            between traditional practices and modern, sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
