'use client'
import { Mail, Phone, MapPin } from "lucide-react";



const TopHeader: React.FC = () => {

    return (
        <div className="bg-gradient-to-r from-[#320001] to-[#BD2222] py-2 hidden md:block px-15">
            <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
                <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-white" />
                    <span className="text-xs font-thin tracking-wide  text-white">contact@enywork.com</span>
                </div>

                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-white" />
                    <span className="text-xs tracking-wide font-thin text-white">
                    Ancienne Galerie Présidentielle, 6è niveau, Local 6B8, Kinshasa/Gombe
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-white" />
                    <span className="text-xs tracking-wide font-thin text-white">+243 899 467 398</span>
                </div>
            </div>
      </div>
    )
};

export default TopHeader;