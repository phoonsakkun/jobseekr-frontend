export default function EditProfileForm() {
  return (
    <>
      <div className="navbar bg-blue-200 h-fit  px-[4rem] py-4 ">
        <div className="flex-1 ">
          <div className="flex-col">
            <h1 className="font-bold text-4xl text-white ">JOHN DOE</h1>
            <h5 className="m-2 text-white">Pathumwan, Bangkok</h5>
            <h5 className="m-2 text-white">John.D@gmail.com</h5>
            <button className="btn btn-outline btn-primary  m-2">
              แก้ไขข้อมูลโปรไฟล์
            </button>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className=" avatar w-[14rem]">
              <div className=" rounded-full cursor-pointer ">
                <img src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-fit"
            >
              <li>
                <a>เปลี่ยนรูปภาพโปรไฟล์</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="bg-slate-500 h-[100vh] basis-3/5 overflow-auto">
          <div className="flex flex-col items-center ">
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />

              <div className="drawer-content">
                {/* Page content here */}
                <div className="card w-[45rem] bg-base-100 shadow-xl mt-4">
                  <div className="card-body">
                    <h2 className="card-title">ccc</h2>
                    <div className="drawer-content">
                      <label
                        htmlFor="my-drawer-4"
                        className="drawer-button btn btn-primary"
                      >
                        Open drawer
                      </label>
                    </div>
                  </div>
                </div>

                <div className="card w-[45rem] bg-base-100 shadow-xl mt-4">
                  <div className="card-body">
                    <h2 className="card-title">ddd</h2>
                    <div className="drawer drawer-end">
                      <input
                        id="my-drawer-5"
                        type="checkbox"
                        className="drawer-toggle"
                      />
                      <div className="drawer-content">
                        {/* Page content here */}
                        <label
                          htmlFor="my-drawer-5"
                          className="drawer-button btn btn-primary"
                        >
                          Open drawer
                        </label>
                      </div>

                      <div className="drawer-side">
                        <label
                          htmlFor="my-drawer-5"
                          className="drawer-overlay"
                        ></label>
                        <ul className="menu p-4 w-[60%] h-full bg-base-200 text-base-content">
                          {/* Sidebar content here */}
                          <li>
                            <a>Sidebar Item 3</a>
                          </li>
                          <li>
                            <a>Sidebar Item 4</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <ul className="menu p-4 w-[60%] h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <li>
                    <a>Sidebar Item 1</a>
                  </li>
                  <li>
                    <a>Sidebar Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 h-[100vh] basis-2/5 overflow-auto"></div>
      </div>
    </>
  );
}
