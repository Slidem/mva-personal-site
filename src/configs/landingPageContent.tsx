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

import { PreviewBadge } from "@/components/PreviewLink";

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

export const SkillModalTitle = ({ title, icon, experience }: any) => {
  let exp = null;
  if (experience) {
    exp = <i>{`(${experience})`}</i>;
  }
  return (
    <div className="flex flex-row gap-4 items-center">
      {icon}
      <h1 className="text-extrabold text-2xl">
        <b>{title}</b> {exp}
      </h1>
    </div>
  );
};

export const skills = [
  {
    title: "Java",
    description: `
        Throughout my career, I've mainly worked on the backend, Java being my
        main programming language. Not only have I worked with various versions
        of Java, but I've also worked with various frameworks and libraries like
        Spring, Dropwizard, Maven, Gradle, Hibernate.
      `,
    modalContent: (
      <div className="w-full flex flex-col gap-4 items-center">
        <SkillModalTitle
          title={"Java"}
          icon={<JavaOriginal size={24} />}
          experience={"7+ years"}
        />
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
        My focus on backend development also led me to work with different microservices architectures,
        both in terms of design and implementation. I've worked with various tehnologies asynchroneous
        messaging, like Kafka, RabbitMQ, SQS, Google Pub/Sub</b> and also with various service discovery and
        orchestration tools like Kubernetes, Zookeeper & AWS StepFunctions. I've applied different design patterns like Event Sourcing & CQRS and also was involved in the
        CI / CD process of the microservices, using tools like Github Actions, Gitlab CI / CD, AWS CodePipeline.
      `,
    icon: (
      <div className="w-6 h-6 text-sky-700">
        <ServerStackIcon />
      </div>
    ),
    modalContent: (
      <div className="w-full flex flex-col gap-4 items-center">
        <SkillModalTitle
          title={"Microservices"}
          icon={
            <div className="w-6 h-6 text-sky-700">
              <ServerStackIcon />
            </div>
          }
          experience={"5+ years"}
        />
        <p className="text-justify">
          My focus on backend development also led me to work with different
          microservices architectures, both in terms of design and
          implementation.
        </p>
        <p>
          I've worked with various tehnologies asynchroneous messaging, like{" "}
          <b>Kafka, RabbitMQ, SQS, Google Pub/Sub</b> and also with various
          service discovery and orchestration tools like{" "}
          <b>Kubernetes, Zookeeper & AWS StepFunctions</b>.
        </p>
        <p>
          I've applied different design patterns like{" "}
          <b>Event Sourcing & CQRS</b> and also was involved in the CI / CD
          process of the microservices, using tools like{" "}
          <b>Github Actions, Gitlab CI / CD, AWS CodePipeline</b>.
        </p>
      </div>
    ),
  },
  {
    title: "Databases",
    experience: "7+ years",
    description: `
        I have worked with various databases, both relational and non-relational. I've worked with
        MySQL, PostgreSQL, DynamoDB. I've also worked with various caching technologies like
        Redis, Memcached.
      `,
    icon: (
      <div className="w-6 h-6 text-sky-700">
        <CircleStackIcon />
      </div>
    ),
    modalContent: (
      <div className="w-full flex flex-col gap-4 items-center">
        <SkillModalTitle
          title={"Databases"}
          icon={
            <div className="w-6 h-6 text-sky-700">
              <CircleStackIcon />
            </div>
          }
          experience={"7+ years"}
        />
        <p className="text-justify">
          I have worked with various databases, both relational and
          non-relational. I've worked with <b>MySQL, PostgreSQL, DynamoDB</b>.
          I've also worked with various caching technologies like <b>Redis</b>{" "}
          and <b>Memcached</b>.
        </p>
      </div>
    ),
  },
  {
    title: "AWS",
    description: `
         I've been heavily involved in cloud development in the past 4 years, working with various AWS architectures,
         both serverless and containerized and different AWS services such as Lambda, DynamoDB, SQS, SNS, S3, API Gateway, CloudFormation, CDK..
         while also investing heavily on deepening my knowledge, by obtaining the various AWS certifications.
      `,
    icon: <AmazonwebservicesOriginal size={24} />,
    modalContent: (
      <div className="w-full flex flex-col gap-4 items-center">
        <SkillModalTitle
          title={"AWS"}
          icon={<AmazonwebservicesOriginal />}
          experience={"4+ years"}
        />
        <p className="text-justify">
          I've been heavily involved in cloud development in the past 4 years,
          working with various AWS services and architectures, both serverless
          and containerized.
        </p>
        <p className="text-justify">
          I've worked with various AWS services like{" "}
          <b>
            Lambda, DynamoDB, SQS, SNS, S3, API Gateway, CloudFormation, CDK
          </b>
          , while also investing heavily on deepening my knowledge, by obtaining
          the various AWS certifications, one of the most significant being the{" "}
          <b>AWS Certified Solutions Architect - Professional</b>.
        </p>
      </div>
    ),
  },
  {
    title: "NodeJS",
    experience: "3+ years",
    description: `
        Working with serverless technologies, where I've focused on developing
        lambdas using NodeJS, but also writing infrastructure as code using CDK.
        I've also written scripts and CLI tools using NodeJS, to automate
        various deployment tasks.
      `,
    icon: <NodejsOriginal />,
    modalContent: (
      <div className="w-full flex flex-col gap-4 items-center">
        <SkillModalTitle
          title={"NodeJS"}
          icon={<NodejsOriginal />}
          experience={"3+ years"}
        />
        <p className="text-justify">
          Working with serverless technologies in the past 3 years, I've focused
          on developing lambdas using NodeJS, but also writing infrastructure as
          code using CDK. I've also written scripts and CLI tools using NodeJS,
          to automate various deployment tasks.
        </p>
      </div>
    ),
  },
  {
    title: "React",
    experience: "2+ years",
    description: `
        During the past 2 years, I've been involved in developing fullstack solutions
        using React. I've worked with various libraries like NextJS, Material-UI, TailwindCSS, React-Query,
        Zustand. 
        `,
    icon: <ReactOriginal size={24} />,
    modalContent: (
      <div className="w-full flex flex-col gap-4 items-center">
        <SkillModalTitle
          title={"React"}
          icon={<ReactOriginal size={24} />}
          experience={"2+ years"}
        />
        <p className="text-justify">
          During the past 2 years, I've been involved in developing fullstack
          solutions using React. I've worked with various libraries like{" "}
          <b>NextJS, Material-UI, TailwindCSS, React-Query, Zustand.</b>
        </p>
      </div>
    ),
  },

  {
    title: "Cloud Technologies",
    description: `
      I've work with various cloud technologies, both in AWS and GCP, 
      but also with open source technologies like Kubernetes and Docker.
    `,
    icon: (
      <div className="w-6 h-6 text-sky-700">
        <CloudIcon />
      </div>
    ),
    modalContent: (
      <div className="w-full flex flex-col gap-4 items-center">
        <SkillModalTitle
          title={"Cloud Technologies"}
          icon={
            <div className="w-6 h-6 text-sky-700">
              <CloudIcon />
            </div>
          }
        />
        <p className="text-justify">
          I've work with various cloud technologies, both in AWS and GCP, but
          also with open source technologies like{" "}
          <b>Kubernetes, Docker, Helm</b>.
        </p>
      </div>
    ),
  },
  {
    title: "CI / CD",
    description: `
        The responsibility of the full lifecycle of the software, from development to production,
        also meant that I've been involved in the CI / CD process, using various tools like
        Github Actions, Gitlab CI / CD, AWS CodePipeline.

        I've also been involved in the infrastructure as code process, using tools like
        Terraform, CDK.
      `,
    icon: (
      <div className="w-6 h-6 text-sky-700">
        <WrenchScrewdriverIcon />
      </div>
    ),
    modalContent: (
      <div className="w-full flex flex-col gap-4 items-center">
        <SkillModalTitle
          title={"CI / CD"}
          icon={
            <div className="w-6 h-6 text-sky-700">
              <WrenchScrewdriverIcon />
            </div>
          }
        />
        <p className="text-justify">
          The responsibility of the full lifecycle of the software, from
          development to production, also meant that I've been involved in the
          CI / CD process, using various tools like{" "}
          <b>Github Actions, Gitlab CI / CD, AWS CodePipeline</b>.
        </p>
        <p>
          I've also been involved in the infrastructure as code process, using
          tools like <b>Terraform, CDK</b>.
        </p>
      </div>
    ),
  },
  {
    title: "Other",
    description: `
        Besides my main focus on Java and JS / Typescript , I've also worked with other programming languages where needed,
        with other programming languages where needed, like Python for writing ETL jobs in AWS Glue, or Golang for instrumenting various services.

        I've automated various tasks in Gradle, writing custom plugins and tasks using Groovy.

        Where needed I've also written scripts in Bash, to automate various development and deployment processes.
      `,
    icon: (
      <div className="w-6 h-6 text-sky-700">
        <EllipsisHorizontalCircleIcon />
      </div>
    ),
    modalContent: (
      <div className="w-full flex flex-col gap-4 items-center">
        <SkillModalTitle
          title={"Other"}
          icon={
            <div className="w-6 h-6 text-sky-700">
              <EllipsisHorizontalCircleIcon />
            </div>
          }
        />
        <p className="text-justify">
          Besides my main focus on <b>Java and JS / Typescript</b>, I've also
          worked with other programming languages where needed, like{" "}
          <b>Python for writing ETL jobs in AWS Glue</b>, or <b>Golang</b> for
          instrumenting various services.
        </p>
        <p>
          I've automated various tasks in <b>Gradle</b>, writing custom plugins
          and tasks using <b>Groovy </b>.
        </p>
        <p>
          Where needed I've also written scripts in Bash, to automate various
          development and deployment processes.
        </p>
      </div>
    ),
  },
];
