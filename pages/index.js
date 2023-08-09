import Head from "next/head";
import Link from "next/link";
import Clients from "../components/Clients";
import { useEffect, useState } from "react";
import About from "../components/About";
import Services from "../components/Services";
import Top from "../components/Top";
import Features from "../components/Features";

export default function Index() {
  const [email, setEmail] = useState("");
  const [toggle, setToggle] = useState(true);

  function addcl() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

  function remcl() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }
  useEffect(() => {
    const inputs = document.querySelectorAll("input");
    const ta = document.querySelectorAll("textarea");

    inputs.forEach((input) => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });
    ta.forEach((input) => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });
  }, []);

  const SubmitContact = async (e) => {
    e.preventDefault();
    const values = e.target;
    let name = e.target[0].value;
    let email = e.target[1].value;
    let message = e.target[2].value;

    if (
      !name ||
      name.length === 0 ||
      !email ||
      email.length === 0 ||
      !message ||
      message.length === 0
    ) {
      return alert("Please fill all the fields");
    }
    // check only alphabets and space for name
    if (!name?.match(/^[a-zA-Z ]+$/)) {
      return alert("Please enter valid name");
    }

    // email validation
    if (!email?.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return alert("Please enter valid email");
    }

    const data = {
      name,
      email,
      message,
    };
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (result.status) {
      // empty all input values
      e.target[0].value = "";
      e.target[0].parentNode.classList.remove("focus");
      e.target[1].value = "";
      e.target[1].parentNode.classList.remove("focus");
      e.target[2].value = "";
      e.target[2].parentNode.classList.remove("focus");
      return alert("Message sent successfully");
    }
    else {
      alert(result?.message || "Something went wrong");
    }
  };

  const features = [
    {
      id: 1,
      name: "Basic",
      price: "X",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, aperiam. Eligendi quo ipsam ducimus mollitia. Perferendis tenetur alias, dignissimos dicta necessitatibus quam distinctio nostrum quia, obcaecati facere quisquam, blanditiis natus?",
    },
    {
      id: 2,
      name: "Standard",
      price: "X",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, aperiam. Eligendi quo ipsam ducimus mollitia. Perferendis tenetur alias, dignissimos dicta necessitatibus quam distinctio nostrum quia, obcaecati facere quisquam, blanditiis natus?",
    },
    {
      id: 3,
      name: "Premium",
      price: "X",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, aperiam. Eligendi quo ipsam ducimus mollitia. Perferendis tenetur alias, dignissimos dicta necessitatibus quam distinctio nostrum quia, obcaecati facere quisquam, blanditiis natus?",
    },
    // {
    //   id: 11,
    //   name: "Basic",
    //   price: "X",
    //   content:
    //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, aperiam. Eligendi quo ipsam ducimus mollitia. Perferendis tenetur alias, dignissimos dicta necessitatibus quam distinctio nostrum quia, obcaecati facere quisquam, blanditiis natus?",
    // },
    // {
    //   id: 12,
    //   name: "Standard",
    //   price: "X",
    //   content:
    //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, aperiam. Eligendi quo ipsam ducimus mollitia. Perferendis tenetur alias, dignissimos dicta necessitatibus quam distinctio nostrum quia, obcaecati facere quisquam, blanditiis natus?",
    // },
    // {
    //   id: 13,
    //   name: "Premium",
    //   price: 100,
    //   content:
    //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, aperiam. Eligendi quo ipsam ducimus mollitia. Perferendis tenetur alias, dignissimos dicta necessitatibus quam distinctio nostrum quia, obcaecati facere quisquam, blanditiis natus?",
    // },
  ];

  return (
    <>
      <Head>
        <title>Inorins Technologies Pvt. Ltd.</title>
      </Head>

      <Top
        title={"Welcome to Inorins Technologies"}
        detail={
          "One of the best Core Banking System and financial service provider in Nepal."
        }
        form={true}
      />

      {/* <section className="w-full h-[400px] md:min-h-screen hero" id="banner">
        <div className="container mx-auto px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:h-screen">
          <div className="col-span-1 md:relative">
            <div
              className="lg:absolute lg:top-1/2 lg:left-1/2 w-full transform-css mt-20
              md:mt-32 lg:mt-0"
              // style={{ transform: "translate(-50%,-50%)" }}
            >
              <h1 className="text-center lg:text-left text-white xxl:text-6xl leading-tight">
                Welcome to <br />
                <span className="text-gray-50">Inorins Technologies</span>
              </h1>
              <p className="text-white text-center lg:text-left mb-0 mt-4 md:mt-12 xxl:text-2xl">
                One of the best Core Banking System and financial service
                provider in Nepal.
              </p>
              <div className="flex flex-wrap justify-between overflow-hidden w-full mx-auto border-2 border-white bg-transparent rounded-full mt-4 md:mt-12">
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-2/3 md:w-4/5 p-2 pl-4 outline-none hover:outline-none focus:outline-none border-none bg-transparent text-white"
                />
                <button
                  className="w-1/3 md:w-1/5 p-2 bg-white text-lg font-medium text-[#522EC6]"
                  onClick={getStarted}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="hidden col-span-1 lg:flex lg:items-center">
            <img
              src="/assets/sidebar.png"
              alt=""
              className="w-full h-3/4 object-contain"
            />
          </div>
        </div>
      </section> */}

      <section className="container mt-2 mx-auto px-4 lg:px-10 pt-16"  id="works">
        <h2 className="text-center">What We Do</h2>
        <h3 className="text-center"> Designed for Financial Solution</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 text-justify">
            <p>
              Inorins Technologies (P) Limited is an established software
              company aiming to provide world class IT solutions for enterprise
              sectors in Nepal. The company is promoted by more than 20 Bankers
              and IT Professionals having experiences in designing, developing
              and implementing Banking Systems, Financial Systems and Enterprise
              Resource Planning (ERPs).
            </p>
            <p
              className={`overflow-y-hidden transition-all duration-300 ${
                toggle ? "h-24" : "h-full max-h-[17rem]"
              }`}
            >
              Inorins Technologies is registered at GoN/Ministry of Industry,
              Office of the Company Registrar in January 16, 2011, as a Limited
              Liability Company. Currently its authorized capital is Rs 20
              Million, issued capital Rs 12 Million. Further, for the stability
              of the company, we have put aside some portion of our share to our
              valued customers as well as for knowledgeable employees willing to
              serve the company for longer periods. As our first service to the
              Banks and Financial Institutions in Nepal, we have developed
              integrated core banking system named Banquier to fulfill the needs
              of BFIs. The system not only allows the BFIs to provide the
              traditional banking services and newer emerging value added
              services efficiently, but allows the enterprises to implement its
              control measures and policies to minimize operational risks.
            </p>
            <button
              className="ml-auto block mt-4 text-blue-400 hover:text-blue-700"
              onClick={() => setToggle(!toggle)}
              title={toggle ? "Read More" : "Read Less"}
            >
              {toggle ? "Read More" : "Read Less"} &rarr;
            </button>
          </div>
          {/* <ReactWOW> */}
          <div className="col-span-1 flex flex-wrap justify-center items-center wow fadeInUp">
            <div className="pie" style={{ "--p": 80 }}>
              <span className="block text-2xl font-semibold mb-2">80 %</span>
              <span className="font-medium">Core Banking System</span>
            </div>
            <div className="pie" style={{ "--p": 15 }}>
              <span className="block text-2xl font-semibold mb-2">15 %</span>
              <span className="font-medium">Mobile App Development</span>
            </div>
            <div className="pie" style={{ "--p": 5 }}>
              <span className="block text-2xl font-semibold mb-2">5 %</span>
              <span className="font-medium">Web Development</span>
            </div>
          </div>
          {/* </ReactWOW> */}
        </div>
      </section>

      <About />
      <Services />
      <Features />

      {/* <section className="container mx-auto px-4 lg:px-10 mt-12 features">
        <h2 className="text-center">Our Pricing</h2>
        <div className="grid grid-cols-4 md:grid-cols-12 gap-4 lg:gap-8">
          {features?.map((item) => (
            <motion.div
              className="features-box col-span-4"
              key={item?.id}
              ref={featureref}
              animate={featuredcontrols}
              variants={animateTop}
              initial="hidden"
            >
              <div className="skewed">
                <h2 className="uppercase absolute top-1/2 left-1/2 text-white text-2xl md:text-4xl">
                  {item?.name}
                </h2>
              </div>

              <div className="content p-2">
                <span className="block text-center text-4xl mx-auto font-semibold mt-10">
                  <span className="font-bold">{item?.price}</span> <sup>K</sup>
                  <span className="text-5xl">/</span>
                  <span className="text-3xl">Project</span>
                </span>

                <p className="mt-10 text-center text-lg font-medium leading-relaxed tracking-wide">
                  {item?.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}

      <section className="container mx-auto px-4 lg:px-10 pt-16" id="clients">
        <h2 className="text-center mb-6">Our Clients</h2>

        <Clients />
      </section>

      <section className="background py-20 mt-16" id="contact">
        <h2 className="text-center text-white mb-10 relative">Contact Us</h2>
        <div className="container h-72 mx-auto px-4 lg:px-10 grid grid-cols-1 gap-8">
          <div className="col-span-1">
            <iframe
              className="w-full h-full lg:pr-4"
              title="Inorins Technologies"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4202.268810552202!2d85.31859964936794!3d27.66559618971678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1995436e3273%3A0x47a19238ba8dc8fa!2sInorins%20Technologies!5e0!3m2!1sen!2snp!4v1648107321016!5m2!1sen!2snp"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        
        </div>
      </section>
    </>
  );
}
