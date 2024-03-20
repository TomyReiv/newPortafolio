import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {
  cvUrl: any;

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.cvUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Tomas Rave.pdf');
  }
  
  redirectTo(url: string) {
    window.open(`https://${url}`, '_blank');
  }
}
