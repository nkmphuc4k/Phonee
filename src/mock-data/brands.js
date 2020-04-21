/*
Data scraped:
- Url: https://www.thegioididong.com/dtdd-xiaomi#m:80,2,1971,2235,2236,17201,17566,1,104,19,5332,2327,100,4832&o:5
- Script:
 
var labels = Array.from(document.querySelectorAll('.choosedfilter a:not(.reset)')).map(
  (item) => item.textContent.trim(),
);
JSON.stringify(
  Array.from(document.querySelectorAll('.filter a img')).map((item, id) => ({
    id: `brand_${id + 1}`,
    name: labels[id],
    image: item.src,
  })),
  null,
  2,
);

- Steps: Access the url, open the console window (Ctrl + Shift + I), copy and paste the script to the console, run then see the result

*/

export default [
  {
    id: 'brand_1',
    name: 'iPhone (Apple)',
    image: 'https://cdn.tgdd.vn/Brand/1/iPhone-(Apple)42-b_16.jpg',
  },
  {
    id: 'brand_2',
    name: 'Samsung',
    image: 'https://cdn.tgdd.vn/Brand/1/Samsung42-b_25.jpg',
  },
  {
    id: 'brand_3',
    name: 'OPPO',
    image: 'https://cdn.tgdd.vn/Brand/1/OPPO42-b_9.png',
  },
  {
    id: 'brand_4',
    name: 'Xiaomi',
    image: 'https://cdn.tgdd.vn/Brand/1/Xiaomi42-b_45.jpg',
  },
  {
    id: 'brand_5',
    name: 'Vivo',
    image: 'https://cdn.tgdd.vn/Brand/1/Vivo42-b_50.jpg',
  },
  {
    id: 'brand_6',
    name: 'Realme',
    image: 'https://cdn.tgdd.vn/Brand/1/Realme42-b_37.png',
  },
  {
    id: 'brand_7',
    name: 'Vsmart',
    image: 'https://cdn.tgdd.vn/Brand/1/Vsmart42-b_40.png',
  },
  {
    id: 'brand_8',
    name: 'Nokia',
    image: 'https://cdn.tgdd.vn/Brand/1/Nokia42-b_21.jpg',
  },
  {
    id: 'brand_9',
    name: 'Huawei',
    image: 'https://cdn.tgdd.vn/Brand/1/Huawei42-b_30.jpg',
  },
  {
    id: 'brand_10',
    name: 'Mobell',
    image: 'https://cdn.tgdd.vn/Brand/1/Mobell42-b_19.jpg',
  },
  {
    id: 'brand_11',
    name: 'Itel',
    image: 'https://cdn.tgdd.vn/Brand/1/Itel42-b_54.jpg',
  },
  {
    id: 'brand_12',
    name: 'Coolpad',
    image: 'https://cdn.tgdd.vn/Brand/1/Coolpad42-b_33.png',
  },
  {
    id: 'brand_13',
    name: 'BlackBerry',
    image: 'https://cdn.tgdd.vn/Brand/1/BlackBerry42-b_38.png',
  },
  {
    id: 'brand_14',
    name: 'Masstel',
    image: 'https://cdn.tgdd.vn/Brand/1/Masstel42-b_0.png',
  },
];
