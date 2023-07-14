import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-App';
  loadedFeature: string = 'recipe';

  onNavigate(feature: string) {
    console.log("On navigate invoked");
    this.loadedFeature = feature;

  }
}
