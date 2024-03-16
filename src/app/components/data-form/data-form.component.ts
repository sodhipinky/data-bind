import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GenderPipe } from '../../pipes/gender.pipe';

@Component({
  selector: 'app-data-form',
  standalone: true,
  imports: [FormsModule, CommonModule, GenderPipe],
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent {
  value = "";
  today = new Date();

  students = [
    {
      id: 1,
      name: "John",
      age: 20,
      gender: 0
    },
    {
      id: 2,
      name: "Jane",
      age: 21,
      gender: 1
    },
    {
      id: 3,
      name: "Doe",
      age: 22,
      gender: 0
    }
  ]

  clearValue() {
    this.value = "";
  }
}
