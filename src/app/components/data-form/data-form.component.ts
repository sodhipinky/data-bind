import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent {
  value = "";
  today = new Date();
  clearValue() {
    this.value = "";
  }
}
