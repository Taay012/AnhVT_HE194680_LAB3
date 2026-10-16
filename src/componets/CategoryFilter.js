export default function CategoryFilter({ categories, value, onChange }) {
  return (
    <label htmlFor="category">
      Danh mục
      <select id="category" value={value} onChange={event => onChange(event.target.value)}>
        <option value="">Tất cả danh mục</option>
        {categories.map(category => <option key={category} value={category}>{category}</option>)}
      </select>
    </label>
  );
}
