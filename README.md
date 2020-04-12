```
yarn // Tải dependencies
yarn start // Khởi động project
```
- Chia components:
  - `atoms`: Những component không phải là component page hay templates
  - `pages`: Là các trang routable từ `react-router-dom`
  - `templates`: Là các component share chung giữa các page như header, footer
- Mỗi component sẽ gồm nhiều file gần nhau:
  - `.comp.jsx`: File component
  - `.styled.js`: File styling bằng `styled-component`
  - `.utils.js`: Các function util tách ra thành một file cho gọn file .comp.jsx
  - `.data.js`: Data giả (mock) liên quan đến component, sau này khi có data thật từ backend này kia có thể xóa file này
  - `.test.js`, `.hooks.js`,... tùy sáng tạo và sở thích cá nhân

- Thư mục `redux` sẽ chia ra nhiều "miếng" (slices). Mỗi miếng sẽ gồm: 
  - `actions.js`
  - `reducer.js`
  - `types.js`
  - `selectors.js`,
  - và có thể `data.js`,... 
  - Khi truy xuất dữ liệu từ redux sẽ dùng `useSelector` + một selector từ `selectors.js`. 
  - Khi dispatch một action sẽ dùng `useDispatch` + một action từ `actions.js`,...
  - Đọc thêm code mẫu để hiểu

- Icon: Dùng icon ở trang https://ionicons.com/. File cdn để dùng icon đã được liên kết ở `public/index.html`, giờ chỉ cần dùng thôi. Tự search `ion-icon` trong project để xem cách dùng

- Các page để routing sẽ được thêm vào file `src/routes.js` để tiện quản lý phòng trường hợp cần phát triển lên, sẽ có 1 nguồn thống nhất các routes

- Git commit: Viết hoa chữ cái đầu, không có dâu chấm cuối câu.

- Thư mục `src/styles` chưa các file config liên quan đến style. Có thể truy xuất ở các file `.styled.js`. Ví dụ `${(props) => props.theme.mixins.flexCenter};` sẽ import `flexCenter` từ file `mixins.js`. Khả năng cao với scope hiện tại sẽ không dùng nhiều, tuy nhiên vấn để đó, sẽ remove dần