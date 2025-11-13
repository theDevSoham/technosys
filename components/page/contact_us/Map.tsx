import { container } from "@/assets/container";
import React from "react";

const Map = () => {
  return (
    <section className="w-full py-10">
      <div className={`${container}`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d237389.70285688745!2d73.006033!3d21.616579!3m2!1i1024!2i768!4f13.1!2m1!1s315%2C%20Golden%20Square%2C%20Ankleshwar%20-%20Valia%20Rd%2C%20near%20Valia%2C%20GIDC%2C%20Ankleshwar%20GIDC%2C%20Ankleshwar%2C%20Gujarat%20393002!5e0!3m2!1sen!2sus!4v1763037992283!5m2!1sen!2sus"
          width="640"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
