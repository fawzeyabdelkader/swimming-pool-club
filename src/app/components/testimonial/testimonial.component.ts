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
 
    this.dataService.getTestimonials().subscribe((data) => {
      this.testimonials = data;
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    items: 2,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    navText: [
      `<i class="fa-solid fa-angle-left   text-primary fs-2"></i>`,
      `<i class="fa-solid fa-angle-right   text-primary fs-2"></i>`,
    ],
    nav: true,


  };
}




