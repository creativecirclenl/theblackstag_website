export default function HomeIntro({
  content,
}: {
  content: {
    size: string;
    colors: string;
    title: string | React.ReactNode;
    subsize: string;
    subtitle: string;
    description: string;
  };
}) {
  return (
    <section className="container flex flex-col items-start justify-center pt-12 mb-8">
      <div className="relative w-full h-[200px] md:h-[350px] flex items-center justify-start my-4">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 350"
          preserveAspectRatio="xMidYMid meet"
          style={{ pointerEvents: "none" }}
        >
          <defs>
            <mask id="textMask">
              <rect width="1200" height="350" fill="black" />
              <text
                x="0"
                y="280"
                fontSize="300"
                fontWeight="bold"
                fill="white"
                fontFamily="inherit"
                letterSpacing="-0.02em"
              >
                {content.title}
              </text>
            </mask>
          </defs>
          <foreignObject width="1200" height="350" mask="url(#textMask)">
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src="/videos/testvideo2.webm" type="video/webm" />
            </video>
          </foreignObject>
        </svg>
      </div>

      <div className="md:flex items-center py-4">
        <h2 className={`${content.subsize} leading-none font-medium`}>
          {content.subtitle}
        </h2>
        <p className="w-full md:w-1/3 py-4">{content.description}</p>
      </div>
    </section>
  );
}
