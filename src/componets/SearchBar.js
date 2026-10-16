export default function SearchBar({ value, onChange, inputRef }) {
  return (
    <label htmlFor="keywords">
      Tìm kiếm
      <input id="keywords" type="search" ref={inputRef} value={value}
        placeholder="Nhập tên sản phẩm" onChange={event => onChange(event.target.value)} />
    </label>
  );
}
