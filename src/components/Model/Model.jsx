import { useEffect, useState } from 'react';
import './Model.scss';
import trustpilot from '../../assets/trustpilot.svg';
import big1 from '../../assets/model/big1.jpg';
import big2 from '../../assets/model/big2.jpg';
import big3 from '../../assets/model/big3.jpg';
import big4 from '../../assets/model/big4.jpg';
import small1 from '../../assets/model/small1.jpg';
import small2 from '../../assets/model/small2.jpg';
import small3 from '../../assets/model/small3.jpg';
import small4 from '../../assets/model/small4.jpg';
import star from '../../assets/model/star.svg';
import starfill from '../../assets/model/star-fill.svg';
import CustomSelect from '../CustomSelect/CustomSelect';
import axios from 'axios';

const Model = () => {
  const [selectedImage, setSelectedImage] = useState(big1);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState({
    color: 'black',
    size: 2,
  });

  const colorSelectChange = (selectedColor) => {
    setSelectedOptions({ ...selectedOptions, color: selectedColor });
  };

  const sizeSelectChange = (selectedSize) => {
    setSelectedOptions({ ...selectedOptions, size: selectedSize });
  };

  const handleSmallImageClick = (newImage) => {
    setIsImageVisible(false);

    setTimeout(() => {
      setSelectedImage(newImage);
      setIsImageVisible(true);
    }, 300);
  };

  const smallImages = [
    { small: small1, big: big1 },
    { small: small2, big: big2 },
    { small: small3, big: big3 },
    { small: small4, big: big4 },
  ];
  const optionsOne = ['black', 'orange', 'pink', 'yellow'];
  const optionsTwo = [2, 3, 4, 5];

  const stars = [starfill, starfill, starfill, starfill, starfill];

  const handleFakeSubmit = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(selectedOptions);

    console.log('Фейковая отправка данных (в формате JSON):');
    console.log(jsonData);

    window.open('https://youtu.be/gxr8iT_xEeg', '_blank');
  };

  //   Реальная отправка на сервер
  //   const sendSelectedOptionsToServer = async () => {
  //     try {
  //       const serverURL = 'example';
  //       const response = await axios.post(serverURL, selectedOptions);

  //       console.log('Ответ от сервера:', response.data);
  //     } catch (error) {
  //       console.error('Ошибка при отправке данных на сервер:', error);
  //     }
  //   };

  return (
    <section className="model">
      <div className="container">
        <div className="model__header">
          <span className="model__header-left">Excellent 4.8/5</span>
          <img src={trustpilot} alt="trustpilot" />
          <span className="model__header-best">best selling</span>
        </div>

        <div className="model__about">
          <h1 className="model__about-title">Orthopedic Slippers</h1>

          <div className="model__about-pictures pictures">
            <div className="pictures__main">
              <img
                src={selectedImage}
                alt="slippers picture"
                className={`${isImageVisible ? 'show' : ''}`}
              />
            </div>

            <div className="pictures__add">
              {smallImages.map((image, index) => (
                <div
                  className={`pictures__add-pic ${selectedImage == image.big ? 'opacity' : ''}`}
                  key={index}
                  onClick={() => {
                    if (selectedImage !== image.big) {
                      handleSmallImageClick(image.big);
                    }
                  }}>
                  <img src={image.small} alt={`slippers pic ${index}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="model__about-desc">
            <span>Fast Delivery:</span> 2-4 days from SA
          </div>

          <div className="model__about-desc">
            <span>In Stock:</span> Shipping from Johannesburg
          </div>

          <div className="model__about-reviews">
            <div className="model__about-stars">
              {stars.map((star, index) => (
                <div className="model__about-star" key={index}>
                  <img src={star} />
                </div>
              ))}
            </div>
            <span>(10)</span>
          </div>
        </div>

        <form className="model__form" onSubmit={handleFakeSubmit}>
          <div className="model__form-selects">
            <div className="model__form-input">
              <span>color</span>

              <CustomSelect
                optionsOne={optionsOne}
                defaultSelect={'black'}
                onChangeSelect={colorSelectChange}
              />
            </div>

            <div className="model__form-input">
              <span>size</span>

              <CustomSelect
                optionsOne={optionsTwo}
                defaultSelect={2}
                onChangeSelect={sizeSelectChange}
              />
            </div>
          </div>

          <button type="submit" className="model__form-submit">
            buy now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Model;
