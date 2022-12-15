import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getData, productSelector } from './features/productSlice';

import Footer from './Footer';
import Navbar from './Navbar';

const Dashboard = () => {
  const [detail, setDetail] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector(productSelector.selectAll);

  const handleDetail = (item) => {
    setDetail(item);
    setShowModal(true);
    // console.log(item);
    // console.log(detail);
  };

  useEffect(() => {
    dispatch(getData());
    // console.log(detail);
  }, [dispatch]);

  useEffect(() => {
    console.log('showForm', showForm);
  }, [detail, showForm]);

  return (
    <>
      <div className="bg-gradient-to-b from-dark-blue to-cyan-600 h-full w-full min-w-screen min-h-screen px-14">
        <Navbar />
        {/* welcome text */}
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-xl text-white">
            {location.state && (
              <>
                <span>Hai, &nbsp;</span>
                <span className="font-semibold">{location.state.data.email} </span>
              </>
            )}
          </h1>
          <button onClick={() => navigate('/add-job')} className="rounded-3xl font-semibold bg-slate-200 px-3 py-2 hover:bg-sky-500 hover:text-white">
            + Buat Lowongan Kerja
          </button>
        </div>
        {/* akhir welcome text */}

        <div className="container flex flex-wrap pb-12">
          {/* sidebar filter */}
          <aside className="min-[0px]:max-lg:hidden flex-col rounded bg-white overflow-y-scroll  top-0 bottom-0 max-h-128">
            <div className=" p-4 ">
              <div className=" border-b-2 border-slate-400 ">
                <label className="font-semibold">Pengalaman Kerja</label>

                <div className="flex items-center my-4">
                  <input
                    id="<1"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="<1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                    Kurang dari 1 Tahun
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="1-3"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="1-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                    1 - 3 Tahun
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="3-5"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="3-5" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                    3 - 5 Tahun
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id=">5"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor=">5" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                    Lebih dari 5 Tahun
                  </label>
                </div>
              </div>
              <div className=" border-b-2 border-slate-400 ">
                <label className="font-semibold">Tipe Pekerjaan</label>

                <div className="flex items-center my-4">
                  <input
                    id="magang"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="magang" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                    Magang
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="full"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="full" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                    Full-time
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="part"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="part" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                    Part-time
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="freelance"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="freelance" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                    Freelance
                  </label>
                </div>
              </div>
            </div>
          </aside>
          {/* Akhir Sidebar filter */}

          {/* Halaman Content */}
          <div className="w-3/4 flex flex-wrap gap-4">
            {product &&
              product.map((item) => (
                <div key={item.id} onClick={() => handleDetail(item)} className="rounded text-black overflow-hidden shadow-lg w-96 outline outline-sky-400 bg-slate-100 hover:bg-blue-400 hover:text-white mx-4 hover:cursor-pointer">
                  <div className="text-start">
                    <div className="px-6 py-4 ">
                      <span className="font-bold text-xl mb-2">{item.posisi}</span>
                      <p className=" text-base">{item.nama_perusahaan}</p>
                      <p className=" text-base">{item.alamat}</p>
                      <p className=" text-base">IDR {item.gaji}</p>
                    </div>
                    <div className="px-6 pt-4 py-4">
                      {item.tag?.map((data, index) => {
                        return (
                          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            # {data}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {/* Akhir Content */}

          {/* Modal Detail Job */}
          {showModal && (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    {detail && (
                      <>
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="max-w-96 text-lg font-semibold items-center self-center">{detail.posisi}</h3>
                          <button className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                            <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <>
                            <p className="mb-4 text-md">
                              <span className="font-semibold">{detail.nama_perusahaan}</span>
                              <br />
                              {detail.alamat}
                            </p>
                            <p className="my-4 text-md">
                              <span className="font-semibold">Deskripsi Pekerjaan:</span>
                              <br /> {detail.job_desc}
                            </p>
                            <p className="my-4 text-md">
                              <span className="font-semibold">Gaji:</span>
                              <br /> {detail.gaji}
                            </p>
                          </>
                        </div>
                      </>
                    )}
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Lamar Sekarang
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          )}

          {/* Modal Form Add Job */}
          {showForm && (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}

                    <>
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-xl font-semibold self-center ">Buat Pekerjaan Baru</h3>
                        <button className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowForm(false)}>
                          <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                        </button>
                      </div>
                      {/*body*/}
                      <form className="space-y-6 p-10" action="#">
                        <div className="relative z-0 mb-6 w-full group">
                          <input
                            type="text"
                            name="nama_perusahaan"
                            id="nama_perusahaan"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            htmlFor="nama_perusahaan"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Nama Perusahaan
                          </label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                          <input
                            type="text"
                            name="alamat_perusahaan"
                            id="alamat_perusahaan"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            htmlFor="alamat_perusahaan"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Alamat Perusahaan
                          </label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            htmlFor="email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email Perusahaan
                          </label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                          <input
                            type="text"
                            name="posisi"
                            id="posisi"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            htmlFor="posisi"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Posisi
                          </label>
                        </div>

                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowForm(false)}
                          >
                            Close
                          </button>
                          <button
                            className="bg-cyan-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowForm(false)}
                          >
                            Buat Pekerjaan
                          </button>
                        </div>
                      </form>
                    </>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
