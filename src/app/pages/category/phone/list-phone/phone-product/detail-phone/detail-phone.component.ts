import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phone } from '../../../models/phone.class';
import { PhoneService } from '../../../services/phone.service';

@Component({
  selector: 'app-detail-phone',
  templateUrl: './detail-phone.component.html',
  styleUrls: ['./detail-phone.component.scss'],
})
export class DetailPhoneComponent implements OnInit {
  constructor(
    private phoneService: PhoneService,
    private route: ActivatedRoute
  ) {}

  phone!: Phone;
  id: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadPhoneDetail(this.id);
  }

  loadPhoneDetail(id: any) {
    this.phoneService.getPhone(id).subscribe((data) => {
      // this.customer = data;
      this.phone = new Phone(data);

      console.log('detailInfor', this.phone);
    });
  }
}
