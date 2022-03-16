import axios from "axios";
import React, { useState } from "react";
import GameResult from "../../components/GameResult";
import InputField from "../../components/InputField";
import { BASE_URL } from "../../routes";
import * as S from "./styled";

const api = axios.create({
  baseURL: BASE_URL,
});

const HomePage = () => {
  const [gameEnd, setGameEnd] = useState(false);
  const [gameRounds, setGameRounds] = useState("");
  const [gameResult, setGameResult] = useState("");
  const [switchDoor, setSwitchDoor] = useState("false");

  const onClick = async () => {
    try {
      const response = await api.get(`play/${gameRounds}/${switchDoor}`);
      setGameResult(response.data.result);
      setGameEnd(true);
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <div>
      <S.Container>
        <S.RulesContainer>
          <h2>
            Welcome to the <S.Logo>Monty Hall</S.Logo> game
          </h2>
          <S.InfoText>
            The concept of the game is that the player sees three closed doors -
            behind one is a car, and behind the other two are goats. The game
            starts with the player getting to choose a door, without opening it.
            Then the presenter opens one of the two remaining doors (but never
            the one with the car) and shows that this door does not contain
            profit. The player is then given another choice to change the door.
            The question is whether the chances of winning increase if the
            player changes the door.{" "}
          </S.InfoText>
          <S.RulesHeader>RULES</S.RulesHeader>
          <S.InfoText>
            In this game the door of your choice will be randomized as well as
            behind which door the car and the goats are. You will choose how
            many rounds you would like to play and if you want to switch doors
            and then press play for the game to start. After that the game will
            calculate your win rate.
          </S.InfoText>
        </S.RulesContainer>
        {gameEnd ? (
          <GameResult
            gameRounds={gameRounds}
            result={gameResult}
            switchDoor={switchDoor}
            setGameEnd={setGameEnd}
          />
        ) : (
          <InputField
            gameRounds={gameRounds}
            switchDoor={switchDoor}
            setGameRounds={setGameRounds}
            setSwitchDoor={setSwitchDoor}
            onClick={onClick}
          />
        )}
      </S.Container>
    </div>
  );
};

export default HomePage;
