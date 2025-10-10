import Image from "next/image";

type WorkSwiperSlideProps = {
  pc_img: string;
  sp_img: string;
};

const WorkSwiperSlide = ({ pc_img, sp_img }: WorkSwiperSlideProps) => {
  return (
    <div className="pc:w-70 pc:h-52 relative flex h-60 w-80 items-center justify-center rounded-2xl border border-[#795549] bg-[#D7CDBE] p-3">
      {/* PC画像 */}
      <div className="pc:w-80 relative aspect-[260/156] w-70">
        <Image
          src={pc_img}
          alt="サイトイメージ画像pc"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* SP画像 */}
      <div className="pc:w-20 absolute w-16">
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
