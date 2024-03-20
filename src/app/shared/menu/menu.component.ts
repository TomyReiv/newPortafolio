import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: MenuItem[] | undefined;

  position: string = 'top';

  ngOnInit() {
    this.items = [
      {
        label: 'headers',
        command: () => this.scrollTop(),
        icon: '../../../assets/miavatar.png'
      },
      {
        label: 'aboute',
        command: () => this.scrollTo('aboute'),
        icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg'
      },
      {
        label: 'porfolio',
        command: () => this.scrollTo('porfolio'),
        icon: '../../../assets/portafolio.png'
      },
      {
        label: 'contact',
        command: () => this.scrollTo('contact'),
        icon: '../../../assets/contacto.png'
      }
    ];
  }

  scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
  scrollTop(){
    const top = document.getElementById('headers')
    if(top){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }
}
