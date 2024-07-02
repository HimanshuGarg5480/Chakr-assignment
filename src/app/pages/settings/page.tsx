import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-primary mx-auto flex min-h-screen w-full flex-col gap-4 px-[18px] py-10">
        <h2 className="text-3xl font-medium text-slate-100">Settings</h2>
        <div className="flex flex-col gap-3">
          <button className="bg-light hover:bg-light/70 flex w-full items-center gap-2 rounded-lg px-3 py-3 text-slate-100 transition-colors duration-300 active:opacity-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-slate-200"
            >
              <path d="M7.0943 5.68009L18.3199 16.9057C19.3736 15.5506 20 13.8491 20 12C20 7.58172 16.4183 4 12 4C10.1509 4 8.44939 4.62644 7.0943 5.68009ZM16.9057 18.3199L5.68009 7.0943C4.62644 8.44939 4 10.1509 4 12C4 16.4183 7.58172 20 12 20C13.8491 20 15.5506 19.3736 16.9057 18.3199ZM4.92893 4.92893C6.73748 3.12038 9.23885 2 12 2C17.5228 2 22 6.47715 22 12C22 14.7611 20.8796 17.2625 19.0711 19.0711C17.2625 20.8796 14.7611 22 12 22C6.47715 22 2 17.5228 2 12C2 9.23885 3.12038 6.73748 4.92893 4.92893Z"></path>
            </svg>
            <span>Blocked Accounts</span>
          </button>
          <button className="bg-light hover:bg-light/70 flex w-full items-center gap-2 rounded-lg px-3 py-3 text-slate-100 transition-colors duration-300 active:opacity-75">
            <svg
              className="h-5 w-5 fill-slate-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V18H18V10ZM20 18.6667L20.4 19.2C20.5657 19.4209 20.5209 19.7343 20.3 19.9C20.2135 19.9649 20.1082 20 20 20H4C3.72386 20 3.5 19.7761 3.5 19.5C3.5 19.3918 3.53509 19.2865 3.6 19.2L4 18.6667V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V18.6667ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"></path>
            </svg>
            <span>Notifications</span>
          </button>
          <button className="active:opacity-75 bg-light hover:bg-light/70 flex w-full items-center gap-2 rounded-md px-3 py-3 text-slate-100 transition-colors duration-300">
            <svg
              className="h-5 w-5 fill-slate-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M10.9999 2.04932L11 4.06182C7.05371 4.5539 4 7.9203 4 11.9999C4 16.4182 7.58172 19.9999 12 19.9999C13.8487 19.9999 15.5509 19.3729 16.9055 18.3199L18.3289 19.7427C16.605 21.1535 14.4014 21.9999 12 21.9999C6.47715 21.9999 2 17.5228 2 11.9999C2 6.81462 5.94662 2.55109 10.9999 2.04932ZM21.9506 13C21.7509 15.011 20.9555 16.8467 19.7433 18.3282L18.3199 16.9055C19.1801 15.7989 19.756 14.4606 19.9381 12.9999L21.9506 13ZM13.0011 2.04942C17.725 2.51895 21.4815 6.27583 21.9506 10.9998L19.9381 11C19.4869 7.38156 16.6192 4.51358 13.001 4.06194L13.0011 2.04942Z"></path>
            </svg>
            <span>Privacy Policy</span>
          </button>
          <button className="active:opacity-75 bg-light hover:bg-light/70 flex w-full items-center gap-2 rounded-md px-3 py-3 text-slate-100 transition-colors duration-300">
            <svg
              className="h-5 w-5 fill-slate-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M17 4C20.3137 4 23 6.68629 23 10V14C23 17.3137 20.3137 20 17 20H7C3.68629 20 1 17.3137 1 14V10C1 6.68629 3.68629 4 7 4H17ZM17 6H7C4.8578 6 3.10892 7.68397 3.0049 9.80036L3 10V14C3 16.1422 4.68397 17.8911 6.80036 17.9951L7 18H17C19.1422 18 20.8911 16.316 20.9951 14.1996L21 14V10C21 7.8578 19.316 6.10892 17.1996 6.0049L17 6ZM10 9V11H12V13H9.999L10 15H8L7.999 13H6V11H8V9H10ZM18 13V15H16V13H18ZM16 9V11H14V9H16Z"></path>
            </svg>
            <span>Terms of service</span>
          </button>
          <button className="active:opacity-75 bg-light hover:bg-light/70 flex w-full items-center gap-2 rounded-md px-3 py-3 text-slate-100 transition-colors duration-300">
            <svg
              className="h-5 w-5 fill-slate-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"></path>
            </svg>
            <span>Dark Theme</span>
            <div className="ml-auto shrink-0">
              <label htmlFor="theme" className="relative cursor-pointer">
                <input type="checkbox" hidden id="theme" className="peer" />
                <div className="flex h-6 w-10 items-center rounded-full border border-slate-600 bg-slate-700 transition-colors duration-300 peer-checked:bg-green-500 peer-checked:border-green-500  shadow-inner "></div>
                <div className="absolute top-1 ml-1 h-4 w-4 rounded-full bg-white transition-all peer-checked:translate-x-4"></div>
              </label>
            </div>
          </button>
          <button className="active:opacity-75 bg-light hover:bg-light/70 flex w-full items-center gap-2 rounded-md px-3 py-3 text-slate-100 transition-colors duration-300">
            <svg
              className="h-5 w-5 fill-slate-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"></path>
            </svg>
            <span>Community guidelines</span>
          </button>
          <button className="active:opacity-75 bg-light hover:bg-light/70 flex w-full items-center gap-2 rounded-md px-3 py-3 text-slate-100 transition-colors duration-300">
            <svg
              className="h-5 w-5 fill-slate-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z"></path>
            </svg>
            <span>Support</span>
          </button>
          <button className=" active:opacity-75 bg-light hover:bg-light/70 flex w-full items-center gap-2 rounded-md px-3 py-3 text-red-500 transition-colors duration-300">
            <svg
              className="h-5 w-5 fill-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"></path>
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
