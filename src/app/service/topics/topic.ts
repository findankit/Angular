
export class TopicModel {
	name!: string;
	display_name?: string;
	constructor(obj?: TopicModel) {
		if(obj) {
			this.name = obj.name;
			this.display_name = obj.display_name;
		}
	}
}

