import Image from "next/image";

export default function Home(){
  return ( <div className="sm:scroll-smooth">
    <div className="min-h-screen bg-black dark:bg-black dark:text-white">
      <div className="bg-teal-700 text-white sticky top-0 z-10">
        <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-medium">
            <a href="#hero">🚀 Acme Rockets</a>
          </h1>
          <div>
            <button id="hamburger-button" className="text-3xl md:hidden cursor-pointer relative w-8 h-8">
              &#9776;
             
            </button>
            <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
              <a href="#rockets" className="hover:opacity-90">Our Rockets</a>
              <a href="#testimonals"className="hover:opacity-90">Testimonials</a>
            <a href="#contact" className="hover:opacity-90">Contact Us</a>
          </nav>
        </div>
      </section>
    </div><main className="max-w-4xl mx-auto">
        <section id="hero"
          className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height">
          <article className="sm:w-1/2">
            <h2
              className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-white dark:text-white">
              We Boldy Go <span className="text-indigo-700 dark:text-indigo-300">Where No Rocket</span> Has Gone
              Before...
            </h2>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-400">
              We're building rockets for the next century today. From the moon to Mars, Jupiter and beyond...
            </p>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-500">
              Think Acme Rockets.
            </p>
          </article>
        <Image src={"/image/rocketdab.png"} width={300} height={300} alt="Rocket Dab"/>
        
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2"/>

          <section id="rockets" className="p-6 my-12 scroll-mt-20  widescreen:section-min-height tallscreen:section-min-height">
            <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-lime-200">Our Rockets</h2>
            <ul className="list-none mx-auto my-12 flex flex-col sm:flew-row items-center gap-8">

<li className="w-2/3 sm:w-5/6 flex flex-col item-center border-4 border-solid border-slate-700 dark:border-gray-100 bg-black dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
  <Image src={"/image/rocketman.png"} alt="Explorer" width={300} height={300} className=" mx-auto w-1/2 mb-6 "/>
  <h3 className="text-3xl text-center text-white dark:text-white  ">Explorer</h3>

  <p className="hidden sm:block text-3xl mt-2 text-center text-slate-400 dark:text-white">$</p>

  <p className="sm:hidden text-2xl mt-2 text-center text-slate-400 dark:text-white">Affordable Exploration</p>


</li>


<li className="w-2/3 sm:w-5/6 flex flex-col item-center border-4 border-solid border-slate-700 dark:border-gray-100 bg-black dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
  <Image src={"/image/rocketride.png"} alt="Adventure" width={300} height={300} className=" mx-auto w-1/2 mb-6 "/>
  <h3 className="text-3xl text-center text-white dark:text-white ">Adventure</h3>

  <p className="hidden sm:block text-3xl mt-2 text-center text-slate-400 dark:text-white">$$</p>

  <p className="sm:hidden text-2xl mt-2 text-center text-slate-400 dark:text-white">Best Selling Rockets!</p>


</li>


<li className="mx-auto w-2/3 sm:w-5/6 flex flex-col item-center border-4 border-solid border-slate-700 dark:border-gray-100 bg-black dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
  <Image src={"/image/rocketlauncher.png"} alt="Infinity" width={300} height={300} className=" mx-auto w-1/2 mb-6 "/>
  <h3 className="text-3xl text-center text-white dark:text-white">Infinity</h3>

  <p className="hidden sm:block text-3xl mt-2 text-center text-slate-400 dark:text-white">$$$</p>

  <p className="sm:hidden text-2xl mt-2 text-center text-slate-400 dark:text-white">Luxury Starship</p>


</li>
          </ul>
          </section>
          <hr className="mx-auto  bg-black dark:bg-white w-1/2"/>

          <section id="testimonals" className="p-6 my-12 scroll-mt-20" >
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-lime-200  widescreen:section-min-height tallscreen:section-min-height">Testimonial</h2>
</section>
          <figure className="my-12">
            <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative ">
<p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400  before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 

after:font-serif after:absolute after:-bottom-18 after:right-2 after:text-9xl after:text-white after:opacity-25 after:transform after:translate-x-2 after:translate-y-2 after:content-['\201D'] ">
  Acme
  has always been there for me.
  Their Explorer rocket arrived in wooden crafts as expected.
  Life-long customer! A++ shopping experience.
</p>
            </blockquote>
            <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-400 dark:text-slate-400">
  &#8212; Wile E. Coyoty,Genius
</figcaption>
            </figure>

            <figure className="my-12">
            <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative ">
<p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400  before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 

after:font-serif after:absolute after:-bottom-18 after:right-2 after:text-9xl after:text-white after:opacity-25 after:transform after:translate-x-2 after:translate-y-2 after:content-['\201D'] ">
The Acme Adventure Rocket has thwared my Illudium Q-36 Explosive Space Modulator
on several occassions.<span className="italic">This makes me very very angry! </span>Nevertheless, K-9 and I have an awarded Acme Martian contract for space exploration rockets  based on Acme's quality are stured designed.
</p>
            </blockquote>
            <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-400 dark:text-slate-400">
  &#8212; Marvin The Martian &amp; K-9
</figcaption>
            </figure>

            <figure className="my-12">
            <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative ">
<p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400  before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 

after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:-transform after:-translate-x-2 after:-translate-y-2 after:content-['\201D'] ">
  I knew I not only wanted &#8212; <span className="italic">I needed</span> &#8212; Acme's Infinity.
  Rockets for my mission in space.Acme delivered in one day! Nothing says <q className="italic">Take me to your leader</q> like Acme's Infinity Rockets! 💯
</p>
            </blockquote>
            <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-400 dark:text-slate-400">
  &#8212; Buzz Lightyear
</figcaption>
            </figure> 
        <hr className="mx-auto bg-black dark:bg-white w-1/2"/>

        <section id="contact"  className="p-6 my-12 scroll-mt-16" >
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-lime-200  widescreen:section-min-height tallscreen:section-min-height">Contact Us</h2>

        <form action="" className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4">

          <label htmlFor="subject">Subject:</label>

          <input type="text" id="subject" name="subject" required minLength={3} maxLength={60} placeholder="Your Subject" className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"/>

          <label htmlFor="message">Message:</label>

          <textarea name="message" id="message" cols={26} rows={8} placeholder="Your Message" required className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"></textarea>
          <button className="bg-teal-700 hover-bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none">Submit</button>
        </form>
      </section>
    </main>

    <footer id="footer" className="bg-teal-700 text-white text-xl">
      <section className="max-w-4xl  mx-auto p-4 flex flex-col  sm:flex-row sm:justify-between">
        <address>
          <h2>Acme Rocket-Powered Products, Inc.</h2>
555 Astro Way<br/>
Fairfield ,New Jersey 12233-555<br/>
Email : AcmeRocket@gmail.com<br/>
Phone:(666)-66 6666 
          </address>
          <nav className="hidden md:flex flex-col gap-2 " aria-lable="footer">
            <a href="#rockets" className="hover:opacity-90">Our Rockets</a>
            <a href="#testimonals" className="hover:opacity-90">Testimonals</a>
            <a href="#contact" className="hover:opacity-90">Contact Us</a>
          </nav>
<div className="flex flex-col sm:gap-2">
  <p className="text-right">CopyRight &copy; <span id="year">2023</span></p>
  <p className="text-right">All Rights Reserved</p>
</div>
      </section>
    </footer>
</div>

</div>
  )
}