import Image from "next/image";

export default function Foto() {
  return (
    <section className="overflow-hidden">
      <div className="container">
        <div className="relative w-screen aspect-video bg-tbsgreen flex items-center justify-center lg:-ms-8">
          <Image
            src={"/images/welkombijtheblackstag.webp"}
            alt="Welkom bij the blackstag"
            fill
          />
        </div>
      </div>
    </section>
  );
}
