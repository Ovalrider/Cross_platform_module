import { BattleUnit } from "./BattleUnit";

export default class Army{
    Army_list : BattleUnit[] = []
    total_maintaince_cost : number = 0
    total_speed : number = 0
    constructor(){
    }
    add_unit(unit: BattleUnit){
        this.Army_list.push(unit)
    }
    pop_unit(){
        this.Army_list.pop()
    }
    calculate_total(){
        if(this.Army_list.length >0){
            this.total_maintaince_cost=0
            this.total_speed=0
            let t = []
            let min:number = this.Army_list[0].get_speed()
            for( let item of this.Army_list){
                this.total_maintaince_cost+= item.get_maintain_cost()
                t.push(item.get_speed())
                if(min > item.get_speed()){
                    min = item.get_speed()
                }
            }
            this.total_speed = min
        }
    }
    get_total_maintaince_cost(){
        return this.total_maintaince_cost
    }
    get_total_speed(){
        return this.total_speed
    }
        
}