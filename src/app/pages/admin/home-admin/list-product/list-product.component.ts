import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Phone } from 'src/app/pages/category/phone/models/phone.class';
import { PhoneService } from 'src/app/pages/category/phone/services/phone.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent implements OnInit {
  constructor(
    private phoneService: PhoneService,
    private adminService: AdminService,
    private router: Router
  ) {}

  phoneList: Phone[] = [];
  ngOnInit(): void {
    this.loadPhoneList();
  }

  loadPhoneList() {
    this.phoneService.getListPhone().subscribe((data) => {
      this.phoneList = data.map((record: any) => new Phone(record));
      console.log('check==========>', this.phoneList);
    });
  }
  onClickDetail(id: number) {
    this.router.navigate(['phone', id]);
  }
  deletePhone(phoneID: any) {
    this.adminService.deletePhone(phoneID).subscribe((data) => {
      this.loadPhoneList();
    });
  }
}
