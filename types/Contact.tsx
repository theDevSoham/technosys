export type Detail = {
  label: string;
  value: string;
  icon: string;
  render: string;
};

export type Details = Detail[];

export type SocialMedia = {
  label: string;
  links: {
    facebook: string;
    instagram: string;
    google: string;
  };
};

export type Form = {
  title: string;
  fields: Array<{
    name: string;
    label: string;
    type: "text" | "email" | "textarea";
    required: boolean;
    placeholder: string;
    layout: "half" | "full";
  }>;
  button: {
    text: string;
    style: {
      color: string;
      background: string;
      shape: "rounded" | "square" | string;
    };
  };
};

export interface ContactContent {
  contact: {
    title: string;
    description: string;
    details: Details;
    social_media: SocialMedia;
    form: Form;
  };
}
