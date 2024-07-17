import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: any;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get formControls() { return this.contactForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }

    
    this.http.post('http://localhost:3000/messages', this.contactForm.value).subscribe(
      response => {
        console.log('Success!', response);
        alert('Message sent successfully');
        this.contactForm.reset();
        this.submitted = false;
        this.cdr.detectChanges();

      },
      error => {
        console.error('Error!', error);
        alert('An error occurred. Please try again.');
      }
    );
  }
}