import Link from 'next/link';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import styles from './users.module.css';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`https://reqres.in/api/users?page=${page}`);
      const data = await response.json();
      setUsers(data.data);
      setTotalPages(data.total_pages);
    };
    fetchUsers();
  }, [page]);

  const handlePrevPage = () => setPage(1);

  const handleNextPage = () => setPage(2);

  return (
    <>
      <Header />
      <div className={styles.user}>
        <div>
          <h2>Welcome</h2>        
        </div>
        <div>
          <p>This web is only for practice with data of <Link href='https://reqres.in/' target='_blank'>reqres.in</Link></p>
        </div>
        <div>
          {users.map(user => (
            <div key={user.id} className={styles.user_card}>
              <div>
                <img className={styles.user_avatar} src={user.avatar} alt={`Avatar of ${user.first_name} ${user.last_name}`} />                
              </div>
              <div className={styles.user_data}>
                <p>Name: {user.first_name} {user.last_name}</p>
                <p>email: {user.email}</p>                
              </div>
            </div>
          ))}
        </div>
        <div className={styles.button_list}>
          <button className='btn btn-outline-primary' onClick={handlePrevPage} disabled={page === 1}>Prev</button>
          <span>{page} of {totalPages}</span>
          <button className='btn btn-outline-primary' onClick={handleNextPage} disabled={page === totalPages}>Next</button>
        </div>        
      </div>
    </>
  );
}

export default UsersPage;
