import { motion } from 'framer-motion';
import { Shield, Smartphone, PiggyBank, Leaf } from 'lucide-react';

const features = [
    { icon: Smartphone, title: "Smart Fleet Management", desc: "Control and monitor your vehicles via our centralized dashboard." },
    { icon: Shield, title: "Real-time Tracking", desc: "Advanced GPS tracking with predictive maintenance alerts." },
    { icon: PiggyBank, title: "Cost Efficiency", desc: "Reduce total cost of ownership by up to 40% compared to ICE vehicles." },
    { icon: Leaf, title: "Sustainable Mobility", desc: "Zero emissions. 100% powered by clean energy where available." }
];

export function FeatureHighlights() {
    return (
        <section id="features" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row flex-wrap gap-12 justify-center">
                {features.map((feat, i) => (
                    <motion.div
                        key={feat.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 flex-1 min-w-[250px] max-w-[300px]"
                    >
                        <div className="p-3 bg-secondary rounded-xl text-accent shrink-0">
                            <feat.icon size={24} />
                        </div>
                        <div>
                            <h4 className="font-heading font-bold text-lg mb-2 text-textPrimary">{feat.title}</h4>
                            <p className="text-sm text-textPrimary/60 leading-relaxed">{feat.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
