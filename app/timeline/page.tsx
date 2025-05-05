"use client"
import dynamic from 'next/dynamic';

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
          cardSubtitle: "The ancient Egyptian architect and physician ***Imhotep*** is active. He eventually becomes the leading priest-physician. He also is later elevated to a god status.",
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
          cardSubtitle: "The ***Code of Hammurabi*** is regarded as the origin of medicine as a profession with several clauses containing rules and regulations for physicians.",
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
          cardSubtitle: "An early version of ***Susruta Samhita***, one of the two major works forming the basis of ***Ayurveda*** arises in India.",
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
          cardSubtitle: "One of the most famous physicians, ***Hipoocrates***, begins his medical training at his local ***Asclepeion***.",
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
          cardSubtitle: "The classical text ***Huangdi Neijing*** establishes the framework for ***traditional Chinese medicine***.",
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
          cardSubtitle: "***Herophilus of Chalcedon*** along with ***Erasistratus of Ceos*** dissect and study human bodies in ***Alexandria***.",
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
          cardSubtitle: "Greek physician ***Soranus of Ephesus*** writes ***Gynaecology***, one of his works that set the standard of women's health and infant care.",
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
          cardSubtitle: "Greek physician ***Cladius Galen*** returns from ***Pergamon*** to ***Rome*** giving anatomical demonstrations and writing his medical treatises.",
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
          cardSubtitle: "Scholars began translating ***Ayurvedic*** works into Chinese",
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
          cardSubtitle: "Chinese scholars come to study medicine at ***Nalanda University*** in India.",
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
          cardSubtitle: "Various works of ***Galen*** and ***Ayurvedic*** works are translated into Arabic.",
        }
      ]}
      mode="VERTICAL_ALTERNATING" />
    </div>
  );
}
