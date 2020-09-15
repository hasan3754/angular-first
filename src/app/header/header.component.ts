
import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';  


@Component({
  selector: 'app-header',
  template: `
  <div class="topnav">
  <a type="button" value="Call First Component Function" (click)="firstComponentFunction()">button one</a> 

</div>
  `,
  styles: [
    `.topnav {
      overflow: hidden;
      background-color: #333;
      transform:translateX(19.8vw)!important;
    }
    
    .topnav a {
     float:left;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
    }
    
    .topnav a:hover {
      background-color: #ddd;
      color: black;
    }
    
    .topnav a.active {
      background-color: #4CAF50;
      color: white;
    }`
  ]
})
export class HeaderComponent implements OnInit {


  constructor(    
    private eventEmitterService: EventEmitterService    
  ) { }    
    
  ngOnInit() {    
  }    
    
  firstComponentFunction(){    
    this.eventEmitterService.onFirstComponentButtonClick();    
  }  


}
