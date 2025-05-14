export default function FeaturesSection() {
  const features = [
    {
      icon: "fas fa-map-marked-alt",
      title: "Expanded Map",
      description: "Explore the largest and most detailed open world in GTA history, featuring multiple cities and diverse environments."
    },
    {
      icon: "fas fa-users",
      title: "Multiple Protagonists",
      description: "Play as several unique characters with intertwining storylines and personal missions."
    },
    {
      icon: "fas fa-gamepad",
      title: "Enhanced Gameplay",
      description: "Experience refined controls, improved AI, and new gameplay mechanics for an immersive experience."
    },
    {
      icon: "fas fa-car",
      title: "Vehicle Customization",
      description: "Personalize your rides with extensive customization options and a wider range of vehicles."
    },
    {
      icon: "fas fa-globe",
      title: "Online Multiplayer",
      description: "Connect with friends and enemies in an expanded online world with new modes and activities."
    },
    {
      icon: "fas fa-paint-brush",
      title: "Next-Gen Graphics",
      description: "Cutting-edge visuals with realistic lighting, weather effects, and character animations."
    }
  ];

  return (
    <section className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">GTA 6 Features</h2>
          <p className="text-gray-400">Experience the next evolution of the Grand Theft Auto series</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-dark-secondary rounded-xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="text-primary text-3xl mb-4">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
