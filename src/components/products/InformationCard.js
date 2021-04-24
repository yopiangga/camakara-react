
import banner from './../../assets/images/banner-1.jpg';

export function InformationCard() {
    return (
        <div>
            <section className="information-card">
                <div className="content">
                    <div className="card" id="desktop">
                        <img src={banner} alt="Baner Promosi" />
                    </div>
                </div>
            </section>
        </div>
    )
}