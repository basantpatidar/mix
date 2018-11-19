import { Component, OnInit, Renderer, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-part-two',
  templateUrl: './part-two.page.html',
  styleUrls: ['./part-two.page.scss'],
})
export class PartTwoPage implements OnInit {

    @ViewChild('ctx') canvas: any;
    canvasElement: any;

    constructor(public  platform: Platform, public renderer: Renderer) { }

  ngOnInit() {

      let randomValueFromDeviceX = 0;
      let randomValueFromDeviceY = 0;
      this.canvasElement = this.canvas.nativeElement;
      const c = this.canvasElement.getContext('2d');
      this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
      this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');

      window.addEventListener('devicemotion', function(event) {
          randomValueFromDeviceX = Math.round(event.accelerationIncludingGravity.x) + 100;
          console.log(randomValueFromDeviceX);
          randomValueFromDeviceY = Math.round(event.accelerationIncludingGravity.y) + 100;
          console.log(randomValueFromDeviceX);
          window.requestAnimationFrame(drawMotionEvent);
      }, true);

      function drawMotionEvent() {
          // const canvas = document.getElementById('c'),
          // c = canvas.getContext('2d');
          const canvas_width = window.innerWidth;
          const canvas_height = window.innerHeight;
          let squareBlack = 0;
          let squareWhite = 0;
          if (canvas_width > canvas_height ) {
                 squareBlack = canvas_width / 3;
                 squareWhite = (canvas_width / 3) - 50;
          } else {
               squareBlack = canvas_height / 2;
               squareWhite = (canvas_height / 2) - 50;
          }
          const midpointX = canvas_width / 2;
          const midpointY = canvas_height / 2;
          let   counter = 1,
              scaleBlackX = midpointX - squareBlack / 2,
              scaleBlackY = midpointY - squareBlack / 2,
              scaleWhiteX = (midpointX - squareWhite / 2),
              scaleWhiteY = (midpointY - squareWhite / 2);
          c.fillStyle = 'grey';
          c.fillRect(0, 0, window.innerWidth, window.innerHeight);
          c.translate(canvas_width / 2, canvas_height / 2);
          c.rotate(45 * Math.PI / 180);
          c.translate(-1 * canvas_width / 2, -1 * canvas_height / 2);
          c.fillStyle = 'black';
          for (let i = 1; i < 7; i ++) {
            randomValueFromDeviceX < 97 ?  c.fillStyle = 'yellow' :
                randomValueFromDeviceX > 103 ? c.fillStyle = 'green' :
                    c.fillStyle = 'black';

              c.fillRect(scaleBlackX, scaleBlackY, squareBlack, squareBlack);
              randomValueFromDeviceY < 97 ?  c.fillStyle = 'red' :  randomValueFromDeviceY > 103 ? c.fillStyle = 'blue' :
                  c.fillStyle = 'white';
              if (counter < 6 ) {
                  counter ++;
                  c.fillRect(scaleWhiteX, scaleWhiteY , squareWhite, squareWhite);
                  squareWhite = squareWhite - 100;
              }
              squareBlack = squareBlack - 100;
              scaleBlackX = scaleBlackX + 50;
              scaleBlackY = scaleBlackY + 50;
              scaleWhiteX = scaleWhiteX + 50;
              scaleWhiteY = scaleWhiteY + 50;
          }
          // window.requestAnimationFrame(handleMotionEvent);
      }
      window.requestAnimationFrame(drawMotionEvent);
      console.log('Not able to use requestAnimationFrame to access my animation but still my animation is working');
  }

}
