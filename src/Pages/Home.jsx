
const highlights = [
  { value: "1948", label: "Established" },
  { value: "Student-friendly", label: "Hostel rent" },
  { value: "Bihar & Jharkhand", label: "Student community" },
];

function HeritageEmblem() {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="rounded-t-[48%] rounded-b-xl border border-[#741F2B] bg-[#E8D0BF] p-[6px] shadow-[0_25px_60px_rgba(75,17,29,0.12)]">
        <div className="flex min-h-[290px] flex-col items-center justify-center rounded-t-[46%] rounded-b-lg bg-[#741F2B] px-6 pb-10 pt-16 text-center text-[#FFF5E9] sm:min-h-[330px]">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            className="mb-5 h-14 w-14"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M5 19h38L24 6 5 19Z" strokeLinejoin="round" />
            <path d="M9 42h30M13 23v15M21 23v15M29 23v15M37 23v15M6 42h36" />
          </svg>

          <p className="font-serif text-2xl tracking-[0.18em] sm:text-3xl">
            RAJENDRA
          </p>

          <p className="mt-2 text-base font-semibold tracking-[0.16em] sm:text-lg">
            CHHATRA NIWAS
          </p>

          <div className="my-5 h-px w-24 bg-[#D9B38B]" />

          <p className="text-[9px] font-medium tracking-[0.22em] text-[#F1DCC9] sm:text-[10px]">
            EDUCATION · COMMUNITY · OPPORTUNITY
          </p>
        </div>
      </div>

      <div className="absolute -bottom-5 -right-2 flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-[#FBF6F0] bg-white text-[#741F2B] shadow-lg sm:-right-5 sm:h-28 sm:w-28">
        <span className="text-[9px] tracking-[0.18em]">SINCE</span>
        <span className="mt-1 font-serif text-3xl font-bold">1948</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
    <main className="overflow-hidden bg-[#FBF6F0] text-[#332B2B">
      {/* Hero section */}
      <section
        id="home"
        className="relative"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#EEDFD5]/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-white/80 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:px-10 lg:py-24">
          {/* Left content */}
          <div className="max-w-2xl">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8B2938] sm:text-xs">
              An initiative of Bihar Pravasi Chhatra Sangh
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-[1.12] tracking-[-0.035em] text-[#4B111D] sm:text-5xl lg:text-6xl xl:text-[68px]">
              A home away from home for students pursuing their dreams.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#6B5555] sm:text-base sm:leading-8">
              Supporting students from Bihar and Jharkhand with
              affordable accommodation in Kolkata since 1948.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#741F2B] px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#741F2B]/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#4B111D]"
              >
                Admission Enquiry
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#CFA59A] px-5 py-3.5 text-sm font-semibold text-[#741F2B] transition duration-300 hover:bg-[#F3E5DE]"
              >
                Discover our history
              </a>
            </div>

            {/* Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[#E7D6CC] pt-7 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label}>
                  <p className="font-serif text-lg font-bold text-[#741F2B] sm:text-xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#806B67]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right visual */}
          <div className="px-3 py-8 sm:px-8 lg:px-2">
            <HeritageEmblem />
          </div>
        </div>
      </section>

      {/* About introduction */}
      <section
        id="about"
        className="border-t border-[#E7D6CC] bg-white"
      >
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B2938]">
              Our legacy
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#4B111D] sm:text-4xl">
              More than a hostel. A place to belong.
            </h2>
          </div>

          <p className="text-sm leading-8 text-[#6B5555] sm:text-base">
            Established in 1948, Rajendra Chhatra Niwas was founded
            by Bihar Pravasi Chhatra Sangh with the aim of supporting
            students from Bihar and Jharkhand who come to Kolkata
            for education. Our story is rooted in community,
            opportunity and the belief that every student deserves
            a place to call home.
          </p>
        </div>
      </section>
      
