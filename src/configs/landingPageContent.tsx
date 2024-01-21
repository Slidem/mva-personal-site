import {
  AmazonwebservicesOriginal,
  DockerOriginal,
  JavaOriginal,
  KubernetesPlain,
  NodejsOriginal,
  ReactOriginal,
} from "devicons-react";
import {
  CircleStackIcon,
  CloudIcon,
  DocumentTextIcon,
  EllipsisHorizontalCircleIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export const headerItems = [
  {
    label: "Blog",
    page: "blog",
    icon: <DocumentTextIcon />,
  },
  {
    label: "Work",
    page: "work",
    icon: <PresentationChartLineIcon />,
  },
  {
    label: "Reach out",
    page: "#connect",
    icon: <RocketLaunchIcon />,
    inverted: true,
  },
];

export const skills = [
  {
    title: "Java",
    experience: "7+ years",
    description: `
        Throughout my career, I've mainly worked on the backend, Java being my
        main programming language. Not only have I worked with various versions
        of Java, but I've also worked with various frameworks and libraries like
        Spring, Dropwizard, Maven, Gradle, Hibernate.
      `,
    modalContent: (
      <div className="w-full flex flex-col gap-4 items-center">
        <h1 className="text-extrabold text-2xl">Java (7+ years)</h1>
        <p className="text-justify">
          Throughout my career, I've mainly worked on the backend, Java and the
          ecosystem surrounding it. Not only have I worked with various versions
          of Java ranging from <b>1.4 to 17</b>, but I've also worked with
          various frameworks and libraries like{" "}
          <b>Spring, Dropwizard, Maven, Gradle, Hibernate.</b>
        </p>
      </div>
    ),
    icon: <JavaOriginal size={24} />,
  },
  {
    title: "Microservices",
    experience: "5+ years",
    description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas iste rem
        optio quia perspiciatis obcaecati saepe in modi a culpa quae molestias,
      `,
    icon: (
      <div className="w-6 h-6 text-sky-700">
        <ServerStackIcon />
      </div>
    ),
  },
  {
    title: "Databases",
    experience: "7+ years",
    description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas iste rem
        optio quia perspiciatis obcaecati saepe in modi a culpa quae molestias,
      `,
    icon: (
      <div className="w-6 h-6 text-sky-700">
        <CircleStackIcon />
      </div>
    ),
  },
  {
    title: "NodeJS",
    experience: "3+ years",
    description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas iste rem
        optio quia perspiciatis obcaecati saepe in modi a culpa quae molestias,
      `,
    icon: <NodejsOriginal />,
  },
  {
    title: "React",
    description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas iste rem
        optio quia perspiciatis obcaecati saepe in modi a culpa quae molestias,
      `,
    icon: <ReactOriginal size={24} />,
  },
  {
    title: "AWS",
    description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas iste rem
        optio quia perspiciatis obcaecati saepe in modi a culpa quae molestias,
      `,
    icon: <AmazonwebservicesOriginal />,
  },
  {
    title: "Cloud Technologies",
    description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas iste rem
        optio quia perspiciatis obcaecati saepe in modi a culpa quae molestias,
      `,
    icon: (
      <div className="w-6 h-6 text-sky-700">
        <CloudIcon />
      </div>
    ),
  },
  {
    title: "CI / CD",
    description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas iste rem
        optio quia perspiciatis obcaecati saepe in modi a culpa quae molestias,
      `,
    icon: (
      <div className="w-6 h-6 text-sky-700">
        <WrenchScrewdriverIcon />
      </div>
    ),
  },
  {
    title: "Other",
    description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas iste rem
        optio quia perspiciatis obcaecati saepe in modi a culpa quae molestias,
      `,
    icon: (
      <div className="w-6 h-6 text-sky-700">
        <EllipsisHorizontalCircleIcon />
      </div>
    ),
  },
];
