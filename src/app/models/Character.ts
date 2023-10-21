import { Backpack } from "./Backpack";

export interface Character {
  id: number;
  name: string;
  strength: number;
  backpack: Backpack;
}
