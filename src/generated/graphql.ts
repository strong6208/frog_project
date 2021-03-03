import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Long type */
  Long: any;
  /** UUID String */
  UUID: any;
  /** Built-in java.math.BigDecimal */
  BigDecimal: any;
  /** Built-in scalar representing an instant in time */
  Instant: any;
  /** Built-in scalar representing a local date */
  LocalDate: any;
  /** Unrepresentable type */
  UNREPRESENTABLE: any;
};



export type AddonEntity = {
  __typename?: 'AddonEntity';
  /** Addon's cost */
  cost?: Maybe<Scalars['BigDecimal']>;
  /** Addon's weight */
  weight?: Maybe<Scalars['BigDecimal']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Addon's title */
  title?: Maybe<Scalars['String']>;
  /** Addon's slug */
  slug?: Maybe<Scalars['String']>;
};

export type AddonSetDestinationRequirementEntity = {
  __typename?: 'AddonSetDestinationRequirementEntity';
  /** Addon rule's temperature */
  temp?: Maybe<Scalars['Int']>;
  /** Addon rule's comparison */
  comparison?: Maybe<Comparison>;
  /** Addon rule's addon set */
  addonSet?: Maybe<AddonSetEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipping rule's slug */
  slug?: Maybe<Scalars['String']>;
};

export type AddonSetEntity = {
  __typename?: 'AddonSetEntity';
  /** Addon set's addons */
  addons?: Maybe<Array<Maybe<AddonEntity>>>;
  /** Addon set's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Addon set's priority */
  priority?: Maybe<Scalars['Long']>;
  /** Addon set's slug */
  slug?: Maybe<Scalars['String']>;
};

export type AddonSetSourceRequirementEntity = {
  __typename?: 'AddonSetSourceRequirementEntity';
  /** Addon rule's temperature */
  temp?: Maybe<Scalars['Int']>;
  /** Addon rule's comparison */
  comparison?: Maybe<Comparison>;
  /** Addon rule's addon set */
  addonSet?: Maybe<AddonSetEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipping rule's slug */
  slug?: Maybe<Scalars['String']>;
};

export type AddressEntity = {
  __typename?: 'AddressEntity';
  /** Address' ISO country code */
  country?: Maybe<Scalars['String']>;
  /** Address' last name */
  lastName?: Maybe<Scalars['String']>;
  /** Address' city name */
  city?: Maybe<Scalars['String']>;
  /** Address' Magento Id */
  magentoId?: Maybe<Scalars['Long']>;
  /** Address' latitude */
  latitude?: Maybe<Scalars['Float']>;
  /** Address' postal code */
  postalCode?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Address' verification source */
  addressVerificationSource?: Maybe<AddressVerificationSource>;
  /** Address' first name */
  firstName?: Maybe<Scalars['String']>;
  /** Address' residential status */
  residential?: Maybe<Scalars['Boolean']>;
  /** Address' company */
  company?: Maybe<Scalars['String']>;
  /** Address' state (or province) abbreviation */
  state?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Address' last line */
  line2?: Maybe<Scalars['String']>;
  /** Address' first line */
  line1?: Maybe<Scalars['String']>;
  /** Address' longitude */
  longitude?: Maybe<Scalars['Float']>;
};

export enum AddressVerificationSource {
  Unverified = 'Unverified',
  FedEx = 'FedEx',
  Ups = 'UPS',
  SmartyStreets = 'SmartyStreets'
}

export type AmazonProfileEntity = {
  __typename?: 'AmazonProfileEntity';
  /** Amazon profile's ASIN */
  asin?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Amazon profile's Seller SKU */
  sellerSku?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
};

export type AmazonSalesOrderEntity = {
  __typename?: 'AmazonSalesOrderEntity';
  /** Shipping address' company */
  shippingCompany?: Maybe<Scalars['String']>;
  /** Shipping address' city name */
  shippingCity?: Maybe<Scalars['String']>;
  /** Order's number */
  orderNumber?: Maybe<Scalars['String']>;
  /** Order's tax total */
  taxTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's sub total */
  subTotal?: Maybe<Scalars['BigDecimal']>;
  /** Shipping address' postal code */
  shippingPostalCode?: Maybe<Scalars['String']>;
  /** Billing address' company */
  billingCompany?: Maybe<Scalars['String']>;
  /** Billing address' last line */
  billingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' ISO country code */
  shippingCountry?: Maybe<Scalars['String']>;
  /** Billing address' first line */
  billingLine1?: Maybe<Scalars['String']>;
  /** Billing address' first name */
  billingFirstName?: Maybe<Scalars['String']>;
  /** Billing address' ISO country code */
  billingCountry?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Sales order's items */
  salesOrderItems?: Maybe<Array<Maybe<SalesOrderItemEntity>>>;
  /** Billing address' verification source */
  billingAddressVerificationSource?: Maybe<AddressVerificationSource>;
  /** Order's email */
  email?: Maybe<Scalars['String']>;
  /** Shipping address' residential status */
  shippingResidential?: Maybe<Scalars['Boolean']>;
  /** Order's handling total */
  handlingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Shipping address' last line */
  shippingLine2?: Maybe<Scalars['String']>;
  /** Amazon created at */
  amazonCreatedAt?: Maybe<Scalars['Instant']>;
  /** Shipping address' last name */
  shippingLastName?: Maybe<Scalars['String']>;
  /** Order's grand total */
  grandTotal?: Maybe<Scalars['BigDecimal']>;
  /** Billing address' state (or province) abbreviation */
  billingState?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Order's tax code */
  taxCode?: Maybe<Scalars['String']>;
  /** Sales order's shipments */
  shipments?: Maybe<Array<Maybe<ShipmentEntity>>>;
  /** Order's shipping total */
  shippingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Billing address' last name */
  billingLastName?: Maybe<Scalars['String']>;
  /** Shipping address' verification source */
  shippingAddressVerificationSource?: Maybe<AddressVerificationSource>;
  /** Order's discount total */
  discountTotal?: Maybe<Scalars['BigDecimal']>;
  /** Amazon order id */
  amazonId?: Maybe<Scalars['String']>;
  /** Order's phone */
  phone?: Maybe<Scalars['String']>;
  /** Amazon updated at */
  amazonUpdatedAt?: Maybe<Scalars['Instant']>;
  /** Billing address' postal code */
  billingPostalCode?: Maybe<Scalars['String']>;
  /** Order's placed time */
  placedTime?: Maybe<Scalars['Instant']>;
  /** Shipping address' first name */
  shippingFirstName?: Maybe<Scalars['String']>;
  /** Shipping address' state (or province) abbreviation */
  shippingState?: Maybe<Scalars['String']>;
  /** Shipping address' first line */
  shippingLine1?: Maybe<Scalars['String']>;
  /** Billing address' city name */
  billingCity?: Maybe<Scalars['String']>;
  /** Order's status */
  status?: Maybe<SalesOrderStatus>;
};

export type AnimalEntity = {
  __typename?: 'AnimalEntity';
  /** Animal's parent */
  parent?: Maybe<AnimalEntity>;
  /** Animal's route path */
  routePath?: Maybe<Scalars['String']>;
  /** Animal's explicit products */
  explicitProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Animal's route key */
  routeKey?: Maybe<Scalars['String']>;
  /** Animal's children */
  children?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Animal's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Animal's slug */
  slug?: Maybe<Scalars['String']>;
};


export type BinEntity = {
  __typename?: 'BinEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Bin's human-readable ID */
  binId?: Maybe<Scalars['String']>;
};

export type BrandEntity = {
  __typename?: 'BrandEntity';
  /** Brand's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Brand's slug */
  slug?: Maybe<Scalars['String']>;
  /** Brand's simple products */
  products?: Maybe<Array<Maybe<SimpleProductEntity>>>;
};

export enum Carrier {
  Dhl = 'DHL',
  Fedex = 'FEDEX',
  Ups = 'UPS',
  Usps = 'USPS'
}

export type CartEntity = {
  __typename?: 'CartEntity';
  /** Shipping address' company */
  shippingCompany?: Maybe<Scalars['String']>;
  /** Shipping address' city name */
  shippingCity?: Maybe<Scalars['String']>;
  /** Cart's tax total */
  taxTotal?: Maybe<Scalars['BigDecimal']>;
  /** Shipping address' postal code */
  shippingPostalCode?: Maybe<Scalars['String']>;
  /** Billing address' company */
  billingCompany?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Billing address' last line */
  billingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' ISO country code */
  shippingCountry?: Maybe<Scalars['String']>;
  /** Billing address' first line */
  billingLine1?: Maybe<Scalars['String']>;
  /** Billing address' first name */
  billingFirstName?: Maybe<Scalars['String']>;
  /** Billing address' ISO country code */
  billingCountry?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Cart's item groups */
  cartItemGroups?: Maybe<Array<Maybe<CartItemGroupEntity>>>;
  /** Billing address' verification source */
  billingAddressVerificationSource?: Maybe<AddressVerificationSource>;
  /** Cart's email */
  email?: Maybe<Scalars['String']>;
  /** Shipping address' residential status */
  shippingResidential?: Maybe<Scalars['Boolean']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Shipping address' last line */
  shippingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' last name */
  shippingLastName?: Maybe<Scalars['String']>;
  /** Billing address' state (or province) abbreviation */
  billingState?: Maybe<Scalars['String']>;
  /** Cart's tax code */
  taxCode?: Maybe<Scalars['String']>;
  /** Billing address' last name */
  billingLastName?: Maybe<Scalars['String']>;
  /** Shipping address' verification source */
  shippingAddressVerificationSource?: Maybe<AddressVerificationSource>;
  /** Cart's discount total */
  discountTotal?: Maybe<Scalars['BigDecimal']>;
  /** Cart's item count */
  cartItemsCount?: Maybe<Scalars['Long']>;
  /** Cart's phone */
  phone?: Maybe<Scalars['String']>;
  /** Cart's subtotal */
  subtotal?: Maybe<Scalars['BigDecimal']>;
  /** Billing address' postal code */
  billingPostalCode?: Maybe<Scalars['String']>;
  /** Shipping address' first name */
  shippingFirstName?: Maybe<Scalars['String']>;
  /** Cart's batch item count */
  cartBatchItemsCount?: Maybe<Scalars['Long']>;
  /** Shipping address' state (or province) abbreviation */
  shippingState?: Maybe<Scalars['String']>;
  /** Cart's items */
  cartItems?: Maybe<Array<Maybe<CartItemEntity>>>;
  /** Shipping address' first line */
  shippingLine1?: Maybe<Scalars['String']>;
  /** Billing address' city name */
  billingCity?: Maybe<Scalars['String']>;
};

export type CartItemEntity = {
  __typename?: 'CartItemEntity';
  /** Cart item's overridden shipping needs type */
  overriddenShippingNeedsType?: Maybe<ShippingNeedsType>;
  /** Cart item's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Cart item's group */
  cartItemGroup?: Maybe<CartItemGroupEntity>;
  /** Cart item's regular price */
  regularPrice?: Maybe<Scalars['BigDecimal']>;
  /** Cart item's discount price */
  discountPrice?: Maybe<Scalars['BigDecimal']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Cart item's simple product */
  simpleProduct?: Maybe<SimpleProductEntity>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
};

