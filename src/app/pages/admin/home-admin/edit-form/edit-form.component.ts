import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {
  id!: any;
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  phoneFormGroup = this.formBuilder.group({
    image: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(200)],
    ],
    title: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(30)],
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
      [Validators.required, Validators.minLength(2), Validators.maxLength(30)],
    ],
    type: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(30)],
    ],
    discount: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(30)],
    ],
  });
  get title() {
    return this.phoneFormGroup.get('title');
  }
  get description() {
    return this.phoneFormGroup.get('description');
  }
  get price() {
    return this.phoneFormGroup.get('price');
  }
  get image() {
    return this.phoneFormGroup.get('image');
  }
  get type() {
    return this.phoneFormGroup.get('type');
  }
  get discount() {
    return this.phoneFormGroup.get('discount');
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadDataToEdit(this.id);
  }

  loadDataToEdit(id: any) {
    this.adminService.getPhone(id).subscribe((data) => {
      this.phoneFormGroup.patchValue(data);
    });
  }
  back() {
    this.location.back();
  }
  EditProduct() {
    const newPhone = this.phoneFormGroup.getRawValue();
    this.adminService.addPhone(newPhone).subscribe((data) => {
      this.phoneFormGroup.markAsPristine();
      console.log('data', data);
    });
    this.router.navigate(['homeAdmin/list']);
  }
}
