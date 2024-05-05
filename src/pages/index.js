import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Welcome to Happenstance!
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
          The best connections happen by chance.
          </p>
          {/* <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
          </p>
          <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p> */}
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="mission" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">The Mission</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          The 21st-century workforce increasingly consists of job
          hoppers seeking diverse experiences and higher
          compensation, while remote work trends have shifted the
          workspace to anywhere one chooses. These factors
          create a unique situation where job hirers and job
          seekers find themselves working amongst each other in
          popular public spaces, like cafes or airport lounges.
          Happenstance enables professionals to network in
          person, in their favorite spaces, and in real time.
        </div>
      </div>
    </section>
    <SplitSection
      id="solution"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Our Solution</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Leveraging IP-based geolocation, Happenstance
          connects professionals who cross paths in daily life.
          Users are notified when they encounter others on the
          app and can choose to share a limited professional
          profile.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          If both parties are interested, full profiles are
          unveiled, facilitating a seamless in-person introduction.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          This approach enhances the quality and authenticity of
          professional connections by embracing the
          serendipitous nature of in-person interactions.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="market" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
      <h3 className="text-3xl font-semibold leading-tight">Target Market</h3>
      <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
      With the majority of US workers interested in switching
      jobs in 2024 and nearly 50% of all new hires a result of
      recruiters, Happenstance provides a valuable networking
      platform for employers and employees alike.
      </div>
      
        {/* <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div> */}
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Contact us</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);

export default Index;
