import React from 'react';
import VolunteerSignup from './VolunteerSignup';
import DonationTiers from './DonationTiers';
import MembershipOptions from './MembershipOptions';
import NewsLetter from './NewsLetter';

const GetInvolved = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Get Involved</h2>
     
          
        <NewsLetter/>
        
          
            {/* <DonationTiers />
        
          
            <MembershipOptions />
          */}
        
      </div>
    </section>
  );
};

export default GetInvolved;
