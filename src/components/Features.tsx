"use client";

import { features } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              {" "}Modern Teams
            </span>
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Everything you need to build, deploy, and scale your applications 
            with confidence. Our platform provides enterprise-grade tools 
            designed for developer productivity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Feature Showcase */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 md:text-3xl">
              Built for Developers, Designed for Users
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Developer-First API</h4>
                  <p className="text-muted-foreground">
                    RESTful APIs with comprehensive documentation, SDKs, and developer tools.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Real-time Analytics</h4>
                  <p className="text-muted-foreground">
                    Monitor performance, track user behavior, and get actionable insights.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Seamless Integrations</h4>
                  <p className="text-muted-foreground">
                    Connect with your favorite tools and services through our extensive integration library.
                  </p>
                </div>
              </div>
            </div>
            <Button className="mt-8" size="lg">
              Explore All Features
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border bg-background shadow-xl">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7454e556-8f34-40d0-9aec-d1247460522e.png"
                alt="Analytics Dashboard - Comprehensive data visualization with charts, graphs, and real-time metrics"
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div 
                className="hidden w-full h-64 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-muted-foreground"
                style={{display: 'none'}}
              >
                <span>Analytics Preview</span>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-background border rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Live Data</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background border rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}