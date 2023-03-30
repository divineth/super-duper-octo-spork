import style from "./footer.module.css";

function Footer() {
  const socialLinks = [
    {
      icon: "/images/twitter.svg",
      url: "https://twitter.com/breadarbitrum?s=21&t=gwoZTRmCgTScJO00keJAMA",
    },
    {
      icon: "/images/discord.svg",
      url: "https://discord.gg/dCXJXYuAue",
    },
    {
      icon: "/images/gitbook.svg",
      url: "https://docs.breadarb.finance",
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.socials}>
          {socialLinks.map((item, index) => (
            <a
              href={item.url}
              key={index}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={item.icon} alt="" className="w-8" />
            </a>
          ))}
        </div>
        <p className="font-inter_reg font-bold">&copy;2023 Bread. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
