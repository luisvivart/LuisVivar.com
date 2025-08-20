import Image from 'next/image';

import LuisFullPose from '/public/images/luis-full-pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={LuisFullPose}
              alt="Fullpose of Luis"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m a passionate{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              Software Engineer
            </Link>{' '}
            with 7 years of experience and a strong foundation in 
            Data Science and Machine Learning. Proficient in developing scalable, 
            data-driven solutions and optimizing workflows through predictive modeling, 
            algorithms, and advanced analytics. 
            Passionate about leveraging technology to derive actionable insights and deliver impactful results.
          </Typography>
          <Typography>
            I began my journey as a web developer in 2018, and since then,
            I&apos;ve continued to grow and evolve, taking on new challenges and learning the latest technologies along the way. 
            Now, in my early thirties, 7 years after starting my programming
            journey, I&apos;m building cutting-edge web applications, fine-tuning LLMs, and using Gen AI every time I can.
            As work, as a hobby, and as a passion.
          </Typography>
          <Typography>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </Typography>
          <Typography>
            When I&apos;m not in full-on developer mode, you can find me
            scrolling through instagram. You can follow me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.INSTAGRAM}
            >
              Instagram
            </Link>{' '}
            where I share a bit more personal stuff (usually travelling or hanging with my family), or you can
            follow me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            for more of my work that I am apble to publish publically.
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">M.S. in Data Science</Typography>
              <Typography component="li">B.A. in Data Visualization</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid learner</Typography>
              <Typography component="li">Dog lover</Typography>
            </ul>
          </div>
          {/* <Typography>
            One last thing, I&apos;m available for freelance work, so feel free
            to reach out and say hello! I promise I don&apos;t bite 😉
          </Typography> */}
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
