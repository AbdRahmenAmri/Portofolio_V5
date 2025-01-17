import { T_SOCIAL_MEDIA_LINK } from "@types_def/index";

const SOCIAL_LINKS: T_SOCIAL_MEDIA_LINK[]  = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    url: "https://www.linkedin.com/in/abdrahmen/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true,
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@AbdRahmenAmri",
    url: "https://github.com/AbdRahmenAmri",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
  {
    name: "WhatsApp",
    displayName: "WhatsApp",
    subText: "+216 51 543 503",
    url: "tel:+21651543503",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
    network: "whatsapp"
  },
  {
    name: "Email",
    displayName: "Gmail",
    subText: "abdrahmen.3amri@gmail.com",
    url: "mailto:abdrahmen.3amri@gmail.com",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
  {
    name: "Facebook",
    displayName: "Facebook",
    subText: "@abd.rahmen.581187",
    url: "https://www.facebook.com/abd.rahmen.581187/",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
];


export default SOCIAL_LINKS