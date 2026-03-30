import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonGrid, IonList, IonItem, IonLabel, IonButton, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.page.html',
  styleUrls: ['./receita.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonGrid, IonList, IonItem, IonLabel, IonButton, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ReceitaPage implements OnInit {

  constructor(private router: Router) { }
  
  irParaHome() {
    this.router.navigate(['home']);
  }
  alternarTema() {
    document.body.classList.toggle('dark');
  }

  ngOnInit() {
  }

}
