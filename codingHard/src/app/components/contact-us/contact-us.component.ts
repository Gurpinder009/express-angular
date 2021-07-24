import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../../services/post-service.service'
import { userDataType } from '../../interfaces/userDataType'



// component details 
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['../style.css', './contact-us.component.css']
})
 
  
// main function  
export class ContactUsComponent implements OnInit {
  //
 
  operationStatus: string = ""


  //constructors
  constructor( private postService: PostServiceService) {
  }

  ngOnInit(): void {
  }


  //validates user information form 
  // called from submitData
  formValidation():any{
    var forms = document.querySelectorAll('.needs-validation')
    var j = Array.prototype.slice.call(forms)
    for (let i of j) {
      if (!i.checkValidity()) {
        i.classList.add('was-validated')
        return false;
      }
      return true;
    }
  }




  //resets alert 
  resetAlert() :void  {
    this.operationStatus = ""; 
  }



  //submit the data comming from html forms 
  // called from form tag 
  SubmitData(data): void  {
    this.resetAlert();
    let status = this.formValidation()
    if (status) {
      this.postService.postData(data)
      this.operationStatus = "Data is successfully saved";
      
    }
  }


  
}

