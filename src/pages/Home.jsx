import React, { useState } from 'react';
import DemoBanner from '../components/site/DemoBanner';
import Navbar from '../components/site/Navbar';
import Hero from '../components/site/Hero';
import Mission from '../components/site/Mission';
import Network from '../components/site/Network';
import PartnerProducts from '../components/site/PartnerProducts';
import Impact from '../components/site/Impact';
import GetInvolved from '../components/site/GetInvolved';
import ContactForm from '../components/site/ContactForm';
import Newsletter from '../components/site/Newsletter';
import Donation from '../components/site/Donation';
import Footer from '../components/site/Footer';

export default function Home() {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <div className="min-h-screen bg-white font-inter">
      <DemoBanner onDismiss={() => setBannerVisible(false)} />
      <Navbar bannerVisible={bannerVisible} />
      <Hero />
      <Mission />
      <Network />
      <PartnerProducts />
      <Impact />
      <GetInvolved />
      <ContactForm />
      <Newsletter />
      <Donation />
      <Footer />
    </div>
  );
}