/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Input, Output } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from "@angular/router";
/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-talentinformation',
    templateUrl: './talentinformation.template.html'
})

export class talentinformationComponent extends NBaseComponent implements OnInit {
    constructor(private router: Router) {
        super();
    }

    ngOnInit() {

    }
    talentForm(form){
    console.log(form.value);
    if(form.valid) {
    this.router.navigate(["/talent2"]);
    }
    }
}
