import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-phone',
  templateUrl: './list-phone.component.html',
  styleUrls: ['./list-phone.component.scss'],
})
export class ListPhoneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  dataPhone = [
    {
      id: '1',
      name: 'DienThoai abc',
      price: '200.000 vnd',
      type: '8GB/128GB',
      discount: '200vnd',
      imgUrl:
        'https://cdn.tgdd.vn/Products/Images/42/235838/Galaxy-S22-Ultra-Burgundy-600x600.jpg',
    },
    {
      id: '2',
      name: 'DienThoai -2',
      price: '200.000 vnd',
      type: '8GB/128GB -2',
      discount: '200vnd -2',
      imgUrl:
        'https://cdn.tgdd.vn/Products/Images/42/261888/realme-c35-thumb-new-600x600.jpg',
    },
    {
      id: '3',
      name: 'DienThoai -3',
      price: '200.000 vnd',
      type: '8GB/128GB -3',
      discount: '200vnd -3',
      imgUrl:
        'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-do-600x600.jpg',
    },
    {
      id: '3',
      name: 'DienThoai -3',
      price: '200.000 vnd',
      type: '8GB/128GB -3',
      discount: '200vnd -3',
      imgUrl:
        'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-do-600x600.jpg',
    },
    {
      id: '3',
      name: 'DienThoai -3',
      price: '200.000 vnd',
      type: '8GB/128GB -3',
      discount: '200vnd -3',
      imgUrl:
        'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-do-600x600.jpg',
    },
  ];
}
