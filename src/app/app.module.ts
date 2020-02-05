import { DealOfDayComponent } from "./sections/deal-of-day/deal-of-day.component";
import { ServicesComponent } from "./sections/services/services.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./layout/header/header.component";
import { LogoComponent } from "./components/logo/logo.component";

import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { SubheaderComponent } from "./layout/subheader/subheader.component";
import { FooterComponent } from "./layout/footer/footer.component";

import { TimerComponent } from "./components/timer/timer.component";
import { AwardsComponent } from "./sections/awards/awards.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    ServicesComponent,
    BreadcrumbComponent,
    SubheaderComponent,
    FooterComponent,
    DealOfDayComponent,
    TimerComponent,
    AwardsComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
