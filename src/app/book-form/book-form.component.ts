import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent  implements OnInit{

  form!: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      bookname: ['', Validators.required],
      author: ['', Validators.required],
      publication: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      genre: ['', Validators.required],
      publishedDate: ['', Validators.required],
      country: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  submit(){
    console.log(this.form.value);
  }
}
