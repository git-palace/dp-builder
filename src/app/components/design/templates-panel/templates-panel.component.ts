import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates-panel',
  templateUrl: './templates-panel.component.html',
  styleUrls: ['./templates-panel.component.scss']
})
export class TemplatesPanelComponent implements OnInit {

  template_title: string = "Text templates";
  template_arr: any;

  constructor() { 
    this.template_arr = [{
      title: 'Email Title like H1 tag'
    }, {
      title: 'Sub title 1 (h3 tag)'
    }, {
      title: 'Sub title 2 (h6 tag)'
    }, {
      title: 'Body // Paragraph //'
    }, {
      title: 'Captions "quaotations"'
    }]
  }

  ngOnInit() {
  }

}
