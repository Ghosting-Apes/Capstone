"use client"
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Chrono = dynamic(() => import('react-chrono').then(mod => mod.Chrono), {
  ssr: false,
});

export default function Time() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <Chrono textDensity="LOW" items={[
        {
          title: "47th Millennium BCE",
          cardTitle: "First Evidence of Medicine",
          media: {
            source: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Achillea_millefolium_%28bright%29.jpg/250px-Achillea_millefolium_%28bright%29.jpg"
            },
            type: "IMAGE"
          },
          cardSubtitle: "Evidence of medicine dates back nearly 50,000 years as fossilized Neanderthal teeth shows microfossils of yarrow and chamomile plants. These plants are used in traditional medicine.",
        },
        {
          title: "18th Millennium BCE",
          cardTitle: "Evidence of Surgery",
          media: {
            source: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Achillea_millefolium_%28bright%29.jpg/250px-Achillea_millefolium_%28bright%29.jpg"
            },
            type: "IMAGE"
          },
          url: "https://google.com",
          cardSubtitle: "Skulls found with holes drilled into them. This procedure is known as trepanning and has been used over different time periods to treat various medical conditions."
        },
        {
          title: "3000 BCE",
          cardTitle: "Mummified Information",
          media: {
            source: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Achillea_millefolium_%28bright%29.jpg/250px-Achillea_millefolium_%28bright%29.jpg"
            },
            type: "IMAGE"
          },
          cardSubtitle: "Egyptian mummies that have been preserved show signs of various alignments that affected the ancient Egpytians such as broken bones and signs of tuberculosis.",
        },
        {
          title: "2650 BCE",
          cardTitle: "Egyptian Physician Imhotep",
          media: {
            source: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Achillea_millefolium_%28bright%29.jpg/250px-Achillea_millefolium_%28bright%29.jpg"
            },
            type: "IMAGE"
          },
          cardSubtitle:  (
            <div>
              <p>The ancient Egyptian architect and physician <Link className="text-blue-500 hover:underline" href='/people/Imhotep/info'>Imhotep</Link> is active. He eventually becomes the leading priest-physician. He also is later elevated to a god status.</p>
            </div>
          )
        },
        {
          title: "1755 BCE",
          cardTitle: "Code of Hammurabi",
          media: {
            source: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Achillea_millefolium_%28bright%29.jpg/250px-Achillea_millefolium_%28bright%29.jpg"
            },
            type: "IMAGE"
          },
          cardSubtitle:  (
            <div>
              <p>The <Link className="text-blue-500 hover:underline" href='/work/Code_of_Hammurabi/'>Code of Hammurabi</Link> is regarded as the origin of medicine as a profession with several clauses containing rules and regulations for physicians.</p>
            </div>
          )
        },
        {
          title: "500 BCE",
          cardTitle: "Ayurvedic Medicine Appears in India",
          media: {
            source: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Achillea_millefolium_%28bright%29.jpg/250px-Achillea_millefolium_%28bright%29.jpg"
            },
            type: "IMAGE"
          },
          cardSubtitle: (
            <div>
              <p>An early version of <Link className="text-blue-500 hover:underline" href='/work/Sushruta_Samhita/'>Sushruta Samhita</Link>, one of the two major works forming 
              the basis of <Link className="text-blue-500 hover:underline" href='/misc/Ayurveda/'>Ayurveda</Link> arises in India.</p>
            </div>
          )
        },
        {
          title: "440 BCE",
          cardTitle: "Hippocrates Starts Training",
          media: {
            source: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Achillea_millefolium_%28bright%29.jpg/250px-Achillea_millefolium_%28bright%29.jpg"
            },
            type: "IMAGE"
          },
          cardSubtitle: (
            <div>
              <p>One of the most famous physicians, <Link className="text-blue-500 hover:underline" href='/people/Hippocrates_of_Kos/info'>Hippocrates</Link>, begins his medical training at his local <Link className="text-blue-500 hover:underline" href='/place/Asclepeions/'>Asclepeions</Link>.</p>
            </div>
          )
        },
        {
          title: "400 BCE",
          cardTitle: "The Framework for Traditional Chinese Medicine",
          media: {
            source: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Achillea_millefolium_%28bright%29.jpg/250px-Achillea_millefolium_%28bright%29.jpg"
            },
            type: "IMAGE"
          },
          cardSubtitle: (
            <div>
              <p>The classical text <Link className="text-blue-500 hover:underline" href='/work/Huangdi_Neijing/'>Huangdi Neijing</Link> establishes the framework for <Link className="text-blue-500 hover:underline" href='/misc/Traditional_Chinese_Medicine/'>traditional Chinese medicine</Link>.</p>
            </div>
          )
        },
        {
          title: "260 BCE",
          cardTitle: "The Birth of Anatomy and Physiology",
          media: {
            source: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Achillea_millefolium_%28bright%29.jpg/250px-Achillea_millefolium_%28bright%29.jpg"
            },
            type: "IMAGE"
          },
          cardSubtitle: (
            <div>
              <p>Herophilus of Chalcedon along with Erasistratus of Ceos dissect and study human bodies in Alexandria.</p>
            </div>
          )
        },
        {
          title: "130 CE",
          cardTitle: "The Standard of Women's Health for a Millennium",
          media: {
            source: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Achillea_millefolium_%28bright%29.jpg/250px-Achillea_millefolium_%28bright%29.jpg"
            },
            type: "IMAGE"
          },
          cardSubtitle: (
            <div>
              <p>Greek physician Soranus of Ephesus writes Gynaecology, one of his works that set the standard of women's health and infant care.</p>
            </div>
          )
        },
        {
          title: "169 CE",
          cardTitle: "Galen Returns to Rome",
          media: {
            source: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Achillea_millefolium_%28bright%29.jpg/250px-Achillea_millefolium_%28bright%29.jpg"
            },
            type: "IMAGE"
          },
          cardSubtitle: (
            <div>
              <p>Greek physician <Link className="text-blue-500 hover:underline" href='/people/Cladius_Galen/info'>Cladius Galen</Link> returns from 
              Pergamon to Rome giving anatomical demonstrations and writing his medical treatises.</p>
            </div>
          ),
        },
        {
          title: "400 CE",
          cardTitle: "Ayurvedic Translations",
          media: {
            source: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Achillea_millefolium_%28bright%29.jpg/250px-Achillea_millefolium_%28bright%29.jpg"
            },
            type: "IMAGE"
          },
          cardSubtitle: (
            <div>
              <p>Scholars began translating <Link className="text-blue-500 hover:underline" href='/misc/Ayurveda/'>Ayurvedic</Link> works into Chinese.</p>
            </div>
          ),
        },
        {
          title: "608 CE",
          cardTitle: "Japanese Study in China",
          media: {
            source: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Achillea_millefolium_%28bright%29.jpg/250px-Achillea_millefolium_%28bright%29.jpg"
            },
            type: "IMAGE"
          },
          cardSubtitle: (
            <div>
              <p>Japanese physicians begin to be sent to China for study, leaving a heavy influence of 
                <Link className="text-blue-500 hover:underline" href='/misc/Traditional_Chinese_Medicine/'> traditional Chinese medicine</Link> upon 
                <Link className="text-blue-500 hover:underline" href='/misc/Kampo/'> Kampo</Link>.</p>
            </div>
          ),
        },
        {
          title: "700 CE",
          cardTitle: "Chinese Scholars in India",
          media: {
            source: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Achillea_millefolium_%28bright%29.jpg/250px-Achillea_millefolium_%28bright%29.jpg"
            },
            type: "IMAGE"
          },
          cardSubtitle: (
            <div>
              <p>Chinese scholars come to study medicine at 
                <Link className="text-blue-500 hover:underline" href='/place/Nalanda_University/'> Nalanda University</Link> in India.</p>
            </div>
          )
        },
        {
          title: "800 CE",
          cardTitle: "Medical Translations into Arabic",
          media: {
            source: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Achillea_millefolium_%28bright%29.jpg/250px-Achillea_millefolium_%28bright%29.jpg"
            },
            type: "IMAGE"
          },
          cardSubtitle: (
            <div>
              <p>Various works of 
                <Link className="text-blue-500 hover:underline" href='/people/Cladius_Galen/info'> Galen</Link> and 
                <Link className="text-blue-500 hover:underline" href='/misc/Ayurveda/'> Ayurvedic</Link> works are translated into Arabic.</p>
            </div>
          )
        }
      ]}
      mode="VERTICAL_ALTERNATING" />
    </div>
  );
}
