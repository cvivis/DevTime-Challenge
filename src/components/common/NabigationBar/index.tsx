import Link from "next/link";
import Image from "next/image";

const NavigationBar = () => {
  const NAV_ITEMS = [
    { label: "대시보드", href: "/dashboard" },
    { label: "랭킹", href: "/ranking" },
  ];
  const AUTH_ITEMS = [
    { label: "로그인", href: "/login" },
    { label: "회원가입", href: "/signup" },
  ];
  return (
    <nav className=" flex flex-row justify-center w-full bg-white  font-['Pretendard'] font-weght-600 font-bold text-[16px] font-height-20px text-indigo-dark">
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center mr-[48px] gap-9 ">
          <Link href={"/"}>
            <Image
              src="/RowLogo.svg"
              alt="backgroundImage"
              width={100}
              height={100}
              className="pointer-events-none"
            />
          </Link>
          <div className="flex items-center gap-9 ">
            <ul className="flex items-center  gap-9">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[16px]hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-9 ">
          {AUTH_ITEMS.map((item) => (
            <Link href={item.href} className="text-[16px]  hover:text-blue-600">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
