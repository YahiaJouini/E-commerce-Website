type AllProductsType = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  category: string;
}[];

export const AllProducts: AllProductsType = [
  {
    id: 1,
    name: "Apple iPhone 13 Pro",
    image:
      "https://www.apple.com/v/iphone-13-pro/c/images/overview/design/finishes_1_static__dtne3c423tme_large.jpg",
    description:
      "The latest flagship smartphone from Apple with Pro-level features.",
    price: 2999.99,
    category: "tech",
  },
  {
    id: 2,
    name: "Samsung Galaxy Z Fold 3",
    image: "https://activ.kz/shop/media/__sized__/products/galaxy_zfold_2_black-thumbnail-510x510-90.jpg",
    description:
      "A foldable smartphone with a large display, perfect for multitasking.",
    price: 2799.99,
    category: "tech",
  },
  {
    id: 3,
    name: "Dell XPS 13 Laptop",
    image: "https://www.tunisianet.com.tn/228537-large/pc-portable-dell-xps-13-9310-2en1-i7-11e-gen-16-go.jpg",
    description:
      "Ultra-thin and powerful laptop with a stunning InfinityEdge display.",
    price: 3499.99,
    category: "tech",
  },
  {
    id: 4,
    name: "Sony WH-1000XM4 Headphones",
    image: "https://m.media-amazon.com/images/I/71a5XAAbzbL.jpg",
    description:
      "Noise-canceling headphones with industry-leading audio quality.",
    price: 899.99,
    category: "tech",
  },
  {
    id: 5,
    name: "LG OLED C1 4K TV",
    image: "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/8f312753-5419-4e0c-b00d-19e75f904c2c/md07521476-DZ-06-jpg",
    description:
      "A high-end OLED TV with incredible picture quality and smart features.",
    price: 5499.99,
    category: "tech",
  },
  {
    id: 6,
    name: "Logitech MX Master 3 Mouse",
    image: "https://i5.walmartimages.com/seo/Logitech-MX-Master-3-Wireless-Mouse-Black_ebd8b258-944d-4c94-8e68-85958e0d289b.80bbfc488598e5537f279ea01ce24d58.jpeg",
    description:
      "An advanced wireless mouse with customizable buttons and ergonomic design.",
    price: 199.99,
    category: "tech",
  },
  {
    id: 7,
    name: "NVIDIA GeForce RTX 3080 GPU",
    image: "https://images.anandtech.com/doci/17204/RTX_3080_12GB_678x452.jpg",
    description: "A powerful graphics card for gaming and content creation.",
    price: 3499.99,
    category: "tech",
  },
  {
    id: 8,
    name: "GoPro Hero 10 Black",
    image: "https://static.gopro.com/assets/blta2b8522e5372af40/blt741c2a686796c4bf/61b7c3bf1bdbe25709ba76a9/GoPro_News_HERO10_Black.jpg",
    description:
      "The latest action camera with advanced stabilization and 5K video recording.",
    price: 1299.99,
    category: "tech",
  },
  {
    id: 9,
    name: "Bose QuietComfort Earbuds",
    image: "https://assets.bosecreative.com/transform/595eb362-691c-4075-9aed-811b8641c9b9/COM-3920_QCEBII_CaseCover_Front_Earbuds_2000x2000_final_black_RGB",
    description:
      "True wireless earbuds with excellent noise cancellation and crystal-clear sound.",
    price: 599.99,
    category: "tech",
  },
  {
    id: 10,
    name: "Microsoft Surface Pro 7",
    image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4tjV5?ver=eab4",
    description:
      "Versatile 2-in-1 laptop with a detachable keyboard and touch screen.",
    price: 2799.99,
    category: "tech",
  },
  {
    id: 11,
    name: "Asus ROG Strix Scar 17 Gaming Laptop",
    image: "https://m.media-amazon.com/images/I/71LpHtGWPML.jpg",
    description:
      "High-performance gaming laptop with a fast refresh rate and RGB keyboard.",
    price: 4999.99,
    category: "tech",
  },
  {
    id: 12,
    name: "Apple AirPods Pro",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985",
    description:
      "Premium true wireless earbuds with active noise cancellation.",
    price: 999.99,
    category: "tech",
  },
  {
    id: 13,
    name: "Samsung Odyssey G9 Gaming Monitor",
    image: "https://images.samsung.com/is/image/samsung/p6pim/uk/lc49g95tsspxxu/gallery/uk-odyssey-g9-450607-lc49g95tsspxxu-535248899?$650_519_PNG$",
    description:
      "Curved gaming monitor with a super ultrawide display for immersive gaming.",
    price: 3899.99,
    category: "tech",
  },
  {
    id: 14,
    name: "Razer BlackWidow Elite Mechanical Keyboard",
    image: "https://assets.razerzone.com/eeimages/support/products/1398/1398_blackwidowelite.png",
    description: "Mechanical gaming keyboard with customizable RGB lighting.",
    price: 499.99,
    category: "tech",
  },
  {
    id: 15,
    name: "Garmin Fenix 6X Pro Solar Smartwatch",
    image: "https://example.com/garminfenix6x.jpg",
    description: "Multisport GPS smartwatch with solar charging capabilities.",
    price: 1899.99,
    category: "tech",
  },
  {
    id: 16,
    name: "Canon EOS R5 Mirrorless Camera",
    image: "https://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_square_32c26ad194234d42b3cd9e582a21c99b",
    description: "High-resolution mirrorless camera with 8K video recording.",
    price: 5899.99,
    category: "tech",
  },
  {
    id: 17,
    name: "Corsair Virtuoso RGB Wireless Gaming Headset",
    image: "https://imageio.forbes.com/blogs-images/antonyleather/files/2019/09/VIRTUOSO_SE_GUNMETAL_01-e1569510474627-1200x970.jpg?height=57&width=71&fit=bounds",
    description: "Premium wireless gaming headset with high-fidelity audio.",
    price: 299.99,
    category: "tech",
  },
  {
    id: 18,
    name: "HP Spectre x360 2-in-1 Laptop",
    image: "https://m.media-amazon.com/images/I/812M-A8BlvL.jpg",
    description:
      "Stylish and powerful convertible laptop with a 4K touch screen.",
    price: 3199.99,
    category: "tech",
  },
  {
    id: 19,
    name: "Nintendo Switch OLED Model",
    image: "https://www.jbhifi.com.au/cdn/shop/products/662490-Product-0-I-638291229013202058.jpg?v=1693526174",
    description:
      "Upgraded version of the popular gaming console with an OLED display.",
    price: 1099.99,
    category: "tech",
  },
  {
    id: 20,
    name: "OnePlus 9 Pro",
    image: "https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9-pro/Morning%20mist-gallery.png",
    description:
      "Flagship smartphone with Hasselblad camera system and fast charging.",
    price: 2399.99,
    category: "tech",
  },
  {
    id: 21,
    name: "Men's Classic White Shirt",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQihBy7T8_rPi8HQ90uIb1UIj1HAtaizImqPA&usqp=CAU",
    description:
      "A timeless classic white shirt for men, perfect for formal occasions.",
    price: 79.99,
    category: "clothing",
  },
  {
    id: 22,
    name: "Women's Denim Jacket",
    image: "https://www.girlscoutshop.com/site/Product_Images/8737_main-01.default.jpg?resizeid=19&resizeh=500&resizew=500",
    description:
      "Stylish denim jacket for women, great for casual and trendy looks.",
    price: 129.99,
    category: "clothing",
  },
  {
    id: 23,
    name: "Unisex Hooded Sweatshirt",
    image: "https://cdn.ssactivewear.com/Images/Style/395_fm.jpg",
    description:
      "Comfortable and warm hooded sweatshirt suitable for both men and women.",
    price: 59.99,
    category: "clothing",
  },
  {
    id: 24,
    name: "Men's Slim Fit Chinos",
    image: "https://media.boohoo.com/i/boohoo/bmm03811_khaki_xl/male-khaki-fixed-waist-super-skinny-fit-chino-trouser/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
    description: "Slim fit chinos for men, perfect for a smart-casual look.",
    price: 89.99,
    category: "clothing",
  },
  {
    id: 25,
    name: "Women's Floral Print Dress",
    image: "https://images.asos-media.com/products/asos-design-ruffle-off-shoulder-asymmetric-maxi-dress-in-cream-floral-print/204560744-1-creamfloral/?$n_480w$&wid=476&fit=constrain",
    description:
      "Elegant floral print dress for women, suitable for various occasions.",
    price: 159.99,
    category: "clothing",
  },
  {
    id: 26,
    name: "Men's Running Shoes",
    image: "https://contents.mediadecathlon.com/p2393850/67c2770483263de42d776a5bd55957ac/p2393850.jpg?format=auto&quality=70&f=650x0",
    description:
      "Comfortable and durable running shoes for men, ideal for workouts.",
    price: 129.99,
    category: "clothing",
  },
  {
    id: 27,
    name: "Women's Yoga Leggings",
    image: "https://cdn.shopify.com/s/files/1/0032/7539/1011/products/6577628446763-eucalyptusgrey-1a.jpg?v=1663379139",
    description:
      "High-quality yoga leggings for women, providing flexibility and comfort.",
    price: 49.99,
    category: "clothing",
  },
  {
    id: 28,
    name: "Men's Casual Polo Shirt",
    image: "https://m.media-amazon.com/images/I/81LIcSxBUiL._AC_UL1500_.jpg",
    description:
      "Casual polo shirt for men, great for a laid-back and stylish look.",
    price: 39.99,
    category: "clothing",
  },
  {
    id: 29,
    name: "Women's Leather Ankle Boots",
    image: "https://pyxis.nymag.com/v1/imgs/240/797/85e212b70872edacf12bed418818c8097d-29-asos-chelsea-ankle-boot.rsocial.w1200.jpg",
    description:
      "Stylish leather ankle boots for women, perfect for fall and winter.",
    price: 179.99,
    category: "clothing",
  },
  {
    id: 30,
    name: "Unisex Baseball Cap",
    image: "https://m.media-amazon.com/images/I/61W+hWb0bcL._AC_UY1000_.jpg",
    description:
      "Classic baseball cap suitable for both men and women, with adjustable strap.",
    price: 24.99,
    category: "clothing",
  },
  {
    id: 31,
    name: "Men's Formal Suit",
    image: "https://static.zara.net/photos///2023/I/0/2/p/4584/898/403/2/w/404/4584898403_2_1_1.jpg?ts=1689681528450",
    description: "Elegant formal suit for men, perfect for special occasions.",
    price: 299.99,
    category: "clothing",
  },
  {
    id: 32,
    name: "Women's Wool Coat",
    image: "https://norwegian-wool.com/cdn/shop/products/W31-NES-GRN-Green-HERO.progressive.jpg?v=1632949821",
    description: "Warm wool coat for women, ideal for chilly winter days.",
    price: 219.99,
    category: "clothing",
  },
  {
    id: 33,
    name: "Men's Graphic T-Shirt",
    image: "https://media.boohoo.com/i/boohoo/amm00818_light%20pink_xl/male-light%20pink-oversized-virtues-graphic-t-shirt/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
    description:
      "Cool graphic T-shirt for men, adding a trendy touch to casual outfits.",
    price: 29.99,
    category: "clothing",
  },
  {
    id: 34,
    name: "Women's High-Waisted Jeans",
    image: "https://oldnavy.gap.com/webcontent/0050/518/236/cn50518236.jpg",
    description:
      "Fashionable high-waisted jeans for women, creating a flattering silhouette.",
    price: 69.99,
    category: "clothing",
  },
  {
    id: 35,
    name: "Men's Outdoor Jacket",
    image: "https://ridestore.imgix.net/catalog/product/H0537_01_F95MSEl.jpg?w=450&auto=format&q=70&dpr=2&usm=15&fit=max",
    description:
      "Durable and waterproof outdoor jacket for men, suitable for various activities.",
    price: 149.99,
    category: "clothing",
  },
  {
    id: 36,
    name: "Women's Workout Tank Top",
    image: "https://m.media-amazon.com/images/I/71RwjfPDj2L._AC_UY1000_.jpg",
    description:
      "Breathable and moisture-wicking tank top for women, perfect for workouts.",
    price: 34.99,
    category: "clothing",
  },
  {
    id: 37,
    name: "Men's Leather Belt",
    image: "https://cdn11.bigcommerce.com/s-uiywfsyvbe/images/stencil/1280x1280/products/471/10892/10892__56320.1690435765.jpg?c=1",
    description:
      "Classic leather belt for men, adding a stylish finishing touch to outfits.",
    price: 19.99,
    category: "clothing",
  },
  {
    id: 38,
    name: "Women's Summer Hat",
    image: "https://m.media-amazon.com/images/I/71tKXRvS9IL.jpg",
    description:
      "Chic summer hat for women, providing shade with a touch of elegance.",
    price: 29.99,
    category: "clothing",
  },
  {
    id: 39,
    name: "Men's Sporty Shorts",
    image: "https://images.asos-media.com/products/nike-soccer-dri-fit-short-in-black/203685849-1-black/?$n_480w$&wid=476&fit=constrain",
    description:
      "Comfortable and breathable sporty shorts for men, perfect for active lifestyles.",
    price: 24.99,
    category: "clothing",
  },
  {
    id: 40,
    name: "Women's Crossbody Bag",
    image: "https://n.nordstrommedia.com/id/sr3/5a5947c0-5e5a-48b4-bff3-c523ad9374c0.jpeg?h=365&w=240&dpr=2",
    description:
      "Stylish crossbody bag for women, perfect for carrying essentials with flair.",
    price: 49.99,
    category: "clothing",
  },
  {
    id: 41,
    name: "Modern Leather Sofa",
    image: "https://assets.wfcdn.com/im/36168174/compr-r85/2083/208369192/ardrie-825-mid-century-modern-furniture-style-genuine-leather-chesterfield-sofa.jpg",
    description:
      "Contemporary leather sofa with sleek design, perfect for modern living spaces.",
    price: 1899.99,
    category: "furniture",
  },
  {
    id: 42,
    name: "Wooden Dining Table Set",
    image: "https://thetimberguy.com/cdn/shop/products/Buy-Compact-Wooden-Dining-table-with-1-Bench-3-chairs-furniture-set-for-modern-Home_600x.jpg?v=1637950097",
    description:
      "Solid wood dining table set with matching chairs, ideal for family gatherings.",
    price: 1299.99,
    category: "furniture",
  },
  {
    id: 43,
    name: "Queen Size Bed Frame",
    image: "https://images.thdstatic.com/productImages/4dab9a9b-beee-4e49-bc8f-6e25492df7df/svn/beige-harper-bright-designs-platform-beds-lhc016aaa-64_600.jpg",
    description:
      "Sturdy queen-size bed frame with elegant design, providing comfort and style.",
    price: 899.99,
    category: "furniture",
  },
  {
    id: 44,
    name: "Glass Coffee Table",
    image: "https://m.media-amazon.com/images/I/81NClvv56nL._AC_UF894,1000_QL80_.jpg",
    description:
      "Sleek glass coffee table with metal accents, adding a touch of sophistication.",
    price: 299.99,
    category: "furniture",
  },
  {
    id: 45,
    name: "Leather Recliner Chair",
    image: "https://images.thdstatic.com/productImages/10996f08-f871-4a7d-837f-a2f08e84111a/svn/brown-recliners-wf199753lxlaad-64_600.jpg",
    description:
      "Comfortable leather recliner chair with adjustable positions for relaxation.",
    price: 799.99,
    category: "furniture",
  },
  {
    id: 46,
    name: "Bookcase with Storage Drawers",
    image: "https://i5.walmartimages.com/seo/Better-Homes-Gardens-Oaklee-4-Shelf-Bookcase-with-Storage-Drawers-Charcoal-Finish_687fc870-d102-466f-9587-69f07c65956c.b2c8873cb122dc385924fb1ac15ba9e9.jpeg",
    description:
      "Functional bookcase with integrated storage drawers, perfect for organization.",
    price: 499.99,
    category: "furniture",
  },
  {
    id: 47,
    name: "L-shaped Office Desk",
    image: "https://m.media-amazon.com/images/I/81iFwnKz5ZL.jpg",
    description:
      "Spacious L-shaped office desk for efficient workspace organization.",
    price: 699.99,
    category: "furniture",
  },
  {
    id: 48,
    name: "Wardrobe with Mirrored Doors",
    image: "https://www.fabglassandmirror.com/blog/wp-content/uploads/2022/05/Custom-mirror-for-your-closet.png",
    description:
      "Large wardrobe with mirrored doors, providing ample storage and style.",
    price: 1199.99,
    category: "furniture",
  },
  {
    id: 49,
    name: "Round Dining Room Table",
    image: "https://m.media-amazon.com/images/I/81SWUay3m-L.jpg",
    description:
      "Elegant round dining room table, perfect for intimate meals and gatherings.",
    price: 699.99,
    category: "furniture",
  },
  {
    id: 50,
    name: "Convertible Sofa Bed",
    image: "https://m.media-amazon.com/images/I/81S52sqV1tL.jpg",
    description:
      "Versatile sofa bed with a convertible design, ideal for guest rooms.",
    price: 1299.99,
    category: "furniture",
  },
  {
    id: 51,
    name: "Rustic Wooden Chest of Drawers",
    image: "https://i.etsystatic.com/26094858/r/il/737437/2924693211/il_570xN.2924693211_qdjo.jpg",
    description:
      "Charming rustic chest of drawers with wooden accents, adding warmth to any room.",
    price: 899.99,
    category: "furniture",
  },
  {
    id: 52,
    name: "Glass Display Cabinet",
    image: "https://m.media-amazon.com/images/I/619ApmZTicL.jpg",
    description:
      "Modern glass display cabinet with LED lighting, showcasing your collectibles.",
    price: 799.99,
    category: "furniture",
  },
  {
    id: 53,
    name: "Outdoor Patio Furniture Set",
    image: "https://m.media-amazon.com/images/I/81giKcYfotL.jpg",
    description:
      "Durable outdoor patio furniture set with comfortable seating for relaxation.",
    price: 1499.99,
    category: "furniture",
  },
  {
    id: 54,
    name: "Upholstered Accent Chair",
    image: "https://images.thdstatic.com/productImages/ef32ece8-8819-4277-b161-0c7d3088fb81/svn/khaki-home-decorators-collection-accent-chairs-170-64_600.jpg",
    description:
      "Stylish upholstered accent chair, adding flair to any living space.",
    price: 349.99,
    category: "furniture",
  },
  {
    id: 55,
    name: "Dresser with Mirror",
    image: "https://assets.wfcdn.com/im/52230675/compr-r85/1820/182012922/stratton-9-drawer-dresser-and-mirror.jpg",
    description:
      "Functional dresser with a matching mirror, providing ample storage for clothes.",
    price: 699.99,
    category: "furniture",
  },
  {
    id: 56,
    name: "Bar Stools with Backrest",
    image: "https://cdn11.bigcommerce.com/s-y1qgsfi8el/images/stencil/900x900/products/1476/21667/8983__75058.1650440758.jpg?c=2",
    description:
      "Comfortable bar stools with backrest, perfect for kitchen or bar area.",
    price: 89.99,
    category: "furniture",
  },
  {
    id: 57,
    name: "Corner TV Stand",
    image: "https://m.media-amazon.com/images/I/71Qw8VFMjLL.jpg",
    description:
      "Space-saving corner TV stand with storage shelves for media equipment.",
    price: 249.99,
    category: "furniture",
  },
  {
    id: 58,
    name: "Bedside Table with Drawer",
    image: "https://m.media-amazon.com/images/I/81K8aayfsdL._AC_UF894,1000_QL80_.jpg",
    description:
      "Compact bedside table with a drawer, perfect for keeping essentials within reach.",
    price: 79.99,
    category: "furniture",
  },
  {
    id: 59,
    name: "Leather Ottoman",
    image: "https://www.mindaliving.com/cdn/shop/products/brown-leather-cube-poufcopy.jpg?v=1677428458",
    description:
      "Versatile leather ottoman, serving as a stylish accent piece or extra seating.",
    price: 129.99,
    category: "furniture",
  },
  {
    id: 60,
    name: "Adjustable Bar Table",
    image: "https://target.scene7.com/is/image/Target/GUEST_b87e199b-ba6c-491d-b9e7-6955f1971f8a?wid=488&hei=488&fmt=pjpeg",
    description:
      "Modern adjustable bar table, perfect for entertaining guests in style.",
    price: 179.99,
    category: "furniture",
  },
  {
    id: 61,
    name: "Diamond Solitaire Necklace",
    image: "https://www.messika.com/media/catalog/product/cache/f68e9136285bb96b85e5514f4abecbaf/c/o/collier-solitaire-diamant-or-blanc-m-love-brillant-emotion-bis_1.jpg",
    description:
      "Elegant diamond solitaire necklace, perfect for special occasions.",
    price: 2999.99,
    category: "jewelry",
  },
  {
    id: 62,
    name: "Gold Hoop Earrings",
    image: "https://blueillusion.com/cdn/shop/files/GOLDHOOPEARRING0792-edit.jpg?v=1693365568&width=5760",
    description:
      "Classic gold hoop earrings, adding a touch of sophistication to any look.",
    price: 699.99,
    category: "jewelry",
  },
  {
    id: 63,
    name: "Sapphire and Diamond Ring",
    image: "https://www.jared.com/productimages/processed/V-993159502_0_800.jpg?pristine=true",
    description:
      "Exquisite sapphire and diamond ring, a stunning addition to your jewelry collection.",
    price: 1899.99,
    category: "jewelry",
  },
  {
    id: 64,
    name: "Pearl Bracelet",
    image: "https://www.ernestjones.co.uk/productimages/processed/V-2248042_0_800.jpg?pristine=true",
    description:
      "Timeless pearl bracelet, perfect for both casual and formal occasions.",
    price: 499.99,
    category: "jewelry",
  },
  {
    id: 65,
    name: "Emerald Stud Earrings",
    image: "https://image.brilliantearth.com/media/product_images/ED/BE304EM5_white_top.jpg",
    description:
      "Graceful emerald stud earrings, adding a pop of color to your ensemble.",
    price: 899.99,
    category: "jewelry",
  },
  {
    id: 66,
    name: "Silver Charm Bracelet",
    image: "https://i5.walmartimages.com/seo/My-Charmed-Life-Silver-Charm-Bracelet-for-Woman-Perfect-Gift-Any-Occasion-Christmas_7a14ca23-00dd-42f1-a0c1-2f7254be329a.525976a49264fad3eab5e7f4cb326cbd.png",
    description:
      "Chic silver charm bracelet, customizable with various charms and pendants.",
    price: 129.99,
    category: "jewelry",
  },
  {
    id: 67,
    name: "Ruby Pendant Necklace",
    image: "https://www.gubelin.com/media/catalog/product/r/u/ruby-rubies-halsschmuck--drops-of-water-42a-1213-rub-ov-wb_2.jpg",
    description:
      "Striking ruby pendant necklace, a symbol of passion and love.",
    price: 1599.99,
    category: "jewelry",
  },
  {
    id: 68,
    name: "Diamond Tennis Bracelet",
    image: "https://ion.bluenile.com/sets/Jewelry-bn/195851/NOP/Images/stage.jpg",
    description:
      "Classic diamond tennis bracelet, adding sparkle to any wrist.",
    price: 3499.99,
    category: "jewelry",
  },
  {
    id: 69,
    name: "Rose Gold Wedding Band",
    image: "https://www.kay.com/productimages/processed/V-244095206_0_800.jpg?pristine=true",
    description:
      "Elegant rose gold wedding band, a symbol of everlasting love.",
    price: 899.99,
    category: "jewelry",
  },
  {
    id: 70,
    name: "Citrine Drop Earrings",
    image: "https://jm-assets.s3.eu-west-2.amazonaws.com/roseberys/prod/lot_images/xlarge/e942fd54-8d9e-ed11-b835-d4548b6f1f2f/f5ce71f1-899f-ed11-9a88-6045bdd0cd9c.webp",
    description:
      "Radiant citrine drop earrings, perfect for adding a touch of sunshine to your look.",
    price: 499.99,
    category: "jewelry",
  },
  {
    id: 71,
    name: "Diamond Halo Engagement Ring",
    image: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-soleste-oval-halo-engagement-ring-with-a-diamond-platinum-band-33755279_995775_ED_M.jpg",
    description:
      "Exquisite diamond halo engagement ring, a symbol of commitment and love.",
    price: 3999.99,
    category: "jewelry",
  },
  {
    id: 72,
    name: "White Gold Anklet",
    image: "https://i.ebayimg.com/images/g/4v8AAOSwT2daQpSv/s-l1200.jpg",
    description:
      "Chic white gold anklet, perfect for adding a subtle touch of glamour to your ankle.",
    price: 149.99,
    category: "jewelry",
  },
  {
    id: 73,
    name: "Amethyst Cocktail Ring",
    image: "https://image.brilliantearth.com/media/product_images/OU/BE2AM500_white_top.jpg",
    description:
      "Bold amethyst cocktail ring, making a statement with its vibrant purple hue.",
    price: 899.99,
    category: "jewelry",
  },
  {
    id: 74,
    name: "Turquoise Beaded Necklace",
    image: "https://dandelionjewelry.com/cdn/shop/files/nkl-14k-14k-gold-turquoise-rondelle-bead-necklace-37538185773287.webp?v=1688014993",
    description:
      "Bohemian-style turquoise beaded necklace, adding a pop of color to your outfit.",
    price: 129.99,
    category: "jewelry",
  },
  {
    id: 75,
    name: "Platinum Cross Pendant",
    image: "https://www.byenzojewelry.com/wp-content/uploads/2023/04/3ps109.webp",
    description:
      "Timeless platinum cross pendant, a symbol of faith and elegance.",
    price: 999.99,
    category: "jewelry",
  },
  {
    id: 76,
    name: "Diamond Cluster Stud Earrings",
    image: "https://www.leighjewelers.com/media/catalog/product/cache/b7f04e576833a453c523947bc7856387/a/e/aer-12164_w_pmpl83z976uypvd0.jpg",
    description:
      "Sparkling diamond cluster stud earrings, perfect for adding brilliance to your ears.",
    price: 1499.99,
    category: "jewelry",
  },
  {
    id: 77,
    name: "Gold Bangle Bracelet Set",
    image: "https://media2.bulgari.com/f_auto,q_auto/production/dw1edc95f8/images/images/457589.png",
    description:
      "Trendy gold bangle bracelet set, ideal for stacking and creating a stylish look.",
    price: 249.99,
    category: "jewelry",
  },
  {
    id: 78,
    name: "Opal Pendant Necklace",
    image: "https://emilywardendesigns.com/cdn/shop/products/opalpendy.jpg?v=1669770932",
    description:
      "Mesmerizing opal pendant necklace, capturing the beauty of iridescent colors.",
    price: 799.99,
    category: "jewelry",
  },
  {
    id: 79,
    name: "Sterling Silver Cuff Bracelet",
    image: "https://us.missoma.com/cdn/shop/products/mens-classic-cuff-bracelet-sterling-silver-bracelets-missoma-541332.jpg?v=1684787359",
    description:
      "Stylish sterling silver cuff bracelet, a versatile addition to your jewelry collection.",
    price: 89.99,
    category: "jewelry",
  },
  {
    id: 80,
    name: "Diamond Infinity Pendant",
    image: "https://www.gregoryjewellers.com.au/wp-content/uploads/2022/09/TN0875-0-WG.jpg",
    description:
      "Timeless diamond infinity pendant, symbolizing eternal love and connection.",
    price: 1599.99,
    category: "jewelry",
  },
];
