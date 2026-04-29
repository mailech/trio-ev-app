import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-background/50 border-b border-secondary/50"
        >
            <Link to="/" className="text-2xl font-heading font-bold tracking-widest text-textPrimary">
                TR<span className="text-accent">IO</span>
            </Link>
            <nav className="hidden md:flex gap-8 text-sm font-medium text-textPrimary/80">
                <a href="#services" className="hover:text-accent transition-colors">Rentals</a>
                <a href="#network" className="hover:text-accent transition-colors">Lease</a>
                <a href="#services" className="hover:text-accent transition-colors">Transportation</a>
                <a href="#features" className="hover:text-accent transition-colors">About us</a>
            </nav>
            <button className="hidden md:block px-6 py-2 bg-accent text-background font-semibold rounded-full hover:bg-accent/90 transition-colors">
                Contact Sales
            </button>
        </motion.header>
    );
}
