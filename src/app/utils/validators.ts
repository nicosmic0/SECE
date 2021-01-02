import { AbstractControl } from '@angular/forms';
import { AccountService } from '@app/core/_services';
import { CarreraService } from '@app/core/_services/carrera.service';
import { map } from 'rxjs/operators';

export class MyValidators{
    static isUcmEmail(control: AbstractControl){
        const value = control.value;
        let expReg = /^\w+[.]\w+[@]alu[.]ucm[.]cl/

        // console.log(value)
        // console.log(expReg.test(value))

        if(!expReg.test(value)){
            return { not_ucm_email: true };
        }
        return null;
    }

    static isIdCarreraAvilable(carreraService: CarreraService){
        return (control: AbstractControl) => {
            const value = control.value;
            return carreraService.checkId(value)
                .pipe(
                    map((response) => {
                        console.log(response);
                        return response.isIdAvailable ? null: {notAvailable: true}
                    })
                );
        }
    }

    static isUserEmailAvilable(accountService: AccountService){
        return (control: AbstractControl) => {
            const value = control.value;
            return accountService.checkEmail(value)
                .pipe(
                    map((response) => {
                        console.log(response);
                        return response.isEmailAvaliable ? null: {notAvailable: true}
                    })
                );
        }
    }
}