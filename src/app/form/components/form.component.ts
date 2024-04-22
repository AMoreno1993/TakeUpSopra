import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  formValue: any;
  productForm: FormGroup = this.formBuilder.group({
    product: [null, Validators.required],
    price: [
      null,
      [Validators.required, Validators.min(1), Validators.max(999)],
    ],
    description: [
      null,
      [
        Validators.required,
        Validators.maxLength(350),
        this.noSpecialCharactersValidator(),
      ],
    ],
    id: [null],
    currency: ['€'],
    rating: [3],
    img: [
      'https://icon-library.com/images/product-icon-png/product-icon-png-13.jpg',
    ],
    reviews: [[]],
    similarProducts: [null],
  });

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  noSpecialCharactersValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = /[!@#$%^&*(),.?":{}|<>]/.test(control.value);
      return forbidden
        ? { forbiddenCharacters: { value: control.value } }
        : null;
    };
  }

  sendProductInfo() {
    this.formValue = this.productForm.value;
    this.productService.setProduct(this.formValue);
    this.router.navigate(['/success']);
  }

  validateField(field: string): boolean {
    return (
      this.productForm.controls[field].invalid &&
      this.productForm.controls[field].touched
    );
  }
}
