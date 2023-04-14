import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {
  RouteReuseStrategy,
  DetachedRouteHandle,
  ActivatedRouteSnapshot,
  Route,
} from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {
  private handlers = new Map<Route, DetachedRouteHandle>();
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this.handlers.set(this.calcPath(route), handle);
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!this.handlers.get(this.calcPath(route));
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    return this.handlers.get(this.calcPath(route));
  }

  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    return future.routeConfig === curr.routeConfig;
  }

  private calcPath(route: ActivatedRouteSnapshot) {
    return route.routeConfig;
  }
}

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: CustomReuseStrategy }],
})
export class AppModule {}
