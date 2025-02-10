import React, { useState } from "react";
import { Container, 
Leftcontainer,
Rightcontainer,
Card, 
ProfileSection, 
ProfileImage,
Title, 
Declinepay, 
CountControls, 
Price, 
BookCard, 
BookImage,
Chaptercover } from './Addchapter.style';
import user from '../../../../assets/Ellipse 34.png';
import sbook from '../../../../assets/smallbooks.png';
import mbook from '../../../../assets/mediumbooks.png';
import lbook from '../../../../assets/largebooks.png';
import { IoMdArrowDropleft,IoMdArrowDropright } from "react-icons/io";

const Pricing = () => {

  const handleBuyNow = () => {};


  return (
    <Container>
    <Leftcontainer>
    <div className="profilecard">
      <Card>
      <button className="Profileedit">Edit</button>

        <ProfileSection>
          <ProfileImage src={user} alt="Profile" />
          <Title>Sneha Gadkar</Title>
          <h3>Dynamic Pricing</h3>
        </ProfileSection>

        <Chaptercover>
        <p className="count">Total no of Chapters</p>
        <CountControls>
          <IoMdArrowDropleft style={{fontSize:"15px"}}/>
          1
          <IoMdArrowDropright style={{fontSize:"15px"}}/>
        </CountControls>
        <p className="count">Book Cover</p>
        <CountControls>
          <IoMdArrowDropleft style={{fontSize:"15px"}}/>
          0
          <IoMdArrowDropright style={{fontSize:"15px"}}/>
        </CountControls>
        <p className="count">Total Price</p>
        <CountControls>
        <p className="countp">INR 1000</p>
        </CountControls>
        </Chaptercover>
        <Declinepay>
        <button className="decline">Decline</button>
        <button className="paynow">Pay Now</button>
        </Declinepay>
      </Card>
      </div>
      </Leftcontainer>


      <Rightcontainer>
      <div className="bookcategories">
      {/* Book Categories */}
      <BookCard>
        <BookImage src={sbook} alt="Small Book" />
        <p className="title">Small Books</p>
        <p className="booksinr">INR 1,000 <br />per chapter</p>
        <p className="bookschapter">(≤ 10 chapters)</p>
      </BookCard>

      <BookCard>
        <BookImage src={mbook} alt="Medium Book"/>
        <p className="title">Medium Books</p>
        <p className="booksinr">INR 900<br />per chapter</p>
        <p className="bookschapter">(11-25 chapters)</p>
      </BookCard>

      <BookCard>
        <BookImage src={lbook} alt="Large Book" />
        <p className="title">Large Books</p>
        <p className="booksinr">INR 800 <br />per chapter</p>
        <p className="bookschapter">(26+ chapters)</p>
      </BookCard>

      </div>
      <button className="buynow" onClick={handleBuyNow}>Buy Now</button>
      </Rightcontainer>
      </Container>

    
  );
};

export default Pricing;
