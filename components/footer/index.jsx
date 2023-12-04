import Link from "next/link";
import React from "react";

import Image from "next/image";

//import img
import appStore from "@/assets/img/app_store_download.webp";
import googlePlay from "@/assets/img/google_play_download.webp";
import huaweiApp from "@/assets/img/huawei_app_gallery_download.webp";
import etbis from "@/assets/img/etbis.webp";
import ssl from "@/assets/img/ssl.webp";
import bitMap from "@/assets/img/bitmap.webp";

//ICONS
import terappin from "@/public/terappinWhite.svg";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-secondaryDark text-white ">
      <div className=" grid gap-14 pt-[6%] px-[5%] pb-[3%]">
        <div className="grid  md:grid-cols-2 lg:grid-cols-6">
          <div className="flex flex-col">
            <h5 className="font-bold mb-5">Terappin</h5>
            <Link href="#howToUse" className="mb-2">
              Nasıl Çalışır?
            </Link>
            <Link href="#aLittleBitAboutUs" className="mb-2">
              Hakkımızda
            </Link>
            <Link href="/" className="mb-2">
              Psikologlarımız
            </Link>
            <Link href="/" className="mb-2">
              Kurumsal
            </Link>
            <Link href="#faq" className="mb-2">
              S.S.S.
            </Link>
            <Link href="/" className="mb-2">
              Testler
            </Link>
            <Link href="/" className="mb-2">
              Blog
            </Link>
            <Link href="/" className="mb-2">
              Terapist Başvurusu
            </Link>
          </div>
          <div className="hidden md:flex flex-col lg:col-span-2">
            <h5 className="font-bold mb-5">Testler</h5>
            <Link href="/" className="mb-2">
              Schutte Duygusal Zeka Ölçeği
            </Link>
            <Link href="/" className="mb-2">
              Beck Depresyon Testi
            </Link>
            <Link href="/" className="mb-2">
              Empati Ölçeği
            </Link>
            <Link href="/" className="mb-2">
              Beyaz Ayı Supresyon Envanteri
            </Link>
            <Link href="/" className="mb-2">
              Warwick - Edinburgh Mental İyi Oluş Ölçeği
            </Link>
            <Link href="/" className="mb-2">
              Yeme Tutumu Testi
            </Link>
            <Link href="/" className="mb-2">
              Liebowitz Sosyal Fobi Belirtileri Ölçeği
            </Link>
            <Link href="/" className="mb-2">
              Beck Anksiyete Ölçeği
            </Link>
          </div>
          <div className="flex flex-col ">
            <h5 className="font-bold mb-5">Yasal</h5>
            <Link href="/" className="mb-2">
              Kullanıcı Sözleşmesi
            </Link>
            <Link href="/" className="mb-2">
              Çerez ve Gizlilik Politikaları
            </Link>
            <Link href="/" className="mb-2">
              KVKK Aydınlatma Metni
            </Link>
          </div>
          <div className="hidden md:flex md:flex-col gap-2">
            <h5 className="font-bold mb-3">Uygulamayı İndir</h5>
            <Link href="/">
              <Image src={appStore} alt="appstore" />
            </Link>
            <Link href="/">
              <Image src={googlePlay} alt="googleplay" />
            </Link>
            <Link href="/">
              <Image src={huaweiApp} alt="huaweiapp" />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Image src={terappin} alt="terappin" />
            <div className="flex gap-3">
              <Link href="/">
                <BsInstagram />
              </Link>
              <Link href="/">
                <BsTwitter />
              </Link>
              <Link href="/">
                <BsFacebook />
              </Link>
              <Link href="/">
                <BsLinkedin />
              </Link>
              <Link href="/">
                <BsYoutube />
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <Image src={etbis} className="hidden md:block" alt="etbis"/>
              <p>Copyright © 2023</p>
              <p>Terappin Teknoloji A.Ş. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 ">
          <Image src={ssl} alt="ssl"/>
          <Image className="justify-self-end" src={bitMap} alt="bitmap"/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
