import { Character } from "./Character";

export interface ServiceResponse {
  data: Character[];
  success: boolean;
  message: string;
}
