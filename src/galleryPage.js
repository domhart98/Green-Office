import React from 'react'
import './galleryPage.css'

const GalleryPage = () =>{
   
        return(
            <div id="gallery-page">
                {/* Modal Carousel to display enlarged Gallery Image*/}
                <div className="modal fade" id="modalExample" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div id="carouselExample" className="carousel slide" data-bs-interval=
                                'false'>
                                    <div className="carousel-inner">
                                        <button type="button" className="close" data-bs-dismiss="modal">x</button>
                                        <div className="carousel-item active">
                                            <img className="d-block w-100 modal-image modal-image" src='./royal-palm.jpg' alt="First "/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 modal-image" src='./sansevierra.jpg' alt="Second "/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 modal-image" src='./ficus-alii.jpg' alt="Third "/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 modal-image" src="./dracaena-marginata.jpg" alt="Fourth "/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 modal-image" src='./aglaonema-maria.jpg' alt="Fifth "/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 modal-image" src='./anthurium.jpg' alt="Sixth "/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 modal-image" src='./spider.jpg' alt="Seventh "/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 modal-image" src='./croton.jpg' alt="Eighth "/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 modal-image" src='./dracaena-fragrans-deremensis.jpg' alt="Ninth "/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 modal-image" src='./ficus-lyrata.jpg' alt="Tenth "/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 modal-image" src='./dracaena-fragrans.jpg' alt="Eleventh "/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 modal-image" src='./pothos.jpg' alt="Twelvth "/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 modal-image" src='./bamboo-palm.jpg' alt="Thirteenth "/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 modal-image" src='./scheflera.jpg' alt="Fourteenth "/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 modal-image" src='./philodendron-erubescens.jpg' alt="Fifteenth "/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 modal-image" src='./ficus-benjamina-weeping-fig.jpg' alt="Sixteenth "/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        
                <div className="row gx-0" id="gallery">
                    <div className="card bg-image col-xs-12 col-sm-6 col-lg-3">
                        <img width="300" height="300" className="card-img" src={'./royal-palm.jpg'} alt="Royal Palm"/>
                        <div className="card-img-overlay">
                            <button className="modal-toggle" type="button" data-bs-toggle="modal" data-bs-target="#modalExample"><img className="" src="./fullscreen-icon-3.png" alt="" data-bs-target="#carouselExample" data-bs-slide-to="0" width="30px" height="30px"/></button>
                        </div>
                        <div className="card-body">
                            <h6 className="card-title common-name">Royal Palm</h6><hr/><hr/>
                            <p className="scientific-name">Roystonea Regia</p>
                        </div>
                    </div>
                    <div className="card bg-image col-xs-12 col-sm-6 col-lg-3">
                        <img width="300" height="300" className="card-img" src={'./sansevierra.jpg'} alt="Sansevierra" data-bs-target="#carouselExample" data-bs-slide-to="1"/>
                        <div className="card-img-overlay">
                            <button className="modal-toggle" type="button" data-bs-toggle="modal" data-bs-target="#modalExample"><img className="" src="./fullscreen-icon-3.png" alt="" data-bs-target="#carouselExample" data-bs-slide-to="0" width="30px" height="30px"/></button>
                        </div>
                        <div className="card-body">
                            <h6 className="card-title">Snake Plant</h6><hr/><hr/>
                            <p className="scientific-name">Sansevierra Trifasciata</p>
                        </div>
                    </div>
                    <div className="card bg-image col-xs-12 col-sm-6 col-lg-3">
                        <img width="300" height="300" className="card-img" src={'./ficus-alii.jpg'} alt="Ficus Maclellandii"/>
                        <div className="card-img-overlay">
                            <button className="modal-toggle" type="button" data-bs-toggle="modal" data-bs-target="#modalExample"><img className="" src="./fullscreen-icon-3.png" alt="" data-bs-target="#carouselExample" data-bs-slide-to="0" width="30px" height="30px"/></button>
                        </div><div className="card-body">
                            <h6>Banana Leaf Fig</h6><hr/>
                            <p className="scientific-name">Ficus Maclellandii</p>
                        </div>
                    </div>
                    <div className="card bg-image col-xs-12 col-sm-6 col-lg-3">
                        <img width="300" height="300" className="card-img" src={'./dracaena-marginata.jpg'} alt="Dracaena Marginiata"/>
                        <div className="card-img-overlay">
                            <button className="modal-toggle" type="button" data-bs-toggle="modal" data-bs-target="#modalExample"><img className="" src="./fullscreen-icon-3.png" alt="" data-bs-target="#carouselExample" data-bs-slide-to="0" width="30px" height="30px"/></button>
                        </div><div className="card-body">
                            <h6>Dragon Tree</h6><hr/>
                            <p className="scientific-name">Dracaena Marginiata</p>
                        </div>
                    </div>
                </div>
                <div className="row gx-0">
                    <div className="card bg-image col-xs-12 col-sm-6 col-lg-3">
                        <img width="300" height="400" className="card-img" src={'./aglaonema-snowwhite.jpg'} alt="Aglaonema"/>
                        <div className="card-img-overlay">
                            <button className="modal-toggle" type="button" data-bs-toggle="modal" data-bs-target="#modalExample"><img className="" src="./fullscreen-icon-3.png" alt="" data-bs-target="#carouselExample" data-bs-slide-to="0" width="30px" height="30px"/></button>
                        </div><div className="card-body">
                            <h6>Chinese Evergreen</h6><hr/>
                            <p className="scientific-name">Aglaonema Maria</p>
                        </div>
                    </div>
                    <div className="card bg-image col-xs-12 col-sm-6 col-lg-3">
                        <img width="300" height="400" className="card-img" src={'./anthurium.jpg'} alt="Anthurium"/>
                        <div className="card-img-overlay">
                            <button className="modal-toggle" type="button" data-bs-toggle="modal" data-bs-target="#modalExample"><img className="" src="./fullscreen-icon-3.png" alt="" data-bs-target="#carouselExample" data-bs-slide-to="0" width="30px" height="30px"/></button>
                        </div><div className="card-body">
                            <h6>Flamingo Lily</h6><hr/>
                            <p className="scientific-name">Anthurium Andraeanum</p>
                        </div>
                    </div>
                    <div className="card bg-image col-xs-12 col-sm-6 col-lg-3">
                        <img width="300" height="400" className="card-img" src={'./spider.jpg'} alt="Spider"/>
                        <div className="card-img-overlay">
                            <button className="modal-toggle" type="button" data-bs-toggle="modal" data-bs-target="#modalExample"><img className="" src="./fullscreen-icon-3.png" alt="" data-bs-target="#carouselExample" data-bs-slide-to="0" width="30px" height="30px"/></button>
                        </div><div className="card-body">
                            <h6>Spider Plant</h6><hr/>
                            <p className="scientific-name">Chlorophytum Comosum</p>
                        </div>
                    </div>
                    <div className="card bg-image col-xs-12 col-sm-6 col-lg-3">
                        <img width="300" height="400" className="card-img" src={'./croton.jpg'} alt="Croton"/>
                        <div className="card-img-overlay">
                            <button className="modal-toggle" type="button" data-bs-toggle="modal" data-bs-target="#modalExample"><img className="" src="./fullscreen-icon-3.png" alt="" data-bs-target="#carouselExample" data-bs-slide-to="0" width="30px" height="30px"/></button>
                        </div><div className="card-body">
                            <h6>Croton Plant</h6><hr/>
                            <p className="scientific-name">Codiaeum Variegatum</p>
                        </div>
                    </div>
                </div>
                <div className="row gx-0">
                    <div className="card bg-image col-xs-12 col-sm-6 col-lg-3">
                        <img width="300" height="400" className="card-img" src={'./dracaena-fragrans-deremensis.jpg'} alt="Dracaena Deremensis"/>
                        <div className="card-img-overlay">
                            <button className="modal-toggle" type="button" data-bs-toggle="modal" data-bs-target="#modalExample"><img className="" src="./fullscreen-icon-3.png" alt="" data-bs-target="#carouselExample" data-bs-slide-to="0" width="30px" height="30px"/></button>
                        </div><div className="card-body">
                            <h6>Corn Plant</h6><hr/>
                            <p className="scientific-name">Dracaena Fragrans (Deremensis)</p>
                        </div>
                    </div>
                    <div className="card bg-image col-xs-12 col-sm-6 col-lg-3">
                        <img width="300" height="400" className="card-img" src={'./ficus-lyrata.jpg'} alt="Ficus Lyrata"/>
                        <div className="card-img-overlay">
                            <button className="modal-toggle" type="button" data-bs-toggle="modal" data-bs-target="#modalExample"><img className="" src="./fullscreen-icon-3.png" alt="" data-bs-target="#carouselExample" data-bs-slide-to="0" width="30px" height="30px"/></button>
                        </div><div className="card-body">
                            <h6 className="card-title">Banjo Fig</h6><hr/>
                            <p className="scientific-name">Ficus Lyrata</p>
                        </div>
                    </div>
                    <div className="card bg-image col-xs-12 col-sm-6 col-lg-3">
                        <img width="300" height="400" className="card-img" src={'./dracaena-fragrans.jpg'} alt="Dracaena Fragrans"/>
                        <div className="card-img-overlay">
                            <button className="modal-toggle" type="button" data-bs-toggle="modal" data-bs-target="#modalExample"><img className="" src="./fullscreen-icon-3.png" alt="" data-bs-target="#carouselExample" data-bs-slide-to="0" width="30px" height="30px"/></button>
                        </div><div className="card-body">
                            <h6>Corn Plant</h6><hr/>
                            <p className="scientific-name">Dracaena Fragrans</p>
                        </div>
                    </div>
                    <div className="card bg-image col-xs-12 col-sm-6 col-lg-3">
                        <img width="300" height="400" className="card-img" src={'./pothos.jpg'} alt="Pothos"/>
                        <div className="card-img-overlay">
                            <button className="modal-toggle" type="button" data-bs-toggle="modal" data-bs-target="#modalExample"><img className="" src="./fullscreen-icon-3.png" alt="" data-bs-target="#carouselExample" data-bs-slide-to="0" width="30px" height="30px"/></button>
                        </div><div className="card-body">
                            <h6>Devil's Ivy</h6><hr/>
                            <p className="scientific-name">Pothos</p>
                        </div>
                    </div>
                </div>
                <div className="row gx-0">
                    <div className="card bg-image col-xs-12 col-sm-6 col-lg-3">
                    <img width="300" height="400" className="card-img" src={'./bamboo-palm.jpg'} alt="Bamboo Palm"/>
                        <div className="card-img-overlay">
                            <button className="modal-toggle" type="button" data-bs-toggle="modal" data-bs-target="#modalExample"><img className="" src="./fullscreen-icon-3.png" alt="" data-bs-target="#carouselExample" data-bs-slide-to="0" width="30px" height="30px"/></button>
                        </div><div className="card-body">
                            <h6>Bamboo Palm</h6><hr/>
                            <p className="scientific-name">Chamaedorea Seifrizii </p>
                        </div>
                    </div>
                    <div className="card bg-image col-xs-12 col-sm-6 col-lg-3">
                        <img width="300" height="400" className="card-img" src={'./scheflera.jpg'} alt="Scheflera"/>
                        <div className="card-img-overlay">
                            <button className="modal-toggle" type="button" data-bs-toggle="modal" data-bs-target="#modalExample"><img className="" src="./fullscreen-icon-3.png" alt="" data-bs-target="#carouselExample" data-bs-slide-to="0" width="30px" height="30px"/></button>
                        </div><div className="card-body">
                            <h6>Umbrella Plant</h6><hr/>
                            <p className="scientific-name">Scheflera Arboricola</p>
                        </div>
                    </div>
                    <div className="card bg-image col-xs-12 col-sm-6 col-lg-3">
                        <img width="300" height="400" className="card-img" src={'./philodendron-erubescens.jpg'} alt="Philodendron Erubescens"/>
                        <div className="card-img-overlay">
                            <button className="modal-toggle" type="button" data-bs-toggle="modal" data-bs-target="#modalExample"><img className="" src="./fullscreen-icon-3.png" alt="" data-bs-target="#carouselExample" data-bs-slide-to="0" width="30px" height="30px"/></button>
                        </div><div className="card-body">
                            <h6>Blushing Philodendron</h6><hr/>
                            <p className="scientific-name">Philodendron Erubescens</p>
                        </div>
                    </div>
                    <div className="card bg-image col-xs-12 col-sm-6 col-lg-3">
                        <img width="300" height="400" className="card-img" src={'./ficus-benjamina-weeping-fig.jpg'} alt="Ficus Benjamina"/>
                        <div className="card-img-overlay">
                            <button className="modal-toggle" type="button" data-bs-toggle="modal" data-bs-target="#modalExample"><img className="" src="./fullscreen-icon-3.png" alt="" data-bs-target="#carouselExample" data-bs-slide-to="0" width="30px" height="30px"/></button>
                        </div><div className="card-body">
                            <h6>Weeping Fig</h6><hr/>
                            <p className="scientific-name">Ficus Benjamina</p>
                        </div>
                    </div>
                </div>
                <div id="bottom"></div>
            </div>
        )
    
}


export default GalleryPage;