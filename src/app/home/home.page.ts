import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import Army from './class/Army';
import HorseKnight from './class/HorseKnight';
import Elephant from './class/Elephant';
import Footman from './class/Footman';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  army?: Army
  speed_total: number = 0
  maintaince_cost_total: number =0
  constructor() {}
  calculate(a:any,b:any,c:any){
    this.army = new Army()
    this.speed_total = 0
    this.maintaince_cost_total=0
    let n1 = parseInt(a)
    let n2 = parseInt(b)
    let n3 = parseInt(c)
    if(isNaN(n1) || isNaN(n2) || isNaN(n3)){
      throw new Error("Args are NaN!")
    }
    for(let j = 0;j<n1;j++){
      this.army.add_unit(new HorseKnight())
    }
    for(let j = 0;j<n2;j++){
      this.army.add_unit(new Elephant())
    }
    for(let j = 0;j<n3;j++){
      this.army.add_unit(new Footman())
    }
    this.army.calculate_total()
    this.speed_total = this.army.get_total_speed()
    this.maintaince_cost_total = this.army.get_total_maintaince_cost()
  }

}
