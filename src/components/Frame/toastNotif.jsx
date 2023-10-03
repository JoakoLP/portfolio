import { BsCheckLg, BsFillExclamationTriangleFill } from "react-icons/bs";
import { Toast } from "flowbite-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const ToastNotif = ({ toast, setToast }) => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (toast.status) {
      setTimeout(() => {
        if (toast.status) {
          setToast({ status: false });
        }
      }, 3000);
    }
  }, [toast]);

  const toastChecker = () => {
    switch (toast.type) {
      case "submit":
        return (
          <>
            <div className="inline-flex items-center justify-center w-8 h-8 text-green-500 bg-green-100 rounded-lg shrink-0 dark:bg-green-800 dark:text-green-200">
              <BsCheckLg />
            </div>
            <p className="ml-3 select-none">{t("contactConfirm")}</p>
          </>
        );
        break;

      case "error":
        return (
          <>
            <div className="inline-flex items-center justify-center w-8 h-8 text-red-500 bg-red-100 rounded-lg shrink-0 dark:bg-red-800 dark:text-red-200">
              <BsFillExclamationTriangleFill />
            </div>
            <p className="ml-3 select-none">{t("contactError")}</p>
          </>
        );
        break;
      default:
        break;
    }
  };

  return (
    <Toast
      className={`${
        toast.status ? "visible opacity-100" : "opacity-0 translate-x-full invisible"
      } fixed text-black dark:text-white rounded-sm z-[100]  bg-white/75 dark:bg-slate-950 right-10 bottom-10 transition-all duration-300 ease-in-out`}
    >
      {toastChecker()}
      <Toast.Toggle onDismiss={() => setToast({ status: false })} className="bg-white/0 dark:bg-slate-950" />
      <div className="absolute left-0 flex items-end w-full h-full overflow-hidden rounded-sm pointer-events-none">
        <div className={`${toast.status ? "bg-purple-500" : "bg-slate-950 duration-0 -translate-x-[200%]"} w-full transition-all duration-[3000ms] ease-out h-1  `}></div>
      </div>
    </Toast>
  );
};

export default ToastNotif;
