# Fon Radar Task

## Environment Variables

Uygulama musteri bilgisi icin Fon Radar API'ini kullanici islemleri icin Auth API'i kullanmaktadir.

Fon Radar API ve asagida bulunan Auth API bilglerinin .env dosyasina eklenmesi gerekmektedir.
`REACT_APP_FONRADAR_API`
`REACT_APP_AUTH_API`=https://fon-radar-task-api.herokuapp.com/api/v1

## Run 

```bash
* clone the project
  git clone https://github.com/osmnfdrcn/TASK-F-RADAR.git
* cd TASK-F-RADAR-main/
   npm install
   npm run start
```

## Kimlik Dogrulama

Kullanicilar login olmadiklari takdirde uygulamanin diger kisimlarina ersemeyeceklerdir. Eger daha once bir hesap olusturlmadiysa oncelikle kullanici kayit olmali ve kayit sonrasi belirtlen email adresine gonderilen link araciligi ile email adresini dogrulamalidir.
Email adresini dogrulanmadigi zaman zarfinda, uygulamaya giris yapilabilecek fakat musteri bilglerinin listelenmesi dsinda musteri olusturmak, degistirme, silme, kullanici profili guncelleme ya da password degisikligigibi herhangi bir fonksiyon kullanilabilir durumda olmayacak, sayfanin sag alt bolumunde email adresinin dogrulanmadigina dair bir uyari gosterilecektir. 

## Fonksiyonalite

Ana sayfada musteri datalarinin listelenmesi, yeni musteri olusturulmasi ve musterilen arasinda arama yapilmasi islevleri yer alir. Musteri listesinin goruntulendigi tablonun basliklarina tiklanarak artan veya azalan sekilde siralama yapilailir. Varsayilan olarak ilk siralama artan olarak yapilmaktadir.
Yeni musteri olusturma butonuna tiklanmasi durumunda bir modal acilacak, girilen verilere uygun olarak yeni musteri eklenecektir.
Arama bolumune dsaglanacak girdiye gore musteriler aranabilecektir.

Musteri listesini iceren tabloda herhangi bir hucreye tiklandiginda, musteri detaylarinin gorulebildigi, musteri bilgilerinin guncellebildigi ve istendigi takdirde musteri kaydinin silinebildigi musteri detay sayfasina yonlenilecektir. Musteri silinmek istendiginde ilgili butona tiklanmali ve acilan modalda islemin onaylanmasi gerekmektedir.

En uste sabit olarak yer alan navbar'da kullanici ikonuna tiklandiginda kullanici profili ile ilgili bir menu acilacak; buradan kullanici profilinin guncellenmesi, sifre degisikligi yada cikis islemi yapilabilinecektir. Sifre degisikli yapildigi takdirde, kullanici otomatik olarak cikis yapacak ve tekrar giris yapmasi gerekecektir.

## Form Dogrulama

Uygulamada, login, register, musteri olusturma, guncelleme, hesap bilgisi guncelleme, sifre degisikligi olmak uzere alti adet form yer almakta olup validasyon bilglerine utils/formSchemas altindaki sema bilglerinden erisilebilir.

## Lokalizasyon

Uygulama Ingilizce, Turkce, Cince ve Ibranice olmak uzere 4 dil desteklemektedir. Ibranice secildi takdirde dilin sagdan sola dogru yazilmesi nedeni ile sayfa dizayni da buna uygun olarak degismektedir.


## Auth API

### Login

```http
  GET /users/login
```

| Parameter | Type     | Description                                               |
| :-------- | :------- | :-------------------------------------------------------- |
| `email`    | `string` | **Required**                                             |
| `password`  | `string` | **Required**                                           |


### Logout

```http
  POST /users/logout
```

| Parameter | Type     | Description                  |
| :-------- | :------- | :--------------------------- |
| `id`      | `string` | **Required**. id of the user |

### Register 

```http
  POST /users/register
```

| Parameter  | Type     | Description                            |
| :--------- | :------- | :------------------------------------- |
| `name`     | `string` | **Required**. Name of the user         |
| `lastname` | `string` | **Required**. Lastname of the user     |
| `email`    | `string` | **Required**. email of the user        |
| `password` | `string` | **Required**. password age of the user |



### Update

```http
  PATCH /api/v1/me
```

| Parameter          | Type     | Description                                      |
| :----------------- | :------- | :----------------------------------------------- |
| `name`             | `string` | **Not Required**. Name of the user               |
| `lastname`         | `string` | **Not Required**. Lastame of the user            |
| `email`            | `string` | **Not Required**. Email of the user              |
| `password`         | `string` | **Not Required**. Password of the user           |
| `city`             | `string` | **Not Required**. City of the user               |
| `country`          | `string` | **Not Required**. Country of the user            |

|

## License

[MIT](https://choosealicense.com/licenses/mit/)
