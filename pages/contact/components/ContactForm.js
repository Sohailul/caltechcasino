const ContactForm = () => {
  return (
    <div className="px-8 mt-12">
      <h1 className="text-3xl font-black mb-4">Contact Form</h1>
      <div>
        <form>
          <div className="form-control mb-1">
            <select
              name="verifcation"
              className="rounded p-2 w-full max-w-xs bg-[#1e0338] border-2 outline-none font-bold"
            >
              <option selected>Verification/Document</option>
              <option>NID</option>
              <option>Passport</option>
              <option>KYC</option>
            </select>
          </div>
          <div className="form-control mb-1">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="rounded p-2 w-full max-w-xs bg-[#1e0338] border-2 outline-none"
              required
            />
          </div>
          <div className="form-control mb-1">
            <input
              type="text"
              name="lastname"
              placeholder="Last name"
              className="rounded p-2 w-full max-w-xs bg-[#1e0338] border-2 outline-none"
              required
            />
          </div>
          <div className="form-control mb-1">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="rounded p-2 w-full max-w-xs bg-[#1e0338] border-2 outline-none"
              required
            />
          </div>
          <div className="form-control mb-1">
            <input
              type="text"
              name="userid"
              placeholder="User ID (If Known)"
              className="rounded p-2 w-full max-w-xs bg-[#1e0338] border-2 outline-none"
            />
          </div>
          <div className="form-control mb-1">
            <textarea
              name="query"
              placeholder="What's your Query"
              className="rounded p-2 max-w-lg max-w-xs bg-[#1e0338] border-2 outline-none"
              rows="6"
            ></textarea>
          </div>
          <button className="btn border-none rounded-full uppercase px-8 py-1 contact text-black my-8">
            Contact Us
          </button>
        </form>
      </div>

      <style>
        {`
            input, select, textarea{
                color: #B857A9;
                border: solid 2px transparent;
                background-image: linear-gradient(
                    rgba(0, 0, 0, 0),
                    rgba(0, 0, 0, 0)
                  ),
                  linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
                background-origin: border-box;
                background-clip: content-box, border-box;
                box-shadow: 2px 1000px 1px #1e0338 inset;
              }

              input::placeholder{
                background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
                font-weight: bold;
              }
              textarea::placeholder{
                background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
                font-weight: bold;
              }

              .contact {
                background: linear-gradient(
                  178.18deg,
                  #fd749b -13.56%,
                  #281ac8 158.3%
                );
              }
              

            `}
      </style>
    </div>
  );
};
export default ContactForm;
