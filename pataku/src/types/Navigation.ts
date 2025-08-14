export interface NavigationItem {
  title: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[] | DropdownGroup[];
}

export interface DropdownItem {
  title: string;
  href: string;
  badge?: string;
}

export interface DropdownGroup {
  group: string;
  items: DropdownItem[];
}

export interface CategoryItem {
  title: string;
  href: string;
  hasSubmenu?: boolean;
  submenuItems?: CategoryItem[];
}


