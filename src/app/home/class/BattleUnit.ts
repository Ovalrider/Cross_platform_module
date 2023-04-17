export abstract class BattleUnit {
    abstract name : string
    abstract maintain_cost : number 
    abstract speed : number 
    constructor(){
    }
    get_speed() {
        return this.speed
    }
    get_name(){
        return this.name
    }
    get_maintain_cost(){
        return this.maintain_cost
    }
}