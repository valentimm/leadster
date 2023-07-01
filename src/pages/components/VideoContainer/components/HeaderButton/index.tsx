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
      setActiveButton(null); // Desativa o botão se ele já estiver ativo
    } else {
      setActiveButton(buttonKey); // Ativa o botão se ele estiver inativo
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

