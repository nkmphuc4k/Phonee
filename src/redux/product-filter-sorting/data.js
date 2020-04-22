export const priceFilters = [
  {
    label: 'Tất cả',
    callback: () => true,
  },
  {
    label: 'Dưới 2 triệu',
    callback: ({ price }) => price > 0 && price < 2000000,
  },
  {
    label: 'Từ 2 - 4 triệu',
    callback: ({ price }) => price >= 2000000 && price <= 4000000,
  },
  {
    label: 'Từ 4 - 7 triệu',
    callback: ({ price }) => price >= 4000000 && price <= 7000000,
  },
  {
    label: 'Từ 7 - 13 triệu',
    callback: ({ price }) => price >= 7000000 && price <= 13000000,
  },
  {
    label: 'Trên 13 triệu',
    callback: ({ price }) => price > 13000000,
  },
];

export const sorting = [
  {
    label: 'Nổi bật',
    value: null,
  },
  {
    label: 'Giá: Tăng dần',
    value: (a, b) => {
      if (!a.price) {
        // hang sap ve (price == 0)
        return 1;
      } else if (!b.price) {
        return -1;
      } else {
        return a.price - b.price;
      }
    },
  },
  {
    label: 'Giá: Giảm dần',
    value: (a, b) => b.price - a.price,
  },
];
