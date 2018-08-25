import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fabric } from 'fabric';

@Component({
  selector: 'app-design-panel',
  templateUrl: './design-panel.component.html',
  styleUrls: ['./design-panel.component.scss']
})
export class DesignPanelComponent implements OnInit {
  width: any = 0;
  height: any = 0;
  cardCanvas: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.width = params['width'];
      this.height = params['height'];

      this.cardCanvas = new fabric.Canvas('canvas', {
        backgroundColor: '#fff',
        hoverCursor: 'pointer',
        selection: true,
        selectionBorderColor: 'blue'
      });

      this.cardCanvas.setZoom(0.6);
      this.cardCanvas.setWidth(this.width * 0.6);
      this.cardCanvas.setHeight(this.height * 0.6);
    });
  }
}
