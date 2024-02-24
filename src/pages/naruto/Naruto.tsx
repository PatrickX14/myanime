import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { NarutoCard } from "../../components/NarutoCard";

interface NartuoPropsType {
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

export const NarutoPage: React.FC<NartuoPropsType> = () => {
  const { data }: any = useLoaderData();
  // console.log(location);

  return (
    <>
      <NarutoCard single={true} data={data} />
    </>
  );
};
