import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates-panel',
  templateUrl: './templates-panel.component.html',
  styleUrls: ['./templates-panel.component.scss']
})
export class TemplatesPanelComponent implements OnInit {
  element_title_arr: any = ['Banners', 'Text', 'Background', 'Photos', 'Box Layers', 'Listings', 'Grids', 'Widgets', 'Elements', 'Templates'];
  selected_ele_idx: any = 1;

  constructor() { }

  ngOnInit() {
  }

}
