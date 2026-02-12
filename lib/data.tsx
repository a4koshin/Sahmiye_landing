import { IconType } from "react-icons";
import {
  FaDollarSign,
  FaHome,
  FaKey,
} from "react-icons/fa";

interface HomeData {
  title: string;
  description: string;
  cta: string;
  icon: IconType;
}

export const homeCards: HomeData[] = [
  {
    title: "Rent a Home",
    description:
      "Find your next home faster and easier by browsing thousands of verified rental listings and connecting with trusted agents.",
    cta: "Start Renting",
    icon: FaKey,
  },
  {
    title: "Buy a Home",
    description:
      "Our experienced real estate agents guide you through every step of the buying process, helping you make smart decisions and avoid future risks.",
    cta: "Explore Homes",
    icon: FaHome,
  },
  {
    title: "Sell a Home",
    description:
      "We help you achieve a successful sale from start to finish, from pricing and marketing your property to closing the deal with confidence.",
    cta: "Sell Confidently",
    icon: FaDollarSign,
  },
];
