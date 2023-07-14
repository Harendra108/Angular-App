import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  templateUrl: './header.component.html',
  selector: 'app-header',
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    console.log("on select invoked = ", feature);
    this.featureSelected.emit(feature);
  }

}
