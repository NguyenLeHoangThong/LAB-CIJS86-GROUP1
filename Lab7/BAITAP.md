# Đề bài: Tạo danh sách người dùng (giao diện có thể làm giống danh sách sản phẩm trong bàu trước kỹ thuật phân trang: khi click vào nút trang khác thì show  danh sách user của trang vừa click
- API: https://reqres.in/api/users?page=2 (đây là lấy user trang 2, tương tự nếu trang 3 thì page=3, ...)
- Chú ý khi API trên trả về response, ta có 1 field là total_pages. Dựa vào field này để render tổng số nút phân trang (ví dụ total_pages = 5 thì show 5 nút: 1,2,3,4,5)
- Mặc định trang đầu tiên khi load web là trang 1
- Chỗ các nút phân trang cố gắng CSS sao cho biết được trang nào đang active
- Ôn tập lại Fetch + API + Promise nếu cần!