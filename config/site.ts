export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Kayna | VTuber TH",
  description: "Kayna VTuber – พลังบวกผ่านไลฟ์สด เกม และการพูดคุย 💖",

  navItems: [
    {
      label: "หน้าแรก",
      href: "/",
    },
    {
      label: "เกี่ยวกับ",
      href: "/about",
    },
    {
      label: "สตรีมสด",
      href: "/livestreams",
    },
    {
      label: "วิดีโอ",
      href: "/videos",
    },
    {
      label: "ติดต่อ",
      href: "/contact",
    },
  ],

  navMenuItems: [
    {
      label: "โปรไฟล์",
      href: "/profile",
    },
    {
      label: "แดชบอร์ด",
      href: "/dashboard",
    },
    {
      label: "สตรีมของฉัน",
      href: "/my-streams",
    },
    {
      label: "ตั้งค่า",
      href: "/settings",
    },
    {
      label: "ออกจากระบบ",
      href: "/logout",
    },
  ],

  links: {
    github: "https://github.com/yourusername/kayna-vtuber",
    twitter: "https://x.com/kaynavtuber",
    youtube: "https://www.youtube.com/@KaynaVtuberTH",
    facebook: "https://www.facebook.com/KaynaVTB",
    discord: "https://discord.gg/YOUR_DISCORD",
    sponsor: "https://ko-fi.com/kayna",
  },
};
