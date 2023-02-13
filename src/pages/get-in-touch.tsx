import { BlockContainer } from "@/components/layout/BlockContainer";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { NextPage } from "next";
import { PageCOntentContainer } from "@/components/layout/PageCOntentContainer";
import { SimpleBanner } from "@/components/SimpleBanner";

const Contact: NextPage = () => {
  return (
    <PageCOntentContainer Nav={Header}>
      <SimpleBanner
        title="Get in Touch"
        description="I am always open to new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to send me a message and I will get back to you as soon as possible!"
      />

      <BlockContainer></BlockContainer>

      <Footer />
    </PageCOntentContainer>
  );
};

export default Contact;
