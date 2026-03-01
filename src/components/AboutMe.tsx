const AboutMe = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <img
              src="/ryan_headshot.jpg"
              alt="Ryan Taylor - Sherwood Property Solutions"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-primary/20"
              style={{ objectPosition: "50% 10%" }}
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Hi, I'm Ryan
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed mb-4">
              I'm the person behind Sherwood Property Solutions — not a
              faceless corporation or a call centre. When you get in touch
              about your land, you'll be speaking directly to me.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed mb-4">
              I've been buying land and property across Nottingham and the
              East Midlands since 2014. I started in residential property
              and moved into land acquisition for development, so I
              understand both sides — what land is worth to a developer and
              what it means to you as a landowner.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed">
              I'll personally visit your site, explain exactly how I've
              calculated my offer, and give you a straightforward, honest
              answer. No sales team, no middlemen — just me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
