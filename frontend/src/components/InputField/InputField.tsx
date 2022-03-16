import React from "react";
import * as S from "./styled";

interface InputFieldProps {
  gameRounds: string;
  switchDoor: string;
  setGameRounds: React.Dispatch<React.SetStateAction<string>>;
  setSwitchDoor: React.Dispatch<React.SetStateAction<string>>;
  onClick: () => void;
}

const InputField = ({
  gameRounds,
  switchDoor,
  setGameRounds,
  setSwitchDoor,
  onClick,
}: InputFieldProps) => {
  return (
    <S.Container>
      <S.FormContainer>
        <label>Game rounds</label>
        <S.TextInput
          type="text"
          required
          value={gameRounds}
          onChange={(e) => setGameRounds(e.target.value)}
        />

        <label>Switch doors?</label>
        <S.SelectContainer
          value={switchDoor}
          onChange={(e) => setSwitchDoor(e.target.value)}
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </S.SelectContainer>
        <S.PlayButton onClick={onClick}>Play</S.PlayButton>
      </S.FormContainer>
    </S.Container>
  );
};

export default InputField;
