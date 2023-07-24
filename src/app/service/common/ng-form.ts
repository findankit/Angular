import { ElementRef, QueryList } from "@angular/core";
import { NgForm } from "@angular/forms";

interface Output {
	invalid: boolean;
}
export function validateNgForm(form: NgForm | null, queryListArr?: QueryList<ElementRef<HTMLInputElement>>[]): Output {
	// debugger;
	let out = {invalid: false};

	if(form) {
		validate(form);
		out.invalid = !!form.invalid;
		if(form.invalid) return out;
	}
	queryListArr?.map(queryList => {
		queryList?.forEach((ref, i) => {
			if(out.invalid) return;
			console.log(i, ref);
			let form = (ref as any)?.form;
			if(form) {
				validate(form);
				out.invalid = form.invalid;
			}
		})
	});
	
	return out;
}

function validate(form: NgForm) {
	for(let control of Object.values(form.controls)) {
		control.markAsDirty();
		control.updateValueAndValidity({onlySelf: true});
	}
}