export type CartItemGroupEntity = {
  __typename?: 'CartItemGroupEntity';
  /** Cart item group's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Cart item group's regular price */
  regularPrice?: Maybe<Scalars['BigDecimal']>;
  /** Cart item group's discount price */
  discountPrice?: Maybe<Scalars['BigDecimal']>;
  /** Cart item group's kit product */
  kitProduct?: Maybe<KitProductEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  /** Category's parent */
  parent?: Maybe<CategoryEntity>;
  /** Category's route key */
  routeKey?: Maybe<Scalars['String']>;
  /** Category's Magento Id */
  magentoId?: Maybe<Scalars['String']>;
  /** Category's active flag */
  active?: Maybe<Scalars['Boolean']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Category's published revision */
  publishedRevision?: Maybe<CategoryRevisionEntity>;
  /** Category's implicit products */
  implicitProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Category's meta description */
  metaDescription?: Maybe<Scalars['String']>;
  /** Category's route path */
  routePath?: Maybe<Scalars['String']>;
  /** Category's explicit products */
  explicitProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Category's meta keywords */
  metaKeywords?: Maybe<Scalars['String']>;
  /** Category's children */
  children?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Category's meta title */
  metaTitle?: Maybe<Scalars['String']>;
  /** Category's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Category's slug */
  slug?: Maybe<Scalars['String']>;
};

export type CategoryResults = {
  __typename?: 'CategoryResults';
  /** Result's category */
  category?: Maybe<CategoryEntity>;
  /** Result's products */
  products?: Maybe<GraphQlPage_ProductEntity>;
};

export type CategoryRevisionEntity = {
  __typename?: 'CategoryRevisionEntity';
  /** Category revision's html content */
  htmlContent?: Maybe<Scalars['String']>;
};

export type ClientTokenDetail = {
  __typename?: 'ClientTokenDetail';
  /** Client token */
  clientToken?: Maybe<Scalars['String']>;
};

export enum Comparison {
  LessThan = 'LESS_THAN',
  GreaterThan = 'GREATER_THAN'
}

export type DepartmentEntity = {
  __typename?: 'DepartmentEntity';
  /** Department's parent */
  parent?: Maybe<DepartmentEntity>;
  /** Department's route path */
  routePath?: Maybe<Scalars['String']>;
  /** Department's explicit products */
  explicitProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Department's route key */
  routeKey?: Maybe<Scalars['String']>;
  /** Department's children */
  children?: Maybe<Array<Maybe<DepartmentEntity>>>;
  /** Department's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Department's implicit products */
  implicitProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Department's slug */
  slug?: Maybe<Scalars['String']>;
};

export type DestinationRestrictionEntity = {
  __typename?: 'DestinationRestrictionEntity';
  /** Destination restriction's domestic only */
  domesticOnly?: Maybe<Scalars['Boolean']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Destination restriction's prohibited states */
  prohibitedStates?: Maybe<Array<Maybe<State>>>;
  /** Destination restriction's slug */
  slug?: Maybe<Scalars['String']>;
};

export type GraphQlLikeQueryFilterInput = {
  /** Field pattern. */
  pattern?: Maybe<Scalars['String']>;
  /** Abbreviation for 'pattern'. */
  p?: Maybe<Scalars['String']>;
};

export type GraphQlPage_BrandEntity = {
  __typename?: 'GraphQLPage_BrandEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<BrandEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_CategoryEntity = {
  __typename?: 'GraphQLPage_CategoryEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_DepartmentEntity = {
  __typename?: 'GraphQLPage_DepartmentEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<DepartmentEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_ProductEntity = {
  __typename?: 'GraphQLPage_ProductEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_SalesOrderEntity = {
  __typename?: 'GraphQLPage_SalesOrderEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<SalesOrderEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_SimpleProductEntity = {
  __typename?: 'GraphQLPage_SimpleProductEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<SimpleProductEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_SupplierEntity = {
  __typename?: 'GraphQLPage_SupplierEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<SupplierEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPageableInput = {
  /** Sort conditions for the current view. */
  sort?: Maybe<Array<Maybe<GraphQlSortInput>>>;
  /** The number of the page to display. */
  page?: Maybe<Scalars['Int']>;
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
};

export type GraphQlSingleValueFilter_BooleanInput = {
  /** Filter condition (default: eq). */
  condition?: Maybe<QueryCondition>;
  /** Field value. */
  value?: Maybe<Scalars['Boolean']>;
  /** Abbreviation for 'condition'. */
  c?: Maybe<QueryCondition>;
  /** Abbreviation for 'value'. */
  v?: Maybe<Scalars['Boolean']>;
};

export type GraphQlSortInput = {
  /** Abbreviation for 'field'. */
  f?: Maybe<Scalars['String']>;
  /** Name of the field to sort by. */
  field?: Maybe<Scalars['String']>;
  /** Direction of sorting (default: asc). */
  direction?: Maybe<SortDirection>;
  /** Abbreviation for 'direction'. */
  d?: Maybe<SortDirection>;
};


export type InventoryDetails = {
  __typename?: 'InventoryDetails';
  /** Result's warehouse quantity available */
  warehouseQuantityAvailable?: Maybe<Scalars['Long']>;
  /** Result's product */
  product?: Maybe<SimpleProductEntity>;
  /** Result's warehouse quantity on shelf */
  warehouseQuantityOnShelf?: Maybe<Scalars['Long']>;
  /** Result's warehouse weekly consumption rate */
  warehouseWeeklyConsumptionRate?: Maybe<Scalars['Float']>;
  /** Result's warehouse weekly consumption variance */
  warehouseWeeklyConsumptionVariance?: Maybe<Scalars['Float']>;
  /** Result's warehouse run out days, 97% confidence */
  warehouseRunOutDays97?: Maybe<Scalars['Float']>;
  /** Result's warehouse quantity unshipped */
  warehouseQuantityUnshipped?: Maybe<Scalars['Long']>;
  /** Result's warehouse run out days, 85% confidence */
  warehouseRunOutDays85?: Maybe<Scalars['Float']>;
};

export type InventoryQuantityCacheEntity = {
  __typename?: 'InventoryQuantityCacheEntity';
  /** Cache's quantity available for sale */
  quantityAvailableForSale?: Maybe<Scalars['Long']>;
  /** Cache's quantity on shelf */
  quantityOnShelf?: Maybe<Scalars['Long']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Cache's warehouse */
  warehouse?: Maybe<WarehouseEntity>;
  /** Cache's timestamp */
  timestamp?: Maybe<Scalars['Instant']>;
};

export type InventoryResult = {
  __typename?: 'InventoryResult';
  /** Result's global total quantity */
  globalQuantityTotal?: Maybe<Scalars['Long']>;
  /** Result's product */
  product?: Maybe<SimpleProductEntity>;
  /** Result's global available quantity */
  globalQuantityAvailable?: Maybe<Scalars['Long']>;
  /** Result's global unshipped quantity */
  globalQuantityUnshipped?: Maybe<Scalars['Long']>;
};

export type InventoryStatsCacheEntity = {
  __typename?: 'InventoryStatsCacheEntity';
  /** Cache's weekly consumption variance */
  weeklyConsumptionVariance?: Maybe<Scalars['Float']>;
  /** Cache's weekly consumption rate */
  weeklyConsumptionRate?: Maybe<Scalars['Float']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Cache's warehouse */
  warehouse?: Maybe<WarehouseEntity>;
  /** Cache's timestamp */
  timestamp?: Maybe<Scalars['Instant']>;
};

export type KitItemEntity = {
  __typename?: 'KitItemEntity';
  /** Kit item's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Kit item's simple product */
  simpleProduct?: Maybe<SimpleProductEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
};

export type KitProductEntity = {
  __typename?: 'KitProductEntity';
  /** Product's Magento Id */
  magentoId?: Maybe<Scalars['String']>;
  /** Product's title */
  title?: Maybe<Scalars['String']>;
  /** Product's meta description */
  metaDescription?: Maybe<Scalars['String']>;
  /** Product's number of ratings */
  countRating?: Maybe<Scalars['BigDecimal']>;
  /** Product's meta keywords */
  metaKeywords?: Maybe<Scalars['String']>;
  /** Product's price */
  price?: Maybe<Scalars['BigDecimal']>;
  /** Product's popularity */
  popularity?: Maybe<Scalars['BigDecimal']>;
  /** Product's average rating */
  averageRating?: Maybe<Scalars['BigDecimal']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Product's SKU */
  sku?: Maybe<Scalars['String']>;
  /** Product's explicit animals */
  explicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's slug */
  slug?: Maybe<Scalars['String']>;
  /** Product's shipping needs */
  shippingNeeds?: Maybe<ShippingNeedsType>;
  /** Product's implicit categories */
  implicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Product's UPC */
  upc?: Maybe<Scalars['String']>;
  /** Product's active flag */
  active?: Maybe<Scalars['Boolean']>;
  /** Product's published revision */
  publishedRevision?: Maybe<ProductRevisionEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Product's shipping rule set */
  shippingRuleSet?: Maybe<ShippingRuleSetEntity>;
  /** Product's medias */
  medias?: Maybe<Array<Maybe<MediaEntity>>>;
  /** Kit's items */
  kitItems?: Maybe<Array<Maybe<KitItemEntity>>>;
  /** Product's implicit animals */
  implicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's meta title */
  metaTitle?: Maybe<Scalars['String']>;
  /** Product's explicit categories */
  explicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Product's variation set */
  variationSet?: Maybe<VariationSetEntity>;
};

export type LiveArrivalGuaranteeEntity = {
  __typename?: 'LiveArrivalGuaranteeEntity';
  /** Live arrival rule's max temp */
  maxTemp?: Maybe<Scalars['Int']>;
  /** Live arrival rule's transit time type */
  transitTimeType?: Maybe<TransitTimeType>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipping rule's slug */
  slug?: Maybe<Scalars['String']>;
  /** Live arrival rule's min temp */
  minTemp?: Maybe<Scalars['Int']>;
};

export enum LiveArrivalGuaranteeState {
  NotApplicable = 'NotApplicable',
  NotGuaranteed = 'NotGuaranteed',
  UnableToDetermine = 'UnableToDetermine',
  Guaranteed = 'Guaranteed'
}



