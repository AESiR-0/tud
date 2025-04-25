import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "AI-Generated Avatars",
    description: "Get custom, high-quality avatars for branding, marketing, and engagement.",
  },
  {
    title: "Seamless Ad Integration",
    description: "Run targeted ad campaigns using your avatars across social media platforms.",
  },
  {
    title: "Increased Engagement",
    description: "AI-driven avatars enhance audience interaction and brand recall.",
  },
  {
    title: "Customizable & Scalable",
    description: "From personal avatars to full-fledged brand mascots, we tailor solutions to your needs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-yellow py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8 gap-x-16">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start max-w-sm p-4 bg-white shadow-lg rounded-2xl">
            <CheckCircle className="text-black w-8 h-8 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
