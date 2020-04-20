/*
Data scraped:
- Url: https://www.thegioididong.com/dtdd#i:3
- Script:
 
JSON.stringify(
  Array.from(document.querySelectorAll('.homeproduct .item:not(.feature)')).map((item) => {
    const name = item.querySelector('h3').textContent;
    const image = item.querySelector('img').src;
    const price = +item.querySelector('.price strong').textContent.replace(/\.|₫/g, '');
    const crossPriceItem = item.querySelector('.price span');
    const crossPrice = crossPriceItem ? +crossPriceItem.textContent.replace(/\.|₫/g, '') : null;

    return {
      name,
      price,
      crossPrice,
      image,
    };
  }),
  null,
  2,
);

- Steps: Access the url, open the console window (Ctrl + Shift + I), copy and paste the script to the console, run then see the result

*/
export default [
  {
    name: 'Xiaomi Redmi Note 9S',
    price: 5990000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/214924/xiaomi-redmi-note-9s-4gb-green-400x460-400x400.jpg',
  },
  {
    name: 'Samsung Galaxy A51 (6GB/128GB)',
    price: 7990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/211570/samsung-galaxy-a51-white-1-400x400.jpg',
  },
  {
    name: 'iPhone 11 64GB',
    price: 21990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-400x400.jpg',
  },
  {
    name: 'OPPO A91',
    price: 6990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/217287/oppo-a91-trang-600x600-400x400.jpg',
  },
  {
    name: 'Vsmart Joy 3 (3GB/32GB)',
    price: 2690000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/217920/vsmart-joy-3-tim-600x600-400x400.jpg',
  },
  {
    name: 'Realme C3',
    price: 2990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/218361/realme-c3-do-600x600-400x400.jpg',
  },
  {
    name: 'Samsung Galaxy Fold',
    price: 50000000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/198158/samsung-galaxy-fold-black-400x400.jpg',
  },
  {
    name: 'iPhone 11 Pro Max 512GB',
    price: 40990000,
    crossPrice: 43990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-400x400.jpg',
  },
  {
    name: 'iPhone 11 Pro Max 256GB',
    price: 37990000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-black-400x400.jpg',
  },
  {
    name: 'Samsung Galaxy Z Flip',
    price: 36000000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/213022/samsung-galaxy-z-flip-den-600x600-400x400.jpg',
  },
  {
    name: 'iPhone 11 Pro 256GB',
    price: 34990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/210655/iphone-11-pro-256gb-black-400x400.jpg',
  },
  {
    name: 'iPhone 11 Pro Max 64GB',
    price: 33990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-400x400.jpg',
  },
  {
    name: 'iPhone Xs Max 256GB',
    price: 33990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/190322/iphone-xs-max-256gb-white-400x400.jpg',
  },
  {
    name: 'Samsung Galaxy S20 Ultra',
    price: 27990000,
    crossPrice: 29990000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/217937/samsung-galaxy-s20-ultra-600x600-1-400x400.jpg',
  },
  {
    name: 'iPhone Xs Max 64GB',
    price: 27990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-400x400.jpg',
  },
  {
    name: 'iPhone 11 256GB',
    price: 24990000,
    crossPrice: 25990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/210648/iphone-11-256gb-white-400x400.jpg',
  },
  {
    name: 'iPhone Xs 256GB',
    price: 24990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/190324/iphone-xs-256gb-white-400x400.jpg',
  },
  {
    name: 'Samsung Galaxy S20+',
    price: 21990000,
    crossPrice: 23990000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/217936/samsung-galaxy-s20-plus-600x600-fix-400x400.jpg',
  },
  {
    name: 'OPPO Find X2',
    price: 23990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/198150/oppo-find-x2-blue-600x600-400x400.jpg',
  },
  {
    name: 'iPhone 11 128GB',
    price: 23990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-128gb-green-400x400.jpg',
  },
  {
    name: 'Samsung Galaxy S20',
    price: 19490000,
    crossPrice: 21490000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/217935/samsung-galaxy-s20-600x600-hong-400x400.jpg',
  },
  {
    name: 'iPhone Xs 64GB',
    price: 20990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/190323/iphone-xs-gold-400x400.jpg',
  },
  {
    name: 'Samsung Galaxy S10+',
    price: 19990000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/179530/samsung-galaxy-s10-plus-white-400x400.jpg',
  },
  {
    name: 'iPhone 8 Plus 64GB',
    price: 13990000,
    crossPrice: 15990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-600x600-400x400.jpg',
  },
  {
    name: 'BlackBerry KEY2',
    price: 14990000,
    crossPrice: 15990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/171028/blackberry-key2-4-400x400.jpg',
  },
  {
    name: 'Xiaomi Mi Note 10 Pro',
    price: 13490000,
    crossPrice: 14990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/213590/xiaomi-mi-note-10-pro-black-400x400.jpg',
  },
  {
    name: 'Samsung Galaxy A80',
    price: 14990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/201228/samsung-galaxy-a80-gold-400x400.jpg',
  },
  {
    name: 'OPPO Reno2',
    price: 12490000,
    crossPrice: 14990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/209798/oppo-reno-2-pink-400x400.jpg',
  },
  {
    name: 'Samsung Galaxy Note 10 Lite',
    price: 13990000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-thumb-400x400.jpg',
  },
  {
    name: 'iPhone 7 Plus 32GB',
    price: 9990000,
    crossPrice: 12990000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600-400x400.jpg',
  },
  {
    name: 'Samsung Galaxy A71',
    price: 10490000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/210246/samsung-galaxy-a71-blue-600x600-1-400x400.jpg',
  },
  {
    name: 'iPhone 7 32GB',
    price: 9990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-400x400.jpg',
  },
  {
    name: 'Vivo V17 Pro',
    price: 8990000,
    crossPrice: 9990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/210243/vivo-v17-pro-blue-1-400x400.jpg',
  },
  {
    name: 'BlackBerry KEY2 LE',
    price: 8990000,
    crossPrice: 9990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/189005/blackberry-key2-le-1-400x400.jpg',
  },
  {
    name: 'Samsung Galaxy A70',
    price: 9290000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/195012/samsung-galaxy-a70-white-400x400.jpg',
  },
  {
    name: 'Huawei Nova 5T',
    price: 8490000,
    crossPrice: 8990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/209795/huawei-nova-5t-blue-600x600-400x400.jpg',
  },
  {
    name: 'Realme 6 Pro',
    price: 7990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/214645/realme-6-pro-600x600-2-400x400.jpg',
  },
  {
    name: 'BlackBerry KEYone 4GB/64GB',
    price: 6990000,
    crossPrice: 7990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/112433/blackberry-keyone-9-400x400.jpg',
  },
  {
    name: 'Xiaomi Mi 9 SE',
    price: 7490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/198394/xiaomi-mi-9-se-1-400x400.jpg',
  },
  {
    name: 'Samsung Galaxy A50 128GB',
    price: 7290000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/200294/samsung-galaxy-a50-128gb-blue-400x400.jpg',
  },
  {
    name: 'OPPO A9 (2020)',
    price: 5990000,
    crossPrice: 6990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/202028/oppo-a9-600x600-trang-400x400.jpg',
  },
  {
    name: 'Samsung Galaxy A50s',
    price: 6990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/207641/samsung-galaxy-a50s-green-400x400.jpg',
  },
  {
    name: 'Realme 5 Pro (8GB/128GB)',
    price: 5990000,
    crossPrice: 6990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/211163/realme-5-pro-8gb-purple-400x400.jpg',
  },
  {
    name: 'Huawei Nova 7i (Không có Google)',
    price: 6990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/218363/huawei-nova-7i-pink-600x600-400x400.jpg',
  },
  {
    name: 'Vivo S1 Pro',
    price: 6490000,
    crossPrice: 6990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/202862/vivo-s1-pro-white-400x400.jpg',
  },
  {
    name: 'BlackBerry KEYone 3GB/32GB',
    price: 5990000,
    crossPrice: 6990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/194834/blackberry-keyone-3gb-400x400.jpg',
  },
  {
    name: 'Realme 6 (8GB/128GB)',
    price: 6990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/219895/realme-6-8gb-600x600-400x400.jpg',
  },
  {
    name: 'Xiaomi Redmi Note 8 Pro (6GB/128GB)',
    price: 5990000,
    crossPrice: 6490000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/214418/xiaomi-redmi-note-8-pro-6gb-128gb-white-400x400.jpg',
  },
  {
    name: 'Samsung Galaxy A50 64GB',
    price: 6490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/196963/samsung-galaxy-a50-blue-400x400.jpg',
  },
  {
    name: 'Samsung Galaxy A30s',
    price: 5590000,
    crossPrice: 6290000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/204403/samsung-galaxy-a30s-green-400x400.jpg',
  },
  {
    name: 'Nokia 7.2',
    price: 4590000,
    crossPrice: 6190000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/207650/nokia-72-black-400x400.jpg',
  },
  {
    name: 'Xiaomi Redmi Note 8 Pro (6GB/64GB)',
    price: 5690000,
    crossPrice: 5990000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/209797/xiaomi-redmi-note-8-pro-white-400x400.jpg',
  },
  {
    name: 'Realme 6 (4GB/128GB)',
    price: 5990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/214644/realme-6-xanh-600x600-400x400.jpg',
  },
  {
    name: 'Realme 5 Pro (4GB/128GB)',
    price: 4790000,
    crossPrice: 5990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/209564/realme-5-pro-white-thumb-400x400.jpg',
  },
  {
    name: 'Realme 3 Pro (4GB/64GB)',
    price: 4590000,
    crossPrice: 5990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/194955/realme-3-pro-purple-1-400x400.jpg',
  },
  {
    name: 'Huawei Nova 3i',
    price: 5990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/179673/huawei-nova-3i-600-600-400x400.jpg',
  },
  {
    name: 'Huawei Y9s',
    price: 5990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/214648/huawei-y9sb-blue-400x400.jpg',
  },
  {
    name: 'Xiaomi Redmi Note 8 (4GB/128GB)',
    price: 5090000,
    crossPrice: 5490000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/212374/xiaomi-redmi-note-8-128gb-black-400x400.jpg',
  },
  {
    name: 'Huawei P30 Lite',
    price: 5490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/198985/huawei-p30-lite-1-400x400.jpg',
  },
  {
    name: 'Huawei Y9 Prime (2019)',
    price: 5490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/202268/huawei-y9-prime-2019-blue-2-400x400.jpg',
  },
  {
    name: 'Samsung Galaxy A20s 64GB',
    price: 5390000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/204404/samsung-galaxy-a20s-black-400x400.jpg',
  },
  {
    name: 'OPPO A5 (2020) 128GB',
    price: 4790000,
    crossPrice: 5290000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/212116/oppo-a5-2020-128gb-trang-600x600-400x400.jpg',
  },
  {
    name: 'OPPO A31 (6GB/128GB)',
    price: 5290000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/218662/oppo-a31-2020-128gb-den-600x600-1-400x400.jpg',
  },
  {
    name: 'Xiaomi Redmi Note 8 (4GB/64GB)',
    price: 4390000,
    crossPrice: 4990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/209535/xiaomi-redmi-note-8-white-400x400.jpg',
  },
  {
    name: 'Xiaomi Redmi Note 7 (4GB/64GB)',
    price: 3990000,
    crossPrice: 4990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/167535/xiaomi-redmi-note-7-400x400.jpg',
  },
  {
    name: 'Realme 5s',
    price: 4190000,
    crossPrice: 4990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/213588/realme-5s-red-400x400.jpg',
  },
  {
    name: 'Realme 5 (4GB/128GB)',
    price: 3990000,
    crossPrice: 4990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/211161/realme-5-4gb-600x600-400x400.jpg',
  },
  {
    name: 'Vivo Y19',
    price: 4690000,
    crossPrice: 4990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/204651/vivo-y19-white-quanghai-400x400.jpg',
  },
  {
    name: 'Samsung Galaxy A30 3GB/32GB',
    price: 4590000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/200388/samsung-galaxy-a30-32gb-400x400.jpg',
  },
  {
    name: 'OPPO A31 (4GB/128GB)',
    price: 4490000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/217856/oppo-a31-2020-trang-600x600-1-400x400.jpg',
  },
  {
    name: 'Xiaomi Mi A3',
    price: 3790000,
    crossPrice: 4490000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/197845/xiaomi-mi-a3-white-400x400.jpg',
  },
  {
    name: 'BlackBerry Evolve',
    price: 4490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/199756/blackberry-evolve-black-400x400.jpg',
  },
  {
    name: 'Samsung Galaxy A20s 32GB',
    price: 4390000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/211644/samsung-galaxy-a20s-32gb-red-400x400.jpg',
  },
  {
    name: 'Vivo Y17',
    price: 4090000,
    crossPrice: 4390000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/201404/vivo-y17-purple-400x400.jpg',
  },
  {
    name: 'OPPO A5 (2020) 64GB',
    price: 3990000,
    crossPrice: 4290000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/210441/oppo-a5-2020-den-600x600-400x400.jpg',
  },
  {
    name: 'Realme 5i (4GB/64GB)',
    price: 3690000,
    crossPrice: 4290000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/217331/realme-5i-4gb-green-amee-thumb-400x400.jpg',
  },
  {
    name: 'Samsung Galaxy A20',
    price: 4190000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/198792/samsung-galaxy-a20-red-400x400.jpg',
  },
  {
    name: 'Vsmart Active 3 (6GB/64GB)',
    price: 3990000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/217438/vsmart-active-3-6gb-emerald-green-600x600-400x400.jpg',
  },
  {
    name: 'Xiaomi Redmi Note 8 (3GB/32GB)',
    price: 3790000,
    crossPrice: 3990000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/212247/xiaomi-redmi-note-8-32gb-white-400x400.jpg',
  },
  {
    name: 'Realme 5 (3GB/64GB)',
    price: 3590000,
    crossPrice: 3990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/207649/realme-5-600x600-1-400x400.jpg',
  },
  {
    name: 'Vivo U10',
    price: 3790000,
    crossPrice: 3990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/211156/vivo-u10-1-400x400.jpg',
  },
  {
    name: 'Samsung Galaxy A10s',
    price: 3690000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/205773/samsung-galaxy-a10s-green-400x400.jpg',
  },
  {
    name: 'Xiaomi Redmi 7 (3GB/32GB)',
    price: 2990000,
    crossPrice: 3690000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/198167/xiaomi-redmi-7-black-1-400x400.jpg',
  },
  {
    name: 'Xiaomi Redmi 8 (4GB/64GB)',
    price: 3190000,
    crossPrice: 3590000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/212212/xiaomi-redmi-8-64gb-red-400x400.jpg',
  },
  {
    name: 'Vivo Y12',
    price: 3590000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/203619/vivo-y12-red-400x400.jpg',
  },
  {
    name: 'Vsmart Live (4GB/64GB)',
    price: 3490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/208847/vsmart-live-blue-400x400.jpg',
  },
  {
    name: 'Vsmart Active 3 (4GB/64GB)',
    price: 3490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/217436/vsmart-active-3-600x600-400x400.jpg',
  },
  {
    name: 'Huawei Y7 Pro (2019)',
    price: 3490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/197205/huawei-y7-pro-2019-1-400x400.jpg',
  },
  {
    name: 'OPPO A5s',
    price: 3290000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/200330/oppo-a5s-do-600x600-1-400x400.jpg',
  },
  {
    name: 'Vsmart Joy 3 (4GB/64GB)',
    price: 3290000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/219208/vsmart-joy-3-4gb-den-600x600-400x400.jpg',
  },
  {
    name: 'Realme 5i (3GB/32GB)',
    price: 3290000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/216176/realme-5i-blue-amee-thumb-400x400.jpg',
  },
  {
    name: 'Xiaomi Redmi 8 (3GB/32GB)',
    price: 2790000,
    crossPrice: 2990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/209796/xiaomi-redmi-8-blue-400x400.jpg',
  },
  {
    name: 'OPPO A1K',
    price: 2690000,
    crossPrice: 2990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/200485/oppo-a1k-do-600x600-1-400x400.jpg',
  },
  {
    name: 'Vivo Y11',
    price: 2990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/212357/vivo-y11-600-600-400x400.jpg',
  },
  {
    name: 'Xiaomi Redmi 7 (2GB/16GB)',
    price: 2590000,
    crossPrice: 2990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/200599/xiaomi-redmi-7-16gb-black-400x400.jpg',
  },
  {
    name: 'Samsung Galaxy A01',
    price: 2790000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/214908/samsung-galaxy-a01-xanh-600x600-400x400.jpg',
  },
  {
    name: 'Realme C2 (3GB/32GB)',
    price: 2390000,
    crossPrice: 2690000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/201385/realme-c2-new-blue-400x400.jpg',
  },
  {
    name: 'Realme C3i',
    price: 2590000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/220170/realme-c3i-blue-600x600-400x400.jpg',
  },
  {
    name: 'Nokia 2.3',
    price: 2290000,
    crossPrice: 2590000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/213957/nokia-23-gray-400x400.jpg',
  },
  {
    name: 'Xiaomi Redmi 8A',
    price: 2590000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/210089/xiaomi-redmi-8a-1-400x400.jpg',
  },
  {
    name: 'Realme C2 (2GB/16GB)',
    price: 1990000,
    crossPrice: 2590000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/203347/realme-c2-16gb-new-blue-400x400.jpg',
  },
  {
    name: 'Vivo Y91C',
    price: 2390000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/199083/vivo-y91c-400x400.jpg',
  },
  {
    name: 'Realme C2 (2GB/32GB)',
    price: 2090000,
    crossPrice: 2390000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/209557/realme-c2-2g-32gb-blue-400x400.jpg',
  },
  {
    name: 'Vsmart Joy 3 (2GB/32GB)',
    price: 2290000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/217921/vsmart-joy-3-2gb-tim-600x600-400x400.jpg',
  },
  {
    name: 'Itel S15 Pro',
    price: 1890000,
    crossPrice: 1990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/210476/itel-s15-pro-purple-400x400.jpg',
  },
  {
    name: 'Vsmart Star 3',
    price: 1790000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/218886/vsmart-star-3-xanh-600x600-400x400.jpg',
  },
  {
    name: 'Xiaomi Redmi Go 16GB',
    price: 1790000,
    crossPrice: null,
    image: '',
  },
  {
    name: 'Nokia C2',
    price: 1490000,
    crossPrice: 1690000,
    image: '',
  },
  {
    name: 'Itel P15',
    price: 1400000,
    crossPrice: 1550000,
    image: '',
  },
  {
    name: 'Vsmart Star',
    price: 1390000,
    crossPrice: null,
    image: '',
  },
  {
    name: 'Vsmart Bee 3',
    price: 1390000,
    crossPrice: null,
    image: '',
  },
  {
    name: 'Nokia C1',
    price: 1390000,
    crossPrice: null,
    image: '',
  },
  {
    name: 'Itel S33',
    price: 1390000,
    crossPrice: null,
    image: '',
  },
  {
    name: 'Nokia 230 (không tặng thẻ nhớ)',
    price: 1250000,
    crossPrice: null,
    image: '',
  },
  {
    name: 'Mobell S61',
    price: 1250000,
    crossPrice: null,
    image: '',
  },
  {
    name: 'Mobell Nova P3',
    price: 1190000,
    crossPrice: null,
    image: '',
  },
];
