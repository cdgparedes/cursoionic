import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'appstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Botones y router',
      redirectTo: '/botones'
    },
    {
      icon: 'card',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'Checkmark-circle-outline',
      name: 'Checkbox',
      redirectTo: '/check'
    },
    {
      icon: 'Calendar',
      name: 'DateTime',
      redirectTo: '/date-time'
    },
    {
      icon: 'car',
      name: 'Fabs',
      redirectTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid - Rows',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite-Scroll',
      redirectTo: '/infinite'
    },
    {
      icon: 'hammer-outline',
      name: 'Input Forms',
      redirectTo: '/input'
    },
    {
      icon: 'list-outline',
      name: 'List - Sliding',
      redirectTo: '/list'
    }
  ];

  constructor() { }

  ngOnInit() {
  }



}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;

}
