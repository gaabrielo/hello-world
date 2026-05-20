import { useEffect, useRef } from 'react';
import { SectionHeader } from '../ui/section-header';
// import { motion } from 'motion/react';

const defaultTopRowApps = [
  {
    name: 'Tailwind',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/tailwind-svgrepo-com.svg',
  },
  {
    name: 'Framer',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/framer-svgrepo-com.svg',
  },
  {
    name: 'GraphQL',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/graphql-svgrepo-com.svg',
  },
  {
    name: 'NodeJS',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/node-js-svgrepo-com.svg',
  },
  {
    name: 'Python',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/python-svgrepo-com.svg',
  },
  {
    name: '.NET Core',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/NET%20core.svg',
  },
  {
    name: 'C#',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/C%23%20%28CSharp%29.svg',
  },
  {
    name: 'React',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/react-svgrepo-com.svg',
  },
  {
    name: 'Java',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/java-svgrepo-com.svg',
  },
  {
    name: 'TypeScript',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/typescript-icon-svgrepo-com.svg',
  },
];
const defaultBottomRowApps = [
  {
    name: 'AWS',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/aws-svgrepo-com.svg',
  },
  {
    name: 'ExpressJS',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/express-svgrepo-com.svg',
  },
  {
    name: 'NestJS',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/nestjs-svgrepo-com.svg',
  },
  {
    name: 'Firebase',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/firebase-svgrepo-com.svg',
  },
  {
    name: 'NextJS',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/nextjs-icon-svgrepo-com.svg',
  },
  {
    name: 'NGNIX',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/NGINX.svg',
  },
  {
    name: 'C++',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/C%2B%2B%20%28CPlusPlus%29.svg',
  },
  {
    name: 'MongoDB',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/MongoDB.svg',
  },
  {
    name: 'Three.js',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/Three.js.svg',
  },
  {
    name: 'Storybook',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/Storybook.svg',
  },
  {
    name: 'Redux',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/Redux.svg',
  },
  {
    name: 'Solid.js',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/Solid.js.svg',
  },
  {
    name: 'Flask',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/Flask.svg',
  },
  {
    name: 'Redis',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/Redis.svg',
  },
  {
    name: 'Framer',
    logo: 'https://dqcyw8gdrsi48oer.public.blob.vercel-storage.com/stack/framer-svgrepo-com.svg',
  },
];
export const StackSection = ({
  buttonText = 'Explore Integrations',
  buttonHref = '#',
  title = 'Integrates with your entire collaboration stack.',
  subtitle = 'Connect Auralink to Slack, Zoom, Notion, Google Meet, and dozens of others to analyze communication seamlessly.',
  topRowApps = defaultTopRowApps,
  bottomRowApps = defaultBottomRowApps,
}) => {
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  useEffect(() => {
    let topAnimationId;
    let bottomAnimationId;
    let topPosition = 0;
    let bottomPosition = 0;
    const animateTopRow = () => {
      if (topRowRef.current) {
        topPosition -= 0.5;
        if (Math.abs(topPosition) >= topRowRef.current.scrollWidth / 2) {
          topPosition = 0;
        }
        topRowRef.current.style.transform = `translateX(${topPosition}px)`;
      }
      topAnimationId = requestAnimationFrame(animateTopRow);
    };
    const animateBottomRow = () => {
      if (bottomRowRef.current) {
        bottomPosition -= 0.65;
        if (Math.abs(bottomPosition) >= bottomRowRef.current.scrollWidth / 2) {
          bottomPosition = 0;
        }
        bottomRowRef.current.style.transform = `translateX(${bottomPosition}px)`;
      }
      bottomAnimationId = requestAnimationFrame(animateBottomRow);
    };
    topAnimationId = requestAnimationFrame(animateTopRow);
    bottomAnimationId = requestAnimationFrame(animateBottomRow);
    return () => {
      cancelAnimationFrame(topAnimationId);
      cancelAnimationFrame(bottomAnimationId);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="px-16 not-md:px-8">
        <SectionHeader>Stack</SectionHeader>
      </div>
      {/* <div className="max-w-[680px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center mb-20"
        >
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-[40px] leading-tight font-normal text-[#222222] text-center tracking-tight mb-0"
              style={{
                fontFamily: 'var(--font-figtree), Figtree',
                fontWeight: '400',
                fontSize: '40px',
              }}
            >
              {title}
            </h2>
            <p
              className="text-lg leading-7 text-[#666666] text-center max-w-[600px] mt-2"
              style={{
                fontFamily: 'var(--font-figtree), Figtree',
              }}
            >
              {subtitle}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
            className="flex gap-3 mt-6"
          >
            <a
              href={buttonHref}
              className="inline-block px-5 py-2.5 rounded-full bg-white text-[#222222] text-[15px] font-medium leading-6 text-center whitespace-nowrap transition-all duration-75 ease-out w-[182px] cursor-pointer hover:shadow-lg"
              style={{
                boxShadow:
                  '0 -1px 0 0 rgb(181, 181, 181) inset, -1px 0 0 0 rgb(227, 227, 227) inset, 1px 0 0 0 rgb(227, 227, 227) inset, 0 1px 0 0 rgb(227, 227, 227) inset',
                backgroundImage:
                  'linear-gradient(rgba(255, 255, 255, 0.06) 80%, rgba(255, 255, 255, 0.12))',
              }}
            >
              {buttonText}
            </a>
          </motion.div>
        </motion.div>
      </div> */}

      <div className="h-[268px] -mt-6 mb-0 pb-0 relative overflow-hidden">
        <div
          ref={topRowRef}
          className="flex items-start gap-6 absolute top-6 whitespace-nowrap"
          style={{
            willChange: 'transform',
          }}
        >
          {[...topRowApps, ...topRowApps].map((app, index) => (
            <div
              key={`top-${index}`}
              className="flex items-center justify-center w-24 h-24 rounded-3xl flex-shrink-0 shadow-sm bg-gradient-to-b from-neutral-700 to-neutral-800"
            // className="flex items-center justify-center w-24 h-24 rounded-3xl flex-shrink-0"
            // style={{
            //   backgroundImage:
            //     'linear-gradient(rgb(255, 255, 255), rgb(252, 252, 252))',
            //   boxShadow:
            //     'rgba(0, 0, 0, 0.04) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 3px 3px -1.4px, rgba(0, 0, 0, 0.04) 0px 6px 6px -3px, rgba(0, 0, 0, 0.04) 0px 12px 12px -6px, rgba(0, 0, 0, 0.04) 0px 12px 12px -12px',
            // }}
            >
              <img
                src={app.logo || '/placeholder.svg'}
                alt={app.name}
                className="w-9 h-9 block object-contain"
              />
            </div>
          ))}
        </div>

        <div
          className="absolute top-0 right-0 bottom-0 w-60 h-[268px] z-10 pointer-events-none"
        // style={{
        //   backgroundImage:
        //     'linear-gradient(90deg, rgba(0, 0, 0, 0), rgb(255, 255, 255))',
        // }}
        />

        <div
          className="absolute top-0 left-0 bottom-0 w-60 h-[268px] z-10 pointer-events-none"
        // style={{
        //   backgroundImage:
        //     'linear-gradient(90deg, rgb(255, 255, 255), rgba(0, 0, 0, 0))',
        // }}
        />

        <div
          ref={bottomRowRef}
          className="flex items-start gap-6 absolute top-[148px] whitespace-nowrap"
          style={{
            willChange: 'transform',
          }}
        >
          {[...bottomRowApps, ...bottomRowApps].map((app, index) => (
            <div
              key={`bottom-${index}`}
              className="flex items-center justify-center w-24 h-24 rounded-3xl flex-shrink-0 shadow-sm bg-gradient-to-b from-neutral-700 to-neutral-800"
            // style={{
            //   backgroundImage:
            //     'linear-gradient(rgb(255, 255, 255), rgb(252, 252, 252))',
            //   boxShadow:
            //     'rgba(0, 0, 0, 0.04) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 3px 3px -1.4px, rgba(0, 0, 0, 0.04) 0px 6px 6px -3px, rgba(0, 0, 0, 0.04) 0px 12px 12px -6px, rgba(0, 0, 0, 0.04) 0px 12px 12px -12px',
            // }}
            >
              <img
                src={app.logo || '/placeholder.svg'}
                alt={app.name}
                className="w-9 h-9 block object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
