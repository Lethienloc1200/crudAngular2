import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) {}
  selectedCategory: any = null;
  selected = '8gb/128gb';
  categories: any[] = [
    { name: 'Black', key: 'black' },
    { name: 'Yellow', key: 'yellow' },
    { name: 'Red', key: 'red' },
    { name: 'Gold', key: 'gold' },
    { name: 'Green', key: 'green' },
  ];
  // ================Form====================
  phoneFormGroupContainer = this.formBuilder.group({
    phoneFormArrayRow: this.formBuilder.array([
      // this.formBuilder.group({
      //   // image: [
      //   //   '',
      //   //   [
      //   //     Validators.required,
      //   //     Validators.minLength(2),
      //   //     Validators.maxLength(200),
      //   //   ],
      //   // ],
      //   // title: [
      //   //   '',
      //   //   [
      //   //     Validators.required,
      //   //     Validators.minLength(2),
      //   //     Validators.maxLength(30),
      //   //   ],
      //   // ],
      //   // description: [
      //   //   '',
      //   //   [
      //   //     Validators.required,
      //   //     Validators.minLength(2),
      //   //     Validators.maxLength(3000),
      //   //   ],
      //   // ],
      //   // price: [
      //   //   '',
      //   //   [
      //   //     Validators.required,
      //   //     Validators.minLength(2),
      //   //     Validators.maxLength(30),
      //   //   ],
      //   // ],
      //   // type: [
      //   //   '',
      //   //   [
      //   //     Validators.required,
      //   //     Validators.minLength(2),
      //   //     Validators.maxLength(30),
      //   //   ],
      //   // ],
      //   // discount: [
      //   //   '',
      //   //   [
      //   //     Validators.required,
      //   //     Validators.minLength(2),
      //   //     Validators.maxLength(30),
      //   //   ],
      //   // ],
      // }),
    ]),
  });

  get phoneFormArrayRow() {
    return this.phoneFormGroupContainer.controls[
      'phoneFormArrayRow'
    ] as FormArray;
  }
  addFormRow() {
    const formPhoneRow = this.formBuilder.group({
      // image: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.minLength(2),
      //     Validators.maxLength(200),
      //   ],
      // ],
      // title: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.minLength(2),
      //     Validators.maxLength(30),
      //   ],
      // ],
      // description: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.minLength(2),
      //     Validators.maxLength(3000),
      //   ],
      // ],
      price: [
        '',

        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ],

      // type: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.minLength(2),
      //     Validators.maxLength(30),
      //   ],
      // ],
      // discount: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.minLength(2),
      //     Validators.maxLength(30),
      //   ],
      // ],
    });

    this.phoneFormArrayRow.push(formPhoneRow);
  }
  deleteForm(index: number) {
    this.phoneFormArrayRow.removeAt(index);
  }

  // get title() {
  //   console.log(
  //     'abc',
  //     this.phoneFormGroupContainer.controls['phoneFormArrayRow']
  //   );
  //   return this.phoneFormGroupContainer.get('title');
  // }
  // get description() {
  //   return this.phoneFormGroupContainer.get('description');
  // }
  // get price() {
  //   return this.phoneFormGroupContainer.get('price');
  // }
  // get image() {
  //   return this.phoneFormGroupContainer.get('image');
  // }
  // get type() {
  //   return this.phoneFormGroupContainer.get('type');
  // }
  // get discount() {
  //   return this.phoneFormGroupContainer.get('discount');
  // }

  addProduct() {
    const newPhone = this.phoneFormGroupContainer.getRawValue();
    this.adminService.addPhone(newPhone).subscribe((data) => {
      this.phoneFormGroupContainer.markAsPristine();
      console.log('data', data);
    });
    this.router.navigate(['homeAdmin/list']);
  }

  ngOnInit(): void {
    console.log('check=========>', this.phoneFormGroupContainer);
  }
}
