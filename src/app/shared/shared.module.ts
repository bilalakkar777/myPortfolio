import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';

import { FeatherModule } from 'angular-feather';
import {
  Mail, Link, PhoneCall, Clock, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Calendar, User, Server, Rss, Layout, LifeBuoy,
  ArrowRightCircle, PieChart, Triangle
} from 'angular-feather/icons';
import { ScrollspyDirective } from './scrollspy.directive';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { SteuerComponent } from './steuer/steuer.component';


const icons = {
  Mail, Link, PhoneCall, Clock, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Calendar, User, Server, Rss, Layout, LifeBuoy,
  ArrowRightCircle, PieChart, Triangle
};

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [FeaturesComponent, PricingComponent, BlogComponent, ContactComponent, ServicesComponent, FooterComponent, ScrollspyDirective, SteuerComponent],
  imports: [
    CommonModule,
    FeatherModule.pick(icons),
    TranslateModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB15wFtZ3GzZhPyfZTUjADjz8jYCJ9XLeg'
    })
  ],
  // tslint:disable-next-line: max-line-length
  exports: [FeaturesComponent, PricingComponent, BlogComponent, ContactComponent, ServicesComponent, FooterComponent, FeatherModule, ScrollspyDirective, SteuerComponent]
})
export class SharedModule { }
