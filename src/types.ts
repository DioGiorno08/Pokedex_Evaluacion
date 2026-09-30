export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
  height: number;
  weight: number;
  ability: string;
}

export type RootStack = {
  Student: undefined;
  Explore: undefined;
  Detail: { pokemon: Pokemon };
};
