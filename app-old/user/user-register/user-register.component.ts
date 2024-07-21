import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators , FormBuilder } from '@angular/forms';
import { User } from '../../model/user';
import { AlertifyService } from '../../services/alertify.service';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm : FormGroup

   user: User;
  userSubmitted: boolean; //to trace the submit buttin action
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private alertify: AlertifyService ) { }

  ngOnInit() {
    // this.registerationForm = new FormGroup({
    //     userName : new FormControl(null ,Validators.required),
    //     email : new FormControl(null,[Validators.required , Validators.email]),
    //     password : new FormControl(null,[Validators.required , Validators.minLength(8)]),
    //     confirmPassword : new FormControl(null , Validators.required),
    //     mobile : new FormControl(null , Validators.maxLength(13))
    // } , this.passwordMatchingValidator);
    this.createRegisterationForm(); //use FormBuilder
  }

  createRegisterationForm() {
    this.registerationForm =  this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }, {validators: this.passwordMatchingValidator});
  }


  passwordMatchingValidator(fg:FormGroup) : Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null : 
    {notmatched:true}
  }


  onSubmit() {
    console.log(this.registerationForm.value);
    this.userSubmitted = true; //to allow validtion from submition button

    if (this.registerationForm.valid) {
      // this.user = Object.assign(this.user, this.registerationForm.value);
      this.userService.addUser(this.userData());
      this.onReset();
      this.alertify.success('Congrats, you are successfully registered');
    } else {
     // alert('Kindly provide the required fields');
        this.alertify.error('Kindly provide the required fields');
  }
  }

  onReset() {
    this.userSubmitted = false;
    this.registerationForm.reset();
  }

  //Mapping User Data
  userData(): User {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }


  //==================================
  //Getter Method for all form control
  //==================================
  get userName(){
    return this.registerationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registerationForm.get('email') as FormControl;
  }get password(){
    return this.registerationForm.get('password') as FormControl;
  }get confirmPassword(){
    return this.registerationForm.get('confirmPassword') as FormControl;
  }get mobile(){
    return this.registerationForm.get('mobile') as FormControl;
  }



 

}
