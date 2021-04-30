export const EKLE = "EKLE";
export const TEMIZLE = "TEMIZLE";
export const ISARETLE = "ISARETLE";

export const listeyeEkle = (text) => {
  return { type: EKLE, payload: text };
};

export const isaretle = (id) => {
  return { type: ISARETLE, payload: id };
};

export const temizle = () => {
  return { type: TEMIZLE };
};
/* işlem yapacak olan fonksiyonlarımızı actions içerisindeki index
dosyamızda oluşturup,
reducer içerisinde switch statement'i içerisindeki caselerde bu constanlara göre
döndürülecek stateyi tanımlayıp , uygulamamızı tamamıyla fonksiyonel hale getirmiş olduk */
