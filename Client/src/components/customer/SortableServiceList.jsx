const SortableServiceList = () => {
  // const [services, setServices] = useState([]);
  // const [sortOption, setSortOption] = useState('price_asc');
  // const [loading, setLoading] = useState(true);

  return (
    <div className="flex justify-end">
      <label htmlFor="sort" className="mr-2">
        SORT BY:
      </label>
      <select
        name="sort"
        id="sort"
        className="bg-transparent border-lightblue border-2 cursor-pointer"
      >
        <option value="rating" className="option">
          Rating
        </option>
        <option value="newest" className="option">
          Newest
        </option>
        <option value="price_asc" className="option">
          Price: Low to High
        </option>
        <option value="price_desc" className="option">
          Price: High to Low
        </option>
        <option value="popularity" className="option">
          Popularity
        </option>
      </select>
    </div>
  );
};

export default SortableServiceList;
