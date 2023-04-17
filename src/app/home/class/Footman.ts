import { BattleUnit } from "./BattleUnit";

export default class Footman extends BattleUnit{
    override name: string = "Footman";
    override maintain_cost: number = 1;
    override speed: number = 3;
}