{/* Why choose us */}
<section className="bg-[#FBF6F0] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
  <div className="mx-auto max-w-7xl">
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8B2938]">
        Why choose us
      </p>

      <h2 className="mt-4 font-serif text-3xl leading-tight text-[#4B111D] sm:text-4xl">
        A community built on care and opportunity.
      </h2>

      <p className="mt-4 text-sm leading-7 text-[#806B67] sm:text-base">
        More than accommodation, a supportive environment for students
        working towards a brighter future.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {/* Card 1 */}
      <article className="group rounded-2xl border border-[#E9D8CE] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#CFA59A] hover:shadow-xl hover:shadow-[#741F2B]/5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4E7E1] text-[#741F2B]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6" aria-hidden="true">
            <path d="M12 3 19 6v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>

        <h3 className="mt-6 font-serif text-xl font-semibold text-[#4B111D]">
          A Legacy Since 1948
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#806B67]">
          A long-standing initiative dedicated to supporting students
          coming to Kolkata for education.
        </p>
      </article>

      {/* Card 2 */}
      <article className="group rounded-2xl border border-[#E9D8CE] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#CFA59A] hover:shadow-xl hover:shadow-[#741F2B]/5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4E7E1] text-[#741F2B]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6" aria-hidden="true">
            <path d="M3 10h18M5 10v9m4-9v9m6-9v9m4-9v9M3 21h18M12 3 2 8h20L12 3Z" />
          </svg>
        </div>

        <h3 className="mt-6 font-serif text-xl font-semibold text-[#4B111D]">
          Affordable Student Living
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#806B67]">
          A student-focused hostel initiative with an emphasis on
          accessible accommodation.
        </p>
      </article>

      {/* Card 3 */}
      <article className="group rounded-2xl border border-[#E9D8CE] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#CFA59A] hover:shadow-xl hover:shadow-[#741F2B]/5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4E7E1] text-[#741F2B]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6" aria-hidden="true">
            <circle cx="9" cy="8" r="3" />
            <path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5.5a3 3 0 0 1 0 5.8M18 14a5 5 0 0 1 3 4.5V20" />
          </svg>
        </div>

        <h3 className="mt-6 font-serif text-xl font-semibold text-[#4B111D]">
          A Student Community
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#806B67]">
          A shared connection for students from Bihar and Jharkhand
          pursuing their goals in Kolkata.
        </p>
      </article>
    </div>
  </div>
</section>

{/* Latest Notices */}
<section
  id="notices"
  className="border-t border-[#E9D8CE] bg-white px-6 py-16 sm:px-8 lg:px-10 lg:py-24"
>
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8B2938]">
          Stay informed
        </p>

        <h2 className="mt-3 font-serif text-3xl font-semibold text-[#4B111D] sm:text-4xl">
          Latest Notices
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-7 text-[#806B67] sm:text-base">
          Important announcements and updates for our hostel community.
        </p>
      </div>

      <a
        href="#notices"
        className="inline-flex items-center gap-2 self-start text-sm font-semibold text-[#741F2B] transition hover:gap-3 sm:self-auto"
      >
        View all notices <span>→</span>
      </a>
    </div>

    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {/* Notice 1 */}
      <article className="rounded-2xl border border-[#E9D8CE] bg-[#FFFCF8] p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#741F2B]/5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#F4E7E1] px-3 py-1 text-xs font-semibold text-[#741F2B]">
            Announcement
          </span>
          <span className="text-xs text-[#806B67]">Hostel Office</span>
        </div>

        <h3 className="mt-5 font-serif text-xl font-semibold text-[#4B111D]">
          Welcome to Rajendra Chhatra Niwas
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#806B67]">
          Visit the hostel office for verified information about
          accommodation, eligibility and admission enquiries.
        </p>

        <div className="mt-6 border-t border-[#E9D8CE] pt-4 text-xs text-[#806B67]">
          Official update
        </div>
      </article>

      {/* Notice 2 */}
      <article className="rounded-2xl border border-[#E9D8CE] bg-[#FFFCF8] p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#741F2B]/5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#F4E7E1] px-3 py-1 text-xs font-semibold text-[#741F2B]">
            Student Information
          </span>
          <span className="text-xs text-[#806B67]">Students</span>
        </div>

        <h3 className="mt-5 font-serif text-xl font-semibold text-[#4B111D]">
          Keep Your Contact Details Updated
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#806B67]">
          Students should keep their current contact details available
          with the hostel administration.
        </p>

        <div className="mt-6 border-t border-[#E9D8CE] pt-4 text-xs text-[#806B67]">
          General information
        </div>
      </article>

      {/* Notice 3 */}
      <article className="rounded-2xl border border-[#E9D8CE] bg-[#FFFCF8] p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#741F2B]/5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#F4E7E1] px-3 py-1 text-xs font-semibold text-[#741F2B]">
            Enquiry
          </span>
          <span className="text-xs text-[#806B67]">Prospective Students</span>
        </div>

        <h3 className="mt-5 font-serif text-xl font-semibold text-[#4B111D]">
          Looking for Accommodation?
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#806B67]">
          Contact the hostel administration to enquire about current
          availability, eligibility and the admission process.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 border-t border-[#E9D8CE] pt-4 text-sm font-semibold text-[#741F2B] transition hover:gap-3"
        >
          Make an enquiry <span>→</span>
        </a>
      </article>
    </div>

    <p className="mt-6 text-xs leading-6 text-[#806B67]">
      Note: These are sample notices for the frontend preview.
      Replace them with verified hostel announcements before publishing.
    </p>
  </div>
</section>
{/* Gallery Preview Section */}
<section
  id="gallery"
  className="bg-[#FBF6F0] px-5 py-20 sm:px-8 lg:px-16"
>
  <div className="mx-auto max-w-7xl">

    {/* Section Heading */}
    <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#741F2B]">
          A Glimpse of Our Home
        </p>

        <h2 className="text-3xl font-bold leading-tight text-[#4B111D] sm:text-4xl">
          Life at Rajendra Chhatra Niwas
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-[#806B67]">
          Take a look at the spaces where students learn, connect,
          and create memories together.
        </p>
      </div>

      <a
        href="#contact"
        className="inline-flex w-fit items-center gap-2 rounded-full border border-[#741F2B]
        px-6 py-3 font-semibold text-[#741F2B] transition hover:bg-[#741F2B]
        hover:text-white"
      >
        Visit Our Hostel <span aria-hidden="true">↗</span>
      </a>
    </div>

    {/* Gallery Grid */}
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

      {/* Image 1 */}
      <div className="group relative h-72 overflow-hidden rounded-2xl bg-[#EEDFD5] sm:col-span-2 lg:col-span-2 lg:h-96">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
          alt="Building exterior"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1015]/80 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 p-6 sm:p-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#F5D8C9]">
            Our Space
          </span>
          <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            A Place to Call Home
          </h3>
        </div>
      </div>

      {/* Image 2 */}
      <div className="group relative h-72 overflow-hidden rounded-2xl bg-[#EEDFD5] lg:h-96">
        <img
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=85"
          alt="Comfortable room interior"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1015]/80 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-xl font-bold text-white">
            Living Spaces
          </h3>
          <p className="mt-2 text-sm text-[#F5E9E2]">
            Everyday comfort
          </p>
        </div>
      </div>

      {/* Image 3 */}
      <div className="group relative h-72 overflow-hidden rounded-2xl bg-[#EEDFD5]">
        <img
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=85"
          alt="Shared study and work area"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1015]/80 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-xl font-bold text-white">
            Study & Growth
          </h3>
          <p className="mt-2 text-sm text-[#F5E9E2]">
            Focus on your future
          </p>
        </div>
      </div>

      {/* Image 4 */}
      <div className="group relative h-72 overflow-hidden rounded-2xl bg-[#EEDFD5]">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85"
          alt="People connecting and working together"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1015]/80 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-xl font-bold text-white">
            Community & Friendship
          </h3>
          <p className="mt-2 text-sm text-[#F5E9E2]">
            Memories that last
          </p>
        </div>
      </div>

    </div>

    {/* Gallery Note */}
    <p className="mt-6 text-center text-sm text-[#806B67]">
      Gallery images are illustrative placeholders. Replace them with
      actual hostel photographs before publishing.
    </p>

  </div>
