import { staticImages } from "../utils/images";

const navMenuData = [
  {
    id: "nav-menu-1",
    menuLink: "/",
    menuText: "Shop",
  },
  {
    id: "nav-menu-2",
    menuLink: "/",
    menuText: "Men",
  },
  {
    id: "nav-menu-3",
    menuLink: "/",
    menuText: "Women",
  },
  {
    id: "nav-menu-4",
    menuLink: "/",
    menuText: "Combos",
  },
  {
    id: "nav-menu-5",
    menuLink: "/",
    menuText: "Fashion",
  },
];

const sideMenuData = [
  {
    id: "side-menu-1",
    menuLink: "/",
    menuText: "Home",
    iconName: "house",
  },
  {
    id: "side-menu-2",
    menuLink: "/product",
    menuText: "Products",
    iconName: "grid-fill",
  },
  {
    id: "side-menu-3",
    menuLink: "/wishlist",
    menuText: "Wishlist",
    iconName: "heart",
  },
  {
    id: "side-menu-4",
    menuLink: "/account",
    menuText: "My Account",
    iconName: "person-fill",
  },
  {
    id: "side-menu-5",
    menuLink: "/cart",
    menuText: "Cart",
    iconName: "bag-check-fill",
  },
];

const bannerData = [
  {
    id: "banner-1",
    topText: "",
    titleText: "",
    bottomText: "",
    buttonLink: "/",
    buttonText: "Đặt sân",
    imgSource: staticImages.hero_fooball_1
  },
  {
    id: "banner-2",
    topText: "",
    titleText: "",
    bottomText: "",
    buttonLink: "/",
    buttonText: "Đặt sân",
    imgSource: staticImages.hero_fooball_2
  },
];

const featuredData = [
  {
    id: "featured-1",
    imgSource: staticImages.img1,
    topText: "Low Price",
    largeText: "High Coziness",
    bottomText: "upto 50% off",
    buttonLink: "/",
    buttonText: "Explore Items",
  },
  {
    id: "featured-2",
    imgSource: staticImages.img2,
    topText: "Beyoung Presents",
    largeText: "Breezy Summer Style",
    bottomText: "upto 30% off",
    buttonLink: "/",
    buttonText: "Explore Items",
  },
];

const newArrivalData = [
  {
    id: "new-arrival-1",
    imgSource: staticImages.product1,
    title: "Knitted Joggers",
  },
  {
    id: "new-arrival-2",
    imgSource: staticImages.product2,
    title: "Full Sleeve",
  },
  {
    id: "new-arrival-3",
    imgSource: staticImages.product3,
    title: "Active T-Shirts",
  },
  {
    id: "new-arrival-4",
    imgSource: staticImages.product4,
    title: "Urban Shirts",
  },
  {
    id: "new-arrival-5",
    imgSource: staticImages.product5,
    title: "Urban Shirts",
  },
  {
    id: "new-arrival-6",
    imgSource: staticImages.product6,
    title: "Urban Shirts",
  },
  {
    id: "new-arrival-7",
    imgSource: staticImages.product7,
    title: "Urban Shirts",
  },
];

const savingZoneData = [
  {
    id: "saving-z-1",
    imgSource: staticImages.bigzone1,
    title: "Hawaiian Shirts",
    description: "Dress up in summer vibe",
    discount: 50,
    isLimited: false,
  },
  {
    id: "saving-z-2",
    imgSource: staticImages.bigzone2,
    title: "Printed T-Shirt",
    description: "New Designs Every Week",
    discount: 40,
    isLimited: true,
  },
  {
    id: "saving-z-3",
    imgSource: staticImages.bigzone3,
    title: "Cargo Joggers",
    description: "Move with style & comfort",
    discount: 50,
    isLimited: false,
  },
  {
    id: "saving-z-4",
    imgSource: staticImages.bigzone4,
    title: "Urban Shirts",
    description: "Live In Confort",
    discount: 20,
    isLimited: false,
  },
  {
    id: "saving-z-5",
    imgSource: staticImages.bigzone5,
    title: "Oversized T-Shirts",
    description: "Street Style Icon",
    discount: 60,
    isLimited: false,
  },
];

