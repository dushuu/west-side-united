import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'] // Adjust the path as per your project structure
})
export class HeaderComponent {
    isDropdownOpen = false;
    isOurImapactDropdown = false;
    isGetInvolvedDropdown =   false;
    isNewzDropDown = false;

    toggleDropdown(open: boolean): void {
        this.isDropdownOpen = open;
    }
    toggleImapactDropdown(open: boolean):void{
      this.isOurImapactDropdown = open
    }

    toggleGetInvolvedDropdown(open: boolean):void{
      this.isGetInvolvedDropdown = open
    }

    
    toggleNewzDropDown (open: boolean):void{
      this.isNewzDropDown = open
    }
    

}
