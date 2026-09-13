import { GoDotFill } from "react-icons/go";
import { BsBank } from "react-icons/bs";
import {
  ERList,
  SCIntlList,
  ConferenceSessionsList,
  Cochairlist,
  GuestList,
  ImportantDateList,
  InternationalAdvisoryList,
  publicationsList,
  PatronList,
  ChiefPatronList,
  ConvenerList,
  CoconvenerList,
} from "./ICATS/ICATS";
import {
  LuCalendar,
  LuMail,
  LuMapPin,
  LuPhoneCall,
  LuTimer,
  LuUserRound,
} from "react-icons/lu";
import { Carousel } from "antd";

// =========================================================
// CO-CONVENER VISIBILITY
// Set to true when you want to display Co-Convener
// =========================================================

const SHOW_CO_CONVENER = true;

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const partnerLogos = [
  {
    src: "/assets/images/ICATS/bmllogo.png",
    alt: "BML Munjal University logo",
    name: "BML Munjal University",
    location: "Gurugram",
    className: "h-20 sm:h-24 md:h-28",
  },
  {
    src: "/assets/images/logo/confab.png",
    alt: "Confab 360 Degree logo",
    name: "Confab 360 Degree",
    location: "New Delhi",
    className: "h-20 sm:h-24 md:h-28",
  },
  {
    src: "/assets/images/ICATS/orchid.jpg",
    alt: "Orchid University logo",
    name: "Orchid University",
    location: "India",
    className: "h-20 sm:h-24 md:h-28",
  },
];

const sectionClass =
  "rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 md:p-8";
const sectionTitleClass =
  "text-xl font-bold tracking-tight text-slate-900 sm:text-2xl";
const bodyClass = "text-sm leading-7 text-slate-700 sm:text-base";

