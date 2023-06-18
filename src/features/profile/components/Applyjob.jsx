export default function Applyjob() {
  return (
    <>
      <div className="flex">
        <div className=" h-[100vh] basis-1/2 overflow-auto">
          <p className="p-4 text-sm">
            สมัครงานตำแหน่ง
            <span className="font-bold"> Web Developer</span> ที่
            <span className="font-bold"> Jobseekr LTD. Thailand</span>
          </p>
          <div className="flex flex-col gap-4 items-center">
            <div className="card w-[45rem] bg-base-100 shadow-xl ">
              <div className="card-body">
                <div className="flex justify-between">
                  <h1 className="card-title ">JOE DOE</h1>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" />
                    </div>
                  </div>
                </div>
                <p>john.D@gmail.com</p>
                <p>099-xxx-xxxx</p>
                <p>New Graduated</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline btn-primary">
                    แก้ไขข้อมูลโปรไฟล์
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-[45rem] bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">เรซูเม่</h2>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-primary w-full max-w-2xl"
                />
              </div>
            </div>
            <div className="card w-[45rem] bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  จดหมายสมัครงาน (ไม่จำเป็นต้องระบุ)
                </h2>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-primary w-full max-w-2xl"
                />
              </div>
            </div>
            <div className="card w-[45rem] bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">เงินเดือนที่คาดหวัง</h2>
                <input
                  type="text"
                  placeholder="THB"
                  className="input input-bordered input-primary w-full max-w-2xl"
                />
              </div>
            </div>
            <div className="card w-[45rem] bg-base-100 shadow-xl">
              <div className="card-body">
                <button className="btn btn-primary w-[8rem] ">
                  ส่งใบสมัคร
                </button>
                <div className="text-sm">
                  <p className="mt-2">
                    เมื่อคลิก ส่งใบสมัครงาน คุณได้รับทราบว่าข้อมูลส่วนบุคคล
                    และใบสมัครงานของคุณจะถูกส่งไปยัง JobSeekrr LTD. (Thailand)
                    โดยการใช้งานจะเป็นไปตามมาตรการด้านข้อมูลส่วนบุคคลที่ระบุอยู่ใน
                    <a className="text-blue-600 " href="#">
                      {" "}
                      คำชี้แจงสิทธิส่วนบุคคล{" "}
                    </a>
                    ของเรา กรุณาระบุข้อมูลที่จำเป็นเท่านั้น
                    โปรดอย่ากรอกหรืออัปโหลดเอกสารที่ระบุตัวตน ข้อมูลทางการเงิน
                    ข้อมูลอื่น ๆ ที่มีความอ่อนไหว เช่น ศาสนาหรือเชื้อชาติ
                  </p>
                  <div className="mt-2"></div>
                  <hr />
                  <p className="mt-2">
                    ใบสมัครงานของคุณจะถูกส่งโดยตรงไปยัง JobSeekrr LTD.
                    (Thailand)
                    ระวังประกาศงานเท็จเพื่อเรียกเก็บเงินจากคุณโดยมิชอบด้วยกฎหมาย
                    ผู้ประกอบการไม่ควรขอให้คุณชำระเงินเพื่อสมัครงาน ดังนั้น
                    กรุณาอย่าให้รายละเอียดบัญชีธนาคารหรือบัตรเครดิตของคุณกับผู้ประกอบการใด
                    ๆ
                    โดยเด็ดขาดการลงประกาศงานเท็จเป็นการฝ่าฝืนเงื่อนไขการใช้งานของจ็อบส์ซีกเกอร์
                    หากพบเห็นประกาศงานลักษณะดังกล่าว กรุณาแจ้งมาที่
                    <a className="text-blue-600 " href="#">
                      {" "}
                      support@jobseekr.co.th{" "}
                    </a>
                    ข้อมูลของคุณจะถูกส่งไปยังผู้ประกอบการรายนี้เท่านั้น
                    จ็อบส์ซีกเกอร์ จะไม่เปิดเผยข้อมูลของคุณแก่บุคคลอื่น
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-200 h-[100vh] basis-1/2 overflow-auto p-4">
          <div className="text-lg">
            ลงประกาศวันที่ <span>30 May 2023</span>
          </div>
          <div className="text-lg">$45,000</div>
          <div className="text-lg">ปทุมวัน</div>
          <div>รายละเอียดงาน</div>

          <div className="border border-blue-600 rounded-md p-8 h-[24rem]">
            <p>
              Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.
              Sapiente ducimus harum culpa. Aperiam facilis ullam aut? Molestiae
              modi fugiat molestias asperiores aperiam consequuntur laborum, at
              facilis voluptates totam cupiditate quam!
            </p>
            <button className="btn btn-outline btn-primary">
              อ่านเพิ่มเติม
            </button>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}
