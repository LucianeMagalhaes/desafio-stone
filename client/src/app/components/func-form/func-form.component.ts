import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FuncService } from '../../services/func.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-func-form',
  templateUrl: './func-form.component.html',
  styleUrls: ['./func-form.component.css']
})
export class FuncFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private funcService: FuncService, private location: Location ) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.maxLength(250)]],
      idade: [null, [Validators.required, Validators.maxLength(10)]],
      cargo: [null, [Validators.required, Validators.maxLength(250)]]
    });
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if( this.form.valid){
      console.log('submit');
      this.funcService.saveFuncionario(this.form.value).subscribe(
        success => {
          console.log('sucesso'),
          this.location.back();
        },
        error => console.error(error),
        () => console.log('request completo')
      );
    }

  }

  onCancel(){
    this.submitted = false;
    this.form.reset();
    //console.log('cancel');
   
  }

}
