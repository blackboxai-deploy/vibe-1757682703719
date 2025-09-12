import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      <div className="flex-1">
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-6">
                About MGX Platform
              </h2>
              <p className="text-lg text-muted-foreground md:text-xl mb-12">
                We're on a mission to democratize access to powerful technology solutions. 
                Our platform combines cutting-edge innovation with user-friendly design 
                to help businesses of all sizes succeed in the digital age.
              </p>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-semibold mb-2">Mission</h3>
                  <p className="text-muted-foreground text-sm">
                    To empower every organization with the tools they need to innovate and thrive.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">👁️</span>
                  </div>
                  <h3 className="font-semibold mb-2">Vision</h3>
                  <p className="text-muted-foreground text-sm">
                    A world where technology barriers don't limit business potential.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-semibold mb-2">Values</h3>
                  <p className="text-muted-foreground text-sm">
                    Innovation, reliability, and customer-first approach in everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Features />

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-6">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                Comprehensive solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Cloud Infrastructure",
                  description: "Scalable and secure cloud solutions for your applications",
                  icon: "☁️",
                },
                {
                  title: "API Development",
                  description: "Custom APIs built for performance and reliability",
                  icon: "🔌",
                },
                {
                  title: "Data Analytics",
                  description: "Turn your data into actionable business insights",
                  icon: "📊",
                },
                {
                  title: "Security Solutions",
                  description: "Enterprise-grade security for your digital assets",
                  icon: "🛡️",
                },
                {
                  title: "DevOps Automation",
                  description: "Streamline your development and deployment processes",
                  icon: "⚙️",
                },
                {
                  title: "Consulting",
                  description: "Expert guidance for your digital transformation journey",
                  icon: "💡",
                },
              ].map((service, index) => (
                <div key={index} className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-xl">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Join thousands of businesses already using MGX Platform to accelerate their digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-primary-foreground/20 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}