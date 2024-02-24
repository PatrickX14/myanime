import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { NarutoCard } from "../../components/NarutoCard";

export interface NartuoPropsType {
  type: "clan" | "singlecharacter" | "multiplecharacter";
}

export const NartuoLoader = async () => {
  try {
    const baseUrl: string = "https://narutodb.xyz/api/character";
    const res = await axios.get(`${baseUrl}`);
    // console.log(params);
    return {
      success: true,
      data: res.data,
    };
  } catch (err) {
    return {
      success: false,
      data: null,
    };
  }
};

export const NarutoPage: React.FC<NartuoPropsType> = (props) => {
  const { data }: any = useLoaderData();
  // console.log(location);

  return (
    <>
      {props.type === "clan" ? (
        <NarutoCard single={true} data={data} type={"clan"} />
      ) : props.type === "singlecharacter" ? (
        <NarutoCard single={true} data={data} type={"singlecharacter"} />
      ) : (
        <NarutoCard single={true} data={data} type={"clan"} />
      )}
    </>
  );
};
