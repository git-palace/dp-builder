import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { DesignPanelComponent } from './components/design/design-panel/design-panel.component';
import { NavPanelComponent } from './componenets/design/nav-panel/nav-panel.component';
import { TemplatesPanelComponent } from './componenets/design/templates-panel/templates-panel.component';
import { TopBarComponent } from './componenets/design/top-bar/top-bar.component';
import { ToolBarComponent } from './componenets/design/tool-bar/tool-bar.component';


const appRoutes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'design/:width/:height', component: DesignPanelComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DesignPanelComponent,
    NavPanelComponent,
    TemplatesPanelComponent,
    TopBarComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