export type MagentoSalesOrderEntity = {
  __typename?: 'MagentoSalesOrderEntity';
  /** Shipping address' company */
  shippingCompany?: Maybe<Scalars['String']>;
  /** Shipping address' city name */
  shippingCity?: Maybe<Scalars['String']>;
  /** Order's number */
  orderNumber?: Maybe<Scalars['String']>;
  /** Magento order status */
  magentoStatus?: Maybe<Scalars['String']>;
  /** Order's tax total */
  taxTotal?: Maybe<Scalars['BigDecimal']>;
  /** Magento order id */
  magentoId?: Maybe<Scalars['String']>;
  /** Order's sub total */
  subTotal?: Maybe<Scalars['BigDecimal']>;
  /** Shipping address' postal code */
  shippingPostalCode?: Maybe<Scalars['String']>;
  /** Billing address' company */
  billingCompany?: Maybe<Scalars['String']>;
  /** Magento created at */
  magentoCreatedAt?: Maybe<Scalars['Instant']>;
  /** Magento shipping */
  magentoShipping?: Maybe<Scalars['String']>;
  /** Billing address' last line */
  billingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' ISO country code */
  shippingCountry?: Maybe<Scalars['String']>;
  /** Billing address' first line */
  billingLine1?: Maybe<Scalars['String']>;
  /** Billing address' first name */
  billingFirstName?: Maybe<Scalars['String']>;
  /** Billing address' ISO country code */
  billingCountry?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Sales order's items */
  salesOrderItems?: Maybe<Array<Maybe<SalesOrderItemEntity>>>;
  /** Billing address' verification source */
  billingAddressVerificationSource?: Maybe<AddressVerificationSource>;
  /** Order's email */
  email?: Maybe<Scalars['String']>;
  /** Shipping address' residential status */
  shippingResidential?: Maybe<Scalars['Boolean']>;
  /** Order's handling total */
  handlingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Shipping address' last line */
  shippingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' last name */
  shippingLastName?: Maybe<Scalars['String']>;
  /** Order's grand total */
  grandTotal?: Maybe<Scalars['BigDecimal']>;
  /** Magento updated at */
  magentoUpdatedAt?: Maybe<Scalars['Instant']>;
  /** Billing address' state (or province) abbreviation */
  billingState?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Order's tax code */
  taxCode?: Maybe<Scalars['String']>;
  /** Sales order's shipments */
  shipments?: Maybe<Array<Maybe<ShipmentEntity>>>;
  /** Order's shipping total */
  shippingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Billing address' last name */
  billingLastName?: Maybe<Scalars['String']>;
  /** Shipping address' verification source */
  shippingAddressVerificationSource?: Maybe<AddressVerificationSource>;
  /** Order's discount total */
  discountTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's phone */
  phone?: Maybe<Scalars['String']>;
  /** Billing address' postal code */
  billingPostalCode?: Maybe<Scalars['String']>;
  /** Order's placed time */
  placedTime?: Maybe<Scalars['Instant']>;
  /** Shipping address' first name */
  shippingFirstName?: Maybe<Scalars['String']>;
  /** Shipping address' state (or province) abbreviation */
  shippingState?: Maybe<Scalars['String']>;
  /** Shipping address' first line */
  shippingLine1?: Maybe<Scalars['String']>;
  /** Billing address' city name */
  billingCity?: Maybe<Scalars['String']>;
  /** Order's status */
  status?: Maybe<SalesOrderStatus>;
};

export type MediaEntity = {
  __typename?: 'MediaEntity';
  /** Media's sequence */
  sequence?: Maybe<Scalars['Int']>;
  /** Media's product */
  product?: Maybe<ProductEntity>;
  /** Media's type */
  mediaType?: Maybe<MediaType>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Media's url */
  url?: Maybe<Scalars['String']>;
};

export enum MediaType {
  Image = 'Image',
  YouTubeVideo = 'YouTubeVideo',
  VimeoVideo = 'VimeoVideo',
  Panorama = 'Panorama'
}

/** Mutation root */
export type Mutation = {
  __typename?: 'Mutation';
  /** Adds a printer to an existing workstation */
  autoprintAddPrinter?: Maybe<PrinterEntity>;
  /** Completes checkout and processes payment. */
  cartCheckout?: Maybe<SalesOrderEntity>;
  /** Refreshes a sales order (with Amazon) by entity id */
  amazonSalesOrderRefresh?: Maybe<AmazonSalesOrderEntity>;
  /** Refreshes a sales order (with Magento) by entity id */
  magentoSalesOrderRefresh?: Maybe<MagentoSalesOrderEntity>;
  /** Triggers an update to all inventory caches */
  maintenanceUpdateInventoryCaches?: Maybe<Scalars['Boolean']>;
  /** Clears the shipping address */
  cartClearShippingAddress?: Maybe<CartEntity>;
  /** Gets the next shipment to print at this warehouse */
  autoprintGetNextForWarehouse?: Maybe<PrintJob>;
  /** Gets status if customer is already signed up */
  marketingStatus: Scalars['Boolean'];
  /** Adds user to marketing list */
  marketingSubscribe: Scalars['Boolean'];
  /** Updates bin on a simple product */
  simpleProductSetBin?: Maybe<SimpleProductEntity>;
  /** Registers a new user, with raw password */
  userRegister?: Maybe<UserEntity>;
  /** Triggers a re-sync of all orders with Magento */
  maintenanceMagentoReSyncOrders?: Maybe<Scalars['Boolean']>;
  /** Sets inventory for a simple product */
  inventorySet?: Maybe<InventoryResult>;
  /** Removes all quantity of selected simple product from user's cart */
  cartRemoveAllSimpleProduct?: Maybe<CartEntity>;
  /** Triggers a re-sync of all categories with Magento */
  maintenanceMagentoSyncAllCategories?: Maybe<Scalars['Boolean']>;
  /** Verifies an existing address */
  addressVerify?: Maybe<AddressEntity>;
  /** Gets inventory for a simple product */
  inventoryGet?: Maybe<InventoryResult>;
  /** Refreshes a simple product (with Magento) by entity id */
  simpleProductRefresh?: Maybe<SimpleProductEntity>;
  /** Refreshes a new user with Magento */
  userRefresh?: Maybe<UserEntity>;
  /** Gets inventory details for a simple product */
  inventoryGetDetails?: Maybe<InventoryDetails>;
  /** Refreshes a simple product (with Magento) by entity id */
  simpleProductRefreshBySku?: Maybe<SimpleProductEntity>;
  /** Creates a new category */
  categoryCreate?: Maybe<CategoryEntity>;
  /** Changes quantity of selected kit product in user's cart */
  cartChangeQuantityKitProduct?: Maybe<CartEntity>;
  /** Triggers a re-index of hibernate cache */
  maintenanceCacheFlushAll?: Maybe<Scalars['Boolean']>;
  /** Enrolls a workstation for use with AutoPrint */
  autoprintEnrollWorkstation?: Maybe<WorkstationEntity>;
  /** Refreshes a sales order (with Walmart) by purchase order id */
  walmartSalesOrderRefresh?: Maybe<WalmartSalesOrderEntity>;
  /** Sets the billing address to one of the user's addresses */
  cartSetBillingAddressById?: Maybe<CartEntity>;
  /** Triggers a re-sync of all products with Magento */
  maintenanceMagentoSyncAllProducts?: Maybe<Scalars['Boolean']>;
  /** Sets active flag */
  categorySetActive?: Maybe<CategoryEntity>;
  /** Adds quantity of selected simple product to user's cart */
  cartAddSimpleProduct?: Maybe<CartEntity>;
  /** Adds inventory for a simple product */
  inventoryAddDetails?: Maybe<InventoryDetails>;
  /** Triggers a re-index of all items in Elastic */
  maintenanceElasticReindexAll?: Maybe<Scalars['Boolean']>;
  /** Sets the shipping address to one of the user's addresses */
  cartSetShippingAddressById?: Maybe<CartEntity>;
  /** Triggers a re-sync of updated orders with Walmart */
  maintenanceWalmartSyncUpdatedOrders?: Maybe<Scalars['Boolean']>;
  /** Sets a department's parent */
  departmentSetParent?: Maybe<DepartmentEntity>;
  /** Summarizes the cart's totals */
  cartSummarize?: Maybe<SalesOrderEntity>;
  /** Deletes an existing address */
  addressDelete: Scalars['Boolean'];
  /** Creates a new simple product */
  simpleProductCreate?: Maybe<SimpleProductEntity>;
  /** Updates an existing address */
  addressUpdate?: Maybe<AddressEntity>;
  /** Creates a new user, with password hash */
  userCreate?: Maybe<UserEntity>;
  /** Clears the billing address */
  cartClearBillingAddress?: Maybe<CartEntity>;
  /** Triggers a re-sync of updated orders with Amazon */
  maintenanceAmazonSyncUpdatedOrders?: Maybe<Scalars['Boolean']>;
  /** Sets a category's parent */
  categorySetParent?: Maybe<CategoryEntity>;
  /** Provides making stock status */
  makingStockStatus?: Maybe<Array<Maybe<InventoryDetails>>>;
  /** Adds inventory for a simple product */
  inventoryAdd?: Maybe<InventoryResult>;
  /** Creates a new address */
  addressCreate?: Maybe<AddressEntity>;
  /** Sets inventory for a simple product */
  inventorySetDetails?: Maybe<InventoryDetails>;
  /** Gets printers for an existing workstation */
  autoprintListPrinters?: Maybe<Array<Maybe<PrinterEntity>>>;
  /** Sets the shipping zip code, as a shortcut for shipping rates */
  cartSetShippingZip?: Maybe<CartEntity>;
  /** Tests a workstation for use with AutoPrint */
  autoprintTestWorkstation?: Maybe<WorkstationEntity>;
  /** Triggers a re-sync of updated orders with Magento */
  maintenanceMagentoSyncUpdatedOrders?: Maybe<Scalars['Boolean']>;
  /** Sets the shipping address */
  cartSetShippingAddress?: Maybe<CartEntity>;
  /** Changes quantity of selected simple product in user's cart */
  cartChangeQuantitySimpleProduct?: Maybe<CartEntity>;
  /** Triggers a re-sync of updated orders with Amazon */
  maintenanceAmazonReSyncOrders?: Maybe<Scalars['Boolean']>;
  /** Generates a client token for current user. */
  checkoutGetClientToken?: Maybe<ClientTokenDetail>;
  /** Removes all quantity of selected kit product from user's cart */
  cartRemoveAllKitProduct?: Maybe<CartEntity>;
  /** Removes bin from a simple product */
  simpleProductClearBin?: Maybe<SimpleProductEntity>;
  /** Adds quantity of selected kit product to user's cart */
  cartAddKitProduct?: Maybe<CartEntity>;
  /** Creates a new department */
  departmentCreate?: Maybe<DepartmentEntity>;
  /** Sets the billing address */
  cartSetBillingAddress?: Maybe<CartEntity>;
};


/** Mutation root */
export type MutationAutoprintAddPrinterArgs = {
  machineKey: Scalars['String'];
  printerName: Scalars['String'];
};


/** Mutation root */
export type MutationCartCheckoutArgs = {
  method?: Maybe<Scalars['String']>;
  cartId?: Maybe<Scalars['UUID']>;
  deviceData?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
};


/** Mutation root */
export type MutationAmazonSalesOrderRefreshArgs = {
  amazonId: Scalars['String'];
};


/** Mutation root */
export type MutationMagentoSalesOrderRefreshArgs = {
  magentoId: Scalars['String'];
};


