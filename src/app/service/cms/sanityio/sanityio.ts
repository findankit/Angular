export type SanityTypes = 'faq' | 'navItems' | 'pages';
export type SanityPageTypes = 'faq' | 'home';
export class SanityQueryModel {
	_type?: SanityTypes; // Type is schema name in sanity project.
	_key?: string;
	tag? : string;
}

type _typeData = 'reference' | 'slug';
type _typeSchema = 'author' | 'blockContent' | 'category' | 'post'; // These are schema name of sanity.io project's schemas
type _typeImage = 'sanity.imageHotspot' | 'reference' | 'sanity.imageCrop' | 'image';
type _type = _typeData | _typeSchema;

class Ref {
	_type?: _type;
	_ref?: string;
}
export class SanityBlockContentModel {
	markDefs?: unknown[];
	children?: [
		{
			_type: string, // html tag type, eg. span
			marks: ('em' | 'strong')[],
			text: string, // main data
			_key: string
		}
	];
	style?: string;
	_type?: string;
	_key?: string;
}
export class SanityImageModel {
	hotspot?: {
		y: number,
		height: number,
		_type: _typeImage,
		width: number,
		x: number
	};
	_type!: _typeImage;
	asset!: {
		_ref: string, // image file name
		_type: _typeImage;
	};
	crop?: {
		top: number,
		left: number,
		bottom: number,
		_type: _typeImage,
		right: number
	};
}

export class SanityCommonResponseFields {
	_createdAt!: Date;
	_updatedAt!: Date;
	_rev!: string;
	_type!: _type;
	_id!: string;
}

// export class QueryResponseModel extends SanityCommonResponseFields {
// 	slug!: {
// 		current: string;
// 		_type: _type;
// 	}
// 	author?: Ref;
// 	title?: string;
// 	body?: SanityBlockContentModel[];
// 	mainImage?: SanityImageModel[];
// }


export class SanityResponse<T> {
	query!: string;
	result: T[] = [];
	ms?: number;
}


/* different _type models */
export class SanityNavItemModel extends SanityCommonResponseFields {
	label!: string;
	url!: string;
}

export class SanityFAQModel extends SanityCommonResponseFields {
	title!: string;
	body!: SanityBlockContentModel[];
	summary!: SanityBlockContentModel[];
	featured_image!: SanityImageModel | null;
	featured_image_alt!: string;
	categories!: string;
	tags!: string;
}

export class SanityPagesModel extends SanityCommonResponseFields {
	background!: SanityImageModel | null;
	tag!: string;
	heading!: string;
	description!: SanityBlockContentModel[];
}