
export type butterCmsQueryKeys = 'navigation_menu' | 'collection_test_001' | 'navigation_menu_item';

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

class ContentItem {
	meta!: {
		id: number;
	};
}
export class GetContentModel<meta> {
	data!: {
		[ key in butterCmsQueryKeys ]?: (ContentItem & { [ key in contentKeys ]?: any })[]
	};
	meta!: meta;
}

export class GetBlogPostModel<meta> {
	data: {
		status: string;
		created: string;
		updated: string;
		published: string;
		title: string;
		slug: string;
		body: string;
		summary: string;
		seo_title: string;
		meta_description: string;
		featured_image_alt: string;
		url: string;
		featured_image: string | null;
		author: ButterUserProfile;
		tags: ButterItemIdentity[];
		categories: ButterItemIdentity[];
	}[] = [];
	meta!: meta;
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

class ButterItemIdentity {
	name!: string;
	slug!: string;
}