/** Mutation root */
export type MutationCartClearShippingAddressArgs = {
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationAutoprintGetNextForWarehouseArgs = {
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationMarketingSubscribeArgs = {
  email?: Maybe<Scalars['String']>;
};


/** Mutation root */
export type MutationSimpleProductSetBinArgs = {
  bin: Scalars['String'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationUserRegisterArgs = {
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};


/** Mutation root */
export type MutationInventorySetArgs = {
  quantity: Scalars['Long'];
  id: Scalars['UUID'];
  warehouse?: Maybe<Scalars['String']>;
};


/** Mutation root */
export type MutationCartRemoveAllSimpleProductArgs = {
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationAddressVerifyArgs = {
  commit: Scalars['Boolean'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationInventoryGetArgs = {
  id: Scalars['UUID'];
  warehouse?: Maybe<Scalars['String']>;
};


/** Mutation root */
export type MutationSimpleProductRefreshArgs = {
  magentoId: Scalars['String'];
};


/** Mutation root */
export type MutationUserRefreshArgs = {
  magentoId: Scalars['String'];
};


/** Mutation root */
export type MutationInventoryGetDetailsArgs = {
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationSimpleProductRefreshBySkuArgs = {
  sku: Scalars['String'];
};


/** Mutation root */
export type MutationCategoryCreateArgs = {
  name: Scalars['String'];
  slug: Scalars['String'];
};


/** Mutation root */
export type MutationCartChangeQuantityKitProductArgs = {
  quantity: Scalars['Long'];
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationAutoprintEnrollWorkstationArgs = {
  machineKey: Scalars['String'];
  name: Scalars['String'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationWalmartSalesOrderRefreshArgs = {
  purchaseOrderId: Scalars['String'];
};


/** Mutation root */
export type MutationCartSetBillingAddressByIdArgs = {
  cartId?: Maybe<Scalars['UUID']>;
  addressId: Scalars['UUID'];
};


/** Mutation root */
export type MutationCategorySetActiveArgs = {
  active: Scalars['Boolean'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationCartAddSimpleProductArgs = {
  quantity: Scalars['Long'];
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationInventoryAddDetailsArgs = {
  quantity: Scalars['Long'];
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationCartSetShippingAddressByIdArgs = {
  cartId?: Maybe<Scalars['UUID']>;
  addressId: Scalars['UUID'];
};


/** Mutation root */
export type MutationDepartmentSetParentArgs = {
  parent: Scalars['UUID'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationCartSummarizeArgs = {
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationAddressDeleteArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationSimpleProductCreateArgs = {
  price: Scalars['BigDecimal'];
  title: Scalars['String'];
  sku: Scalars['String'];
  slug: Scalars['String'];
};


/** Mutation root */
export type MutationAddressUpdateArgs = {
  country: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  residential: Scalars['Boolean'];
  city: Scalars['String'];
  postalCode: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  id: Scalars['UUID'];
  line2?: Maybe<Scalars['String']>;
  line1: Scalars['String'];
};


/** Mutation root */
export type MutationUserCreateArgs = {
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  passwordHash: Scalars['String'];
  email: Scalars['String'];
};


/** Mutation root */
export type MutationCartClearBillingAddressArgs = {
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationCategorySetParentArgs = {
  parent: Scalars['UUID'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationMakingStockStatusArgs = {
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationInventoryAddArgs = {
  quantity: Scalars['Long'];
  id: Scalars['UUID'];
  warehouse?: Maybe<Scalars['String']>;
};


/** Mutation root */
export type MutationAddressCreateArgs = {
  country: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  residential: Scalars['Boolean'];
  city: Scalars['String'];
  postalCode: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  line2?: Maybe<Scalars['String']>;
  line1: Scalars['String'];
};


/** Mutation root */
export type MutationInventorySetDetailsArgs = {
  quantity: Scalars['Long'];
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationAutoprintListPrintersArgs = {
  machineKey: Scalars['String'];
};


/** Mutation root */
export type MutationCartSetShippingZipArgs = {
  zip: Scalars['String'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationAutoprintTestWorkstationArgs = {
  machineKey: Scalars['String'];
};


/** Mutation root */
export type MutationCartSetShippingAddressArgs = {
  country: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  residential?: Maybe<Scalars['Boolean']>;
  city: Scalars['String'];
  postalCode: Scalars['String'];
  cartId?: Maybe<Scalars['UUID']>;
  company?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  line2?: Maybe<Scalars['String']>;
  line1: Scalars['String'];
};


/** Mutation root */
export type MutationCartChangeQuantitySimpleProductArgs = {
  quantity: Scalars['Long'];
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationCartRemoveAllKitProductArgs = {
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationSimpleProductClearBinArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationCartAddKitProductArgs = {
  quantity: Scalars['Long'];
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationDepartmentCreateArgs = {
  name: Scalars['String'];
  slug: Scalars['String'];
};


/** Mutation root */
export type MutationCartSetBillingAddressArgs = {
  country: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  city: Scalars['String'];
  postalCode: Scalars['String'];
  cartId?: Maybe<Scalars['UUID']>;
  company?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  line2?: Maybe<Scalars['String']>;
  line1: Scalars['String'];
};

export type PdfContents = {
  __typename?: 'PdfContents';
  /** PDF's filename */
  fileName?: Maybe<Scalars['String']>;
  /** PDF's data */
  data?: Maybe<Scalars['String']>;
  /** PDF's HTML content */
  htmlContent?: Maybe<Scalars['String']>;
};

export type PrinterEntity = {
  __typename?: 'PrinterEntity';
  /** Printer's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
};

export type PrintJob = {
  __typename?: 'PrintJob';
  /** Print job's tray */
  tray?: Maybe<Scalars['String']>;
  /** Print job's name */
  name?: Maybe<Scalars['String']>;
  /** Print job's data */
  dataBase64?: Maybe<Scalars['String']>;
  /** Print job's printer */
  printer?: Maybe<Scalars['String']>;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  /** Product's Magento Id */
  magentoId?: Maybe<Scalars['String']>;
  /** Product's title */
  title?: Maybe<Scalars['String']>;
  /** Product's meta description */
  metaDescription?: Maybe<Scalars['String']>;
  /** Product's number of ratings */
  countRating?: Maybe<Scalars['BigDecimal']>;
  /** Product's meta keywords */
  metaKeywords?: Maybe<Scalars['String']>;
  /** Product's price */
  price?: Maybe<Scalars['BigDecimal']>;
  /** Product's popularity */
  popularity?: Maybe<Scalars['BigDecimal']>;
  /** Product's average rating */
  averageRating?: Maybe<Scalars['BigDecimal']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Product's SKU */
  sku?: Maybe<Scalars['String']>;
  /** Product's explicit animals */
  explicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's slug */
  slug?: Maybe<Scalars['String']>;
  /** Product's shipping needs */
  shippingNeeds?: Maybe<ShippingNeedsType>;
  /** Product's implicit categories */
  implicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Product's UPC */
  upc?: Maybe<Scalars['String']>;
  /** Product's active flag */
  active?: Maybe<Scalars['Boolean']>;
  /** Product's published revision */
  publishedRevision?: Maybe<ProductRevisionEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Product's shipping rule set */
  shippingRuleSet?: Maybe<ShippingRuleSetEntity>;
  /** Product's medias */
  medias?: Maybe<Array<Maybe<MediaEntity>>>;
  /** Product's implicit animals */
  implicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's meta title */
  metaTitle?: Maybe<Scalars['String']>;
  /** Product's explicit categories */
  explicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Product's variation set */
  variationSet?: Maybe<VariationSetEntity>;
};

export type ProductRevisionEntity = {
  __typename?: 'ProductRevisionEntity';
  /** Product revision's html content */
  htmlContent?: Maybe<Scalars['String']>;
};

/** Query root */
export type Query = {
  __typename?: 'Query';
  /** Provides user info for current user */
  userInfo?: Maybe<UserEntity>;
  /** Creates transient shipments for sales order items, then rolls back */
  salesOrderComputeBestShipping?: Maybe<SalesOrderEntity>;
  /** Generate a PDF for the sales order */
  salesOrderGeneratePdf?: Maybe<PdfContents>;
  /** Lists brands */
  brandList?: Maybe<GraphQlPage_BrandEntity>;
  /** Locates the root department */
  departmentRoot?: Maybe<DepartmentEntity>;
  /** Lists departments */
  departmentList?: Maybe<GraphQlPage_DepartmentEntity>;
  /** Provides user info by email */
  userFindByEmail?: Maybe<UserEntity>;
  /** Search categories */
  categorySearch?: Maybe<GraphQlPage_CategoryEntity>;
  /** Lists address for current user */
  addressList?: Maybe<Array<Maybe<AddressEntity>>>;
  /** Locates a product by slug */
  productBySlug?: Maybe<ProductEntity>;
  /** Lists categories */
  categoryList?: Maybe<GraphQlPage_CategoryEntity>;
  /** Provides warehouse info */
  warehouseFindByName?: Maybe<WarehouseEntity>;
  /** Locates a simple product by id */
  simpleProductInfo?: Maybe<SimpleProductEntity>;
  /** Lists suppliers */
  supplierList?: Maybe<GraphQlPage_SupplierEntity>;
  /** Search products */
  productSearch?: Maybe<SearchResults>;
  /** Provides warehouse info */
  warehouseList?: Maybe<Array<Maybe<WarehouseEntity>>>;
  /** Locates a category by slug */
  categoryBySlug?: Maybe<CategoryResults>;
  /** Locates a simple product by UPC */
  simpleProductFindByUpc?: Maybe<SimpleProductEntity>;
  /** Locates the root category */
  categoryRoot?: Maybe<CategoryEntity>;
  /** Lists sales orders */
  salesOrderList?: Maybe<GraphQlPage_SalesOrderEntity>;
  /** Lists simple products */
  simpleProductList?: Maybe<GraphQlPage_SimpleProductEntity>;
  /** Locates a department by slug */
  departmentBySlug?: Maybe<DepartmentEntity>;
  /** Locates a simple product by SKU */
  simpleProductFindBySku?: Maybe<SimpleProductEntity>;
  /** Filters simple products */
  simpleProductFilter?: Maybe<GraphQlPage_SimpleProductEntity>;
  /** Locates a product by id */
  productInfo?: Maybe<ProductEntity>;
  /** Provides cart info for current user */
  cartInfo?: Maybe<CartEntity>;
  /** Retrieves a sales order */
  salesOrderInfo?: Maybe<SalesOrderEntity>;
  /** Filters sales orders */
  salesOrderFilter?: Maybe<GraphQlPage_SalesOrderEntity>;
  /** Lists products */
  productList?: Maybe<GraphQlPage_ProductEntity>;
};


/** Query root */
export type QuerySalesOrderComputeBestShippingArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QueryBrandListArgs = {
  page: GraphQlPageableInput;
};


/** Query root */
export type QueryDepartmentListArgs = {
  page?: Maybe<GraphQlPageableInput>;
};


/** Query root */
export type QueryUserFindByEmailArgs = {
  email: Scalars['String'];
};


/** Query root */
export type QueryCategorySearchArgs = {
  query: Scalars['String'];
  page?: Maybe<GraphQlPageableInput>;
};


/** Query root */
export type QueryProductBySlugArgs = {
  slug: Scalars['String'];
};


/** Query root */
export type QueryCategoryListArgs = {
  page: GraphQlPageableInput;
};


/** Query root */
export type QueryWarehouseFindByNameArgs = {
  name: Scalars['String'];
};


/** Query root */
export type QuerySimpleProductInfoArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QuerySupplierListArgs = {
  page: GraphQlPageableInput;
};


/** Query root */
export type QueryProductSearchArgs = {
  query?: Maybe<Scalars['String']>;
  animal?: Maybe<Scalars['String']>;
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  category?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
};


/** Query root */
export type QueryCategoryBySlugArgs = {
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  slug: Scalars['String'];
};


/** Query root */
export type QuerySimpleProductFindByUpcArgs = {
  upc: Scalars['String'];
};


/** Query root */
export type QuerySalesOrderListArgs = {
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
};


/** Query root */
export type QuerySimpleProductListArgs = {
  page?: Maybe<GraphQlPageableInput>;
};


/** Query root */
export type QueryDepartmentBySlugArgs = {
  slug: Scalars['String'];
};


/** Query root */
export type QuerySimpleProductFindBySkuArgs = {
  sku: Scalars['String'];
};


/** Query root */
export type QuerySimpleProductFilterArgs = {
  supplier?: Maybe<Scalars['String']>;
  active?: Maybe<GraphQlSingleValueFilter_BooleanInput>;
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  category?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  sku?: Maybe<GraphQlLikeQueryFilterInput>;
  title?: Maybe<GraphQlLikeQueryFilterInput>;
  brand?: Maybe<Scalars['String']>;
};


/** Query root */
export type QueryProductInfoArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QueryCartInfoArgs = {
  cartId?: Maybe<Scalars['UUID']>;
};


/** Query root */
export type QuerySalesOrderInfoArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QuerySalesOrderFilterArgs = {
  billingLastName?: Maybe<GraphQlLikeQueryFilterInput>;
  orderNumber?: Maybe<GraphQlLikeQueryFilterInput>;
  billingFirstName?: Maybe<GraphQlLikeQueryFilterInput>;
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  email?: Maybe<GraphQlLikeQueryFilterInput>;
};


/** Query root */
export type QueryProductListArgs = {
  page?: Maybe<GraphQlPageableInput>;
};

export enum QueryCondition {
  Eq = 'eq',
  Ne = 'ne',
  Gt = 'gt',
  Ge = 'ge',
  Lt = 'lt',
  Le = 'le',
  IsNull = 'isNull',
  NotNull = 'notNull'
}

export type SalesOrderEntity = {
  __typename?: 'SalesOrderEntity';
  /** Shipping address' company */
  shippingCompany?: Maybe<Scalars['String']>;
  /** Shipping address' city name */
  shippingCity?: Maybe<Scalars['String']>;
  /** Order's number */
  orderNumber?: Maybe<Scalars['String']>;
  /** Order's tax total */
  taxTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's sub total */
  subTotal?: Maybe<Scalars['BigDecimal']>;
  /** Shipping address' postal code */
  shippingPostalCode?: Maybe<Scalars['String']>;
  /** Billing address' company */
  billingCompany?: Maybe<Scalars['String']>;
  /** Billing address' last line */
  billingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' ISO country code */
  shippingCountry?: Maybe<Scalars['String']>;
  /** Billing address' first line */
  billingLine1?: Maybe<Scalars['String']>;
  /** Billing address' first name */
  billingFirstName?: Maybe<Scalars['String']>;
  /** Billing address' ISO country code */
  billingCountry?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Sales order's items */
  salesOrderItems?: Maybe<Array<Maybe<SalesOrderItemEntity>>>;
  /** Billing address' verification source */
  billingAddressVerificationSource?: Maybe<AddressVerificationSource>;
  /** Order's email */
  email?: Maybe<Scalars['String']>;
  /** Shipping address' residential status */
  shippingResidential?: Maybe<Scalars['Boolean']>;
  /** Order's handling total */
  handlingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Shipping address' last line */
  shippingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' last name */
  shippingLastName?: Maybe<Scalars['String']>;
  /** Order's grand total */
  grandTotal?: Maybe<Scalars['BigDecimal']>;
  /** Billing address' state (or province) abbreviation */
  billingState?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Order's tax code */
  taxCode?: Maybe<Scalars['String']>;
  /** Sales order's shipments */
  shipments?: Maybe<Array<Maybe<ShipmentEntity>>>;
  /** Order's shipping total */
  shippingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Billing address' last name */
  billingLastName?: Maybe<Scalars['String']>;
  /** Shipping address' verification source */
  shippingAddressVerificationSource?: Maybe<AddressVerificationSource>;
  /** Order's discount total */
  discountTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's phone */
  phone?: Maybe<Scalars['String']>;
  /** Order's alternate number */
  alternateOrderNumber?: Maybe<Scalars['String']>;
  /** Billing address' postal code */
  billingPostalCode?: Maybe<Scalars['String']>;
  /** Order's placed time */
  placedTime?: Maybe<Scalars['Instant']>;
  /** Shipping address' first name */
  shippingFirstName?: Maybe<Scalars['String']>;
  /** Shipping address' state (or province) abbreviation */
  shippingState?: Maybe<Scalars['String']>;
  /** Shipping address' first line */
  shippingLine1?: Maybe<Scalars['String']>;
  /** Billing address' city name */
  billingCity?: Maybe<Scalars['String']>;
  /** Order's status */
  status?: Maybe<SalesOrderStatus>;
};

export type SalesOrderItemEntity = {
  __typename?: 'SalesOrderItemEntity';
  /** Order item's unit weight */
  unitWeight?: Maybe<Scalars['BigDecimal']>;
  /** Order item's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Order item's discount */
  discountAmount?: Maybe<Scalars['BigDecimal']>;
  /** Order item's simple product */
  simpleProduct?: Maybe<SimpleProductEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Order item's tax code */
  taxCode?: Maybe<Scalars['String']>;
  /** Order item's line cost */
  lineAmount?: Maybe<Scalars['BigDecimal']>;
  /** Order item's overridden shipping needs */
  overriddenShippingNeedsType?: Maybe<ShippingNeedsType>;
  /** Order item's expected delivery */
  expectedDelivery?: Maybe<Scalars['LocalDate']>;
  /** Order item's name */
  name?: Maybe<Scalars['String']>;
  /** Order item's unit cost */
  unitAmount?: Maybe<Scalars['BigDecimal']>;
  /** Order item's shipping amount */
  shippingAmount?: Maybe<Scalars['BigDecimal']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Order item's SKU */
  sku?: Maybe<Scalars['String']>;
  /** Order item's tax amount */
  taxAmount?: Maybe<Scalars['BigDecimal']>;
  /** Order item's group */
  salesOrderItemGroup?: Maybe<SalesOrderItemGroupEntity>;
  /** Order item's live arrival guarantee */
  liveArrivalGuaranteeState?: Maybe<LiveArrivalGuaranteeState>;
};

export type SalesOrderItemGroupEntity = {
  __typename?: 'SalesOrderItemGroupEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
};

export enum SalesOrderStatus {
  PendingPayment = 'PendingPayment',
  PendingReleaseOfHold = 'PendingReleaseOfHold',
  Unshipped = 'Unshipped',
  PartiallyShipped = 'PartiallyShipped',
  Shipped = 'Shipped',
  Cancelled = 'Cancelled'
}

export enum SalesTaxRules {
  Taxable = 'TAXABLE',
  NotTaxable = 'NOT_TAXABLE'
}

export type SearchResults = {
  __typename?: 'SearchResults';
  /** Result's animal */
  animal?: Maybe<AnimalEntity>;
  /** Result's category */
  category?: Maybe<CategoryEntity>;
  /** Result's brand */
  brand?: Maybe<BrandEntity>;
  /** Result's products */
  products?: Maybe<GraphQlPage_ProductEntity>;
};

export enum Service {
  FedexGround = 'FEDEX_GROUND',
  FedexHomeDelivery = 'FEDEX_HOME_DELIVERY',
  FedexExpressSaver = 'FEDEX_EXPRESS_SAVER',
  FedexTwoDay = 'FEDEX_TWO_DAY',
  FedexStandardOvernight = 'FEDEX_STANDARD_OVERNIGHT',
  FedexPriorityOvernight = 'FEDEX_PRIORITY_OVERNIGHT',
  FedexFirstOvernight = 'FEDEX_FIRST_OVERNIGHT',
  FedexSmartPost = 'FEDEX_SMART_POST',
  FedexInternationalGround = 'FEDEX_INTERNATIONAL_GROUND',
  FedexInternationalEconomy = 'FEDEX_INTERNATIONAL_ECONOMY',
  UpsGround = 'UPS_GROUND',
  UpsSecondDayAir = 'UPS_SECOND_DAY_AIR',
  UpsNextDayAir = 'UPS_NEXT_DAY_AIR',
  UpsSurePost = 'UPS_SURE_POST',
  UpsWorldwideExpress = 'UPS_WORLDWIDE_EXPRESS',
  UpsWorldwideExpressPlus = 'UPS_WORLDWIDE_EXPRESS_PLUS',
  UpsWorldwideExpedited = 'UPS_WORLDWIDE_EXPEDITED',
  UspsFirstClassMail = 'USPS_FIRST_CLASS_MAIL',
  UspsPriorityMail = 'USPS_PRIORITY_MAIL',
  UspsPriorityMailExpress = 'USPS_PRIORITY_MAIL_EXPRESS',
  UspsPriorityMailInternational = 'USPS_PRIORITY_MAIL_INTERNATIONAL'
}

export type ShipmentAddonEntity = {
  __typename?: 'ShipmentAddonEntity';
  /** Shipment addon's shipment */
  shipment?: Maybe<ShipmentEntity>;
  /** Shipment addon's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipment addon's addon */
  addon?: Maybe<AddonEntity>;
};

export type ShipmentEntity = {
  __typename?: 'ShipmentEntity';
  /** Shipment's shipping needs */
  shippingNeeds?: Maybe<ShippingNeedsType>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Shipment's warehouse */
  warehouse?: Maybe<WarehouseEntity>;
  /** Shipment's items */
  shipmentItems?: Maybe<Array<Maybe<ShipmentItemEntity>>>;
  /** Shipment's estimated delivery date */
  estimatedDeliveryDate?: Maybe<Scalars['LocalDate']>;
  /** Shipment's sales order */
  salesOrder?: Maybe<SalesOrderEntity>;
  /** Shipment's carrier */
  carrier?: Maybe<Carrier>;
  /** Shipment's service */
  service?: Maybe<Service>;
  /** Shipment's addons */
  shipmentAddons?: Maybe<Array<Maybe<ShipmentAddonEntity>>>;
  /** Shipment's estimated ship date */
  estimatedShipDate?: Maybe<Scalars['LocalDate']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipment's shipment number */
  shipmentNumber?: Maybe<Scalars['String']>;
  /** Shipment's status */
  shipmentStatus?: Maybe<ShipmentStatus>;
};

export type ShipmentItemEntity = {
  __typename?: 'ShipmentItemEntity';
  /** Shipment item's sales order item */
  salesOrderItem?: Maybe<SalesOrderItemEntity>;
  /** Shipment item's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Shipment item's shipment */
  shipment?: Maybe<ShipmentEntity>;
  /** Shipment item's simple product */
  simpleProduct?: Maybe<SimpleProductEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipment item's live arrival guarantee */
  liveArrivalGuaranteeState?: Maybe<LiveArrivalGuaranteeState>;
};

export enum ShipmentStatus {
  Pending = 'Pending',
  NeedsScheduling = 'NeedsScheduling',
  Unshipped = 'Unshipped',
  Shipped = 'Shipped'
}

export enum ShippingNeedsType {
  ItemNotShipped = 'ItemNotShipped',
  StoreShowPickupOnly = 'StoreShowPickupOnly',
  ScheduleWithCustomer = 'ScheduleWithCustomer',
  CourierDelivery = 'CourierDelivery'
}

export type ShippingRuleSetEntity = {
  __typename?: 'ShippingRuleSetEntity';
  /** Shipping rule set's live arrival guarantees */
  liveArrivalGuarantees?: Maybe<Array<Maybe<LiveArrivalGuaranteeEntity>>>;
  /** Shipping rule set's live destination restriction */
  destinationRestriction?: Maybe<DestinationRestrictionEntity>;
  /** Shipping rule set's transit time restrictions */
  transitTimeRestriction?: Maybe<TransitTimeRestrictionEntity>;
  /** Shipping rule set's ships alone restriction */
  shipsAloneRestriction?: Maybe<ShipsAloneRestrictionEntity>;
  /** Shipping rule set's name */
  name?: Maybe<Scalars['String']>;
  /** Shipping rule set's addon source requirements */
  addonSetSourceRequirements?: Maybe<Array<Maybe<AddonSetSourceRequirementEntity>>>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipping rule set's slug */
  slug?: Maybe<Scalars['String']>;
  /** Shipping rule set's addon destination requirements */
  addonSetDestinationRequirements?: Maybe<Array<Maybe<AddonSetDestinationRequirementEntity>>>;
};

export type ShipsAloneRestrictionEntity = {
  __typename?: 'ShipsAloneRestrictionEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipping rule's slug */
  slug?: Maybe<Scalars['String']>;
};

export type SimpleProductEntity = {
  __typename?: 'SimpleProductEntity';
  /** Simple product's ships alone */
  shipsAlone?: Maybe<Scalars['Boolean']>;
  /** Simple product's sales tax rules */
  salesTaxRules?: Maybe<SalesTaxRules>;
  /** Product's Magento Id */
  magentoId?: Maybe<Scalars['String']>;
  /** Simple product's shipping restrictions */
  shippingRestrictions?: Maybe<Scalars['String']>;
  /** Product's title */
  title?: Maybe<Scalars['String']>;
  /** Product's meta description */
  metaDescription?: Maybe<Scalars['String']>;
  /** Product's number of ratings */
  countRating?: Maybe<Scalars['BigDecimal']>;
  /** Product's meta keywords */
  metaKeywords?: Maybe<Scalars['String']>;
  /** Product's price */
  price?: Maybe<Scalars['BigDecimal']>;
  /** Product's average rating */
  averageRating?: Maybe<Scalars['BigDecimal']>;
  /** Product's popularity */
  popularity?: Maybe<Scalars['BigDecimal']>;
  /** Simple product's supplier */
  supplier?: Maybe<SupplierEntity>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Product's SKU */
  sku?: Maybe<Scalars['String']>;
  /** Simple product's brand */
  brand?: Maybe<BrandEntity>;
  /** Product's explicit animals */
  explicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's slug */
  slug?: Maybe<Scalars['String']>;
  /** Simple product's Amazon profile */
  amazonProfile?: Maybe<AmazonProfileEntity>;
  /** Simple product's shipping needs */
  shippingNeeds?: Maybe<ShippingNeedsType>;
  /** Simple product's bins */
  bins?: Maybe<Array<Maybe<BinEntity>>>;
  /** Simple product's inventory quantity caches */
  inventoryQuantityCaches?: Maybe<Array<Maybe<InventoryQuantityCacheEntity>>>;
  /** Simple product's cost */
  cost?: Maybe<Scalars['BigDecimal']>;
  /** Product's implicit categories */
  implicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Simple product's warehouses */
  warehouses?: Maybe<Array<Maybe<WarehouseEntity>>>;
  /** Simple product's weight */
  weight?: Maybe<Scalars['BigDecimal']>;
  /** Product's active flag */
  active?: Maybe<Scalars['Boolean']>;
  /** Product's UPC */
  upc?: Maybe<Scalars['String']>;
  /** Product's published revision */
  publishedRevision?: Maybe<ProductRevisionEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Simple product's inventory stats caches */
  inventoryStatsCaches?: Maybe<Array<Maybe<InventoryStatsCacheEntity>>>;
  /** Simple product's shipping rule set */
  shippingRuleSet?: Maybe<ShippingRuleSetEntity>;
  /** Product's medias */
  medias?: Maybe<Array<Maybe<MediaEntity>>>;
  /** Product's implicit animals */
  implicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's meta title */
  metaTitle?: Maybe<Scalars['String']>;
  /** Product's explicit department */
  explicitDepartment?: Maybe<DepartmentEntity>;
  /** Product's explicit categories */
  explicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Product's variation set */
  variationSet?: Maybe<VariationSetEntity>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum State {
  Ak = 'AK',
  Al = 'AL',
  Ar = 'AR',
  Az = 'AZ',
  Ca = 'CA',
  Co = 'CO',
  Ct = 'CT',
  De = 'DE',
  Dc = 'DC',
  Fl = 'FL',
  Ga = 'GA',
  Hi = 'HI',
  Ia = 'IA',
  Id = 'ID',
  Il = 'IL',
  In = 'IN',
  Ks = 'KS',
  Ky = 'KY',
  La = 'LA',
  Ma = 'MA',
  Md = 'MD',
  Me = 'ME',
  Mi = 'MI',
  Mn = 'MN',
  Mo = 'MO',
  Ms = 'MS',
  Mt = 'MT',
  Nc = 'NC',
  Nd = 'ND',
  Ne = 'NE',
  Nh = 'NH',
  Nj = 'NJ',
  Nm = 'NM',
  Nv = 'NV',
  Ny = 'NY',
  Oh = 'OH',
  Ok = 'OK',
  Or = 'OR',
  Pa = 'PA',
  Ri = 'RI',
  Sc = 'SC',
  Sd = 'SD',
  Tn = 'TN',
  Tx = 'TX',
  Ut = 'UT',
  Va = 'VA',
  Vt = 'VT',
  Wa = 'WA',
  Wi = 'WI',
  Wv = 'WV',
  Wy = 'WY',
  Aa = 'AA',
  Ae = 'AE',
  Ap = 'AP'
}

export type SupplierEntity = {
  __typename?: 'SupplierEntity';
  /** Supplier's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Supplier's slug */
  slug?: Maybe<Scalars['String']>;
  /** Supplier's simple products */
  products?: Maybe<Array<Maybe<SimpleProductEntity>>>;
};

export type TransitTimeRestrictionEntity = {
  __typename?: 'TransitTimeRestrictionEntity';
  /** Transit time rule's transit time type */
  transitTimeType?: Maybe<TransitTimeType>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipping rule's slug */
  slug?: Maybe<Scalars['String']>;
};

export enum TransitTimeType {
  OneDayService = 'OneDayService',
  TwoDayService = 'TwoDayService',
  GroundService = 'GroundService'
}


export type UserEntity = {
  __typename?: 'UserEntity';
  /** User's first name */
  firstName?: Maybe<Scalars['String']>;
  /** User's last name */
  lastName?: Maybe<Scalars['String']>;
  /** User's addresses */
  addresses?: Maybe<Array<Maybe<AddressEntity>>>;
  /** User's email is confirmed */
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  /** User's Magento Id */
  magentoId?: Maybe<Scalars['String']>;
  /** User is an admin */
  admin?: Maybe<Scalars['Boolean']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** User's email address */
  email?: Maybe<Scalars['String']>;
};


export type VariationSetEntity = {
  __typename?: 'VariationSetEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Variation set's products */
  products?: Maybe<Array<Maybe<ProductEntity>>>;
};

export type WalmartSalesOrderEntity = {
  __typename?: 'WalmartSalesOrderEntity';
  /** Shipping address' company */
  shippingCompany?: Maybe<Scalars['String']>;
  /** Shipping address' city name */
  shippingCity?: Maybe<Scalars['String']>;
  /** Order's number */
  orderNumber?: Maybe<Scalars['String']>;
  /** Walmart customer number */
  customerOrderId?: Maybe<Scalars['String']>;
  /** Order's tax total */
  taxTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's sub total */
  subTotal?: Maybe<Scalars['BigDecimal']>;
  /** Shipping address' postal code */
  shippingPostalCode?: Maybe<Scalars['String']>;
  /** Billing address' company */
  billingCompany?: Maybe<Scalars['String']>;
  /** Billing address' last line */
  billingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' ISO country code */
  shippingCountry?: Maybe<Scalars['String']>;
  /** Billing address' first line */
  billingLine1?: Maybe<Scalars['String']>;
  /** Billing address' first name */
  billingFirstName?: Maybe<Scalars['String']>;
  /** Billing address' ISO country code */
  billingCountry?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Sales order's items */
  salesOrderItems?: Maybe<Array<Maybe<SalesOrderItemEntity>>>;
  /** Billing address' verification source */
  billingAddressVerificationSource?: Maybe<AddressVerificationSource>;
  /** Order's email */
  email?: Maybe<Scalars['String']>;
  /** Shipping address' residential status */
  shippingResidential?: Maybe<Scalars['Boolean']>;
  /** Order's handling total */
  handlingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Shipping address' last line */
  shippingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' last name */
  shippingLastName?: Maybe<Scalars['String']>;
  /** Order's grand total */
  grandTotal?: Maybe<Scalars['BigDecimal']>;
  /** Billing address' state (or province) abbreviation */
  billingState?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Order's tax code */
  taxCode?: Maybe<Scalars['String']>;
  /** Sales order's shipments */
  shipments?: Maybe<Array<Maybe<ShipmentEntity>>>;
  /** Order's shipping total */
  shippingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Billing address' last name */
  billingLastName?: Maybe<Scalars['String']>;
  /** Shipping address' verification source */
  shippingAddressVerificationSource?: Maybe<AddressVerificationSource>;
  /** Order's discount total */
  discountTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's phone */
  phone?: Maybe<Scalars['String']>;
  /** Billing address' postal code */
  billingPostalCode?: Maybe<Scalars['String']>;
  /** Walmart purchase number */
  purchaseOrderId?: Maybe<Scalars['String']>;
  /** Order's placed time */
  placedTime?: Maybe<Scalars['Instant']>;
  /** Shipping address' first name */
  shippingFirstName?: Maybe<Scalars['String']>;
  /** Shipping address' state (or province) abbreviation */
  shippingState?: Maybe<Scalars['String']>;
  /** Shipping address' first line */
  shippingLine1?: Maybe<Scalars['String']>;
  /** Billing address' city name */
  billingCity?: Maybe<Scalars['String']>;
  /** Order's status */
  status?: Maybe<SalesOrderStatus>;
};

export type WarehouseEntity = {
  __typename?: 'WarehouseEntity';
  /** Warehouse' ISO country code */
  country?: Maybe<Scalars['String']>;
  /** Warehouse's city name */
  city?: Maybe<Scalars['String']>;
  /** Warehouse's postal code */
  postalCode?: Maybe<Scalars['String']>;
  /** Warehouse's latitude */
  latitude?: Maybe<Scalars['Float']>;
  /** Warehouse's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Warehouse's state (or province) abbreviation */
  state?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Warehouse's last line */
  line2?: Maybe<Scalars['String']>;
  /** Warehouse's first line */
  line1?: Maybe<Scalars['String']>;
  /** Warehouse's longitude */
  longitude?: Maybe<Scalars['Float']>;
};

export type WorkstationEntity = {
  __typename?: 'WorkstationEntity';
  /** Workstation's key */
  machineKey?: Maybe<Scalars['String']>;
  /** Workstation's printers */
  printers?: Maybe<Array<Maybe<PrinterEntity>>>;
  /** Workstation's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Workstation's warehouse */
  warehouse?: Maybe<WarehouseEntity>;
};

export type AutoprintAddPrinterMutationVariables = Exact<{
  machineKey: Scalars['String'];
  printerName: Scalars['String'];
}>;


export type AutoprintAddPrinterMutation = (
  { __typename?: 'Mutation' }
  & { autoprintAddPrinter?: Maybe<(
    { __typename?: 'PrinterEntity' }
    & Pick<PrinterEntity, 'id' | 'name'>
  )> }
);

export type AutoprintEnrollWorkstationMutationVariables = Exact<{
  warehouse: Scalars['String'];
  name: Scalars['String'];
  machineKey: Scalars['String'];
}>;


export type AutoprintEnrollWorkstationMutation = (
  { __typename?: 'Mutation' }
  & { autoprintEnrollWorkstation?: Maybe<(
    { __typename?: 'WorkstationEntity' }
    & Pick<WorkstationEntity, 'name' | 'machineKey'>
    & { warehouse?: Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'name'>
    )> }
  )> }
);

export type AutoprintListPrintersMutationVariables = Exact<{
  machineKey: Scalars['String'];
}>;


export type AutoprintListPrintersMutation = (
  { __typename?: 'Mutation' }
  & { autoprintListPrinters?: Maybe<Array<Maybe<(
    { __typename?: 'PrinterEntity' }
    & Pick<PrinterEntity, 'id' | 'name'>
  )>>> }
);

export type AutoprintTestWorkstationMutationVariables = Exact<{
  machineKey: Scalars['String'];
}>;


export type AutoprintTestWorkstationMutation = (
  { __typename?: 'Mutation' }
  & { autoprintTestWorkstation?: Maybe<(
    { __typename?: 'WorkstationEntity' }
    & Pick<WorkstationEntity, 'name' | 'machineKey'>
    & { warehouse?: Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'name'>
    )> }
  )> }
);

export type InventoryAddDetailsMutationVariables = Exact<{
  warehouse: Scalars['String'];
  id: Scalars['UUID'];
  quantity: Scalars['Long'];
}>;


export type InventoryAddDetailsMutation = (
  { __typename?: 'Mutation' }
  & { inventoryAddDetails?: Maybe<(
    { __typename?: 'InventoryDetails' }
    & Pick<InventoryDetails, 'warehouseQuantityOnShelf' | 'warehouseQuantityUnshipped' | 'warehouseQuantityAvailable' | 'warehouseWeeklyConsumptionRate' | 'warehouseWeeklyConsumptionVariance' | 'warehouseRunOutDays85' | 'warehouseRunOutDays97'>
    & { product?: Maybe<(
      { __typename?: 'SimpleProductEntity' }
      & Pick<SimpleProductEntity, 'id' | 'sku' | 'slug' | 'title'>
    )> }
  )> }
);

export type InventoryGetDetailsMutationVariables = Exact<{
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
}>;


export type InventoryGetDetailsMutation = (
  { __typename?: 'Mutation' }
  & { inventoryGetDetails?: Maybe<(
    { __typename?: 'InventoryDetails' }
    & Pick<InventoryDetails, 'warehouseQuantityOnShelf' | 'warehouseQuantityUnshipped' | 'warehouseQuantityAvailable' | 'warehouseWeeklyConsumptionRate' | 'warehouseWeeklyConsumptionVariance' | 'warehouseRunOutDays85' | 'warehouseRunOutDays97'>
    & { product?: Maybe<(
      { __typename?: 'SimpleProductEntity' }
      & Pick<SimpleProductEntity, 'id' | 'sku' | 'slug' | 'title'>
    )> }
  )> }
);

export type InventorySetDetailsMutationVariables = Exact<{
  warehouse: Scalars['String'];
  id: Scalars['UUID'];
  quantity: Scalars['Long'];
}>;


export type InventorySetDetailsMutation = (
  { __typename?: 'Mutation' }
  & { inventorySetDetails?: Maybe<(
    { __typename?: 'InventoryDetails' }
    & Pick<InventoryDetails, 'warehouseQuantityOnShelf' | 'warehouseQuantityUnshipped' | 'warehouseQuantityAvailable' | 'warehouseWeeklyConsumptionRate' | 'warehouseWeeklyConsumptionVariance' | 'warehouseRunOutDays85' | 'warehouseRunOutDays97'>
    & { product?: Maybe<(
      { __typename?: 'SimpleProductEntity' }
      & Pick<SimpleProductEntity, 'id' | 'sku' | 'slug' | 'title'>
    )> }
  )> }
);

export type MakingStockStatusMutationVariables = Exact<{
  warehouse: Scalars['String'];
}>;


export type MakingStockStatusMutation = (
  { __typename?: 'Mutation' }
  & { makingStockStatus?: Maybe<Array<Maybe<(
    { __typename?: 'InventoryDetails' }
    & Pick<InventoryDetails, 'warehouseQuantityAvailable' | 'warehouseWeeklyConsumptionRate' | 'warehouseWeeklyConsumptionVariance' | 'warehouseRunOutDays85' | 'warehouseRunOutDays97'>
    & { product?: Maybe<(
      { __typename?: 'SimpleProductEntity' }
      & Pick<SimpleProductEntity, 'id' | 'title' | 'sku'>
      & { medias?: Maybe<Array<Maybe<(
        { __typename?: 'MediaEntity' }
        & Pick<MediaEntity, 'id' | 'mediaType' | 'url'>
      )>>> }
    )> }
  )>>> }
);

export type SimpleProductFilterQueryVariables = Exact<{
  pageable: GraphQlPageableInput;
  title?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  brand?: Maybe<Scalars['String']>;
  supplier?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
}>;


export type SimpleProductFilterQuery = (
  { __typename?: 'Query' }
  & { simpleProductFilter?: Maybe<(
    { __typename?: 'GraphQLPage_SimpleProductEntity' }
    & Pick<GraphQlPage_SimpleProductEntity, 'count' | 'page' | 'pageSize'>
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'SimpleProductEntity' }
      & Pick<SimpleProductEntity, 'id' | 'slug' | 'sku' | 'title' | 'active' | 'price' | 'shippingNeeds'>
      & { explicitDepartment?: Maybe<(
        { __typename?: 'DepartmentEntity' }
        & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
        & { parent?: Maybe<(
          { __typename?: 'DepartmentEntity' }
          & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
        )> }
      )>, brand?: Maybe<(
        { __typename?: 'BrandEntity' }
        & Pick<BrandEntity, 'id' | 'slug' | 'name'>
      )>, supplier?: Maybe<(
        { __typename?: 'SupplierEntity' }
        & Pick<SupplierEntity, 'id' | 'slug' | 'name'>
      )>, medias?: Maybe<Array<Maybe<(
        { __typename?: 'MediaEntity' }
        & Pick<MediaEntity, 'id' | 'mediaType' | 'url'>
      )>>>, explicitCategories?: Maybe<Array<Maybe<(
        { __typename?: 'CategoryEntity' }
        & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        & { parent?: Maybe<(
          { __typename?: 'CategoryEntity' }
          & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
          & { parent?: Maybe<(
            { __typename?: 'CategoryEntity' }
            & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
          )> }
        )> }
      )>>>, shippingRuleSet?: Maybe<(
        { __typename?: 'ShippingRuleSetEntity' }
        & Pick<ShippingRuleSetEntity, 'id' | 'slug' | 'name'>
      )> }
    )>>> }
  )> }
);

export type SimpleProductFindBySkuQueryVariables = Exact<{
  sku: Scalars['String'];
}>;


export type SimpleProductFindBySkuQuery = (
  { __typename?: 'Query' }
  & { simpleProductFindBySku?: Maybe<(
    { __typename?: 'SimpleProductEntity' }
    & Pick<SimpleProductEntity, 'id' | 'slug' | 'sku' | 'upc' | 'title' | 'active' | 'price' | 'cost' | 'weight' | 'shippingNeeds' | 'shippingRestrictions'>
    & { warehouses?: Maybe<Array<Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'id' | 'name'>
    )>>>, bins?: Maybe<Array<Maybe<(
      { __typename?: 'BinEntity' }
      & Pick<BinEntity, 'id' | 'binId'>
    )>>>, inventoryQuantityCaches?: Maybe<Array<Maybe<(
      { __typename?: 'InventoryQuantityCacheEntity' }
      & Pick<InventoryQuantityCacheEntity, 'id' | 'quantityAvailableForSale'>
    )>>>, explicitDepartment?: Maybe<(
      { __typename?: 'DepartmentEntity' }
      & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'DepartmentEntity' }
        & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      )> }
    )>, brand?: Maybe<(
      { __typename?: 'BrandEntity' }
      & Pick<BrandEntity, 'id' | 'slug' | 'name'>
    )>, supplier?: Maybe<(
      { __typename?: 'SupplierEntity' }
      & Pick<SupplierEntity, 'id' | 'slug' | 'name'>
    )>, medias?: Maybe<Array<Maybe<(
      { __typename?: 'MediaEntity' }
      & Pick<MediaEntity, 'id' | 'mediaType' | 'url'>
    )>>>, explicitCategories?: Maybe<Array<Maybe<(
      { __typename?: 'CategoryEntity' }
      & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'CategoryEntity' }
        & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        & { parent?: Maybe<(
          { __typename?: 'CategoryEntity' }
          & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        )> }
      )> }
    )>>>, shippingRuleSet?: Maybe<(
      { __typename?: 'ShippingRuleSetEntity' }
      & Pick<ShippingRuleSetEntity, 'id' | 'slug' | 'name'>
    )> }
  )> }
);

export type SimpleProductFindByUpcQueryVariables = Exact<{
  upc: Scalars['String'];
}>;


export type SimpleProductFindByUpcQuery = (
  { __typename?: 'Query' }
  & { simpleProductFindByUpc?: Maybe<(
    { __typename?: 'SimpleProductEntity' }
    & Pick<SimpleProductEntity, 'id' | 'slug' | 'sku' | 'upc' | 'title' | 'active' | 'price' | 'cost' | 'weight' | 'shippingNeeds' | 'shippingRestrictions'>
    & { warehouses?: Maybe<Array<Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'id' | 'name'>
    )>>>, bins?: Maybe<Array<Maybe<(
      { __typename?: 'BinEntity' }
      & Pick<BinEntity, 'id' | 'binId'>
    )>>>, inventoryQuantityCaches?: Maybe<Array<Maybe<(
      { __typename?: 'InventoryQuantityCacheEntity' }
      & Pick<InventoryQuantityCacheEntity, 'id' | 'quantityAvailableForSale'>
    )>>>, explicitDepartment?: Maybe<(
      { __typename?: 'DepartmentEntity' }
      & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'DepartmentEntity' }
        & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      )> }
    )>, brand?: Maybe<(
      { __typename?: 'BrandEntity' }
      & Pick<BrandEntity, 'id' | 'slug' | 'name'>
    )>, supplier?: Maybe<(
      { __typename?: 'SupplierEntity' }
      & Pick<SupplierEntity, 'id' | 'slug' | 'name'>
    )>, medias?: Maybe<Array<Maybe<(
      { __typename?: 'MediaEntity' }
      & Pick<MediaEntity, 'id' | 'mediaType' | 'url'>
    )>>>, explicitCategories?: Maybe<Array<Maybe<(
      { __typename?: 'CategoryEntity' }
      & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'CategoryEntity' }
        & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        & { parent?: Maybe<(
          { __typename?: 'CategoryEntity' }
          & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        )> }
      )> }
    )>>>, shippingRuleSet?: Maybe<(
      { __typename?: 'ShippingRuleSetEntity' }
      & Pick<ShippingRuleSetEntity, 'id' | 'slug' | 'name'>
    )> }
  )> }
);

export type SimpleProductInfoQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type SimpleProductInfoQuery = (
  { __typename?: 'Query' }
  & { simpleProductInfo?: Maybe<(
    { __typename?: 'SimpleProductEntity' }
    & Pick<SimpleProductEntity, 'id' | 'slug' | 'sku' | 'upc' | 'title' | 'active' | 'price' | 'cost' | 'weight' | 'shippingNeeds' | 'shippingRestrictions'>
    & { warehouses?: Maybe<Array<Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'id' | 'name'>
    )>>>, bins?: Maybe<Array<Maybe<(
      { __typename?: 'BinEntity' }
      & Pick<BinEntity, 'id' | 'binId'>
    )>>>, inventoryQuantityCaches?: Maybe<Array<Maybe<(
      { __typename?: 'InventoryQuantityCacheEntity' }
      & Pick<InventoryQuantityCacheEntity, 'id' | 'quantityAvailableForSale'>
    )>>>, explicitDepartment?: Maybe<(
      { __typename?: 'DepartmentEntity' }
      & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'DepartmentEntity' }
        & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      )> }
    )>, brand?: Maybe<(
      { __typename?: 'BrandEntity' }
      & Pick<BrandEntity, 'id' | 'slug' | 'name'>
    )>, supplier?: Maybe<(
      { __typename?: 'SupplierEntity' }
      & Pick<SupplierEntity, 'id' | 'slug' | 'name'>
    )>, medias?: Maybe<Array<Maybe<(
      { __typename?: 'MediaEntity' }
      & Pick<MediaEntity, 'id' | 'mediaType' | 'url'>
    )>>>, explicitCategories?: Maybe<Array<Maybe<(
      { __typename?: 'CategoryEntity' }
      & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'CategoryEntity' }
        & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        & { parent?: Maybe<(
          { __typename?: 'CategoryEntity' }
          & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        )> }
      )> }
    )>>>, shippingRuleSet?: Maybe<(
      { __typename?: 'ShippingRuleSetEntity' }
      & Pick<ShippingRuleSetEntity, 'id' | 'slug' | 'name'>
    )> }
  )> }
);

export type UserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type UserInfoQuery = (
  { __typename?: 'Query' }
  & { userInfo?: Maybe<(
    { __typename?: 'UserEntity' }
    & Pick<UserEntity, 'email' | 'firstName' | 'lastName' | 'admin' | 'emailConfirmed'>
  )> }
);

export type WarehouseListQueryVariables = Exact<{ [key: string]: never; }>;


export type WarehouseListQuery = (
  { __typename?: 'Query' }
  & { warehouseList?: Maybe<Array<Maybe<(
    { __typename?: 'WarehouseEntity' }
    & Pick<WarehouseEntity, 'id' | 'name' | 'line1' | 'line2' | 'city' | 'state' | 'postalCode' | 'country' | 'latitude' | 'longitude'>
  )>>> }
);

export const AutoprintAddPrinterDocument = gql`
    mutation autoprintAddPrinter($machineKey: String!, $printerName: String!) {
  autoprintAddPrinter(machineKey: $machineKey, printerName: $printerName) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AutoprintAddPrinterGQL extends Apollo.Mutation<AutoprintAddPrinterMutation, AutoprintAddPrinterMutationVariables> {
    document = AutoprintAddPrinterDocument;
    
  }
export const AutoprintEnrollWorkstationDocument = gql`
    mutation autoprintEnrollWorkstation($warehouse: String!, $name: String!, $machineKey: String!) {
  autoprintEnrollWorkstation(warehouse: $warehouse, name: $name, machineKey: $machineKey) {
    name
    machineKey
    warehouse {
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AutoprintEnrollWorkstationGQL extends Apollo.Mutation<AutoprintEnrollWorkstationMutation, AutoprintEnrollWorkstationMutationVariables> {
    document = AutoprintEnrollWorkstationDocument;
    
  }
export const AutoprintListPrintersDocument = gql`
    mutation autoprintListPrinters($machineKey: String!) {
  autoprintListPrinters(machineKey: $machineKey) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AutoprintListPrintersGQL extends Apollo.Mutation<AutoprintListPrintersMutation, AutoprintListPrintersMutationVariables> {
    document = AutoprintListPrintersDocument;
    
  }
export const AutoprintTestWorkstationDocument = gql`
    mutation autoprintTestWorkstation($machineKey: String!) {
  autoprintTestWorkstation(machineKey: $machineKey) {
    name
    machineKey
    warehouse {
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AutoprintTestWorkstationGQL extends Apollo.Mutation<AutoprintTestWorkstationMutation, AutoprintTestWorkstationMutationVariables> {
    document = AutoprintTestWorkstationDocument;
    
  }
export const InventoryAddDetailsDocument = gql`
    mutation inventoryAddDetails($warehouse: String!, $id: UUID!, $quantity: Long!) {
  inventoryAddDetails(warehouse: $warehouse, id: $id, quantity: $quantity) {
    product {
      id
      sku
      slug
      title
    }
    warehouseQuantityOnShelf
    warehouseQuantityUnshipped
    warehouseQuantityAvailable
    warehouseWeeklyConsumptionRate
    warehouseWeeklyConsumptionVariance
    warehouseRunOutDays85
    warehouseRunOutDays97
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InventoryAddDetailsGQL extends Apollo.Mutation<InventoryAddDetailsMutation, InventoryAddDetailsMutationVariables> {
    document = InventoryAddDetailsDocument;
    
  }
export const InventoryGetDetailsDocument = gql`
    mutation inventoryGetDetails($id: UUID!, $warehouse: String!) {
  inventoryGetDetails(warehouse: $warehouse, id: $id) {
    product {
      id
      sku
      slug
      title
    }
    warehouseQuantityOnShelf
    warehouseQuantityUnshipped
    warehouseQuantityAvailable
    warehouseWeeklyConsumptionRate
    warehouseWeeklyConsumptionVariance
    warehouseRunOutDays85
    warehouseRunOutDays97
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InventoryGetDetailsGQL extends Apollo.Mutation<InventoryGetDetailsMutation, InventoryGetDetailsMutationVariables> {
    document = InventoryGetDetailsDocument;
    
  }
export const InventorySetDetailsDocument = gql`
    mutation inventorySetDetails($warehouse: String!, $id: UUID!, $quantity: Long!) {
  inventorySetDetails(warehouse: $warehouse, id: $id, quantity: $quantity) {
    product {
      id
      sku
      slug
      title
    }
    warehouseQuantityOnShelf
    warehouseQuantityUnshipped
    warehouseQuantityAvailable
    warehouseWeeklyConsumptionRate
    warehouseWeeklyConsumptionVariance
    warehouseRunOutDays85
    warehouseRunOutDays97
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InventorySetDetailsGQL extends Apollo.Mutation<InventorySetDetailsMutation, InventorySetDetailsMutationVariables> {
    document = InventorySetDetailsDocument;
    
  }
export const MakingStockStatusDocument = gql`
    mutation makingStockStatus($warehouse: String!) {
  makingStockStatus(warehouse: $warehouse) {
    product {
      id
      title
      sku
      medias {
        id
        mediaType
        url
      }
    }
    warehouseQuantityAvailable
    warehouseWeeklyConsumptionRate
    warehouseWeeklyConsumptionVariance
    warehouseRunOutDays85
    warehouseRunOutDays97
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MakingStockStatusGQL extends Apollo.Mutation<MakingStockStatusMutation, MakingStockStatusMutationVariables> {
    document = MakingStockStatusDocument;
    
  }
export const SimpleProductFilterDocument = gql`
    query simpleProductFilter($pageable: GraphQLPageableInput!, $title: String, $sku: String, $active: Boolean, $brand: String, $supplier: String, $department: String, $category: String) {
  simpleProductFilter(title: {pattern: $title}, sku: {pattern: $sku}, active: {value: $active}, brand: $brand, supplier: $supplier, department: $department, category: $category, page: $pageable, sort: {field: "sku", direction: ASC}) {
    data {
      id
      slug
      sku
      title
      active
      explicitDepartment {
        id
        slug
        name
        parent {
          id
          slug
          name
        }
      }
      brand {
        id
        slug
        name
      }
      supplier {
        id
        slug
        name
      }
      price
      shippingNeeds
      medias {
        id
        mediaType
        url
      }
      explicitCategories {
        id
        slug
        name
        parent {
          id
          slug
          name
          parent {
            id
            slug
            name
          }
        }
      }
      shippingRuleSet {
        id
        slug
        name
      }
    }
    count
    page
    pageSize
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SimpleProductFilterGQL extends Apollo.Query<SimpleProductFilterQuery, SimpleProductFilterQueryVariables> {
    document = SimpleProductFilterDocument;
    
  }
export const SimpleProductFindBySkuDocument = gql`
    query simpleProductFindBySku($sku: String!) {
  simpleProductFindBySku(sku: $sku) {
    id
    slug
    sku
    upc
    title
    active
    price
    cost
    weight
    shippingNeeds
    shippingRestrictions
    warehouses {
      id
      name
    }
    bins {
      id
      binId
    }
    inventoryQuantityCaches {
      id
      quantityAvailableForSale
    }
    explicitDepartment {
      id
      slug
      name
      parent {
        id
        slug
        name
      }
    }
    brand {
      id
      slug
      name
    }
    supplier {
      id
      slug
      name
    }
    medias {
      id
      mediaType
      url
    }
    explicitCategories {
      id
      slug
      name
      parent {
        id
        slug
        name
        parent {
          id
          slug
          name
        }
      }
    }
    shippingRuleSet {
      id
      slug
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SimpleProductFindBySkuGQL extends Apollo.Query<SimpleProductFindBySkuQuery, SimpleProductFindBySkuQueryVariables> {
    document = SimpleProductFindBySkuDocument;
    
  }
export const SimpleProductFindByUpcDocument = gql`
    query simpleProductFindByUpc($upc: String!) {
  simpleProductFindByUpc(upc: $upc) {
    id
    slug
    sku
    upc
    title
    active
    price
    cost
    weight
    shippingNeeds
    shippingRestrictions
    warehouses {
      id
      name
    }
    bins {
      id
      binId
    }
    inventoryQuantityCaches {
      id
      quantityAvailableForSale
    }
    explicitDepartment {
      id
      slug
      name
      parent {
        id
        slug
        name
      }
    }
    brand {
      id
      slug
      name
    }
    supplier {
      id
      slug
      name
    }
    medias {
      id
      mediaType
      url
    }
    explicitCategories {
      id
      slug
      name
      parent {
        id
        slug
        name
        parent {
          id
          slug
          name
        }
      }
    }
    shippingRuleSet {
      id
      slug
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SimpleProductFindByUpcGQL extends Apollo.Query<SimpleProductFindByUpcQuery, SimpleProductFindByUpcQueryVariables> {
    document = SimpleProductFindByUpcDocument;
    
  }
export const SimpleProductInfoDocument = gql`
    query simpleProductInfo($id: UUID!) {
  simpleProductInfo(id: $id) {
    id
    slug
    sku
    upc
    title
    active
    price
    cost
    weight
    shippingNeeds
    shippingRestrictions
    warehouses {
      id
      name
    }
    bins {
      id
      binId
    }
    inventoryQuantityCaches {
      id
      quantityAvailableForSale
    }
    explicitDepartment {
      id
      slug
      name
      parent {
        id
        slug
        name
      }
    }
    brand {
      id
      slug
      name
    }
    supplier {
      id
      slug
      name
    }
    medias {
      id
      mediaType
      url
    }
    explicitCategories {
      id
      slug
      name
      parent {
        id
        slug
        name
        parent {
          id
          slug
          name
        }
      }
    }
    shippingRuleSet {
      id
      slug
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SimpleProductInfoGQL extends Apollo.Query<SimpleProductInfoQuery, SimpleProductInfoQueryVariables> {
    document = SimpleProductInfoDocument;
    
  }
export const UserInfoDocument = gql`
    query userInfo {
  userInfo {
    email
    firstName
    lastName
    admin
    emailConfirmed
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserInfoGQL extends Apollo.Query<UserInfoQuery, UserInfoQueryVariables> {
    document = UserInfoDocument;
    
  }
export const WarehouseListDocument = gql`
    query warehouseList {
  warehouseList {
    id
    name
    line1
    line2
    city
    state
    postalCode
    country
    latitude
    longitude
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class WarehouseListGQL extends Apollo.Query<WarehouseListQuery, WarehouseListQueryVariables> {
    document = WarehouseListDocument;
    
  }