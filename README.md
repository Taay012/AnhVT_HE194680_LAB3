# Lab 3 HE194680

Ứng dụng dùng đúng dữ liệu products.js: danh sách 15 sản phẩm, tìm theo tên, lọc danh mục, sắp xếp giá, phân trang và Router.

## Chạy

```powershell
npm install
npm start
```

Mặc định Create React App dùng http://localhost:3000. Build: `npm run build`. Test: `npm test -- --watchAll=false`.

## Cấu trúc

- `src/componets`: Header, SearchBar, CategoryFilter, ProductItem, Pagination. Giữ đúng tên thư mục đang có trong dự án của bạn; mọi import đã khớp tên này.
- `src/data/products.js`: dữ liệu gốc, không thay đổi.
- `src/pages/Home.js`: trang chủ với link danh sách.
- `src/pages/ProductList.js`: đọc query, tìm/lọc/sort, tính trang và truyền props xuống component.
- `src/pages/ProductDetail.js`: useParams lấy ID, find sản phẩm, hiển thị chi tiết.
- `src/pages/NotFound.js`: URL không tồn tại.
- `src/App.js`: BrowserRouter, Header và Routes.

## URL

- `/`: Home.
- `/products`: danh sách, 3 sản phẩm mỗi trang.
- `/products?keywords=samsung&sort=price-asc&page=1`: tìm/sort/trang lưu trên URL.
- `/products?category=Laptop&sort=price-asc&page=2`: chỉ Dell XPS 13.
- `/products/4`: chi tiết Dell XPS 13.

Query được giữ trong link chi tiết và Back to products, nên quay lại đúng điều kiện và trang. Nhập tìm kiếm dùng replace để không tạo lịch sử cho từng ký tự; nút trang dùng lịch sử bình thường. Reload URL vẫn giữ các điều kiện.

## TODO ĐỔI khi áp dụng đề khác

1. Dữ liệu: `src/data/products.js`.
2. Số mục mỗi trang: `PAGE_SIZE` trong ProductList.js.
3. Tìm/lọc/sort: `useMemo` trong ProductList.js.
4. Trường hiển thị: ProductItem.js và ProductDetail.js.
5. URL: App.js và các Link liên quan.
6. Tiêu đề app: Header.js.

Các TODO là chỗ tùy chỉnh, không phải logic còn trống. Ctrl+Shift+F tìm `TODO ĐỔI`.

Luồng chính: products -> tìm tên -> lọc category -> sort bản sao -> slice -> map hiển thị. Số tổng hiện là tổng kết quả sau tìm/lọc, không chỉ số mục của trang hiện tại.

Giữ phạm vi cấu trúc Lab 3 này: không thêm trang About, giỏ hàng, CRUD, yêu thích hoặc theme. Dữ liệu giá được hiển thị bằng toLocaleString('vi-VN') và VND.
