import React from "react";
import Image from "next/image";

const TermsPage = () => {
  return (
    <div className="p-8">
      <Image
        src="https://d2w2i7rp1a0wob.cloudfront.net/static/images/logos/KekaLogoBlack.svg"
        alt="logo"
        width={150}
        height={0}
      />
      <h1 className="text-3xl font-bold mb-6 mt-6">Terms & Conditions</h1>
      <p className="text-lg mb-4">
        KEKA – Terms of Service Keka Technologies Private Limited (“Keka”, “we”,
        “us” or “our”) is a pioneering, technology-powered integrated service
        provider with a unique model rendering human resource management
        solutions.
      </p>
      <p className="text-lg mb-4">
        Your use of the Website, application, or Keka Platform, owned and
        managed by Keka, are governed by the following terms and conditions of
        this Agreement as applicable to the Website, application, or Keka
        Platform, including the applicable policies which are incorporated
        herein by way of reference. By mere use of the Website, application, or
        Keka Platform, You shall be contracting with Keka and these Terms
        including the policies constitute your binding obligations with Keka.
      </p>
      <p className="text-lg mb-4">
        IF YOU ARE USING ANY SERVICE AS AN EMPLOYEE, AGENT, OR CONTRACTOR OF A
        CORPORATION, PARTNERSHIP OR ANY OTHER ENTITY, THEN YOU REPRESENT AND
        WARRANT THAT YOU HAVE THE AUTHORITY TO SIGN FOR AND BIND SUCH ENTITY IN
        ORDER TO ACCEPT THE TERMS OF THIS AGREEMENT. THE RIGHTS GRANTED UNDER
        THIS AGREEMENT ARE EXPRESSLY CONDITIONED UPON ACCEPTANCE BY SUCH
        AUTHORIZED PERSONNEL.
      </p>
      <p className="text-lg mb-4">
        Services offered by Keka are subject to the terms of our
        website/platform, policies [i.e. Terms of Use, Privacy Policy,
        Cancellation and Refund Policy etc.] (“Policies”), available at
        ‘https://www.keka.com/’ (“Website”). By contacting Keka for the services
        or availing the services or by registering with us or by accepting this
        Agreement, now or in the future, you being the person or entity placing
        an order for or accessing the Service (“Subscriber” or “Customer” “you”,
        “your”, “yourself” or “user”) signify that you agree to these Terms of
        the Agreement (“Terms”) and the Policies.
      </p>
      <p className="text-lg mb-4">
        This Agreement is effective between You and Us as of the date of Your
        acceptance of this Agreement. This Terms of Service (“the Agreement”),
        is entered into by and between Keka and You. Keka and Subscriber are
        each a &apos;party&apos;, and together are &apos;parties&apos; to this
        Agreement. In consideration of the terms and conditions set forth below,
        the parties agree as follows.
      </p>
    </div>
  );
};

export default TermsPage;
