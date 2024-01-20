import {
  AmazonwebservicesOriginal,
  DockerOriginal,
  JavaOriginal,
  KubernetesPlain,
  NodejsOriginal,
  ReactOriginal,
  RedisOriginal,
  SpringOriginal,
  TypescriptOriginal,
} from "devicons-react";
import {
  DocumentTextIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export const headerItems = [
  {
    label: "Blog",
    page: "blog",
    icon: <DocumentTextIcon />,
  },
  {
    label: "Projects",
    page: "projects",
    icon: <PresentationChartLineIcon />,
  },
  {
    label: "Reach out",
    page: "reach-out",
    icon: <RocketLaunchIcon />,
    inverted: true,
  },
];

export const skills = [
  {
    title: "Java",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas iste rem
        optio quia perspiciatis obcaecati saepe in modi a culpa quae molestias,
      </>
    ),
    icon: <JavaOriginal size={24} />,
  },
  {
    title: "Spring",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas iste rem
        optio quia perspiciatis obcaecati saepe in modi a culpa quae molestias,
      </>
    ),
    icon: <SpringOriginal size={24} />,
  },
  {
    title: "Databases",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas iste rem
        optio quia perspiciatis obcaecati saepe in modi a culpa quae molestias,
      </>
    ),
    icon: <RedisOriginal />,
  },
  {
    title: "NodeJS",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas iste rem
        optio quia perspiciatis obcaecati saepe in modi a culpa quae molestias,
      </>
    ),
    icon: <NodejsOriginal />,
  },
  {
    title: "Typescript",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas iste rem
        optio quia perspiciatis obcaecati saepe in modi a culpa quae molestias,
      </>
    ),
    icon: <TypescriptOriginal size={24} />,
  },
  {
    title: "React",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas iste rem
        optio quia perspiciatis obcaecati saepe in modi a culpa quae molestias,
      </>
    ),
    icon: <ReactOriginal size={24} />,
  },
  {
    title: "AWS",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas iste rem
        optio quia perspiciatis obcaecati saepe in modi a culpa quae molestias,
      </>
    ),
    icon: <AmazonwebservicesOriginal />,
  },
  {
    title: "Docker",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas iste rem
        optio quia perspiciatis obcaecati saepe in modi a culpa quae molestias,
      </>
    ),
    icon: <DockerOriginal size={24} />,
  },
  {
    title: "Kubernetes",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas iste rem
        optio quia perspiciatis obcaecati saepe in modi a culpa quae molestias,
      </>
    ),
    icon: <KubernetesPlain size={24} />,
  },
];
