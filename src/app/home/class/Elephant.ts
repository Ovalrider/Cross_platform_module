import { ICorm } from "../interface/ICorm";
import { BattleUnit } from "./BattleUnit";

export default class Elephant extends BattleUnit implements ICorm{
    override name: string = "Elephant";
    override maintain_cost: number = 0;
    override speed: number = 30;
    corm_const: number = 5
    constructor(){
        super()
        this.maintain_cost += this.corm_const
    }
}