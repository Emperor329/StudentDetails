import {Component, OnInit} from '@angular/core';
import {LoginPage} from './login-page';
import {LoginPageService} from './login-page.service';
import {MessageService} from 'primeng/api';
import {Messages} from 'primeng/messages';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  // In angular 13 we get exception in component file
  loginPage: LoginPage;

  txtUserName: string;

  txtPwd: string;

  message: Messages[];

  constructor(private loginPageService: LoginPageService,
              private messageService: MessageService) {
    this.message = [];
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    /*this.loginPage.userName = this.txtUserName;
    this.loginPage.pwd = this.txtPwd;*/
    this.loginPage = {userName: this.txtUserName, pwd: this.txtPwd};
    this.loginPageService.insertUserCredentials(this.loginPage).subscribe(result => {
      console.log(result);
      /*this.messageService.add({
        severity: 'success',
        summary: result,
        detail: 'Success'
      });*/
    });
  }

  onUpdate(): void {
    /*this.loginPage.userName = this.txtUserName;
    this.loginPage.pwd = this.txtPwd;*/
    this.loginPage = {userId: 12, userName: this.txtUserName, pwd: this.txtPwd};
    this.loginPageService.updateUserCredentials(this.loginPage).subscribe(result => {
      console.log(result);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'User Credentials Updated SuccessFully'
      });
    },
      error => {
      console.log(error),
       this.messageService.add({
       severity: 'error',
       summary: 'Failed',
       detail: error
     });
      });
  }

  onDelete(): void {
    this.loginPageService.deleteUserCredentials(19).subscribe(result => {
      console.log(result);
      /*this.messageService.add({
        severity: 'success',
        summary: result,
        detail: 'Success'
      });*/
    });
  }
}
