
import { Component, OnInit,Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-menuthree',
  template: `
    <p>
    {{message}}  menu three
    </p>
  `,
  styles: [
    `p{
      margin-left:50vw;
    }`
  ]
})
export class MenuthreeComponent implements OnInit {

  message:string;

  constructor() { }

  ngOnInit() {

  }

}
