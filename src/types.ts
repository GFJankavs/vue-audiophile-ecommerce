export interface AudiophileData {
  id: number
  slug: string
  name: string
  image: CategoryImage
  category: string
  categoryImage: CategoryImage
  new: boolean
  price: number
  description: string
  features: string
  includes: Include[]
  gallery: Gallery
  others: Other[]
}

export interface CategoryImage {
  mobile: string
  tablet: string
  desktop: string
}

export interface Gallery {
  first: CategoryImage
  second: CategoryImage
  third: CategoryImage
}

export interface Include {
  quantity: number
  item: string
}

export interface Other {
  slug: string
  name: string
  image: CategoryImage
}

export interface CheckoutFormData {
  name: string,
  email: string,
  phone: string,
  address: string,
  zip: string,
  city: string,
  country: { name: string, code: string },
  payment: 'money' | 'cash',
  eMoney: {
    number: string;
    pin: string;
  }
}

export interface Country {
  name: string,
  code: string
}
