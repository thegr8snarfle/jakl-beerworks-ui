import { NextPage} from "next";
import {ReactElement, ReactNode} from "react";
import {AppProps} from "next/app";
import {BreweryItem} from "./untappd.model";

export enum Environment {
  dev = 'dev',
  production = 'production'
}

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export interface BreweryEvent {
  id: string;
  type: 'social' | 'food';
  name: string;
  description: string;
  dateFrom: string;
  dateTo: string;
  img: any | null;
}

export interface MenuItem extends BreweryItem {

}