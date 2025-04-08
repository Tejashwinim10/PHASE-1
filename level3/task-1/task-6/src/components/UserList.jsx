import { useState } from 'react';
import users from '../data/users';
import SearchFilter from './SearchFilter';
import './UserList.css';

const UserList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('');

  const filteredUsers = users.filter((user) => {
    const matchesName = user.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole ? user.role === filterRole : true;
    return matchesName && matchesRole;
  });

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterRole={filterRole}
        setFilterRole={setFilterRole}
      />

      <ul className="user-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.role}
            </li>
          ))
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </div>
  );
};

export default UserList;
