
export class SanityQueryModel {
	_type?: 'block' | 'span' | 'post' | 'category'; // Type is schema name in sanity project.
	_key?: "a6eeb8ed4b7f";
}


type _typeData = 'reference' | 'slug';
type _typeSchema = 'author' | 'blockContent' | 'category' | 'post'; // These are schema name of sanity.io project's schemas
type _typeImage = 'sanity.imageHotspot' | 'reference' | 'sanity.imageCrop' | 'image';
type _type = _typeData | _typeSchema;

class Ref {
	_type?: _type;
	_ref?: string;
}
export class SanityTextEditorBody {
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
export class QueryResponseModel {
	_createdAt!: Date;
	_updatedAt!: Date;
	_rev!: string;
	_type!: _type;
	_id!: string;
	slug!: {
		current: string;
		_type: _type;
	}

	author?: Ref;
	title?: string;
	body?: SanityTextEditorBody[];
	mainImage?: {
		hotspot: {
			y: number,
			height: number,
			_type: _typeImage,
			width: number,
			x: number
		},
		_type: _typeImage,
		asset: {
			_ref: string, // image file name
			_type: _typeImage;
		},
		crop: {
			top: number,
			left: number,
			bottom: number,
			_type: _typeImage,
			right: number
		}
	}
}


export class SanityResponse<T> {
	query!: string;
	result: T[] = [];
}