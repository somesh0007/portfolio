import { ChangeDetectorRef, Component, ElementRef, OnInit} from '@angular/core';
import { scrollAnimation } from '../shared/animations';
import { ScrollAnimationComponent } from '../shared/scroll-animation.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    scrollAnimation
  ]
})
export class ContactComponent extends ScrollAnimationComponent implements OnInit { 
  contactForm:FormGroup
  isSubmit:boolean =  true
  submitMessage:string =  ''

  constructor(_el:ElementRef, cdRef: ChangeDetectorRef ,private formBuilder: FormBuilder){
    super(_el,cdRef);
  }
  ngOnInit() {

    this.contactForm = this.formBuilder.group({
      name:[null, Validators.required],
      email:[null, [Validators.required,Validators.email]],
      message:[null, Validators.required],
      phone:[null]
    })

  }
  sendMessage(val:any){
     emailjs.init('hXgm1xftap6F6KfzO')
    this.submitMessage = 'Submitted Successfully'
    emailjs.send("service_cjrfey8","template_gzym8la",{
      from_name: val.name,
      to_name: 'Somesh',
      message: val.message,
      from_email:val.email,
      from_phone: val.phone,
      });
    this.isSubmit = true
    setTimeout(()=>{
      this.isSubmit = false
    }, 6000)
  }
  send(){
   
  }
}