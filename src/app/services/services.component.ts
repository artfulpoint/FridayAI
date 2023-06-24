import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
scrollToId(event:string){
  const element = document.getElementById(event);

  element?.scrollIntoView({behavior:'smooth',block:'start'});

}
}
