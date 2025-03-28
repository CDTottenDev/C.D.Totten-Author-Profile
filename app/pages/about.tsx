// pages/about.tsx
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
import ParallaxStars from '../components/parallaxstars';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-gray-100 overflow-hidden">
      <Head>
        <title>About C.D. Totten | Science Fiction Author</title>
        <meta name="description" content="Learn more about C.D. Totten, author of the Project Exodus series" />
      </Head>
      
      <ParallaxStars />
      <Header />
      
      <main className="pt-24 pb-16">
        <section className="py-16 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-blue-400">About the Author</h1>
              
              <div className="flex flex-col md:flex-row gap-10 mb-12">
                <div className="md:w-1/3">
                  <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/images/author-full.jpg"
                      alt="C.D. Totten"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3 space-y-6">
                  <p className="text-lg">
                    C.D. Totten is a hard science fiction author whose work explores the intersection of advanced technology, cosmic discovery, and the enduring human spirit. With a background in astronomy and a passion for scientific accuracy, Totten crafts stories that balance scientific rigor with compelling human narratives.
                  </p>
                  
                  <p className="text-lg">
                    Born and raised under dark skies in rural Colorado, Totten developed an early fascination with the cosmos. This lifelong interest led to formal study in astrophysics before pivoting to a career in scientific communication and, eventually, fiction writing.
                  </p>
                  
                  <p className="text-lg">
                    The "Project Exodus" series represents Totten's vision of humanity's first serious attempts to establish a presence beyond our solar system. Drawing inspiration from contemporary space exploration efforts and cutting-edge scientific research, the series aims to present a plausible and thought-provoking portrait of our species' potential future among the stars.
                  </p>
                  
                  <p className="text-lg">
                    When not writing, Totten can be found stargazing, hiking through national parks, or attending science fiction conventions across the country. Totten currently lives in Seattle with a very patient spouse and two cats named after famous astronomers.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-900 bg-opacity-60 rounded-lg p-8 backdrop-blur-sm border border-blue-900">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">What inspired the Project Exodus series?</h3>
                    <p>
                      The series was born from a fascination with the Drake Equation and the Fermi Paradox—two concepts that frame our understanding of potential extraterrestrial life. I wanted to explore how humanity might venture to the stars and what we might find there, while staying grounded in realistic physics and technology that could conceivably exist in the near future.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">How much research goes into your books?</h3>
                    <p>
                      Extensive research underpins every technological concept and celestial environment in the series. I consult with working scientists, read academic papers, and maintain a substantial library of reference materials. While I take some creative liberties for the sake of storytelling, I strive to make those departures from known science both plausible and transparent to the reader.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">Will there be more books after the Project Exodus series?</h3>
                    <p>
                      Absolutely! I have plans for both a follow-up series set in the same universe and an entirely new setting that explores different aspects of humanity's potential future. I'm always collecting ideas for new stories and concepts to explore.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">Do you have any advice for aspiring science fiction writers?</h3>
                    <p>
                      Read widely, both within and outside your genre. Develop a solid understanding of the scientific concepts you want to incorporate, but remember that characters and their struggles are what ultimately engage readers. Don't be afraid to reach out to experts—many scientists are delighted to help writers get the details right. And most importantly, write the story you want to read.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
