import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addJob } from './features/productSlice';
import Footer from './Footer';

const AddJobForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [posisi, setPosisi] = useState('');
  const [job_desc, setJobDesc] = useState('');
  const [gaji, setGaji] = useState('');
  const [requirement, setRequirement] = useState('');
  const [tag, setTag] = useState([]);
  const [nama_perusahaan, setNamaPerusahaan] = useState('');
  const [alamat, setAlamat] = useState('');
  const [email, setEmail] = useState('');

  function handleKeyDown(e) {
    if (e.key === 'Enter' || e.key === ',') {
      const value = e.target.value;
      if (value.trim()) {
        e.preventDefault();
        setTag([...tag, value]);
        e.target.value = '';
      }
    }
  }

  function removeTag(index) {
    setTag(tag.filter((el, i) => i !== index));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addJob({ posisi, job_desc, gaji, requirement, tag, nama_perusahaan, alamat, email }));
    navigate('/dashboard');
  };

  return (
    <div className="bg-light-blue">
      <button className="bg-dark-blue text-white px-3 py-2 rounded mt-8 ml-8" onClick={() => navigate('/dashboard')}>
        Kembali
      </button>
      <div className="w-3/4 mx-auto p-10 bg-dark-blue my-8 rounded">
        <h1 className="text-center text-xl font-semibold text-white mb-8">Buat Lowongan Kerja Baru</h1>
        <form onSubmit={handleSubmit}>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="nama_perusahaan"
              id="nama_perusahaan"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => {
                setNamaPerusahaan(e.target.value);
              }}
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
              onChange={(e) => {
                setAlamat(e.target.value);
              }}
              required
            />
            <label
              htmlFor="alamat_perusahaan"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Alamat Perusahaan (Kota)
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="email_perusahaan"
              id="email_perusahaan"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <label
              htmlFor="email_perusahaan"
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
              onChange={(e) => {
                setPosisi(e.target.value);
              }}
              required
            />
            <label
              htmlFor="posisi"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Lowongan Untuk Posisi
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <label htmlFor="gaji" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Gaji yang ditawarkan
            </label>

            <input
              type="text"
              id="gaji"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
              placeholder="3X.XXX.XXX"
              onChange={(e) => {
                setGaji(e.target.value);
              }}
            />
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <label htmlFor="deskripsi_pekerjaan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Deskripsi Pekerjaan
            </label>
            <textarea
              id="deskripsi_pekerjaan"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="cth.
               - Membangun aplikasi berbasis web ..."
              onChange={(e) => {
                setJobDesc(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <label htmlFor="req_pekerjaan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Persyaratan
            </label>
            <textarea
              id="req_pekerjaan"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="cth.
               - Minimum 2 Tahun pengalaman di bidang yang sama ..."
              onChange={(e) => {
                setRequirement(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <div>
              <label htmlFor="tag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tag <span className="font-normal text-xs">(Gunakan koma (,) atau tekan enter untuk input)</span>
              </label>

              <input
                onKeyDown={handleKeyDown}
                type="text"
                id="tag"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
                placeholder="Masukkan Tag"
              />

              {tag.map((tags, index) => (
                <div className="inline bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2" key={index}>
                  <span className="text">{tags}</span>
                  <span className=" p-1 cursor-pointer" onClick={() => removeTag(index)}>
                    &times;
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buat Lowongan
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddJobForm;
