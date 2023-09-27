import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-etelek',
  templateUrl: './etelek.component.html',
  styleUrls: ['./etelek.component.css']
})
export class EtelekComponent {
  etelek:any;
  constructor(private base:BaseService){
    this.base.readAll().subscribe(
      {
        next:(adatok)=>this.etelek=adatok,
        error:(e)=>console.log("Hiba a rendszerben: ",e)
      }
    )
  }
}
