import HomeCard from "../../cards/HomeCard";
import { homeData } from "./homeData";
import classes from "./index.module.css";
import { CgArrowBottomRight } from "react-icons/cg";
import { data } from "./data";
import UseCard from "../../cards/UseCard";
import kobia from "/src/assets/kobia.png";
import construction from "/src/assets/construction.png";
import Group from "/src/assets/Group.png";
import FrameS from "/src/assets/FrameS.png";
import FrameC from "/src/assets/FrameC.png";
import FrameQ from "/src/assets/FrameQ.png";
import FrameM from "/src/assets/FrameM.png";
import FrameL from "/src/assets/FrameL.png";
import FrameB from "/src/assets/FrameB.png";
import img_main from "/src/assets/img_main.png";
import abma from "/src/assets/abma.png";
import auditor from "/src/assets/auditor.png";
import kargo from "/src/assets/kargo.png";
import kobia1 from "/src/assets/kobia1.png";
import cdek from "/src/assets/cdek.png";
import { FaArrowTrendUp } from "react-icons/fa6";
import Slider from "react-slick";
import { slide } from "./slide";

export default function Home() {
  return (
    <>
      <section className={classes.home}>
        <div className={classes.home_title}>
          <div className="container">
            <div className="row">
              <div className={classes.home_about}>
                <div>
                  <h1>Rəqəmsal dünya üçün innovativ həllər</h1>
                </div>
                <div className={classes.home_btn}>
                  <p>
                    Biz istənilən mövzuda və mürəkkəblikdə layihələr icra
                    edirik! Veb-saytlar yaradır və digər rəqəmsal həllər təklif
                    edirik!
                  </p>
                  <button>
                    <span>Daha ətraflı</span>{" "}
                    <CgArrowBottomRight className={classes.icon} />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className={classes.home_container}>
              <div className={classes.home_main}>
                <p>
                  Əsas məqsədimiz uzunmüddətli əməkdaşlıqdır. Bu səbəbdən biz
                  kəmiyyət üçün sayt yaratmağa çalışmırıq. Bizim üçün vacibdir
                  ki, bizimlə işləmək müştəriyə qazanc gətirsin və mümkün qədər
                  müştərilərimiz işi asanlaşdırılsın.
                </p>
                <h1>Brendinizi bizim komandaya əmanət edin!</h1>
              </div>
              {homeData.map((item) => (
                <HomeCard {...item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={classes.card_selected}>
        <div className="container">
          <div className="row">
            <div className={classes.useCard_title}>
              <div>
                <p>Biz nə edirik?</p>
                <span>Xidmətlərimiz</span>
              </div>
              <div>
                <p className={classes.theme}>
                  Biz istənilən mövzuda və mürəkkəblikdə layihələr icra <br />{" "}
                  edirik. Veb-saytlar yaradır və digər rəqəmsal həllər <br />{" "}
                  təklif edirik!
                </p>
              </div>
            </div>
            <div className={classes.useCard}>
              {data.map((item) => (
                <UseCard {...item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={classes.construction}>
        <div className="container">
          <div className="row">
            <div>
              <div className={classes.construction_title}>
                <div>
                  <h4>İndiyə qədər nə etmişik?</h4>
                  <p>Hər bir layihə üçün individual yanaşıb, layihəyə </p>
                  <p>uyğun texnologiyalardan istifadə edilir.</p>
                </div>
                <div className="d-none d-lg-block">
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p className={classes.more}>Daha çoxu</p>
                </div>
              </div>
              <div className={classes.card_construction}>
                <div className={classes.gradient}>
                  <h3>Hər hansı layihəniz varmı? </h3>
                  <span>Formu tərtib edib bizə müraciət edin.</span>
                  <p>
                    Biz açıq ünsiyyət tərəfdarıyıq! Əgər layihəsiz barədə
                    ətraflı təsvir varsa, formanı tərtib edin. Biz qeyri- mümkün
                    olanı mümkünə çeviririk. Fikirlərinizi bölüşmək və ya bizə
                    sual vermək istəyirsinizsə, bizə zəng edin və ya bizə e-poçt
                    göndərin..
                  </p>
                  <button>Müraciət et</button>
                </div>

                <div>
                  <div className={classes.img_div}>
                    <img src={construction} alt="" />
                  </div>

                  <div className={classes.info_card}>
                    <p>
                      Tikinti layihələri ilə virtual tanışlıq, mənzil seçimi,
                      layihələrlə görüntü ilə tanışlıq.
                    </p>
                    <div className={classes.card_footer}>
                      <p>SR Construction</p>
                      <button>
                        Ətraflı oxu
                        <img src={Group} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={classes.img_div}>
                    <img src={kobia} alt="" />
                  </div>
                  <div className={classes.info_card}>
                    <p>
                      İnvestor axtarışı, françayzinq investisiya təkliflərinin
                      həyata keçirilməsi.
                    </p>
                    <div className={classes.card_footer}>
                      <p>KOB İnvestisiya Portalı</p>
                      <button>
                        Ətraflı oxu
                        <img src={Group} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${classes.more_btn} col-lg-6 d-lg-none`}>
                <p className={classes.more}>Daha çoxu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.it_texno}>
        <div className="container">
          <div className="row">
            <div className={classes.texnology}>
              <h3>Texnologiyalarımız</h3>
              <p>Müasir texnologiyalardan istifadə etmək işimizin</p>
              <p>əsas prinsipidir.</p>
            </div>
            <div className={classes.slider}>
              <Slider {...slide}>
                <div>
                  <img src={FrameS} alt="" />
                </div>
                <div>
                  <img src={FrameC} alt="" />
                </div>
                <div>
                  <img src={FrameQ} alt="" />
                </div>
                <div>
                  <img src={FrameM} alt="" />
                </div>
                <div>
                  <img src={FrameL} alt="" />
                </div>
                <div>
                  <img src={FrameB} alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.it_services}>
        <div className="container">
          <div className="row">
            <div className={classes.it_title}>
              <h4>Ən yaxşı IT Xidməti</h4>
              <p>Hər bir biznes sahəsi üçün</p>
            </div>
            <div className={classes.it_list}>
              <p>Turizm</p>
              <p>E-ticarət</p>
              <p>Sağlamliq və Fitnes</p>
              <p>Təhsil</p>
              <p>Qida & İçki</p>
              <p>Maliyyə & Bank</p>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.quality}>
        <div className="container">
          <div className="row">
            <div className={classes.quality_title}>
              <div>
                <h4>Statistikamız keyfiyyətimizin göstəricisidir.</h4>
                <p>
                  Bir neçə il ərzində gördüyümüz işlərlə bizə müraciət edən{" "}
                </p>
                <p>müştərilərimizi məmnun etməyi bacardıq.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={classes.section}>
            <div className={classes.card_text}>
              <div className={classes.quality_card}>
                <div className={classes.section_icon}>
                  <span>
                    <FaArrowTrendUp className={classes.icon} />
                  </span>
                </div>
                <div className={classes.section_data}>
                  <h3>İcra etdiyimiz layihə sayı</h3>
                  <p>
                    Bu illər ərzində 80-dən çox layihə yerinə yetirərək bazarda
                    dəyərimizə dəyər qatdıq, yüksək keyfiyyətli işlərimizlə daha
                    çox tanınmağa səbəb olduq.
                  </p>
                </div>
              </div>
              <div className={classes.quality_card}>
                <div className={classes.section_icon}>
                  <span>
                    <FaArrowTrendUp className={classes.icon} />
                  </span>
                </div>
                <div className={classes.section_data}>
                  <h3>İstifadə edilmiş kod sətri</h3>
                  <p>
                    Bu günə qədər icra etdiyimiz layihələr üçün ümumilikdə 793-a
                    yaxın kod sətri istifadə edilib, bu da işimizin kəmiyyət
                    göstəricisi olaraq yüksək bir rəqəmdir.
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.card_text}>
              <div className={classes.quality_card}>
                <div className={classes.section_icon}>
                  <span>
                    <FaArrowTrendUp className={classes.icon} />
                  </span>
                </div>
                <div className={classes.section_data}>
                  <h3>Məmnun müştəri sayı</h3>
                  <p>
                    Brendini bizə əmanət edən 60-dan çox müştərinin bizdən
                    məmnun şəkildə ayrılması üçün əlimizdən gələnin ən yaxşısını
                    etməyə diqqət göstərdik.
                  </p>
                </div>
              </div>
              <div className={classes.quality_card}>
                <div className={classes.section_icon}>
                  <span>
                    <FaArrowTrendUp className={classes.icon} />
                  </span>
                </div>
                <div className={classes.section_data}>
                  <h3>Bu işlərə gedən zaman</h3>
                  <p>
                    Rəqəmsal agentlik olaraq keyfiyyətcə yüksək layihələrimizlə,
                    onlarla məmnun müştərilərimizlə 5 il ərzində tanınan
                    şirkətlərdən biri olmağı bacardıq.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={img_main} alt="" className="w-100" />
        </div>
      </section>

      <section className={classes.it_texno}>
        <div className="container">
          <div className="row">
            <div className={classes.texnology}>
              <h3>Müştərilərimiz</h3>
              <p>Bizə müraciət edən müştərilərimizi bizdən məmnun</p>
              <p>şəkildə ayrılmaları əsas prinspimizdir.</p>
            </div>
            <div className={classes.slider}>
              <Slider {...slide}>
                <div>
                  <img src={abma} alt="" />
                </div>
                <div>
                  <img src={auditor} alt="" />
                </div>
                <div>
                  <img src={kargo} alt="" />
                </div>
                <div>
                  <img src={kobia1} alt="" />
                </div>
                <div>
                  <img src={cdek} alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
