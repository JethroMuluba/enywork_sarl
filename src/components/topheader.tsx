'use client'
import { BsEnvelope } from "react-icons/bs";
import { HiOutlineMapPin } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";


const TopHeader: React.FC = () => {

    return (
        <div className=" bg-red-600 px-15 flex justify-between text-sm">
            <div className=" flex items-center gap-2">
                <BsEnvelope /> 
                <p className="text-white">contact@enywrk.com</p>
            </div>

            <div className=" flex items-center gap-2">
                <HiOutlineMapPin />
                <p className="text-white">Ancienne Galerie Présidentielle, 6è niveau, Local 6B8, Kinshasa/Gombe</p>
            </div>

            <div className=" flex items-center gap-2">
                <IoCallOutline />
                <p className="text-white">+243 899 467 398</p>
            </div>
        </div>
    )
};

export default TopHeader;