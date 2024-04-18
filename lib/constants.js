export const DOMAIN = "http://localhost:10008";

export const WORDPRESS_API = DOMAIN + "/wp-json/wp/v2";

export const PRODUCTS_LIST_URL =
  WORDPRESS_API + "/products?_fields=id,slug,title,acf";

export const POSTS_LIST_URL =
  WORDPRESS_API +
  "/posts?_fields=id,slug,title,excerpt,acf&acf_format=standard";

export const SINGLE_POST_URL =
  WORDPRESS_API +
  "/posts?_fields=id,slug,title,content,acf&acf_format=standard&slug=";

export const SINGLE_PAGE_URL =
  WORDPRESS_API + "/pages?_fields=id,slug,title,acf_flexible_content&slug=";

export const ACF_OPTIONS_URL = DOMAIN + "/wp-json/acf/v3/options/options";
