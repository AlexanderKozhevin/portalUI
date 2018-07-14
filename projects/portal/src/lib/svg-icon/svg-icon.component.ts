import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'ui-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent implements OnInit {

  constructor() { }

  @Input('size') size: number = 27;
  @Input('icon') icon: string = 'bet';
  @Input('color') color: string = '#3dc1d3';
  @Input('rotate') rotate: number = 0;
  @Input('hoverColor') hoverColor: string = 'rgba(97, 178, 232, 1)';

  hover = false
  style = {}
  setStyle(){

    if (this.hover){
      this.style = {
        "width": this.size + 'px',
        "height": this.size + 'px',
        "background-color": this.hoverColor,
        "-webkit-mask": 'url(assets/images/icons/' +this.icon + '.svg) no-repeat center',
        "mask": 'url(assets/images/icons/' +this.icon + '.svg) no-repeat center',
         "transform": `rotate(${this.rotate}deg)`
      }
    } else {
      this.style = {
        "width": this.size + 'px',
        "height": this.size + 'px',
        "background-color": this.color,
        "-webkit-mask": 'url(assets/images/icons/' +this.icon + '.svg) no-repeat center',
        "mask": 'url(assets/images/icons/' +this.icon + '.svg) no-repeat center',
         "transform": `rotate(${this.rotate}deg)`
      }
    }
  }


  mouse_state(state){
    this.hover = state
    this.setStyle()
  }

  ngOnInit() {
    this.setStyle()
  }

}
