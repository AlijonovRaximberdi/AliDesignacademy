import React, { useState } from "react";
import "./Hero.css";
import "./Hero1.css";
import ImageSlider from "../imgSlide/ImageSlider";
import VideoSlider from "../videoSlider/VideoSlider";

function Hero({ formRef }) {
  const [formData, setFormData] = useState({
    fullname: "",
    age: "",
    phone: "",
    course: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://formspree.io/f/myzjnznp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert("✅ Ma'lumotlar muvaffaqiyatli yuborildi! Tez orada siz bilan bog‘lanamiz.");
      setFormData({
        fullname: "",
        age: "",
        phone: "",
        course: ""
      });
    } else {
      alert("❌ Xatolik yuz berdi. Qaytadan urinib ko‘ring.");
    }
  } catch (error) {
    console.error("Yuborishda xatolik:", error);
    alert("❌ Server bilan bog‘lanishda xatolik.");
  }
};

  return (
    <div>
      <section className="hero">
        <div className="about-container">
          <h2>O‘quv markazimiz haqida</h2>
        </div>

        <div className="hero-text">
          <div className="dck1">
            <img className="ce" src="./ce.png" alt="cert" />
            <p>
              O‘quv markazimiz <strong>2020-yilda</strong> tashkil etilgan
              bo‘lib, shundan buyon yuzlab yoshlarni axborot texnologiyalari,
              dizayn va kompyuter savodxonligi yo‘nalishlarida ta’lim bilan
              ta’minlab kelmoqda. Bizning maqsadimiz — zamonaviy
              texnologiyalarni yoshlar orasida ommalashtirish, ularning ijodiy
              salohiyatini ochish va ularni kelajak kasblariga tayyorlashdir.
            </p><img className="im" src="./target.png" alt="target" />
            
          </div>

          <div className="dck"> 
            <p>
              Kurslarimiz orqali o‘quvchilar <em>dasturlash</em>,{" "}
              <em>grafik dizayn</em>, <em>kompyuter asoslari</em> kabi amaliy va
              dolzarb sohalarda bilim va ko‘nikmalarni egallaydilar. ✅{" "}
              <strong>
                Kursni muvaffaqiyatli yakunlagan o‘quvchilarga maxsus sertifikat
                beriladi
              </strong>
              , bu esa ularning bilimini rasman tasdiqlaydi va kelgusidagi
              o‘qish yoki ish faoliyatida foydali bo‘ladi.
            </p><img className="dc" src="./3d-computer.png" alt="3d pc" />
           
          </div>

          <video controls>
            <source src="./rek.mp4" type="video/mp4" />
            Sizning brauzeringiz video formatini qo‘llab-quvvatlamaydi.
          </video>
          
        </div>

        <ImageSlider />
        <section className="form-section1" >
        
        <p>O'quv markazimiz haqida ko'proq bilmoqchi bo'lsangiz quyidagi qatorlarni to'ldiring. <br /> Biz siz bilan bog‘lanamiz</p>
        

        <form className="contact-form1" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullname"
            placeholder="🖋️Ism Familiyangiz"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="📞Telefon raqamingiz"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <button type="submit">Yuborish</button>
        </form>
      </section>
        <div className="ch"></div>
      </section>

      <section className="course">
        <img className="cap" src="./cap.png" alt="cap" />
        <h1>Kurslarimiz haqida</h1>

        <div className="ks">
          <img src="./scratch.png" alt="" className="scratch" />
          <img className="com" src="./com.png" alt="" />
          <h3>🖥️Kompyuter savodxonligi</h3>
          <button className="button-86" onClick={() => formRef.current.scrollIntoView({ behavior: "smooth" })}>
            Kursga yozilish
          </button>
        </div>
        <div className="gd">
          <img className="gph" src="./gph.png" alt="" />
          <img className="ps" src="./ps.png" alt="" />
          <img className="canva" src="./canva.png" alt="" />
          <h3>✒️Grafik dizayn (Photoshop)</h3>
          <button className="button-86" onClick={() => formRef.current.scrollIntoView({ behavior: "smooth" })}>
            Kursga yozilish
          </button>
        </div>
        <div className="ing">
          <img className="bk" src="./bk.png" alt="" />
          <img className="nb" src="./nb.png" alt="" />
          <h3>📒Ingliz tili</h3>
          <button className="button-86" onClick={() => formRef.current.scrollIntoView({ behavior: "smooth" })}>
            Kursga yozilish
          </button>
        </div>
      </section>

      <div className="free">
        <p className="free-trial-note" >
          O‘quv markazimizda har bir yangi o‘quvchiga 1-soatlik bepul sinov
          darsi taqdim etiladi. <br />
          Bu orqali siz kurs mazmuni, ustozlar sifati va metodikamiz bilan
          bevosita tanishishingiz mumkin. <br ref={formRef}/>
          Bepul darsda qatnashish uchun bizga ismingiz va telefon raqamingizni
          qoldiring 👇!
        </p>
      </div>
 
      <section className="form-section" >
        <h2 className="form-title">Ro‘yxatdan o‘ting</h2>
        <p>Kursda qatnashish va bepul darsga ega bo'lish uchun qatorlarni to'ldiring va yuborish tugmasini bosing. <br /> Biz siz bilan bog‘lanamiz</p>
        

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullname"
            placeholder="🖋️Ism Familiyangiz"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="📅Yoshingiz"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="📞Telefon raqamingiz"
            value={formData.phone}
            onChange={handleChange}
            required
          />
           <select
            name="course"
            value={formData.course}
             onChange={handleChange}
            required
>
            <option value="">📘 Kursni tanlang</option>
            <option value="Kompyuter savodxonligi">🖥️ Kompyuter savodxonligi</option>
            <option value="Grafik dizayn">✒️ Grafik dizayn (Photoshop)</option>
            <option value="Ingliz tili">📒 Ingliz tili</option>
           </select>
          <button type="submit">Yuborish</button>
        </form>
      </section>

      <div className="ch"></div>

      <section className="students">
        <h1>O'quvchilarimiz</h1>
        <div className="st">
          <VideoSlider />
        </div>
      </section>

      <div className="ch"></div>

      <section className="location-section">
        <h2 className="location-title">📍 Bizning manzil</h2>

        <div className="map-container">
          <p className="location-description">
            Farg‘ona viloyati, Marg‘ilon shahri, Ali Dizayn Academy
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1074.5499235793218!2d71.7939854285146!3d40.380350177023686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb85e8ce7e1dd1%3A0xecf31cf2379726a!2sAli%20Dizayn%20Academy!5e0!3m2!1sen!2s!4v1750510045708!5m2!1sen!2s"
            width="80%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bizning manzil"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Hero;
