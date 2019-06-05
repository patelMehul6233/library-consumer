import { Injectable } from '@angular/core';
import { UrlTree, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { UserserviceService } from '../app/user/userservice.service'
@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {
  constructor (private _authService: UserserviceService, private _router: Router) {

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const NextVal:any = next;
    if (this._authService.isAuthenticated()) {
       if(NextVal._routerState.url === '/user' || 
          NextVal._routerState.url === '/user/signin' ||
          NextVal._routerState.url === '/user/signup' ){
        this._router.navigate(['']);
       }
      return true;
    }

    // navigate to login page
    this._router.navigate(['user/signin']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

  
}
