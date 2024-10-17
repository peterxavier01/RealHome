import {
  AiOutlineTwitter,
  AiOutlineGooglePlus,
  AiOutlineMail,
} from "react-icons/ai";
import { MdOutlineFax } from "react-icons/md";
import { FaTumblr, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IconType } from "react-icons/lib";

import { cn } from "@/lib/utils";

const CTA = () => {
  return (
    <div className="flex flex-wrap items-center gap-1">
      <Icon Icon={FaFacebookF} className="bg-blue-900" />
      <Icon Icon={FaTumblr} className="bg-blue-800" />
      <Icon Icon={AiOutlineTwitter} className="bg-blue-400" />
      <Icon Icon={AiOutlineGooglePlus} className="bg-red-600" />
      <Icon Icon={FaPinterestP} className="bg-red-500" />
      <Icon Icon={AiOutlineMail} className="bg-purple-500" />
      <Icon Icon={MdOutlineFax} className="bg-green-400" />
      <Icon Icon={FaPlus} className="bg-orange-500 rounded-full" />
    </div>
  );
};

export default CTA;

interface IconProps {
  Icon: IconType;
  className?: string;
}

const Icon = ({ Icon, className }: IconProps) => (
  <div className={cn("rounded text-white p-2 cursor-pointer", className)}>
    <Icon size={20} />
  </div>
);
