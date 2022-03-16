import React from "react";
import * as S from "./styled";

interface GameResultProps {
  gameRounds: string;
  result: string;
  switchDoor: string;
  setGameEnd: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameResult = ({
  gameRounds,
  result,
  switchDoor,
  setGameEnd,
}: GameResultProps) => {
  const rounds = parseInt(gameRounds);
  const wins = parseInt(result);
  const losses = rounds - wins;
  const winPercentage = Math.round((wins / rounds) * 100);

  return (
    <S.Container>
      <S.ResultHeader>RESULT</S.ResultHeader>
      {switchDoor === "true" ? (
        <S.ResultDoorSwitches>SWITCHED DOOR</S.ResultDoorSwitches>
      ) : null}

      <S.ResultContainer>
        <S.ResultNames>
          Game rounds: <S.ResultNumber>{gameRounds}</S.ResultNumber>
        </S.ResultNames>
        <S.ResultNames>
          Wins: <S.ResultNumber>{result}</S.ResultNumber>
        </S.ResultNames>
        <S.ResultNames>
          Losses: <S.ResultNumber>{losses}</S.ResultNumber>
        </S.ResultNames>
        <S.ResultNames>
          Win percentage: <S.ResultNumber>{winPercentage}%</S.ResultNumber>
        </S.ResultNames>
      </S.ResultContainer>

      <S.PlayButton onClick={() => setGameEnd(false)}>Play again</S.PlayButton>
    </S.Container>
  );
};

export default GameResult;
