import { ChangeEvent } from "react";

export type Props = {
    count:number;
    doubleCount:number;
    isShow:boolean;
    handleClick:()=>void;
    handleDisplay:()=>void;
    text:string;
    array:string[];
    handleAdd:()=>void;
    handleChange:(e: ChangeEvent<HTMLInputElement>) => void
  }