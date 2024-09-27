import React from 'react'; 
import Button from '../components/Button';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';

const Index = () => (
  <Layout>
    <section className="pt-8 md:pt-12"> {/* Reduced padding */}
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Welcome to Happenstance!
          </h1>
          <p className="text-xl lg:text-2xl mt-12 font-light"> {/* Reduced margin */}
            <em>"The best connections happen by chance."</em>
          </p>
        </div>
        <div className="lg:w-1/2 text-center">
          <img width={"100%"} src={'/PicOne.jpg'} alt="Happenstance logo" />
          <a href="http://www.freepik.com" className="text-xs text-black block mt-1">
            Designed by rawpixel.com / Freepik
          </a>
        </div>
      </div>
    </section>

    <section id="mission" className="py-6 lg:py-8 lg:pt-12"> {/* Reduced padding */}
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold">Our Mission</h2>
        <p className="mt-4 text-lg font-light leading-relaxed">
          The 21st-century dating scene is full of people seeking meaningful connections while balancing busy, 
          yet flexible lifestyles. As remote work and mobile living become commonplace, singles find themselves 
          in increasingly diverse, spontaneous settings—cafes, parks, and even airport lounges. 
          Happenstance helps people embrace these organic moments, facilitating in-person connections in real-time, 
          wherever their paths may cross. It’s dating in your favorite spaces, with no swipes or algorithms—just 
          authentic interactions as they happen.
        </p>
      </div>
    </section>

    <SplitSection
      id="solution"
      primarySlot={
        <div className="flex flex-col items-center lg:pr-32 xl:pr-48 pl-500">
          <h3 className="text-4xl font-semibold leading-tight text-center">The Solution</h3>
          <p className="mt-12 text-lg font-light leading-relaxed text-center"> {/* Reduced margin */}
            Leveraging IP-based geolocation, Happenstance connects singles who cross paths in daily life. Users are notified 
            when they encounter others on the app and can choose to share a limited dating profile.
          </p>
        </div>
      }
      secondarySlot={
        <div className="flex justify-center">
          <img width={"80%"} src={'/AppDemo1.png'} alt="Happenstance App Mockup" className="mx-auto" />
        </div>
      }
    />

    <SplitSection
      reverseOrder
      primarySlot={
        <div className="flex flex-col items-center lg:pl-32 xl:pl-48">
          <h3 className="text-4xl font-semibold leading-tight text-center"></h3>
          <p className="mt-2 text-lg font-light leading-relaxed text-center"> {/* Reduced margin */}
            If both parties show interest, complete profiles are exchanged, setting the stage for a seamless in-person introduction. 
          </p>
        </div>
      }
      secondarySlot={
        <div className="flex justify-center">
          <img width={"80%"} src={'/AppDemo2.png'} alt="Happenstance App Mockup" className="mx-auto" />
        </div>
      }
    />

    <SplitSection
      primarySlot={
        <div className="flex flex-col items-center lg:pr-32 xl:pr-48">
          <h3 className="text-4xl font-semibold leading-tight text-center"></h3>
          <p className="mt-2 text-lg font-light leading-relaxed text-center"> {/* Reduced margin */}
            This approach enhances the quality and authenticity of connections by embracing the
            serendipitous nature of in-person interactions.
          </p>
        </div>
      }
      secondarySlot={
        <div className="flex justify-center">
          <img width={"80%"} src={'/AppDemo3.png'} alt="Happenstance App Mockup" className="mx-auto" />
        </div>
      }
    />

    <section id="market" className="py-8 lg:py-12 lg:pt-16"> {/* Reduced padding */}
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-semibold leading-tight">Target Market</h3>
        <p className="mt-2 text-lg font-light leading-relaxed"> {/* Reduced margin */}
          Dating apps are more popular than ever, with over 60 million users in the U.S. in 2023. Yet, most of these platforms prioritize 
          virtual connections, neglecting the importance of in-person interactions and contributing to a growing sense of ‘swipe fatigue’.
        </p>
        <div className="text-center mt-4"> {/* Added margin to separate from previous text */}
          <img className="mx-auto" width={"50%"} src={'/USBurnout.png'} alt="Happenstance logo" />
          <a href="https://www.forbes.com/health/dating/dating-app-fatigue/" className="text-xs text-black block mt-1">
            Source: Forbes Health
          </a>
        </div>
        <p className="mt-2 text-lg font-light leading-relaxed text-center"> {/* Reduced margin */}
          76% of U.S. users feel mentally or physically exhausted from dating apps sometimes, often, or always. Happenstance 
          offers a refreshing alternative to traditional dating apps, especially for the younger, hyper-online generation.
        </p>
      </div>
    </section>

    <section id="about" className="py-8 lg:py-12 lg:pt-16"> {/* Reduced padding */}
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-semibold leading-tight">About</h3>
        <SplitSection
          primarySlot={
            <>
              <div className="lg:pr-32 xl:pr-48">
                <p className="mt-2 text-lg font-light leading-relaxed"> {/* Reduced margin */}
                  Zachary Van Tol has over five years of experience in higher education and public-private partnerships. 
                  Currently a Ph.D. Candidate at Arizona State University, Van Tol combines his expertise in social science 
                  with a commitment to enhancing real-world experiences, uniquely positioning him to lead a relationship-building 
                  revolution centered on in-person interaction.
                </p>
              </div>
              <div className="lg:pr-32 xl:pr-48">
                <p className="mt-12 text-lg font-light leading-relaxed"> {/* Reduced margin */}
                  Zach founded Happenstance to bring dating back to the real world, believing technology should enhance, 
                  not replace, relationship building.
                </p>
              </div>
            </>
          }
          secondarySlot={
            <div className="flex justify-center items-center">
              <img width={"75%"} src={'/trees.png'} alt="Zachary Van Tol Headshot" className="mx-auto" />
            </div>
          }
        />
      </div>
    </section>

    <section className="container mx-auto my-8 py-8 bg-gray-200 rounded-lg text-center"> {/* Reduced margin */}
      <h3 className="text-5xl font-semibold">Contact us</h3>
      <p className="mt-4">
        <a href="mailto:zach@happenstance.cc">
          <Button className="bg-gray-800 text-white hover:bg-blue-700" size="xl">Get in Touch!</Button>
        </a>
      </p>
    </section>
  </Layout>
);

export default Index;
