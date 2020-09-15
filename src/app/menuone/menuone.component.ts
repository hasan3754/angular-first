import { SidebarComponent } from './../sidebar/sidebar.component';
import { Component, OnInit,Input } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';  


@Component({
  selector: 'app-menuone',
  template: `
    <p id="demo">



    {{name}}

    </p>
  `,
  styles: [
    `p{
      margin-left:50vw;
    }`
  ]
})
export class MenuoneComponent implements OnInit {

 name:string;

  constructor(    
    private eventEmitterService: EventEmitterService    
  ) { }    
    
  ngOnInit() {    
    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.firstFunction();   
      });    
    }    
  }    
    
  firstFunction() {    
    this.name="your name";

    document.getElementById("demo").innerHTML = "button one clicked ";

    return "name";
  }   



  


}

