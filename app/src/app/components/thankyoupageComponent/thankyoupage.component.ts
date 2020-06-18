/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-thankyoupage',
    templateUrl: './thankyoupage.template.html'
})

export class thankyoupageComponent extends NBaseComponent implements OnInit {
    today="";

    constructor() {
        super();
    }

    ngOnInit() {

    }

// returns today's date in DD-MMM-YYYY format
  // which can be shown in the UI
  getDay() {
    const dt = new Date();
    const date = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();
    const dateStr = date < 10 ? "0" + date : date + "";
    const monthStr =
      month === 0
        ? "JAN"
        : month === 1
          ? "FEB"
          : month === 2
            ? "MAR"
            : month === 3
              ? "APR"
              : month === 4
                ? "MAY"
                : month === 5
                  ? "JUN"
                  : month === 6
                    ? "JUL"
                    : month === 7
                      ? "AUG"
                      : month === 8
                        ? "SEP"
                        : month === 9
                          ? "OCT"
                          : month === 10
                            ? "NOV"
                            : month === 11
                              ? "DEC"
                              : "";
    const dayStr = dateStr + "-" + monthStr + "-" + year;
    return dayStr;
  }

    
    //time    
    // set today
    // new addon time AM/PM
    getToday(){
    let time = new Date();
    let timezone = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    this.today = this.getDay() + " " + timezone;
    return this.today;
    }









}
