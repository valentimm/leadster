import StyleListLinks from "./style";

export interface ListLinksProps {
  key: number;
  title: string;
  link: string;
}

export default function ListLinks({title, link}: ListLinksProps) {
  return (
    <StyleListLinks>
      <ul>
        <li><a href={link}>{title}</a></li>
      </ul>
    </StyleListLinks>
  )
}