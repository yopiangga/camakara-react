
import { FaPencilAlt } from 'react-icons/fa'
import Yopiangga from '../../assets/images/yopiangga.JPG'
import example from '../../assets/images/example.jpg'
import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../pages/userContext'
import axios from 'axios'
import { useHistory } from "react-router-dom";


export function Main() {

    let history = useHistory();

    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl] = useContext(UserContext);

    useEffect( () => {

        if(user == null){
            history.push('/login');
        } 
        
    }, [])

    const handleChange = (event) => {
        event.preventDefault();
    }

    const handleUpdate = (event) => {
        event.preventDefault();
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
                            <div className="circle-edit">
                                <FaPencilAlt />
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
                                                <input type="text" placeholder="Alfian" value={detailUser.firstname} onChange={handleChange}/>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Nama Belakang</label>
                                                <input type="text" placeholder="Yopiangga" value={detailUser.lastname} onChange={handleChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="text" placeholder="user@gmail.com" value={detailUser.email} onChange={handleChange}/>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>No Telephone</label>
                                                <input type="text" placeholder="+62 823 xxxx xxxx" value={detailUser.telp} onChange={handleChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Sekolah</label>
                                                <input type="text" placeholder="SMKN 1 KEDIRI" value={detailUser.school} onChange={handleChange}/>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Tahun Lulus</label>
                                                <input type="text" placeholder="2020" value={detailUser.graduate} onChange={handleChange}/>
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
                                        <textarea type="text" onChange={handleChange}></textarea>
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
                                                <select name="" id="" onChange={handleChange}>
                                                    <option>Nama Universitas</option>
                                                </select>
                                                <select name="" id="" onChange={handleChange}>
                                                    <option>Program Studi</option>
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
                                                <select name="" id="" onChange={handleChange}>
                                                    <option>Nama Universitas</option>
                                                </select>
                                                <select name="" id="" onChange={handleChange}>
                                                    <option>Program Studi</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn-simpan">Simpan</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}