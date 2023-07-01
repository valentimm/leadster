import { useState } from 'react';
import StyleHeaderButton from "./style";

export interface HeaderButtonProps {
  buttonKey: number;
  title: string;
}


export default function HeaderButton({ buttonKey, title }: HeaderButtonProps) {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleClick = () => {
    if (activeButton === buttonKey) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonKey);
    }
  };

  return (
    <StyleHeaderButton>
      <button
        className={activeButton === buttonKey ? 'active' : ''}
        onClick={handleClick}
      >
        {title}
      </button>
    </StyleHeaderButton>
  );
}

