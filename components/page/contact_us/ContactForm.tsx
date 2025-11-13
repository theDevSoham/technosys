import { container } from "@/assets/container";
import { theme } from "@/assets/theme";
import AddressComponent from "@/components/AddressComponent";
import FormComponent from "@/components/FormComponent";
import SectionHeader from "@/components/SectionHeader";
import contact_form from "@/content/contact_us/contact_form.json";
import { Form, SocialMedia } from "@/types/Contact";
import React from "react";

const ContactForm = () => {
  return (
    <section className="w-full text-white">
      <div className={`${container} lg:py-10 py-6 flex flex-col gap-6`}>
        <div className="flex flex-col gap-2">
          <SectionHeader as="h1" text={contact_form.contact.title} />
          <SectionHeader
            as="h2"
            text={contact_form.contact.description}
            desktopStyle={theme.typography.techno_16_reg}
            mobileStyle={theme.typography.techno_14_reg}
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-5 gap-16">
          <div className="flex-1">
            <AddressComponent
              details={contact_form.contact.details}
              social_media={contact_form.contact.social_media}
            />
          </div>
          <div className="flex-1">
            <FormComponent formConfig={contact_form.contact.form as Form} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
