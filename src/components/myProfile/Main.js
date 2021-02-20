
import { FaPencilAlt } from 'react-icons/fa'
import Yopiangga from '../../assets/images/yopiangga.JPG'
import example from '../../assets/images/example.jpg'

export function Main() {
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
                            <h1>Alfian Prisma Yopiangga</h1>
                            <h4>SMKN 1 KEDIRI</h4>
                        </div>
                    </div>
                    <div className="content-body">
                        <form>
                            <div className="form">
                                <div className="form-left">
                                    <h2>Data Pribadi</h2>
                                    <hr />
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Nama Depan</label>
                                                <input type="text" placeholder="Alfian" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Nama Belakang</label>
                                                <input type="text" placeholder="Yopiangga" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="text" placeholder="user@gmail.com" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>No Telephone</label>
                                                <input type="text" placeholder="+62 823 xxxx xxxx" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Sekolah</label>
                                                <input type="text" placeholder="SMKN 1 KEDIRI" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Tahun Lulus</label>
                                                <input type="text" placeholder="2020" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Provinsi</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label>Kota / Kabupaten</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Alamat</label>
                                        <textarea type="text"></textarea>
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
                                                <select name="" id="">
                                                    <option>Nama Universitas</option>
                                                </select>
                                                <select name="" id="">
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
                                                <select name="" id="">
                                                    <option>Nama Universitas</option>
                                                </select>
                                                <select name="" id="">
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