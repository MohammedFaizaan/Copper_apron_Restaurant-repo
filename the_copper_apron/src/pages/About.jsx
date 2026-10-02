export default function About() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Head Chef & Founder",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=400",
      bio: "15+ years of culinary experience across top international kitchens."
    },
    {
      name: "Sophia Chen",
      role: "Nutritionist & Menu Director",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=400",
      bio: "Passionate about combining organic, wholesome ingredients with delicious flavor."
    }
  ];

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#EC9B3B] py-12 px-6 md:px-20">
      {/* Hero Banner */}
      <section className="max-w-4xl mx-auto text-center bg-[#292828] p-10 rounded-2xl border-2 border-[#EC9B3B] shadow-xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Kitchen</h1>
        <p className="text-lg md:text-xl text-[#cf8a35] leading-relaxed">
          Crafting exceptional dining experiences with authentic flavors, organic ingredients, and culinary passion.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        <div className="bg-[#292828] p-8 rounded-xl border border-amber-500/30">
          <h2 className="text-2xl font-bold mb-3 text-white">Our Mission</h2>
          <p className="text-[#cf8a35] leading-relaxed">
            To serve high-quality, nutritious gourmet meals prepared fresh every single day, while maintaining sustainable and eco-friendly sourcing practices.
          </p>
        </div>

        <div className="bg-[#292828] p-8 rounded-xl border border-amber-500/30">
          <h2 className="text-2xl font-bold mb-3 text-white">Our Values</h2>
          <p className="text-[#cf8a35] leading-relaxed">
            Uncompromising freshness, culinary creativity, and continuous care for customer health and satisfaction drive everything we put on the plate.
          </p>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Meet the Minds Behind the Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-[#292828] border border-amber-500/20 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-32 h-32 rounded-full object-cover border-2 border-[#EC9B3B]"
              />
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sm text-amber-400 font-semibold mb-2">{member.role}</p>
                <p className="text-[#cf8a35] text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}