/* eslint-disable @typescript-eslint/no-explicit-any */
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Card, Row, Spin } from "antd";
import React from "react";
import axios from "axios";

interface PokeData {
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
  name: string;
}

export const PokemonCard = () => {
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [pokeNumber, setPokeNumber] = React.useState<number>(1);
  const [pokeData, setPokeData] = React.useState<PokeData>();
  const { Meta } = Card;

  const nextPoke = () => {
    setPokeNumber(pokeNumber + 1);
  };
  const previousPoke = () => {
    setPokeNumber(pokeNumber - 1);
  };

  React.useEffect(() => {
    const loader = async () => {
      try {
        setLoading(true);
        const baseUrl: string = "https://pokeapi.co/api/v2";
        const res: any = await axios.get(`${baseUrl}/pokemon/${pokeNumber}`);
        // console.log(res.data);
        return setPokeData(res.data);
      } catch (e: any) {
        return e.message;
      } finally {
        setLoading(false);
      }
    };
    loader();
  }, [pokeNumber]);

  return (
    <>
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        {isLoading ? (
          <Spin size="large" />
        ) : (
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src={pokeData?.sprites.other.home.front_default}
              />
            }
            actions={[
              <LeftOutlined onClick={previousPoke} />,
              <RightOutlined onClick={nextPoke} />,
            ]}
          >
            <Meta
              title={pokeData?.name.toUpperCase()}
              description="This is the description"
            />
          </Card>
        )}
      </Row>
    </>
  );
};
