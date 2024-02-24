/* eslint-disable @typescript-eslint/no-explicit-any */
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Card, Row } from "antd";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export const PokemonCard = () => {
  const [pokeNumber, setPokeNumber] = useState<number>(1);
  const { pokemonData } = useLoaderData() as any;
  const { Meta } = Card;
  console.log(pokemonData);

  const nextPoke = () => {
    setPokeNumber(pokeNumber + 1);
  };
  const previousPoke = () => {
    setPokeNumber(pokeNumber - 1);
  };

  return (
    <>
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src={pokemonData?.sprites.other.home.front_default}
            />
          }
          actions={[
            <LeftOutlined onClick={nextPoke} />,
            <RightOutlined onClick={previousPoke} />,
          ]}
        >
          <Meta
            title={pokemonData?.name.toUpperCase()}
            description="This is the description"
          />
        </Card>
      </Row>
    </>
  );
};
