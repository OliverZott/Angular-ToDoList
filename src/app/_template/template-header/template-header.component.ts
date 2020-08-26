import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-header',
  // template: '<h2>Hallo</h2> <button>blub</button>'
  templateUrl: './template-header.component.html',
  styleUrls: ['./template-header.component.sass']
})
export class TemplateHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
