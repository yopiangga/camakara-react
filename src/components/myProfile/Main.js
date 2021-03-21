
import { FaPencilAlt } from 'react-icons/fa'
import Yopiangga from '../../assets/images/yopiangga.jpg'
import example from '../../assets/images/example.jpg'
import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../pages/userContext'
import axios from 'axios'
import { useHistory } from "react-router-dom";


export function Main() {

    let history = useHistory();

    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl] = useContext(UserContext);

    const [univ, setUniv] = useState([]);
    const [prodi1, setProdi1] = useState([]);
    const [prodi2, setProdi2] = useState([]);

    // const [uploadData, setUploadData] = useState({});

    useEffect( () => {

        axios.get(`${url.api}univ`).then(
            (res) => {
                setUniv(res.data.data);
            }
        ).catch((err) => {
            console.log(err);
        })

        if(user == null){
            history.push('/login');
        } 
        
    }, [])

    const handleChange = (event) => {
        event.preventDefault();

        setDetailUser({
            ...detailUser,
            [event.target.name] : event.target.value
        })
    }
    
    console.log(detailUser);
    
    const handleUpdate = (event) => {
        event.preventDefault();

        axios({
            method: "post",
            url: `${url.api}user/update/${detailUser.id_user}`,
            data: {
                firstname   : detailUser.firstname,
                lastname    : detailUser.lastname,
                fullname    : `${detailUser.firstname} ${detailUser.lastname}`,
                telp        : detailUser.telp,
                school      : detailUser.school,
                graduate    : detailUser.school,
                province_id : 1,
                regency_id  : 2,
                address     : detailUser.address,
                univ1_id    : detailUser.univ1_id,
                univ2_id    : detailUser.univ2_id,
                prodi1_id   : detailUser.prodi1_id,
                prodi2_id   : detailUser.prodi2_id
                // image       : "66"
            },
            headers: { 
                "Authorization" : `Bearer ${user.token}`
            }
        }).then(
            (res) => {
                // console.log(detailUser);
            }
        ).catch((err) => {
            console.log(err);
        })
    }

    const handleProdi1 = () => {
        const id = detailUser.univ1_id;

        axios.get(`${url.api}prodi/get/${id}`).then(
            (res) => {
                setProdi1(res.data.data);
            }
        ).catch((err) => {
            console.log(err);
        })
    }

    const handleProdi2 = () => {
        const id = detailUser.univ2_id;

        axios.get(`${url.api}prodi/get/${id}`).then(
            (res) => {
                setProdi2(res.data.data);
            }
        ).catch((err) => {
            console.log(err);
        })
    }


    return (
        <div>
            <section className="main">
                <div className="content">
                    <div className="content-heading">
                        <div className="img-profile">
                            <div className="circle-image">
                                <img src={Yopiangga} />
                            </div>
                            <div type="file" className="circle-edit">
                                {/* <FaPencilAlt /> */}
                            </div>
                            
                        </div>
                        <div className="title-profile">
                            <h1>{detailUser.fullname ? detailUser.fullname : "User"}</h1>
                            <h4>{detailUser.school ? detailUser.school : "-"}</h4>
                        </div>
                    </div>
                    <div className="content-body">
                        <form onSubmit={handleUpdate}>
                            <div className="form">
                                <div className="form-left">
                                    <h2>Data Pribadi</h2>
                                    <hr />
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Nama Depan</label>
                                                <input type="text" placeholder="Alfian" name="firstname" value={detailUser.firstname} onChange={handleChange}/>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Nama Belakang</label>
                                                <input type="text" placeholder="Yopiangga" name="lastname" value={detailUser.lastname} onChange={handleChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="text" placeholder="user@gmail.com" name="email" value={detailUser.email} onChange={handleChange}/>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>No Telephone</label>
                                                <input type="text" placeholder="0823 xxxx xxxx" name="telp" value={detailUser.telp} onChange={handleChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Sekolah</label>
                                                <input type="text" placeholder="SMKN 1 KEDIRI" name="school" value={detailUser.school} onChange={handleChange}/>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Tahun Lulus</label>
                                                <input type="text" placeholder="2020" name="graduate" value={detailUser.graduate} onChange={handleChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Provinsi</label>
                                                <input type="text" onChange={handleChange}/>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Kota / Kabupaten</label>
                                                <input type="text" onChange={handleChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Alamat</label>
                                        <textarea type="text" name="address" value={detailUser.address} onChange={handleChange}></textarea>
                                    </div>
                                </div>
                                <div className="form-right">
                                    <h2>Pilihan Universitas</h2>
                                    <hr />

                                    <div className="pilihan-universitas">
                                        <h4>Pilihan Pertama</h4>
                                        <div className="content-universitas">
                                            <div className="image">
                                                <img src={example} />
                                            </div>
                                            <div className="form-group">
                                                <select name="univ1_id" value={detailUser.univ1_id} onChange={handleChange}>
                                                    {
                                                        univ.map(function (el, idx){
                                                            return(
                                                                <option value={el.univ_id} key={idx}>{el.name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                                <select name="prodi1_id" value={detailUser.prodi1_id} onChange={handleChange} onClick={handleProdi1}>
                                                    {
                                                        prodi1.map(function (el, idx){
                                                            return(
                                                                <option value={el.id_jurusan} key={idx}>{el.name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pilihan-universitas">
                                        <h4>Pilihan Kedua</h4>
                                        <div className="content-universitas">
                                            <div className="image">
                                                <img src={example} />
                                            </div>
                                            <div className="form-group">
                                                <select name="univ2_id" value={detailUser.univ2_id} onChange={handleChange}>
                                                {
                                                        univ.map(function (el, idx){
                                                            return(
                                                                <option value={el.univ_id} key={idx}>{el.name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                                <select name="prodi2_id" value={detailUser.prodi2_id} onChange={handleChange} onClick={handleProdi2}>
                                                {
                                                        prodi2.map(function (el, idx){
                                                            return(
                                                                <option value={el.id_jurusan} key={idx}>{el.name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn-simpan" type="submit">Simpan</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}