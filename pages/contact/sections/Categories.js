const Categories = () => {
  return (
    <div className="px-8 mt-12">
      <h1 className="text-3xl font-black">Categories</h1>
      <div className="mt-5">
        <h1 className="text-3xl font-black">Verifying your account</h1>
        <p className="font-bold text-white mt-3">
          As a resomple operater, and in line with our compliance police polices
          and procedures, we check every account that’s opened with us to verify
          the identify of the account holder and make sure they’re 18 years old
          or over. If this verification process is sucessful, you’ll be able to
          acess your account from the world go without any contact from us about
          it.
        </p>
      </div>
      <div className="mt-5">
        <h1 className="text-3xl font-black">Reopening an account</h1>
        <p className="font-bold text-white mt-3">
          If you wish reopen or reactivate a previuously closed account, please
          use the contact us option at the bottom of the page and we will be
          happy to do so.
        </p>
      </div>
      <div className="mt-5 mb-5">
        <h1 className="text-3xl font-black">Locked/ Forgotten User ID or Pin</h1>
        <p className="font-bold text-white mt-3">
          If you’ve locked your account or forgotten your login details, you can
          use our self- service tools to help you get back in- Link to recover
          page.
        </p>
      </div>

      <style>
        {
            `
            h1{
                background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
                text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
                font-family: "Inter";
                font-style: normal;
            }
            `
        }
      </style>
    </div>
  );
};

export default Categories;
