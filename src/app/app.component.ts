import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  display = 'none';
constructor( private formBuilder: FormBuilder) {}
 ngOnInit() {
  this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
  });

  console.log('in constructor');
}

onCloseHandled() {
  this.display = 'none';
  window.location.reload();
}
openModal() {
  this.display = 'block';
}

get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;

 this.openModal();
}
}