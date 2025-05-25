const steps = [
  {
    step: "01",
    title: "Discover a World of Possibilities",
    description:
      "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
  },
  {
    step: "02",
    title: "Narrowing Down Your Choices",
    description:
      "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    step: "03",
    title: "Personalized Guidance",
    description:
      "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
  {
    step: "04",
    title: "See It for Yourself",
    description:
      "Arrange viewings for the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a comprehensive look at your potential new home.",
  },
  {
    step: "05",
    title: "Making Informed Decisions",
    description:
      "Before making an offer, our team will provide you with a detailed market analysis, helping you understand the property's value and make an informed decision.",
  },
  {
    step: "06",
    title: "Getting the Best Deal",
    description:
      "We'll help you negotiate the best possible deal, ensuring that you get the most value for your investment. Our goal is to make the process as smooth as possible for you.",
  },
]

export default function NavigatingExperience() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Navigating the Estatein Experience</h2>
          <p className="text-gray-400 max-w-3xl">
            At Estatein, we\'ve designed a straightforward process to help you find and purchase your dream home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="text-purple-400 font-bold text-lg mb-2">Step {step.step}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
