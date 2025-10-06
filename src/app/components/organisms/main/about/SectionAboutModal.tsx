"use client";

import { useState } from "react";

import ButtonBrown from "@/app/components/atoms/button/ButtonBrown";
import Modal from "@/app/components/atoms/modal/modal";

const SectionAboutModal = () => {
  const [openWhich, setOpenWhich] = useState<null | "past" | "next">(null);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
        <ButtonBrown
          text="これまでの学習内容"
          onClick={() => setOpenWhich("past")}
        ></ButtonBrown>
        <ButtonBrown
          text="これから学習したい事"
          onClick={() => setOpenWhich("next")}
        ></ButtonBrown>
      </div>

      {/* モーダル */}
      <Modal
        open={openWhich === "past"}
        onClose={() => setOpenWhich(null)}
        title="これまでの学習内容"
      >
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
        <div>テキスト</div>
      </Modal>
    </>
  );
};

export default SectionAboutModal;
