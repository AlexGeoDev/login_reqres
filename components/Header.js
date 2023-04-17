import Link from 'next/link';
import styles from './header.module.css'

function Header() {
  return (
    <>
      <div className={styles.button_back}>
        <Link 
          className={styles.header}
          href="/">
          <button type="button" id="Header" className='btn btn-primary'>
            Back          
          </button>
        </Link>        
      </div>
    </>
  );
}

export default Header;
