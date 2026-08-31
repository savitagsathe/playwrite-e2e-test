import{test,expect } from '@playwright/test';                        
import Base Page from './base.page';
import {log} from '../helpers/logger.js';

class HomePage extends BasePage {
    constructor(page: Page) {
super(page);
}
}

//elemnts
get userNameInputBox(){return this.page.getByRole('textbox', { name: 'Email:' });
get passwordInputBox(){return this.page.getByRole('textbox', { name: 'Password:' });
get loginButton(){return this.page.getByRole('button', { name: 'Log in' });

}