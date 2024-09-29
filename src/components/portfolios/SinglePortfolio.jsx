import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css';
import { Link, useNavigate } from 'react-router-dom'

function SinglePortfolio({ portfolio, index, activePortfolios, portfolioRefs }) {

    const [galleryImages, setGalleryImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);

    const navigate = useNavigate();

    const openGallery = (index) => {
        const images = activePortfolios.map((portfolioItem) => ({
            original: portfolioItem.img,
            thumbnail: portfolioItem.img,
            description: portfolioItem.title,
        }));

        setGalleryImages(images);
        setCurrentIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const hanldlePortfolioClick = (portfolio) => {
        navigate(`/project/${portfolio.id}`, {
            state: {
                title: portfolio.title
            }
        })
    }

    return (
        <>
            <div className={`portfolio-item ${portfolio.category} appear`} key={portfolio.id}>
                <div className='portfolio-wrap' ref={el => portfolioRefs.current[index] = el}>
                    <div className='portfolio-img' onClick={() => openGallery(index)}>
                        <img src={portfolio.img} alt={portfolio.title} loading="lazy" />
                    </div>
                    <div className="portfolio-content">
                        <h4>
                            <a href={`/project/${portfolio.id}`} onClick={(e) => {
                                e.preventDefault();
                                hanldlePortfolioClick(portfolio);
                            }}>{portfolio.title}</a>
                        </h4>
                        <p>{portfolio.category}</p>
                        <div className="portfolio-action-btns">
                            <button onClick={() => openGallery(index)} className='single-action-btn'><i className="bi bi-plus"></i></button>
                            <a href={`/project/${portfolio.id}`} onClick={(e) => {
                                e.preventDefault();
                                hanldlePortfolioClick(portfolio);
                            }} className='single-action-btn'><i className="bi bi-link"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}><i className='bi bi-cross'></i></button>
                        <ImageGallery
                            items={galleryImages}
                            startIndex={currentIndex}
                            showThumbnails={true}
                            onSlide={(index) => setCurrentIndex(index)}
                            showFullscreenButton={true}
                            showPlayButton={true}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default SinglePortfolio