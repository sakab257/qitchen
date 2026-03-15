export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureCardData {
  title: string;
  href: string;
  image: string;
}

export interface MenuItemData {
  name: string;
  description: string;
  price: string;
  image: string;
  dietary?: "vegetarian";
}

export interface MenuCategoryData {
  id: string;
  label: string;
  items: MenuItemData[];
}

export interface AwardData {
  title: string;
  subtitle: string;
}
