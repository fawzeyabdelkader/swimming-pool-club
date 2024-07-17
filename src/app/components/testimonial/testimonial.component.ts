import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
})
export class TestimonialComponent implements OnInit {
  testimonials: any[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.dataService.getCards().subscribe(data => {
    //   this.cards = data;
    // });
    this.dataService.getTestimonials().subscribe((data) => {
      this.testimonials = data;
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    items:2,
     autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:2000,

  }
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: true,
  //   pullDrag: true,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['&#8249;', '&#8250;'],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // };


}
