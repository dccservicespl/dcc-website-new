import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  subscribeEmail: string = '';

  onSubscribe(event: Event): void {
    event.preventDefault();
    if (this.subscribeEmail) {
      console.log('Subscribe:', this.subscribeEmail);
      // Handle subscription logic here
      this.subscribeEmail = '';
    }
  }
}
