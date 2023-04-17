import { ICorm } from "../interface/ICorm";
import { BattleUnit } from "./BattleUnit";

export default class HorseKnight extends BattleUnit implements ICorm {
    override name: string = "Horse Knight";
    override speed: number = 15;
    corm_const: number = 2
    override maintain_cost: number = 2;
    constructor(){
        super()
        this.maintain_cost += this.corm_const
    }
}