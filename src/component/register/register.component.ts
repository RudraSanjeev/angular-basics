import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  passwordData: string = '';

  onSubmit(registerForm: any) {
    console.log('Username:', this.username);
    console.log('email:', this.email);
    console.log('Password:', this.passwordData);

    // Reset the form after submission (optional)
    registerForm.resetForm();
  }
}
