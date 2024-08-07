export default function IntroText({
  content,
}: {
  content: { title: string; paragraphs: string[] };
}) {
  return (
    <section className="container mt-12">
      <div className="md:w-2/3">
        <h2 className="font-medium text-3xl">{content.title}</h2>
        {content.paragraphs.map((paragraph, index) => (
          <p key={index} className="py-4">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
