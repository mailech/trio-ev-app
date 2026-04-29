import { motion } from 'framer-motion';

export function CTASection() {
    return (
        <section className="py-32 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-accent/5" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8 text-textPrimary"
                >
                    Power your <span className="text-accent">journey</span> with EV
                </motion.h2>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <button className="px-8 py-4 bg-accent text-background font-bold rounded-full text-lg hover:bg-accent/90 transition-transform hover:scale-105 active:scale-95">
                        Get Started
                    </button>
                    <button className="px-8 py-4 bg-background border border-secondary text-textPrimary font-bold rounded-full text-lg hover:bg-secondary/50 transition-transform hover:scale-105 active:scale-95">
                        Contact Sales
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
