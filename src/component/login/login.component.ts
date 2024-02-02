import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  passwordData: string = '';

  userName(event: any) {
    this.username = event.target.value;
  }
  password(event: any) {
    this.passwordData = event.target.value;
  }

  onsubmit(event: Event) {
    event.preventDefault();
    // console.log(event);
    console.log(`username: ${this.username}`);
    console.log(`password: ${this.passwordData}`);

    this.username = '';
    this.passwordData = '';
  }
}
