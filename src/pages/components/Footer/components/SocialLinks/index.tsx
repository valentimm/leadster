import StyleSocialLink from "./style";

export interface SocialLinksProps {
  key: number;
  title: string;
  link: string;
  icon: string;
}

export default function SocialLinks( {title, link, icon}: SocialLinksProps) {
  return (
    <StyleSocialLink>
      <span>
        <a href={link}>
        <img src={icon} alt={title} />
        </a>
      </span>
    </StyleSocialLink>
  )
}