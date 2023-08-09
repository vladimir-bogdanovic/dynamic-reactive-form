import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { SingleMealDetailsInterface, mealsDetailsInterface } from './model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // mealData!: SingleMealDetailsInterface;
  form!: FormGroup;
  meal!: SingleMealDetailsInterface;

  constructor(
    private DataService: DataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      strMeal: ['', Validators.required],
      strMealThumb: ['', Validators.required],
      strIngredient1: [null],
      strIngredient16: [null],
    });
    // this.DataService.loadUser().subscribe((resData: mealsDetailsInterface) => {
    //   console.log(resData);
    //   this.meal = resData.meals[0];
    //   console.log(this.meal);
    // });

    this.getApiData();
  }

  getApiData() {
    this.DataService.loadUser().subscribe((resData: mealsDetailsInterface) => {
      console.log(resData);
      this.meal = resData.meals[0];
      console.log(this.meal);
      this.form.patchValue(this.meal);
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      console.log(this.form.controls);
    }
  }
}
