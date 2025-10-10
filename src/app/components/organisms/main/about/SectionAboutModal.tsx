"use client";

import { useState } from "react";

import { FutureLearningPlan } from "@/const/futureLearningPlan";
import { LearningHistory } from "@/const/learningHistory";

import ButtonBrown from "@/app/components/atoms/button/ButtonBrown";
import Modal from "@/app/components/atoms/modal/modal";
import ModalContent from "@/app/components/atoms/modal/modal_content/ModalContent";

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

      {/* モーダル（学習した内容） */}
      <Modal
        open={openWhich === "past"}
        onClose={() => setOpenWhich(null)}
        title="これまでの学習内容"
      >
        <ModalContent contents={LearningHistory} />
      </Modal>

      {/* モーダル（これから学習したい内容） */}
      <Modal
        open={openWhich === "next"}
        onClose={() => setOpenWhich(null)}
        title="これから学習したい事"
      >
        <ModalContent contents={FutureLearningPlan} />
      </Modal>
    </>
  );
};

export default SectionAboutModal;
