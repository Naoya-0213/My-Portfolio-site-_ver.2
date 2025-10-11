import Image from "next/image";

type WorkSwiperSlideProps = {
  pc_img: string;
  sp_img: string;
};

const WorkSwiperSlide = ({ pc_img, sp_img }: WorkSwiperSlideProps) => {
  return (
    <div className="relative flex h-52 w-70 items-center justify-center rounded-2xl border border-[#795549] bg-[#D7CDBE] p-3 max-[350px]:h-50 max-[350px]:w-65">
      {/* PC画像 */}
      <div className="pc:w-80 relative aspect-[260/156] w-80">
        <Image
          src={pc_img}
          alt="サイトイメージ画像pc"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* SP画像 */}
      <div className="absolute top-17 right-5 aspect-[60/118] w-16 max-[350px]:top-15 max-[350px]:w-15">
        <Image
          src={sp_img}
          alt="サイトイメージ画像pc"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default WorkSwiperSlide;
