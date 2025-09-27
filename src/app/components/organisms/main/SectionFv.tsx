import Image from "next/image";

const SectionFv = () => {
  return (
    <div>
      <div className="w-full">
        <div className="pc:aspect-[900/660] relative aspect-[375/562] w-screen max-w-none">
          {/* fv画像 */}

          {/* sp */}
          <Image
            src="/img/fv/fv-sp.png"
            alt="sp版fv"
            fill
            className="pc:hidden object-cover"
            priority
          />
          {/* pc */}
          <Image
            src="/img/fv/fv-pc.png"
            alt="sp版fv"
            fill
            className="pc:block hidden object-cover"
            priority
          />

          {/* ロゴ */}
          <div className="absolute top-5 left-5">
            <Image
              src="/img/logo/logo-white.png"
              alt="ロゴ"
              width={250}
              height={220}
              style={{ width: "45vw", height: "auto" }}
              className="pc:hidden -rotate-12"
            />
            <Image
              src="/img/logo/logo-brown.png"
              alt="ロゴ"
              width={250}
              height={220}
              className="pc:block hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFv;
