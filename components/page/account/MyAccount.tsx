import { container } from "@/assets/container";
import { theme } from "@/assets/theme";
import SectionHeader from "@/components/SectionHeader";
import my_account from "@/content/account/my_account.json";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const MyAccount = () => {
  return (
    <section className="w-full text-white">
      <div className={`${container} lg:py-8 py-4`}>
        <SectionHeader as="h2" text={my_account.headline} />

        {/* Card */}
        <div
          className="w-full p-8 border rounded-4xl mt-12"
          style={{
            borderColor: theme.colors.white[0],
            color: theme.colors.primary[50],
          }}
        >
          <div className="w-full flex justify-start items-center my-6 gap-4">
            <div>
              <Image
                src={my_account.details_card.avatar}
                alt="avatar"
                width={96}
                height={96}
              />
            </div>
            <h3 className={`${theme.typography.techno_20_semibold}`}>
              {my_account.details_card.username}
            </h3>
          </div>

          <ul className="flex flex-col justify-center items-start gap-4 my-4">
            {my_account.details_card.details.map((item) => {
              switch (item.type) {
                case "email":
                  return (
                    <li
                      key={item.text}
                      className={`flex gap-3 items-center ${theme.typography.techno_14_reg}`}
                    >
                      <Mail />
                      <a href={`mailto:${item.text}`}>{item.text}</a>
                    </li>
                  );
                case "tel":
                  return (
                    <li
                      key={item.text}
                      className={`flex gap-3 items-center ${theme.typography.techno_14_reg}`}
                    >
                      <Phone />
                      <a href={`tel:${item.text}`}>{item.text}</a>
                    </li>
                  );
                case "address":
                  return (
                    <li
                      key={item.text}
                      className={`flex gap-3 items-center ${theme.typography.techno_14_reg}`}
                    >
                      <MapPin />
                      <address style={{ fontStyle: "normal" }}>
                        {item.text}
                      </address>
                    </li>
                  );

                default:
                  return null;
              }
            })}
          </ul>

          {/* horizontal rule */}
          <div
            className="h-px w-full"
            style={{
              background: theme.colors.white[0],
            }}
          />

          <div className="w-full my-4 flex flex-col gap-3">
            {my_account.details_card.status_details.map((item) => (
              <div
                key={item.value}
                className="w-full flex justify-between items-center"
              >
                <p className={`${theme.typography.techno_16_reg}`}>
                  {item.label}
                </p>
                <div
                  className="px-3 py-1 rounded-xl"
                  style={{
                    background: item.bg,
                    color: item.color,
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
