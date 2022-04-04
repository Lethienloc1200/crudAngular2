import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhoneService } from '../../services/phone.service';
import { Phone } from '../../models/phone.class';
@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent implements OnInit {
  constructor(private phoneService: PhoneService, private router: Router) {}
  @Input() inputPhone!: any;
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
}
