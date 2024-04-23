import { ChangeDetectorRef, Component, ElementRef, OnInit} from '@angular/core';
import { scrollAnimation } from '../shared/animations';
import { ScrollAnimationComponent } from '../shared/scroll-animation.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
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

  private myForm: AngularFirestoreCollection<any>
  constructor(_el:ElementRef, cdRef: ChangeDetectorRef ,private formBuilder: FormBuilder, private firestore:AngularFirestore){
    super(_el,cdRef);
  }
  ngOnInit() {
    this.myForm = this.firestore.collection('enquiry');

    this.contactForm = this.formBuilder.group({
      name:[null, Validators.required],
      email:[null, [Validators.required,Validators.email]],
      message:[null, Validators.required],
      phone:[null]
    })

  }
  sendMessage(val:any){
    this.myForm.add(val)
    .then(res =>{      
      this.submitMessage = 'Submitted Successfully'
    })
    .catch(err =>{
      console.log(err);
      
    })
    this.isSubmit = true
    setTimeout(()=>{
      this.isSubmit = false
    }, 6000)
  }

}