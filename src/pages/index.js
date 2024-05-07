import React from 'react';
import Button from '../components/Button';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';

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
        </div>
        <div className="lg:w-1/2">
          <img width={"100%"} src="https://st2.depositphotos.com/1000460/5260/v/950/depositphotos_52600843-stock-illustration-human-model-connection.jpg" />
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
      secondarySlot={<img width={"100%"} src="https://img.freepik.com/free-vector/happy-woman-chatting-with-friends-online_74855-14073.jpg"/>}
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
      secondarySlot={<img width={"100%"} src="https://static.vecteezy.com/system/resources/previews/004/397/320/original/business-greeting-concepts-vector.jpg"/>}
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
      secondarySlot={<img width={"100%"} src="https://cdn.geekwire.com/wp-content/uploads/2018/11/bigstock-Chatting-Persons-People-Group-243691576.jpg"/>}
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
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
        Unlike traditional professional networking apps,
        Happenstance focuses on meaningful, in-person
        connections, recognizing the power of chance
        encounters in building lasting professional relationships.
        </div>
      </div>
    </section>
    <section id="about" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
      <h3 className="text-3xl font-semibold leading-tight">About</h3>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          Zachary Van Tol is the founder of
          Happenstance, bringing 5+ years of
          experience at the interface of higher
          education and partnerships with the
          public and private sectors. He holds a
          B.S. and M.S. from Virginia Tech and is
          a Ph.D. Candidate at Arizona State
          University’s School of Sustainability.
        </div>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
        Zach founded Happenstance to
        seamlessly integrate networking into
        everyday life, believing technology
        should enhance, not replace,
        in-person communication.
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Contact us</h3>
      <p className="mt-8 text-xl font-light">
      </p>
      <p className="mt-8">
        <a href="mailto:zachvantol97@gmail.com"><Button size="xl">Email</Button></a>
      </p>
    </section>
  </Layout>
);

export default Index;
