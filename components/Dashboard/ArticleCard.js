import React from "react";
import { IconButton } from "../Buttons";

import { BsThreeDotsVertical } from "react-icons/bs";
import ArticleBadge from "./ArticleBadge";

const ArticleCard = () => {
  return (
    <article className="relative w-full h-fit bg-[#EFEFEF] dark:bg-[#1C1C1C] rounded-xl py-10 px-8 font-inter">
      <div className="absolute top-3 right-2 inline-flex justify-center items-start">
        <ArticleBadge badgeType="published" />
        <IconButton left={true} tooltipText="Menu">
          <BsThreeDotsVertical />
        </IconButton>
      </div>
      <div>
        <h2 className="font-bold text-2xl">Title of the Article</h2>
      </div>
      <div className="mt-4">
        <p className="text-lg line-clamp-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non quaeritur
          autem quid naturae tuae consentaneum sit, sed quid disciplinae. Cur id
          non ita fit? Si enim ita est, vide ne facinus facias, cum mori
          suadeas. Atqui, inquit, si Stoicis concedis ut virtus sola, si adsit
          vitam efficiat beatam, concedis etiam Peripateticis. Duo Reges:
          constructio interrete. Tantum dico, magis fuisse vestrum agere Epicuri
          diem natalem, quam illius testamento cavere ut ageretur. Hoc est vim
          afferre, Torquate, sensibus, extorquere ex animis cognitiones
          verborum, quibus inbuti sumus. Nihil enim desiderabile concupiscunt,
          plusque in ipsa iniuria detrimenti est quam in iis rebus emolumenti,
          quae pariuntur iniuria. At cum tuis cum disseras, multa sunt audienda
          etiam de obscenis voluptatibus, de quibus ab Epicuro saepissime
          dicitur. Nam aliquando posse recte fieri dicunt nulla expectata nec
          quaesita voluptate.{" "}
        </p>
      </div>
    </article>
  );
};

export default ArticleCard;
