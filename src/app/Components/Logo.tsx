"use client"


export function Logos() {
  const logos = [
    { name: "BIRD", text: "BIRD" },
    { name: "SpaceX", text: `SPACEX` },
    { name: "ElevenLabs", text: "ElevenLabs" },
    { name: "Dribbble", text: "Dribbble" },
    { name: "Miro", text: "miro" },
    { name: "Perplexity", text: "perplexity" },
    { name: "DoorDash", text: "DOORDASH" },
    { name: "Mixpanel", text: "mixpanel" },
  ]

  return (
    <section className="w-full bg-black py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative group">
          {/* Logos grid - blurs on hover */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4 transition-all duration-500 group-hover:blur-lg">
            {logos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center h-24">
                <div className="text-white text-2xl md:text-3xl font-bold">{logo.text}</div>
              </div>
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <span className="text-white text-3xl md:text-5xl font-normal">Meet our clients</span>
          </div>
        </div>
      </div>
    </section>
  )
}