function PartnerLogos() {
  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-6">
      <div className="grid grid-cols-1 items-center justify-items-center gap-6 sm:grid-cols-3 sm:gap-4 md:gap-8">
        {partnerLogos.map((logo) => (
          <div
            key={logo.name}
            className="flex min-h-[150px] w-full max-w-[260px] flex-col items-center justify-center rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:min-h-[170px]"
          >
            <div className="flex h-28 w-full items-center justify-center sm:h-32">
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className={cn("w-full object-contain", logo.className)}
              />
            </div>
            <p className="mt-3 text-center text-sm font-semibold leading-5 text-slate-800">
              {logo.name}
            </p>
            <p className="text-center text-xs text-slate-500">{logo.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return <div className={sectionClass}>{children}</div>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className={sectionTitleClass}>{children}</h2>;
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <GoDotFill className="mt-2 shrink-0 text-[10px] text-[#d61c25]" />
          <span className={bodyClass}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PeopleGrid({
  items,
  image = true,
}: {
  items: Array<{ name: string; detail?: string; image?: string }>;
  image?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <article
          key={`${item.name}-${index}`}
          className="flex h-full flex-col rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
        >
          {image && item.image && (
            <div className="mx-auto mb-4 h-36 w-36 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow ring-1 ring-slate-200 sm:h-40 sm:w-40">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <div className={cn("flex-1", image ? "text-center" : "text-left")}>
            <h3 className="text-base font-bold leading-6 text-slate-900 sm:text-lg">
              {item.name}
            </h3>
            {item.detail && (
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.detail}
              </p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

function ReviewCard({
  title,
  children,
  tone = "slate",
}: {
  title: string;
  children: React.ReactNode;
  tone?: "slate" | "amber" | "green";
}) {
  const tones = {
    slate: "border-slate-200 bg-slate-50",
    amber: "border-amber-200 bg-amber-50",
    green: "border-emerald-200 bg-emerald-50",
  };
  const heading = {
    slate: "text-slate-900",
    amber: "text-amber-700",
    green: "text-emerald-800",
  };

  return (
    <div className={cn("rounded-xl border p-4 sm:p-5", tones[tone])}>
      <h2 className={cn("text-lg font-bold sm:text-xl", heading[tone])}>
        {title}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </div>
  );
}

export const tabItems = [
  {
    key: "1",
    label: "Title",
    children: (
      <PageShell>
        <div className="space-y-8">
          <PartnerLogos />

          <div className="space-y-6 text-center">
            <h1 className="mx-auto max-w-4xl text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              International Conference on AI, Trade and Sustainability-2026
            </h1>
            <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
              <img
                src="/assets/images/ICATS/bml.jpg"
                alt="BML Munjal University, Gurugram"
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className={sectionTitleClass}>About BML Munjal University, Gurugram</h2>
            </div>
            <p className={cn(bodyClass, "lg:col-span-2 text-justify")}>
              The founder of the HERO Group, Brijmohan Lall Munjal, was a quintessential first-generation entrepreneur. The man had big dreams, and with relentless grit and perseverance, he built one of the largest corporate groups in India and became the world’s no. 1 two-wheeler company. Never having gone to college, he educated himself in the University of Life. The lessons he learned as a young apprentice, entrepreneur, and institution builder were worth much more than any degree from the finest universities. His education and learning theories were highly practical and based on life. He had immense faith in people’s inherent skills, only needing refinement and direction. Though he never had formal education, he always took utmost care to ensure each one got an equal right to qualitative education. He made it a part of his initiatives, which aim to raise the nation to par standards globally. His legacy was not in the company he built but in the lives he touched and the opportunities he created for countless others.
            </p>

            <div className="lg:col-span-1">
              <h2 className={sectionTitleClass}>About Confab 360 Degree, India</h2>
            </div>
            <p className={cn(bodyClass, "lg:col-span-2 text-justify")}>
              Confab 360 Degree is a globally recognized platform dedicated to empowering professionals, researchers, and institutions by bridging the gap between academia and industry. Our mission is to foster innovation, promote high-quality research, and provide advanced training opportunities aligned with global trends and industry requirements. Confab 360 Degree is an IAF-ISO certified company. Confab's training program is also affiliated with AICTE-NEAT Cell and Management & Entrepreneurship and Professional Skills Council.
            </p>

            <div className="lg:col-span-1">
              <h2 className={sectionTitleClass}>About Orchid University</h2>
            </div>
            <p className={cn(bodyClass, "lg:col-span-2 text-justify")}>
              Orchid University is a pioneering higher education institution located in Mangan, North Sikkim, dedicated to redefining the future of education through an innovative Industry-Integrated Learning model. Established under the Orchid University Act No. 06 of 2024 and recognized under Section 2(f) of the UGC Act, the university combines academic excellence with practical workplace experience, enabling students to graduate with both a nationally recognized degree and significant industry exposure. Built on the philosophy of “Learn & Earn from Day One,” Orchid University ensures that every student begins a paid apprenticeship from the first semester. This unique approach bridges the gap between classroom learning and real-world employment by integrating industry projects, workplace training, and academic coursework throughout the degree program. By graduation, students possess not only theoretical knowledge but also valuable professional experience that prepares them for successful careers. With its commitment to experiential learning, skill development, entrepreneurship, and industry collaboration, Orchid University is creating a new benchmark in higher education.
            </p>
          </div>
        </div>
      </PageShell>
    ),
  },
  {
    key: "2",
    label: "Guest & Speakers",
    children: (
      <PageShell>
        <div className="space-y-8">
          {GuestList.map((group, groupIndex) => (
            <section key={`${group.title}-${groupIndex}`} className="space-y-5">
              <SectionHeading>{group.title}</SectionHeading>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.GuestList.map((item, index) => (
                  <article
                    key={`${item.name}-${index}`}
                    className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 text-center shadow-sm"
                  >
                    <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow ring-1 ring-slate-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-600">{item.role}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.location}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </PageShell>
    ),
  },
  {
  key: "3",
  label: "Organizing Committee",

  children: (
    <PageShell>

      {/* =====================================================
          PARTNER INSTITUTIONS
      ===================================================== */}

      <section>

        <div className="text-center mb-6">

          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Organizing Institutions
          </h2>

          <p className="mt-1 text-sm md:text-base text-gray-500">
            Institutions collaborating for ICATS 2026
          </p>

        </div>

        <PartnerLogos />

      </section>


      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div className="my-10 border-t border-gray-200" />


      {/* =====================================================
          CHIEF PATRON
      ===================================================== */}

      <section>

        <div className="flex items-center gap-3 mb-6">

          <div
            className="
              w-11
              h-11
              rounded-xl
              bg-blue-50
              flex
              items-center
              justify-center
              flex-shrink-0
            "
          >
            <span className="text-xl">
              ★
            </span>
          </div>

          <div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Chief Patron (s)
            </h2>

            </div>

        </div>


        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-5
            justify-items-center
          "
        >

          {PatronList.map((item, index) => (

            <article
              key={index}
              className="
                relative
                w-full
                max-w-[300px]
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >

              {/* TOP ACCENT */}

              <div
                className="
                  h-1.5
                  w-full
                  bg-gradient-to-r
                  from-blue-500
                  to-indigo-500
                "
              />


              <div className="p-5">

                {/* PHOTO */}

                <div className="flex justify-center">

                  <div
                    className="
                      w-36
                      h-36
                      md:w-40
                      md:h-40
                      rounded-full
                      overflow-hidden
                      bg-gray-100
                      border-4
                      border-white
                      shadow-md
                    "
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="
                        w-full
                        h-full
                        object-cover
                      "
                    />

                  </div>

                </div>


                {/* DETAILS */}

                <div className="mt-5 text-center">

                                    <h3
                    className="
                      mt-3
                      text-lg
                      font-bold
                      text-gray-900
                      leading-snug
                    "
                  >
                    {item.name}
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      text-gray-600
                      leading-relaxed
                    "
                  >
                    {item.detail}
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      
{/* =====================================================
          CONFERENCE CHAIR
          SAME DESIGN AS CHIEF PATRON
      ===================================================== */}

      <section className="mt-12">

        <div className="flex items-center gap-3 mb-6">

          <div
            className="
              w-11
              h-11
              rounded-xl
              bg-blue-50
              flex
              items-center
              justify-center
              flex-shrink-0
            "
          >
            <span className="text-xl">
              ★
            </span>
          </div>

          <div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Conference Chair
            </h2>

          
          </div>

        </div>


        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-5
            justify-items-center
          "
        >

          {ChiefPatronList.map((item, index) => (

            <article
              key={index}
              className="
                relative
                w-full
                max-w-[300px]
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >

              {/* SAME TOP ACCENT */}

              <div
                className="
                  h-1.5
                  w-full
                  bg-gradient-to-r
                  from-blue-500
                  to-indigo-500
                "
              />


              <div className="p-5">

                {/* PHOTO */}

                <div className="flex justify-center">

                  <div
                    className="
                      w-36
                      h-36
                      md:w-40
                      md:h-40
                      rounded-full
                      overflow-hidden
                      bg-gray-100
                      border-4
                      border-white
                      shadow-md
                    "
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="
                        w-full
                        h-full
                        object-cover
                      "
                    />

                  </div>

                </div>


                {/* DETAILS */}

                <div className="mt-5 text-center">

                   <h3
                    className="
                      mt-3
                      text-lg
                      font-bold
                      text-gray-900
                      leading-snug
                    "
                  >
                    {item.name}
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      text-gray-600
                      leading-relaxed
                    "
                  >
                    {item.detail}
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>







{/* =====================================================
          CONFERENCE CO-CHAIR
          SAME DESIGN AS CHIEF PATRON
      ===================================================== */}

      <section className="mt-12">

        <div className="flex items-center gap-3 mb-6">

          <div
            className="
              w-11
              h-11
              rounded-xl
              bg-blue-50
              flex
              items-center
              justify-center
              flex-shrink-0
            "
          >
            <span className="text-xl">
              ★
            </span>
          </div>

          <div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Conference Co-Chair
            </h2>

          
          </div>

        </div>


        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-5
            justify-items-center
          "
        >

          {Cochairlist.map((item, index) => (

            <article
              key={index}
              className="
                relative
                w-full
                max-w-[300px]
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >

              {/* SAME TOP ACCENT */}

              <div
                className="
                  h-1.5
                  w-full
                  bg-gradient-to-r
                  from-blue-500
                  to-indigo-500
                "
              />


              <div className="p-5">

                {/* PHOTO */}

                <div className="flex justify-center">

                  <div
                    className="
                      w-36
                      h-36
                      md:w-40
                      md:h-40
                      rounded-full
                      overflow-hidden
                      bg-gray-100
                      border-4
                      border-white
                      shadow-md
                    "
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="
                        w-full
                        h-full
                        object-cover
                      "
                    />

                  </div>

                </div>


                {/* DETAILS */}

                <div className="mt-5 text-center">

                   <h3
                    className="
                      mt-3
                      text-lg
                      font-bold
                      text-gray-900
                      leading-snug
                    "
                  >
                    {item.name}
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      text-gray-600
                      leading-relaxed
                    "
                  >
                    {item.detail}
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

  {/* =====================================================
    CONVENER
    SAME DESIGN AS CONFERENCE CHAIR
===================================================== */}

<section className="mt-12">

  <div className="flex items-center gap-3 mb-6">

    <div
      className="
        w-11
        h-11
        rounded-xl
        bg-blue-50
        flex
        items-center
        justify-center
        flex-shrink-0
      "
    >
      <span className="text-xl">
        ★
      </span>
    </div>

    <div>
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">
        Convener
      </h2>
    </div>

  </div>

  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      gap-5
      justify-items-center
    "
  >

    {ConvenerList.map((item, index) => (

      <article
        key={index}
        className="
          relative
          w-full
          max-w-[300px]
          overflow-hidden
          rounded-2xl
          border
          border-gray-200
          bg-white
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
        "
      >

        {/* TOP ACCENT */}

        <div
          className="
            h-1.5
            w-full
            bg-gradient-to-r
            from-blue-500
            to-indigo-500
          "
        />

        <div className="p-5">

          {/* PHOTO */}

          <div className="flex justify-center">

            <div
              className="
                w-36
                h-36
                md:w-40
                md:h-40
                rounded-full
                overflow-hidden
                bg-gray-100
                border-4
                border-white
                shadow-md
              "
            >

              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

            </div>

          </div>

          {/* DETAILS */}

          <div className="mt-5 text-center">

            <h3
              className="
                mt-3
                text-lg
                font-bold
                text-gray-900
                leading-snug
              "
            >
              {item.name}
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-gray-600
                leading-relaxed
              "
            >
              {item.detail}
            </p>

          </div>

        </div>

      </article>

    ))}

  </div>

</section>
{/* =====================================================
    CO-CONVENER
    SAME DESIGN AS CONFERENCE CHAIR
===================================================== */}

<section className="mt-12">

  <div className="flex items-center gap-3 mb-6">

    <div
      className="
        w-11
        h-11
        rounded-xl
        bg-blue-50
        flex
        items-center
        justify-center
        flex-shrink-0
      "
    >
      <span className="text-xl">
        ★
      </span>
    </div>

    <div>
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">
        Co-Convener
      </h2>
    </div>

  </div>

  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      gap-5
      justify-items-center
    "
  >

    {CoconvenerList.map((item, index) => (

      <article
        key={index}
        className="
          relative
          w-full
          max-w-[300px]
          overflow-hidden
          rounded-2xl
          border
          border-gray-200
          bg-white
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
        "
      >

        {/* TOP ACCENT */}

        <div
          className="
            h-1.5
            w-full
            bg-gradient-to-r
            from-blue-500
            to-indigo-500
          "
        />

        <div className="p-5">

          {/* PHOTO */}

          <div className="flex justify-center">

            <div
              className="
                w-36
                h-36
                md:w-40
                md:h-40
                rounded-full
                overflow-hidden
                bg-gray-100
                border-4
                border-white
                shadow-md
              "
            >

              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

            </div>

          </div>

          {/* DETAILS */}

          <div className="mt-5 text-center">

            <h3
              className="
                mt-3
                text-lg
                font-bold
                text-gray-900
                leading-snug
              "
            >
              {item.name}
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-gray-600
                leading-relaxed
              "
            >
              {item.detail}
            </p>

          </div>

        </div>

      </article>

    ))}

  </div>

</section>
    </PageShell>
  ),
},
  {
    key: "4",
    label: "Conference Description and Scope",
    children: (
      <PageShell>
        <div className="space-y-8">
          <PartnerLogos />
          <div className="space-y-6">
            <p className={cn(bodyClass, "text-justify")}>
              The <strong>International Conference on AI, Trade and Sustainability (ICATS 2026)</strong> serves as a premier global platform for academicians, researchers, industry professionals, policymakers, entrepreneurs, and practitioners to explore the transformative role of Artificial Intelligence (AI) in shaping the future of trade, commerce, business, and sustainable development. As organizations and economies navigate rapid technological advancements, increasing globalization, and pressing sustainability challenges, the integration of AI-driven solutions has emerged as a critical enabler of innovation, efficiency, and responsible growth. The conference aims to foster interdisciplinary dialogue and collaboration by bringing together diverse perspectives from technology, business, economics, management, social sciences, and public policy. Participants will have the opportunity to present cutting-edge research, share best practices, discuss emerging trends, and explore innovative approaches that leverage AI to enhance trade ecosystems, optimize business operations, support data-driven decision-making, and promote sustainable economic development. ICATS 2026 seeks to address contemporary challenges and opportunities at the intersection of AI, digital transformation, global trade, and sustainability. The conference will encourage discussions on ethical AI adoption, smart supply chains, digital commerce, sustainable business models, green innovation, responsible governance, and the future of work in an increasingly AI-powered world.
            </p>
            <p className={bodyClass}>
              Through keynote addresses, technical sessions, panel discussions, industry forums, and networking opportunities, ICATS 2026 will facilitate meaningful knowledge exchange and foster partnerships among academia, industry, government, and civil society. The conference aspires to contribute to the development of innovative, inclusive, and sustainable solutions that advance economic prosperity while addressing global environmental and social challenges.
            </p>
          </div>

          <div className="rounded-xl border border-red-100 bg-red-50 p-5 sm:p-6">
            <h2 className="text-lg font-bold text-red-700 sm:text-xl">Objectives</h2>
            <div className="mt-4">
              <BulletList
                items={[
                  "Promote interdisciplinary research and knowledge exchange on Artificial Intelligence, trade, business, and sustainability.",
                  "Explore innovative AI-driven solutions that enhance business performance, trade efficiency, and economic resilience.",
                  "Foster collaboration among academia, industry, and policymakers to address emerging global challenges and opportunities.",
                  "Encourage sustainable and responsible business practices through digital transformation and technological innovation.",
                  "Advance discussions on ethical, inclusive, and sustainable development aligned with global economic and environmental goals.",
                ]}
              />
            </div>
          </div>
        </div>
      </PageShell>
    ),
  },
  {
    key: "5",
    label: "Conference Themes and Sub-themes",
    children: (
      <PageShell>
        <div className="space-y-8">
          <PartnerLogos />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {ConferenceSessionsList.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="h-full rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <h3 className="flex items-start gap-3 text-base font-bold leading-6 text-slate-900 sm:text-lg">
                  <span className="shrink-0 text-[#d61c25]">{index + 1}.</span>
                  <span>{item.title}</span>
                </h3>
                <ul className="mt-4 space-y-2">
                  {item.sessionsList.map((session, sessionIndex) => (
                    <li key={sessionIndex} className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                      <GoDotFill className="mt-2 shrink-0 text-[9px]" />
                      <span>{session}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </PageShell>
    ),
  },
  {
    key: "6",
    label: "Location",
    children: (
      <PageShell>
        <div className="space-y-6">
          <SectionHeading>Venue</SectionHeading>
          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-lg font-bold text-slate-900 sm:text-xl">
              BML Munjal University, Gurugram, India
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
              <strong>Dates:</strong> 6th October (Tuesday) – 7th October (Wednesday), 2026 | Hybrid Mode
            </p>
          </div>
          <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <img
              src="/assets/images/ICATS/conti.jpg"
              alt="ICATS 2026 conference venue"
              loading="lazy"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </PageShell>
    ),
  },
  {
    key: "7",
    label: "Important Dates",
    children: (
      <PageShell>
        <div className="space-y-7">
          <SectionHeading>Important Dates</SectionHeading>
          <div className="mx-auto w-full max-w-3xl space-y-4">
            {ImportantDateList.map((item, index) => (
              <div key={`${item.title}-${index}`} className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4970b3] text-white shadow ring-4 ring-white sm:h-12 sm:w-12">
                  {item.Icon && <item.Icon className="h-5 w-5" />}
                </div>
                <div className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-1.5">
                      <LuCalendar className="h-4 w-4" />
                      {item.date}
                    </span>
                    {item.status && (
                      <span className="rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                        {item.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 text-center">
            <p className="text-sm font-semibold text-slate-800 sm:text-base">
              Submission Email Id: confab360degree@gmail.com
            </p>
            <a
              href="https://www.conftool.net/icats2026"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submission Link
            </a>
          </div>
        </div>
      </PageShell>
    ),
  },
  {
    key: "8",
    label: "Scientific Committee (International)",
    children: (
      <PageShell>
        <div className="space-y-6">
          <SectionHeading>Scientific Committee (International)</SectionHeading>
          <ol className="space-y-3">
            {SCIntlList.map((item, index) => (
              <li key={index} className={cn(bodyClass, "flex items-start gap-3")}>
                <span className="font-semibold text-[#d61c25]">{index + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </PageShell>
    ),
  },
  {
    key: "9",
    label: "Scientific Committee (India)",
    children: (
      <PageShell>
        <div className="space-y-6">
          <SectionHeading>Scientific Committee (India)</SectionHeading>
          <ol className="space-y-3">
            {InternationalAdvisoryList.map((item, index) => (
              <li key={index} className={cn(bodyClass, "flex items-start gap-3")}>
                <span className="font-semibold text-[#d61c25]">{index + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </PageShell>
    ),
  },
  {
    key: "15",
    label: "Editorial Board",
    children: (
      <PageShell>
        <div className="space-y-6">
          <SectionHeading>Editorial Board</SectionHeading>
          <ol className="space-y-3">
            {ERList.map((item, index) => (
              <li key={index} className={cn(bodyClass, "flex items-start gap-3")}>
                <span className="font-semibold text-[#d61c25]">{index + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </PageShell>
    ),
  },
  {
    key: "11",
    label: "Publication Outlets",
    children: (
      <PageShell>
        <div className="space-y-8">
          <SectionHeading>Publication Opportunities</SectionHeading>
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
            <Carousel
              autoplay
              autoplaySpeed={4000}
              slidesToScroll={1}
              dots
              arrows={false}
              draggable
            >
              {publicationsList.map((item, index) => (
                <div key={`${item.title}-${index}`} className="px-4 py-8 sm:px-8">
                  <div className="mx-auto flex min-h-[300px] w-full max-w-sm flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex h-40 w-full items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h3 className="mt-5 text-center text-base font-bold text-slate-900">{item.title}</h3>
                    {item.para && (
                      <p className="mt-2 text-center text-sm font-semibold text-slate-600">{item.para}</p>
                    )}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          {/* <p className="text-center text-base font-bold text-slate-800 sm:text-xl">
            Lecture Notes in Networks and Systems
          </p> */}
        </div>
      </PageShell>
    ),
  },
  {
  key: "12",
  label: "Registration Fees",

  children: (
    <PageShell>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="mb-8">

        <div className="flex items-center gap-3">

          <div
            className="
              w-11 h-11
              rounded-xl
              bg-orange-50
              flex items-center justify-center
              flex-shrink-0
            "
          >
            <LuTimer
              className="text-[#f27521]"
              size={22}
            />
          </div>

          <div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Registration Fees
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Choose the registration category that best suits your
              participation.
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          FEE CARDS
      ===================================================== */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-5
        "
      >

        {/* =================================================
            CARD 1
        ================================================= */}

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-6
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >

          <div
            className="
              absolute
              top-0
              left-0
              w-full
              h-1
              bg-blue-500
            "
          />

          <div className="flex items-start justify-between gap-4">

            <div>

              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-blue-50
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-blue-700
                "
              >
                INDIA
              </span>

              <h3 className="mt-4 text-lg font-bold text-gray-900">
                Only Attendee
              </h3>

            </div>

            <div className="text-2xl">
              🇮🇳
            </div>

          </div>


          <div className="mt-6">

            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Registration Fee
            </p>

            <p className="mt-1 text-3xl font-extrabold text-gray-900">
              ₹2,000
            </p>

          </div>


          <div
            className="
              mt-5
              flex
              items-center
              justify-between
              border-t
              border-gray-100
              pt-4
            "
          >

            <span className="text-sm text-gray-500">
              Mode
            </span>

            <span
              className="
                rounded-full
                bg-gray-100
                px-3
                py-1
                text-xs
                font-semibold
                text-gray-700
              "
            >
              Offline
            </span>

          </div>

        </div>


        {/* =================================================
            CARD 2
        ================================================= */}

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-blue-200
            bg-gradient-to-br
            from-blue-50
            to-white
            p-6
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >

          <div
            className="
              absolute
              top-0
              left-0
              w-full
              h-1
              bg-blue-600
            "
          />

          <div className="flex items-start justify-between gap-4">

            <div>

              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-blue-100
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-blue-700
                "
              >
                INDIA • AUTHOR
              </span>

              <h3 className="mt-4 text-lg font-bold text-gray-900 leading-snug">
                Presentation + Springer Publication
              </h3>

            </div>

            <div className="text-2xl">
              📚
            </div>

          </div>


          <div className="mt-5">

            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Registration Fee
            </p>

            <p className="mt-1 text-3xl font-extrabold text-blue-700">
              ₹45,000
            </p>

          </div>


          <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed">
            Springer Proceedings (Scopus) – Authors
            (geographically diverse)
          </p>


          <div
            className="
              mt-5
              flex
              items-center
              justify-between
              border-t
              border-blue-100
              pt-4
            "
          >

            <span className="text-sm text-gray-500">
              Mode
            </span>

            <span
              className="
                rounded-full
                bg-blue-100
                px-3
                py-1
                text-xs
                font-semibold
                text-blue-700
              "
            >
              Online / Offline
            </span>

          </div>

        </div>


        {/* =================================================
            CARD 3
        ================================================= */}

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-orange-200
            bg-gradient-to-br
            from-orange-50
            to-white
            p-6
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >

          <div
            className="
              absolute
              top-0
              left-0
              w-full
              h-1
              bg-[#f27521]
            "
          />

          <div className="flex items-start justify-between gap-4">

            <div>

              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-orange-100
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-orange-700
                "
              >
                INDIA • PRESENTER
              </span>

              <h3 className="mt-4 text-lg font-bold text-gray-900 leading-snug">
                Only Presentation
              </h3>

            </div>

            <div className="text-2xl">
              🎤
            </div>

          </div>


          <div className="mt-6">

            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Registration Fee
            </p>

            <p className="mt-1 text-3xl font-extrabold text-[#d85c16]">
              ₹7,080
            </p>

          </div>


          <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed">
            After conference considered for Scopus / WoS / ABDC
            journals. APC as per journals shortlisted.
          </p>


          <div
            className="
              mt-5
              flex
              items-center
              justify-between
              border-t
              border-orange-100
              pt-4
            "
          >

            <span className="text-sm text-gray-500">
              Mode
            </span>

            <span
              className="
                rounded-full
                bg-orange-100
                px-3
                py-1
                text-xs
                font-semibold
                text-orange-700
              "
            >
              Online / Offline
            </span>

          </div>

        </div>


        {/* =================================================
            CARD 4
        ================================================= */}

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-purple-200
            bg-gradient-to-br
            from-purple-50
            to-white
            p-6
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >

          <div
            className="
              absolute
              top-0
              left-0
              w-full
              h-1
              bg-purple-500
            "
          />

          <div className="flex items-start justify-between gap-4">

            <div>

              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-purple-100
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-purple-700
                "
              >
                INTERNATIONAL
              </span>

              <h3 className="mt-4 text-lg font-bold text-gray-900 leading-snug">
                Presentation + Springer Publication
              </h3>

            </div>

            <div className="text-2xl">
              🌍
            </div>

          </div>


          <div className="mt-6">

            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Registration Fee
            </p>

            <p className="mt-1 text-3xl font-extrabold text-purple-700">
              $600
            </p>

          </div>


          <p className="mt-3 text-xs md:text-sm text-gray-600">
            Springer Proceedings (Scopus)
          </p>


          <div
            className="
              mt-5
              flex
              items-center
              justify-between
              border-t
              border-purple-100
              pt-4
            "
          >

            <span className="text-sm text-gray-500">
              Mode
            </span>

            <span
              className="
                rounded-full
                bg-purple-100
                px-3
                py-1
                text-xs
                font-semibold
                text-purple-700
              "
            >
              Online / Offline
            </span>

          </div>

        </div>


        {/* =================================================
            CARD 5
        ================================================= */}

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-green-200
            bg-gradient-to-br
            from-green-50
            to-white
            p-6
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >

          <div
            className="
              absolute
              top-0
              left-0
              w-full
              h-1
              bg-green-500
            "
          />

          <div className="flex items-start justify-between gap-4">

            <div>

              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-green-100
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-green-700
                "
              >
                INTERNATIONAL
              </span>

              <h3 className="mt-4 text-lg font-bold text-gray-900 leading-snug">
                Only Presentation
              </h3>

            </div>

            <div className="text-2xl">
              🎤
            </div>

          </div>


          <div className="mt-6">

            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Registration Fee
            </p>

            <p className="mt-1 text-3xl font-extrabold text-green-700">
              $200
            </p>

          </div>


          <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed">
            After conference considered for Scopus / WoS / ABDC
            journals. APC as per journals shortlisted.
          </p>


          <div
            className="
              mt-5
              flex
              items-center
              justify-between
              border-t
              border-green-100
              pt-4
            "
          >

            <span className="text-sm text-gray-500">
              Mode
            </span>

            <span
              className="
                rounded-full
                bg-green-100
                px-3
                py-1
                text-xs
                font-semibold
                text-green-700
              "
            >
              Online / Offline
            </span>

          </div>

        </div>

      </div>


      {/* =====================================================
          REGISTRATION INCLUDES
      ===================================================== */}

      <section className="mt-12">

        <div className="flex items-center gap-3 mb-6">

          <div
            className="
              w-10 h-10
              rounded-lg
              bg-orange-50
              flex
              items-center
              justify-center
            "
          >
            <LuUserRound
              className="text-[#f27521]"
              size={20}
            />
          </div>

          <div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Registration Fee Includes
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Benefits included with your conference registration
            </p>

          </div>

        </div>


        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
          "
        >

          {[
            "Two-Days Research Writing and Case Writing Workshop (AICTE-NEAT Approved Certificate)",
            "Panel Discussion Access",
            "Access to all the sessions",
            "Keynote Speeches (Speakers from USA, Switzerland, UK etc.)",
            "Lunch for two days",
            "High Tea for two days",
            "Paper Review / Plagiarism and AI Check",
          ].map((item, index) => (

            <div
              key={index}
              className="
                flex
                items-start
                gap-3
                p-4
                rounded-xl
                border
                border-gray-200
                bg-white
                hover:bg-gray-50
                transition-colors
              "
            >

              <div
                className="
                  flex-shrink-0
                  w-7
                  h-7
                  rounded-full
                  bg-green-100
                  text-green-700
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-sm
                "
              >
                ✓
              </div>

              <p
                className={`
                  text-sm
                  leading-relaxed
                  ${
                    index === 0
                      ? "text-[#d61c25] font-medium"
                      : "text-gray-700"
                  }
                `}
              >
                {item}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          IMPORTANT NOTE
      ===================================================== */}

      <div
        className="
          mt-8
          flex
          items-start
          gap-3
          p-5
          rounded-xl
          bg-amber-50
          border
          border-amber-200
        "
      >

        <div className="text-xl flex-shrink-0">
          ⚠️
        </div>

        <div>

          <h3 className="font-bold text-amber-900">
            Important Note
          </h3>

          <p className="mt-1 text-sm text-amber-800 leading-relaxed">
            The publication charges for journal outlets are not included
            in the registration fees.
          </p>

        </div>

      </div>


      {/* =====================================================
          PAYMENT SECTION
      ===================================================== */}

      <section className="mt-12">

        <div className="flex items-center gap-3 mb-6">

          <div
            className="
              w-10 h-10
              rounded-lg
              bg-orange-50
              flex
              items-center
              justify-center
            "
          >
            <BsBank
              className="text-[#f27521]"
              size={20}
            />
          </div>

          <div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Payment Details
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Complete your registration using bank transfer or online payment.
            </p>

          </div>

        </div>


        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-6
          "
        >

          {/* =================================================
              BANK DETAILS
          ================================================= */}

          <div
            className="
              rounded-2xl
              border
              border-gray-200
              bg-white
              overflow-hidden
            "
          >

            <div
              className="
                bg-gray-50
                border-b
                border-gray-200
                px-5
                py-4
              "
            >

              <h3 className="font-bold text-gray-900">
                Bank Account Details
              </h3>

            </div>


            <div className="p-5">

              <dl className="divide-y divide-gray-100">

                <div className="py-3 first:pt-0 flex flex-col sm:flex-row sm:justify-between gap-1">

                  <dt className="text-sm font-semibold text-gray-500">
                    Beneficiary Name
                  </dt>

                  <dd className="text-sm font-semibold text-gray-900 sm:text-right">
                    CONFAB 360 DEGREE
                  </dd>

                </div>


                <div className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1">

                  <dt className="text-sm font-semibold text-gray-500">
                    Bank Name
                  </dt>

                  <dd className="text-sm text-gray-900 sm:text-right">
                    ICICI BANK, Mayapuri, Delhi, India
                  </dd>

                </div>


                <div className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1">

                  <dt className="text-sm font-semibold text-gray-500">
                    Account Number
                  </dt>

                  <dd className="text-sm font-semibold text-gray-900 sm:text-right break-all">
                    925010035781364
                  </dd>

                </div>


                <div className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1">

                  <dt className="text-sm font-semibold text-gray-500">
                    Account Type
                  </dt>

                  <dd className="text-sm text-gray-900 sm:text-right">
                    Current Account
                  </dd>

                </div>


                <div className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1">

                  <dt className="text-sm font-semibold text-gray-500">
                    Branch
                  </dt>

                  <dd className="text-sm text-gray-900 sm:text-right">
                    Mayapuri, Delhi, India
                  </dd>

                </div>


                <div className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1">

                  <dt className="text-sm font-semibold text-gray-500">
                    IFSC Code
                  </dt>

                  <dd className="text-sm font-semibold text-gray-900 sm:text-right">
                    ICIC0001818
                  </dd>

                </div>


                <div className="py-3 last:pb-0 flex flex-col sm:flex-row sm:justify-between gap-1">

                  <dt className="text-sm font-semibold text-gray-500">
                    SWIFT Code
                    <span className="block text-xs font-normal text-gray-400">
                      International Payments
                    </span>
                  </dt>

                  <dd className="text-sm font-semibold text-gray-900 sm:text-right">
                    ICICINBBCTS
                  </dd>

                </div>

              </dl>

            </div>

          </div>


          {/* =================================================
              ONLINE PAYMENT
          ================================================= */}

          <div
            className="
              rounded-2xl
              border
              border-blue-200
              bg-gradient-to-br
              from-blue-50
              to-white
              p-6
              flex
              flex-col
              items-center
              justify-center
              text-center
            "
          >

            <span
              className="
                inline-flex
                items-center
                rounded-full
                bg-blue-100
                px-4
                py-1.5
                text-xs
                font-bold
                text-blue-700
                mb-4
              "
            >
              ONLINE PAYMENT
            </span>


            <h3 className="text-xl font-bold text-gray-900">
              Scan or Click to Pay
            </h3>


            <p className="mt-2 text-sm text-gray-600">
              Use the QR code below to proceed with payment.
            </p>


            <a
              href="https://razorpay.me/@confab360degree1628"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Confab 360 Degree online payment page"
              className="
                mt-5
                rounded-2xl
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:ring-offset-2
              "
            >

              <div
                className="
                  w-48
                  h-48
                  sm:w-52
                  sm:h-52
                  bg-white
                  border
                  border-gray-200
                  rounded-2xl
                  p-2
                  flex
                  items-center
                  justify-center
                  shadow-sm
                  hover:shadow-xl
                  transition-shadow
                "
              >

                <img
                  src="/assets/images/payment/payment.svg"
                  alt="Payment QR Code"
                  className="w-full h-full object-contain"
                />

              </div>

            </a>


            <p className="mt-4 text-xs text-gray-500">
              Click the QR code to open the payment page
            </p>

          </div>

        </div>

      </section>

    </PageShell>
  ),
},
  {
    key: "13",
    label: "Contact Detail",
    children: (
      <PageShell>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
          <div className="flex justify-center md:justify-start">
            <img
              src="/assets/images/company/logo.webp"
              alt="Confab 360 Degree"
              loading="lazy"
              className="h-auto w-full max-w-[280px] object-contain"
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <LuPhoneCall className="mt-1 h-5 w-5 shrink-0 text-[#f27521]" />
              <span className="text-sm font-semibold leading-6 text-slate-800 sm:text-base">+91-7011560479 | +91-9717688509</span>
            </div>
            <div className="flex items-start gap-3">
              <LuMail className="mt-1 h-5 w-5 shrink-0 text-[#f27521]" />
              <span className="break-all text-sm font-semibold leading-6 text-slate-800 sm:text-base">confab360degree@gmail.com</span>
            </div>
            <div className="flex items-start gap-3">
              <LuMapPin className="mt-1 h-5 w-5 shrink-0 text-[#f27521]" />
              <span className="text-sm font-semibold leading-6 text-slate-800 sm:text-base">Delhi, Mumbai, India</span>
            </div>
          </div>
        </div>
      </PageShell>
    ),
  },
  {
    key: "14",
    label: "Submission Guidelines",
    children: (
      <PageShell>
        <div className="space-y-6">
          <SectionHeading>Author Ethical Guidelines</SectionHeading>
          <div className="space-y-5">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
              <h3 className="font-bold text-slate-900">1. General Formatting</h3>
              <p className={cn(bodyClass, "mt-2")}>Use A4 paper size (210 mm x 297 mm). Margins: 1 inch (2.54 cm) on all sides. Font: Use a clear, readable font (e.g., Times New Roman or Arial) in 12-point size. Line Spacing: 1.5 or double-spaced throughout the text. Paragraphs: Indent the first line of each paragraph by 0.5 inches (1.27 cm).</p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
              <h3 className="font-bold text-slate-900">2. Abstract</h3>
              <p className={cn(bodyClass, "mt-2")}>Provide a concise abstract (150-250 words) summarizing the main points of your paper. Keywords: List 3-5 relevant keywords after the abstract. The word limit should be between 3000-8000 words including referencing and abstract, tables, figures etc.</p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
              <h3 className="font-bold text-slate-900">3. Figures and Tables</h3>
              <p className={cn(bodyClass, "mt-2")}>Number figures and tables consecutively (e.g., Table 1, Figure 1). Include captions below figures and above tables. Ensure all figures and tables are referenced in the text.</p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
              <h3 className="font-bold text-slate-900">4. Research Ethics Compliance</h3>
              <p className={cn(bodyClass, "mt-2")}>Title of the paper: Centered, bold, and in title case. Author(s): Full names, affiliations, and email addresses. Acknowledgments: Include any funding sources or acknowledgments.</p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
              <h3 className="font-bold text-slate-900">5. Main Body</h3>
              <p className={cn(bodyClass, "mt-2")}>Use headings and subheadings to organize your content. Use numbered sections if required by the journal. Maintain clarity and coherence throughout the text.</p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
              <h3 className="font-bold text-slate-900">6. References</h3>
              <p className={cn(bodyClass, "mt-2")}>Use Harvard style for all citations and references.</p>
            </article>
          </div>
        </div>
      </PageShell>
    ),
  },
  {
    key: "16",
    label: "Review Process & Ethics",
    children: (
      <PageShell>
        <div className="space-y-5">
          <ReviewCard title="Peer Review Process">
            <p className={bodyClass}>Each manuscript presented in the conference will undergo a <strong>double-blind review</strong> process.</p>
            <p className={bodyClass}>Initially, all manuscripts will be screened using <strong>Turnitin</strong> software. <span className="font-semibold text-red-600">Plagiarism must be strictly less than 10%.</span></p>
          </ReviewCard>

          <ReviewCard title="First Round of Review" tone="amber">
            <p className={bodyClass}>Reviewers will evaluate the manuscript based on the following criteria:</p>
            <BulletList
              items={[
                "Literature review and theoretical framework",
                "Contribution to the field",
                "Research methodology (quantitative/qualitative)",
                "Results and discussion",
                "Alignment between objectives and conclusions",
                "Formatting and overall structure",
              ]}
            />
            <p className={bodyClass}>Reviewers will recommend one of the following outcomes: <strong>Accept, Minor Revision, Major Revision,</strong> or <strong>Reject</strong>.</p>
            <p className={bodyClass}>Authors must revise the manuscript according to the reviewers’ comments before proceeding to the next stage.</p>
          </ReviewCard>

          <ReviewCard title="Second Round of Review" tone="green">
            <p className={bodyClass}>Editors and reviewers will verify whether all feedback from the first round has been adequately addressed. Based on this, the manuscript may be accepted or returned for further revision.</p>
            <p className={bodyClass}>The final version of the manuscript will again undergo plagiarism screening via Turnitin to confirm <span className="font-semibold text-red-600">less than 10% similarity</span>.</p>
          </ReviewCard>
        </div>
      </PageShell>
    ),
  },
];