const products = [
  {
    id: 1,
    imgSource: "https://img.thegioithethao.vn/thumbs/san-bong-da/da-nang/ngu-hanh-son/san-bong-da-kaka-sport-khu-do-thi-hoa-quy/san-bong-sport-khu-do-thi-hoa-quy-1_thumb_720.webp",
    title: "Active wear",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 2,
    imgSource: staticImages.product2,
    title: "Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 3,
    imgSource: staticImages.product3,
    title: "Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 4,
    imgSource: staticImages.product4,
    title: "Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 5,
    imgSource: staticImages.product5,
    title: "Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 6,
    imgSource: staticImages.product6,
    title: "Printed T-Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 7,
    imgSource: staticImages.product7,
    title: "Plain T-Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 8,
    imgSource: staticImages.product8,
    title: "Polo T-Shirt",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 9,
    imgSource: staticImages.product9,
    title: "Hoddies & Sweatshirt",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 10,
    imgSource: staticImages.product10,
    title: "Jeans",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 11,
    imgSource: staticImages.product11,
    title: "Boxers",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 12,
    imgSource: staticImages.product12,
    title: "Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 13,
    imgSource: staticImages.product13,
    title: "Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 14,
    imgSource: staticImages.product14,
    title: "Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 15,
    imgSource: staticImages.product15,
    title: "Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 16,
    imgSource: staticImages.product16,
    title: "Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 17,
    imgSource: staticImages.product17,
    title: "Printed T-Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 18,
    imgSource: staticImages.product18,
    title: "Plain T-Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 19,
    imgSource: staticImages.product19,
    title: "Polo T-Shirt",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
];

const mensCatalog = [...products.slice(4, 11), products[1]];

const womensCatalog = products.slice(11, 15);

const limelightCatalog = products.slice(15, 19);

const brandsData = [
  {
    id: "brand-1",
    imgSource: staticImages.brand1,
  },
  {
    id: "brand-2",
    imgSource: staticImages.brand2,
  },
  {
    id: "brand-3",
    imgSource: staticImages.brand3,
  },
  {
    id: "brand-4",
    imgSource: staticImages.brand4,
  },
  {
    id: "brand-5",
    imgSource: staticImages.brand5,
  },
];

const feedbackData = [
  {
    id: "feedback-1",
    imgSource: staticImages.test1,
    name: "Floyd Miles",
    designation: "Marketing Manger",
    rating: 3,
    feedbackText:
      "Sân bóng rất đẹp, mặt sân cỏ nhân tạo êm chân. Tuy nhiên, hệ thống chiếu sáng hơi yếu, đặc biệt ở góc sân. Nhân viên phục vụ rất nhiệt tình, hỗ trợ đặt sân nhanh chóng. Tôi rất hài lòng với trải nghiệm tại đây",
  },
  {
    id: "feedback-2",
    imgSource: staticImages.test2,
    name: "Ronald Richards",
    designation: "Teacher",
    rating: 4,
    feedbackText:
      "Mặt sân rất phẳng và có cỏ nhân tạo mềm, giúp di chuyển dễ dàng và giảm nguy cơ trượt ngã. Đặc biệt, sân còn thoát nước rất nhanh sau mưa",
  },
  {
    id: "feedback-3",
    imgSource: staticImages.test3,
    name: "Savannah Nguyen",
    designation: "Student",
    rating: 4,
    feedbackText:
      "Đèn ở đây khá sáng, nhưng tập trung nhiều ở trung tâm sân và hơi thiếu ở hai biên. Có thể gặp khó khăn trong việc quan sát ở biên.",
  },
  {
    id: "feedback-4",
    imgSource: staticImages.test4,
    name: "Arthur Ramsay",
    designation: "Fashion Designer",
    rating: 4,
    feedbackText:
      "Đèn hơi yếu và không đủ sáng cho các trận đấu muộn. Một số bóng đèn còn bị nhấp nháy nên cần phải thay mới."
  },
];

const footerData = [
  {
    id: "f_need_help",
    title: "Need Help",
    links: [
      { text: "Contact Us", url: "/contact" },
      { text: "Track Order", url: "/track_order" },
      { text: "Returns & Refunds", url: "/returns_refunds" },
      { text: "FAQ's", url: "/faqs" },
      { text: "Career", url: "/career" },
    ],
  },
  {
    id: "f_company",
    title: "Company",
    links: [
      { text: "About Us", url: "/contact" },
      { text: "Achats Blog", url: "/blog" },
      { text: "Achatsian", url: "/achatsian" },
      { text: "Collaboration", url: "/collaboration" },
      { text: "Media", url: "/media" },
    ],
  },
  {
    id: "f_more_info",
    title: "More info",
    links: [
      { text: "Terms and conditions", url: "/tac" },
      { text: "Privacy Policy", url: "/privacy" },
      { text: "Shipping Policy", url: "/shipping" },
      { text: "Sitemap", url: "/sitemap" },
    ],
  },
  {
    id: "f_location",
    title: "Location",
    lists: [
      { text: "Tsupport@euphoria.in" },
      { text: "Highland Strett, A04 Street 4014" },
      { text: "New York City, USA" },
      { text: "Phone: +000 999 8888" },
    ],
  },
];

const cartItems = [
  {
    id: "C001",
    title: "Blue Flower Print Crop Top",
    color: "Yellow",
    size: "M",
    price: 29.0,
    quantity: 2,
    shipping: 0.0,
    imgSource: staticImages.cart1,
  },
  {
    id: "C002",
    title: "Blue Flower Print Crop Top",
    color: "Blue",
    size: "XL",
    price: 199.0,
    quantity: 5,
    shipping: 0.0,
    imgSource: staticImages.cart2,
  },
  {
    id: "C003",
    title: "Blue Flower Print Crop Top",
    color: "Yellow",
    size: "M",
    price: 123.0,
    quantity: 1,
    shipping: 5.0,
    imgSource: staticImages.cart3,
  },
];

const ProductFilterList = [
  {
    id: "prod_filter_1",
    title: "Tops",
  },
  {
    id: "prod_filter_2",
    title: "Printed T-shirts",
  },
  {
    id: "prod_filter_3",
    title: "Plain T-shirts",
  },
  {
    id: "prod_filter_4",
    title: "Kurti",
  },
  {
    id: "prod_filter_5",
    title: "Boxers",
  },
  {
    id: "prod_filter_6",
    title: "Full sleeve T-shirts",
  },
  {
    id: "prod_filter_7",
    title: "Joggers",
  },
  {
    id: "prod_filter_8",
    title: "Payjamas",
  },
  {
    id: "prod_filter_9",
    title: "Jeans",
  },
];

const StyleFilterList = [
  {
    id: "style_filter_1",
    title: "Classic",
  },
  {
    id: "style_filter_2",
    title: "Casual",
  },
  {
    id: "style_filter_3",
    title: "Business",
  },
  {
    id: "style_filter_4",
    title: "Sport",
  },
  {
    id: "style_filter_5",
    title: "Elegant",
  },
  {
    id: "style_filter_6",
    title: "Formal (evening)",
  },
];

const pricingData = [
  {
    id: "pricing_1",
    name: "Pick Any 4- Womens Plain T-shirt Combo",
    price: 19,
  },
  {
    id: "pricing_2",
    name: "Pick Any 4- Plain Womens Boxer Combo",
    price: 18,
  },
  {
    id: "pricing_3",
    name: "Multicolor Checkered Long Casual Shirts for Women",
    price: 16.7,
  },
  {
    id: "pricing_4",
    name: "Pick Any 4 - Women Plain Full Sleeve T-shirt Combo",
    price: 12,
  },
  {
    id: "pricing_5",
    name: "Pick Any 2: Plain Boxy Casual Shirts for Women Combo",
    price: 9.8,
  },
  {
    id: "pricing_6",
    name: "Jade Black Narrow Cut Flexible Women Jeggings",
    price: 15,
  },
  {
    id: "pricing_7",
    name: "Mustard-yellow Solid Straight-Fit Women Pant",
    price: 6.7,
  },
  {
    id: "pricing_8",
    name: "Pista Green Solid Boxy Casual Shirts for Women",
    price: 9,
  },
];

const servicesData = [
  {
    id: "service_1",
    icon: staticImages.card_icon,
    text: "Wifi",
  },
  {
    id: "service_2",
    icon: staticImages.card_icon,
    text: "Trà đá",
  },
  {
    id: "service_3",
    icon: staticImages.card_icon,
    text: "Nước uống",
  },
  {
    id: "service_4",
    icon: staticImages.shipping_icon,
    text: "Bãi đỗ xe máy & oto",
  },
  {
    id: "service_5",
    icon: staticImages.card_icon,
    text: "Căng tin"
  },{
    id: "service_6",
    icon: staticImages.card_icon,
    text: "Đồ ăn",
  },
];

const product_one = {
  id: "product_01",
  title: "Raven Hoodie With Black Colored Design",
  previewImages: [
    {
      id: "preview1",
      imgSource: staticImages.preview1,
    },
    {
      id: "preview2",
      imgSource: staticImages.preview2,
    },
    {
      id: "preview3",
      imgSource: staticImages.preview3,
    },
    {
      id: "preview4",
      imgSource: staticImages.preview1,
    },
    {
      id: "preview5",
      imgSource: staticImages.preview2,
    },
  ],
  rating: 3.5,
  comments_count: 120,
  sizes: ["xs", "s", "m", "l", "xl"],
  colors: ["#3C4242", "#EDD146", "#EB84B0", "#9C1F35"],
  price: 63.0,
};

const productDescriptionTabHeads = [
  {
    id: "tab-description",
    tabHead: "tabDescription",
    tabText: "Description",
    badgeValue: null,
    badgeColor: "",
  },
  {
    id: "tab-comments",
    tabHead: "tabComments",
    tabText: "User Comments",
    badgeValue: null,
    badgeColor: "",
  },
];

const orderData = [
  {
    id: "order_1",
    order_no: "#5558760098",
    order_date: "2 June 2023 2:40 PM",
    status: "Delivered",
    delivery_date: "8 June 2023",
    payment_method: "Cash on Delivery",
    items: [
      {
        id: "product_01",
        name: "Printed white coat",
        color: "White",
        quantity: 1,
        price: 23,
        imgSource: staticImages.cart1,
      },
      {
        id: "product_02",
        name: "Stretchy jumper for women",
        color: "Maroon",
        quantity: 5,
        price: 21,
        imgSource: staticImages.cart2,
      },
      {
        id: "product_03",
        name: "Black Color Hoodie",
        color: "Black",
        quantity: 10,
        price: 90,
        imgSource: staticImages.cart3,
      },
    ],
  },
  {
    id: "order_2",
    order_no: "#8958360118",
    order_date: "2 June 2023 2:40 PM",
    status: "inprogress",
    delivery_date: "12 August 2023",
    payment_method: "Online Payment",
    items: [
      {
        id: "product_04",
        name: "Stretchy jumper for women",
        color: "Maroon",
        quantity: 5,
        price: 21,
        imgSource: staticImages.cart2,
      },
      {
        id: "product_05",
        name: "Printed white coat",
        color: "White",
        quantity: 1,
        price: 23,
        imgSource: staticImages.cart1,
      },
      {
        id: "product_08",
        name: "Black Color Hoodie",
        color: "Black",
        quantity: 10,
        price: 90,
        imgSource: staticImages.cart3,
      },
    ],
  },
];

const wishlistData = [
  {
    id: "wishlist_1",
    name: "Blue Flower Print Crop Top",
    color: "yellow",
    quantity: 1,
    price: 29,
    imgSource: staticImages.wishitem1,
  },
  {
    id: "wishlist_2",
    name: "Yellow Flower Print Dress",
    color: "yellow",
    quantity: 4,
    price: 40,
    imgSource: staticImages.wishitem2,
  },
  {
    id: "wishlist_3",
    name: "White Hoodie long sleeve",
    color: "white",
    quantity: 1,
    price: 123,
    imgSource: staticImages.wishitem3,
  },
  {
    id: "wishlist_4",
    name: "Brown men’s long sleeve T-shirt",
    color: "brown",
    quantity: 6,
    price: 42,
    imgSource: staticImages.wishitem4,
  },
];

const recentViewedData = products.slice(0, 4);

const cardsData = [
  {
    id: "card_1",
    imgSource: staticImages.paypal,
  },
  {
    id: "card_2",
    imgSource: staticImages.paypass,
  },
  {
    id: "card_3",
    imgSource: staticImages.googlePay,
  },
  {
    id: "card_4",
    imgSource: staticImages.visa,
  },
];

const socialLinksData = [
  {
    id: "social_link_1",
    site_name: "facebook",
    site_icon: "bi bi-facebook",
    site_url: "www.facbook.com",
  },
  {
    id: "social_link_2",
    site_name: "instagram",
    site_icon: "bi bi-instagram",
    site_url: "www.instagram.com",
  },
  {
    id: "social_link_3",
    site_name: "twitter",
    site_icon: "bi bi-twitter",
    site_url: "www.twitter.com",
  },
  {
    id: "social_link_4",
    site_name: "linkedin",
    site_icon: "bi bi-linkedin",
    site_url: "www.linkedin.com",
  },
];

const dataProfile = {
  "id": 3,
  "email": "owner@turf.com",
  "firstName": "Mr",
  "lastName": "Owner",
  "phone": null,
  "role": "TURF_OWNER",
  "enabled": true,
  "avatar": null,
  "createdAt": "01:01 10/16/2024",
  "updatedAt": "01:01 10/16/2024"
}

const booking = {
  "id": 2,
  "turfName": "Sân bóng đá Phi Liêng",
  "turfAddress": "QL27, Xã Đạ K' Nàng, Huyện Đam Rông, Lâm Đồng",
  "turfImages": null,
  "startTime": "16:00",
  "endTime": "17:30",
  "date": "11/27/2024",
  "price": 800000.0,
  "createdAt": "11:20 11/01/2024"
}

const dataBookings = {
  "bookings": [
      booking
  ],
  "currentPage": 1,
  "totalPages": 1
}

export {
  booking,
  dataBookings,
  dataProfile,
  products,
  cartItems,
  sideMenuData,
  navMenuData,
  bannerData,
  featuredData,
  savingZoneData,
  mensCatalog,
  womensCatalog,
  limelightCatalog,
  brandsData,
  newArrivalData,
  feedbackData,
  footerData,
  ProductFilterList,
  StyleFilterList,
  pricingData,
  servicesData,
  product_one,
  productDescriptionTabHeads,
  orderData,
  wishlistData,
  recentViewedData,
  cardsData,
  socialLinksData,
};
