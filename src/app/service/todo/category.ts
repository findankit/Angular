import { MongoCommonFields } from "../common/common.model";

export class CategoryModel extends MongoCommonFields {
	name: string = '';
	parent: string | null = null;
}