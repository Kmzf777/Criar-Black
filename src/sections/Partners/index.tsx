import "./Partners.css";
import "./Partners-Mobile.css";

import PartnerItem from "../../components/PartnerItem";
import LogoSiteBranco from "../../assets/logo_site_branco.png";

const Partners = () => {
  const slides = [
    LogoSiteBranco,
    LogoSiteBranco,
    LogoSiteBranco,
    LogoSiteBranco,
    LogoSiteBranco,
    LogoSiteBranco,
  ];

  function productScroll() {
    let slider = document.getElementById("slider");
    let next = document.getElementsByClassName("pro-next");
    let prev = document.getElementsByClassName("pro-prev");
    let slide = document.getElementById("slide");
    let item = document.getElementById("slide");

    for (let i = 0; i < next.length; i++) {
      //refer elements by class name

      let position = 0; //slider postion

      prev[i].addEventListener("click", function () {
        //click previos button
        if (position > 0) {
          //avoid slide left beyond the first item
          position -= 1;
          if (!slide) return;
          translateX(position, slide); //translate items
        }
      });

      next[i].addEventListener("click", function () {
        if (slider === null) return;
        if (position >= 0 && position < hiddenItems(slider)) {
          //avoid slide right beyond the last item
          position += 1;
          if (!slide) return;
          translateX(position, slide); //translate items
        }
      });
    }

    function hiddenItems(slider: HTMLElement) {
      //get hidden items
      let items = getCount(item, false);
      let visibleItems = slider.offsetWidth / 210;
      return items - Math.ceil(visibleItems);
    }
  }

  function translateX(position: number, slide: HTMLElement) {
    //translate items
    slide.style.left = position * -210 + "px";
  }

  function getCount(parent: any, getChildrensChildren: any) {
    //count no of items
    let relevantChildren = 0;
    let children = parent.childNodes.length;
    for (let i = 0; i < children; i++) {
      if (parent.childNodes[i].nodeType != 3) {
        if (getChildrensChildren)
          relevantChildren += getCount(parent.childNodes[i], true);
        relevantChildren++;
      }
    }
    return relevantChildren;
  }

  return (
    <section
      className="parceiros"
      id="partners"
      onLoad={() => {
        setTimeout(productScroll, 100);
      }}
    >
      <div className="service-text">
        <h2>
          Nossos <span>Clientes</span>
        </h2>
      </div>

      <div className="slider" id="slider">
        <div className="slide" id="slide">
          {slides.map((slide, pos) => {
            return <PartnerItem key={pos} image={slide} />;
          })}
        </div>
        <div className="slider-control">
          <button className="ctrl-btn pro-prev">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button className="ctrl-btn pro-next">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
