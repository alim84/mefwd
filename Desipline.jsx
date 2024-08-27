import React from "react";

const Desipline = () => {
  return (
    <>
      <form action="" method="POST">
        <div className=" w-[1200px]  mx-auto bg-cyan-900 py-5 px-5 mt-10 rounded-lg shadow-2xl shadow-gray-400">
          <div className="mb-12 text-center font-bold text-2xl text-yellow-200">
            <h1 className="py-4">মামলা সংক্রান্ত তথ্য</h1>
            <hr></hr>
          </div>
          <div>
            <div className="grid-cols-3 justify-between mx-auto  mt-10 p-5 outline-gray-400 outline outline-3 border-2 border-r-rose-500 border-b-rose-500/75  border-l-rose-500/50  border-t-rose-500/25 w-[800px]">
              <h3 className="absulate top-0 left-0 translate-y-[-32px] bg-cyan-900 inline-block px-2 text-yellow-200">
                তথ্য পূরণ করুন
              </h3>
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">
                    কর্মকর্তা/কর্মচারীর নাম নাম :
                  </level>

                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="কর্মকর্তার নাম"
                    type="text"
                    name="emname"
                  ></input>
                </div>
                <div>
                  <level className="text-yellow-200 block">পদবি :</level>
                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="পদবি"
                    type="text"
                    name="designation"
                  ></input>
                </div>
              </div>{" "}
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">পরিচিতি কোড :</level>

                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="পরিচিতি কোড"
                    type="text"
                    name="emname"
                  ></input>
                </div>
                <div>
                  <level className="text-yellow-200 block">
                    মামলার বিবরণ:{" "}
                  </level>
                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="মামলার বিবরণ"
                    type="text"
                    name="designation"
                  ></input>
                </div>
              </div>{" "}
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">
                    প্রতিষ্ঠানের নাম :
                  </level>

                  <select
                    className="rounded-lg text-balance border-none hover:border-indigo-300 py-2 px-5"
                    id="institute"
                    name="institute"
                  >
                    <option>নির্বাচন করুন</option>
                    <option>স্বাস্থ্য শিক্ষা ও পরিবার কল্যাণ বিভাগ</option>
                    <option>পরিবার পরিকল্পনা অধিদপ্তর</option>
                    <option>স্বাস্থ্য শিক্ষা অধিদপ্তর</option>
                    <option>
                      জাতীয় জনসংখ্যা গবেষণা ও প্রশিক্ষণ ইনস্টিটিউট (নিপোর্ট)
                    </option>
                  </select>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200 block">মামলার ধরন :</level>

                  <select
                    className="rounded-lg  border-none hover:border-indigo-300 py-2 px-5"
                    id="catagory"
                    name="catagory"
                  >
                    <option>নির্বাচন করুন</option>
                    <option>সর্তকতা মুলক</option>
                    <option>ইনক্রিমেন্ট স্থগিত</option>
                  </select>
                </div>
              </div>
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">সন :</level>

                  <select
                    className="rounded-lg  border-none hover:border-indigo-300 py-2 px-5"
                    id="year"
                    name="year"
                  >
                    <option>নির্বাচন করুন</option>
                    <option>২০২৪</option>
                    <option>২০২৩</option>
                    <option>২০২২</option>
                    <option>২০২১</option>
                  </select>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200 block">শাস্তির ধরন :</level>

                  <select
                    className="rounded-lg  border-none hover:border-indigo-300 py-2 px-5"
                    id="panishcatagory"
                    name="panishcatagory"
                  >
                    <option>নির্বাচন করুন</option>
                    <option>সতকর্তামূলক</option>
                    <option>ইনক্রিমেন্টজনিত</option>
                    <option>নিম্নধাপ</option>
                  </select>
                </div>
              </div>{" "}
            </div>
            <button className="py-2 px-16 bg-yellow-200 rounded-lg mt-12 font-bold text-gray-600 hover:bg-indigo-600 hover:text-white flex mx-auto justify-center">
              সংরক্ষণ করুন
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Desipline;
