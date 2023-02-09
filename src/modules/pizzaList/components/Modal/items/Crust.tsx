import check from "@icons/check.png";
import React from "react";

type CrustProps = {
  isActive: boolean;
  onClick: () => void;
  src: string;
  title: string;
  price: number;
};

const Crust: React.FC<CrustProps> = ({
  isActive,
  onClick,
  src,
  title,
  price,
}) => (
  <div
    className={`${
      !!isActive && "border-2 border-red-500"
    } relative box-border w-32 rounded-xl bg-slate-100 px-2 pb-2 pt-4`}
    onClick={onClick}
    role="button"
    tabIndex={0}>
    <img
      alt="сырная корка"
      className="mx-auto h-24 w-24"
      src={src}
    />
    <p className="mt-1 text-center font-nunito text-sm">{title}</p>
    <p className="mt-2 text-center font-nunito text-lg font-medium">
      {price} ₽
    </p>
    {!!isActive && (
      <img
        alt="выбрано"
        className="absolute top-1 right-1 h-4 w-4"
        src={check}
      />
    )}
  </div>
);

export default Crust;
