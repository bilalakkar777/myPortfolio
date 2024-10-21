import { Component, OnInit, Renderer2 } from '@angular/core';
import { LangService } from './shared/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private langService: LangService,  private renderer: Renderer2) {

  }
  // Loader
  isLoading: boolean;

  ngOnInit() {
    this.isLoading = true;
    this.langService.init();
    setTimeout(() => {
      this.isLoading = false;
    }, 600);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.renderer.addClass(document.body, 'show');
    }, 1000);
    setTimeout(() => {
      this.renderer.addClass(document.body, 'default-transition');
    }, 1500);
  }

}
