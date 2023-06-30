import StyleHeaderButton from "./style";

export interface HeaderButtonProps {
  key: number;
  title: string;
}

export default function HeaderButton({ title }: HeaderButtonProps) {
  return (
    <StyleHeaderButton>
      <button>{title}</button>
    </StyleHeaderButton>
  )
}