export default function Main() {
    return (
      <section className="relative bg-[#020817] py-24 overflow-hidden mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text">
                From Start to Scale,
                <br />
                Cloud Solutions for
                <br />
                Every Stage of Your Journey
              </h2>
              <p className="text-gray-400 text-lg">
                Save time and cut costs with high-quality cloud services. Enjoy seamless scaling, strong security, and
                easy deployment to keep your business growing.
              </p>
            </div>
  
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-6 relative">
              {/* Server Stack Illustration in Center */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-32 h-48">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-10 bg-blue-600/20 border border-blue-500/30 transform rotate-12 skew-x-12"
                      style={{
                        top: `${i * 20}%`,
                        filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))",
                      }}
                    />
                  ))}
                </div>
              </div>
  
              {/* Metrics */}
              <MetricCard value="99.9%" label="Up-Time Guarantee" color="text-yellow-500" />
              <MetricCard value="100%" label="High-Level Security" color="text-blue-500" />
              <MetricCard value="24/7" label="Expert Support" color="text-blue-500" />
              <MetricCard value="100%" label="Customization" color="text-yellow-500" />
            </div>
          </div>
        </div>
  
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900 opacity-50" />
      </section>
    )
  }
  
  function MetricCard({ value, label, color }: { value: string; label: string; color: string }) {
    return (
      <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 shadow-xl hover:shadow-blue-500/10 transition-shadow duration-300">
        <div className={`text-3xl font-bold mb-2 ${color}`}>{value}</div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    )
  }
  
  