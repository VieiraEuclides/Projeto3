import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Lista de máquinas e detalhes
  items = [
    {
      image: 'https://www.norimaq.com.br/wp-content/uploads/2021/07/empacotadora-rm10c-pq-min.png',
      title: 'Item 1',
      price: '$10',
      weight: '1kg',
      description: 'Descrição do item 1'
    },
    {
      image: 'https://www.norimaq.com.br/wp-content/uploads/2021/07/empacotadora-rm10b-pq.png',
      title: 'Item 2',
      price: '$20',
      weight: '2kg',
      description: 'Descrição do item 2'
    },
    {
      image: 'https://www.norimaq.com.br/wp-content/uploads/2021/07/empacotadora-rm10b4-pq-min.png',
      title: 'Item 3',
      price: '$30',
      weight: '3kg',
      description: 'Descrição do item 3'
    },
    {
      image: 'https://www.norimaq.com.br/wp-content/uploads/2021/07/empacotadora-rm10r-pq-min.png',
      title: 'Item 4',
      price: '$40',
      weight: '4kg',
      description: 'Descrição do item 4'
    },
    {
      image: 'https://www.norimaq.com.br/wp-content/uploads/2021/07/empacotadora-rm10g-pq-min.png',
      title: 'Item 5',
      price: '$50',
      weight: '5kg',
      description: 'Descrição do item 5'
    },
    {
      image: 'https://www.norimaq.com.br/wp-content/uploads/2021/07/empacotadora-rm10pu-pq-min.png',
      title: 'Item 6',
      price: '$60',
      weight: '6kg',
      description: 'Descrição do item 6'
    },
    {
      image: 'https://www.norimaq.com.br/wp-content/uploads/2021/09/empacotadora-rm10rp-pq-min.png',
      title: 'Item 7',
      price: '$70',
      weight: '7kg',
      description: 'Descrição do item 7'
    },
    {
      image: 'https://www.norimaq.com.br/wp-content/uploads/2021/07/envasadora-rm10el-pq-min.png',
      title: 'Item 8',
      price: '$80',
      weight: '8kg',
      description: 'Descrição do item 8'
    },
    {
      image: 'https://www.norimaq.com.br/wp-content/uploads/2021/07/envasadora-rm10el2-pq-min.png',
      title: 'Item 9',
      price: '$90',
      weight: '9kg',
      description: 'Descrição do item 9'
    },
    {
      image: 'https://www.norimaq.com.br/wp-content/uploads/2021/07/enfardadeira-enf101-pq-min.png',
      title: 'Item 10',
      price: '$100',
      weight: '10kg',
      description: 'Descrição do item 10'
    },
  ];

  constructor(private router: Router) {}

  goToFormPage(item: any) {
    this.router.navigate(['/formulario'], {
      queryParams: { item: JSON.stringify(item) },
    });
  }
}
