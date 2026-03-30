import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonFooter, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonButton, IonRow, IonCol, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonFooter, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonButton, IonRow, IonCol, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(private router: Router) {}

  irParaReceita() {
    this.router.navigate(['/receita']);
  }

  alternarTema() {
    document.body.classList.toggle('dark');
  }

}


