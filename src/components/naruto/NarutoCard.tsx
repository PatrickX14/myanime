import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Card, Row, Image, Col } from "antd";
import React from "react";
import { NartuoPropsType } from "../../pages/naruto/Naruto";

interface CardType extends NartuoPropsType {
  data: {
    characters: {
      name: string;
      images: string[];
    }[];
  };
  single: boolean;
}

interface ItemType {
  name: string;
  images: string[];
}

export const NarutoCard: React.FC<CardType> = (props) => {
  // console.log(props.data);
  const { Meta } = Card;
  return (
    <>
      <Row
        justify="center"
        align="middle"
        // gutter={8}
        style={{ height: "100vh" }}
      >
        <Col>
          {props.single ? (
            <Card
              style={{ width: 300 }}
              cover={
                <img alt="example" src={props.data.characters[0].images[0]} />
              }
              actions={[<LeftOutlined />, <RightOutlined />]}
            >
              <Meta
                title={props.data.characters[0].name}
                description="This is the description"
              />
            </Card>
          ) : (
            props.data.characters.map((item: ItemType, index: number) => {
              return (
                <Card
                  style={{ width: 300 }}
                  cover={
                    <Image alt="example" src={item.images[0]} preview={false} />
                  }
                  key={index}
                >
                  <Meta
                    title={item.name}
                    description="This is the description"
                  />
                </Card>
              );
            })
          )}
        </Col>
      </Row>
    </>
  );
};
