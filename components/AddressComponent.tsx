import React from "react";
import { Details, SocialMedia } from "@/types/Contact";
import { Mail, MapPin, Phone } from "lucide-react";
import { theme } from "@/assets/theme";
import {
  SiFacebook,
  SiInstagram,
  SiGoogle,
} from "@icons-pack/react-simple-icons";

interface AddressComponentProps {
  details: Details;
  social_media: SocialMedia;
}

const icons: Record<string, React.ReactNode> = {
  location: <MapPin />,
  phone: <Phone />,
  mail: <Mail />,
};

const social_icons: Record<string, React.ReactNode> = {
  facebook: <SiFacebook />,
  instagram: <SiInstagram />,
  google: <SiGoogle />,
};

const AddressComponent: React.FC<AddressComponentProps> = ({
  details,
  social_media,
}) => {
  return (
    <section className="w-full">
      <ul className="flex flex-col gap-5">
        {details.map((item) => (
          <li
            key={item.value}
            className="w-full border-b border-b-[#808080] pb-3"
          >
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <p
                className={`inline-flex justify-start items-center gap-2 ${theme.typography.techno_20_semibold}`}
              >
                {icons[item.icon]}
                {item.label}
              </p>

              {item.render === "address" && (
                <address
                  className={`font-normal ${theme.typography.techno_14_reg}`}
                >
                  {item.value}
                </address>
              )}

              {item.render === "phone_link" && (
                <a
                  className={`font-normal ${theme.typography.techno_14_reg}`}
                  href={`tel:${item.value}`}
                >
                  {item.value}
                </a>
              )}

              {item.render === "email_link" && (
                <a
                  className={`font-normal ${theme.typography.techno_14_reg}`}
                  href={`mailto:${item.value}`}
                >
                  {item.value}
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="w-full flex flex-col justify-center items-start gap-2 my-4">
        <p className={`${theme.typography.techno_20_semibold}`}>
          {social_media.label}
        </p>

        <div className="w-full flex flex-wrap gap-3">
          {Object.entries(social_media.links).map(([key, value]) => (
            <a
              key={key}
              className={`font-normal ${theme.typography.techno_14_reg}`}
              href={`${value}`}
            >
              {social_icons[key]}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddressComponent;
