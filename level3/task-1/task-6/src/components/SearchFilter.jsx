const SearchFilter = ({ searchTerm, setSearchTerm, filterRole, setFilterRole }) => {
    return (
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
  
        <select value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
          <option value="">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Manager">Manager</option>
        </select>
      </div>
    );
  };
  
  export default SearchFilter;
  