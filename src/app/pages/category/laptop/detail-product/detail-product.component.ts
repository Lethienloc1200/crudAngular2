import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LapTop } from '../models/laptop.class';
import { LapTopService } from '../services/laptop.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
})
export class DetailProductComponent implements OnInit {
  constructor(
    private lapTopService: LapTopService,
    private route: ActivatedRoute
  ) {}

  lapTop!: LapTop;
  id: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadLapTopDetail(this.id);
  }

  loadLapTopDetail(id: any) {
    this.lapTopService.getLapTop(id).subscribe((data) => {
      // this.customer = data;
      this.lapTop = new LapTop(data);

      console.log('detailInfor', this.lapTop);
    });
  }
}
