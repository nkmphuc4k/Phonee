- `yarn` : Tải dependencies
- `yarn start` : Khởi động project


- Icon: Dùng icon ở trang https://ionicons.com/
- Dùng `styled-component`, Mỗi component sẽ gồm 1 file `.jsx`, một file `.styled.js`, và có thể `.data.js`, `.utils.js`,`.test.js`,...
- Chia components theo "atomic architecture"
  - `atoms`: Nhưng component "nguyên tử", tái sử dụng được
  - `molecules`: Những component "phân tử", có thể được tạo thành từ component ở thư mục `atoms`
  - `organisms`: Những component thành phần của một page, như một section của page,... Thư mục `organisms` gồm nhiều thư mục con, mỗi thư mục con gồm các component liên quan đến một page
  - `pages`: Các page: HomePage, ContactPage, ShopPage, ProductPage, CartPage, LoginPage,...
  - `templates`: Những component xuất hiện indepently với các trang trang, ví dụ như `header`, `footer`
  - Component nào bỏ vào thư mục nào, hợp lý là được, không có một nguyên tắc strictly nào cả.
- Các page để routing sẽ được thêm vào file `src/routes.js`, file có export sẵn component `Link`, `NavLink`, `useHistory`,... cho thuận tiện khi import. Vì thường dùng tới `routes` sẽ cần dùng những cái đi kèm đó luôn, import từ `routes.js` luôn đỡ phải import thêm 1 dòng từ `react-router-dom`.
- Thư mục `redux` sẽ chia ra nhiều "miếng" (slices). Mỗi miếng sẽ gồm: `actions.js`, `reducer.js`, `types.js`, 'selectors.js`, và có thể `data.js`,... Khi truy xuất dữ liệu từ redux sẽ dùng `useSelector` + một selector từ `selectors.js`. Khi dispatch một action sẽ dùng `useDispatch` + một action từ `actions.js`,...
- Git commit: Viết hoa chữ cái đầu, không có dâu chấm cuối câu.
- Thư mục `src/styles` chưa các file config liên quan đến style. Có thể truy xuất ở các file `.styled.js`. Ví dụ `${(props) => props.theme.mixins.flexCenter};` sẽ import `flexCenter` từ file `mixins.js`.