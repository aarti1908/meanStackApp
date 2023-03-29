import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	CanDeactivate
} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router) { }
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): boolean | Promise<boolean> {
		let isAuthenticated = this.getAuthStatus();
		if (isAuthenticated) {
			if(state.url === '/login') {
				this.router.navigate(['/dashboard']);
				return false;
			}
		} else {
			if(state.url != '/login') {
				this.router.navigate(['/login']);
				return false;
			};
		}

		return true;
	}


	getAuthStatus(){
		return localStorage.getItem('token') ? true : false;
	}
}
