import { Component, ElementRef, QueryList, Type } from "@angular/core";
import { NgForm } from "@angular/forms";

interface Output {
	invalid: boolean;
}
class Options {
	/**
	 * true: validate all form element
	 * false: stop when found any error
	 */
	stopOnError: boolean = false;
}
export function validateNgForm(form: NgForm | null, queryListArr?: QueryList<any>[]): Output {
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
		control.markAsTouched();
		control.updateValueAndValidity({onlySelf: true});
	}
}