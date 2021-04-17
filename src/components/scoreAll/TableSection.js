

export function TableSection() {
    return(
        <div className="table-section">
            <div className="content">
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th className="rank">Rank</th>
                                <th>Nama</th>
                                <th>Universitas</th>
                                <th>Prodi</th>
                                <th className="skor">Skor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Alfian Prisma Yopiangga</td>
                                <td>PENS</td>
                                <td>Teknik Informatika</td>
                                <td className="skor">789</td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}