import { Component } from '@angular/core';
import { Stock } from '../models/stock';

@Component({
  selector: 'app-add-stock',
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent {
    s:Stock=new Stock();
    addHandler(){
    alert(this.s.toString());
             }
  readCode(e:any){
  this.s.code = e.target.value;
  }
  readCompany(e:any){
    this.s.name = e.target.value;
    }
    readLPrice(e:any){
      this.s.initialPrice= e.target.value;
      }
      readFaceValue(e:any){
        this.s.faceValue= e.target.value;
        }
}
