import { Rocket, Phone, RotateCcw, Gift } from 'lucide-react'

export default function ServiceGuarantees() {
    const services = [
        {
            icon: Rocket,
            title: "Free shipping",
            description: "Free shipping on all US order."
        },
        {
            icon: Phone,
            title: "Support 24/7",
            description: "Contact us 24 hours a day."
        },
        {
            icon: RotateCcw,
            title: "100% Money Back",
            description: "You have 30 days to Return."
        },
        {
            icon: Gift,
            title: "Payment Secure",
            description: "We ensure secure payment."
        }
    ]

    return (
        <section className="bg-white py-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                                    <service.icon className="h-6 w-6 text-amber-600" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                                    {service.title}
                                </h3>
                                <p className="text-xs text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
