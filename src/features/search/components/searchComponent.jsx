import { useEffect, useState } from "react";
import SearchBar from "../../../layouts/SearchContainer";
import Jobcard from "../../jobelement/Jobcard";
import { searchJob } from "../../../api/auth-api";
export default function SearchComponent() {
  const [searchValue, setSearchValue] = useState("");

  // useEffect(()=>{
  //   const id = setTimeout(()=> {
  //     searchJob({search : searchValue}).then()
  //   })
  // })

  return (
    <>
      <SearchBar />
      <div className="flex">
        <div className="bg-blue-600 h-[100vh] basis-2/5 overflow-auto">
          <p className="p-1">
            <span className="font-bold">1 - 30</span> จาก
            <span className="font-bold"> 1,200 </span>
            ตำแหน่งงาน
          </p>
          <div className="flex flex-col gap-4 items-center">
            {/* {state.map((el) => (
              <div className="card w-[36rem] bg-base-100 shadow-xl ">
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            ))} */}

            <div className="card w-[36rem] bg-base-100 shadow-xl ">
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div className="card w-[36rem] bg-base-100 shadow-xl ">
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div className="card w-[36rem] bg-base-100 shadow-xl ">
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div className="card w-[36rem] bg-base-100 shadow-xl ">
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div className="card w-[36rem] bg-base-100 shadow-xl ">
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div className="card w-[36rem] bg-base-100 shadow-xl ">
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-500 h-[100vh] basis-3/5 overflow-auto">
          <div className="flex flex-col">
            <button className="btn btn-accent w-[8rem] font-bold text-white m-2">
              สมัครงาน
            </button>
            <img
              className="h-[18rem]"
              src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
            <div>
              <div className="p-4">
                <h2 className="card-title">
                  Position
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <h3>Company</h3>
                <p>Location</p>
                <p>Salary</p>
                <p>createdAt</p>
              </div>
              <div>
                <div className="p-4 bg-slate-400">
                  <h4>job highlight</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam corporis architecto natus accusamus amet, error
                    dolore animi quam magnam fugit aut dolor neque incidunt
                    saepe nisi fugiat aliquam enim exercitationem?
                  </p>
                </div>
                <div className="p-4">
                  <h4>job details</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Necessitatibus nihil quos eligendi enim? Sint voluptatibus
                    laborum deleniti laudantium itaque animi minima deserunt
                    maiores dignissimos voluptatum quos quis, iure, et impedit?
                  </p>
                </div>
                <div className="px-4  bg-gray-500">
                  <h4>Company desciption</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum voluptatibus vero obcaecati consequuntur adipisci
                    deleniti cumque, error libero minus sapiente corrupti
                    temporibus quod consectetur, repellendus placeat provident a
                    numquam eos!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
