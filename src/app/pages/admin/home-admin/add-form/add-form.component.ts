import { Component, OnInit, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit, OnChanges {
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) {}
  category: any = null;
  selected = '8gb/128gb';
  categories: any[] = [
    { name: 'Black', key: 'black' },
    { name: 'Yellow', key: 'yellow' },
    { name: 'Red', key: 'red' },
    { name: 'Gold', key: 'gold' },
    { name: 'Green', key: 'green' },
  ];
  // ================Form====================
  form: any;
  initLessonForm() {
    return this.formBuilder.group({
      image: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(200),
        ],
      ],
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],

      description: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(3000),
        ],
      ],
      price: [
        '',

        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ],

      type: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      discount: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      category: '',
      selected: '',
    });
  }
  get phoneFormArrayRow() {
    return this.form.get('phoneFormArrayRow') as FormArray;
  }

  deleteForm(index: number) {
    this.phoneFormArrayRow.removeAt(index);
  }
  addFormRow() {
    const formPhoneRow = this.formBuilder.group({
      image: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(200),
        ],
      ],
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],

      description: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(3000),
        ],
      ],
      price: [
        '',
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ],

      type: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      discount: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      category: '',
      selected: '',
    });

    this.phoneFormArrayRow.push(formPhoneRow);
  }
  addProduct() {
    console.log('check=>get form', this.form);
    const phoneFormArray = this.form?.controls['phoneFormArrayRow'].value;
    const observebles: any[] = [];
    phoneFormArray.forEach((phoneForm: any) => {
      observebles.push(this.adminService.addPhone(phoneForm));
    });
    console.log('check=>changes', this.form);

    forkJoin(observebles).subscribe((data) => {});

    this.router.navigate(['homeAdmin/list']);
  }

  get title() {
    return (
      this.form?.controls['phoneFormArrayRow'] as FormGroup
    ).controls[0].get('title');
  }
  get description() {
    return (
      this.form?.controls['phoneFormArrayRow'] as FormGroup
    ).controls[0].get('description');
  }
  get price() {
    return (
      this.form?.controls['phoneFormArrayRow'] as FormGroup
    ).controls[0].get('price');
  }
  get image() {
    return (
      this.form?.controls['phoneFormArrayRow'] as FormGroup
    ).controls[0].get('image');
  }
  get type() {
    return (
      this.form?.controls['phoneFormArrayRow'] as FormGroup
    ).controls[0].get('type');
  }
  get discount() {
    return (
      this.form?.controls['phoneFormArrayRow'] as FormGroup
    ).controls[0].get('discount');
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      phoneFormArrayRow: this.formBuilder.array([this.initLessonForm()]),
    });
    console.log('check=========>', this.form);
    const phoneArray = this.form?.controls['phoneFormArrayRow'];
    console.log(
      'check=>get controls[phoneFormControl]',
      (this.form?.controls['phoneFormArrayRow'] as FormGroup).controls[0].get(
        'price'
      )
      //  ==> làm sao?
    );
  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('check=>changes', this.form);
  }
}
