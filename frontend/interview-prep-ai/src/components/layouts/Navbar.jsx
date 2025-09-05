import React from 'react';
import ProfileInfoCard from '../cards/ProfileInfoCard';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=''>
        <div className=''>
            <Link to="/dashboard">
                <h2 className=''>
                    Interview Prep AI 
                </h2>
            </Link>

            <ProfileInfoCard />
        </div>
    </div>
  )
}

export default Navbar;