</section>
{/* Contact Us Section */}
<section
  id="contact"
  className="bg-[#F1E5DC] px-5 py-20 sm:px-8 lg:px-16"
>
  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mb-12 text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#741F2B]">
        Get in Touch
      </p>

      <h2 className="text-3xl font-bold text-[#4B111D] sm:text-4xl">
        Contact Rajendra Chhatra Niwas
      </h2>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#806B67]">
        Have questions about accommodation or hostel facilities?
        We would be happy to hear from you.
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-2">

      {/* Contact Information */}
      <div className="rounded-3xl bg-[#741F2B] p-7 text-white sm:p-10">
        <h3 className="text-2xl font-bold">
          Let's Connect
        </h3>

        <p className="mt-3 leading-7 text-[#F0DCD6]">
          Reach out to us for hostel enquiries, admission-related
          questions, or other information.
        </p>

        <div className="mt-9 space-y-7">

          {/* Address */}
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
              📍
            </div>
            <div>
              <h4 className="font-semibold">Our Address</h4>
              <p className="mt-1 text-sm leading-6 text-[#F0DCD6]">
                Rajendra Chhatra Niwas, Kolkata
                <br />
                Add the verified full address here
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
              📞
            </div>
            <div>
              <h4 className="font-semibold">Phone Number</h4>
              <p className="mt-1 text-sm text-[#F0DCD6]">
                Add the official contact number
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
              ✉️
            </div>
            <div>
              <h4 className="font-semibold">Email Address</h4>
              <p className="mt-1 break-all text-sm text-[#F0DCD6]">
                Add the official email address
              </p>
            </div>
          </div>

        </div>

        <div className="mt-10 rounded-2xl border border-white/20 bg-white/10 p-5">
          <p className="text-sm leading-6 text-[#F0DCD6]">
            Please contact the hostel administration for verified
            information about availability, fees, and admission.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="rounded-3xl border border-[#E9D8CE] bg-white p-7 shadow-sm sm:p-10">
        <h3 className="text-2xl font-bold text-[#4B111D]">
          Send an Enquiry
        </h3>

        <p className="mt-2 text-sm leading-6 text-[#806B67]">
          Fill in your details and tell us how we can help.
        </p>

        <form
          className="mt-8 space-y-5"
          onSubmit={(event) => {
            event.preventDefault();
            alert("Enquiry form UI is ready! Backend integration is pending.");
          }}
        >
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-semibold text-[#4B111D]"
            >
              Full Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
              className="w-full rounded-xl border border-[#E9D8CE] bg-[#FFFCF9] px-4 py-3 outline-none transition focus:border-[#741F2B] focus:ring-2 focus:ring-[#741F2B]/10"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-semibold text-[#4B111D]"
            >
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-xl border border-[#E9D8CE] bg-[#FFFCF9] px-4 py-3 outline-none transition focus:border-[#741F2B] focus:ring-2 focus:ring-[#741F2B]/10"
            />
          </div>

          <div>
            <label
              htmlFor="contact-phone"
              className="mb-2 block text-sm font-semibold text-[#4B111D]"
            >
              Phone Number
            </label>
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full rounded-xl border border-[#E9D8CE] bg-[#FFFCF9] px-4 py-3 outline-none transition focus:border-[#741F2B] focus:ring-2 focus:ring-[#741F2B]/10"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-semibold text-[#4B111D]"
            >
              Your Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows="4"
              placeholder="Write your enquiry here..."
              required
              className="w-full resize-y rounded-xl border border-[#E9D8CE] bg-[#FFFCF9] px-4 py-3 outline-none transition focus:border-[#741F2B] focus:ring-2 focus:ring-[#741F2B]/10"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#741F2B] px-6 py-4 font-semibold text-white transition hover:bg-[#4B111D] focus:outline-none focus:ring-2 focus:ring-[#741F2B] focus:ring-offset-2"
          >
            Submit Enquiry →
          </button>

          <p className="text-xs leading-5 text-[#806B67]">
            Demo form: messages are not stored or sent yet.
            Backend integration will be added later.
          </p>
        </form>
      </div>

    </div>
  </div>
</section>
    </main>

<footer className="bg-[#4B111D] px-5 pb-6 pt-14 text-white sm:px-8 lg:px-16">
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-10 border-b border-white/15 pb-10 sm:grid-cols-2 lg:grid-cols-4">

      {/* Hostel Branding */}
      <div>
        <a
          href="#home"
          className="inline-block text-xl font-bold tracking-wide"
        >
          Rajendra Chhatra Niwas
        </a>

        <p className="mt-4 max-w-xs text-sm leading-7 text-[#EEDFD5]">
          A student community built on shared experiences, learning,
          and togetherness since 1948.
        </p>

        <span className="mt-5 inline-block rounded-full border border-white/20 px-4 py-2 text-xs font-semibold tracking-wider text-[#F0DCD6]">
          ESTABLISHED 1948
        </span>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-base font-bold">Quick Links</h3>

        <ul className="mt-5 space-y-3 text-sm text-[#EEDFD5]">
          <li>
            <a href="#home" className="transition hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="transition hover:text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="#notices" className="transition hover:text-white">
              Notice Board
            </a>
          </li>
          <li>
            <a href="#gallery" className="transition hover:text-white">
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" className="transition hover:text-white">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Student Corner */}
      <div>
        <h3 className="text-base font-bold">Student Corner</h3>

        <ul className="mt-5 space-y-3 text-sm text-[#EEDFD5]">
          <li>
            <a href="#notices" className="transition hover:text-white">
              Latest Notices
            </a>
          </li>
          <li>
            <a href="#contact" className="transition hover:text-white">
              Accommodation Enquiry
            </a>
          </li>
          <li>
            <a href="#login" className="transition hover:text-white">
              Student Login
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Summary */}
      <div>
        <h3 className="text-base font-bold">Get in Touch</h3>

        <div className="mt-5 space-y-4 text-sm leading-6 text-[#EEDFD5]">
          <p>
            <span className="mr-2">📍</span>
            Rajendra Chhatra Niwas, Kolkata
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-semibold text-white transition hover:text-[#F0DCD6]"
          >
            Contact the Administration
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="flex flex-col gap-3 pt-6 text-center text-xs text-[#DCC5C5] sm:flex-row sm:items-center sm:justify-between sm:text-left">
      <p>
        © {new Date().getFullYear()} Rajendra Chhatra Niwas.
        All rights reserved.
      </p>

      <a
        href="#home"
        className="font-semibold transition hover:text-white"
      >
        Back to Top ↑
      </a>
    </div>

  </div>
</footer>
</>
  );
}
