import { Component } from '@angular/core';

//Este decorator que transforma o pacote em um componente
// 29/07/18
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 6';
  description='Leao';
  url= 'http://sinpma.com.br/wp-content/uploads/2017/04/link.jpg';
}
