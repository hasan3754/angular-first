
import { Component, OnInit,Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-menutwo',
  template: `
    <p>
   {{hellomenutwo()}}
    </p>
  `,
  styles: [
    `p{
      margin-left:50vw;
    }`
  ]
})
export class MenutwoComponent implements OnInit {


  message:string;

  constructor() { }

  ngOnInit() {
   
  }

  public hellomenutwo(){
  debugger;
    return "menu two is clicked";
  
    }
    
}
