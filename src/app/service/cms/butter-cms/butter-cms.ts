
export type butterCmsQueryKeys = 'navigation_menu' | 'collection_test_001' | 'navigation_menu_item';

// these types has many ButterCmsPages .. Though each types may have different pages.
// This is page_type, blog type and collection type .. all must be same.
export type ButterBlogTypes = 'faq';
export type ButterPageTypes = 'home' | 'faq'; 
export type ButterCollectionTypes = 'home'; 

export class ButterCmsQueryStringModel {
	private keys!: string;
	test!: number;
	preview!: number;
	get _keys(): butterCmsQueryKeys[] {
		return this.keys.split(',') as butterCmsQueryKeys[];
	}
	set _keys(key: butterCmsQueryKeys[]) {
		this.keys = key.join('');
	}
}

type collection_test_001_keys = 'greeting' | 'affectiveness';
type navigation_menu_keys = 'name' | 'menu_items';
type navigation_menu_item_keys = 'label' | 'url';
type contentKeys = collection_test_001_keys | navigation_menu_keys | navigation_menu_item_keys;
export class PaginationMeta {
	count!: number;
	next_page!: null | number;
	previous_page!: null | number;
}

class ButterMeta {
	meta?: {
		id: number;
	};
}
export class GetContentModel<meta> {
	data!: {
		[ key in butterCmsQueryKeys ]?: (ButterMeta & { [ key in contentKeys ]?: any })[]
	};
	meta!: meta;
}

class CommonButters {
	updated!: string;
	published!: string;
	slug!: string;
}

export class GetBlogPostModel extends CommonButters {
	status!: string;
	created!: string;
	title!: string;
	body!: string;
	summary!: string;
	seo_title!: string;
	meta_description!: string;
	featured_image_alt!: string;
	url!: string;
	featured_image!: string | null;
	author!: ButterUserProfile;
	tags!: ButterItemIdentity[];
	categories!: ButterItemIdentity[];
}



/* common */
export class ButterUserProfile {
	bio: string = "";
	slug: string = "";
	email: string = "";
	title: string = "";
	last_name: string = "";
	first_name: string = "";
	facebook_url: string = "";
	linkedin_url: string = "";
	instagram_url: string = "";
	pinterest_url: string = "";
	profile_image: string = "";
	twitter_handle: string = "";
}

export class ButterItemIdentity {
	name!: string;
	slug!: string;
}

export class ButterPagination<T> {
	meta: PaginationMeta = {} as PaginationMeta;
	data: T[] = [];
}
export class ButterPaginationObj<T> {
	meta: PaginationMeta = {} as PaginationMeta;
	data: T = {} as T;
}

export class ButterFAQPageModel {
	"page_title"!: string;
	"background"!: string;
	"background-color"!: string;
}
export class ButterHomePageModel {
	heading!: string;
	description!: string;
	background!: string;
	'background-color'!: string
}
export class ButterPagesModel<page> extends CommonButters {
	name!: string;
	page_type!: string;
	fields: page = {} as page;
}

export class ButterHomeCollectionModel extends ButterMeta {
	label!: string;
	endpoint!: string;
}

export class ButterCollectionListModel<T> {
	/* T is collection model */
	[key: string]: T[];
}