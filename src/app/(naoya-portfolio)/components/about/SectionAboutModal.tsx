"use client";

import { useState } from "react";

import { FutureLearningPlan } from "@/const/about/futureLearningPlan";
import { LearningHistory } from "@/const/about/learningHistory";

import ButtonBrown from "@/app/components/atoms/button/ButtonBrown";
import ModalContent from "@/app/components/atoms/modal/modal_content/ModalContent";

import Modal from "../../../components/atoms/modal/Modal";

const SectionAboutModal = () => {
  const [openWhich, setOpenWhich] = useState<null | "past" | "next">(null);

  return (
    <>
      <div className="fade_in_up flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
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
