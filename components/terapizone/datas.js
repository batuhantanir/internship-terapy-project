import { FaRegCalendarTimes } from "react-icons/fa";
import { BsCameraVideoOff } from "react-icons/bs";
import { TbMessages } from "react-icons/tb";
import { CiPercent } from "react-icons/ci";

const datas = [
  {
    title: "15 Gün İçinde İade İmkanı",
    description: "15 gün içinde iade İmkanı",
    icon: <CiPercent className="stroke-]" />,
  },
  {
    title: "Güvendesiniz, Endişelenmeyin",
    description:
      "Terapizone kişisel bilgilerinizi ve video görüşmelerinizi korur.",
    icon: <BsCameraVideoOff className="stroke" />,
  },
  {
    title: "24 Saate Kadar Seans İptali",
    description:
      "planlarda değişiklik olduğunda, seansınıza 24 saat kalana kadar iptal edebilirsiniz.",
    icon: <FaRegCalendarTimes className="stroke-0" />,
  },
  {
    title: "7/24 Canlı Destek",
    description:
      "Terapizone, ihtiyacınız olduğu her an size destek olmak için yanınızda.",
    icon: <TbMessages className="stroke-1" />,
  },
];

export default datas;
