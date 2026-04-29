import { Globe, Mail, MessageCircle, Zap } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-secondary/20 border-t border-secondary/50 pt-16 pb-8 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-1">
                    <div className="text-2xl font-heading font-bold tracking-widest text-textPrimary mb-4">
                        TR<span className="text-accent">IO</span>
                    </div>
                    <p className="text-textPrimary/60 text-sm mb-6 max-w-xs">
                        Leading the transition to sustainable mobility with smart, connected, and reliable EV solutions.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-secondary rounded-full text-textPrimary hover:text-accent transition-colors"><Globe size={18} /></a>
                        <a href="#" className="p-2 bg-secondary rounded-full text-textPrimary hover:text-accent transition-colors"><MessageCircle size={18} /></a>
                        <a href="#" className="p-2 bg-secondary rounded-full text-textPrimary hover:text-accent transition-colors"><Mail size={18} /></a>
                    </div>
                </div>
                
                <div>
                    <h4 className="font-heading font-bold text-lg mb-4 text-textPrimary">Services</h4>
                    <ul className="space-y-2 text-sm text-textPrimary/60">
                        <li><a href="#" className="hover:text-accent transition-colors">EV Leasing</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors">Daily Rentals</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors">Corporate Transport</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors">Fleet Management</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-bold text-lg mb-4 text-textPrimary">Company</h4>
                    <ul className="space-y-2 text-sm text-textPrimary/60">
                        <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors">Sustainability</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-bold text-lg mb-4 text-textPrimary">Get the App</h4>
                    <div className="flex flex-col gap-3">
                        <button className="flex items-center justify-center gap-2 bg-secondary border border-secondary hover:border-textPrimary/20 px-4 py-2 rounded-lg transition-colors">
                            <Zap size={20} className="text-accent" />
                            <div className="text-left flex flex-col">
                                <span className="text-[10px] text-textPrimary/60 leading-none">Download on the</span>
                                <span className="text-sm font-semibold leading-tight">App Store</span>
                            </div>
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-secondary border border-secondary hover:border-textPrimary/20 px-4 py-2 rounded-lg transition-colors">
                            <Zap size={20} className="text-accent" />
                            <div className="text-left flex flex-col">
                                <span className="text-[10px] text-textPrimary/60 leading-none">GET IT ON</span>
                                <span className="text-sm font-semibold leading-tight">Google Play</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto pt-8 border-t border-secondary/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-textPrimary/40">
                <p>&copy; {new Date().getFullYear()} Trio Inc. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-textPrimary transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-textPrimary transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
